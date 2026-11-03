import { LocalStorageService } from '@/storages/local_storage_service';
import { URLS, USE_SEED_AUTH, USE_SEED_INVESTMENTS } from '../config';
import * as seed from '@/seeders/api';
import { UserType } from '@/types/UserType';
import { deleteAllNotificationsIndexDb } from '@/storages/indexed_db_service';
import { AuthResponse } from '@/types';
import { getCurrencyRates } from './currencies';
import { usdToStorage } from '@/utils/invest_helper';

export type ProfileUpdate = Partial<
  Pick<UserType, 'currency' | 'full_name' | 'pseudo' | 'email' | 'profil'>
>;

function clearSession() {
  LocalStorageService.clearData();
  deleteAllNotificationsIndexDb().catch(() => undefined);
}

/** Retire le token du client renvoyé par l'API (il est stocké à part). */
function storeClient(client: UserType & { access_token?: string }): UserType {
  const { access_token, ...rest } = client;
  if (access_token) LocalStorageService.saveToken(access_token);
  // Tant que les investissements sont simulés, on y rattache les données seeder.
  return USE_SEED_INVESTMENTS ? seed.attachSeedData(rest) : rest;
}

export async function withStorageBalances(client: UserType): Promise<UserType> {
  const rates = (await getCurrencyRates()).rates;
  return {
    ...client,
    activeBalance: usdToStorage(client.activeBalance ?? 0, rates),
    availableBalance: usdToStorage(client.availableBalance ?? 0, rates),
  };
}

/** Profil de l'investisseur connecté (`GET /user`). */
export async function getUser(): Promise<UserType | null> {
  if (USE_SEED_AUTH) return seed.getUser();
  if (typeof window === 'undefined') return null;

  const token = LocalStorageService.getToken();
  if (!token) return null;

  const response = await fetch(URLS.GET_USER, {
    headers: { Accept: 'application/json', Authorization: token },
  });
  if (response.status === 401 || response.status === 403) {
    clearSession();
    return null;
  }
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const json = (await response.json()) as AuthResponse;
  if (!json.etat || !json.result?.client) {
    clearSession();
    return null;
  }
  return withStorageBalances(storeClient(json.result.client));
}

/** Mise à jour du profil (`PUT /user`). */
export async function updateUser(item: ProfileUpdate): Promise<AuthResponse> {
  if (USE_SEED_AUTH) return seed.updateUser(item);

  const token = LocalStorageService.getToken();
  const response = await fetch(URLS.GET_USER, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const message = errorData?.message;
    return {
      etat: false,
      error: [
        Array.isArray(message)
          ? message.join(' ')
          : message || 'Impossible de mettre à jour le profil',
      ],
    };
  }

  const data = (await response.json().catch(() => ({}))) as AuthResponse;
  if (data.etat === false) return data;

  // La réponse du PUT n'est pas documentée : on relit le profil à jour.
  const client = data.result?.client
    ? await withStorageBalances(storeClient(data.result.client))
    : await getUser();
  if (!client)
    return { etat: false, error: ['Session expirée, reconnectez-vous'] };
  LocalStorageService.saveUser(client);
  return { etat: true, message: data.message, result: { client } };
}

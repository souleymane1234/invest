import { LocalStorageService } from '@/storages/local_storage_service';
import { AuthResponse } from '@/types';
import { URLS, USE_SEED_AUTH, USE_SEED_INVESTMENTS } from '../config';
import * as seed from '@/seeders/api';
import { withStorageBalances } from './getUser';

export type AccountCheck = {
  /** `null` si la réponse ne permet pas de savoir si le numéro a un compte. */
  hasAccount: boolean | null;
  /** Compte suspendu temporairement après des codes erronés. */
  isLocked: boolean;
  message?: string;
};

async function errorMessage(response: Response, fallback: string) {
  const data = await response.json().catch(() => null);
  const message = data?.message ?? data?.error;
  if (Array.isArray(message)) return message.join(' ');
  return typeof message === 'string' && message ? message : fallback;
}

async function postJson(url: string, body: unknown, fallbackError: string) {
  const token =
    typeof window !== 'undefined' ? LocalStorageService.getToken() : null;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
    body: JSON.stringify(body),
  });
  if (!response.ok)
    throw new Error(await errorMessage(response, fallbackError));
  return response.json();
}

/** Étape 1 : le numéro a-t-il un compte ? Aucun SMS n'est envoyé. */
export async function checkAccount(
  phoneNumber: string,
  referralCode?: string,
): Promise<AccountCheck> {
  const json = USE_SEED_AUTH
    ? await seed.requestAuthentication(phoneNumber, referralCode)
    : await postJson(
        URLS.AUTHENTICATION,
        { phone_number: phoneNumber, ...(referralCode && { referralCode }) },
        'Impossible de vérifier ce numéro',
      );
  const isNewAccount = json?.result?.isNewAccount;
  return {
    hasAccount: typeof isNewAccount === 'boolean' ? !isNewAccount : null,
    isLocked: json?.result?.isLocked === true,
    message: json?.message,
  };
}

/**
 * Étape 2 : connexion avec le code d'accès.
 * Numéro inconnu : le compte est créé avec ce code.
 */
export async function loginWithAccessCode(
  phoneNumber: string,
  accessCode: string,
  referralCode?: string,
): Promise<AuthResponse> {
  const data: AuthResponse = USE_SEED_AUTH
    ? await seed.verifyAuthentication(phoneNumber, accessCode, referralCode)
    : await postJson(
        URLS.VERIFY_AUTHENTICATION,
        {
          phone_number: phoneNumber,
          otp: accessCode,
          ...(referralCode && { referralCode }),
        },
        'Code d’accès incorrect',
      );

  if (data.etat === undefined) data.etat = !!data.result?.client;
  if (
    data.etat &&
    data.result?.client?.access_token &&
    typeof window !== 'undefined'
  ) {
    const { access_token, ...rest } = data.result.client;
    LocalStorageService.saveToken(access_token);
    // Investissements encore simulés : on rattache les données seeder du compte.
    const client =
      USE_SEED_INVESTMENTS && !USE_SEED_AUTH ? seed.attachSeedData(rest) : rest;
    data.result.client = USE_SEED_AUTH
      ? client
      : await withStorageBalances(client);
  }
  return data;
}

/** Changer son code d'accès (utilisateur connecté). */
export async function changeAccessCode(
  currentCode: string,
  newCode: string,
): Promise<AuthResponse> {
  if (USE_SEED_AUTH) return seed.changeAccessCode(currentCode, newCode);

  const token = LocalStorageService.getToken();
  const response = await fetch(URLS.ACCESS_CODE, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
    body: JSON.stringify({ currentOtp: currentCode, newOtp: newCode }),
  });
  if (!response.ok) {
    throw new Error(
      await errorMessage(response, 'Impossible de changer le code'),
    );
  }
  const data = await response.json().catch(() => ({}));
  return {
    etat: data?.etat ?? true,
    message: data?.message,
    result: data?.result,
  };
}

export async function createAnonymousUser(): Promise<AuthResponse> {
  if (USE_SEED_AUTH) return seed.createAnonymousUser();

  const data: AuthResponse = await postJson(
    URLS.ANONYMOUS_USER,
    {},
    'Impossible de créer le compte',
  );
  if (data.etat && typeof window !== 'undefined') {
    const { access_token, ...rest } = data.result.client;
    LocalStorageService.saveToken(access_token);
    LocalStorageService.saveUser(rest);
    data.result.client = rest;
  }
  return data;
}

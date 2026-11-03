import { URLS, USE_SEED_HOUSES } from '../config';
import * as seed from '@/seeders/api';
import { AuthResponse } from '@/types';
import { HouseDetail, Market, TradingHouse } from '@/types/TradingHouseType';
import { LocalStorageService } from '@/storages/local_storage_service';
import { apiRequest } from './request';
import { getCurrencyRates } from './currencies';
import {
  ApiHouseDetail,
  ApiHouseGroup,
  flattenHouseGroups,
  mapInvestorLevel,
  mapMarket,
  mapReview,
  mapTradingHouse,
} from './mapTradingHouse';

type Envelope<T> = { etat: boolean; result: T };

async function ratesMap() {
  return getCurrencyRates();
}

export async function getHouses(): Promise<TradingHouse[]> {
  if (USE_SEED_HOUSES) return seed.getHouses();

  const [json, rates] = await Promise.all([
    apiRequest<Envelope<ApiHouseGroup[]>>(URLS.GET_HOUSES),
    ratesMap(),
  ]);
  if (!json.etat) throw new Error('Impossible de charger les maisons');
  return flattenHouseGroups(json.result ?? [], rates);
}

export async function getHouseById(id: string): Promise<HouseDetail> {
  if (USE_SEED_HOUSES) return seed.getHouseById(id);

  const rates = await ratesMap();
  try {
    const json = await apiRequest<Envelope<ApiHouseDetail>>(
      `${URLS.GET_HOUSES}/${id}`,
    );
    if (!json.etat) throw new Error('Maison introuvable');
    const raw = json.result?.tradingHouse;
    if (!raw?.id) throw new Error('Maison introuvable');
    const reviews = (json.result.ratings ?? [])
      .map(mapReview)
      .filter((item): item is NonNullable<typeof item> => item !== null);
    return {
      house: mapTradingHouse(raw, rates, reviews),
      similar: (json.result.similarTradingHouses ?? [])
        .filter((item) => item?.id && item.id !== raw.id)
        .map((item) => mapTradingHouse(item, rates)),
      investorLevel: mapInvestorLevel(json.result.investorLevel, rates),
    };
  } catch {
    const houses = await getHouses();
    const house = houses.find((item) => item.id === id);
    if (!house) throw new Error('Maison introuvable');
    return {
      house,
      similar: houses.filter((item) => item.id !== id).slice(0, 4),
      investorLevel: null,
    };
  }
}

export type RateHouseInput = {
  rating: number;
  message: string;
};

function apiErrorMessage(data: unknown, fallback: string): string {
  const item =
    data && typeof data === 'object' ? (data as Record<string, unknown>) : {};
  const message = item.message ?? item.error;
  if (Array.isArray(message)) return message.map(String).join(' ');
  if (typeof message === 'string' && message.trim()) return message;
  return fallback;
}

/** Noter une maison dans laquelle on a investi (`POST /trading-house/:id/rating`). */
export async function rateHouse(
  houseId: string,
  payload: RateHouseInput,
): Promise<AuthResponse> {
  if (USE_SEED_HOUSES) return seed.rateHouse(houseId, payload);

  const token = LocalStorageService.getToken();
  if (!token) {
    return { etat: false, error: ['Connectez-vous pour laisser un avis'] };
  }

  const response = await fetch(`${URLS.GET_HOUSES}/${houseId}/rating`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      rating: payload.rating,
      message: payload.message,
    }),
  });
  const json = (await response.json().catch(() => ({}))) as AuthResponse & {
    message?: string | string[];
  };

  if (response.status === 201 || (response.ok && json.etat !== false)) {
    return { etat: true, message: json.message as string, result: json.result };
  }

  return {
    etat: false,
    error: [
      apiErrorMessage(
        json,
        response.status === 403
          ? 'Vous devez avoir investi dans cette maison pour la noter.'
          : 'Impossible de publier votre avis',
      ),
    ],
  };
}

export async function getMarkets(): Promise<Market[]> {
  if (USE_SEED_HOUSES) return seed.getMarkets();

  const json = await apiRequest<Envelope<{ id: string; name: string }[]>>(
    URLS.GET_HOUSE_CATEGORIES,
  );
  if (!json.etat) return [];
  return (json.result ?? [])
    .map(mapMarket)
    .filter((item) => item.id && item.name);
}

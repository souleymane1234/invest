import { URLS, USE_SEED_DATA, USE_SEED_INVESTMENTS, USE_SEED_WALLET } from '../config';
import * as seed from '@/seeders/api';
import { AuthResponse } from '@/types';
import {
  ApiInvestmentStatus,
  INVESTMENT_STATUSES,
  Investment,
  InvestmentDetail,
  InvestmentPayout,
  InvestmentPayouts,
  PayoutState,
  Transaction,
} from '@/types/InvestmentType';
import { LocalStorageService } from '@/storages/local_storage_service';
import {
  expectedGain,
  investmentProgress,
  storageToUsd,
  toInvestmentDetail,
  usdToStorage,
} from '@/utils/invest_helper';
import { planWorkStartDate } from '@/utils/plan_helper';
import { apiRequest } from './request';
import { getHouses } from './houses';
import { getWalletTransactions } from './wallet';
import { getCurrencyRates } from './currencies';

export type InvestPayload = {
  forfaitId: string;
  amount: number;
  houseId?: string;
  planId?: string;
  service?: string;
  numberTel?: string;
  otp?: string;
};

const asRecord = (value: unknown): Record<string, unknown> | null =>
  value && typeof value === 'object'
    ? (value as Record<string, unknown>)
    : null;

const asStatus = (value: unknown): ApiInvestmentStatus => {
  const status = String(value ?? 'ACTIVE').toUpperCase();
  return INVESTMENT_STATUSES.includes(status as ApiInvestmentStatus)
    ? (status as ApiInvestmentStatus)
    : 'ACTIVE';
};

function pickIso(...candidates: unknown[]): string | undefined {
  for (const value of candidates) {
    if (typeof value !== 'string' || !value.trim()) continue;
    if (Number.isFinite(new Date(value).getTime())) return value;
  }
  return undefined;
}

function workDatesFrom(
  item: Record<string, unknown>,
  forfait: Record<string, unknown> | null,
): { subscriptionEndDate?: string; workStartDate?: string } {
  const subscriptionEndDate = pickIso(
    item.subscriptionEndDate,
    forfait?.subscriptionEndDate,
  );
  const explicitStart = pickIso(
    item.workStartDate,
    item.workStartedAt,
    forfait?.workStartDate,
  );
  const computed = planWorkStartDate({
    subscriptionEndDate,
    maturityDate: pickIso(
      item.maturityDate,
      item.endDate,
      forfait?.maturityDate,
    ),
    durationDays: Number(
      item.workDurationDays ?? forfait?.workDurationDays ?? 0,
    ),
  });
  return {
    subscriptionEndDate,
    workStartDate: explicitStart ?? computed?.toISOString(),
  };
}

function apiErrorMessage(data: unknown, fallback: string): string {
  const item = asRecord(data) ?? {};
  const message = item.message ?? item.error;
  if (Array.isArray(message)) return message.map(String).join(' ');
  if (typeof message === 'string' && message.trim()) return message;
  return fallback;
}

export function mapInvestment(
  raw: unknown,
  rates?: Record<string, number>,
): Investment | null {
  const item = asRecord(raw);
  if (!item) return null;
  const forfait = asRecord(item.forfait) ?? asRecord(item.plan);
  const house = asRecord(item.tradingHouse) ?? asRecord(item.house);
  const id = String(item.id ?? '');
  if (!id) return null;
  const amountUsd = Number(item.amount ?? 0);
  const { subscriptionEndDate, workStartDate } = workDatesFrom(item, forfait);
  return {
    id,
    houseId: String(
      item.tradingHouseId ?? house?.id ?? item.houseId ?? '',
    ),
    houseName: String(
      house?.title ?? house?.name ?? item.houseName ?? '',
    ),
    houseLogo: String(
      house?.profilPicture ?? house?.logo ?? item.houseLogo ?? '',
    ),
    planId: String(item.forfaitId ?? forfait?.id ?? item.planId ?? ''),
    planName: String(
      forfait?.title ?? forfait?.name ?? item.planName ?? '',
    ),
    amount: rates ? usdToStorage(amountUsd, rates) : amountUsd,
    expectedReturn: Number(
      item.roiPercentage ??
        forfait?.roiPercentage ??
        item.expectedReturn ??
        0,
    ),
    startDate: String(
      item.created_at ?? item.startDate ?? new Date().toISOString(),
    ),
    endDate: String(
      item.maturityDate ??
        item.endDate ??
        forfait?.maturityDate ??
        item.created_at ??
        new Date().toISOString(),
    ),
    subscriptionEndDate,
    workStartDate,
    status: asStatus(item.status),
    paidAmount: (() => {
      const paidUsd = Number(
        item.paidAmount ??
          item.gainsReceived ??
          item.receivedAmount ??
          item.totalPaid ??
          0,
      );
      if (!Number.isFinite(paidUsd) || paidUsd <= 0) return 0;
      return rates ? usdToStorage(paidUsd, rates) : paidUsd;
    })(),
    paymentService: item.paymentService ? String(item.paymentService) : undefined,
    phoneNumber: item.phoneNumber ? String(item.phoneNumber) : undefined,
  };
}

const RECEIVED_STATUSES = [
  'RECEIVED',
  'PAID',
  'DONE',
  'SUCCESS',
  'COMPLETED',
  'VERSE',
  'VERSED',
];
const UPCOMING_STATUSES = [
  'UPCOMING',
  'PENDING',
  'SCHEDULED',
  'DUE',
  'TO_PAY',
  'PLANNED',
  'A_VENIR',
];

function optionalNumber(...candidates: unknown[]): number | undefined {
  for (const value of candidates) {
    if (value === undefined || value === null || value === '') continue;
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

function asProgress(value: unknown): number | undefined {
  const n = optionalNumber(value);
  if (n === undefined) return undefined;
  return n > 1 ? Math.min(1, n / 100) : Math.min(1, Math.max(0, n));
}

function payoutDate(item: Record<string, unknown>): string {
  const value =
    item.date ??
    item.scheduledAt ??
    item.payoutDate ??
    item.dueDate ??
    item.paidAt ??
    item.created_at ??
    item.day;
  if (typeof value === 'string' && value.trim()) return value;
  if (value instanceof Date) return value.toISOString();
  return new Date().toISOString();
}

function payoutState(
  item: Record<string, unknown>,
  fallback?: PayoutState,
): PayoutState {
  const status = String(item.status ?? '').toUpperCase();
  if (RECEIVED_STATUSES.includes(status)) return 'received';
  if (UPCOMING_STATUSES.includes(status)) return 'upcoming';
  if (item.received === true || item.isPaid === true || item.paid === true) {
    return 'received';
  }
  if (item.paidAt) return 'received';
  if (fallback) return fallback;
  return new Date(payoutDate(item)).getTime() <= Date.now()
    ? 'received'
    : 'upcoming';
}

export function mapPayout(
  raw: unknown,
  fallback?: PayoutState,
  index = 0,
): InvestmentPayout | null {
  const item = asRecord(raw);
  if (!item) return null;
  const amount = optionalNumber(
    item.amount,
    item.value,
    item.gain,
    item.dailyAmount,
    item.payout,
    item.netAmount,
  );
  if (amount === undefined) return null;
  const date = payoutDate(item);
  return {
    id: String(item.id ?? `${date}-${index}`),
    date,
    amount,
    status: payoutState(item, fallback),
  };
}

function sortPayouts(list: InvestmentPayout[]): InvestmentPayout[] {
  return [...list].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

function groupPayouts(list: InvestmentPayout[]): InvestmentPayouts {
  return {
    received: sortPayouts(list.filter((item) => item.status === 'received')),
    upcoming: sortPayouts(list.filter((item) => item.status === 'upcoming')),
  };
}

function mapPayoutList(
  list: unknown,
  fallback?: PayoutState,
): InvestmentPayout[] {
  if (!Array.isArray(list)) return [];
  return list
    .map((item, index) => mapPayout(item, fallback, index))
    .filter((item): item is InvestmentPayout => item !== null);
}

export function mapPayouts(raw: unknown): InvestmentPayouts {
  const item = asRecord(raw);
  if (Array.isArray(raw)) return groupPayouts(mapPayoutList(raw));
  if (!item) return { received: [], upcoming: [] };
  if (
    item.result !== undefined &&
    !item.received &&
    !item.upcoming &&
    !item.payouts
  ) {
    return mapPayouts(item.result);
  }
  if (
    item.data !== undefined &&
    !Array.isArray(item.data) &&
    !item.received &&
    !item.upcoming &&
    !item.payouts
  ) {
    return mapPayouts(item.data);
  }

  const received = mapPayoutList(
    item.received ?? item.paid ?? item.verses,
    'received',
  );
  const upcoming = mapPayoutList(
    item.upcoming ?? item.pending ?? item.scheduled ?? item.toReceive,
    'upcoming',
  );
  if (received.length > 0 || upcoming.length > 0) {
    return {
      received: sortPayouts(received),
      upcoming: sortPayouts(upcoming),
    };
  }

  return groupPayouts(
    mapPayoutList(
      item.payouts ??
        item.versements ??
        item.dailyPayouts ??
        item.items ??
        item.data,
    ),
  );
}

export function mapInvestmentDetail(
  raw: unknown,
  rates?: Record<string, number>,
): InvestmentDetail | null {
  const item = asRecord(raw);
  if (!item) return null;
  const nested = asRecord(item.investment) ?? asRecord(item.data);
  const progressSrc = asRecord(item.progress) ?? asRecord(nested?.progress) ?? {};
  const src = { ...(nested ?? {}), ...item };
  const base = mapInvestment(nested ?? item, rates);
  if (!base) return null;

  const progress =
    asProgress(
      src.progressPercent ??
        src.percent ??
        src.advancement ??
        src.completion ??
        progressSrc.percent ??
        progressSrc.progress ??
        (typeof src.progress === 'object' ? undefined : src.progress),
    ) ?? investmentProgress(base);

  const toMoney = (usd: number | undefined): number | undefined => {
    if (usd === undefined) return undefined;
    return rates ? usdToStorage(usd, rates) : usd;
  };
  const expected =
    toMoney(
      optionalNumber(
        src.expectedGain,
        src.totalGain,
        src.gainAmount,
        src.expectedReturnAmount,
        progressSrc.expectedGain,
      ),
    ) ?? expectedGain(base.amount, base.expectedReturn);
  const paid = toMoney(
    optionalNumber(
      src.paidAmount,
      src.receivedAmount,
      src.totalPaid,
      src.gainsReceived,
      progressSrc.paidAmount,
      progressSrc.received,
    ),
  );
  const remaining = toMoney(
    optionalNumber(
      src.remainingAmount,
      src.upcomingAmount,
      src.toReceive,
      src.remaining,
      progressSrc.remainingAmount,
      progressSrc.remaining,
    ),
  );

  return toInvestmentDetail(base, {
    progress,
    expectedGain: expected,
    paidAmount: paid,
    remainingAmount: remaining,
    daysElapsed: optionalNumber(
      src.daysElapsed,
      src.elapsedDays,
      src.currentDay,
      progressSrc.daysElapsed,
    ),
    daysRemaining: optionalNumber(
      src.daysRemaining,
      src.remainingDays,
      src.daysLeft,
      progressSrc.daysRemaining,
    ),
  });
}

function unwrapResult(json: { result?: unknown } | unknown): unknown {
  const envelope = asRecord(json);
  return envelope?.result ?? json;
}

async function enrichInvestments(
  investments: Investment[],
): Promise<Investment[]> {
  if (
    investments.length === 0 ||
    investments.every(
      (item) =>
        item.houseName &&
        item.planName &&
        item.subscriptionEndDate &&
        item.workStartDate,
    )
  ) {
    return investments;
  }
  const houses = await getHouses().catch(() => []);
  const byId = new Map(houses.map((house) => [house.id, house]));
  return investments.map((item) => {
    const house = byId.get(item.houseId);
    const plan = house?.plans.find((entry) => entry.id === item.planId);
    return {
      ...item,
      houseName: item.houseName || house?.name || 'Maison de trading',
      houseLogo: item.houseLogo || house?.logo || '',
      planName: item.planName || plan?.name || 'Formule',
      expectedReturn: item.expectedReturn || plan?.expectedReturn || 0,
      endDate: item.endDate || plan?.maturityDate || item.startDate,
      subscriptionEndDate:
        item.subscriptionEndDate || plan?.subscriptionEndDate,
      workStartDate:
        item.workStartDate ||
        (plan ? planWorkStartDate(plan)?.toISOString() : undefined),
    };
  });
}

async function fetchByStatus(
  status?: ApiInvestmentStatus,
): Promise<Investment[]> {
  const url = status
    ? `${URLS.INVESTMENTS}?status=${encodeURIComponent(status)}`
    : URLS.INVESTMENTS;
  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(url);
  const list = Array.isArray(json.result) ? json.result : [];
  const rates = (await getCurrencyRates()).rates;
  return list
    .map((item) => mapInvestment(item, rates))
    .filter((item): item is Investment => item !== null);
}

export async function invest(payload: InvestPayload): Promise<AuthResponse> {
  if (USE_SEED_INVESTMENTS) {
    return seed.invest({
      houseId: payload.houseId ?? '',
      planId: payload.planId ?? payload.forfaitId,
      amount: payload.amount,
      service: payload.service ?? 'solde',
      numberTel: payload.numberTel ?? '',
      otp: payload.otp,
    });
  }

  const token = LocalStorageService.getToken();
  if (!token) {
    return { etat: false, error: ['Connectez-vous pour investir'] };
  }

  const rates = (await getCurrencyRates()).rates;
  const amountUsd = storageToUsd(payload.amount, rates);

  const response = await fetch(URLS.INVESTMENTS, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      forfaitId: payload.forfaitId,
      amount: amountUsd,
    }),
  });
  const json = (await response.json().catch(() => ({}))) as AuthResponse;

  if (response.status === 201 || (response.ok && json.etat !== false)) {
    const mapped =
      mapInvestment(json.result, rates) ??
      mapInvestment(asRecord(json.result)?.investment, rates);
    return {
      etat: true,
      message: json.message,
      result: { investment: mapped, raw: json.result },
    };
  }

  return {
    etat: false,
    error: [
      apiErrorMessage(
        json,
        response.status === 400
          ? 'Impossible d’enregistrer cet investissement'
          : 'Solde insuffisant ou formule indisponible',
      ),
    ],
  };
}

export async function getInvestments(
  status?: ApiInvestmentStatus,
): Promise<Investment[]> {
  if (USE_SEED_INVESTMENTS) return seed.getInvestments();

  if (status) return enrichInvestments(await fetchByStatus(status));

  try {
    const all = await fetchByStatus();
    if (all.length > 0) return enrichInvestments(all);
  } catch {
    // L’API exige souvent un statut : on agrège les 5 filtres.
  }

  const groups = await Promise.all(
    INVESTMENT_STATUSES.map((item) => fetchByStatus(item).catch(() => [])),
  );
  const byId = new Map<string, Investment>();
  for (const item of groups.flat()) byId.set(item.id, item);
  return enrichInvestments([...byId.values()]);
}

export async function getInvestmentById(
  id: string,
): Promise<InvestmentDetail | null> {
  if (USE_SEED_INVESTMENTS) return seed.getInvestmentById(id);

  try {
    const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
      `${URLS.INVESTMENTS}/${id}`,
    );
    const rates = (await getCurrencyRates()).rates;
    const mapped = mapInvestmentDetail(unwrapResult(json), rates);
    if (mapped) {
      const [enriched] = await enrichInvestments([mapped]);
      return toInvestmentDetail(enriched, mapped);
    }
  } catch {
    // Liste en secours si le détail échoue.
  }

  const fromList = (await getInvestments().catch(() => [])).find(
    (item) => item.id === id,
  );
  return fromList ? toInvestmentDetail(fromList) : null;
}

export async function getInvestmentPayouts(
  id: string,
): Promise<InvestmentPayouts> {
  if (USE_SEED_INVESTMENTS) return seed.getInvestmentPayouts(id);

  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    `${URLS.INVESTMENTS}/${id}/payouts`,
  );
  return mapPayouts(unwrapResult(json));
}

export async function getTransactions(): Promise<Transaction[]> {
  if (USE_SEED_WALLET) return seed.getTransactions();

  const page = await getWalletTransactions({ page: 1, limit: 50 });
  return page.items.map((item) => ({
    id: item.id,
    type:
      item.type === 'withdraw'
        ? 'retrait'
        : item.type === 'deposit'
          ? 'deposit'
          : item.type === 'payout'
            ? 'gain'
            : 'investissement',
    label: item.label,
    amount: item.amount,
    date: item.date,
    status:
      item.status === 'SUCCESS'
        ? 'réussi'
        : item.status === 'FAILED'
          ? 'échoué'
          : 'en attente',
    paymentService: item.service ?? '',
    reference: item.reference ?? item.id,
  }));
}

export async function toggleFavorite(houseId: string): Promise<AuthResponse> {
  if (USE_SEED_DATA) return seed.toggleFavorite(houseId);

  return apiRequest<AuthResponse>(URLS.FAVORITES, {
    method: 'POST',
    body: { houseId },
  });
}

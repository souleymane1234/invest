import { URLS, USE_SEED_REFERRAL } from '../config';
import * as seed from '@/seeders/api';
import {
  ReferralDividend,
  ReferralFilleul,
  ReferralLevel,
  ReferralNextLevel,
  ReferralOverview,
  ReferralSponsor,
  ReferralStats,
} from '@/types/ReferralType';
import { apiRequest } from './request';

const asRecord = (value: unknown): Record<string, unknown> | null =>
  value && typeof value === 'object'
    ? (value as Record<string, unknown>)
    : null;

function optionalNumber(...candidates: unknown[]): number | undefined {
  for (const value of candidates) {
    if (value === undefined || value === null || value === '') continue;
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

function unwrapResult(json: { result?: unknown } | unknown): unknown {
  const envelope = asRecord(json);
  return envelope?.result ?? json;
}

export function mapReferralLevel(raw: unknown): ReferralLevel | null {
  const item = asRecord(raw);
  if (!item) return null;
  const id = String(item.id ?? '');
  const name = String(item.name ?? '');
  if (!id && !name) return null;
  return {
    id,
    name: name || 'Palier',
    position: optionalNumber(item.position) ?? 0,
    minReferrals: optionalNumber(item.minReferrals) ?? 0,
    minActiveReferrals: optionalNumber(item.minActiveReferrals) ?? 0,
    maxParallelInvestments: optionalNumber(item.maxParallelInvestments) ?? 0,
    dividendPercentage: optionalNumber(item.dividendPercentage) ?? 0,
    maxDividendsPerReferral: optionalNumber(item.maxDividendsPerReferral) ?? 0,
  };
}

function mapNextLevel(raw: unknown): ReferralNextLevel | null {
  const base = mapReferralLevel(raw);
  if (!base) return null;
  const item = asRecord(raw) ?? {};
  return {
    ...base,
    missingReferrals: optionalNumber(item.missingReferrals) ?? 0,
    missingActiveReferrals: optionalNumber(item.missingActiveReferrals) ?? 0,
  };
}

function mapSponsor(raw: unknown): ReferralSponsor | null {
  const item = asRecord(raw);
  if (!item) return null;
  const id = String(item.id ?? '');
  const name = String(
    item.full_name ?? item.name ?? item.pseudo ?? item.referralCode ?? '',
  );
  if (!id && !name) return null;
  return {
    id,
    name: name || 'Parrain',
    referralCode: item.referralCode ? String(item.referralCode) : undefined,
  };
}

function mapStats(raw: unknown): ReferralStats {
  const item = asRecord(raw) ?? {};
  return {
    totalReferrals: optionalNumber(item.totalReferrals) ?? 0,
    activeReferrals: optionalNumber(item.activeReferrals) ?? 0,
    dividendsCount: optionalNumber(item.dividendsCount) ?? 0,
    totalDividends: optionalNumber(item.totalDividends) ?? 0,
  };
}

export function mapReferralOverview(raw: unknown): ReferralOverview | null {
  const item = asRecord(raw);
  if (!item) return null;
  const referralCode = String(item.referralCode ?? '');
  if (!referralCode) return null;
  return {
    referralCode,
    referralLink: String(item.referralLink ?? `?ref=${referralCode}`),
    sponsor: mapSponsor(item.sponsor),
    level: mapReferralLevel(item.level),
    nextLevel: mapNextLevel(item.nextLevel),
    stats: mapStats(item.stats),
    investmentsInProgress: optionalNumber(item.investmentsInProgress) ?? 0,
    remainingParallelInvestments:
      optionalNumber(item.remainingParallelInvestments) ?? 0,
  };
}

export function mapFilleul(raw: unknown): ReferralFilleul | null {
  const item = asRecord(raw);
  if (!item) return null;
  const user = asRecord(item.user) ?? asRecord(item.client) ?? item;
  const id = String(user.id ?? item.id ?? '');
  if (!id) return null;
  return {
    id,
    name: String(
      user.full_name ?? user.pseudo ?? user.name ?? item.name ?? 'Filleul',
    ),
    phoneNumber: user.phone_number
      ? String(user.phone_number)
      : item.phoneNumber
        ? String(item.phoneNumber)
        : undefined,
    avatar: user.profil ? String(user.profil) : undefined,
    isActive: Boolean(
      item.isActive ?? item.active ?? item.hasActiveInvestment ?? false,
    ),
    createdAt: String(
      item.created_at ?? item.createdAt ?? user.created_at ?? '',
    ),
    investedAmount: optionalNumber(item.investedAmount, item.amount),
  };
}

export function mapDividend(raw: unknown): ReferralDividend | null {
  const item = asRecord(raw);
  if (!item) return null;
  const id = String(item.id ?? item.reference ?? '');
  if (!id) return null;
  const filleul =
    asRecord(item.filleul) ?? asRecord(item.referral) ?? asRecord(item.user);
  return {
    id,
    amount: optionalNumber(item.amount, item.value, item.dividend) ?? 0,
    date: String(item.created_at ?? item.createdAt ?? item.date ?? ''),
    label: String(
      item.label ?? item.description ?? item.message ?? 'Dividende de parrainage',
    ),
    filleulName: filleul
      ? String(filleul.full_name ?? filleul.pseudo ?? filleul.name ?? '')
      : item.filleulName
        ? String(item.filleulName)
        : undefined,
    percentage: optionalNumber(item.percentage, item.dividendPercentage),
  };
}

export async function getReferral(): Promise<ReferralOverview | null> {
  if (USE_SEED_REFERRAL) return seed.getReferral();

  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    URLS.REFERRAL,
  );
  return mapReferralOverview(unwrapResult(json));
}

export async function getReferralLevels(): Promise<ReferralLevel[]> {
  if (USE_SEED_REFERRAL) return seed.getReferralLevels();

  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    `${URLS.REFERRAL}/levels`,
  );
  const result = unwrapResult(json);
  return Array.isArray(result)
    ? result
        .map(mapReferralLevel)
        .filter((item): item is ReferralLevel => item !== null)
    : [];
}

export async function getReferralFilleuls(): Promise<ReferralFilleul[]> {
  if (USE_SEED_REFERRAL) return seed.getReferralFilleuls();

  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    `${URLS.REFERRAL}/filleuls`,
  );
  const result = unwrapResult(json);
  return Array.isArray(result)
    ? result
        .map(mapFilleul)
        .filter((item): item is ReferralFilleul => item !== null)
    : [];
}

export async function getReferralDividends(): Promise<ReferralDividend[]> {
  if (USE_SEED_REFERRAL) return seed.getReferralDividends();

  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    `${URLS.REFERRAL}/dividends`,
  );
  const result = unwrapResult(json);
  return Array.isArray(result)
    ? result
        .map(mapDividend)
        .filter((item): item is ReferralDividend => item !== null)
    : [];
}
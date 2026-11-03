import { CurrencyRates } from '@/types/CurrencyType';
import { InvestorLevel } from '@/types/LevelType';
import {
  HouseReview,
  InvestmentPlan,
  Market,
  RiskLevel,
  TradingHouse,
} from '@/types/TradingHouseType';
import { convertAmount, STORAGE_CURRENCY } from '@/utils/invest_helper';

export type ApiAccess = {
  meetsLevel?: boolean;
  meetsStars?: boolean;
  canInvest?: boolean;
};

export type ApiForfait = {
  id: string;
  tradingHouseId?: string;
  title: string;
  description?: string;
  minAmount: number;
  maxAmount: number;
  subscriptionEndDate?: string;
  workDurationDays?: number;
  maturityDate?: string;
  roiPercentage?: number;
  minStars?: number;
  status?: string;
  totalCollected?: number;
  numberInvestors?: number;
  isActive?: boolean;
  isOpen?: boolean;
  access?: ApiAccess;
};

export type ApiTradingHouse = {
  id: string;
  title: string;
  description?: string;
  profilPicture?: string;
  videoPitch?: string | null;
  successRate?: number;
  isCertified?: boolean;
  certifiedAt?: string;
  minLevel?: string;
  minLevelLabel?: string;
  numberInvestors?: number;
  isActive?: boolean;
  created_at?: string;
  covers?: { id: string; imageUrl: string }[];
  categories?: { id: string; name: string }[];
  rating?: { average?: number; count?: number };
  forfaits?: ApiForfait[];
  access?: ApiAccess;
};

export type ApiHouseGroup = {
  categorieId: string;
  category: string;
  tradingHouses: ApiTradingHouse[];
};

export type ApiInvestorLevel = {
  level?: string;
  levelLabel?: string;
  levelSince?: string;
  investmentCount?: number;
  nextLevel?: {
    level?: string;
    missingInvestments?: number;
    levelLabel?: string;
  };
  amountSinceLevel?: number;
  referralsSinceLevel?: number;
  stars?: {
    total?: number;
    fromAmount?: number;
    fromReferrals?: number;
    isMax?: boolean;
    nextHalfStar?: {
      missingAmount?: number;
      missingReferrals?: number;
    } | null;
  };
  rules?: {
    starAmountStep?: number;
    referralsPerStar?: number;
    maxStars?: number;
    intermediateMinInvestments?: number;
    professionalMinInvestments?: number;
  };
};

export type ApiHouseDetail = {
  tradingHouse: ApiTradingHouse;
  ratings?: unknown[];
  similarTradingHouses?: ApiTradingHouse[];
  investorLevel?: ApiInvestorLevel | null;
};

const LEVEL_RANK: Record<string, number> = {
  BEGINNER: 1,
  DEBUTANT: 1,
  INTERMEDIATE: 2,
  CONFIRMED: 2,
  CONFIRME: 2,
  ADVANCED: 3,
  EXPERT: 3,
  ELITE: 4,
  PROFESSIONAL: 3,
};

const asRecord = (value: unknown): Record<string, unknown> | null =>
  value && typeof value === 'object'
    ? (value as Record<string, unknown>)
    : null;

const usdToStorage = (usd: number, rates: Record<string, number>): number =>
  Math.round(convertAmount(usd, 'USD', STORAGE_CURRENCY, rates));

const firstSentence = (text: string): string => {
  const trimmed = text.trim();
  const match = trimmed.match(/^.+?[.!?]/);
  const sentence = (match ? match[0] : trimmed).trim();
  return sentence.length > 140 ? `${sentence.slice(0, 137)}…` : sentence;
};

const riskFromSuccess = (successRate: number): RiskLevel => {
  if (successRate >= 70) return 'faible';
  if (successRate >= 50) return 'modéré';
  return 'élevé';
};

export const rankFromMinLevel = (minLevel?: string): number =>
  LEVEL_RANK[(minLevel || 'BEGINNER').toUpperCase()] ?? 1;

export function userFromInvestorLevel<
  T extends { levelRank?: number; levelLabel?: string; stars?: number },
>(user: T, level: InvestorLevel): T {
  return {
    ...user,
    levelRank: rankFromMinLevel(level.level),
    levelLabel: level.levelLabel,
    stars: level.stars.total,
  };
}

export function mapInvestorLevel(
  raw: ApiInvestorLevel | null | undefined,
  rates: CurrencyRates | Record<string, number>,
): InvestorLevel | null {
  if (!raw?.level) return null;
  const rateMap = 'rates' in rates ? rates.rates : rates;
  const next = raw.nextLevel;
  const stars = raw.stars;
  const half = stars?.nextHalfStar;
  const rules = raw.rules;
  return {
    level: raw.level,
    levelLabel: raw.levelLabel || raw.level,
    levelSince: raw.levelSince,
    investmentCount: Number(raw.investmentCount ?? 0),
    nextLevel: next?.level
      ? {
          level: next.level,
          levelLabel: next.levelLabel || next.level,
          missingInvestments: Number(next.missingInvestments ?? 0),
        }
      : undefined,
    amountSinceLevel: usdToStorage(Number(raw.amountSinceLevel ?? 0), rateMap),
    referralsSinceLevel: Number(raw.referralsSinceLevel ?? 0),
    stars: {
      total: Number(stars?.total ?? 0),
      fromAmount: Number(stars?.fromAmount ?? 0),
      fromReferrals: Number(stars?.fromReferrals ?? 0),
      isMax: Boolean(stars?.isMax),
      nextHalfStar: half
        ? {
            missingAmount: usdToStorage(Number(half.missingAmount ?? 0), rateMap),
            missingReferrals: Number(half.missingReferrals ?? 0),
          }
        : undefined,
    },
    rules: rules
      ? {
          starAmountStep: usdToStorage(Number(rules.starAmountStep ?? 0), rateMap),
          referralsPerStar: Number(rules.referralsPerStar ?? 0),
          maxStars: Number(rules.maxStars ?? 5),
          intermediateMinInvestments: Number(
            rules.intermediateMinInvestments ?? 0,
          ),
          professionalMinInvestments: Number(
            rules.professionalMinInvestments ?? 0,
          ),
        }
      : undefined,
  };
}

export function mapMarket(raw: {
  id?: string;
  name?: string;
  created_at?: string;
}): Market {
  return { id: String(raw.id ?? ''), name: String(raw.name ?? '') };
}

export function mapReview(raw: unknown, index: number): HouseReview | null {
  const item = asRecord(raw);
  if (!item) return null;
  const user = asRecord(item.user);
  const author = String(
    item.author ??
      item.full_name ??
      user?.full_name ??
      user?.pseudo ??
      'Investisseur',
  );
  const comment = String(
    item.comment ?? item.message ?? item.content ?? '',
  ).trim();
  return {
    id: String(item.id ?? `review-${index}`),
    author,
    avatar: String(item.avatar ?? item.profil ?? user?.profil ?? ''),
    rating: Number(item.rating ?? item.stars ?? 0),
    comment,
    date: String(item.created_at ?? item.date ?? new Date().toISOString()),
  };
}

function mapPlan(
  forfait: ApiForfait,
  house: ApiTradingHouse,
  rates: Record<string, number>,
  popularId?: string,
): InvestmentPlan {
  const isOpen = forfait.isOpen ?? forfait.status === 'OPEN';
  return {
    id: forfait.id,
    houseId: forfait.tradingHouseId || house.id,
    name: forfait.title,
    minAmount: usdToStorage(Number(forfait.minAmount ?? 0), rates),
    maxAmount: usdToStorage(Number(forfait.maxAmount ?? 0), rates),
    durationDays: Number(forfait.workDurationDays ?? 0),
    expectedReturn: Number(forfait.roiPercentage ?? 0),
    payout: "à l'échéance",
    features: [],
    popular: forfait.id === popularId,
    requiredLevel: rankFromMinLevel(house.minLevel),
    requiredLevelLabel: house.minLevelLabel,
    description: forfait.description,
    canInvest: forfait.access?.canInvest ?? house.access?.canInvest,
    isOpen,
    subscriptionEndDate: forfait.subscriptionEndDate,
    maturityDate: forfait.maturityDate,
    minStars: Number(forfait.minStars ?? 0),
    status: forfait.status,
    totalCollected: usdToStorage(Number(forfait.totalCollected ?? 0), rates),
    investorsCount: Number(forfait.numberInvestors ?? 0),
    meetsLevel: forfait.access?.meetsLevel ?? house.access?.meetsLevel,
    meetsStars: forfait.access?.meetsStars ?? house.access?.meetsStars,
  };
}

export function mapTradingHouse(
  raw: ApiTradingHouse,
  rates: CurrencyRates | Record<string, number>,
  reviews: HouseReview[] = [],
): TradingHouse {
  const rateMap = 'rates' in rates ? rates.rates : rates;
  const forfaits = (raw.forfaits ?? []).filter(
    (item) => item.isActive !== false,
  );
  const popularId = [...forfaits].sort(
    (a, b) => Number(b.roiPercentage ?? 0) - Number(a.roiPercentage ?? 0),
  )[0]?.id;
  const plans = forfaits.map((item) => mapPlan(item, raw, rateMap, popularId));
  const covers = (raw.covers ?? [])
    .map((item) => item.imageUrl)
    .filter(Boolean);
  const maxRoi = Math.max(0, ...plans.map((plan) => plan.expectedReturn));
  const successRate = Number(raw.successRate ?? 0);
  const collected = forfaits.reduce(
    (acc, item) => acc + Number(item.totalCollected ?? 0),
    0,
  );
  const forfaitInvestors = forfaits.reduce(
    (acc, item) => acc + Number(item.numberInvestors ?? 0),
    0,
  );
  const created = raw.created_at ? new Date(raw.created_at) : new Date();
  const description = raw.description ?? '';
  const foundedMatch = description.match(/fondé(?:e)? en (\d{4})/i);
  const foundedYear = foundedMatch
    ? Number(foundedMatch[1])
    : Number.isNaN(created.getTime())
      ? 0
      : created.getFullYear();

  return {
    id: raw.id,
    name: raw.title,
    logo: raw.profilPicture || covers[0] || '',
    cover: covers[0] || raw.profilPicture || '',
    card: covers[0] || raw.profilPicture || '',
    tagline: firstSentence(description) || raw.minLevelLabel || raw.title,
    description,
    strategy: '',
    markets: (raw.categories ?? []).map(mapMarket),
    foundedYear,
    country: '',
    license: raw.isCertified ? 'Maison certifiée' : '',
    verified: Boolean(raw.isCertified),
    requiredLevel: rankFromMinLevel(raw.minLevel),
    requiredLevelLabel: raw.minLevelLabel,
    canInvest: raw.access?.canInvest,
    meetsLevel: raw.access?.meetsLevel,
    meetsStars: raw.access?.meetsStars,
    certifiedAt: raw.certifiedAt,
    videoPitch: raw.videoPitch || undefined,
    stats: {
      winRate: successRate,
      monthlyRoi: 0,
      annualRoi: maxRoi,
      maxDrawdown: 0,
      riskLevel: riskFromSuccess(successRate),
      investorsCount: Math.max(
        Number(raw.numberInvestors ?? 0),
        forfaitInvestors,
      ),
      capitalManaged: usdToStorage(collected, rateMap),
      totalTrades: 0,
      rating: Number(raw.rating?.average ?? 0),
      reviewsCount: Number(raw.rating?.count ?? reviews.length),
    },
    performance: [],
    screenshots: covers,
    plans,
    reviews,
    created_at: raw.created_at || created.toISOString(),
  };
}

export function flattenHouseGroups(
  groups: ApiHouseGroup[],
  rates: CurrencyRates | Record<string, number>,
): TradingHouse[] {
  const byId = new Map<string, TradingHouse>();
  for (const group of groups) {
    for (const raw of group.tradingHouses ?? []) {
      if (raw.isActive === false || byId.has(raw.id)) continue;
      byId.set(raw.id, mapTradingHouse(raw, rates));
    }
  }
  return [...byId.values()];
}

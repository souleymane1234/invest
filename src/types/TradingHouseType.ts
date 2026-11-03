import { InvestorLevel } from './LevelType';

export type RiskLevel = 'faible' | 'modéré' | 'élevé';

export type PayoutFrequency =
  | 'quotidien'
  | 'hebdomadaire'
  | 'mensuel'
  | "à l'échéance";

export type Market = {
  id: string;
  name: string;
};

export type PerformancePoint = {
  month: string;
  value: number;
};

export type HouseStats = {
  winRate: number;
  monthlyRoi: number;
  annualRoi: number;
  maxDrawdown: number;
  riskLevel: RiskLevel;
  investorsCount: number;
  capitalManaged: number;
  totalTrades: number;
  rating: number;
  reviewsCount: number;
};

export type InvestmentPlan = {
  id: string;
  houseId: string;
  name: string;
  minAmount: number;
  maxAmount: number;
  durationDays: number;
  expectedReturn: number;
  payout: PayoutFrequency;
  features: string[];
  popular?: boolean;
  /** Palier minimum (rang) pour investir dans cette formule. */
  requiredLevel: number;
  requiredLevelLabel?: string;
  description?: string;
  canInvest?: boolean;
  isOpen?: boolean;
  subscriptionEndDate?: string;
  maturityDate?: string;
  minStars?: number;
  status?: string;
  totalCollected?: number;
  investorsCount?: number;
  meetsLevel?: boolean;
  meetsStars?: boolean;
};

export type HouseReview = {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
};

export type TradingHouse = {
  id: string;
  name: string;
  logo: string;
  cover: string;
  card: string;
  tagline: string;
  description: string;
  strategy: string;
  markets: Market[];
  foundedYear: number;
  country: string;
  license: string;
  verified: boolean;
  /** Palier minimum (rang) pour investir dans cette maison. */
  requiredLevel: number;
  requiredLevelLabel?: string;
  canInvest?: boolean;
  meetsLevel?: boolean;
  meetsStars?: boolean;
  certifiedAt?: string;
  videoPitch?: string;
  stats: HouseStats;
  performance: PerformancePoint[];
  screenshots: string[];
  plans: InvestmentPlan[];
  reviews: HouseReview[];
  created_at: string;
};

export type HouseDetail = {
  house: TradingHouse;
  similar: TradingHouse[];
  investorLevel: InvestorLevel | null;
};

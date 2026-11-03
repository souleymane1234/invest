export type ReferralLevel = {
  id: string;
  name: string;
  position: number;
  minReferrals: number;
  minActiveReferrals: number;
  maxParallelInvestments: number;
  dividendPercentage: number;
  maxDividendsPerReferral: number;
};

export type ReferralNextLevel = ReferralLevel & {
  missingReferrals: number;
  missingActiveReferrals: number;
};

export type ReferralStats = {
  totalReferrals: number;
  activeReferrals: number;
  dividendsCount: number;
  totalDividends: number;
};

export type ReferralSponsor = {
  id: string;
  name: string;
  referralCode?: string;
};

export type ReferralOverview = {
  referralCode: string;
  referralLink: string;
  sponsor: ReferralSponsor | null;
  level: ReferralLevel | null;
  nextLevel: ReferralNextLevel | null;
  stats: ReferralStats;
  investmentsInProgress: number;
  remainingParallelInvestments: number;
};

export type ReferralFilleul = {
  id: string;
  name: string;
  phoneNumber?: string;
  avatar?: string;
  isActive: boolean;
  createdAt?: string;
  investedAmount?: number;
};

export type ReferralDividend = {
  id: string;
  amount: number;
  date: string;
  label: string;
  filleulName?: string;
  percentage?: number;
};

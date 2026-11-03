export type InvestmentLevel = {
  rank: number;
  name: string;
  description: string;
  color: string;
  /** Rendement maximum (en %) des formules accessibles à ce palier. */
  maxPlanReturn: number | null;
  /** Rendement annuel maximum (en %) des maisons accessibles à ce palier. */
  maxHouseAnnualRoi: number | null;
  requirements: {
    completedInvestments: number;
    completedAmount: number;
    profileCompleted: boolean;
    accountAgeDays: number;
  };
  perks: string[];
};

export type LevelProgress = {
  completedInvestments: number;
  completedAmount: number;
  profileCompleted: boolean;
  accountAgeDays: number;
};

export type UserLevelStatus = {
  current: InvestmentLevel;
  next: InvestmentLevel | null;
  progress: LevelProgress;
};

export type InvestorStars = {
  total: number;
  fromAmount: number;
  fromReferrals: number;
  isMax: boolean;
  nextHalfStar?: {
    missingAmount: number;
    missingReferrals: number;
  };
};

export type InvestorLevel = {
  level: string;
  levelLabel: string;
  levelSince?: string;
  investmentCount: number;
  nextLevel?: {
    level: string;
    levelLabel: string;
    missingInvestments: number;
  };
  amountSinceLevel: number;
  referralsSinceLevel: number;
  stars: InvestorStars;
  rules?: {
    starAmountStep: number;
    referralsPerStar: number;
    maxStars: number;
    intermediateMinInvestments: number;
    professionalMinInvestments: number;
  };
};

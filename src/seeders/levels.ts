import { InvestmentLevel, LevelProgress, UserLevelStatus } from '@/types/LevelType';
import { UserType } from '@/types/UserType';

const DAY_MS = 24 * 60 * 60 * 1000;

export const seedLevels: InvestmentLevel[] = [
  {
    rank: 1,
    name: 'Découverte',
    description: 'Votre point de départ : des formules courtes et prudentes pour vous familiariser.',
    color: '#b7793f',
    maxPlanReturn: 10,
    maxHouseAnnualRoi: 25,
    requirements: { completedInvestments: 0, completedAmount: 0, profileCompleted: false, accountAgeDays: 0 },
    perks: ['Formules jusqu’à +10 %', 'Maisons à risque faible'],
  },
  {
    rank: 2,
    name: 'Confirmé',
    description: 'Vous avez fait vos preuves : accédez à des formules plus rémunératrices.',
    color: '#8a94a6',
    maxPlanReturn: 25,
    maxHouseAnnualRoi: 35,
    requirements: { completedInvestments: 1, completedAmount: 50_000, profileCompleted: true, accountAgeDays: 0 },
    perks: ['Formules jusqu’à +25 %', 'Maisons jusqu’à +35 % / an'],
  },
  {
    rank: 3,
    name: 'Expert',
    description: 'Investisseur régulier : les stratégies dynamiques vous sont ouvertes.',
    color: '#e0a83a',
    maxPlanReturn: 50,
    maxHouseAnnualRoi: 55,
    requirements: { completedInvestments: 3, completedAmount: 500_000, profileCompleted: true, accountAgeDays: 30 },
    perks: ['Formules jusqu’à +50 %', 'Maisons jusqu’à +55 % / an'],
  },
  {
    rank: 4,
    name: 'Élite',
    description: 'Accès complet à toutes les maisons et formules, y compris les plus performantes.',
    color: '#1e2538',
    maxPlanReturn: null,
    maxHouseAnnualRoi: null,
    requirements: { completedInvestments: 6, completedAmount: 2_000_000, profileCompleted: true, accountAgeDays: 90 },
    perks: ['Toutes les formules', 'Toutes les maisons, sans limite de rendement'],
  },
];

const levelFor = (value: number, key: 'maxPlanReturn' | 'maxHouseAnnualRoi') =>
  seedLevels.find((level) => level[key] === null || value <= level[key]!)!.rank;

/** Palier requis par une formule selon son rendement promis. */
export const levelForPlanReturn = (expectedReturn: number) =>
  levelFor(expectedReturn, 'maxPlanReturn');

/** Palier requis par une maison selon son rendement annuel. */
export const levelForHouseRoi = (annualRoi: number) =>
  levelFor(annualRoi, 'maxHouseAnnualRoi');

export function levelProgress(user: UserType): LevelProgress {
  const completed = (user.investments ?? []).filter(
    (investment) => new Date(investment.endDate).getTime() <= Date.now(),
  );
  const createdAt = user.created_at ? new Date(user.created_at).getTime() : Date.now();
  return {
    completedInvestments: completed.length,
    completedAmount: completed.reduce((acc, investment) => acc + investment.amount, 0),
    profileCompleted: !!user.full_name?.trim() && !!user.email?.trim(),
    accountAgeDays: Math.floor((Date.now() - createdAt) / DAY_MS),
  };
}

const meetsRequirements = (level: InvestmentLevel, progress: LevelProgress) =>
  progress.completedInvestments >= level.requirements.completedInvestments &&
  progress.completedAmount >= level.requirements.completedAmount &&
  (!level.requirements.profileCompleted || progress.profileCompleted) &&
  progress.accountAgeDays >= level.requirements.accountAgeDays;

/**
 * Palier atteint : on monte palier par palier (impossible de sauter un palier)
 * et on ne redescend jamais en dessous du palier déjà acquis.
 */
export function computeLevelRank(user: UserType): number {
  const progress = levelProgress(user);
  let rank = 1;
  for (const level of seedLevels.slice(1)) {
    if (!meetsRequirements(level, progress)) break;
    rank = level.rank;
  }
  return Math.max(rank, user.levelRank ?? 1);
}

export function levelStatus(user: UserType): UserLevelStatus {
  const rank = user.levelRank ?? computeLevelRank(user);
  return {
    current: seedLevels.find((level) => level.rank === rank)!,
    next: seedLevels.find((level) => level.rank === rank + 1) ?? null,
    progress: levelProgress(user),
  };
}

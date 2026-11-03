import { URLS, USE_SEED_AUTH } from '../config';
import * as seed from '@/seeders/api';
import {
  InvestmentLevel,
  InvestorLevel,
  UserLevelStatus,
} from '@/types/LevelType';
import { apiRequest } from './request';
import { getCurrencyRates } from './currencies';
import {
  ApiInvestorLevel,
  mapInvestorLevel,
} from './mapTradingHouse';

type Envelope<T> = { etat: boolean; result: T };

/** Catalogue aligné sur GET /level (Débutant → Intermédiaire → Professionnel). */
export const API_LEVEL_CATALOG: InvestmentLevel[] = [
  {
    rank: 1,
    name: 'Débutant',
    description:
      'Votre point de départ. Les maisons ouvertes aux débutants et leurs forfaits vous sont accessibles dès l’inscription.',
    color: '#b7793f',
    maxPlanReturn: null,
    maxHouseAnnualRoi: null,
    requirements: {
      completedInvestments: 0,
      completedAmount: 0,
      profileCompleted: false,
      accountAgeDays: 0,
    },
    perks: [
      'Accès dès l’inscription',
      'Étoiles en investissant ou en parrainant',
    ],
  },
  {
    rank: 2,
    name: 'Intermédiaire',
    description:
      'Après plusieurs investissements, de nouvelles maisons et formules s’ouvrent à vous.',
    color: '#8a94a6',
    maxPlanReturn: null,
    maxHouseAnnualRoi: null,
    requirements: {
      completedInvestments: 4,
      completedAmount: 0,
      profileCompleted: false,
      accountAgeDays: 0,
    },
    perks: ['Maisons et forfaits niveau Intermédiaire'],
  },
  {
    rank: 3,
    name: 'Professionnel',
    description:
      'Le palier le plus élevé : accès étendu aux maisons réservées aux investisseurs expérimentés.',
    color: '#1e2538',
    maxPlanReturn: null,
    maxHouseAnnualRoi: null,
    requirements: {
      completedInvestments: 11,
      completedAmount: 0,
      profileCompleted: false,
      accountAgeDays: 0,
    },
    perks: ['Maisons et forfaits niveau Professionnel'],
  },
];

export function overlayLevelRules(
  levels: InvestmentLevel[],
  investor: InvestorLevel | null,
): InvestmentLevel[] {
  const rules = investor?.rules;
  if (!rules) return levels;
  return levels.map((level) => {
    if (level.rank === 2) {
      return {
        ...level,
        requirements: {
          ...level.requirements,
          completedInvestments: rules.intermediateMinInvestments,
        },
      };
    }
    if (level.rank === 3) {
      return {
        ...level,
        requirements: {
          ...level.requirements,
          completedInvestments: rules.professionalMinInvestments,
        },
      };
    }
    return level;
  });
}

export async function getLevels(): Promise<InvestmentLevel[]> {
  if (USE_SEED_AUTH) return seed.getLevels();
  return API_LEVEL_CATALOG;
}

/** Palier, étoiles et palier suivant (`GET /level`). */
export async function getInvestorLevel(): Promise<InvestorLevel | null> {
  if (USE_SEED_AUTH) return seed.getInvestorLevel();

  try {
    const [json, rates] = await Promise.all([
      apiRequest<Envelope<ApiInvestorLevel>>(URLS.USER_LEVEL),
      getCurrencyRates(),
    ]);
    if (!json.etat) return null;
    return mapInvestorLevel(json.result, rates);
  } catch {
    return null;
  }
}

export async function getLevelStatus(): Promise<UserLevelStatus | null> {
  if (USE_SEED_AUTH) return seed.getLevelStatus();
  return null;
}

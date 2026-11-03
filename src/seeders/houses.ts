import {
  HouseReview,
  InvestmentPlan,
  Market,
  PayoutFrequency,
  RiskLevel,
  TradingHouse,
} from '@/types/TradingHouseType';
import { levelForHouseRoi, levelForPlanReturn } from './levels';

export const seedMarkets: Market[] = [
  { id: 'forex', name: 'Forex' },
  { id: 'crypto', name: 'Crypto' },
  { id: 'actions', name: 'Actions' },
  { id: 'matieres', name: 'Matières premières' },
  { id: 'indices', name: 'Indices' },
];

type SeedPlan = [
  name: string,
  minAmount: number,
  maxAmount: number,
  durationDays: number,
  expectedReturn: number,
  payout: PayoutFrequency,
  features: string[],
  popular?: boolean,
];

type SeedReview = [author: string, rating: number, comment: string, daysAgo: number];

type SeedHouse = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  strategy: string;
  markets: string[];
  foundedYear: number;
  country: string;
  license: string;
  verified: boolean;
  monthlyReturns: number[];
  winRate: number;
  maxDrawdown: number;
  riskLevel: RiskLevel;
  investorsCount: number;
  capitalManaged: number;
  totalTrades: number;
  daysAgo: number;
  plans: SeedPlan[];
  reviews: SeedReview[];
};

const seedHouses: SeedHouse[] = [
  {
    slug: 'atlas-capital',
    name: 'Atlas Capital',
    tagline: 'Le Forex maîtrisé, sans surprise',
    description:
      'Atlas Capital est une maison de trading spécialisée sur les paires de devises majeures et les grands indices. Son équipe de 12 traders gère le capital de ses clients avec une approche disciplinée et une gestion stricte du risque.',
    strategy:
      'Swing trading sur EUR/USD, GBP/USD et US30, avec un risque limité à 1 % du capital par position et des stop-loss systématiques.',
    markets: ['forex', 'indices'],
    foundedYear: 2017,
    country: "Côte d'Ivoire",
    license: 'Agréée AMF-UMOA n° 2017-114',
    verified: true,
    monthlyReturns: [3.1, 2.4, -1.2, 4.0, 2.8, 1.9, 3.5, -0.8, 2.6, 3.3, 2.1, 2.9],
    winRate: 72,
    maxDrawdown: 6.5,
    riskLevel: 'modéré',
    investorsCount: 4820,
    capitalManaged: 2_450_000_000,
    totalTrades: 3640,
    daysAgo: 400,
    plans: [
      ['Starter', 10_000, 100_000, 30, 6, "à l'échéance", ['Capital garanti à 90 %', 'Retrait à l’échéance']],
      ['Premium', 100_000, 1_000_000, 90, 22, 'mensuel', ['Gains versés chaque mois', 'Conseiller dédié'], true],
      ['Elite', 1_000_000, 10_000_000, 180, 50, 'mensuel', ['Rapport hebdomadaire', 'Accès prioritaire aux nouveaux fonds']],
    ],
    reviews: [
      ['Koffi Yao', 5, 'Très sérieux, mes gains arrivent chaque mois sans retard.', 4],
      ['Awa Traoré', 4, 'Bonne communication, rendement régulier même si pas spectaculaire.', 18],
      ['Serge Kouadio', 5, 'Je suis client depuis 2 ans, aucune mauvaise surprise.', 40],
    ],
  },
  {
    slug: 'nova-crypto',
    name: 'Nova Crypto Fund',
    tagline: 'Capter la croissance des cryptomonnaies',
    description:
      'Nova Crypto Fund investit sur les principales cryptomonnaies (Bitcoin, Ethereum, Solana) et profite de la volatilité du marché grâce à des algorithmes de trading automatisés actifs 24h/24.',
    strategy:
      'Trading algorithmique de tendance et d’arbitrage entre plateformes, avec une couverture partielle en stablecoins lors des fortes baisses.',
    markets: ['crypto'],
    foundedYear: 2020,
    country: 'Sénégal',
    license: 'Enregistrée auprès de la BCEAO (PSAN)',
    verified: true,
    monthlyReturns: [8.2, -4.5, 12.1, 6.3, -7.8, 9.4, 5.1, 11.0, -3.2, 7.7, 4.9, 6.8],
    winRate: 61,
    maxDrawdown: 18.4,
    riskLevel: 'élevé',
    investorsCount: 7310,
    capitalManaged: 1_870_000_000,
    totalTrades: 15200,
    daysAgo: 220,
    plans: [
      ['Découverte', 5_000, 50_000, 14, 7, "à l'échéance", ['Idéal pour débuter', 'Retrait rapide']],
      ['Croissance', 50_000, 500_000, 60, 28, 'hebdomadaire', ['Gains versés chaque semaine', 'Tableau de bord temps réel'], true],
      ['Turbo', 500_000, 5_000_000, 120, 65, 'mensuel', ['Stratégies à effet de levier', 'Gestionnaire personnel']],
    ],
    reviews: [
      ['Moussa Diallo', 5, 'Rendement impressionnant, mais il faut accepter les mois négatifs.', 2],
      ['Fatou Bamba', 3, 'Volatil, j’ai eu un mois à -7 %. Le reste de l’année a compensé.', 25],
      ['Ibrahim Koné', 5, 'Le tableau de bord en temps réel est top.', 33],
      ['Aya Kouassi', 4, 'Très bon support client sur WhatsApp.', 60],
    ],
  },
  {
    slug: 'sahel-trading',
    name: 'Sahel Trading Group',
    tagline: 'Matières premières et devises africaines',
    description:
      'Sahel Trading Group négocie les matières premières agricoles et énergétiques (cacao, café, pétrole) ainsi que les devises liées. Une maison prudente, adaptée aux investisseurs qui cherchent la stabilité.',
    strategy:
      'Positions de moyen terme sur les contrats à terme de matières premières, couvertes par des options pour limiter les pertes.',
    markets: ['matieres', 'forex'],
    foundedYear: 2012,
    country: 'Mali',
    license: 'Agréée CREPMF n° 2012-031',
    verified: true,
    monthlyReturns: [1.6, 1.9, 1.2, 2.1, 0.8, 1.7, 1.5, 2.0, 1.1, 1.8, 1.4, 1.9],
    winRate: 79,
    maxDrawdown: 3.1,
    riskLevel: 'faible',
    investorsCount: 3120,
    capitalManaged: 3_900_000_000,
    totalTrades: 980,
    daysAgo: 900,
    plans: [
      ['Sécurité', 25_000, 250_000, 60, 7, "à l'échéance", ['Capital garanti à 100 %', 'Faible risque']],
      ['Équilibre', 250_000, 2_500_000, 180, 18, 'mensuel', ['Gains mensuels', 'Rapport trimestriel détaillé'], true],
    ],
    reviews: [
      ['Mariam Ouattara', 5, 'Parfait pour placer mon épargne sans stress.', 7],
      ['Koffi Yao', 4, 'Rendement modeste mais très régulier.', 45],
      ['Awa Traoré', 5, 'Maison historique, très transparente.', 80],
    ],
  },
  {
    slug: 'baobab-invest',
    name: 'Baobab Invest',
    tagline: 'Investir dans les entreprises qui grandissent',
    description:
      'Baobab Invest construit des portefeuilles d’actions sur la BRVM et les grandes places internationales. L’objectif : faire croître le capital sur la durée en misant sur des entreprises solides.',
    strategy:
      'Sélection d’actions à dividendes et de valeurs de croissance, rééquilibrage mensuel et diversification sur plus de 40 titres.',
    markets: ['actions', 'indices'],
    foundedYear: 2015,
    country: "Côte d'Ivoire",
    license: 'SGI agréée AMF-UMOA n° 2015-087',
    verified: true,
    monthlyReturns: [2.2, 1.4, -0.6, 2.9, 1.8, 2.5, -1.1, 3.0, 1.6, 2.4, 1.9, 2.1],
    winRate: 68,
    maxDrawdown: 5.2,
    riskLevel: 'faible',
    investorsCount: 5640,
    capitalManaged: 4_250_000_000,
    totalTrades: 1450,
    daysAgo: 600,
    plans: [
      ['Épargne', 10_000, 200_000, 90, 8, "à l'échéance", ['Dividendes réinvestis', 'Sans frais d’entrée']],
      ['Patrimoine', 200_000, 3_000_000, 365, 28, 'mensuel', ['Gains mensuels', 'Accès aux introductions en bourse'], true],
    ],
    reviews: [
      ['Serge Kouadio', 4, 'Bonne maison pour le long terme.', 12],
      ['Fatou Bamba', 5, 'Les rapports mensuels sont très clairs.', 30],
      ['Moussa Diallo', 4, 'Rendement correct et risque faible.', 55],
    ],
  },
  {
    slug: 'lagune-fx',
    name: 'Lagune FX',
    tagline: 'Le scalping Forex à haute fréquence',
    description:
      'Lagune FX est une jeune maison de trading spécialisée dans le scalping sur le Forex. Ses traders réalisent des dizaines de positions par jour pour capter de petits mouvements de prix.',
    strategy:
      'Scalping intraday sur les sessions de Londres et New York, avec des positions de quelques minutes et un ratio gain/risque de 1,5.',
    markets: ['forex'],
    foundedYear: 2021,
    country: 'Bénin',
    license: 'Enregistrée auprès de l’AMF-UMOA (en cours)',
    verified: false,
    monthlyReturns: [4.5, 3.2, 5.1, -2.4, 4.8, 3.9, 2.2, 5.6, -1.8, 4.1, 3.6, 4.4],
    winRate: 66,
    maxDrawdown: 9.8,
    riskLevel: 'modéré',
    investorsCount: 1980,
    capitalManaged: 640_000_000,
    totalTrades: 22400,
    daysAgo: 60,
    plans: [
      ['Flash', 10_000, 100_000, 21, 8, "à l'échéance", ['Durée courte', 'Gains rapides']],
      ['Pro', 100_000, 1_000_000, 60, 25, 'hebdomadaire', ['Gains chaque semaine', 'Statistiques détaillées'], true],
    ],
    reviews: [
      ['Ibrahim Koné', 4, 'Très bons résultats depuis 6 mois.', 5],
      ['Aya Kouassi', 3, 'Licence pas encore finalisée, je reste prudente.', 20],
      ['Koffi Yao', 5, 'Le plan Pro est très rentable.', 28],
    ],
  },
  {
    slug: 'orion-quant',
    name: 'Orion Quant',
    tagline: 'L’intelligence artificielle au service du trading',
    description:
      'Orion Quant développe des modèles quantitatifs et d’intelligence artificielle qui analysent des milliers de signaux pour trader les cryptomonnaies et les indices mondiaux.',
    strategy:
      'Modèles statistiques et apprentissage automatique, exécution 100 % automatisée et réallocation quotidienne entre crypto et indices.',
    markets: ['crypto', 'indices'],
    foundedYear: 2019,
    country: 'Togo',
    license: 'Agréée AMF-UMOA n° 2019-142',
    verified: true,
    monthlyReturns: [5.6, 6.1, -3.4, 7.2, 4.3, -2.1, 6.8, 5.4, 3.9, -4.6, 7.5, 6.2],
    winRate: 64,
    maxDrawdown: 14.2,
    riskLevel: 'élevé',
    investorsCount: 6150,
    capitalManaged: 2_980_000_000,
    totalTrades: 41800,
    daysAgo: 120,
    plans: [
      ['Algo', 20_000, 200_000, 30, 9, "à l'échéance", ['Exécution automatisée', 'Aucune intervention humaine']],
      ['Quant+', 200_000, 2_000_000, 90, 32, 'mensuel', ['Gains mensuels', 'Accès aux signaux de l’IA'], true],
      ['Institutionnel', 2_000_000, 20_000_000, 365, 120, 'mensuel', ['Portefeuille sur mesure', 'Reporting quotidien']],
    ],
    reviews: [
      ['Mariam Ouattara', 5, 'Les performances sont au rendez-vous.', 3],
      ['Serge Kouadio', 4, 'Quelques mois difficiles mais bilan annuel excellent.', 22],
      ['Fatou Bamba', 5, 'Très professionnel, reporting impeccable.', 50],
    ],
  },
  {
    slug: 'ivoire-gold',
    name: 'Ivoire Gold Traders',
    tagline: 'L’or, valeur refuge par excellence',
    description:
      'Ivoire Gold Traders est spécialisée dans le trading de l’or et des métaux précieux. Elle profite des mouvements de l’once d’or face au dollar tout en protégeant le capital de ses clients.',
    strategy:
      'Trading de tendance sur XAU/USD et XAG/USD, renforcé lors des périodes d’incertitude économique.',
    markets: ['matieres'],
    foundedYear: 2016,
    country: "Côte d'Ivoire",
    license: 'Agréée AMF-UMOA n° 2016-059',
    verified: true,
    monthlyReturns: [2.8, 3.4, 1.9, -1.5, 3.1, 2.7, 3.8, 2.2, -0.9, 3.5, 2.9, 3.2],
    winRate: 74,
    maxDrawdown: 5.9,
    riskLevel: 'modéré',
    investorsCount: 4380,
    capitalManaged: 2_120_000_000,
    totalTrades: 2730,
    daysAgo: 300,
    plans: [
      ['Or Bronze', 15_000, 150_000, 45, 8, "à l'échéance", ['Exposition à l’or', 'Idéal en période d’incertitude']],
      ['Or Argent', 150_000, 1_500_000, 90, 20, 'mensuel', ['Gains mensuels', 'Couverture contre l’inflation'], true],
      ['Or Platine', 1_500_000, 15_000_000, 180, 45, 'mensuel', ['Conseiller dédié', 'Bilan mensuel personnalisé']],
    ],
    reviews: [
      ['Aya Kouassi', 5, 'Mon meilleur placement de l’année.', 9],
      ['Moussa Diallo', 4, 'Rendement stable, équipe disponible.', 35],
      ['Ibrahim Koné', 5, 'Je recommande le plan Or Argent.', 70],
    ],
  },
  {
    slug: 'kora-asset',
    name: 'Kora Asset Management',
    tagline: 'Un portefeuille diversifié, actions et crypto',
    description:
      'Kora Asset Management combine actions technologiques et cryptomonnaies pour offrir un potentiel de croissance élevé, tout en diversifiant le risque sur deux classes d’actifs complémentaires.',
    strategy:
      'Allocation 60 % actions technologiques / 40 % crypto, rééquilibrée chaque semaine selon la volatilité du marché.',
    markets: ['actions', 'crypto'],
    foundedYear: 2018,
    country: 'Cameroun',
    license: 'Agréée COSUMAF n° 2018-022',
    verified: true,
    monthlyReturns: [3.9, -2.2, 4.6, 3.1, 5.2, -1.4, 4.0, 3.7, 2.5, -2.8, 4.9, 3.8],
    winRate: 63,
    maxDrawdown: 11.6,
    riskLevel: 'modéré',
    investorsCount: 3560,
    capitalManaged: 1_340_000_000,
    totalTrades: 5120,
    daysAgo: 180,
    plans: [
      ['Mix', 10_000, 150_000, 30, 7, "à l'échéance", ['Diversification immédiate', 'Faible montant d’entrée']],
      ['Mix Plus', 150_000, 2_000_000, 120, 30, 'mensuel', ['Gains mensuels', 'Rééquilibrage hebdomadaire'], true],
    ],
    reviews: [
      ['Koffi Yao', 4, 'Bon compromis entre risque et rendement.', 6],
      ['Mariam Ouattara', 4, 'Interface claire, retraits rapides.', 27],
      ['Serge Kouadio', 3, 'Quelques mois négatifs, à garder sur le long terme.', 48],
    ],
  },
];

const DAY_MS = 24 * 60 * 60 * 1000;

const daysAgoIso = (days: number) =>
  new Date(Date.now() - days * DAY_MS).toISOString();

const round = (value: number, digits = 1) =>
  Math.round(value * 10 ** digits) / 10 ** digits;

function lastMonthsLabels(count: number): string[] {
  const now = new Date();
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - count + index, 1);
    return date.toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' });
  });
}

function buildHouse(seed: SeedHouse, index: number): TradingHouse {
  const id = `house-${seed.slug}`;
  const labels = lastMonthsLabels(seed.monthlyReturns.length);
  const annualRoi =
    (seed.monthlyReturns.reduce((acc, value) => acc * (1 + value / 100), 1) - 1) * 100;
  const monthlyRoi =
    seed.monthlyReturns.reduce((acc, value) => acc + value, 0) /
    seed.monthlyReturns.length;

  const reviews: HouseReview[] = seed.reviews.map(
    ([author, rating, comment, daysAgo], reviewIndex) => ({
      id: `${id}-review-${reviewIndex}`,
      author,
      avatar: `avatar_${((index * 3 + reviewIndex) % 25) + 1}.jpg`,
      rating,
      comment,
      date: daysAgoIso(daysAgo),
    }),
  );
  const rating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const houseLevel = levelForHouseRoi(annualRoi);

  const plans: InvestmentPlan[] = seed.plans.map(
    ([name, minAmount, maxAmount, durationDays, expectedReturn, payout, features, popular], planIndex) => ({
      id: `${id}-plan-${planIndex}`,
      houseId: id,
      name,
      minAmount,
      maxAmount,
      durationDays,
      expectedReturn,
      payout,
      features,
      popular,
      requiredLevel: Math.max(houseLevel, levelForPlanReturn(expectedReturn)),
    }),
  );

  return {
    id,
    name: seed.name,
    logo: `${seed.slug}-logo.png`,
    cover: `${seed.slug}-cover.jpg`,
    card: `${seed.slug}-card.jpg`,
    tagline: seed.tagline,
    description: seed.description,
    strategy: seed.strategy,
    markets: seedMarkets.filter((market) => seed.markets.includes(market.id)),
    foundedYear: seed.foundedYear,
    country: seed.country,
    license: seed.license,
    verified: seed.verified,
    requiredLevel: houseLevel,
    stats: {
      winRate: seed.winRate,
      monthlyRoi: round(monthlyRoi),
      annualRoi: round(annualRoi),
      maxDrawdown: seed.maxDrawdown,
      riskLevel: seed.riskLevel,
      investorsCount: seed.investorsCount,
      capitalManaged: seed.capitalManaged,
      totalTrades: seed.totalTrades,
      rating: round(rating),
      reviewsCount: reviews.length,
    },
    performance: seed.monthlyReturns.map((value, monthIndex) => ({
      month: labels[monthIndex],
      value,
    })),
    screenshots: [1, 2, 3, 4].map((shot) => `${seed.slug}-shot-${shot}.jpg`),
    plans,
    reviews,
    created_at: daysAgoIso(seed.daysAgo),
  };
}

export function buildSeedHouses(): TradingHouse[] {
  return seedHouses.map(buildHouse);
}

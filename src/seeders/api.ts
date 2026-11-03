import { LocalStorageService } from '@/storages/local_storage_service';
import { AuthResponse } from '@/types';
import {
  Investment,
  InvestmentDetail,
  InvestmentPayouts,
  Transaction,
} from '@/types/InvestmentType';
import {
  NotificationPriorityEnum,
  NotificationType,
} from '@/types/NotificationType';
import { HouseDetail, Market, TradingHouse } from '@/types/TradingHouseType';
import { UserType } from '@/types/UserType';
import {
  EMPTY_WALLET,
  Wallet,
  WalletMovePayload,
  WalletQuote,
  WalletQuoteType,
  WalletTransaction,
  WalletTransactionPage,
} from '@/types/WalletType';
import {
  InvestmentLevel,
  InvestorLevel,
  UserLevelStatus,
} from '@/types/LevelType';
import {
  ReferralDividend,
  ReferralFilleul,
  ReferralLevel,
  ReferralOverview,
} from '@/types/ReferralType';
import {
  buildDailyPayouts,
  formatAmount,
  toInvestmentDetail,
} from '@/utils/invest_helper';
import { ACCESS_CODE_MAX_LENGTH, ACCESS_CODE_MIN_LENGTH } from '@/config';
import {
  buildSeedNotifications,
  seedOnboarding,
  seedPromocodes,
  seedReviews,
} from './content';
import { buildSeedHouses, seedMarkets } from './houses';
import { computeLevelRank, levelStatus, seedLevels } from './levels';

type Credential = {
  code: string;
  failures: number;
  suspensions: number;
  blockedUntil?: number;
};

type SeedDb = {
  users: Record<string, UserType>;
  credentials?: Record<string, Credential>;
};

const MAX_FAILED_ATTEMPTS = 3;
const SUSPENSION_STEPS_MS = [10, 30, 180, 1440].map(
  (minutes) => minutes * 60 * 1000,
);

export type InvestPayload = {
  houseId: string;
  planId: string;
  amount: number;
  service: string;
  numberTel: string;
  otp?: string;
};

const DB_KEY = 'seed_db';
const TOKEN_PREFIX = 'Bearer seed-';
const LATENCY_MS = 150;

const isBrowser = () => typeof window !== 'undefined';
const wait = (ms = LATENCY_MS) =>
  new Promise((resolve) => setTimeout(resolve, ms));
const uid = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

function readDb(): SeedDb {
  if (!isBrowser()) return { users: {} };
  const raw = localStorage.getItem(DB_KEY);
  return raw ? (JSON.parse(raw) as SeedDb) : { users: {} };
}

function writeDb(db: SeedDb) {
  if (isBrowser()) localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function currentUserId(): string | null {
  if (!isBrowser()) return null;
  const token = LocalStorageService.getToken();
  if (!token) return null;
  if (token.startsWith(TOKEN_PREFIX)) return token.slice(TOKEN_PREFIX.length);
  // Vraie API de connexion : on retrouve le compte par l'id du profil connecté.
  return LocalStorageService.getUser()?.id ?? null;
}

function getCurrentUser(): UserType | null {
  const id = currentUserId();
  return id ? (readDb().users[id] ?? null) : null;
}

function saveUser(user: UserType) {
  const db = readDb();
  db.users[user.id] = user;
  writeDb(db);
}

// Uniquement des formules du palier 1 : un compte de démo démarre au palier Découverte.
const DEMO_PORTFOLIO: [
  slug: string,
  planIndex: number,
  amount: number,
  startedDaysAgo: number,
][] = [
  ['sahel-trading', 0, 100_000, 75],
  ['baobab-invest', 0, 50_000, 100],
  ['baobab-invest', 0, 100_000, 15],
];
const DEMO_ACCOUNT_AGE_DAYS = 120;

/** Investissements d'exemple pour que le portefeuille de démo ne soit pas vide. */
function buildDemoPortfolio(phoneNumber: string) {
  const houses = buildSeedHouses();
  const investments: Investment[] = [];
  const transactions: Transaction[] = [];

  DEMO_PORTFOLIO.forEach(([slug, planIndex, amount, startedDaysAgo], index) => {
    const house = houses.find((item) => item.id === `house-${slug}`)!;
    const plan = house.plans[planIndex];
    const start = new Date(Date.now() - startedDaysAgo * 24 * 60 * 60 * 1000);
    const end = new Date(
      start.getTime() + plan.durationDays * 24 * 60 * 60 * 1000,
    );
    const id = `inv-demo-${index}`;
    const service = ['orangeci', 'mtnci', 'waveci'][index];
    investments.push({
      id,
      houseId: house.id,
      houseName: house.name,
      houseLogo: house.logo,
      planId: plan.id,
      planName: plan.name,
      amount,
      expectedReturn: plan.expectedReturn,
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      status: end.getTime() > Date.now() ? 'ACTIVE' : 'MATURED',
      paymentService: service,
      phoneNumber,
    });
    transactions.push({
      id: `tx-demo-${index}`,
      type: 'investissement',
      label: `${plan.name} — ${house.name}`,
      amount,
      date: start.toISOString(),
      status: 'réussi',
      paymentService: service,
      reference: `INV-DEMO-${index + 1}`,
    });
  });

  transactions.sort((a, b) => b.date.localeCompare(a.date));
  return { investments, transactions };
}

function randomReferralCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from(
    { length: 8 },
    () => alphabet[Math.floor(Math.random() * alphabet.length)],
  ).join('');
}

/** Soldes calculés comme le ferait le backend (`activeBalance`, `availableBalance`). */
function withBalances(user: UserType): UserType {
  const invested = (user.investments ?? [])
    .filter((investment) => new Date(investment.endDate).getTime() > Date.now())
    .reduce((acc, investment) => acc + investment.amount, 0);
  const { deposits, availableBalance } = (user.transactions ?? []).reduce(
    (acc, transaction) => {
      if (transaction.status !== 'réussi') return acc;
      if (transaction.type === 'deposit') {
        return { ...acc, deposits: acc.deposits + transaction.amount };
      }
      if (transaction.type === 'gain') {
        return {
          ...acc,
          availableBalance: acc.availableBalance + transaction.amount,
        };
      }
      if (transaction.type === 'retrait') {
        return {
          ...acc,
          availableBalance: acc.availableBalance - transaction.amount,
        };
      }
      return acc;
    },
    { deposits: 0, availableBalance: 0 },
  );
  const activeBalance = invested + deposits;
  return {
    ...user,
    currency: user.currency ?? 'XOF',
    activeBalance,
    availableBalance,
  };
}

function createUser(phoneNumber = ''): UserType {
  return {
    id: `${Date.now()}`,
    created_at: new Date(
      Date.now() - DEMO_ACCOUNT_AGE_DAYS * 24 * 60 * 60 * 1000,
    ).toISOString(),
    levelRank: 1,
    currency: 'XOF',
    referralCode: randomReferralCode(),
    full_name: '',
    pseudo: '',
    email: null,
    phone_number: phoneNumber,
    profil: 'avatar_21.jpg',
    notifications: buildSeedNotifications(),
    ...buildDemoPortfolio(phoneNumber),
    favoriteHouseIds: ['house-sahel-trading'],
  };
}

/** Recalcule le palier ; notifie l'utilisateur quand il en gagne un. */
function refreshLevel(user: UserType): UserType {
  const rank = computeLevelRank(user);
  if (rank === user.levelRank) return user;
  const isPromotion = user.levelRank !== undefined && rank > user.levelRank;
  const level = seedLevels.find((item) => item.rank === rank)!;
  const updated: UserType = {
    ...user,
    levelRank: rank,
    notifications: isPromotion
      ? [
          notification(
            `Félicitations ! Vous passez au palier ${level.name} : ${level.perks.join(', ')}.`,
          ),
          ...(user.notifications ?? []),
        ]
      : user.notifications,
  };
  saveUser(updated);
  return updated;
}

/** Même format que `POST /user/auth/valid-authentification`. */
function login(user: UserType, isFirstConnexion = false): AuthResponse {
  const withCode = {
    ...user,
    referralCode: user.referralCode ?? randomReferralCode(),
  };
  saveUser(withCode);
  return {
    etat: true,
    result: {
      client: {
        ...withBalances(refreshLevel(settleMaturedInvestments(withCode))),
        access_token: `${TOKEN_PREFIX}${user.id}`,
      },
      isFirstConnexion,
    },
  };
}

function findUserByPhone(phoneNumber: string): UserType | undefined {
  return Object.values(readDb().users).find(
    (user) => user.phone_number === phoneNumber,
  );
}

function notification(message: string): NotificationType {
  const now = new Date();
  return {
    id: uid('notif'),
    message,
    isRead: false,
    priority: NotificationPriorityEnum.HIGH,
    created_at: now,
    updated_at: now,
  };
}

/** Crée la transaction de gain des investissements arrivés à échéance. */
function settleMaturedInvestments(user: UserType): UserType {
  const transactions = [...(user.transactions ?? [])];
  const notifications = [...(user.notifications ?? [])];
  let changed = false;

  for (const investment of user.investments ?? []) {
    const reference = `GAIN-${investment.id}`;
    const matured = new Date(investment.endDate).getTime() <= Date.now();
    if (!matured || transactions.some((item) => item.reference === reference)) {
      continue;
    }
    const gain = (investment.amount * investment.expectedReturn) / 100;
    transactions.unshift({
      id: uid('tx'),
      type: 'gain',
      label: `Gains ${investment.planName} — ${investment.houseName}`,
      amount: investment.amount + gain,
      date: investment.endDate,
      status: 'réussi',
      paymentService: investment.paymentService,
      reference,
    });
    notifications.unshift(
      notification(
        `Votre investissement ${investment.planName} chez ${investment.houseName} est arrivé à échéance : ${formatAmount(investment.amount + gain)} versés.`,
      ),
    );
    changed = true;
  }

  if (!changed) return user;
  const updated = { ...user, transactions, notifications };
  saveUser(updated);
  return updated;
}

const PROFILE_FIELDS = [
  'full_name',
  'pseudo',
  'email',
  'phone_number',
  'profil',
  'currency',
  'referralCode',
] as const;

/**
 * Mode hybride (connexion réelle, investissements simulés) : rattache au profil
 * renvoyé par l'API les données seeder du même compte (créées vides au besoin).
 * Les notifications restent celles de l'API (`GET /notification`).
 */
export function attachSeedData(client: UserType): UserType {
  const db = readDb();
  const existing = db.users[client.id];
  const record: UserType = {
    ...(existing ?? {
      id: client.id,
      created_at: new Date().toISOString(),
      levelRank: 1,
      notifications: [],
      investments: [],
      transactions: [],
      favoriteHouseIds: [],
    }),
  } as UserType;
  for (const field of PROFILE_FIELDS) {
    (record as Record<string, unknown>)[field] = client[field];
  }
  saveUser(record);
  const seeded = withBalances(refreshLevel(settleMaturedInvestments(record)));
  return {
    ...client,
    created_at: seeded.created_at,
    levelRank: seeded.levelRank,
    investments: seeded.investments,
    transactions: seeded.transactions,
    favoriteHouseIds: seeded.favoriteHouseIds,
    activeBalance: seeded.activeBalance,
    availableBalance: seeded.availableBalance,
  };
}

export async function getHouses(): Promise<TradingHouse[]> {
  await wait();
  return buildSeedHouses();
}

export async function getHouseById(id: string): Promise<HouseDetail> {
  await wait();
  const houses = buildSeedHouses();
  const house = houses.find((item) => item.id === id);
  if (!house) throw new Error(`Maison introuvable : ${id}`);
  return {
    house,
    similar: houses.filter((item) => item.id !== id).slice(0, 4),
    investorLevel: null,
  };
}

export async function getMarkets(): Promise<Market[]> {
  return seedMarkets;
}

export async function rateHouse(
  houseId: string,
  payload: { rating: number; message: string },
): Promise<AuthResponse> {
  await wait();
  const user = getCurrentUser();
  if (!user) {
    return { etat: false, error: ['Connectez-vous pour laisser un avis'] };
  }
  const invested = (user.investments ?? []).some(
    (item) => item.houseId === houseId,
  );
  if (!invested) {
    return {
      etat: false,
      error: ['Vous devez avoir investi dans cette maison pour la noter.'],
    };
  }
  return {
    etat: true,
    message: 'Avis publié',
    result: {
      rating: payload.rating,
      message: payload.message,
      author: user.full_name || user.pseudo,
    },
  };
}

export async function getUser(): Promise<UserType | null> {
  await wait();
  const user = getCurrentUser();
  if (!user) {
    if (isBrowser() && LocalStorageService.isTokenPresent()) {
      LocalStorageService.clearData();
    }
    return null;
  }
  return withBalances(refreshLevel(settleMaturedInvestments(user)));
}

export async function updateUser(
  item: Partial<UserType>,
): Promise<AuthResponse> {
  await wait();
  const user = getCurrentUser();
  if (!user) return { etat: false, error: ['Utilisateur non connecté'] };
  const { levelRank: _ignored, ...editable } = item;
  const updated = withBalances(refreshLevel({ ...user, ...editable }));
  saveUser(updated);
  LocalStorageService.saveUser(updated);
  return { etat: true, result: { client: updated } };
}

export async function getNotifications(): Promise<NotificationType[]> {
  await wait();
  return getCurrentUser()?.notifications ?? [];
}

export async function readAllNotificationUser(): Promise<AuthResponse> {
  await wait();
  const user = getCurrentUser();
  if (!user) return { etat: false, error: ['Utilisateur non connecté'] };
  saveUser({
    ...user,
    notifications: (user.notifications ?? []).map((item) => ({
      ...item,
      isRead: true,
    })),
  });
  return { etat: true };
}

function formatWait(ms: number): string {
  const minutes = Math.ceil(ms / 60_000);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.ceil(minutes / 60);
  return hours < 24 ? `${hours} h` : `${Math.ceil(hours / 24)} j`;
}

function saveCredential(userId: string, credential: Credential) {
  const db = readDb();
  db.credentials = { ...(db.credentials ?? {}), [userId]: credential };
  writeDb(db);
}

const isValidAccessCode = (code: string) =>
  new RegExp(`^\\d{${ACCESS_CODE_MIN_LENGTH},${ACCESS_CODE_MAX_LENGTH}}$`).test(
    code,
  );

const accessCodeFormatError = `Le code d'accès doit contenir ${ACCESS_CODE_MIN_LENGTH} à ${ACCESS_CODE_MAX_LENGTH} chiffres`;

export async function requestAuthentication(
  phoneNumber: string,
  _referralCode?: string,
): Promise<AuthResponse> {
  await wait();
  const user = findUserByPhone(phoneNumber);
  const blockedUntil = user && readDb().credentials?.[user.id]?.blockedUntil;
  return {
    etat: true,
    result: {
      isNewAccount: !user,
      isLocked: !!blockedUntil && blockedUntil > Date.now(),
    },
  };
}

export async function verifyAuthentication(
  phoneNumber: string,
  otp: string,
  referralCode?: string,
): Promise<AuthResponse> {
  await wait();
  if (!isValidAccessCode(otp)) {
    return { etat: false, error: [accessCodeFormatError] };
  }

  const existing = findUserByPhone(phoneNumber);
  if (!existing) {
    const user = {
      ...createUser(phoneNumber),
      referredBy: referralCode || undefined,
    };
    saveCredential(user.id, { code: otp, failures: 0, suspensions: 0 });
    return login(user, true);
  }

  const credential = readDb().credentials?.[existing.id];
  if (!credential) {
    // Compte créé avant l'arrivée des codes d'accès : le premier code saisi devient le sien.
    saveCredential(existing.id, { code: otp, failures: 0, suspensions: 0 });
    return login(existing);
  }

  if (credential.blockedUntil && credential.blockedUntil > Date.now()) {
    return {
      etat: false,
      error: [
        `Trop de codes erronés : compte suspendu, réessayez dans ${formatWait(credential.blockedUntil - Date.now())}.`,
      ],
    };
  }

  if (credential.code !== otp) {
    const failures = credential.failures + 1;
    if (failures >= MAX_FAILED_ATTEMPTS) {
      const duration =
        SUSPENSION_STEPS_MS[
          Math.min(credential.suspensions, SUSPENSION_STEPS_MS.length - 1)
        ];
      saveCredential(existing.id, {
        ...credential,
        failures: 0,
        suspensions: credential.suspensions + 1,
        blockedUntil: Date.now() + duration,
      });
      return {
        etat: false,
        error: [
          `Code incorrect. Compte suspendu pendant ${formatWait(duration)}.`,
        ],
      };
    }
    saveCredential(existing.id, { ...credential, failures });
    const left = MAX_FAILED_ATTEMPTS - failures;
    return {
      etat: false,
      error: [
        `Code incorrect. Il vous reste ${left} tentative${left > 1 ? 's' : ''}.`,
      ],
    };
  }

  saveCredential(existing.id, {
    ...credential,
    failures: 0,
    blockedUntil: undefined,
  });
  return login(existing);
}

export async function changeAccessCode(
  currentCode: string,
  newCode: string,
): Promise<AuthResponse> {
  await wait();
  const user = getCurrentUser();
  if (!user) return { etat: false, error: ['Veuillez vous connecter'] };
  const credential = readDb().credentials?.[user.id];
  if (credential && credential.code !== currentCode) {
    return { etat: false, error: ['Le code d’accès actuel est incorrect'] };
  }
  if (!isValidAccessCode(newCode)) {
    return { etat: false, error: [accessCodeFormatError] };
  }
  if (newCode === currentCode) {
    return {
      etat: false,
      error: ['Le nouveau code doit être différent de l’actuel'],
    };
  }
  saveCredential(user.id, {
    code: newCode,
    failures: 0,
    suspensions: credential?.suspensions ?? 0,
  });
  return { etat: true, message: 'Code d’accès modifié' };
}

export async function createAnonymousUser(): Promise<AuthResponse> {
  await wait();
  const response = login(createUser(), true);
  LocalStorageService.saveToken(response.result.client.access_token);
  LocalStorageService.saveUser(response.result.client);
  return response;
}

export async function biometricLogin(phoneNumber: string) {
  const response = login(
    findUserByPhone(phoneNumber) ?? createUser(phoneNumber),
  );
  const { access_token, ...client } = response.result.client;
  LocalStorageService.saveToken(access_token);
  return { etat: true, result: client };
}

export async function invest(payload: InvestPayload): Promise<AuthResponse> {
  await wait(1200);
  const current = getCurrentUser();
  if (!current) return { etat: false, error: ['Veuillez vous connecter'] };
  const user = refreshLevel(settleMaturedInvestments(current));

  const house = buildSeedHouses().find((item) => item.id === payload.houseId);
  const plan = house?.plans.find((item) => item.id === payload.planId);
  if (!house || !plan) {
    return { etat: false, error: ['Formule introuvable'] };
  }
  const userLevel = user.levelRank ?? 1;
  if (plan.requiredLevel > userLevel) {
    const required = seedLevels.find(
      (item) => item.rank === plan.requiredLevel,
    )!;
    return {
      etat: false,
      error: [
        `Cette formule est réservée au palier ${required.name} ou supérieur.`,
      ],
      result: { code: 'LEVEL_REQUIRED', requiredLevel: plan.requiredLevel },
    };
  }
  if (payload.amount < plan.minAmount || payload.amount > plan.maxAmount) {
    return {
      etat: false,
      error: [
        `Le montant doit être compris entre ${formatAmount(plan.minAmount)} et ${formatAmount(plan.maxAmount)}`,
      ],
    };
  }

  const startDate = new Date();
  const workStart =
    plan.subscriptionEndDate &&
    new Date(plan.subscriptionEndDate).getTime() > startDate.getTime()
      ? new Date(plan.subscriptionEndDate)
      : startDate;
  const endDate = plan.maturityDate
    ? new Date(plan.maturityDate)
    : new Date(
        workStart.getTime() + plan.durationDays * 24 * 60 * 60 * 1000,
      );
  const investment: Investment = {
    id: uid('inv'),
    houseId: house.id,
    houseName: house.name,
    houseLogo: house.logo,
    planId: plan.id,
    planName: plan.name,
    amount: payload.amount,
    expectedReturn: plan.expectedReturn,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    subscriptionEndDate: plan.subscriptionEndDate,
    workStartDate: workStart.toISOString(),
    status: 'ACTIVE',
    paymentService: payload.service,
    phoneNumber: payload.numberTel,
  };
  const transaction: Transaction = {
    id: uid('tx'),
    type: 'investissement',
    label: `${plan.name} — ${house.name}`,
    amount: payload.amount,
    date: startDate.toISOString(),
    status: 'réussi',
    paymentService: payload.service,
    reference: `INV-${investment.id.slice(4, 17)}`,
  };

  saveUser({
    ...user,
    phone_number: user.phone_number || payload.numberTel,
    investments: [investment, ...(user.investments ?? [])],
    transactions: [transaction, ...(user.transactions ?? [])],
    notifications: [
      notification(
        `Investissement de ${formatAmount(payload.amount)} confirmé chez ${house.name} (${plan.name}).`,
      ),
      ...(user.notifications ?? []),
    ],
  });
  return { etat: true, result: { investment, transaction } };
}

export async function getInvestments(): Promise<Investment[]> {
  await wait();
  const user = getCurrentUser();
  return user ? (settleMaturedInvestments(user).investments ?? []) : [];
}

export async function getInvestmentById(
  id: string,
): Promise<InvestmentDetail | null> {
  await wait();
  const investments = await getInvestments();
  const investment = investments.find((item) => item.id === id);
  if (!investment) return null;
  const payouts = buildDailyPayouts(investment);
  const paidAmount = payouts
    .filter((item) => item.status === 'received')
    .reduce((acc, item) => acc + item.amount, 0);
  const remainingAmount = payouts
    .filter((item) => item.status === 'upcoming')
    .reduce((acc, item) => acc + item.amount, 0);
  return toInvestmentDetail(investment, { paidAmount, remainingAmount });
}

export async function getInvestmentPayouts(
  id: string,
): Promise<InvestmentPayouts> {
  await wait();
  const investments = await getInvestments();
  const investment = investments.find((item) => item.id === id);
  const list = investment ? buildDailyPayouts(investment) : [];
  return {
    received: list.filter((item) => item.status === 'received'),
    upcoming: list.filter((item) => item.status === 'upcoming'),
  };
}

export async function getTransactions(): Promise<Transaction[]> {
  await wait();
  const user = getCurrentUser();
  return user ? (settleMaturedInvestments(user).transactions ?? []) : [];
}

const XOF_PER_USD = 588.30159502;

function toWalletTransaction(transaction: Transaction): WalletTransaction {
  const type =
    transaction.type === 'retrait'
      ? 'withdraw'
      : transaction.type === 'deposit'
        ? 'deposit'
        : transaction.type === 'gain'
          ? 'payout'
          : 'investment';
  return {
    id: transaction.id,
    type,
    status:
      transaction.status === 'réussi'
        ? 'SUCCESS'
        : transaction.status === 'échoué'
          ? 'FAILED'
          : 'PENDING',
    amount: transaction.amount,
    service: transaction.paymentService,
    reference: transaction.reference,
    label: transaction.label,
    date: transaction.date,
    balanceKind:
      type === 'investment' || type === 'deposit' ? 'active' : 'available',
  };
}

function seedWalletTransactions(): WalletTransaction[] {
  const user = getCurrentUser();
  const settled = user ? settleMaturedInvestments(user) : null;
  const fromHistory = (settled?.transactions ?? []).map(toWalletTransaction);
  const pending: WalletTransaction = {
    id: 'tx-pending-deposit',
    type: 'deposit',
    status: 'PENDING',
    amount: 10_000,
    usdAmount: 10_000 / XOF_PER_USD,
    service: 'waveci',
    reference: 'DEP-PENDING-1',
    label: 'Recharge Wave',
    date: new Date().toISOString(),
    balanceKind: 'available',
    message: 'Confirmez le paiement sur votre téléphone.',
  };
  const byId = new Map<string, WalletTransaction>();
  for (const item of [pending, ...fromHistory]) byId.set(item.id, item);
  return [...byId.values()].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getWallet(): Promise<Wallet> {
  await wait();
  const user = getCurrentUser();
  if (!user) return { ...EMPTY_WALLET };
  const settled = withBalances(settleMaturedInvestments(user));
  const investments = settled.investments ?? [];
  const active = investments.filter(
    (item) =>
      item.status !== 'CANCELED' &&
      new Date(item.endDate).getTime() > Date.now(),
  );
  const done = investments.filter(
    (item) =>
      item.status !== 'CANCELED' &&
      new Date(item.endDate).getTime() <= Date.now(),
  );
  const txs = settled.transactions ?? [];
  const sum = (
    type: Transaction['type'],
    status: Transaction['status'] = 'réussi',
  ) =>
    txs
      .filter((item) => item.type === type && item.status === status)
      .reduce((acc, item) => acc + item.amount, 0);
  return {
    activeBalance: settled.activeBalance ?? 0,
    availableBalance: settled.availableBalance ?? 0,
    investmentsInProgress: active.length,
    investedAmount: active.reduce((acc, item) => acc + item.amount, 0),
    expectedPayout: active.reduce(
      (acc, item) => acc + (item.amount * item.expectedReturn) / 100,
      0,
    ),
    totalDeposited: sum('deposit'),
    totalWithdrawn: sum('retrait'),
    totalPayouts: sum('gain'),
    totalCapitalReturned: done.reduce((acc, item) => acc + item.amount, 0),
    totalReferralDividends: 0,
  };
}

export async function getWalletTransactions(params: {
  page?: number;
  limit?: number;
  type?: string;
} = {}): Promise<WalletTransactionPage> {
  await wait();
  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const type = params.type?.toLowerCase();
  const all = seedWalletTransactions().filter(
    (item) => !type || item.type === type,
  );
  const start = (page - 1) * limit;
  return {
    items: all.slice(start, start + limit),
    total: all.length,
    page,
    limit,
  };
}

export async function getWalletTransactionById(
  id: string,
): Promise<WalletTransaction | null> {
  await wait();
  return seedWalletTransactions().find((item) => item.id === id) ?? null;
}

export async function getWalletQuote(params: {
  type: WalletQuoteType;
  service: string;
  amount: number;
}): Promise<WalletQuote> {
  await wait();
  const usdAmount = params.amount / XOF_PER_USD;
  return {
    type: params.type,
    service: params.service,
    amount: params.amount,
    usdAmount,
    rate: XOF_PER_USD,
    fee: 0,
    netUsd: usdAmount,
    currency: 'XOF',
  };
}

export async function depositWallet(
  payload: WalletMovePayload,
): Promise<AuthResponse> {
  await wait(900);
  const current = getCurrentUser();
  if (!current) return { etat: false, error: ['Veuillez vous connecter'] };
  if (
    payload.service === 'orangeci' &&
    (!payload.otp || payload.otp.length !== 6)
  ) {
    return { etat: false, error: ['Le code OTP doit contenir 6 chiffres'] };
  }
  if (payload.amount <= 0) {
    return { etat: false, error: ['Montant invalide'] };
  }
  const user = withBalances(settleMaturedInvestments(current));
  const transaction: Transaction = {
    id: uid('tx'),
    type: 'deposit',
    label: `Recharge ${payload.service}`,
    amount: payload.amount,
    date: new Date().toISOString(),
    status: 'réussi',
    paymentService: payload.service,
    reference: `DEP-${Date.now()}`,
  };
  saveUser({
    ...user,
    phone_number: user.phone_number || payload.numberTel,
    transactions: [transaction, ...(user.transactions ?? [])],
    notifications: [
      notification(
        `Recharge de ${formatAmount(payload.amount)} confirmée sur votre solde actif.`,
      ),
      ...(user.notifications ?? []),
    ],
  });
  return {
    etat: true,
    result: { transaction: toWalletTransaction(transaction) },
  };
}

export async function withdrawWallet(
  payload: WalletMovePayload,
): Promise<AuthResponse> {
  await wait(900);
  const current = getCurrentUser();
  if (!current) return { etat: false, error: ['Veuillez vous connecter'] };
  const user = withBalances(settleMaturedInvestments(current));
  if (payload.amount <= 0) {
    return { etat: false, error: ['Montant invalide'] };
  }
  if (payload.amount > (user.availableBalance ?? 0)) {
    return { etat: false, error: ['Solde disponible insuffisant'] };
  }
  const transaction: Transaction = {
    id: uid('tx'),
    type: 'retrait',
    label: `Retrait ${payload.service}`,
    amount: payload.amount,
    date: new Date().toISOString(),
    status: 'réussi',
    paymentService: payload.service,
    reference: `WTH-${Date.now()}`,
  };
  saveUser({
    ...user,
    phone_number: user.phone_number || payload.numberTel,
    transactions: [transaction, ...(user.transactions ?? [])],
    notifications: [
      notification(
        `Retrait de ${formatAmount(payload.amount)} envoyé vers votre mobile money.`,
      ),
      ...(user.notifications ?? []),
    ],
  });
  return {
    etat: true,
    result: { transaction: toWalletTransaction(transaction) },
  };
}

export async function toggleFavorite(houseId: string): Promise<AuthResponse> {
  await wait(50);
  const user = getCurrentUser();
  if (!user) return { etat: false, error: ['Veuillez vous connecter'] };
  const favorites = user.favoriteHouseIds ?? [];
  const favoriteHouseIds = favorites.includes(houseId)
    ? favorites.filter((id) => id !== houseId)
    : [...favorites, houseId];
  const updated = { ...user, favoriteHouseIds };
  saveUser(updated);
  const stored = LocalStorageService.getUser();
  const client =
    stored?.id === updated.id ? { ...stored, favoriteHouseIds } : updated;
  return { etat: true, result: { client } };
}

export async function getLevels(): Promise<InvestmentLevel[]> {
  return seedLevels;
}

export async function getLevelStatus(): Promise<UserLevelStatus | null> {
  await wait();
  const user = getCurrentUser();
  return user
    ? levelStatus(refreshLevel(settleMaturedInvestments(user)))
    : null;
}

export async function getInvestorLevel(): Promise<InvestorLevel | null> {
  await wait();
  const status = await getLevelStatus();
  if (!status) return null;
  const missing = status.next
    ? Math.max(
        0,
        status.next.requirements.completedInvestments -
          status.progress.completedInvestments,
      )
    : 0;
  return {
    level: status.current.name.toUpperCase(),
    levelLabel: status.current.name,
    investmentCount: status.progress.completedInvestments,
    nextLevel: status.next
      ? {
          level: status.next.name.toUpperCase(),
          levelLabel: status.next.name,
          missingInvestments: missing,
        }
      : undefined,
    amountSinceLevel: 0,
    referralsSinceLevel: 0,
    stars: {
      total: 0,
      fromAmount: 0,
      fromReferrals: 0,
      isMax: false,
      nextHalfStar: {
        missingAmount: 500,
        missingReferrals: 1,
      },
    },
    rules: {
      starAmountStep: 1000,
      referralsPerStar: 2,
      maxStars: 5,
      intermediateMinInvestments: 4,
      professionalMinInvestments: 11,
    },
  };
}

const SEED_REFERRAL_LEVELS: ReferralLevel[] = [
  {
    id: 'seed-ref-debutant',
    name: 'Débutant',
    position: 0,
    minReferrals: 0,
    minActiveReferrals: 0,
    maxParallelInvestments: 1,
    dividendPercentage: 0,
    maxDividendsPerReferral: 0,
  },
  {
    id: 'seed-ref-bronze',
    name: 'Bronze',
    position: 1,
    minReferrals: 1,
    minActiveReferrals: 1,
    maxParallelInvestments: 2,
    dividendPercentage: 10,
    maxDividendsPerReferral: 3,
  },
  {
    id: 'seed-ref-argent',
    name: 'Argent',
    position: 2,
    minReferrals: 5,
    minActiveReferrals: 3,
    maxParallelInvestments: 3,
    dividendPercentage: 10,
    maxDividendsPerReferral: 5,
  },
  {
    id: 'seed-ref-or',
    name: 'Or',
    position: 3,
    minReferrals: 15,
    minActiveReferrals: 10,
    maxParallelInvestments: 5,
    dividendPercentage: 10,
    maxDividendsPerReferral: 10,
  },
];

export async function getReferral(): Promise<ReferralOverview | null> {
  await wait();
  const user = getCurrentUser();
  if (!user) return null;
  const code = user.referralCode || randomReferralCode();
  const level = SEED_REFERRAL_LEVELS[0];
  const next = SEED_REFERRAL_LEVELS[1];
  const activeInvestments = (user.investments ?? []).filter(
    (item) => new Date(item.endDate).getTime() > Date.now(),
  ).length;
  return {
    referralCode: code,
    referralLink: `?ref=${code}`,
    sponsor: user.referredBy
      ? { id: 'sponsor', name: 'Parrain', referralCode: user.referredBy }
      : null,
    level,
    nextLevel: {
      ...next,
      missingReferrals: Math.max(0, next.minReferrals),
      missingActiveReferrals: Math.max(0, next.minActiveReferrals),
    },
    stats: {
      totalReferrals: 0,
      activeReferrals: 0,
      dividendsCount: 0,
      totalDividends: 0,
    },
    investmentsInProgress: activeInvestments,
    remainingParallelInvestments: Math.max(
      0,
      level.maxParallelInvestments - activeInvestments,
    ),
  };
}

export async function getReferralLevels(): Promise<ReferralLevel[]> {
  await wait();
  return SEED_REFERRAL_LEVELS;
}

export async function getReferralFilleuls(): Promise<ReferralFilleul[]> {
  await wait();
  return [];
}

export async function getReferralDividends(): Promise<ReferralDividend[]> {
  await wait();
  return [];
}

export async function getReviews() {
  return seedReviews;
}

export async function getPromocodes() {
  return seedPromocodes;
}

export async function getOnboarding() {
  return seedOnboarding;
}

export type WalletQuoteType = 'deposit' | 'withdraw';

export type WalletMovePayload = {
  amount: number;
  service: string;
  numberTel: string;
  otp?: string;
};

export type Wallet = {
  activeBalance: number;
  availableBalance: number;
  investmentsInProgress: number;
  investedAmount: number;
  expectedPayout: number;
  totalDeposited: number;
  totalWithdrawn: number;
  totalPayouts: number;
  totalCapitalReturned: number;
  totalReferralDividends: number;
};

export type WalletTransactionKind =
  | 'deposit'
  | 'withdraw'
  | 'investment'
  | 'payout'
  | 'referral'
  | 'capital'
  | 'other';

export type WalletTransactionStatus =
  | 'PENDING'
  | 'SUCCESS'
  | 'FAILED'
  | 'CANCELED';

export type WalletBalanceKind = 'active' | 'available';

export type WalletTransaction = {
  id: string;
  type: WalletTransactionKind;
  status: WalletTransactionStatus;
  /** Montant affiché (XOF / devise d’origine). */
  amount: number;
  usdAmount?: number;
  originalAmount?: number;
  originalCurrency?: string;
  exchangeRate?: number;
  exchangeMargin?: number;
  currency?: string;
  service?: string;
  phoneNumber?: string;
  reference?: string;
  label: string;
  date: string;
  updatedAt?: string;
  balanceKind?: WalletBalanceKind;
  balanceAfter?: number | null;
  message?: string;
  paidAt?: string;
  expiresAt?: string;
  paymentUrl?: string;
};

export type WalletTransactionPage = {
  items: WalletTransaction[];
  total: number;
  page: number;
  limit: number;
};

export type WalletQuote = {
  type: WalletQuoteType;
  service: string;
  amount: number;
  usdAmount: number;
  rate?: number;
  fee?: number;
  netUsd?: number;
  currency?: string;
};

export const WALLET_QUOTE_TYPES: WalletQuoteType[] = ['deposit', 'withdraw'];

export const WALLET_TRANSACTION_TYPE_LABEL: Record<
  WalletTransactionKind,
  string
> = {
  deposit: 'Dépôt',
  withdraw: 'Retrait',
  investment: 'Investissement',
  payout: 'Versement',
  referral: 'Parrainage',
  capital: 'Capital restitué',
  other: 'Mouvement',
};

export const WALLET_TRANSACTION_STATUS_LABEL: Record<
  WalletTransactionStatus,
  string
> = {
  PENDING: 'En cours',
  SUCCESS: 'Réussi',
  FAILED: 'Échoué',
  CANCELED: 'Annulé',
};

export const EMPTY_WALLET: Wallet = {
  activeBalance: 0,
  availableBalance: 0,
  investmentsInProgress: 0,
  investedAmount: 0,
  expectedPayout: 0,
  totalDeposited: 0,
  totalWithdrawn: 0,
  totalPayouts: 0,
  totalCapitalReturned: 0,
  totalReferralDividends: 0,
};

export type ApiInvestmentStatus =
  | 'PENDING'
  | 'ACTIVE'
  | 'MATURED'
  | 'PAID'
  | 'CANCELED';

export type InvestmentStatus = 'actif' | 'terminé' | ApiInvestmentStatus;

export type Investment = {
  id: string;
  houseId: string;
  houseName: string;
  houseLogo: string;
  planId: string;
  planName: string;
  amount: number;
  expectedReturn: number;
  /** Date de souscription (created_at). */
  startDate: string;
  endDate: string;
  /** Clôture de souscription du forfait : le travail commence après. */
  subscriptionEndDate?: string;
  /** Début réel du travail (après la souscription). */
  workStartDate?: string;
  status: ApiInvestmentStatus;
  /** Gains déjà versés sur cet investissement (backend), pas une estimation. */
  paidAmount?: number;
  paymentService?: string;
  phoneNumber?: string;
};

export type TransactionType = 'investissement' | 'gain' | 'retrait' | 'deposit';

export type TransactionStatus = 'réussi' | 'en attente' | 'échoué';

export type Transaction = {
  id: string;
  type: TransactionType;
  label: string;
  amount: number;
  date: string;
  status: TransactionStatus;
  paymentService: string;
  reference: string;
};

export const INVESTMENT_STATUSES: ApiInvestmentStatus[] = [
  'PENDING',
  'ACTIVE',
  'MATURED',
  'PAID',
  'CANCELED',
];

export const INVESTMENT_STATUS_LABEL: Record<ApiInvestmentStatus, string> = {
  PENDING: 'En attente',
  ACTIVE: 'En cours',
  MATURED: 'Échu',
  PAID: 'Payé',
  CANCELED: 'Annulé',
};

export type PayoutState = 'received' | 'upcoming';

export type InvestmentPayout = {
  id: string;
  date: string;
  amount: number;
  status: PayoutState;
};

export type InvestmentPayouts = {
  received: InvestmentPayout[];
  upcoming: InvestmentPayout[];
};

export type InvestmentDetail = Investment & {
  progress: number;
  paidAmount: number;
  remainingAmount: number;
  expectedGain: number;
  daysElapsed?: number;
  daysRemaining?: number;
};

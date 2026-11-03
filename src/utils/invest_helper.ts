import {
  ApiInvestmentStatus,
  Investment,
  InvestmentDetail,
  InvestmentPayout,
} from '@/types/InvestmentType';
import { RiskLevel } from '@/types/TradingHouseType';
import { isSubscriptionWindowOpen } from '@/utils/plan_helper';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Devise dans laquelle le catalogue et les investissements sont stockés. */
export const STORAGE_CURRENCY = 'XOF';

export type MoneyFormat = {
  code: string;
  digits: number;
  symbol: string;
};

const XOF_FORMAT: MoneyFormat = {
  code: STORAGE_CURRENCY,
  digits: 0,
  symbol: 'FCFA',
};

const amountFormatter = new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 0,
});

export const convertAmount = (
  amount: number,
  from: string,
  to: string,
  rates: Record<string, number>,
): number => {
  if (!Number.isFinite(amount)) return 0;
  const source = from.toUpperCase();
  const target = to.toUpperCase();
  if (source === target) return amount;
  const fromRate = rates[source];
  const toRate = rates[target];
  if (!fromRate || !toRate) return amount;
  return amount * (toRate / fromRate);
};

/** Soldes API (`activeBalance`, etc.) : USD → devise de stockage (XOF). */
export const usdToStorage = (
  usd: number,
  rates: Record<string, number>,
): number => Math.round(convertAmount(usd, 'USD', STORAGE_CURRENCY, rates));

/** Montants saisis en XOF → USD (2 décimales) pour POST /investment et soldes. */
export const storageToUsd = (
  storageAmount: number,
  rates: Record<string, number>,
): number => {
  const usd = convertAmount(storageAmount, STORAGE_CURRENCY, 'USD', rates);
  return Math.round(usd * 100) / 100;
};

export const currencySymbol = (code: string): string => {
  const upper = code.toUpperCase();
  if (upper === 'XOF' || upper === 'XAF') return 'FCFA';
  try {
    const part = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: upper,
      currencyDisplay: 'narrowSymbol',
    })
      .formatToParts(0)
      .find((item) => item.type === 'currency');
    return part?.value ?? upper;
  } catch {
    return upper;
  }
};

export const currencyName = (code: string): string => {
  try {
    return (
      new Intl.DisplayNames(['fr'], { type: 'currency' }).of(
        code.toUpperCase(),
      ) ?? code.toUpperCase()
    );
  } catch {
    return code.toUpperCase();
  }
};

export const formatAmount = (
  value: number,
  format: MoneyFormat = XOF_FORMAT,
): string => {
  const digits = Math.max(0, format.digits);
  const amount = digits === 0 ? Math.round(value) : value;
  const formatted = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: digits === 0 ? 0 : Math.min(2, digits),
    maximumFractionDigits: digits,
  }).format(amount);
  return `${formatted} ${format.symbol}`;
};

export const formatCompactAmount = (
  value: number,
  format: MoneyFormat = XOF_FORMAT,
): string => {
  const symbol = format.symbol;
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toLocaleString('fr-FR', { maximumFractionDigits: 1 })} Md ${symbol}`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toLocaleString('fr-FR', { maximumFractionDigits: 1 })} M ${symbol}`;
  }
  return formatAmount(value, format);
};

export const formatInputAmount = (value: number, digits: number): string => {
  if (!Number.isFinite(value)) return '';
  if (digits <= 0) return String(Math.round(value));
  return value
    .toFixed(digits)
    .replace(/\.?0+$/, '')
    .replace('.', ',');
};

export const parseInputAmount = (raw: string): number => {
  const parsed = Number(raw.replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : 0;
};

export const formatNumber = (value: number): string =>
  amountFormatter.format(value);

export const formatPercent = (value: number, withSign = false): string => {
  const formatted = `${value.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} %`;
  return withSign && value > 0 ? `+${formatted}` : formatted;
};

export const formatDate = (value: string | Date): string =>
  new Date(value).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export const formatDuration = (days: number): string => {
  if (days % 365 === 0) return days === 365 ? '1 an' : `${days / 365} ans`;
  if (days % 30 === 0) return `${days / 30} mois`;
  return `${days} jours`;
};

export const riskColor = (risk: RiskLevel): string => {
  switch (risk) {
    case 'faible':
      return 'var(--success-color)';
    case 'modéré':
      return 'var(--warning-color)';
    default:
      return 'var(--danger-color)';
  }
};

export const investmentWorkStart = (investment: Investment): Date => {
  if (investment.workStartDate) {
    const date = new Date(investment.workStartDate);
    if (Number.isFinite(date.getTime())) return date;
  }
  return new Date(investment.startDate);
};

/** Le travail (et donc les gains) ne commencent qu’après la souscription. */
export const hasWorkStarted = (investment: Investment): boolean => {
  if (investment.status === 'PENDING' || investment.status === 'CANCELED') {
    return false;
  }
  if (investment.status === 'MATURED' || investment.status === 'PAID') {
    return true;
  }
  if (isSubscriptionWindowOpen(investment.subscriptionEndDate)) {
    return false;
  }
  return Date.now() >= investmentWorkStart(investment).getTime();
};

export const investmentProgress = (investment: Investment): number => {
  if (investment.status === 'MATURED' || investment.status === 'PAID') return 1;
  if (!hasWorkStarted(investment)) return 0;
  const start = investmentWorkStart(investment).getTime();
  const end = new Date(investment.endDate).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    return 0;
  }
  return Math.min(1, Math.max(0, (Date.now() - start) / (end - start)));
};

const OPEN_STATUSES: ApiInvestmentStatus[] = ['PENDING', 'ACTIVE'];

export const isInvestmentActive = (investment: Investment): boolean =>
  OPEN_STATUSES.includes(investment.status) ||
  (!investment.status &&
    new Date(investment.endDate).getTime() > Date.now());

export const isInvestmentCanceled = (investment: Investment): boolean =>
  investment.status === 'CANCELED';

export const expectedGain = (amount: number, expectedReturn: number): number =>
  (amount * expectedReturn) / 100;

export const accruedGain = (investment: Investment): number => {
  if (!hasWorkStarted(investment)) return 0;
  return (
    expectedGain(investment.amount, investment.expectedReturn) *
    investmentProgress(investment)
  );
};

/** Gains réellement versés : `availableBalance` (GET /user, GET /wallet). */
export const availableGains = (
  user?: { availableBalance?: number } | null,
  wallet?: { availableBalance?: number } | null,
): number =>
  Math.round(
    Math.max(user?.availableBalance ?? 0, wallet?.availableBalance ?? 0),
  );

export const remainingDays = (investment: Investment): number =>
  Math.max(
    0,
    Math.ceil((new Date(investment.endDate).getTime() - Date.now()) / DAY_MS),
  );

export const durationDays = (investment: Investment): number => {
  const start = investmentWorkStart(investment).getTime();
  const end = new Date(investment.endDate).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    return 1;
  }
  return Math.max(1, Math.round((end - start) / DAY_MS));
};

export const elapsedDays = (investment: Investment): number => {
  if (!hasWorkStarted(investment)) return 0;
  const start = investmentWorkStart(investment).getTime();
  if (!Number.isFinite(start)) return 0;
  const end = new Date(investment.endDate).getTime();
  const cap = Number.isFinite(end) ? Math.min(Date.now(), end) : Date.now();
  return Math.max(
    0,
    Math.min(durationDays(investment), Math.floor((cap - start) / DAY_MS)),
  );
};

export const toInvestmentDetail = (
  investment: Investment,
  extras: Partial<
    Pick<
      InvestmentDetail,
      | 'progress'
      | 'paidAmount'
      | 'remainingAmount'
      | 'expectedGain'
      | 'daysElapsed'
      | 'daysRemaining'
    >
  > = {},
): InvestmentDetail => {
  const expected =
    extras.expectedGain ??
    expectedGain(investment.amount, investment.expectedReturn);
  const paid =
    extras.paidAmount ?? investment.paidAmount ?? 0;
  if (!hasWorkStarted(investment)) {
    return {
      ...investment,
      progress: 0,
      expectedGain: expected,
      paidAmount: paid,
      remainingAmount: extras.remainingAmount ?? expected,
      daysElapsed: 0,
      daysRemaining: extras.daysRemaining ?? remainingDays(investment),
    };
  }
  const progress = extras.progress ?? investmentProgress(investment);
  const remaining =
    extras.remainingAmount ?? Math.max(0, expected - paid);
  return {
    ...investment,
    progress,
    expectedGain: expected,
    paidAmount: paid,
    remainingAmount: remaining,
    daysElapsed: extras.daysElapsed ?? elapsedDays(investment),
    daysRemaining: extras.daysRemaining ?? remainingDays(investment),
  };
};

export const buildDailyPayouts = (
  investment: Investment,
): InvestmentPayout[] => {
  const days = durationDays(investment);
  const gain = expectedGain(investment.amount, investment.expectedReturn);
  const daily = Math.floor(gain / days);
  const remainder = Math.round(gain - daily * days);
  const start = investmentWorkStart(investment);
  start.setHours(12, 0, 0, 0);
  const now = Date.now();
  const canceled = investment.status === 'CANCELED';
  const matured =
    investment.status === 'MATURED' || investment.status === 'PAID';
  const list: InvestmentPayout[] = [];
  for (let i = 0; i < days; i += 1) {
    const date = new Date(start.getTime() + i * DAY_MS);
    if (canceled && date.getTime() > now) continue;
    const received = matured || date.getTime() <= now;
    list.push({
      id: `${investment.id}-day-${i + 1}`,
      date: date.toISOString(),
      amount: i === days - 1 ? daily + remainder : daily,
      status: received ? 'received' : 'upcoming',
    });
  }
  return list;
};

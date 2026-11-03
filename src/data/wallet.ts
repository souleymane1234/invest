import { URLS, USE_SEED_WALLET } from '../config';
import * as seed from '@/seeders/api';
import { AuthResponse } from '@/types';
import { getCurrencyRates } from './currencies';
import { usdToStorage } from '@/utils/invest_helper';
import {
  WALLET_TRANSACTION_TYPE_LABEL,
  Wallet,
  WalletBalanceKind,
  WalletMovePayload,
  WalletQuote,
  WalletQuoteType,
  WalletTransaction,
  WalletTransactionKind,
  WalletTransactionPage,
  WalletTransactionStatus,
} from '@/types/WalletType';
import { LocalStorageService } from '@/storages/local_storage_service';
import { apiRequest } from './request';

const asRecord = (value: unknown): Record<string, unknown> | null =>
  value && typeof value === 'object'
    ? (value as Record<string, unknown>)
    : null;

function optionalNumber(...candidates: unknown[]): number | undefined {
  for (const value of candidates) {
    if (value === undefined || value === null || value === '') continue;
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

function optionalString(...candidates: unknown[]): string | undefined {
  for (const value of candidates) {
    if (typeof value === 'string' && value.trim()) return value;
  }
  return undefined;
}

function unwrapResult(json: { result?: unknown } | unknown): unknown {
  const envelope = asRecord(json);
  return envelope?.result ?? json;
}

function asType(value: unknown): WalletTransactionKind {
  const type = String(value ?? '').toLowerCase();
  if (type.includes('deposit') || type.includes('recharge') || type.includes('depot')) {
    return 'deposit';
  }
  if (type.includes('withdraw') || type.includes('retrait')) return 'withdraw';
  if (type.includes('invest')) return 'investment';
  if (
    type.includes('payout') ||
    type.includes('gain') ||
    type.includes('versement')
  ) {
    return 'payout';
  }
  if (
    type.includes('referral') ||
    type.includes('parrain') ||
    type.includes('dividend')
  ) {
    return 'referral';
  }
  if (type.includes('capital') || type.includes('return')) return 'capital';
  return 'other';
}

function asStatus(value: unknown): WalletTransactionStatus {
  const status = String(value ?? '').toUpperCase();
  if (['SUCCESS', 'COMPLETED', 'PAID', 'DONE', 'RÉUSSI', 'REUSSI'].includes(status)) {
    return 'SUCCESS';
  }
  if (['FAILED', 'ERROR', 'ÉCHOUÉ', 'ECHOUE'].includes(status)) return 'FAILED';
  if (['CANCELED', 'CANCELLED', 'ANNULÉ', 'ANNULE'].includes(status)) {
    return 'CANCELED';
  }
  return 'PENDING';
}

function asBalanceKind(value: unknown): WalletBalanceKind | undefined {
  const kind = String(value ?? '').toLowerCase();
  if (kind.includes('active') || kind.includes('actif')) return 'active';
  if (kind.includes('available') || kind.includes('disponible')) {
    return 'available';
  }
  return undefined;
}

function asQuoteType(value: unknown, fallback: WalletQuoteType): WalletQuoteType {
  const type = String(value ?? fallback).toLowerCase();
  return type === 'withdraw' ? 'withdraw' : 'deposit';
}

function apiErrorMessage(data: unknown, fallback: string): string {
  const item = asRecord(data) ?? {};
  const message = item.message ?? item.error;
  if (Array.isArray(message)) return message.map(String).join(' ');
  if (typeof message === 'string' && message.trim()) return message;
  return fallback;
}

const WALLET_MONEY_KEYS = [
  'activeBalance',
  'availableBalance',
  'investedAmount',
  'expectedPayout',
  'totalDeposited',
  'totalWithdrawn',
  'totalPayouts',
  'totalCapitalReturned',
  'totalReferralDividends',
] as const;

export function mapWallet(raw: unknown): Wallet {
  const item = asRecord(raw) ?? {};
  return {
    activeBalance: optionalNumber(item.activeBalance) ?? 0,
    availableBalance: optionalNumber(item.availableBalance) ?? 0,
    investmentsInProgress: optionalNumber(item.investmentsInProgress) ?? 0,
    investedAmount: optionalNumber(item.investedAmount) ?? 0,
    expectedPayout: optionalNumber(item.expectedPayout) ?? 0,
    totalDeposited: optionalNumber(item.totalDeposited) ?? 0,
    totalWithdrawn: optionalNumber(item.totalWithdrawn) ?? 0,
    totalPayouts: optionalNumber(item.totalPayouts) ?? 0,
    totalCapitalReturned: optionalNumber(item.totalCapitalReturned) ?? 0,
    totalReferralDividends: optionalNumber(item.totalReferralDividends) ?? 0,
  };
}

function walletUsdToStorage(
  wallet: Wallet,
  rates: Record<string, number>,
): Wallet {
  const next = { ...wallet };
  for (const key of WALLET_MONEY_KEYS) {
    next[key] = usdToStorage(wallet[key], rates);
  }
  return next;
}

export function mapWalletTransaction(raw: unknown): WalletTransaction | null {
  const outer = asRecord(raw);
  if (!outer) return null;
  const item =
    asRecord(outer.transaction) ?? asRecord(outer.data) ?? outer;
  const id = String(
    item.id ?? item.transactionId ?? item.reference ?? '',
  );
  if (!id) return null;
  const type = asType(item.type ?? item.kind ?? item.operation);
  const originalAmount = optionalNumber(item.originalAmount);
  const originalCurrency = optionalString(item.originalCurrency);
  const usdAmount =
    originalAmount !== undefined
      ? optionalNumber(item.amount, item.usdAmount, item.amountUsd)
      : optionalNumber(
          item.usdAmount,
          item.amountUsd,
          item.creditedUsd,
          item.debitedUsd,
        );
  const amount =
    originalAmount ??
    optionalNumber(item.localAmount, item.value, item.netAmount, item.amount) ??
    0;
  const service = optionalString(
    item.paymentMethod,
    item.service,
    item.paymentService,
  );
  return {
    id,
    type,
    status: asStatus(item.status),
    amount,
    usdAmount,
    originalAmount,
    originalCurrency,
    exchangeRate: optionalNumber(item.exchangeRate, item.rate, item.fxRate),
    exchangeMargin: optionalNumber(item.exchangeMargin),
    currency: optionalString(item.currency, originalCurrency),
    service,
    phoneNumber: optionalString(
      item.numberClient,
      item.phoneNumber,
      item.numberTel,
    ),
    reference: optionalString(
      item.ref_partner,
      item.reference,
      item.externalId,
    ),
    label: String(
      item.label ??
        item.description ??
        item.message ??
        WALLET_TRANSACTION_TYPE_LABEL[type],
    ),
    date: String(
      item.created_at ??
        item.createdAt ??
        item.date ??
        item.paidAt ??
        new Date().toISOString(),
    ),
    updatedAt: optionalString(item.updated_at, item.updatedAt),
    balanceKind: asBalanceKind(
      item.balanceType ??
        item.balanceKind ??
        item.balance ??
        item.wallet ??
        item.solde,
    ),
    balanceAfter:
      item.balanceAfter === null
        ? null
        : optionalNumber(item.balanceAfter),
    message: optionalString(item.message, item.description),
    paidAt: optionalString(item.paidAt, item.paid_at),
    expiresAt: optionalString(item.expiresAt, item.expiredAt),
    paymentUrl: optionalString(
      item.payment_url,
      item.paymentUrl,
      item.url,
    ),
  };
}

export function mapWalletTransactions(raw: unknown): WalletTransactionPage {
  const item = asRecord(raw);
  const list = Array.isArray(raw)
    ? raw
    : Array.isArray(item?.items)
      ? item.items
      : Array.isArray(item?.transactions)
        ? item.transactions
        : [];
  const items = list
    .map(mapWalletTransaction)
    .filter((entry): entry is WalletTransaction => entry !== null);
  return {
    items,
    total: optionalNumber(item?.total, item?.count) ?? items.length,
    page: optionalNumber(item?.page) ?? 1,
    limit: optionalNumber(item?.limit, item?.perPage) ?? items.length,
  };
}

export function mapWalletQuote(
  raw: unknown,
  fallback: { type: WalletQuoteType; service: string; amount: number },
): WalletQuote | null {
  const item = asRecord(raw);
  if (!item) return null;
  const usdAmount = optionalNumber(
    item.usdAmount,
    item.amountUsd,
    item.creditedUsd,
    item.debitedUsd,
    item.usd,
    item.netUsd,
  );
  const amount =
    optionalNumber(item.amount, item.localAmount, item.value) ?? fallback.amount;
  if (usdAmount === undefined && amount === undefined) return null;
  return {
    type: asQuoteType(item.type, fallback.type),
    service: String(item.service ?? fallback.service),
    amount,
    usdAmount: usdAmount ?? 0,
    rate: optionalNumber(item.rate, item.fxRate, item.exchangeRate),
    fee: optionalNumber(item.fee, item.fees),
    netUsd: optionalNumber(item.netAmount, item.netUsd),
    currency: item.currency ? String(item.currency) : undefined,
  };
}

export async function getWallet(): Promise<Wallet> {
  if (USE_SEED_WALLET) return seed.getWallet();

  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    URLS.WALLET,
  );
  const wallet = mapWallet(unwrapResult(json));
  const rates = (await getCurrencyRates()).rates;
  return walletUsdToStorage(wallet, rates);
}

export async function getWalletTransactions(params: {
  page?: number;
  limit?: number;
  type?: WalletQuoteType | string;
} = {}): Promise<WalletTransactionPage> {
  if (USE_SEED_WALLET) return seed.getWalletTransactions(params);

  const query = new URLSearchParams();
  query.set('page', String(params.page ?? 1));
  query.set('limit', String(params.limit ?? 20));
  if (params.type) query.set('type', String(params.type).toUpperCase());
  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    `${URLS.TRANSACTIONS}?${query.toString()}`,
  );
  return mapWalletTransactions(unwrapResult(json));
}

export async function getWalletTransactionById(
  id: string,
): Promise<WalletTransaction | null> {
  if (USE_SEED_WALLET) return seed.getWalletTransactionById(id);

  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    `${URLS.TRANSACTIONS}/${id}`,
  );
  return mapWalletTransaction(unwrapResult(json));
}

export async function getWalletQuote(params: {
  type: WalletQuoteType;
  service: string;
  amount: number;
}): Promise<WalletQuote> {
  if (USE_SEED_WALLET) return seed.getWalletQuote(params);

  const query = new URLSearchParams({
    type: params.type,
    service: params.service,
    amount: String(params.amount),
  });
  const json = await apiRequest<{ etat?: boolean; result?: unknown }>(
    `${URLS.WALLET}/quote?${query.toString()}`,
  );
  const mapped = mapWalletQuote(unwrapResult(json), params);
  if (!mapped) {
    throw new Error('Aperçu indisponible pour ce montant');
  }
  return mapped;
}

async function postWalletMove(
  path: 'deposit' | 'withdraw',
  payload: WalletMovePayload,
  fallbackError: string,
): Promise<AuthResponse> {
  if (USE_SEED_WALLET) {
    return path === 'deposit'
      ? seed.depositWallet(payload)
      : seed.withdrawWallet(payload);
  }

  const token = LocalStorageService.getToken();
  if (!token) {
    return { etat: false, error: ['Connectez-vous pour continuer'] };
  }

  const body =
    path === 'deposit'
      ? {
          amount: payload.amount,
          service: payload.service,
          numberTel: payload.numberTel,
          ...(payload.otp ? { otp: payload.otp } : {}),
        }
      : {
          amount: payload.amount,
          service: payload.service,
          numberTel: payload.numberTel,
        };

  const response = await fetch(`${URLS.WALLET}/${path}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(body),
  });
  const json = (await response.json().catch(() => ({}))) as AuthResponse;

  if (response.status === 201 || (response.ok && json.etat !== false)) {
    const result = asRecord(json.result) ?? {};
    const transaction =
      mapWalletTransaction({
        ...result,
        id: result.id ?? result.transactionId,
        type: result.type ?? (path === 'deposit' ? 'DEPOSIT' : 'WITHDRAW'),
        payment_url: result.payment_url ?? result.url ?? result.paymentUrl,
        amount: result.amount ?? payload.amount,
        originalAmount: result.originalAmount,
        originalCurrency: result.originalCurrency,
        paymentMethod:
          result.paymentMethod ?? result.service ?? payload.service,
        numberClient:
          result.numberClient ?? result.numberTel ?? payload.numberTel,
      }) ?? mapWalletTransaction(result.transaction);
    return {
      etat: true,
      message: json.message,
      result: {
        transaction,
        wallet: result.wallet ? mapWallet(result.wallet) : undefined,
        paymentUrl: optionalString(
          result.url,
          result.payment_url,
          result.paymentUrl,
          transaction?.paymentUrl,
        ),
        raw: json.result,
      },
    };
  }

  return {
    etat: false,
    error: [apiErrorMessage(json, fallbackError)],
  };
}

export async function depositWallet(
  payload: WalletMovePayload,
): Promise<AuthResponse> {
  return postWalletMove(
    'deposit',
    payload,
    'Impossible de recharger le solde',
  );
}

export async function withdrawWallet(
  payload: WalletMovePayload,
): Promise<AuthResponse> {
  return postWalletMove(
    'withdraw',
    payload,
    'Impossible d’effectuer ce retrait',
  );
}

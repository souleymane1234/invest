'use client';

import { stores } from '@/stores';
import {
  STORAGE_CURRENCY,
  convertAmount,
  currencyName,
  currencySymbol,
  formatAmount as formatMoney,
  formatCompactAmount as formatCompactMoney,
  type MoneyFormat,
} from '@/utils/invest_helper';

const USD = 'USD';

const usdFormat: MoneyFormat = {
  code: USD,
  digits: 2,
  symbol: 'USD',
};

const storageFormat: MoneyFormat = {
  code: STORAGE_CURRENCY,
  digits: 0,
  symbol: 'FCFA',
};

const localDigits = (code: string, fallback?: number) => {
  if (fallback !== undefined) return fallback;
  if (code === 'XOF' || code === 'XAF') return 0;
  return 2;
};

/**
 * Les montants API sont en USD : affichage principal en dollar,
 * équivalent plus discret dans la devise locale de l’investisseur.
 * En interne, le catalogue reste stocké en XOF.
 */
export function useMoney() {
  const user = stores.useUserStore((state) => state.user);
  const rates = stores.useCurrencyStore((state) => state.rates);
  const preferred = (user?.currency || STORAGE_CURRENCY).toUpperCase();
  const rateMap = rates?.rates ?? { [STORAGE_CURRENCY]: 1, [USD]: 1 };
  const canUsd = Boolean(rateMap[USD] && rateMap[STORAGE_CURRENCY]);
  const canLocal = Boolean(rateMap[preferred] && rateMap[STORAGE_CURRENCY]);
  const localCode = canLocal ? preferred : STORAGE_CURRENCY;
  const localMeta = rates?.currencies.find((item) => item.code === localCode);
  const localFormat: MoneyFormat = {
    code: localCode,
    digits: localDigits(localCode, localMeta?.digits),
    symbol: currencySymbol(localCode),
  };
  const showLocal = localCode !== USD;

  const toUsd = (storageAmount: number) =>
    canUsd
      ? convertAmount(storageAmount, STORAGE_CURRENCY, USD, rateMap)
      : storageAmount;
  const toLocal = (storageAmount: number) =>
    convertAmount(storageAmount, STORAGE_CURRENCY, localCode, rateMap);
  const toDisplay = (storageAmount: number) => toUsd(storageAmount);
  const toStorage = (displayUsd: number) =>
    canUsd
      ? convertAmount(displayUsd, USD, STORAGE_CURRENCY, rateMap)
      : displayUsd;

  const formatAmount = (storageAmount: number) =>
    formatMoney(toUsd(storageAmount), usdFormat);
  const formatLocal = (storageAmount: number) =>
    formatMoney(toLocal(storageAmount), localFormat);
  const formatCompactAmount = (storageAmount: number) =>
    formatCompactMoney(toUsd(storageAmount), usdFormat);
  const formatWithLocal = (storageAmount: number) =>
    showLocal
      ? `${formatAmount(storageAmount)} (${formatLocal(storageAmount)})`
      : formatAmount(storageAmount);

  return {
    code: USD,
    localCode,
    digits: usdFormat.digits,
    symbol: usdFormat.symbol,
    name: currencyName(USD),
    localName: currencyName(localCode),
    showLocal,
    ratesReady: Boolean(rates),
    toDisplay,
    toStorage,
    toUsd,
    toLocal,
    formatAmount,
    formatLocal,
    formatCompactAmount,
    formatWithLocal,
    formatStorageAmount: (storageAmount: number) =>
      formatMoney(storageAmount, storageFormat),
  };
}

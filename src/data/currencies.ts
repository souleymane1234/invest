import { URLS } from '../config';
import { CurrencyInfo, CurrencyRates } from '@/types/CurrencyType';

const FALLBACK_CURRENCIES: CurrencyInfo[] = [
  {
    code: 'USD',
    rate: 1,
    digits: 2,
    source: 'base',
    rateDate: '',
  },
  {
    code: 'XOF',
    rate: 588.30159502,
    digits: 0,
    source: 'parité euro',
    rateDate: '',
  },
  {
    code: 'XAF',
    rate: 588.30159502,
    digits: 0,
    source: 'parité euro',
    rateDate: '',
  },
  {
    code: 'EUR',
    rate: 0.89686,
    digits: 2,
    source: 'frankfurter',
    rateDate: '',
  },
  {
    code: 'GBP',
    rate: 0.7503,
    digits: 2,
    source: 'frankfurter',
    rateDate: '',
  },
];

const FALLBACK_RATES: CurrencyRates = {
  base: 'USD',
  updatedAt: '',
  rates: Object.fromEntries(
    FALLBACK_CURRENCIES.map((item) => [item.code, item.rate]),
  ),
  currencies: FALLBACK_CURRENCIES,
};

/** Taux de change publics, unités pour 1 USD (`GET /currency/rates`). */
export async function getCurrencyRates(): Promise<CurrencyRates> {
  try {
    const response = await fetch(URLS.GET_CURRENCY_RATES, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const json = await response.json();
    const result = json?.result as CurrencyRates | undefined;
    if (!json?.etat || !result?.rates)
      throw new Error('Réponse devises invalide');

    return {
      base: result.base || 'USD',
      updatedAt: result.updatedAt || '',
      rates: result.rates,
      currencies: Array.isArray(result.currencies) ? result.currencies : [],
    };
  } catch {
    return FALLBACK_RATES;
  }
}

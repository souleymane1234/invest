export type CurrencyInfo = {
  code: string;
  rate: number;
  digits: number;
  source: string;
  rateDate: string;
};

/** Taux exprimés en unités pour 1 USD (`GET /currency/rates`). */
export type CurrencyRates = {
  base: string;
  updatedAt: string;
  rates: Record<string, number>;
  currencies: CurrencyInfo[];
};

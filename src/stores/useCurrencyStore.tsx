'use client';

import { create } from 'zustand';
import { getCurrencyRates } from '@/data/currencies';
import { CurrencyRates } from '@/types/CurrencyType';

type CurrencyStoreType = {
  rates: CurrencyRates | null;
  load: () => Promise<void>;
};

export const useCurrencyStore = create<CurrencyStoreType>((set, get) => ({
  rates: null,
  load: async () => {
    if (get().rates) return;
    const rates = await getCurrencyRates();
    set({ rates });
  },
}));

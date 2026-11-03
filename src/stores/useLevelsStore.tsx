'use client';

import { create } from 'zustand';
import { data } from '@/data';
import { overlayLevelRules } from '@/data/levels';
import { userFromInvestorLevel } from '@/data/mapTradingHouse';
import { InvestmentLevel, InvestorLevel } from '@/types/LevelType';
import { useUserStore } from './useUserStore';

type LevelsStoreType = {
  levels: InvestmentLevel[];
  investorLevel: InvestorLevel | null;
  load: () => Promise<void>;
  loadInvestorLevel: () => Promise<void>;
  setInvestorLevel: (investorLevel: InvestorLevel | null) => void;
};

export const useLevelsStore = create<LevelsStoreType>((set, get) => ({
  levels: [],
  investorLevel: null,
  load: async () => {
    if (get().levels.length > 0) return;
    const levels = overlayLevelRules(
      await data.getLevels().catch(() => []),
      get().investorLevel,
    );
    set({ levels });
  },
  setInvestorLevel: (investorLevel) => {
    set({
      investorLevel,
      levels: overlayLevelRules(
        get().levels.length ? get().levels : [],
        investorLevel,
      ),
    });
    const user = useUserStore.getState().user;
    if (investorLevel && user) {
      useUserStore.getState().setUser(userFromInvestorLevel(user, investorLevel));
    }
  },
  loadInvestorLevel: async () => {
    const investorLevel = await data.getInvestorLevel().catch(() => null);
    if (!investorLevel) {
      set({ investorLevel: null });
      return;
    }
    get().setInvestorLevel(investorLevel);
    if (get().levels.length === 0) {
      const levels = overlayLevelRules(
        await data.getLevels().catch(() => []),
        investorLevel,
      );
      set({ levels });
    }
  },
}));

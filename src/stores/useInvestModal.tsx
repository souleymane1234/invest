'use client';

import { create } from 'zustand';
import { TradingHouse } from '@/types/TradingHouseType';

type InvestModalStoreType = {
  isOpen: boolean;
  house: TradingHouse | null;
  planId: string | null;
  openModal: (house: TradingHouse, planId?: string) => void;
  closeModal: () => void;
};

export const useInvestModal = create<InvestModalStoreType>((set) => ({
  isOpen: false,
  house: null,
  planId: null,
  openModal: (house, planId) =>
    set({ isOpen: true, house, planId: planId ?? null }),
  closeModal: () => set({ isOpen: false }),
}));

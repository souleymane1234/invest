'use client';

import { create } from 'zustand';
import { data } from '@/data';
import { EMPTY_WALLET, Wallet } from '@/types/WalletType';
import { useUserStore } from './useUserStore';

type WalletStoreType = {
  wallet: Wallet | null;
  isLoading: boolean;
  setWallet: (wallet: Wallet | null) => void;
  load: (force?: boolean) => Promise<Wallet | null>;
};

const preferAmount = (primary: number, fallback?: number) =>
  primary || fallback || 0;

const mergeWithUser = (wallet: Wallet): Wallet => {
  const current = useUserStore.getState().user;
  return {
    ...wallet,
    activeBalance: preferAmount(wallet.activeBalance, current?.activeBalance),
    availableBalance: preferAmount(
      wallet.availableBalance,
      current?.availableBalance,
    ),
  };
};

const applyBalances = (wallet: Wallet) => {
  const current = useUserStore.getState().user;
  if (!current) return;
  useUserStore.getState().setUser({
    ...current,
    activeBalance: preferAmount(wallet.activeBalance, current.activeBalance),
    availableBalance: preferAmount(
      wallet.availableBalance,
      current.availableBalance,
    ),
  });
};

export const useWalletStore = create<WalletStoreType>((set) => ({
  wallet: null,
  isLoading: false,
  setWallet: (wallet) => {
    const next = wallet ? mergeWithUser(wallet) : wallet;
    set({ wallet: next, isLoading: false });
    if (next) applyBalances(next);
  },
  load: async () => {
    set({ isLoading: true });
    try {
      const wallet = mergeWithUser(await data.getWallet());
      set({ wallet, isLoading: false });
      applyBalances(wallet);
      return wallet;
    } catch {
      set({ isLoading: false });
      return null;
    }
  },
}));

export { EMPTY_WALLET };

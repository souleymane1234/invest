'use client';

import { create } from 'zustand';
import { USE_SEED_HOUSES } from '@/config';
import { data } from '@/data';
import { isBrowser } from '@/lib/utils';
import {
  getAllHousesIndexDb,
  saveAllHousesIndexDb,
} from '@/storages/indexed_db_service';
import { Market, TradingHouse } from '@/types/TradingHouseType';

type HousesStoreType = {
  houses: TradingHouse[];
  markets: Market[];
  isLoading: boolean;
  error: string | null;
  load: () => Promise<void>;
};

export const useHousesStore = create<HousesStoreType>((set, get) => ({
  houses: [],
  markets: [],
  isLoading: false,
  error: null,
  load: async () => {
    if (get().isLoading) return;
    set({ isLoading: get().houses.length === 0, error: null });

    if (isBrowser() && get().houses.length === 0) {
      const cached = await getAllHousesIndexDb().catch(() => []);
      const isUuid = (id: string) => /^[0-9a-f-]{36}$/i.test(id);
      const compatible =
        cached.length > 0 &&
        cached.every((house) =>
          USE_SEED_HOUSES ? !isUuid(house.id) : isUuid(house.id),
        );
      if (compatible) set({ houses: cached, isLoading: false });
    }

    try {
      const [houses, markets] = await Promise.all([
        data.getHouses(),
        data.getMarkets(),
      ]);
      set({ houses, markets, isLoading: false });
      if (isBrowser()) saveAllHousesIndexDb(houses).catch(() => undefined);
    } catch (error) {
      console.error('Erreur lors du chargement des maisons:', error);
      set({
        isLoading: false,
        error:
          get().houses.length === 0
            ? 'Impossible de charger les maisons de trading'
            : null,
      });
    }
  },
}));

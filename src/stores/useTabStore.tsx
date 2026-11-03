'use client';

import { create } from 'zustand';
import { isBrowser } from '@/lib/utils';
import { LocalStorageService } from '@/storages/local_storage_service';

export enum HomeTab {
  HOME = 0,
  EXPLORE = 1,
  PORTFOLIO = 2,
  PROFILE = 3,
}

type TabStoreType = {
  currentTab: HomeTab;
  setTab: (tab: HomeTab) => void;
  init: () => void;
};

export const useTabStore = create<TabStoreType>((set) => ({
  currentTab: HomeTab.HOME,
  setTab: (tab) => {
    if (isBrowser()) LocalStorageService.saveCurrentNavigation(tab);
    set({ currentTab: tab });
  },
  init: () => {
    if (isBrowser()) {
      const saved = LocalStorageService.getCurrentNavigation();
      set({ currentTab: saved in HomeTab ? saved : HomeTab.HOME });
    }
  },
}));

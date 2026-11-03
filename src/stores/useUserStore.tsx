'use client';

import { create } from 'zustand';
import { LocalStorageService } from '@/storages/local_storage_service';
import { isBrowser } from '@/lib/utils';
import { UserType } from '@/types/UserType';
import { resetDatabaseIndexDb } from '@/storages/indexed_db_service';

type UserStoreType = {
  isLoggedIn: boolean;
  isLoadedCurrentUser: boolean;
  token: string | null;
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  logout: () => void;
  initAuth: () => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  isLoggedIn: false,
  isLoadedCurrentUser: false,
  token: null,
  user: null,
  setUser: (user) => {
    if (isBrowser() && user) {
      LocalStorageService.saveUser(user);
    }

    set({ user, isLoggedIn: true });
  },
  logout: async () => {
    if (isBrowser()) {
      const tokenPresent = LocalStorageService.isTokenPresent();
      if (tokenPresent) {
        await resetDatabaseIndexDb();
        LocalStorageService.clearData();
      }
    }
    set({ user: null, isLoggedIn: false, token: null });
  },
  initAuth: () => {
    if (isBrowser()) {
      const tokenPresent = LocalStorageService.isTokenPresent();
      const tokenInfo = LocalStorageService.getToken();
      const userInfo = LocalStorageService.getUser();
      set({
        isLoggedIn: tokenPresent,
        isLoadedCurrentUser: true,
        user: userInfo,
        token: tokenInfo ? tokenInfo.split(' ')[1] : null,
      });
    }
  },
}));

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { data } from '@/data';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { LocalStorageService } from '@/storages/local_storage_service';

export function useFavorite(houseId: string) {
  const router = useRouter();
  const { user, isLoggedIn, setUser } = stores.useUserStore();
  const [isPending, setPending] = useState(false);
  const isFavorite = !!user?.favoriteHouseIds?.includes(houseId);

  const toggleFavorite = async () => {
    if (!isLoggedIn) {
      LocalStorageService.saveLocationRedirection(window.location.pathname);
      router.push(Routes.SIGN_IN);
      return;
    }
    setPending(true);
    try {
      const response = await data.toggleFavorite(houseId);
      if (response.etat) setUser(response.result.client);
    } finally {
      setPending(false);
    }
  };

  return { isFavorite, isPending, toggleFavorite };
}

'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Grid } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { components } from '@/components';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { EmptyState } from '@/components/invest/EmptyState';
import { HouseCard } from '@/components/invest/HouseCard';
import { HouseGridSkeleton } from '../home/Dashboard';

type Props = {
  embedded?: boolean;
};

export const Favorites: React.FC<Props> = ({ embedded }) => {
  const router = useRouter();
  const { user, isLoggedIn, isLoadedCurrentUser, initAuth } =
    stores.useUserStore();
  const { houses, isLoading, load } = stores.useHousesStore();
  const { setTab } = stores.useTabStore();

  useEffect(() => {
    initAuth();
    load();
  }, [initAuth, load]);

  useEffect(() => {
    if (isLoadedCurrentUser && !isLoggedIn && !embedded) {
      router.replace(Routes.SIGN_IN);
    }
  }, [isLoadedCurrentUser, isLoggedIn, router, embedded]);

  const favorites = houses.filter((house) =>
    user?.favoriteHouseIds?.includes(house.id),
  );

  const body = (
        <main
          className={embedded ? undefined : 'container'}
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            paddingTop: embedded ? 0 : 10,
            paddingBottom: embedded ? 8 : 40,
          }}
        >
          {isLoading && houses.length === 0 ? (
            <HouseGridSkeleton />
          ) : favorites.length === 0 ? (
            <EmptyState
              icon={<FavoriteBorderRoundedIcon sx={{ fontSize: 48 }} />}
              title="Aucune maison suivie"
              description="Appuyez sur le cœur d’une maison de trading pour la suivre et la retrouver ici."
              actionLabel="Explorer les maisons"
              onAction={() => {
                setTab(HomeTab.EXPLORE);
                router.push(Routes.HOME);
              }}
            />
          ) : (
            <Grid container spacing={2}>
              {favorites.map((house) => (
                <Grid key={house.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <HouseCard house={house} />
                </Grid>
              ))}
            </Grid>
          )}
        </main>
  );

  if (embedded) return body;

  return (
    <components.Screen>
      <components.Background />
      <components.Header
        showGoBack={true}
        showBasket={true}
        title="Mes favoris"
      />
      <div className="screen-content">{body}</div>
      <components.Modal />
    </components.Screen>
  );
};

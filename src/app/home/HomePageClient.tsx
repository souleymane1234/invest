'use client';

import { useEffect } from 'react';
import { stores } from '@/stores';
import { Home } from './Home';

export function HomePageClient() {
  const { load } = stores.useHousesStore();

  useEffect(() => {
    document.body.style.backgroundColor = 'var(--white-color)';
    load();
  }, [load]);

  return <Home />;
}

'use client';

import React, { useEffect } from 'react';
import { components } from '@/components';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { InvestModal } from '@/components/invest/InvestModal';
import { WelcomeDialog } from '@/components/invest/WelcomeDialog';
import { Dashboard } from './Dashboard';
import { Explore } from '../explore/Explore';
import { Portfolio } from '../portfolio/Portfolio';
import { ProfilePage } from '../profile/Profile';

export const Home: React.FC = () => {
  const { currentTab, init } = stores.useTabStore();

  useEffect(() => {
    init();
  }, [init]);

  const pages: Record<HomeTab, React.ReactNode> = {
    [HomeTab.HOME]: <Dashboard />,
    [HomeTab.EXPLORE]: <Explore />,
    [HomeTab.PORTFOLIO]: <Portfolio />,
    [HomeTab.PROFILE]: <ProfilePage />,
  };

  return (
    <components.Screen>
      <components.Background />
      <div className="screen-content">{pages[currentTab]}</div>
      <components.Modal />
      <InvestModal />
      <WelcomeDialog />
    </components.Screen>
  );
};

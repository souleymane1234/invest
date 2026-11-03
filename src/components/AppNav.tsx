'use client';

import React, { useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, Grid, Stack } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { APP_NAME } from '@/config';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { Routes, TabScreens } from '@/routes';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { AppLogo } from './invest/AppLogo';
import { TabIcon } from './invest/TabIcon';
import { BottomTabBar, TabItem } from './BottomTabBar';
import { SideBarMenu } from './SideBarMenu';

const HIDE_NAV_PREFIXES = [
  Routes.SIGN_IN,
  Routes.SIGN_UP,
  Routes.VERIFICATION,
  Routes.PHONE_VERIFIED,
  Routes.FORGOT_PASSWORD,
  Routes.FORGOT_PASSWORD_SENT_EMAIL,
  Routes.NEW_PASSWORD,
  Routes.ONBOARDING,
];

const isHomePath = (pathname: string) =>
  pathname === Routes.HOME || pathname === '/home';

const hideNav = (pathname: string) =>
  HIDE_NAV_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

const tabFromPath = (pathname: string): HomeTab | null => {
  if (isHomePath(pathname)) return null;
  if (pathname.startsWith(Routes.HOUSE) || pathname.startsWith(Routes.FILTER)) {
    return HomeTab.EXPLORE;
  }
  if (
    pathname.startsWith(Routes.INVESTMENT) ||
    pathname.startsWith(Routes.TRANSACTIONS)
  ) {
    return HomeTab.PORTFOLIO;
  }
  if (
    pathname.startsWith(Routes.PROFILE) ||
    pathname.startsWith(Routes.FAVORITES) ||
    pathname.startsWith(Routes.LEVELS) ||
    pathname.startsWith(Routes.REFERRAL) ||
    pathname.startsWith(Routes.EDIT_PROFILE)
  ) {
    return HomeTab.PROFILE;
  }
  return null;
};

type Props = {
  children: React.ReactNode;
};

export const AppNav: React.FC<Props> = ({ children }) => {
  const pathname = usePathname() ?? Routes.HOME;
  const router = useRouter();
  const { isDesktop } = useDeviceDetect();
  const { currentTab, setTab, init } = stores.useTabStore();

  useEffect(() => {
    init();
  }, [init]);

  const activeTab = tabFromPath(pathname) ?? currentTab;

  const menu: TabItem[] = useMemo(
    () =>
      [
        { id: TabScreens.HOME, name: TabScreens.HOME, icon: HomeRoundedIcon },
        {
          id: TabScreens.EXPLORE,
          name: TabScreens.EXPLORE,
          icon: TravelExploreRoundedIcon,
        },
        {
          id: TabScreens.PORTFOLIO,
          name: TabScreens.PORTFOLIO,
          icon: AccountBalanceWalletRoundedIcon,
        },
        {
          id: TabScreens.PROFILE,
          name: TabScreens.PROFILE,
          icon: PersonRoundedIcon,
        },
      ].map((item, index) => ({
        ...item,
        icon: <TabIcon Icon={item.icon} active={activeTab === index} />,
      })),
    [activeTab],
  );

  const goToTab = (tab: HomeTab) => {
    setTab(tab);
    if (!isHomePath(pathname)) router.push(Routes.HOME);
  };

  if (hideNav(pathname)) return children;

  const sideBar = (
    <Grid
      className="side-bar-menu"
      size={{ md: 2 }}
      style={{ padding: 0, margin: 0, height: '100vh' }}
    >
      <Stack
        direction="column"
        sx={{ padding: 0, margin: 0, width: '100%', height: '100%' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box component="div" sx={{ my: 2, mx: 0, padding: 0, width: '100%' }}>
          <Stack direction="row" justifyContent="center">
            <AppLogo size={30} />
          </Stack>
          <SideBarMenu
            menuItems={menu}
            activeItem={activeTab}
            onChangeMenu={goToTab}
          />
        </Box>
        <p className="t12" style={{ margin: 16 }}>
          Les performances passées ne préjugent pas des performances futures.
          Investir comporte un risque de perte en capital. © {APP_NAME}{' '}
          {new Date().getFullYear()}
        </p>
      </Stack>
    </Grid>
  );

  if (isDesktop) {
    return (
      <Grid
        container
        spacing={0}
        style={{ padding: 0, margin: 0, height: '100%' }}
      >
        {sideBar}
        <Grid
          size={{ md: 10 }}
          style={{ padding: 0, margin: 0, height: '100vh', overflow: 'auto' }}
        >
          {children}
        </Grid>
      </Grid>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        minHeight: 0,
      }}
    >
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
        {children}
      </div>
      <BottomTabBar tabs={menu} onChange={goToTab} currentActive={activeTab} />
    </div>
  );
};

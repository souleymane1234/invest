'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { stores } from '../stores';
import { TabScreens, Routes } from '../routes';
import { Box } from '@mui/material';

export type TabItem = {
  id: TabScreens;
  name: TabScreens;
  icon: React.JSX.Element;
};

type Props = {
  tabs: TabItem[];
  currentActive: number;
  onChange: (value: number) => void;
};

export const BottomTabBar: React.FC<Props> = ({
  tabs,
  onChange,
  currentActive,
}) => {
  const router = useRouter();
  const { isLoggedIn, initAuth, isLoadedCurrentUser } = stores.useUserStore();

  useEffect(() => {
    initAuth();
  }, [initAuth, isLoggedIn]);

  return (
    <section
      style={{
        flexShrink: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          paddingLeft: '3%',
          paddingRight: '3%',
          borderTop: '1px solid #C8CDD9',
          backgroundColor: '#F5FAFB',
        }}
      >
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
          }}
        >
          {tabs.map((tab, index) => {
            return (
              <li
                key={tab.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Box
                  id={tab.id}
                  className="clickable"
                  onClick={() => {
                    if (
                      tab.name === TabScreens.PROFILE &&
                      !isLoggedIn &&
                      isLoadedCurrentUser
                    ) {
                      router.push(Routes.SIGN_IN);
                      return;
                    }
                    onChange(index);
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 20,
                  }}
                >
                  {tab.icon}
                  <span
                    style={{
                      fontSize: 10,
                      marginTop: 3,
                      display: 'block',
                      color:
                        currentActive === index
                          ? 'var(--main-color)'
                          : 'var(--text-color)',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-league-spartan)',
                    }}
                    className="number-of-lines-1"
                  >
                    {tab.name}
                  </span>
                </Box>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

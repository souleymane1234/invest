'use client';
import React, { useEffect } from 'react';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { stores } from '@/stores';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { data } from '@/data';
import { NotificationType } from '@/types';
import { sortNotifications } from '@/utils/notification_helper';
import { captureReferralCodeFromUrl } from '@/utils/referral_helper';
import { AppNav } from '@/components/AppNav';

interface LayoutPageClientProps {
  children: React.ReactNode;
  dosis: NextFontWithVariable;
  leagueSpartan: NextFontWithVariable;
}

const LayoutPageClient: React.FC<LayoutPageClientProps> = ({
  children,
  leagueSpartan,
  dosis,
}) => {
  const { isOnline } = useDeviceDetect();
  const {
    init,
    setNotifications,
    clear: clearNotification,
  } = stores.useNotificationStore();
  const { logout, setUser } = stores.useUserStore();
  const { load: loadRates } = stores.useCurrencyStore();
  const { loadInvestorLevel } = stores.useLevelsStore();
  const { setWallet } = stores.useWalletStore();

  async function fetchData() {
    try {
      init();
      loadRates();
      const [userData, apiNotifications] = await Promise.all([
        data.getUser(),
        data.getNotifications().catch(() => null),
      ]);

      if (userData) {
        const notifications = sortNotifications(
          apiNotifications ??
            (userData.notifications as NotificationType[] | undefined) ??
            [],
        );
        setNotifications(notifications);
        setUser(userData);
        await loadInvestorLevel();
        const [investments, wallet] = await Promise.all([
          data.getInvestments().catch(() => []),
          data.getWallet().catch(() => null),
        ]);
        const current = stores.useUserStore.getState().user;
        if (current) {
          setUser({
            ...current,
            investments,
            ...(wallet
              ? {
                  activeBalance:
                    wallet.activeBalance || current.activeBalance,
                  availableBalance:
                    wallet.availableBalance || current.availableBalance,
                }
              : {}),
          });
        }
        setWallet(wallet);
      } else {
        clearNotification();
        logout();
        setWallet(null);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des données depuis API:', error);
    }
  }

  useEffect(() => {
    captureReferralCodeFromUrl();
  }, []);

  useEffect(() => {
    if (isOnline) {
      fetchData();
    }
  }, [isOnline]);

  return (
    <body
      id='app'
      className={`${dosis.variable} ${leagueSpartan.variable}`}
      style={{ backgroundColor: 'var(--white-color)' }}
    >
      <AntdRegistry>
        <div className='app-shell'>
          <AppNav>{children}</AppNav>
        </div>
      </AntdRegistry>
    </body>
  );
};

export default LayoutPageClient;

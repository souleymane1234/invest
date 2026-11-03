'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Stack } from '@mui/material';
import { Button } from '@/components/Button';
import { APP_NAME } from '@/config';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { LocalStorageService } from '@/storages/local_storage_service';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { AppLogo } from './AppLogo';
import { ReferralCard } from './ReferralCard';

const steps = [
  {
    title: 'Complétez votre profil',
    text: 'Nom et email : c’est l’une des conditions pour passer au palier 2.',
  },
  {
    title: 'Choisissez une maison de trading',
    text: 'Comparez taux de gain, rendement et risque, puis investissez par mobile money.',
  },
  {
    title: 'Parrainez vos proches',
    text: 'Partagez votre code ci-dessous.',
  },
];

/** Affiché une seule fois, quand la connexion renvoie `isFirstConnexion: true`. */
export const WelcomeDialog: React.FC = () => {
  const router = useRouter();
  const { isDesktop } = useDeviceDetect();
  const { user, isLoggedIn } = stores.useUserStore();
  const { setTab } = stores.useTabStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn && LocalStorageService.isFirstConnexion()) setOpen(true);
  }, [isLoggedIn]);

  const close = () => {
    LocalStorageService.setFirstConnexion(false);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      fullScreen={!isDesktop}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#F5FAFB',
            borderRadius: isDesktop ? '28px' : 0,
          },
        },
      }}
    >
      <Stack gap={2} sx={{ p: 3 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: 24,
            borderRadius: 24,
            textAlign: 'center',
            background: [
              'radial-gradient(60% 45% at 100% 0%, rgba(252, 197, 94, 0.35) 0%, rgba(252, 197, 94, 0) 70%)',
              'linear-gradient(160deg, #1e2538 0%, #2b3554 55%, #1e2538 100%)',
            ].join(', '),
          }}
        >
          <AppLogo size={40} light />
          <h2 style={{ color: 'var(--white-color)' }}>
            Bienvenue sur {APP_NAME} 🎉
          </h2>
          <p className="t16" style={{ color: '#c8cdd9' }}>
            Votre compte est créé. Vous démarrez au palier 1 · Découverte.
          </p>
        </div>

        <ol
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            listStyle: 'none',
          }}
        >
          {steps.map((step, index) => (
            <li key={step.title} style={{ display: 'flex', gap: 12 }}>
              <span
                style={{
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: 'var(--main-color)',
                  backgroundColor: 'var(--accent-color)',
                }}
              >
                {index + 1}
              </span>
              <div>
                <h6>{step.title}</h6>
                <p className="t14">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {user?.referralCode && <ReferralCard code={user.referralCode} />}

        <Button
          label="Compléter mon profil"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            close();
            router.push(Routes.PROFILE);
          }}
        />
        <Button
          label="Découvrir les maisons"
          colorScheme="secondary"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            close();
            setTab(HomeTab.EXPLORE);
          }}
        />
      </Stack>
    </Dialog>
  );
};

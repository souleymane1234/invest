'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { svg } from '../../svg';
import { Routes } from '../../routes';
import { stores } from '../../stores';
import { components } from '../../components';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import { URLS_ASSETS } from '@/config';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { UserType } from '@/types/UserType';
import { Badge } from 'antd';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import { avatarsMook } from '@/mooks/avatars';
import CheckIcon from '@mui/icons-material/Check';
import { updateUser } from '@/data/getUser';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { useRouter } from 'next/navigation';
import { LocalStorageService } from '@/storages/local_storage_service';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import { HomeTab } from '@/stores/useTabStore';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import { ChangeAccessCodeDialog } from '@/components/invest/ChangeAccessCodeDialog';
import { CurrencyDialog } from '@/components/invest/CurrencyDialog';
import { ReferralCard } from '@/components/invest/ReferralCard';
import { ProfileSheet } from '@/components/invest/ProfileSheet';
import { Levels } from '@/app/levels/Levels';
import { ReferralClient } from '@/app/referral/ReferralClient';
import { Transactions } from '@/app/transactions/Transactions';
import { Favorites } from '@/app/favorites/Favorites';
import { Amount } from '@/components/invest/Amount';
import { useMoney } from '@/hooks/useMoney';
import { availableGains } from '@/utils/invest_helper';

type ProfilePanel =
  | 'levels'
  | 'referral'
  | 'transactions'
  | 'favorites'
  | 'contact'
  | null;

const CONTACT_EMAIL = 'contact@tradeshouses.com';

export const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { setTab } = stores.useTabStore();
  const { openModal: openNotifications } = stores.useModalStore();
  const [open, setOpen] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [snackSeverity, setSnackSeverity] = useState<'warning' | 'success'>(
    'warning',
  );
  const [openAccessCode, setOpenAccessCode] = useState<boolean>(false);
  const [openCurrency, setOpenCurrency] = useState<boolean>(false);
  const [panel, setPanel] = useState<ProfilePanel>(null);
  const { localCode } = useMoney();
  const { emailVerified, phoneVerified } = stores.useVerificationStore();
  const { user, initAuth, isLoadedCurrentUser, setUser, logout } =
    stores.useUserStore();
  const wallet = stores.useWalletStore((state) => state.wallet);
  const gains = availableGains(user, wallet);
  const [openModalEditInfo, setOpenModalEditInfo] = useState<boolean>(false);
  const [openModalEditAvatar, setOpenModalEditAvatar] =
    useState<boolean>(false);
  const [fullName, changeFullName] = useState<string>('');
  const [avatar, changeAvatar] = useState<string>('');
  const [email, changeEmail] = useState<string>('');
  const [pseudoName, changePseudoName] = useState<string>('');

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    event.preventDefault();
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleToogleModalEditInfo = () => {
    setOpenModalEditInfo((prev) => !prev);
  };

  const handleToogleModalEditAvatar = () => {
    setOpenModalEditAvatar((prev) => !prev);
  };

  const logoutAction = async () => {
    try {
      logout();
      LocalStorageService.saveCurrentNavigation(0);
      router.push(Routes.HOME);
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const menu = [
    {
      id: 1,
      title: 'Mon portefeuille',
      icon: (
        <AccountBalanceWalletRoundedIcon sx={{ color: 'var(--main-color)' }} />
      ),
      onclick: () => setTab(HomeTab.PORTFOLIO),
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 9,
      title: 'Mon palier d’investissement',
      icon: <WorkspacePremiumRoundedIcon sx={{ color: 'var(--main-color)' }} />,
      onclick: () => setPanel('levels'),
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 12,
      title: 'Parrainage',
      icon: <CardGiftcardRoundedIcon sx={{ color: 'var(--main-color)' }} />,
      onclick: () => setPanel('referral'),
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 2,
      title: 'Historique des transactions',
      icon: <ReceiptLongRoundedIcon sx={{ color: 'var(--main-color)' }} />,
      onclick: () => setPanel('transactions'),
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 3,
      title: 'Mes maisons favorites',
      icon: <svg.HeartSvg isLiked />,
      onclick: () => setPanel('favorites'),
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 4,
      title: 'Notifications',
      icon: <NotificationsRoundedIcon sx={{ color: 'var(--main-color)' }} />,
      onclick: openNotifications,
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    // {
    //   id: 5,
    //   title: 'My promocodes empty',
    //   icon: <svg.GiftSvg />,
    //   route: Routes.PROMOCODES_EMPTY,
    //   titleColor: 'var(--main-color)',
    //   rightIcon: true,
    // },
    // {
    //   id: 6,
    //   icon: <svg.PhoneSvg verified={phoneVerified} />,
    //   titleColor: phoneVerified ? 'var(--main-color)' : '#FF4768',
    //   route: phoneVerified ? '#' : Routes.VERIFY_YOUR_PHONE_NUMBER,
    //   title: phoneVerified
    //     ? 'Your phone number verified'
    //     : 'Verify phone number',
    //   rightIcon: phoneVerified ? false : true,
    // },
    {
      id: 10,
      title: 'Changer mon code d’accès',
      icon: <LockResetRoundedIcon sx={{ color: 'var(--main-color)' }} />,
      onclick: () => setOpenAccessCode(true),
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 11,
      title: `Devise locale (${localCode})`,
      icon: (
        <CurrencyExchangeRoundedIcon sx={{ color: 'var(--main-color)' }} />
      ),
      onclick: () => setOpenCurrency(true),
      titleColor: 'var(--main-color)',
      rightIcon: true,
    },
    {
      id: 7,
      icon: <svg.EmailSvg verified={emailVerified} />,
      onclick: () => setPanel('contact'),
      titleColor: '#FF4768',
      title: 'Nous contacter',
      rightIcon: true,
    },
    {
      id: 8,
      title: 'Deconnexion',
      icon: <svg.LogOutSvg />,
      onclick: logoutAction,
      titleColor: 'var(--main-color)',
      rightIcon: false,
    },
    // {
    //   id: 9,
    //   title: 'Supprimer mon compte',
    //   icon: <svg.CrossSvg />,
    //   route: "#",
    //   titleColor: '#FF4768',
    //   rightIcon: false,
    // },
  ];

  const renderHeader = () => {
    return <components.Header showBasket={true} showLogo={true} />;
  };

  const renderContent = () => {
    return (
      <main
        className="scrollable container"
        style={{ paddingTop: '10%', paddingBottom: '20px' }}
      >
        {/* USER INFO */}
        <section style={{ marginBottom: 16 }}>
          <Stack spacing={3} direction="row" alignItems="center">
            <Badge
              onClick={(e) => {
                e.stopPropagation();
                handleToogleModalEditAvatar();
              }}
              offset={[-10, 50]}
              count={
                <CameraAltTwoToneIcon sx={{ color: 'var(--accent-color)' }} />
              }
            >
              {user?.profil && avatar.length > 0 && (
                <Avatar
                  alt={isLoadedCurrentUser ? user?.phone_number : ''}
                  src={`${URLS_ASSETS.AVATARS}/${avatar}`}
                  sx={{ width: 56, height: 56 }}
                />
              )}
            </Badge>
            <Box component="div">
              <Stack direction="row" alignItems="center" spacing={1}>
                <h3>
                  {isLoadedCurrentUser && user?.full_name
                    ? user?.full_name
                    : 'Aucun Nom'}
                </h3>

                {isLoadedCurrentUser && user?.pseudo && (
                  <span className="t12">{user?.pseudo}</span>
                )}

                <Tooltip title="Modifier profil">
                  <IconButton onClick={handleToogleModalEditInfo}>
                    <EditTwoToneIcon
                      style={{ color: 'var(--accent-color) !important' }}
                    />
                  </IconButton>
                </Tooltip>
              </Stack>
              <span className="t16">
                {isLoadedCurrentUser ? user?.phone_number : ''}
              </span>
              <span className="t12 ml-1">
                {isLoadedCurrentUser && user?.email
                  ? user?.email
                  : 'Aucun mail'}
              </span>
              {isLoadedCurrentUser && (
                <p
                  className="t14"
                  style={{
                    marginTop: 6,
                    fontWeight: 700,
                    color: 'var(--success-color)',
                  }}
                >
                  Gains : <Amount value={gains} />
                </p>
              )}
            </Box>
          </Stack>
        </section>
        {user?.referralCode && (
          <section style={{ marginBottom: 16 }}>
            <ReferralCard code={user.referralCode} />
            <span
              className="t14 clickable"
              onClick={() => setPanel('referral')}
              style={{
                display: 'inline-block',
                marginTop: 8,
                fontWeight: 600,
                color: 'var(--main-color)',
              }}
            >
              Voir mon parrainage →
            </span>
          </section>
        )}
        {/* MENU */}
        <section>
          <Grid container spacing={1}>
            {menu.map((item) => {
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      item.onclick?.();
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      padding: 15,
                      paddingRight: 16,
                      borderRadius: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 16,
                      backgroundColor: 'var(--white-color)',
                    }}
                  >
                    {item.icon}
                    <h5 style={{ marginRight: 'auto', color: item.titleColor }}>
                      {item.title}
                    </h5>
                    {item.rightIcon && <svg.RightArrowSvg />}
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </section>
      </main>
    );
  };

  const submit = async () => {
    const isReady =
      [
        email.trim().indexOf('@') === -1,
        fullName.trim().length < 3,
        pseudoName.trim().length > 10 || pseudoName.trim().length < 3,
      ].filter((item) => item).length === 0;
    if (isReady) {
      try {
        const { etat, result, error, message } = await updateUser({
          full_name: fullName,
          email,
          pseudo: pseudoName,
        });
        if (etat) {
          const userInfo = result.client as UserType;
          setUser(userInfo);
          handleToogleModalEditInfo();
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error(error);
      }
      return;
    } else {
      if (email.trim().indexOf('@') === -1) {
        setMessageError('Veuillez entrer un email valide.');
      } else if (fullName.trim().length < 3) {
        setMessageError('Veuillez entrer un nom complet valide.');
      } else if (
        pseudoName.trim().length < 3 ||
        pseudoName.trim().length > 10
      ) {
        setMessageError('Le pseudo doit être compris entre 3 à 10 caractères.');
      }
      setSnackSeverity('warning');
      setOpen(true);
    }
  };

  const renderEditInfo = () => {
    return (
      <Dialog
        maxWidth="xs"
        open={openModalEditInfo}
        onClose={handleToogleModalEditInfo}
        slotProps={{}}
      >
        <DialogTitle>Informations personnelles</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {!user?.full_name && !user?.email
              ? 'Veuillez renseignez vos informations afin de pouvoir débloquer plus de contenu.'
              : 'Vous pouvez modifier ces informations'}
          </DialogContentText>
          <components.InputField
            type="text"
            value={fullName}
            onChange={(e) => {
              changeFullName(e.target.value);
            }}
            inputType="text"
            placeholder="Nom complet"
            containerStyle={{ marginBottom: 14 }}
          />
          <components.InputField
            type="email"
            inputType="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              changeEmail(e.target.value);
            }}
            containerStyle={{ marginBottom: 14 }}
          />
          <components.InputField
            type="text"
            value={pseudoName}
            onChange={(e) => {
              changePseudoName(e.target.value);
            }}
            inputType="text"
            placeholder="Nom joueur (pseudo)"
            containerStyle={{ marginBottom: 14 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToogleModalEditInfo}>Annuler</Button>
          <Button type="button" onClick={submit}>
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const updateAvatar = async (avatar: string) => {
    handleToogleModalEditAvatar();
    try {
      const { etat, result, error, message } = await updateUser({
        profil: avatar,
      });
      if (etat) {
        const userInfo = result.client as UserType;
        setUser(userInfo);
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderEditAvatar = () => {
    return (
      <Dialog
        maxWidth="xs"
        open={openModalEditAvatar}
        onClose={handleToogleModalEditAvatar}
        slotProps={{}}
      >
        <DialogTitle>Avatar de profil</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            {avatarsMook.map((avatarMook) => (
              <Badge
                key={avatarMook}
                onClick={() => {
                  changeAvatar(avatarMook);
                  updateAvatar(avatarMook);
                }}
                offset={[-2, 10]}
                count={
                  avatar === avatarMook ? (
                    <CheckIcon color="success" fontSize="small" />
                  ) : (
                    0
                  )
                }
              >
                <Avatar
                  alt="Avatar"
                  src={`${URLS_ASSETS.AVATARS}/${avatarMook}`}
                  sx={{ width: 56, height: 56, cursor: 'pointer' }}
                />
              </Badge>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToogleModalEditAvatar}>Annuler</Button>
        </DialogActions>
      </Dialog>
    );
  };

  useEffect(() => {
    if (!isLoadedCurrentUser) {
      initAuth();
    } else {
      changeEmail(user?.email ?? '');
      changeFullName(user?.full_name ?? '');
      changePseudoName(user?.pseudo ?? '');
      changeAvatar(user?.profil ?? '');
    }
  }, [user]);

  return (
    <components.Screen>
      {renderHeader()}
      {renderContent()}
      {renderEditInfo()}
      {renderEditAvatar()}
      <CurrencyDialog
        open={openCurrency}
        onClose={() => setOpenCurrency(false)}
      />
      <ChangeAccessCodeDialog
        open={openAccessCode}
        onClose={() => setOpenAccessCode(false)}
        onSuccess={(message) => {
          setSnackSeverity('success');
          setMessageError(message);
          setOpen(true);
        }}
      />
      <ProfileSheet
        open={panel === 'levels'}
        title="Mes paliers"
        onClose={() => setPanel(null)}
      >
        {panel === 'levels' ? <Levels embedded /> : null}
      </ProfileSheet>
      <ProfileSheet
        open={panel === 'referral'}
        title="Parrainage"
        onClose={() => setPanel(null)}
      >
        {panel === 'referral' ? <ReferralClient embedded /> : null}
      </ProfileSheet>
      <ProfileSheet
        open={panel === 'transactions'}
        title="Transactions"
        onClose={() => setPanel(null)}
      >
        {panel === 'transactions' ? <Transactions embedded /> : null}
      </ProfileSheet>
      <ProfileSheet
        open={panel === 'favorites'}
        title="Mes favoris"
        onClose={() => setPanel(null)}
      >
        {panel === 'favorites' ? <Favorites embedded /> : null}
      </ProfileSheet>
      <ProfileSheet
        open={panel === 'contact'}
        title="Nous contacter"
        onClose={() => setPanel(null)}
      >
        <p className="t16" style={{ marginBottom: 16 }}>
          Une question sur votre compte, un investissement ou un paiement ?
          Écrivez-nous, nous vous répondons rapidement.
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 16,
            color: 'var(--main-color)',
          }}
        >
          {CONTACT_EMAIL}
        </p>
        <Button
          onClick={() => {
            window.location.href = `mailto:${CONTACT_EMAIL}`;
          }}
        >
          Envoyer un e-mail
        </Button>
      </ProfileSheet>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {messageError}
        </Alert>
      </Snackbar>
    </components.Screen>
  );
};

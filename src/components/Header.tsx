'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { svg } from '../svg';
import { stores } from '../stores';
import { AppLogo } from './invest/AppLogo';

type Props = {
  title?: string;
  showLogo?: boolean;
  showGoBack?: boolean;
  showSearch?: boolean;
  showBasket?: boolean;
  showBurger?: boolean;
};

export const Header: React.FC<Props> = ({
  showGoBack,
  showLogo,
  title,
  showBasket,
  showSearch,
  showBurger,
}) => {
  const router = useRouter();

  const { openModal } = stores.useModalStore();
  const { init } = stores.useNotificationStore();

  useEffect(() => {
    init();
  }, []);

  const renderGoBack = () => {
    if (!showGoBack) return null;
    return (
      <button
        type="button"
        title="Go back"
        aria-label="Go back"
        onClick={() => router.back()}
        style={{ left: '0px', padding: '0 20px', position: 'absolute' }}
      >
        <svg.GoBackSvg />
      </button>
    );
  };

  const renderTitle = () => {
    if (!title) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h4 style={{ textTransform: 'capitalize' }}>{title}</h4>
      </div>
    );
  };

  const renderBasket = () => {
    if (!showBasket) return null;

    return (
      <button
        id="header-notification-button"
        type="button"
        title="Open basket"
        aria-label="Open basket"
        onClick={() => {
          openModal();
        }}
        style={{
          height: '100%',
          width: 'auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: 0,
        }}
      >
        <svg.InfoNotificationSvg />
      </button>
    );
  };

  const renderBurger = () => {
    if (!showBurger) return null;
    return (
      <button
        type="button"
        title="Open menu"
        aria-label="Open menu"
        style={{
          position: 'absolute',
          left: 0,
          padding: '20px',
        }}
        onClick={() => {
          openModal();
        }}
      >
        <svg.BurgerSvg />
      </button>
    );
  };

  const renderLogo = () => {
    if (!showLogo) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <AppLogo size={26} />
      </div>
    );
  };

  const renderSearch = () => {
    if (!showSearch) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <svg.HeaderSearchSvg />
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        flexShrink: 0,
        height: 'var(--header-height)',
      }}
    >
      {renderGoBack()}
      {renderTitle()}
      {renderBasket()}
      {renderBurger()}
      {renderLogo()}
      {renderSearch()}
    </div>
  );
};

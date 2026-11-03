'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { svg } from '../svg';
import { Routes } from '../routes';
import { stores } from '../stores';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { Box } from '@mui/material';
import { notificationTitle } from '@/utils/notification_helper';
import { NotificationType } from '@/types';

export const Modal: React.FC = () => {
  const { isOpen, closeModal } = stores.useModalStore();
  const { notifications, readAllNotification } = stores.useNotificationStore();
  const { isDesktop } = useDeviceDetect();
  const pathname = usePathname();

  const numberNotificationsNotRead = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  useEffect(() => {
    if (isOpen) {
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#F5FAFB');
      }

      return () => {
        if (
          pathname === Routes.PROFILE ||
          pathname === Routes.HOME ||
          pathname === Routes.ORDER
        ) {
          metaThemeColor?.setAttribute('content', '#F5FAFB');
        }

        if (pathname === Routes.CATEGORIES) {
          metaThemeColor?.setAttribute('content', 'var(--white-color)');
        }
      };
    }
  }, [isOpen, pathname]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
        backgroundColor: 'rgba(30, 37, 56, 0.6)',
        zIndex: 101,
      }}
      onClick={() => {
        closeModal();
        if (numberNotificationsNotRead > 0) {
          readAllNotification(notifications);
        }
      }}
    >
      <div
        style={{
          position: 'absolute',

          right: 0,
          top: 0,
          height: '100%',
          maxHeight: '100vh',
          overflow: 'auto',
          width: isDesktop ? '36%' : '76%',
          backgroundColor: '#F5FAFB',
          zIndex: 99999,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          style={{
            paddingTop: '20%',
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <h2 style={{ marginBottom: 27 }}>
            {numberNotificationsNotRead > 0
              ? `${numberNotificationsNotRead === 1 ? 'Une notification' : numberNotificationsNotRead + ' notifications'} non lu`
              : 'Vos notifications'}
          </h2>
        </div>
        {notifications.length === 0 && (
          <p
            className='t16'
            style={{ padding: '8px 20px 24px', color: 'var(--text-color)' }}
          >
            Aucune notification pour le moment.
          </p>
        )}
        {notifications.map((notification: NotificationType) => (
          <div
            key={`notification-${notification.id}`}
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              display: 'flex',
              paddingBottom: 10,
              flexDirection: 'row',
              ...(!notification.isRead && {
                backgroundColor: 'var(--accent-color-light)',
              }),

              gap: 8,
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <Box component='div' sx={{ width: 40, height: 40 }}>
              <svg.ModalMailSvg isActive={!notification.isRead} />
            </Box>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className='t14 text-black'>
                {notificationTitle(notification.priority)}
              </span>
              <span className='t16 text-black'>{notification.message}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

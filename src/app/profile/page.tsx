import type { Metadata, Viewport } from 'next';

import { APP_NAME } from '@/config';
import { Modal } from '@/components/Modal';
import { ProfilePage } from './Profile';

export const metadata: Metadata = {
  title: `Mon profil — ${APP_NAME}`,
  description: 'Gérez votre compte.',
};

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export default function Page() {
  return (
    <>
      <ProfilePage />
      <Modal />
    </>
  );
}

import type { Metadata, Viewport } from 'next';

import { EditProfile } from './EditProfile';

export const metadata: Metadata = {
  title: 'Edit Profile',
  description: 'Edit your profile information.',
};

export const viewport: Viewport = {
  themeColor: 'var(--white-color)',
};

export default function NewPasswordPage() {
  return <EditProfile />;
}

import type { Metadata, Viewport } from 'next';

import { PhoneVerified } from './PhoneVerified';

export const metadata: Metadata = {
  title: 'Edit Profile',
  description: 'Edit your profile information.',
};

export const viewport: Viewport = {
  themeColor: 'var(--white-color)',
};

export default function PhoneVerifiedPage() {
  return <PhoneVerified />;
}

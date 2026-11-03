import type { Metadata, Viewport } from 'next';
import { APP_NAME } from '@/config';
import { ReferralClient } from './ReferralClient';

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export const metadata: Metadata = {
  title: `Parrainage — ${APP_NAME}`,
  description:
    'Partagez votre lien, suivez vos filleuls et vos dividendes de parrainage.',
};

export default function ReferralPage() {
  return <ReferralClient />;
}

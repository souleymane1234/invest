import type { Metadata, Viewport } from 'next';
import { APP_DESCRIPTION, APP_NAME } from '@/config';

export const metadata: Metadata = {
  title: `${APP_NAME} — Investissez avec les meilleures maisons de trading`,
  description: APP_DESCRIPTION,
};

export const viewport: Viewport = {
  themeColor: '#F5FAFB',
};

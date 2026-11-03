import type { Metadata, Viewport } from 'next';
import { APP_NAME } from '@/config';
import { TransactionDetailClient } from './TransactionDetailClient';

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export const metadata: Metadata = {
  title: `Suivi de transaction — ${APP_NAME}`,
  description: 'Suivi d’un dépôt ou d’un retrait en cours.',
};

type Params = {
  params: Promise<{ id: string }>;
};

export default async function TransactionDetailPage({ params }: Params) {
  const { id } = await params;
  return <TransactionDetailClient id={id} />;
}

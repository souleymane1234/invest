import type { Metadata, Viewport } from 'next';
import { APP_NAME } from '@/config';
import { HouseDetailClient } from './HouseDetailClient';

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export const metadata: Metadata = {
  title: `Maison de trading — ${APP_NAME}`,
  description: 'Statistiques, formules d’investissement et avis.',
};

type Params = {
  params: Promise<{ id: string }>;
};

export default async function HousePage({ params }: Params) {
  const { id } = await params;
  return <HouseDetailClient id={id} />;
}

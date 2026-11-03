import type { Metadata, Viewport } from 'next';
import { APP_NAME } from '@/config';
import { Favorites } from './Favorites';

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export const metadata: Metadata = {
  title: `Mes maisons favorites — ${APP_NAME}`,
  description: 'Les maisons de trading que vous suivez.',
};

export default function FavoritesPage() {
  return <Favorites />;
}

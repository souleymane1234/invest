import type { Metadata, Viewport } from 'next';
import { APP_NAME } from '@/config';
import { Transactions } from './Transactions';

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export const metadata: Metadata = {
  title: `Historique des transactions — ${APP_NAME}`,
  description: 'Dépôts, retraits et mouvements de vos soldes.',
};

export default function TransactionsPage() {
  return <Transactions />;
}

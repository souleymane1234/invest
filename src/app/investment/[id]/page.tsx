import type { Metadata, Viewport } from 'next';
import { APP_NAME } from '@/config';
import { InvestmentDetailClient } from './InvestmentDetailClient';

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export const metadata: Metadata = {
  title: `Suivi d’investissement — ${APP_NAME}`,
  description: 'Détail, avancement et versements journaliers de votre investissement.',
};

type Params = {
  params: Promise<{ id: string }>;
};

export default async function InvestmentPage({ params }: Params) {
  const { id } = await params;
  return <InvestmentDetailClient id={id} />;
}

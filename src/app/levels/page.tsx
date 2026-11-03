import type { Metadata, Viewport } from 'next';
import { APP_NAME } from '@/config';
import { Levels } from './Levels';

export const viewport: Viewport = { themeColor: '#F5FAFB' };

export const metadata: Metadata = {
  title: `Mes paliers — ${APP_NAME}`,
  description: 'Progressez de palier en palier pour débloquer de nouvelles maisons et formules.',
};

export default function LevelsPage() {
  return <Levels />;
}

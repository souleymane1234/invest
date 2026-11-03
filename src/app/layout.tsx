import { Dosis, League_Spartan } from 'next/font/google';
import type { Metadata } from 'next';

import 'swiper/css';
import '../scss/_index.scss';
import LayoutPageClient from './layoutPageClient';

const dosis = Dosis({
  variable: '--font-dosis',
  subsets: ['latin'],
});

const leagueSpartan = League_Spartan({
  variable: '--font-league-spartan',
  subsets: ['latin'],
});

export const metadata: Metadata = { manifest: '/manifest.json' };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        {/* <meta
      name='theme-color'
      content='#F5FAFB'
    /> */}
      </head>

      <LayoutPageClient
        children={children}
        dosis={dosis}
        leagueSpartan={leagueSpartan}
      />
    </html>
  );
}

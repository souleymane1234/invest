import type { Metadata, Viewport } from 'next';

import { CartEmpty } from './CartEmpty';

export const metadata: Metadata = {
  title: 'Order Failed',
  description: 'Your order has failed. Please try again.',
};

export const viewport: Viewport = { themeColor: 'var(--white-color)' };

export default function CartEmptyPage() {
  return <CartEmpty />;
}

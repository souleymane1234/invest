import type { Metadata, Viewport } from 'next';

import { OrderSuccessful } from './OrderSuccessful';

export const viewport: Viewport = { themeColor: 'var(--white-color)' };

export const metadata: Metadata = {
  title: 'Order Successful',
  description: 'Your order has been successful.',
};

export default function NewPasswordPage() {
  return <OrderSuccessful />;
}

import type { Metadata, Viewport } from 'next';

import { OrderFailed } from './OrderFailed';

export const metadata: Metadata = {
  title: 'Order Failed',
  description: 'Your order has failed. Please try again.',
};

export const viewport: Viewport = {
  themeColor: 'var(--white-color)',
};

export default function NewPasswordPage() {
  return <OrderFailed />;
}

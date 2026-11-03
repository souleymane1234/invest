import type { Metadata, Viewport } from 'next';

import { SignIn } from './SignIn';

export const metadata: Metadata = {
  title: 'Authentification',
  description:
    'Connectez-vous avec votre numéro de téléphone pour investir et suivre votre portefeuille.',
};

export const viewport: Viewport = {
  themeColor: 'var(--white-color)',
};

export default function SignInPage() {
  return <SignIn />;
}

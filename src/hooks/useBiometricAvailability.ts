import { useState, useEffect } from 'react';
import {
  browserSupportsWebAuthn,
  platformAuthenticatorIsAvailable,
} from '@simplewebauthn/browser';

export function useBiometricAvailability() {
  const [isSupported, setIsSupported] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function check() {
      if (!browserSupportsWebAuthn()) {
        setError('Navigateur incompatible WebAuthn');
        setIsSupported(false);
        setLoading(false);
        return;
      }
      try {
        const available = await platformAuthenticatorIsAvailable();
        setIsSupported(available);
        if (!available) setError('Pas de biométrie de plateforme disponible.');
      } catch (err: any) {
        setError(err.message || 'Erreur inconnue');
        setIsSupported(false);
      } finally {
        setLoading(false);
      }
    }

    // Un peu plus safe: attendre un bouton d'action
    // Sinon, pour debug, tu peux laisser ça directement.
    check();
  }, []);

  return { isSupported, loading, error };
}

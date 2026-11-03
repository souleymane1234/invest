import { URLS, USE_SEED_DATA } from '@/config';
import { LocalStorageService } from '@/storages/local_storage_service';
import * as seed from '@/seeders/api';
import {
  startAuthentication,
  startRegistration,
} from '@simplewebauthn/browser';

export const handleBiometricLogin = async (phone_number: string) => {
  if (USE_SEED_DATA) return seed.biometricLogin(phone_number);
  try {
    const origin = window.origin;
    const res = await fetch(URLS.GENERATE_AUTHENTICATION_BIOMETRICS_OPTIONS, {
      method: 'POST',
      body: JSON.stringify({ phone_number }),
      headers: {
        'Content-Type': 'application/json',
        Origin: origin,
      },
    });
    const options = await res.json();

    const assertionResp = await startAuthentication(options);

    const verifyRes = await fetch(URLS.AUTHENTICATION_BIOMETRICS_OPTIONS, {
      method: 'POST',
      body: JSON.stringify({
        authenticationResponse: assertionResp,
        phone_number,
      }),
      headers: {
        'Content-Type': 'application/json',
        Origin: origin,
      },
    });
    if (!verifyRes.ok) {
      return {
        etat: false,
        error: [
          "Erreur lors de la vérification de l'authentification biométrique",
        ],
      };
    }
    const json = await verifyRes.json();
    if (json.etat) {
      const { access_token, ...rest } = json.result.client;
      LocalStorageService.saveToken(access_token);
      return { etat: true, result: rest };
    } else {
      return json;
    }
  } catch (error) {
    console.error('Error during biometric login:', error);
    return {
      etat: false,
      error: ['Erreur lors de la connexion biométrique'],
    };
  }
};

export const handleBiometricRegister = async (phone_number: string) => {
  if (USE_SEED_DATA) return seed.biometricLogin(phone_number);
  try {
    const origin = window.origin;

    // 1. Demander au backend de générer les options d'inscription
    const res = await fetch(URLS.GENERATE_REGISTRATION_BIOMETRICS_OPTIONS, {
      method: 'POST',
      body: JSON.stringify({ phone_number }),
      headers: {
        'Content-Type': 'application/json',
        Origin: origin,
      },
    });
    const options = await res.json();

    // 2. Le navigateur commence l'enregistrement biométrique
    const assertionResp = await startRegistration(options);

    // 3. Envoyer la réponse d'attestation au backend pour vérification et création de compte
    const verifyRes = await fetch(URLS.REGISTRATION_BIOMETRICS_OPTIONS, {
      method: 'POST',
      body: JSON.stringify({
        attestationResponse: assertionResp,
        phone_number,
      }),
      headers: {
        'Content-Type': 'application/json',
        Origin: origin,
      },
    });
    if (!verifyRes.ok) {
      return {
        etat: false,
        error: ["Erreur lors de la vérification de l'inscription biométrique"],
      };
    }

    const json = await verifyRes.json();
    if (json.etat) {
      const { access_token, ...rest } = json.result.client;
      LocalStorageService.saveToken(access_token);
      return { etat: true, result: rest };
    } else {
      return json;
    }
  } catch (error) {
    console.error('Error during biometric registration:', error);
    return {
      etat: false,
      error: ["Erreur lors de l'inscription biométrique"],
    };
  }
};

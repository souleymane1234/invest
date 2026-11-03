'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Alert, Box, CircularProgress } from '@mui/material';

import { Routes } from '../../routes';
import { components } from '../../components';
import { checkAccount, loginWithAccessCode } from '@/data/authentication';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { stores } from '@/stores';
import { validPhoneNumber } from '@/utils/phoneNumber_helper';
import { LocalStorageService } from '@/storages/local_storage_service';
import { AppLogo } from '@/components/invest/AppLogo';
import { AccessCodeField } from '@/components/invest/AccessCodeField';
import { ACCESS_CODE_MAX_LENGTH, ACCESS_CODE_MIN_LENGTH } from '@/config';
import { captureReferralCodeFromUrl } from '@/utils/referral_helper';

type Step = 'phone' | 'code';
/** `unknown` : l'API n'a pas indiqué si le numéro a un compte. */
type Mode = 'login' | 'create' | 'unknown';

const codeRule = `${ACCESS_CODE_MIN_LENGTH} à ${ACCESS_CODE_MAX_LENGTH} chiffres`;
const isCodeValid = (code: string) =>
  code.length >= ACCESS_CODE_MIN_LENGTH &&
  code.length <= ACCESS_CODE_MAX_LENGTH;

const lightText: React.CSSProperties = { color: '#c8cdd9' };

export const SignIn: React.FC = () => {
  const { isDesktop } = useDeviceDetect();
  const { setUser } = stores.useUserStore();
  const router = useRouter();
  const [isSending, setSending] = useState(false);
  const [step, setStep] = useState<Step>('phone');
  const [mode, setMode] = useState<Mode>('unknown');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showReferral, setShowReferral] = useState(false);
  const [code, setCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = captureReferralCodeFromUrl();
    if (!stored) return;
    setReferralCode(stored);
    setShowReferral(true);
  }, []);

  const phone = phoneNumber.trim();
  const referral = referralCode.trim() || undefined;

  const submitPhone = async () => {
    setError('');
    if (phone.length < 8 || phone.includes('+') || !validPhoneNumber(phone)) {
      setError('Entrez un numéro de téléphone valide (ex. 0102030405).');
      return;
    }
    setSending(true);
    try {
      const { hasAccount, isLocked } = await checkAccount(phone, referral);
      if (isLocked) {
        setError(
          'Ce compte est temporairement suspendu après plusieurs codes erronés. Réessayez un peu plus tard.',
        );
        return;
      }
      setMode(
        hasAccount === null ? 'unknown' : hasAccount ? 'login' : 'create',
      );
      setCode('');
      setConfirmCode('');
      setStep('code');
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Une erreur s'est produite",
      );
    } finally {
      setSending(false);
    }
  };

  const submitCode = async () => {
    setError('');
    if (!isCodeValid(code)) {
      setError(`Le code d’accès doit contenir ${codeRule}.`);
      return;
    }
    if (mode === 'create' && code !== confirmCode) {
      setError('Les deux codes ne correspondent pas.');
      return;
    }
    setSending(true);
    try {
      const response = await loginWithAccessCode(phone, code, referral);
      if (!response.etat) {
        setError(
          response.error?.[0] ?? response.message ?? 'Code d’accès incorrect.',
        );
        return;
      }
      setUser(response.result.client);
      LocalStorageService.setFirstConnexion(!!response.result.isFirstConnexion);
      const redirection = LocalStorageService.getLocationRedirection();
      LocalStorageService.saveLocationRedirection('');
      router.push(redirection || Routes.HOME);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Une erreur s'est produite",
      );
    } finally {
      setSending(false);
    }
  };

  const titles: Record<'phone' | Mode, { title: string; text: string }> = {
    phone: {
      title: 'Bienvenue !',
      text: 'Entrez votre numéro de téléphone pour vous connecter ou créer votre compte.',
    },
    login: {
      title: 'Bon retour 👋',
      text: `Entrez votre code d’accès pour le ${phone}.`,
    },
    create: {
      title: 'Créez votre compte',
      text: `Choisissez un code d’accès de ${codeRule}. Il vous servira à vous connecter : gardez-le secret.`,
    },
    unknown: {
      title: 'Votre code d’accès',
      text: `Entrez votre code d’accès. Première connexion ? Choisissez un code de ${codeRule} : votre compte sera créé avec ce code.`,
    },
  };
  const heading = titles[step === 'phone' ? 'phone' : mode];
  const submit = step === 'phone' ? submitPhone : submitCode;
  const buttonLabel =
    step === 'phone'
      ? 'Continuer'
      : mode === 'create'
        ? 'Créer mon compte'
        : 'Se connecter';

  const renderPhoneStep = () => (
    <>
      <components.InputField
        inputType="tel"
        type="tel"
        placeholder="0102030405"
        value={phoneNumber}
        containerStyle={{ marginBottom: 12 }}
        onChange={(event) =>
          setPhoneNumber(event.target.value.replace(/\D/g, ''))
        }
      />
      {showReferral ? (
        <components.InputField
          placeholder="Code de parrainage (facultatif)"
          value={referralCode}
          containerStyle={{ marginBottom: 12 }}
          onChange={(event) =>
            setReferralCode(event.target.value.toUpperCase())
          }
        />
      ) : (
        <span
          className="t14 clickable"
          onClick={() => setShowReferral(true)}
          style={{ ...lightText, marginBottom: 12, alignSelf: 'flex-start' }}
        >
          J’ai un code de parrainage
        </span>
      )}
    </>
  );

  const renderCodeStep = () => (
    <>
      <AccessCodeField
        value={code}
        onChange={setCode}
        autoFocus
        placeholder={
          mode === 'create' ? 'Choisissez votre code' : 'Code d’accès'
        }
        onEnter={mode === 'create' ? undefined : submitCode}
        containerStyle={{ marginBottom: 12 }}
      />
      {mode === 'create' && (
        <AccessCodeField
          value={confirmCode}
          onChange={setConfirmCode}
          placeholder="Confirmez votre code"
          onEnter={submitCode}
          containerStyle={{ marginBottom: 12 }}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 12,
        }}
      >
        <span
          className="t14 clickable"
          style={lightText}
          onClick={() => {
            setStep('phone');
            setError('');
          }}
        >
          ← Changer de numéro
        </span>
        {mode !== 'create' && (
          <span className="t14" style={lightText}>
            Code oublié ? Contactez le support.
          </span>
        )}
      </div>
    </>
  );

  return (
    <components.Screen>
      <components.Background />
      {!isDesktop && <components.Header showGoBack={true} />}
      <main
        className="scrollable container max-screen-width"
        style={{ paddingTop: 10, paddingBottom: 30 }}
      >
        <section
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '28px',
            background: [
              'radial-gradient(60% 45% at 100% 0%, rgba(252, 197, 94, 0.35) 0%, rgba(252, 197, 94, 0) 70%)',
              'radial-gradient(55% 40% at 0% 100%, rgba(252, 197, 94, 0.18) 0%, rgba(252, 197, 94, 0) 70%)',
              'linear-gradient(160deg, #1e2538 0%, #2b3554 55%, #1e2538 100%)',
            ].join(', '),
            boxShadow: '0 24px 60px -24px rgba(30, 37, 56, 0.55)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 16,
            }}
          >
            <AppLogo size={48} light />
          </div>

          <h1
            style={{
              marginBottom: 12,
              textAlign: 'center',
              color: 'var(--white-color)',
            }}
          >
            {heading.title}
          </h1>
          <p
            className="t16"
            style={{ ...lightText, marginBottom: 28, textAlign: 'center' }}
          >
            {heading.text}
          </p>

          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={(event) => {
              event.preventDefault();
              submit();
            }}
          >
            {step === 'phone' ? renderPhoneStep() : renderCodeStep()}

            {error && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: '14px' }}>
                {error}
              </Alert>
            )}

            <div style={{ marginTop: 8, marginBottom: 24 }}>
              {isSending ? (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: 50,
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress
                    size={30}
                    sx={{ color: 'var(--accent-color)' }}
                  />
                </Box>
              ) : (
                <components.Button
                  label={buttonLabel}
                  onClick={(event) => {
                    event.preventDefault();
                    submit();
                  }}
                />
              )}
            </div>
          </form>
        </section>
      </main>
    </components.Screen>
  );
};

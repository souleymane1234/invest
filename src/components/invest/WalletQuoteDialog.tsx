'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Alert,
  CircularProgress,
  Dialog,
  IconButton,
  Stack,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { OTPInput } from '@/components/OtpInput';
import {
  paymentServiceLabel,
  servicesMobileMoney,
} from '@/constants/serviceMobileMoney';
import { data } from '@/data';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useMoney } from '@/hooks/useMoney';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import {
  WalletQuote,
  WalletQuoteType,
  WalletTransaction,
} from '@/types/WalletType';
import { sortNotifications } from '@/utils/notification_helper';
import {
  convertAmount,
  formatAmount,
  parseInputAmount,
  STORAGE_CURRENCY,
} from '@/utils/invest_helper';
import { MarketChip } from './Badges';

type Props = {
  open: boolean;
  type: WalletQuoteType;
  onClose: () => void;
};

type Step = 'form' | 'processing' | 'success';

const OTP_LENGTH = 6;
const ORANGE_MONEY = 'orangeci';

const mobileMoneyServices = servicesMobileMoney.filter(
  (item) => item.type === 'mobile money',
);

const usdFormat = { code: 'USD', digits: 2, symbol: 'USD' };

const Row: React.FC<{ label: string; value: string; strong?: boolean }> = ({
  label,
  value,
  strong,
}) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
    <span className="t14">{label}</span>
    <span
      style={{
        fontWeight: strong ? 700 : 500,
        color: strong ? 'var(--success-color)' : 'var(--main-color)',
        textAlign: 'right',
      }}
    >
      {value}
    </span>
  </div>
);

export const WalletQuoteDialog: React.FC<Props> = ({ open, type, onClose }) => {
  const router = useRouter();
  const { isDesktop } = useDeviceDetect();
  const user = stores.useUserStore((state) => state.user);
  const setUser = stores.useUserStore((state) => state.setUser);
  const setNotifications = stores.useNotificationStore(
    (state) => state.setNotifications,
  );
  const wallet = stores.useWalletStore((state) => state.wallet);
  const loadWallet = stores.useWalletStore((state) => state.load);
  const rates = stores.useCurrencyStore((state) => state.rates);
  const { localCode, formatWithLocal } = useMoney();
  const [step, setStep] = useState<Step>('form');
  const [service, setService] = useState(
    mobileMoneyServices.find((item) => item.name === 'waveci')?.name ??
      mobileMoneyServices[0]?.name ??
      '',
  );
  const [amount, setAmount] = useState('5000');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [quote, setQuote] = useState<WalletQuote | null>(null);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteError, setQuoteError] = useState('');
  const [error, setError] = useState('');
  const [transaction, setTransaction] = useState<WalletTransaction | null>(null);
  const paymentRedirect = useRef<number | null>(null);

  const isWithdraw = type === 'withdraw';
  const needsOtp = !isWithdraw && service === ORANGE_MONEY;
  const title = isWithdraw ? 'Retirer' : 'Recharger';
  const numericAmount = parseInputAmount(amount);
  const selectedService = mobileMoneyServices.find(
    (item) => item.name === service,
  );
  const phoneLength = selectedService?.length ?? 10;
  const phonePrefix = selectedService?.startWith ?? '';
  const phoneValid =
    phone.length === phoneLength &&
    (!phonePrefix || phone.startsWith(phonePrefix));
  const available = wallet?.availableBalance ?? 0;
  const amountError = isWithdraw && numericAmount > available
    ? `Solde insuffisant (${formatWithLocal(available)} disponible)`
    : '';
  const canSubmit =
    numericAmount > 0 &&
    Boolean(service) &&
    phoneValid &&
    !amountError &&
    (!needsOtp || otp.length === OTP_LENGTH);

  useEffect(() => {
    return () => {
      if (paymentRedirect.current) {
        window.clearTimeout(paymentRedirect.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setStep('form');
    setAmount('5000');
    setQuote(null);
    setQuoteError('');
    setError('');
    setOtp('');
    setTransaction(null);
    setService(
      mobileMoneyServices.find((item) => item.name === 'waveci')?.name ??
        mobileMoneyServices[0]?.name ??
        '',
    );
    const stored = (user?.phone_number ?? '').replace(/\D/g, '').slice(-10);
    setPhone(stored);
  }, [open, type, user?.phone_number]);

  useEffect(() => {
    if (!open || !service || numericAmount <= 0 || step !== 'form') {
      return;
    }
    let cancelled = false;
    setQuoteLoading(true);
    setQuoteError('');
    const timer = window.setTimeout(() => {
      data
        .getWalletQuote({ type, service, amount: numericAmount })
        .then((next) => {
          if (cancelled) return;
          setQuote(next);
          setQuoteLoading(false);
        })
        .catch((nextError: unknown) => {
          if (cancelled) return;
          setQuote(null);
          setQuoteLoading(false);
          setQuoteError(
            nextError instanceof Error
              ? nextError.message
              : 'Impossible de calculer l’aperçu',
          );
        });
    }, 400);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [open, type, service, numericAmount, step]);

  const displayFromUsd = (usd: number) => {
    const rateMap = rates?.rates ?? { USD: 1, [STORAGE_CURRENCY]: 1 };
    return convertAmount(usd, 'USD', localCode, rateMap);
  };
  const displayFormat = {
    code: localCode,
    digits: localCode === 'XOF' || localCode === 'XAF' ? 0 : 2,
    symbol: localCode === 'XOF' || localCode === 'XAF' ? 'FCFA' : localCode,
  };

  const cancelPaymentRedirect = () => {
    if (paymentRedirect.current) {
      window.clearTimeout(paymentRedirect.current);
      paymentRedirect.current = null;
    }
  };

  const close = () => {
    if (step === 'processing') return;
    cancelPaymentRedirect();
    onClose();
  };

  const submit = async () => {
    if (!canSubmit) return;
    setError('');
    setStep('processing');
    try {
      const response = isWithdraw
        ? await data.withdrawWallet({
            amount: numericAmount,
            service,
            numberTel: phone,
          })
        : await data.depositWallet({
            amount: numericAmount,
            service,
            numberTel: phone,
            ...(needsOtp ? { otp } : {}),
          });
      if (!response.etat) {
        throw new Error(
          response.error?.[0] ??
            (isWithdraw ? 'Le retrait a échoué' : 'La recharge a échoué'),
        );
      }
      const nextTransaction = response.result?.transaction ?? null;
      const paymentUrl =
        response.result?.paymentUrl ?? nextTransaction?.paymentUrl;
      setTransaction(
        nextTransaction
          ? { ...nextTransaction, paymentUrl: paymentUrl ?? nextTransaction.paymentUrl }
          : nextTransaction,
      );
      const [freshUser, apiNotifications] = await Promise.all([
        data.getUser().catch(() => null),
        data.getNotifications().catch(() => null),
      ]);
      if (freshUser) {
        setUser(freshUser);
        setNotifications(
          sortNotifications(apiNotifications ?? freshUser.notifications ?? []),
        );
      }
      await loadWallet();
      setStep('success');
      if (paymentUrl) {
        paymentRedirect.current = window.setTimeout(() => {
          window.location.assign(paymentUrl);
        }, 800);
      }
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Une erreur est survenue',
      );
      setStep('form');
    }
  };

  const renderForm = () => (
    <>
      {isWithdraw && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Solde disponible : {formatWithLocal(available)}
        </Alert>
      )}
      {!isWithdraw && (
        <Alert severity="info" sx={{ mb: 2 }}>
          La recharge crédite votre solde actif par mobile money.
        </Alert>
      )}

      <h6 style={{ marginBottom: 8 }}>1. Moyen de paiement</h6>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 20,
        }}
      >
        {mobileMoneyServices.map((item) => (
          <MarketChip
            key={item.name}
            label={item.label ?? item.name}
            active={service === item.name}
            onClick={() => {
              setService(item.name);
              if (item.name !== ORANGE_MONEY) setOtp('');
            }}
          />
        ))}
      </div>

      <h6 style={{ marginBottom: 8 }}>
        2. Montant ({isWithdraw ? 'à retirer' : 'à envoyer'})
      </h6>
      <InputField
        placeholder="5000"
        value={amount}
        onChange={(event) =>
          setAmount(event.target.value.replace(/[^\d]/g, ''))
        }
      />
      <p className="t12" style={{ margin: '8px 0 20px' }}>
        Montant dans la devise du moyen de paiement (FCFA).
      </p>
      {amountError ? (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {amountError}
        </Alert>
      ) : null}

      <h6 style={{ marginBottom: 8 }}>3. Numéro mobile money</h6>
      <InputField
        placeholder={phonePrefix ? `${phonePrefix}00000000` : '0700000000'}
        value={phone}
        inputType="tel"
        type="tel"
        onChange={(event) =>
          setPhone(event.target.value.replace(/\D/g, '').slice(0, phoneLength))
        }
      />
      <p className="t12" style={{ margin: '8px 0 20px' }}>
        {phonePrefix
          ? `${paymentServiceLabel(service)} : ${phoneLength} chiffres, commence par ${phonePrefix}.`
          : `${phoneLength} chiffres.`}
      </p>

      {needsOtp && (
        <>
          <h6 style={{ marginBottom: 8 }}>4. Code OTP Orange Money</h6>
          <p className="t12" style={{ marginBottom: 8 }}>
            Saisissez le code reçu par SMS pour confirmer le paiement.
          </p>
          <div style={{ marginBottom: 20 }}>
            <OTPInput length={OTP_LENGTH} value={otp} onChange={setOtp} />
          </div>
        </>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          padding: 16,
          marginBottom: 16,
          borderRadius: 20,
          backgroundColor: 'var(--white-color)',
          border: '1px solid var(--border-color)',
          minHeight: 120,
        }}
      >
        {quoteLoading ? (
          <Stack alignItems="center" justifyContent="center" sx={{ py: 2 }}>
            <CircularProgress size={28} sx={{ color: 'var(--accent-color)' }} />
          </Stack>
        ) : quote ? (
          <>
            <Row
              label="Montant saisi"
              value={`${quote.amount.toLocaleString('fr-FR')} ${quote.currency ?? 'FCFA'}`}
            />
            {quote.rate ? (
              <Row
                label="Taux du moment"
                value={`1 USD = ${quote.rate.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} ${quote.currency ?? 'FCFA'}`}
              />
            ) : null}
            {quote.fee ? (
              <Row label="Frais" value={formatAmount(quote.fee, usdFormat)} />
            ) : null}
            <Row
              label={isWithdraw ? 'USD débité' : 'USD crédité'}
              value={formatAmount(quote.usdAmount, usdFormat)}
              strong
            />
            {localCode !== 'USD' ? (
              <Row
                label={`Soit en ${localCode}`}
                value={formatAmount(displayFromUsd(quote.usdAmount), displayFormat)}
              />
            ) : null}
          </>
        ) : (
          <span className="t14">
            Saisissez un montant pour voir le {isWithdraw ? 'débit' : 'crédit'}{' '}
            en USD au taux du moment.
          </span>
        )}
      </div>

      {quoteError && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {quoteError}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Button
        label={
          isWithdraw
            ? `Retirer ${numericAmount > 0 ? amount : ''}`
            : `Recharger ${numericAmount > 0 ? amount : ''}`
        }
        disabled={!canSubmit}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          if (canSubmit) submit();
        }}
      />
    </>
  );

  const renderProcessing = () => (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{ py: 8, textAlign: 'center' }}
    >
      <CircularProgress sx={{ color: 'var(--accent-color)' }} />
      <h4>{isWithdraw ? 'Retrait en cours…' : 'Recharge en cours…'}</h4>
      <p className="t16">
        {isWithdraw
          ? 'Envoi vers votre mobile money.'
          : 'Confirmation du paiement mobile money.'}
      </p>
    </Stack>
  );

  const renderSuccess = () => {
    const paymentUrl = transaction?.paymentUrl;
    return (
    <Stack alignItems="center" gap={1.5} sx={{ py: 3, textAlign: 'center' }}>
      <CheckCircleRoundedIcon
        sx={{ fontSize: 72, color: 'var(--success-color)' }}
      />
      <h3 style={{ fontWeight: 700 }}>
        {isWithdraw
          ? 'Retrait enregistré'
          : paymentUrl
            ? 'Paiement à confirmer'
            : 'Recharge enregistrée'}
      </h3>
      <p className="t16">
        {isWithdraw
          ? `${amount} FCFA seront envoyés vers ${paymentServiceLabel(service)} (${phone}).`
          : paymentUrl
            ? `Redirection vers ${paymentServiceLabel(service)} pour valider ${amount} FCFA.`
            : `${amount} FCFA seront crédités sur votre solde actif via ${paymentServiceLabel(service)}.`}
      </p>
      {paymentUrl ? (
        <Button
          label="Payer maintenant"
          containerStyle={{ width: '100%' }}
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            window.location.assign(paymentUrl);
          }}
        />
      ) : null}
      {transaction?.id ? (
        <Button
          label="Voir le suivi"
          colorScheme={paymentUrl ? 'secondary' : 'primary'}
          containerStyle={{ width: '100%' }}
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            cancelPaymentRedirect();
            onClose();
            router.push(`${Routes.TRANSACTIONS}/${transaction.id}`);
          }}
        />
      ) : null}
      <Button
        label="Fermer"
        colorScheme="secondary"
        containerStyle={{ width: '100%' }}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          onClose();
        }}
      />
    </Stack>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      fullScreen={!isDesktop}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#F5FAFB',
            borderRadius: isDesktop ? '28px' : 0,
          },
        },
      }}
    >
      <div style={{ padding: 24 }}>
        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
          <div style={{ flex: 1 }}>
            <span className="t12">Portefeuille</span>
            <h4>{title}</h4>
          </div>
          {step !== 'processing' ? (
            <IconButton onClick={close} aria-label="Fermer">
              <CloseRoundedIcon />
            </IconButton>
          ) : null}
        </Stack>
        {step === 'form' && renderForm()}
        {step === 'processing' && renderProcessing()}
        {step === 'success' && renderSuccess()}
      </div>
    </Dialog>
  );
};

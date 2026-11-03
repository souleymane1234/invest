'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Skeleton, Stack } from '@mui/material';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import { components } from '@/components';
import { Button } from '@/components/Button';
import { EmptyState } from '@/components/invest/EmptyState';
import { StatTile } from '@/components/invest/StatTile';
import { data } from '@/data';
import { useMoney } from '@/hooks/useMoney';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { paymentServiceLabel } from '@/constants/serviceMobileMoney';
import {
  WALLET_TRANSACTION_STATUS_LABEL,
  WALLET_TRANSACTION_TYPE_LABEL,
  WalletTransaction,
} from '@/types/WalletType';
import { formatDate } from '@/utils/invest_helper';

type Props = {
  id: string;
};

const statusColor: Record<WalletTransaction['status'], string> = {
  SUCCESS: 'var(--success-color)',
  PENDING: 'var(--warning-color)',
  FAILED: 'var(--danger-color)',
  CANCELED: 'var(--danger-color)',
};

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

export const TransactionDetailClient: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const { isLoggedIn, isLoadedCurrentUser, initAuth } = stores.useUserStore();
  const { formatWithLocal } = useMoney();
  const [transaction, setTransaction] = useState<WalletTransaction | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  useEffect(() => {
    if (!isLoadedCurrentUser) return;
    if (!isLoggedIn) {
      router.replace(Routes.SIGN_IN);
      return;
    }
    let cancelled = false;
    data
      .getWalletTransactionById(id)
      .then((item) => {
        if (cancelled) return;
        setTransaction(item);
        setError(!item);
      })
      .catch(() => {
        if (cancelled) return;
        setTransaction(null);
        setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [id, isLoadedCurrentUser, isLoggedIn, router]);

  useEffect(() => {
    if (transaction?.status !== 'PENDING') return;
    const timer = window.setInterval(() => {
      data.getWalletTransactionById(id).then((item) => {
        if (item) setTransaction(item);
      });
    }, 4000);
    return () => window.clearInterval(timer);
  }, [id, transaction?.status]);

  const header = (
    <components.Header
      showGoBack={true}
      showBasket={true}
      title="Suivi"
    />
  );

  if (!isLoadedCurrentUser || (isLoggedIn && !transaction && !error)) {
    return (
      <components.Screen>
        <components.Background />
        {header}
        <div className="screen-content">
          <main
            className="container"
            style={{ maxWidth: 900, margin: '0 auto', paddingTop: 16 }}
          >
            <Stack spacing={2}>
              <Skeleton variant="rounded" height={120} />
              <Skeleton variant="rounded" height={180} />
            </Stack>
          </main>
        </div>
      </components.Screen>
    );
  }

  if (error || !transaction) {
    return (
      <components.Screen>
        <components.Background />
        {header}
        <div className="screen-content">
          <main
            className="container"
            style={{ maxWidth: 900, margin: '0 auto', paddingTop: 40 }}
          >
            <EmptyState
              icon={<ReceiptLongRoundedIcon sx={{ fontSize: 48 }} />}
              title="Transaction introuvable"
              description="Ce mouvement n’existe pas ou n’est plus accessible depuis votre compte."
              actionLabel="Retour aux transactions"
              onAction={() => router.push(Routes.TRANSACTIONS)}
            />
          </main>
        </div>
      </components.Screen>
    );
  }

  const originalLabel = transaction.originalAmount
    ? `${transaction.originalAmount.toLocaleString('fr-FR')} ${
        transaction.originalCurrency === 'XOF' ||
        transaction.originalCurrency === 'XAF'
          ? 'FCFA'
          : transaction.originalCurrency ?? ''
      }`.trim()
    : '';
  const usdLabel =
    transaction.usdAmount != null
      ? `${transaction.usdAmount.toLocaleString('fr-FR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} USD`
      : formatWithLocal(transaction.amount);
  const rows = [
    ['Type', WALLET_TRANSACTION_TYPE_LABEL[transaction.type]],
    ['Statut', WALLET_TRANSACTION_STATUS_LABEL[transaction.status]],
    [
      'Montant',
      originalLabel && transaction.usdAmount != null
        ? `${usdLabel} (${originalLabel})`
        : usdLabel,
    ],
    transaction.exchangeRate
      ? [
          'Taux',
          `1 USD = ${transaction.exchangeRate.toLocaleString('fr-FR', {
            maximumFractionDigits: 2,
          })} ${transaction.originalCurrency === 'XOF' ? 'FCFA' : transaction.originalCurrency ?? ''}`,
        ]
      : null,
    transaction.service
      ? ['Moyen de paiement', paymentServiceLabel(transaction.service)]
      : null,
    transaction.phoneNumber ? ['Téléphone', transaction.phoneNumber] : null,
    transaction.reference ? ['Référence partenaire', transaction.reference] : null,
    transaction.balanceKind
      ? [
          'Solde',
          transaction.balanceKind === 'active' ? 'Actif' : 'Disponible',
        ]
      : null,
    ['Date', formatDateTime(transaction.date)],
    transaction.updatedAt && transaction.updatedAt !== transaction.date
      ? ['Mis à jour', formatDateTime(transaction.updatedAt)]
      : null,
    transaction.paidAt ? ['Confirmé le', formatDateTime(transaction.paidAt)] : null,
    transaction.expiresAt
      ? ['Expire le', formatDate(transaction.expiresAt)]
      : null,
  ].filter(Boolean) as [string, string][];

  return (
    <components.Screen>
      <components.Background />
      {header}
      <div className="screen-content">
        <main
          className="container"
          style={{ maxWidth: 900, margin: '0 auto', paddingBottom: 40 }}
        >
          <section
            style={{
              marginTop: 10,
              marginBottom: 20,
              padding: 20,
              borderRadius: 24,
              backgroundColor: 'var(--white-color)',
              border: '1px solid var(--border-color)',
            }}
          >
            <span
              className="t12"
              style={{
                color: statusColor[transaction.status],
                fontWeight: 700,
              }}
            >
              {WALLET_TRANSACTION_STATUS_LABEL[transaction.status]}
            </span>
            <h4 style={{ margin: '8px 0 4px' }}>{transaction.label}</h4>
            <p className="t16">
              {transaction.status === 'PENDING'
                ? 'Cette opération est en cours. Le solde sera mis à jour dès confirmation.'
                : transaction.status === 'SUCCESS'
                  ? 'Cette opération a été confirmée.'
                  : 'Cette opération n’a pas abouti.'}
            </p>
          </section>

          <StatTile
            label="Montant"
            value={`${transaction.type === 'withdraw' || transaction.type === 'investment' ? '-' : '+'}${originalLabel}`}
            color={
              transaction.type === 'withdraw' || transaction.type === 'investment'
                ? 'var(--main-color)'
                : 'var(--success-color)'
            }
            hint={WALLET_TRANSACTION_TYPE_LABEL[transaction.type]}
          />

          <ul
            style={{
              marginTop: 16,
              padding: 18,
              borderRadius: 24,
              backgroundColor: 'var(--white-color)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {rows.map(([label, value]) => (
              <li
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                <span className="t14">{label}</span>
                <span style={{ fontWeight: 600, textAlign: 'right' }}>
                  {value}
                </span>
              </li>
            ))}
          </ul>

          {transaction.message ? (
            <p className="t16" style={{ marginTop: 16 }}>
              {transaction.message}
            </p>
          ) : null}

          {transaction.paymentUrl && transaction.status === 'PENDING' ? (
            <Button
              label="Payer maintenant"
              containerStyle={{ marginTop: 20 }}
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                window.location.assign(transaction.paymentUrl!);
              }}
            />
          ) : null}
        </main>
      </div>
    </components.Screen>
  );
};

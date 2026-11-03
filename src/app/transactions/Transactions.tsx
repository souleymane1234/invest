'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Grid, Skeleton, Stack } from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import SouthWestRoundedIcon from '@mui/icons-material/SouthWestRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import { components } from '@/components';
import { Button } from '@/components/Button';
import { data } from '@/data';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { EmptyState } from '@/components/invest/EmptyState';
import { MarketChip } from '@/components/invest/Badges';
import { StatTile } from '@/components/invest/StatTile';
import { Amount } from '@/components/invest/Amount';
import { paymentServiceLabel } from '@/constants/serviceMobileMoney';
import {
  EMPTY_WALLET,
  WALLET_TRANSACTION_STATUS_LABEL,
  WALLET_TRANSACTION_TYPE_LABEL,
  WalletQuoteType,
  WalletTransaction,
  WalletTransactionKind,
} from '@/types/WalletType';

const filters: { value: WalletQuoteType | null; label: string }[] = [
  { value: null, label: 'Tous' },
  { value: 'deposit', label: 'Dépôts' },
  { value: 'withdraw', label: 'Retraits' },
];

const statusColor: Record<WalletTransaction['status'], string> = {
  SUCCESS: 'var(--success-color)',
  PENDING: 'var(--warning-color)',
  FAILED: 'var(--danger-color)',
  CANCELED: 'var(--danger-color)',
};

const incomingTypes: WalletTransactionKind[] = [
  'deposit',
  'payout',
  'referral',
  'capital',
];

const formatDateTime = (value: string) =>
  new Date(value).toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

const TransactionRow: React.FC<{ transaction: WalletTransaction }> = ({
  transaction,
}) => {
  const incoming = incomingTypes.includes(transaction.type);
  return (
    <Link
      href={`${Routes.TRANSACTIONS}/${transaction.id}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: 16,
        borderRadius: 20,
        backgroundColor: 'var(--white-color)',
        border: '1px solid var(--border-color)',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 14,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: incoming
            ? 'var(--success-color-light)'
            : 'var(--danger-color-light, #fde8e8)',
        }}
      >
        {incoming ? (
          <SouthWestRoundedIcon sx={{ color: 'var(--success-color)' }} />
        ) : (
          <NorthEastRoundedIcon sx={{ color: 'var(--danger-color)' }} />
        )}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h6 className="number-of-lines-1">{transaction.label}</h6>
        <span className="t12">
          {formatDateTime(transaction.date)}
          {transaction.service
            ? ` · ${paymentServiceLabel(transaction.service)}`
            : ''}
          {transaction.reference ? ` · Réf. ${transaction.reference}` : ''}
        </span>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p
          style={{
            fontWeight: 700,
            color: incoming ? 'var(--success-color)' : 'var(--main-color)',
          }}
        >
          <Amount
            value={incoming ? transaction.amount : -Math.abs(transaction.amount)}
            signed
            align="end"
          />
        </p>
        <span
          className="t12"
          style={{ color: statusColor[transaction.status] }}
        >
          {WALLET_TRANSACTION_STATUS_LABEL[transaction.status]} ·{' '}
          {WALLET_TRANSACTION_TYPE_LABEL[transaction.type]}
        </span>
      </div>
    </Link>
  );
};

type Props = {
  embedded?: boolean;
};

export const Transactions: React.FC<Props> = ({ embedded }) => {
  const router = useRouter();
  const { isLoggedIn, isLoadedCurrentUser, initAuth } = stores.useUserStore();
  const { setTab } = stores.useTabStore();
  const wallet = stores.useWalletStore((state) => state.wallet) ?? EMPTY_WALLET;
  const loadWallet = stores.useWalletStore((state) => state.load);
  const [items, setItems] = useState<WalletTransaction[] | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [filter, setFilter] = useState<WalletQuoteType | null>(null);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  useEffect(() => {
    if (!isLoadedCurrentUser) return;
    if (!isLoggedIn) {
      if (!embedded) router.replace(Routes.SIGN_IN);
      return;
    }
    setItems(null);
    setPage(1);
    loadWallet();
    data
      .getWalletTransactions({
        page: 1,
        limit: 20,
        type: filter ?? undefined,
      })
      .then((result) => {
        setItems(result.items);
        setTotal(result.total);
        setPage(result.page);
      })
      .catch(() => {
        setItems([]);
        setTotal(0);
      });
  }, [isLoadedCurrentUser, isLoggedIn, router, filter, loadWallet, embedded]);

  const loadMore = () => {
    const next = page + 1;
    setLoadingMore(true);
    data
      .getWalletTransactions({
        page: next,
        limit: 20,
        type: filter ?? undefined,
      })
      .then((result) => {
        setItems((current) => [...(current ?? []), ...result.items]);
        setTotal(result.total);
        setPage(result.page);
      })
      .catch(() => undefined)
      .finally(() => setLoadingMore(false));
  };

  const body = (
        <main
          className={embedded ? undefined : 'container'}
          style={{
            maxWidth: 900,
            margin: '0 auto',
            paddingBottom: embedded ? 8 : 40,
          }}
        >
          <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
            <Grid size={{ xs: 6 }}>
              <StatTile
                label="Total déposé"
                value={<Amount value={wallet.totalDeposited} />}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <StatTile
                label="Total retiré"
                value={<Amount value={wallet.totalWithdrawn} />}
                color="var(--danger-color)"
              />
            </Grid>
          </Grid>

          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {filters.map((item) => (
              <MarketChip
                key={item.label}
                label={item.label}
                active={filter === item.value}
                onClick={() => setFilter(item.value)}
              />
            ))}
          </Stack>

          {items === null ? (
            <Stack gap={1.5}>
              {[0, 1, 2].map((index) => (
                <Skeleton
                  key={index}
                  variant="rounded"
                  height={76}
                  sx={{ borderRadius: '20px' }}
                />
              ))}
            </Stack>
          ) : items.length === 0 ? (
            <EmptyState
              icon={<ReceiptLongRoundedIcon sx={{ fontSize: 48 }} />}
              title="Aucune transaction"
              description="Vos dépôts, retraits et mouvements de solde apparaîtront ici."
              actionLabel="Explorer les maisons"
              onAction={() => {
                setTab(HomeTab.EXPLORE);
                router.push(Routes.HOME);
              }}
            />
          ) : (
            <>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {items.map((transaction) => (
                  <li key={transaction.id}>
                    <TransactionRow transaction={transaction} />
                  </li>
                ))}
              </ul>
              {items.length < total ? (
                <Button
                  label={loadingMore ? 'Chargement…' : 'Voir plus'}
                  colorScheme="secondary"
                  containerStyle={{ marginTop: 20 }}
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    if (!loadingMore) loadMore();
                  }}
                />
              ) : null}
            </>
          )}
        </main>
  );

  if (embedded) return body;

  return (
    <components.Screen>
      <components.Background />
      <components.Header
        showGoBack={true}
        showBasket={true}
        title="Transactions"
      />
      <div className="screen-content">{body}</div>
      <components.Modal />
    </components.Screen>
  );
};

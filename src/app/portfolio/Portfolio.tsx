'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Skeleton, Stack } from '@mui/material';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import { components } from '@/components';
import { Button } from '@/components/Button';
import { data } from '@/data';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { EmptyState } from '@/components/invest/EmptyState';
import { InvestmentCard } from '@/components/invest/InvestmentCard';
import { MarketChip } from '@/components/invest/Badges';
import { StatTile } from '@/components/invest/StatTile';
import { LevelBadge } from '@/components/invest/LevelBadge';
import { WalletQuoteDialog } from '@/components/invest/WalletQuoteDialog';
import { useUserLevel } from '@/hooks/useUserLevel';
import { Amount } from '@/components/invest/Amount';
import { useMoney } from '@/hooks/useMoney';
import { Investment } from '@/types/InvestmentType';
import { EMPTY_WALLET, WalletQuoteType } from '@/types/WalletType';
import {
  isInvestmentActive,
  isInvestmentCanceled,
} from '@/utils/invest_helper';

export const Portfolio: React.FC = () => {
  const router = useRouter();
  const { isLoggedIn, isLoadedCurrentUser, user } = stores.useUserStore();
  const { setTab } = stores.useTabStore();
  const [investments, setInvestments] = useState<Investment[] | null>(null);
  const [filter, setFilter] = useState<'active' | 'done' | 'canceled'>('active');
  const [quoteType, setQuoteType] = useState<WalletQuoteType | null>(null);
  const { rank, level, stars } = useUserLevel();
  const { formatWithLocal } = useMoney();
  const walletState = stores.useWalletStore((state) => state.wallet);
  const wallet = {
    ...(walletState ?? EMPTY_WALLET),
    activeBalance:
      walletState?.activeBalance || user?.activeBalance || 0,
    availableBalance:
      walletState?.availableBalance || user?.availableBalance || 0,
  };
  const walletLoading = stores.useWalletStore((state) => state.isLoading);
  const loadWallet = stores.useWalletStore((state) => state.load);

  useEffect(() => {
    if (!isLoggedIn) return;
    loadWallet();
    data
      .getInvestments()
      .then(setInvestments)
      .catch(() => setInvestments([]));
  }, [isLoggedIn, user?.investments?.length, loadWallet]);

  const header = (
    <components.Header title="Mon portefeuille" showBasket={true} />
  );

  if (isLoadedCurrentUser && !isLoggedIn) {
    return (
      <main className="container" style={{ paddingBottom: 30 }}>
        {header}
        <div style={{ marginTop: 20 }}>
          <EmptyState
            icon={<LockRoundedIcon sx={{ fontSize: 48 }} />}
            title="Connectez-vous pour voir votre portefeuille"
            description="Suivez vos investissements, vos gains et vos échéances en temps réel."
            actionLabel="Se connecter"
            onAction={() => router.push(Routes.SIGN_IN)}
          />
        </div>
      </main>
    );
  }

  const active = (investments ?? []).filter(isInvestmentActive);
  const canceled = (investments ?? []).filter(isInvestmentCanceled);
  const done = (investments ?? []).filter(
    (item) => !isInvestmentActive(item) && !isInvestmentCanceled(item),
  );
  const list =
    filter === 'active' ? active : filter === 'canceled' ? canceled : done;

  return (
    <main className="container" style={{ paddingBottom: 30 }}>
      {header}

      <div
        className="clickable"
        onClick={() => router.push(Routes.LEVELS)}
        style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}
      >
        <LevelBadge rank={rank} level={level} stars={stars} size="medium" />
        <span
          className="t14"
          style={{ color: 'var(--main-color)', fontWeight: 600 }}
        >
          Voir ma progression →
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          marginTop: 16,
          padding: 20,
          borderRadius: 24,
          background: 'linear-gradient(160deg, #1e2538 0%, #2b3554 100%)',
        }}
      >
        <div>
          <span className="t14" style={{ color: '#c8cdd9' }}>
            Gains disponibles
          </span>
          <p
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: '#fcc55e',
              lineHeight: 1.2,
            }}
          >
            <Amount value={wallet.availableBalance} onDark />
          </p>
          <span className="t12" style={{ color: '#c8cdd9' }}>
            Retirables vers mobile money
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="t14" style={{ color: '#c8cdd9' }}>
            Solde actif
          </span>
          <p
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--white-color)',
            }}
          >
            <Amount value={wallet.activeBalance} align="end" onDark />
          </p>
        </div>
        <Stack direction="row" gap={1} flexWrap="wrap" sx={{ width: '100%' }}>
          <Button
            label="Recharger"
            containerStyle={{ flex: 1, minWidth: 140 }}
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              setQuoteType('deposit');
            }}
          />
          <Button
            label="Retirer"
            colorScheme="secondary"
            containerStyle={{ flex: 1, minWidth: 140 }}
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              setQuoteType('withdraw');
            }}
          />
        </Stack>
      </div>

      <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
        {[
          {
            label: 'Capital investi',
            value: <Amount value={wallet.investedAmount} />,
            hint: `${wallet.investmentsInProgress} investissement${wallet.investmentsInProgress > 1 ? 's' : ''} en cours`,
          },
          {
            label: 'Versements attendus',
            value: <Amount value={wallet.expectedPayout} signed />,
            color: 'var(--success-color)',
            hint: 'À l’échéance des formules en cours',
          },
          {
            label: 'Total déposé',
            value: <Amount value={wallet.totalDeposited} />,
            hint: 'Recharges confirmées',
          },
          {
            label: 'Total retiré',
            value: <Amount value={wallet.totalWithdrawn} />,
            hint: 'Retraits confirmés',
          },
          {
            label: 'Gains versés',
            value: <Amount value={wallet.totalPayouts} />,
            color: 'var(--success-color)',
            hint: `Capital restitué : ${formatWithLocal(wallet.totalCapitalReturned)}`,
          },
          {
            label: 'Parrainage',
            value: <Amount value={wallet.totalReferralDividends} />,
            hint: 'Dividendes de parrainage',
          },
        ].map((stat) => (
          <Grid key={stat.label} size={{ xs: 6, md: 4 }}>
            {walletLoading && !walletState ? (
              <Skeleton
                variant="rounded"
                height={110}
                sx={{ borderRadius: '20px' }}
              />
            ) : (
              <StatTile {...stat} />
            )}
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={1}
        sx={{ mb: 2 }}
      >
        <Stack direction="row" gap={1}>
          <MarketChip
            label={`En cours (${active.length})`}
            active={filter === 'active'}
            onClick={() => setFilter('active')}
          />
          <MarketChip
            label={`Terminés (${done.length})`}
            active={filter === 'done'}
            onClick={() => setFilter('done')}
          />
          <MarketChip
            label={`Annulés (${canceled.length})`}
            active={filter === 'canceled'}
            onClick={() => setFilter('canceled')}
          />
        </Stack>
        <span
          className="t16 clickable"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: 'var(--main-color)',
            fontWeight: 600,
          }}
          onClick={() => router.push(Routes.TRANSACTIONS)}
        >
          <ReceiptLongRoundedIcon sx={{ fontSize: 20 }} />
          Historique des transactions
        </span>
      </Stack>

      {investments === null ? (
        <Skeleton
          variant="rounded"
          height={180}
          sx={{ borderRadius: '24px' }}
        />
      ) : list.length === 0 ? (
        <EmptyState
          icon={<AccountBalanceWalletRoundedIcon sx={{ fontSize: 48 }} />}
          title={
            filter === 'active'
              ? 'Aucun investissement en cours'
              : filter === 'canceled'
                ? 'Aucun investissement annulé'
                : 'Aucun investissement terminé'
          }
          description="Choisissez une maison de trading et une formule pour commencer à faire fructifier votre argent."
          actionLabel="Explorer les maisons"
          onAction={() => setTab(HomeTab.EXPLORE)}
        />
      ) : (
        <Grid container spacing={2}>
          {list.map((investment) => (
            <Grid key={investment.id} size={{ xs: 12, md: 6 }}>
              <InvestmentCard investment={investment} />
            </Grid>
          ))}
        </Grid>
      )}
      <WalletQuoteDialog
        open={quoteType !== null}
        type={quoteType ?? 'deposit'}
        onClose={() => setQuoteType(null)}
      />
    </main>
  );
};

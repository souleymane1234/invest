'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Grid, LinearProgress, Skeleton, Stack } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { AssetImage as Image } from '@/components/invest/AssetImage';
import { EmptyState } from '@/components/invest/EmptyState';
import { MarketChip } from '@/components/invest/Badges';
import { StatTile } from '@/components/invest/StatTile';
import { components } from '@/components';
import { URLS_ASSETS } from '@/config';
import { data } from '@/data';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { Amount } from '@/components/invest/Amount';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import {
  INVESTMENT_STATUS_LABEL,
  InvestmentDetail,
  InvestmentPayout,
  InvestmentPayouts,
} from '@/types/InvestmentType';
import {
  formatDate,
  formatPercent,
  hasWorkStarted,
  investmentWorkStart,
  isInvestmentActive,
} from '@/utils/invest_helper';

type Props = {
  id: string;
};

type PayoutFilter = 'all' | 'received' | 'upcoming';

const formatPayoutDate = (value: string) =>
  new Date(value).toLocaleDateString('fr-FR', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const PayoutRow: React.FC<{ payout: InvestmentPayout }> = ({ payout }) => {
  const received = payout.status === 'received';
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: 16,
        borderRadius: 20,
        backgroundColor: 'var(--white-color)',
        border: '1px solid var(--border-color)',
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
          backgroundColor: received
            ? 'var(--success-color-light)'
            : 'var(--neon-white)',
        }}
      >
        {received ? (
          <CheckCircleRoundedIcon sx={{ color: 'var(--success-color)' }} />
        ) : (
          <ScheduleRoundedIcon sx={{ color: 'var(--text-color)' }} />
        )}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h6 className="number-of-lines-1">{formatPayoutDate(payout.date)}</h6>
        <span className="t12">Versement journalier</span>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p
          style={{
            fontWeight: 700,
            color: received ? 'var(--success-color)' : 'var(--main-color)',
          }}
        >
          <Amount value={payout.amount} signed={received} align="end" />
        </p>
        <span
          className="t12"
          style={{
            color: received ? 'var(--success-color)' : 'var(--text-color)',
          }}
        >
          {received ? 'Reçu' : 'À venir'}
        </span>
      </div>
    </li>
  );
};

export const InvestmentDetailClient: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const { isDesktop } = useDeviceDetect();
  const { isLoggedIn, isLoadedCurrentUser, initAuth } = stores.useUserStore();
  const { setTab } = stores.useTabStore();
  const [investment, setInvestment] = useState<InvestmentDetail | null>(null);
  const [payouts, setPayouts] = useState<InvestmentPayouts | null>(null);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState<PayoutFilter>('all');

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  useEffect(() => {
    if (!isLoadedCurrentUser) return;
    if (!isLoggedIn) {
      router.replace(Routes.SIGN_IN);
      return;
    }
    let mounted = true;
    Promise.all([
      data.getInvestmentById(id),
      data.getInvestmentPayouts(id).catch(() => ({
        received: [],
        upcoming: [],
      })),
    ])
      .then(([detail, nextPayouts]) => {
        if (!mounted) return;
        setInvestment(detail);
        setPayouts(nextPayouts);
        setError(!detail);
      })
      .catch(() => {
        if (!mounted) return;
        setInvestment(null);
        setPayouts({ received: [], upcoming: [] });
        setError(true);
      });
    return () => {
      mounted = false;
    };
  }, [id, isLoadedCurrentUser, isLoggedIn, router]);

  const header = (
    <components.Header
      showGoBack={true}
      showBasket={true}
      title={investment?.houseName || 'Suivi'}
    />
  );

  if (!isLoadedCurrentUser || (isLoggedIn && !investment && !error)) {
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
              <Skeleton variant="rounded" height={88} />
              <Skeleton variant="rounded" height={220} />
            </Stack>
          </main>
        </div>
      </components.Screen>
    );
  }

  if (error || !investment) {
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
              icon={<SavingsRoundedIcon sx={{ fontSize: 48 }} />}
              title="Investissement introuvable"
              description="Ce placement n’existe pas ou n’est plus accessible depuis votre compte."
              actionLabel="Retour au portefeuille"
              onAction={() => {
                setTab(HomeTab.PORTFOLIO);
                router.push(Routes.HOME);
              }}
            />
          </main>
        </div>
      </components.Screen>
    );
  }

  const active = isInvestmentActive(investment);
  const working = hasWorkStarted(investment);
  const workStart = investmentWorkStart(investment);
  const statusLabel =
    INVESTMENT_STATUS_LABEL[investment.status] ??
    (active ? 'En cours' : 'Terminé');
  const received = working ? (payouts?.received ?? []) : [];
  const upcoming = working
    ? (payouts?.upcoming ?? [])
    : [...(payouts?.received ?? []), ...(payouts?.upcoming ?? [])].map(
        (item) => ({ ...item, status: 'upcoming' as const }),
      );
  const all = [...received, ...upcoming].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  const paidAmount =
    received.length > 0
      ? received.reduce((acc, item) => acc + item.amount, 0)
      : investment.paidAmount;
  const remainingAmount =
    upcoming.length > 0
      ? upcoming.reduce((acc, item) => acc + item.amount, 0)
      : investment.remainingAmount;
  const progress = Math.min(1, Math.max(0, investment.progress));
  const daysElapsed = investment.daysElapsed ?? 0;
  const daysLeft = investment.daysRemaining ?? 0;
  const visible =
    filter === 'received' ? received : filter === 'upcoming' ? upcoming : all;

  return (
    <components.Screen>
      <components.Background />
      {header}
      <div className="screen-content">
        <main
          className="container"
          style={{
            maxWidth: 900,
            margin: '0 auto',
            paddingBottom: isDesktop ? 40 : 110,
          }}
        >
          <section
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 10,
              marginBottom: 20,
              padding: 18,
              borderRadius: 24,
              backgroundColor: 'var(--white-color)',
              border: '1px solid var(--border-color)',
            }}
          >
            <Image
              src={`${URLS_ASSETS.HOUSES}/${investment.houseLogo}`}
              alt={investment.houseName}
              width={56}
              height={56}
              style={{ borderRadius: 16 }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4 className="number-of-lines-1">{investment.houseName}</h4>
              <span className="t12">
                Formule {investment.planName} ·{' '}
                {formatPercent(investment.expectedReturn, true)}
              </span>
            </div>
            <span
              style={{
                padding: '2px 10px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                color:
                  investment.status === 'CANCELED'
                    ? 'var(--danger-color)'
                    : active
                      ? 'var(--success-color)'
                      : 'var(--text-color)',
                backgroundColor:
                  investment.status === 'CANCELED'
                    ? 'var(--danger-color-light, #fde8e8)'
                    : active
                      ? 'var(--success-color-light)'
                      : 'var(--neon-white)',
              }}
            >
              {statusLabel}
            </span>
          </section>

          {investment.houseId ? (
            <Link
              href={`${Routes.HOUSE}/${investment.houseId}`}
              className="t14"
              style={{
                display: 'inline-block',
                marginBottom: 16,
                fontWeight: 600,
                color: 'var(--main-color)',
              }}
            >
              Voir la maison →
            </Link>
          ) : null}

          <Grid container spacing={2} sx={{ mb: 3 }}>
            {[
              {
                label: 'Montant investi',
                value: <Amount value={investment.amount} />,
                icon: <SavingsRoundedIcon sx={{ fontSize: 18 }} />,
              },
              {
                label: 'Gains versés',
                value: <Amount value={paidAmount} signed />,
                color: 'var(--success-color)',
                icon: <PaymentsRoundedIcon sx={{ fontSize: 18 }} />,
              },
              {
                label: 'À venir',
                value: <Amount value={remainingAmount} />,
                icon: <ScheduleRoundedIcon sx={{ fontSize: 18 }} />,
              },
              {
                label: 'Total attendu',
                value: (
                  <Amount
                    value={investment.amount + investment.expectedGain}
                  />
                ),
                color: 'var(--success-color)',
                icon: <TrendingUpRoundedIcon sx={{ fontSize: 18 }} />,
              },
            ].map((stat) => (
              <Grid key={stat.label} size={{ xs: 6, sm: 3 }}>
                <StatTile {...stat} />
              </Grid>
            ))}
          </Grid>

          <section
            style={{
              marginBottom: 24,
              padding: 18,
              borderRadius: 24,
              backgroundColor: 'var(--white-color)',
              border: '1px solid var(--border-color)',
            }}
          >
            <h5 style={{ marginBottom: 12 }}>Avancement</h5>
            <LinearProgress
              variant="determinate"
              value={progress * 100}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: '#eef0f5',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'var(--accent-color)',
                },
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 8,
                marginTop: 8,
              }}
            >
              <span className="t12">
                {working
                  ? `Début du travail : ${formatDate(workStart)}${
                      daysElapsed > 0
                        ? ` · ${daysElapsed} j écoulé${daysElapsed > 1 ? 's' : ''}`
                        : ''
                    }`
                  : `Travail à partir du ${formatDate(workStart)}`}
              </span>
              <span className="t12">
                {active
                  ? working
                    ? `${daysLeft} jour${daysLeft > 1 ? 's' : ''} restant${daysLeft > 1 ? 's' : ''} · échéance ${formatDate(investment.endDate)}`
                    : `Souscription jusqu’au ${formatDate(investment.subscriptionEndDate ?? workStart)}`
                  : `Terminé le ${formatDate(investment.endDate)}`}
              </span>
            </div>
          </section>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={1}
            sx={{ mb: 2 }}
          >
            <h5>Versements journaliers</h5>
            <Stack direction="row" gap={1} flexWrap="wrap">
              <MarketChip
                label={`Tous (${all.length})`}
                active={filter === 'all'}
                onClick={() => setFilter('all')}
              />
              <MarketChip
                label={`Reçus (${received.length})`}
                active={filter === 'received'}
                onClick={() => setFilter('received')}
              />
              <MarketChip
                label={`À venir (${upcoming.length})`}
                active={filter === 'upcoming'}
                onClick={() => setFilter('upcoming')}
              />
            </Stack>
          </Stack>

          {payouts === null ? (
            <Skeleton variant="rounded" height={180} />
          ) : visible.length === 0 ? (
            <EmptyState
              icon={<EventRoundedIcon sx={{ fontSize: 48 }} />}
              title={
                filter === 'received'
                  ? 'Aucun versement reçu'
                  : filter === 'upcoming'
                    ? 'Aucun versement à venir'
                    : 'Aucun versement'
              }
              description={
                working
                  ? 'Les versements journaliers de cette formule apparaîtront ici dès qu’ils seront planifiés.'
                  : `Aucun gain tant que le travail n’a pas commencé (${formatDate(workStart)}).`
              }
            />
          ) : (
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                paddingBottom: 16,
              }}
            >
              {visible.map((payout) => (
                <PayoutRow key={payout.id} payout={payout} />
              ))}
            </ul>
          )}
        </main>
      </div>
    </components.Screen>
  );
};

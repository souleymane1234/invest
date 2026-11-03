'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, LinearProgress, Skeleton, Stack } from '@mui/material';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import { components } from '@/components';
import { EmptyState } from '@/components/invest/EmptyState';
import { MarketChip } from '@/components/invest/Badges';
import { ReferralCard } from '@/components/invest/ReferralCard';
import { StatTile } from '@/components/invest/StatTile';
import { data } from '@/data';
import { Amount } from '@/components/invest/Amount';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import {
  ReferralDividend,
  ReferralFilleul,
  ReferralLevel,
  ReferralOverview,
} from '@/types/ReferralType';
import { formatDate, formatPercent } from '@/utils/invest_helper';
import { referralShareUrl } from '@/utils/referral_helper';

type Tab = 'overview' | 'levels' | 'filleuls' | 'dividends';

const LevelBenefits: React.FC<{ level: ReferralLevel }> = ({ level }) => (
  <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <li className="t14">
      {level.minReferrals} filleul{level.minReferrals > 1 ? 's' : ''} ·{' '}
      {level.minActiveReferrals} actif{level.minActiveReferrals > 1 ? 's' : ''}
    </li>
    <li className="t14">
      Jusqu’à {level.maxParallelInvestments} investissement
      {level.maxParallelInvestments > 1 ? 's' : ''} en parallèle
    </li>
    <li className="t14">
      Dividende {formatPercent(level.dividendPercentage)} · max.{' '}
      {level.maxDividendsPerReferral} par filleul
    </li>
  </ul>
);

type Props = {
  embedded?: boolean;
};

export const ReferralClient: React.FC<Props> = ({ embedded }) => {
  const router = useRouter();
  const { isLoggedIn, isLoadedCurrentUser, initAuth } = stores.useUserStore();
  const [tab, setTab] = useState<Tab>('overview');
  const [overview, setOverview] = useState<ReferralOverview | null>(null);
  const [levels, setLevels] = useState<ReferralLevel[] | null>(null);
  const [filleuls, setFilleuls] = useState<ReferralFilleul[] | null>(null);
  const [dividends, setDividends] = useState<ReferralDividend[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  useEffect(() => {
    if (!isLoadedCurrentUser) return;
    if (!isLoggedIn) {
      if (!embedded) router.replace(Routes.SIGN_IN);
      return;
    }
    Promise.all([
      data.getReferral(),
      data.getReferralLevels().catch(() => []),
      data.getReferralFilleuls().catch(() => []),
      data.getReferralDividends().catch(() => []),
    ])
      .then(([nextOverview, nextLevels, nextFilleuls, nextDividends]) => {
        setOverview(nextOverview);
        setLevels(nextLevels);
        setFilleuls(nextFilleuls);
        setDividends(nextDividends);
        setError(!nextOverview);
      })
      .catch(() => {
        setError(true);
        setOverview(null);
        setLevels([]);
        setFilleuls([]);
        setDividends([]);
      });
  }, [isLoadedCurrentUser, isLoggedIn, router, embedded]);

  const frame = (children: React.ReactNode) =>
    embedded ? (
      <>{children}</>
    ) : (
      <components.Screen>
        <components.Background />
        <components.Header
          showGoBack={true}
          showBasket={true}
          title="Parrainage"
        />
        <div className="screen-content">{children}</div>
      </components.Screen>
    );

  if (!isLoadedCurrentUser || (isLoggedIn && !overview && !error)) {
    return frame(
      <main
        className={embedded ? undefined : 'container'}
        style={{ maxWidth: 900, margin: '0 auto', paddingTop: embedded ? 0 : 16 }}
      >
        <Stack spacing={2}>
          <Skeleton variant="rounded" height={88} />
          <Skeleton variant="rounded" height={140} />
          <Skeleton variant="rounded" height={220} />
        </Stack>
      </main>,
    );
  }

  if (error || !overview) {
    return frame(
      <main
        className={embedded ? undefined : 'container'}
        style={{ maxWidth: 900, margin: '0 auto', paddingTop: embedded ? 0 : 40 }}
      >
        <EmptyState
          icon={<CardGiftcardRoundedIcon sx={{ fontSize: 48 }} />}
          title="Parrainage indisponible"
          description="Impossible de charger vos informations de parrainage pour le moment."
        />
      </main>,
    );
  }

  const shareUrl = referralShareUrl(overview.referralLink, overview.referralCode);
  const next = overview.nextLevel;
  const stats = overview.stats;
  const referralProgress = next
    ? Math.min(
        100,
        (stats.totalReferrals / Math.max(1, next.minReferrals)) * 100,
      )
    : 100;
  const activeProgress = next
    ? Math.min(
        100,
        (stats.activeReferrals / Math.max(1, next.minActiveReferrals)) * 100,
      )
    : 100;

  return frame(
        <main
          className={embedded ? undefined : 'container'}
          style={{
            maxWidth: 900,
            margin: '0 auto',
            paddingBottom: embedded ? 8 : 40,
          }}
        >
          <section
            style={{
              marginTop: 10,
              marginBottom: 20,
              padding: 20,
              borderRadius: 24,
              color: 'var(--white-color)',
              background: 'linear-gradient(160deg, #1e2538 0%, #2b3554 100%)',
            }}
          >
            <span className="t12" style={{ color: '#c8cdd9' }}>
              Palier actuel
            </span>
            <h3 style={{ color: 'var(--white-color)', margin: '4px 0 8px' }}>
              {overview.level?.name ?? 'Débutant'}
            </h3>
            {overview.level ? (
              <p className="t14" style={{ color: '#c8cdd9' }}>
                {overview.level.maxParallelInvestments} investissement
                {overview.level.maxParallelInvestments > 1 ? 's' : ''} en
                parallèle · dividende{' '}
                {formatPercent(overview.level.dividendPercentage)}
              </p>
            ) : null}
            {overview.sponsor ? (
              <p className="t12" style={{ color: '#fcc55e', marginTop: 8 }}>
                Parrainé par {overview.sponsor.name}
                {overview.sponsor.referralCode
                  ? ` (${overview.sponsor.referralCode})`
                  : ''}
              </p>
            ) : null}
          </section>

          <ReferralCard code={overview.referralCode} link={shareUrl} />
          <p className="t12" style={{ margin: '8px 0 20px' }}>
            Lien : {shareUrl}
          </p>

          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {(
              [
                ['overview', 'Aperçu'],
                ['levels', 'Paliers'],
                ['filleuls', `Filleuls (${filleuls?.length ?? 0})`],
                ['dividends', 'Dividendes'],
              ] as [Tab, string][]
            ).map(([value, label]) => (
              <MarketChip
                key={value}
                label={label}
                active={tab === value}
                onClick={() => setTab(value)}
              />
            ))}
          </Stack>

          {tab === 'overview' && (
            <>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {[
                  {
                    label: 'Filleuls',
                    value: String(stats.totalReferrals),
                    hint: `${stats.activeReferrals} actif${stats.activeReferrals > 1 ? 's' : ''}`,
                    icon: <GroupsRoundedIcon sx={{ fontSize: 18 }} />,
                  },
                  {
                    label: 'Dividendes',
                    value: <Amount value={stats.totalDividends} />,
                    hint: `${stats.dividendsCount} versement${stats.dividendsCount > 1 ? 's' : ''}`,
                    color: 'var(--success-color)',
                    icon: <PaymentsRoundedIcon sx={{ fontSize: 18 }} />,
                  },
                  {
                    label: 'En cours',
                    value: String(overview.investmentsInProgress),
                    hint: `${overview.remainingParallelInvestments} emplacement${overview.remainingParallelInvestments > 1 ? 's' : ''} restant${overview.remainingParallelInvestments > 1 ? 's' : ''}`,
                    icon: (
                      <WorkspacePremiumRoundedIcon sx={{ fontSize: 18 }} />
                    ),
                  },
                ].map((stat) => (
                  <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
                    <StatTile {...stat} />
                  </Grid>
                ))}
              </Grid>

              {next ? (
                <section
                  style={{
                    padding: 18,
                    borderRadius: 24,
                    backgroundColor: 'var(--white-color)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <h5 style={{ marginBottom: 8 }}>Prochain palier : {next.name}</h5>
                  <p className="t14" style={{ marginBottom: 12 }}>
                    Encore {next.missingReferrals} filleul
                    {next.missingReferrals > 1 ? 's' : ''} et{' '}
                    {next.missingActiveReferrals} actif
                    {next.missingActiveReferrals > 1 ? 's' : ''}.
                  </p>
                  <span className="t12">Filleuls</span>
                  <LinearProgress
                    variant="determinate"
                    value={referralProgress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      mb: 1.5,
                      backgroundColor: '#eef0f5',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'var(--accent-color)',
                      },
                    }}
                  />
                  <span className="t12">Filleuls actifs</span>
                  <LinearProgress
                    variant="determinate"
                    value={activeProgress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#eef0f5',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'var(--accent-color)',
                      },
                    }}
                  />
                </section>
              ) : (
                <p className="t16">Vous avez atteint le palier le plus élevé.</p>
              )}
            </>
          )}

          {tab === 'levels' && (
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(levels ?? []).map((level) => {
                const current = overview.level?.id === level.id;
                return (
                  <li
                    key={level.id}
                    style={{
                      padding: 18,
                      borderRadius: 24,
                      backgroundColor: current
                        ? 'var(--accent-color-light, #fff6e0)'
                        : 'var(--white-color)',
                      border: `1px solid ${current ? 'var(--accent-color)' : 'var(--border-color)'}`,
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      gap={1}
                      sx={{ mb: 1 }}
                    >
                      <h5>{level.name}</h5>
                      {current ? (
                        <span
                          className="t12"
                          style={{ color: 'var(--success-color)', fontWeight: 700 }}
                        >
                          Palier actuel
                        </span>
                      ) : null}
                    </Stack>
                    <LevelBenefits level={level} />
                  </li>
                );
              })}
            </ul>
          )}

          {tab === 'filleuls' &&
            (filleuls === null ? (
              <Skeleton variant="rounded" height={120} />
            ) : filleuls.length === 0 ? (
              <EmptyState
                icon={<GroupsRoundedIcon sx={{ fontSize: 48 }} />}
                title="Aucun filleul"
                description="Partagez votre lien pour inviter vos premiers filleuls."
              />
            ) : (
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {filleuls.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: 16,
                      borderRadius: 20,
                      backgroundColor: 'var(--white-color)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h6 className="number-of-lines-1">{item.name}</h6>
                      <span className="t12">
                        {item.createdAt ? formatDate(item.createdAt) : 'Inscrit'}
                        {item.phoneNumber ? ` · ${item.phoneNumber}` : ''}
                      </span>
                    </div>
                    <span
                      className="t12"
                      style={{
                        fontWeight: 700,
                        color: item.isActive
                          ? 'var(--success-color)'
                          : 'var(--text-color)',
                      }}
                    >
                      {item.isActive ? 'Actif' : 'Inactif'}
                    </span>
                  </li>
                ))}
              </ul>
            ))}

          {tab === 'dividends' &&
            (dividends === null ? (
              <Skeleton variant="rounded" height={120} />
            ) : dividends.length === 0 ? (
              <EmptyState
                icon={<PaymentsRoundedIcon sx={{ fontSize: 48 }} />}
                title="Aucun dividende"
                description="Les dividendes versés par vos filleuls actifs apparaîtront ici."
              />
            ) : (
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {dividends.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: 16,
                      borderRadius: 20,
                      backgroundColor: 'var(--white-color)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h6 className="number-of-lines-1">{item.label}</h6>
                      <span className="t12">
                        {item.date ? formatDate(item.date) : ''}
                        {item.filleulName ? ` · ${item.filleulName}` : ''}
                        {item.percentage
                          ? ` · ${formatPercent(item.percentage)}`
                          : ''}
                      </span>
                    </div>
                    <span
                      style={{ fontWeight: 700, color: 'var(--success-color)' }}
                    >
                      <Amount value={item.amount} signed />
                    </span>
                  </li>
                ))}
              </ul>
            ))}
        </main>,
  );
};

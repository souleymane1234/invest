'use client';

import React from 'react';
import { Grid, Skeleton } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import { components } from '@/components';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { HouseSwiper } from '@/components/invest/HouseSwiper';
import { PlanCard } from '@/components/invest/PlanCard';
import { StatTile } from '@/components/invest/StatTile';
import { Button } from '@/components/Button';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useUserLevel } from '@/hooks/useUserLevel';
import { Amount } from '@/components/invest/Amount';
import { useMoney } from '@/hooks/useMoney';
import { LevelBadge } from '@/components/invest/LevelBadge';
import { Routes } from '@/routes';
import { useRouter } from 'next/navigation';
import {
  availableGains,
  formatNumber,
  formatPercent,
  isInvestmentActive,
} from '@/utils/invest_helper';
import { isPlanOpen } from '@/utils/plan_helper';

const Section: React.FC<{
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, subtitle, action, children }) => (
  <section style={{ marginBottom: 32 }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 14,
      }}
    >
      <div>
        <h3 style={{ fontWeight: 700 }}>{title}</h3>
        {subtitle && <span className="t14">{subtitle}</span>}
      </div>
      {action}
    </div>
    {children}
  </section>
);

export const HouseGridSkeleton: React.FC<{ count?: number }> = ({
  count = 3,
}) => (
  <Grid container spacing={2}>
    {Array.from({ length: count }, (_, index) => (
      <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
        <Skeleton
          variant="rounded"
          height={230}
          sx={{ borderRadius: '24px' }}
        />
      </Grid>
    ))}
  </Grid>
);

export const Dashboard: React.FC = () => {
  const { houses, isLoading, error } = stores.useHousesStore();
  const { user, isLoggedIn } = stores.useUserStore();
  const { setTab } = stores.useTabStore();
  const { openModal } = stores.useInvestModal();
  const { isDesktop } = useDeviceDetect();
  const router = useRouter();
  const { rank, level, stars } = useUserLevel();
  const { formatWithLocal } = useMoney();
  const wallet = stores.useWalletStore((state) => state.wallet);

  const popularPlans = houses
    .flatMap((house) =>
      house.plans
        .filter(isPlanOpen)
        .map((plan) => ({ house, plan })),
    )
    .sort((a, b) => b.plan.expectedReturn - a.plan.expectedReturn)
    .slice(0, 6);

  const capitalManaged = houses.reduce(
    (acc, house) => acc + house.stats.capitalManaged,
    0,
  );
  const investors = houses.reduce(
    (acc, house) => acc + house.stats.investorsCount,
    0,
  );
  const averageRoi =
    houses.reduce((acc, house) => acc + house.stats.annualRoi, 0) /
    (houses.length || 1);

  const activeInvestments = (user?.investments ?? []).filter(
    isInvestmentActive,
  );
  const invested = activeInvestments.reduce(
    (acc, item) => acc + item.amount,
    0,
  );
  const gains = availableGains(user, wallet);

  const seeAll = (
    <span
      className="t16 clickable"
      style={{ color: 'var(--main-color)', fontWeight: 600 }}
      onClick={() => setTab(HomeTab.EXPLORE)}
    >
      Voir tout
    </span>
  );

  const popularPlansSection = (
    <Section
      title="Formules ouvertes"
      subtitle="Les forfaits actuellement ouverts à la souscription"
    >
      {isLoading ? (
        <HouseGridSkeleton count={3} />
      ) : (
        <Grid container spacing={3} sx={{ pt: 1 }}>
          {popularPlans.map(({ house, plan }) => (
            <Grid key={plan.id} size={{ xs: 12, md: 4 }}>
              <PlanCard
                plan={plan}
                houseName={house.name}
                onInvest={() => openModal(house, plan.id)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Section>
  );

  const heroAndStats = (
    <>
      <section
        style={{
          marginTop: 10,
          marginBottom: 24,
          padding: 24,
          borderRadius: 28,
          color: 'var(--white-color)',
          background: 'linear-gradient(135deg, #1e2538 0%, #2f3a5c 100%)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <h2 style={{ color: 'var(--white-color)', marginBottom: 8 }}>
            {isLoggedIn && user?.full_name
              ? `Bonjour ${user.full_name.split(' ')[0]} 👋`
              : 'Faites travailler votre argent'}
          </h2>
          {isLoggedIn && (
            <span
              className="clickable"
              onClick={() => router.push(Routes.LEVELS)}
              style={{ display: 'inline-block', marginBottom: 10 }}
            >
              <LevelBadge rank={rank} level={level} stars={stars} />
            </span>
          )}
          <p className="t16" style={{ color: '#c8cdd9' }}>
            {activeInvestments.length > 0
              ? `Vous avez ${activeInvestments.length} investissement${activeInvestments.length > 1 ? 's' : ''} en cours : ${formatWithLocal(invested)} investis, ${formatWithLocal(gains)} de gains disponibles.`
              : 'Comparez les maisons de trading selon leur taux de gain, leur rendement et leur niveau de risque, puis investissez depuis votre solde.'}
          </p>
        </div>
        <Button
          label={
            activeInvestments.length > 0
              ? 'Mon portefeuille'
              : 'Explorer les maisons'
          }
          containerStyle={{ width: 220 }}
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            setTab(
              activeInvestments.length > 0
                ? HomeTab.PORTFOLIO
                : HomeTab.EXPLORE,
            );
          }}
        />
      </section>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            label: 'Maisons partenaires',
            value: formatNumber(houses.length),
            icon: <ApartmentRoundedIcon sx={{ fontSize: 18 }} />,
          },
          {
            label: 'Capital géré',
            value: <Amount value={capitalManaged} compact />,
            icon: <SavingsRoundedIcon sx={{ fontSize: 18 }} />,
          },
          {
            label: 'Investisseurs',
            value: formatNumber(investors),
            icon: <GroupsRoundedIcon sx={{ fontSize: 18 }} />,
          },
          {
            label: 'Rendement moyen',
            value: formatPercent(averageRoi, true),
            color: 'var(--success-color)',
            icon: <TrendingUpRoundedIcon sx={{ fontSize: 18 }} />,
          },
        ].map((stat) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            {isLoading ? (
              <Skeleton
                variant="rounded"
                height={92}
                sx={{ borderRadius: '20px' }}
              />
            ) : (
              <StatTile {...stat} />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );

  const byRoi = [...houses].sort(
    (a, b) => b.stats.annualRoi - a.stats.annualRoi,
  );
  const byWinRate = [...houses].sort(
    (a, b) => b.stats.winRate - a.stats.winRate,
  );

  return (
    <main className="container" style={{ paddingBottom: 30 }}>
      <components.Header showBasket={true} showLogo={!isDesktop} />
      {error && (
        <p className="t16" style={{ color: 'var(--danger-color)' }}>
          {error}
        </p>
      )}
      <Section title="Meilleures performances" action={seeAll}>
        <HouseSwiper houses={byRoi} isLoading={isLoading} />
      </Section>
      <Section title="Les plus fiables" action={seeAll}>
        <HouseSwiper houses={byWinRate} isLoading={isLoading} />
      </Section>
      {heroAndStats}
      {(isLoading || popularPlans.length > 0) && popularPlansSection}
    </main>
  );
};

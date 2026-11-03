'use client';

import React, { useEffect, useState } from 'react';
import { AssetImage as Image } from '@/components/invest/AssetImage';
import {
  Avatar,
  Grid,
  Rating,
  Skeleton,
  Stack,
  Tab,
  Tabs,
} from '@mui/material';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import { components } from '@/components';
import { Button } from '@/components/Button';
import {
  MarketChip,
  RiskBadge,
  VerifiedBadge,
} from '@/components/invest/Badges';
import { FavoriteButton } from '@/components/invest/FavoriteButton';
import { InvestModal } from '@/components/invest/InvestModal';
import { LevelBadge } from '@/components/invest/LevelBadge';
import { useUserLevel } from '@/hooks/useUserLevel';
import { Amount } from '@/components/invest/Amount';
import { Routes } from '@/routes';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useRouter } from 'next/navigation';
import { PerformanceChart } from '@/components/invest/PerformanceChart';
import { PlanCard } from '@/components/invest/PlanCard';
import { HouseSwiper } from '@/components/invest/HouseSwiper';
import { InvestorLevelBanner } from '@/components/invest/InvestorLevelBanner';
import { ScreenshotGallery } from '@/components/invest/ScreenshotGallery';
import { HouseRatingForm } from '@/components/invest/HouseRatingForm';
import { StatTile } from '@/components/invest/StatTile';
import { URLS_ASSETS } from '@/config';
import { data } from '@/data';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { stores } from '@/stores';
import { getHouseByIdIndexDb } from '@/storages/indexed_db_service';
import { InvestorLevel } from '@/types/LevelType';
import { HouseReview, TradingHouse } from '@/types/TradingHouseType';
import {
  formatDate,
  formatNumber,
  formatPercent,
  riskColor,
} from '@/utils/invest_helper';
import { isPlanOpen } from '@/utils/plan_helper';

type Props = {
  id: string;
};

const youtubeId = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace(/^\//, '') || null;
    }
    return parsed.searchParams.get('v');
  } catch {
    return null;
  }
};

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section
    style={{
      marginBottom: 24,
      padding: 20,
      borderRadius: 24,
      backgroundColor: 'var(--white-color)',
      border: '1px solid var(--border-color)',
    }}
  >
    <h4 style={{ marginBottom: 16 }}>{title}</h4>
    {children}
  </section>
);

const iconSx = { fontSize: 18 };

type DetailTab = 'invest' | 'infos' | 'medias' | 'avis';

const detailTabs: {
  value: DetailTab;
  label: (house: TradingHouse) => string;
}[] = [
  { value: 'invest', label: () => 'Invest' },
  { value: 'infos', label: () => 'Infos' },
  {
    value: 'medias',
    label: (house) =>
      `Médias (${house.screenshots.length + (house.videoPitch ? 1 : 0)})`,
  },
  { value: 'avis', label: (house) => `Avis (${house.reviews.length})` },
];

export const HouseDetailClient: React.FC<Props> = ({ id }) => {
  const { isDesktop } = useDeviceDetect();
  const { houses, load } = stores.useHousesStore();
  const { openModal } = stores.useInvestModal();
  const router = useRouter();
  const { isLocked, levelOf } = useUserLevel();
  const storedInvestorLevel = stores.useLevelsStore(
    (state) => state.investorLevel,
  );
  const [house, setHouse] = useState<TradingHouse | null>(
    () => houses.find((item) => item.id === id) ?? null,
  );
  const [similar, setSimilar] = useState<TradingHouse[]>([]);
  const [investorLevel, setInvestorLevel] = useState<InvestorLevel | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<DetailTab>('invest');

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    let mounted = true;
    getHouseByIdIndexDb(id)
      .then((cached) => mounted && cached && setHouse((prev) => prev ?? cached))
      .catch(() => undefined);
    data
      .getHouseById(id)
      .then((fresh) => {
        if (!mounted) return;
        setHouse(fresh.house);
        setSimilar(fresh.similar);
        setInvestorLevel(fresh.investorLevel);
        if (fresh.investorLevel) {
          stores.useLevelsStore.getState().setInvestorLevel(fresh.investorLevel);
        }
      })
      .catch(
        () => mounted && setError('Cette maison de trading est introuvable.'),
      );
    return () => {
      mounted = false;
    };
  }, [id]);

  const header = (
    <components.Header
      showGoBack={true}
      showBasket={true}
      title={house?.name ?? ''}
    />
  );

  if (error && !house) {
    return (
      <components.Screen>
        {header}
        <main
          className="container"
          style={{ textAlign: 'center', paddingTop: 60 }}
        >
          <h3>{error}</h3>
        </main>
      </components.Screen>
    );
  }

  if (!house) {
    return (
      <components.Screen>
        {header}
        <main className="container screen-content">
          <Skeleton
            variant="rounded"
            height={260}
            sx={{ borderRadius: '28px', mb: 3 }}
          />
          <Grid container spacing={2}>
            {Array.from({ length: 8 }, (_, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <Skeleton
                  variant="rounded"
                  height={92}
                  sx={{ borderRadius: '20px' }}
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </components.Screen>
    );
  }

  const { stats } = house;
  const openPlans = house.plans.filter(isPlanOpen);
  const unlockedPlans = openPlans.filter((plan) => !isLocked(plan));
  const houseLocked =
    isLocked(house) || (openPlans.length > 0 && unlockedPlans.length === 0);
  const houseLevel = levelOf(house.requiredLevel);
  const defaultPlan =
    unlockedPlans.find((plan) => plan.popular) ??
    unlockedPlans[0] ??
    house.plans[0];
  const allClosed = house.plans.length > 0 && openPlans.length === 0;
  const invest = (planId?: string) => {
    if (allClosed || !defaultPlan) return;
    if (houseLocked) {
      router.push(Routes.LEVELS);
      return;
    }
    openModal(house, planId ?? defaultPlan.id);
  };
  const investLabel = allClosed
    ? 'Souscription fermée'
    : houseLocked
      ? `Débloquer : ${house.requiredLevelLabel || `palier ${house.requiredLevel}`}`
      : 'Investir maintenant';

  const statTiles = [
    {
      label: 'Taux de gain',
      value: formatPercent(stats.winRate),
      hint: 'Positions gagnantes',
      icon: <PercentRoundedIcon sx={iconSx} />,
    },
    stats.monthlyRoi
      ? {
          label: 'Rendement mensuel',
          value: formatPercent(stats.monthlyRoi, true),
          hint: 'Moyenne sur 12 mois',
          color: 'var(--success-color)',
          icon: <CalendarMonthRoundedIcon sx={iconSx} />,
        }
      : null,
    stats.annualRoi
      ? {
          label: 'Meilleur rendement',
          value: formatPercent(stats.annualRoi, true),
          hint: 'Formule la plus rémunératrice',
          color: 'var(--success-color)',
          icon: <TrendingUpRoundedIcon sx={iconSx} />,
        }
      : null,
    stats.maxDrawdown
      ? {
          label: 'Drawdown max',
          value: `-${formatPercent(stats.maxDrawdown)}`,
          hint: 'Plus forte baisse',
          color: 'var(--danger-color)',
          icon: <TrendingDownRoundedIcon sx={iconSx} />,
        }
      : null,
    {
      label: 'Niveau de risque',
      value: stats.riskLevel.charAt(0).toUpperCase() + stats.riskLevel.slice(1),
      hint: 'Évaluation interne',
      color: riskColor(stats.riskLevel),
      icon: <ShieldRoundedIcon sx={iconSx} />,
    },
    {
      label: 'Investisseurs',
      value: formatNumber(stats.investorsCount),
      hint: 'Clients actifs',
      icon: <GroupsRoundedIcon sx={iconSx} />,
    },
    {
      label: 'Capital géré',
      value: <Amount value={stats.capitalManaged} compact />,
      hint: 'Encours total',
      icon: <SavingsRoundedIcon sx={iconSx} />,
    },
    stats.totalTrades
      ? {
          label: 'Trades réalisés',
          value: formatNumber(stats.totalTrades),
          hint: 'Sur les 12 derniers mois',
          icon: <SwapHorizRoundedIcon sx={iconSx} />,
        }
      : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  const infos = [
    house.foundedYear ? ['Fondée en', String(house.foundedYear)] : null,
    house.country ? ['Pays', house.country] : null,
    house.license ? ['Licence', house.license] : null,
    house.certifiedAt
      ? ['Certifiée le', formatDate(house.certifiedAt)]
      : null,
    house.requiredLevelLabel
      ? ['Niveau minimum', house.requiredLevelLabel]
      : null,
    house.markets.length
      ? ['Marchés', house.markets.map((market) => market.name).join(', ')]
      : null,
  ].filter((item): item is [string, string] => item !== null);

  return (
    <components.Screen>
      <components.Background />
      {header}
      <div className="screen-content">
        <main
          className="container"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            paddingBottom: isDesktop ? 40 : 110,
          }}
        >
          <section
            style={{
              position: 'relative',
              marginTop: 10,
              marginBottom: 24,
              borderRadius: 28,
              overflow: 'hidden',
              minHeight: 260,
            }}
          >
            <Image
              src={`${URLS_ASSETS.HOUSES}/${house.cover}`}
              alt={house.name}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'relative',
                minHeight: 260,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                gap: 12,
                background:
                  'linear-gradient(180deg, rgba(17,22,35,0.1) 0%, rgba(17,22,35,0.85) 100%)',
              }}
            >
              <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <FavoriteButton houseId={house.id} size="medium" light />
              </div>
              <Stack direction="row" alignItems="center" gap={2}>
                <Image
                  src={`${URLS_ASSETS.HOUSES}/${house.logo}`}
                  alt={house.name}
                  width={isDesktop ? 84 : 64}
                  height={isDesktop ? 84 : 64}
                  style={{ borderRadius: 18, border: '3px solid white' }}
                />
                <div>
                  <Stack direction="row" alignItems="center" gap={0.5}>
                    <h2 style={{ color: 'var(--white-color)' }}>
                      {house.name}
                    </h2>
                    {house.verified && <VerifiedBadge size={24} />}
                  </Stack>
                  <p className="t16" style={{ color: '#e3e7ef' }}>
                    {house.tagline}
                  </p>
                </div>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
                gap={1.5}
              >
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  alignItems="center"
                >
                  {house.markets.map((market) => (
                    <MarketChip key={market.id} label={market.name} />
                  ))}
                  <span
                    style={{
                      backgroundColor: 'var(--white-color)',
                      borderRadius: 30,
                    }}
                  >
                    <RiskBadge risk={stats.riskLevel} />
                  </span>
                  {houseLocked && (
                    <LevelBadge
                      rank={house.requiredLevel}
                      level={houseLevel}
                      locked
                    />
                  )}
                  <span
                    className="t14"
                    style={{
                      color: 'var(--white-color)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <Rating
                      value={stats.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                      sx={{
                        color: 'var(--accent-color)',
                        '& .MuiRating-iconEmpty': {
                          color: 'rgba(255,255,255,0.4)',
                        },
                      }}
                    />
                    {stats.rating.toLocaleString('fr-FR')} ({stats.reviewsCount}{' '}
                    avis)
                  </span>
                </Stack>
                {isDesktop && (
                  <Button
                    label={investLabel}
                    containerStyle={{ width: 260 }}
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      invest();
                    }}
                  />
                )}
              </Stack>
            </div>
          </section>

          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 20,
              marginBottom: 20,
              borderRadius: 20,
              backgroundColor: 'rgba(245, 250, 251, 0.92)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--border-color)',
            }}
          >
            <Tabs
              value={tab}
              onChange={(_, value: DetailTab) => setTab(value)}
              variant="fullWidth"
              sx={{
                minHeight: 48,
                '& .MuiTab-root': {
                  minHeight: 48,
                  minWidth: 0,
                  px: 1,
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                  fontSize: isDesktop ? 16 : 15,
                  fontWeight: 600,
                  fontFamily: 'var(--font-dosis)',
                  color: 'var(--text-color)',
                },
                '& .MuiTab-root.Mui-selected': { color: 'var(--main-color)' },
                '& .MuiTabs-indicator': {
                  height: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                },
                '& .tab-indicator': {
                  width: '50%',
                  maxWidth: 60,
                  borderRadius: 3,
                  backgroundColor: 'var(--accent-color)',
                },
              }}
              slotProps={{
                indicator: { children: <span className="tab-indicator" /> },
              }}
            >
              {detailTabs.map((item) => (
                <Tab
                  key={item.value}
                  value={item.value}
                  label={item.label(house)}
                />
              ))}
            </Tabs>
          </div>

          {tab === 'invest' && (
            <>
              {(investorLevel ?? storedInvestorLevel) && (
                <InvestorLevelBanner
                  investorLevel={(investorLevel ?? storedInvestorLevel)!}
                  onProgress={() => router.push(Routes.LEVELS)}
                />
              )}
              {unlockedPlans.length < house.plans.length && (
                <div
                  className="clickable"
                  onClick={() => router.push(Routes.LEVELS)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: 16,
                    marginBottom: 20,
                    borderRadius: 20,
                    backgroundColor: 'var(--main-color)',
                  }}
                >
                  <LockRoundedIcon
                    sx={{ color: '#fcc55e', '& path': { fill: '#fcc55e' } }}
                  />
                  <p
                    className="t14"
                    style={{ flex: 1, color: 'var(--white-color)' }}
                  >
                    {houseLocked
                      ? `${house.name} est accessible à partir du niveau ${house.requiredLevelLabel || houseLevel?.name || house.requiredLevel}.`
                      : `Certaines formules sont réservées à un niveau supérieur.`}{' '}
                    <span style={{ color: '#fcc55e', fontWeight: 600 }}>
                      Voir comment progresser →
                    </span>
                  </p>
                </div>
              )}
              <section style={{ marginBottom: 24 }}>
                <p className="t16" style={{ marginBottom: 20 }}>
                  Choisissez la formule adaptée à votre budget et à la durée de
                  votre placement.
                </p>
                {house.plans.length === 0 ? (
                  <p className="t16">
                    Aucun forfait n’est proposé pour le moment.
                  </p>
                ) : (
                <Grid container spacing={3}>
                  {house.plans.map((plan) => (
                    <Grid key={plan.id} size={{ xs: 12, md: 4 }}>
                      <PlanCard plan={plan} onInvest={() => invest(plan.id)} />
                    </Grid>
                  ))}
                </Grid>
                )}
                <p className="t12" style={{ marginTop: 16 }}>
                  Les performances passées ne préjugent pas des performances
                  futures. Investir comporte un risque de perte en capital.
                </p>
              </section>
            </>
          )}

          {tab === 'infos' && (
            <>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {statTiles.map((stat) => (
                  <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                    <StatTile {...stat} />
                  </Grid>
                ))}
              </Grid>

              {house.performance.length > 0 && (
                <Card title="Performance sur 12 mois">
                  <PerformanceChart performance={house.performance} />
                </Card>
              )}

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Card title="À propos">
                    <p className="t16" style={{ marginBottom: house.strategy ? 16 : 0 }}>
                      {house.description}
                    </p>
                    {house.strategy ? (
                      <>
                        <h6 style={{ marginBottom: 6 }}>Stratégie</h6>
                        <p className="t16">{house.strategy}</p>
                      </>
                    ) : null}
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Card title="Informations">
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                      }}
                    >
                      {infos.map(([label, value]) => (
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
                      <li
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 12,
                        }}
                      >
                        <span className="t14">Statut</span>
                        <span
                          style={{
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            color: house.verified
                              ? 'var(--main-turquoise)'
                              : 'var(--warning-color)',
                          }}
                        >
                          {house.verified && <VerifiedBadge />}
                          {house.verified
                            ? 'Vérifiée'
                            : 'Vérification en cours'}
                        </span>
                      </li>
                    </ul>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}

          {tab === 'medias' && (
            <Card title="Médias">
              {house.videoPitch && youtubeId(house.videoPitch) && (
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    marginBottom: house.screenshots.length ? 16 : 0,
                    borderRadius: 18,
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId(house.videoPitch)}`}
                    title={`Présentation ${house.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                  />
                </div>
              )}
              {house.screenshots.length > 0 ? (
                <ScreenshotGallery
                  screenshots={house.screenshots}
                  alt={house.name}
                  layout="grid"
                />
              ) : (
                !house.videoPitch && (
                  <p className="t16">Aucun média pour le moment.</p>
                )
              )}
            </Card>
          )}

          {tab === 'avis' && (
            <>
              <Card title={`Avis des investisseurs (${house.reviews.length})`}>
                <HouseRatingForm
                  house={house}
                  onInvest={() => {
                    setTab('invest');
                    invest();
                  }}
                  onSubmitted={(review: HouseReview) => {
                    setHouse((current) =>
                      current
                        ? {
                            ...current,
                            reviews: [review, ...current.reviews],
                            stats: {
                              ...current.stats,
                              reviewsCount: current.stats.reviewsCount + 1,
                              rating:
                                (current.stats.rating *
                                  current.stats.reviewsCount +
                                  review.rating) /
                                (current.stats.reviewsCount + 1),
                            },
                          }
                        : current,
                    );
                    data.getHouseById(id).then((fresh) => {
                      setHouse(fresh.house);
                      setSimilar(fresh.similar);
                    });
                  }}
                />
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={1.5}
                  sx={{ mb: 2 }}
                >
                  <span
                    style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}
                  >
                    {stats.rating.toLocaleString('fr-FR')}
                  </span>
                  <div>
                    <Rating value={stats.rating} precision={0.1} readOnly />
                    <p className="t12">
                      Basé sur {stats.reviewsCount} avis vérifiés
                    </p>
                  </div>
                </Stack>
                {house.reviews.length === 0 && (
                  <p className="t16">Aucun avis pour le moment.</p>
                )}
                <ul
                  style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                >
                  {house.reviews.map((review) => (
                    <li
                      key={review.id}
                      style={{
                        display: 'flex',
                        gap: 12,
                        paddingTop: 16,
                        borderTop: '1px solid #eef0f5',
                      }}
                    >
                      <Avatar
                        src={`${URLS_ASSETS.AVATARS}/${review.avatar}`}
                        alt={review.author}
                      />
                      <div style={{ flex: 1 }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          flexWrap="wrap"
                          gap={1}
                        >
                          <h6>{review.author}</h6>
                          <span className="t12">{formatDate(review.date)}</span>
                        </Stack>
                        <Rating value={review.rating} readOnly size="small" />
                        <p className="t16">{review.comment}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </>
          )}

          {similar.length > 0 && (
            <section style={{ marginTop: 8, marginBottom: 24 }}>
              <h4 style={{ marginBottom: 16 }}>Maisons similaires</h4>
              <HouseSwiper houses={similar} />
            </section>
          )}
        </main>
      </div>

      {!isDesktop && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            backgroundColor: '#F5FAFB',
            borderTop: '1px solid var(--border-color)',
          }}
        >
          <div style={{ flex: 1 }}>
            <span className="t12">Jusqu’à</span>
            <p
              style={{
                fontWeight: 800,
                fontSize: 20,
                color: 'var(--success-color)',
              }}
            >
              {formatPercent(
                Math.max(
                  0,
                  ...house.plans.map((plan) => plan.expectedReturn),
                ),
                true,
              )}
            </p>
          </div>
          <Button
            label={
              allClosed
                ? 'Fermée'
                : houseLocked
                  ? house.requiredLevelLabel || `Palier ${house.requiredLevel}`
                  : 'Investir'
            }
            containerStyle={{ flex: 2 }}
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              invest();
            }}
          />
        </div>
      )}

      <components.Modal />
      <InvestModal />
    </components.Screen>
  );
};

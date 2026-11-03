'use client';

import React, { useEffect } from 'react';
import { AssetImage as Image } from '@/components/invest/AssetImage';
import { useRouter } from 'next/navigation';
import { LinearProgress, Rating, Skeleton, Stack } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { components } from '@/components';
import { Button } from '@/components/Button';
import { LevelBadge } from '@/components/invest/LevelBadge';
import { URLS_ASSETS } from '@/config';
import { useUserLevel } from '@/hooks/useUserLevel';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { InvestmentLevel } from '@/types/LevelType';
import { formatDate } from '@/utils/invest_helper';
import { useMoney } from '@/hooks/useMoney';

type Criterion = {
  label: string;
  current: number;
  target: number;
  display: string;
  action?: { label: string; onClick: () => void };
};

const CriterionRow: React.FC<{ criterion: Criterion }> = ({ criterion }) => {
  const done = criterion.current >= criterion.target;
  const color = done ? '#1a9e5c' : '#8a91a5';
  return (
    <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      {done ? (
        <CheckCircleRoundedIcon sx={{ color, '& path': { fill: color } }} />
      ) : (
        <RadioButtonUncheckedRoundedIcon
          sx={{ color, '& path': { fill: color } }}
        />
      )}
      <div style={{ flex: 1 }}>
        <Stack direction="row" justifyContent="space-between" gap={1}>
          <span className="t14" style={{ color: 'var(--white-color)' }}>
            {criterion.label}
          </span>
          <span
            className="t14"
            style={{ color: done ? '#7ee2a8' : '#c8cdd9', fontWeight: 600 }}
          >
            {criterion.display}
          </span>
        </Stack>
        {criterion.target > 0 && (
          <LinearProgress
            variant="determinate"
            value={Math.min(100, (criterion.current / criterion.target) * 100)}
            sx={{
              mt: 0.75,
              height: 6,
              borderRadius: 3,
              backgroundColor: 'rgba(255,255,255,0.15)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: done ? '#1a9e5c' : '#fcc55e',
              },
            }}
          />
        )}
        {!done && criterion.action && (
          <span
            className="t12 clickable"
            onClick={criterion.action.onClick}
            style={{ color: '#fcc55e', fontWeight: 600 }}
          >
            {criterion.action.label} →
          </span>
        )}
      </div>
    </li>
  );
};

type Props = {
  embedded?: boolean;
};

export const Levels: React.FC<Props> = ({ embedded }) => {
  const router = useRouter();
  const { isLoggedIn, isLoadedCurrentUser, initAuth } = stores.useUserStore();
  const { houses, load: loadHouses } = stores.useHousesStore();
  const { investorLevel, loadInvestorLevel } = stores.useLevelsStore();
  const { levels, rank } = useUserLevel();
  const { formatWithLocal } = useMoney();

  useEffect(() => {
    initAuth();
    loadHouses();
  }, [initAuth, loadHouses]);

  useEffect(() => {
    if (isLoggedIn) loadInvestorLevel();
  }, [isLoggedIn, loadInvestorLevel]);

  const renderCurrent = () => {
    if (isLoadedCurrentUser && !isLoggedIn) {
      return (
        <div style={heroStyle}>
          <h3 style={{ color: 'var(--white-color)', fontWeight: 700 }}>
            Investissez par paliers
          </h3>
          <p className="t16" style={{ color: '#c8cdd9' }}>
            Tout nouvel investisseur commence au palier Débutant. Chaque
            investissement et chaque parrainage vous font gagner des étoiles et
            rapprochent du palier suivant.
          </p>
          <Button
            label="Se connecter"
            containerStyle={{ width: 220 }}
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              router.push(Routes.SIGN_IN);
            }}
          />
        </div>
      );
    }
    if (!investorLevel) {
      return (
        <Skeleton
          variant="rounded"
          height={300}
          sx={{ borderRadius: '28px', mb: 3 }}
        />
      );
    }

    const {
      nextLevel,
      investmentCount,
      stars,
      rules,
      levelSince,
      amountSinceLevel,
      referralsSinceLevel,
    } = investorLevel;
    const nextTarget = nextLevel
      ? investmentCount + nextLevel.missingInvestments
      : investmentCount;
    const maxStars = rules?.maxStars ?? 5;
    const half = !stars.isMax ? stars.nextHalfStar : undefined;
    const amountTarget = half
      ? amountSinceLevel + half.missingAmount
      : amountSinceLevel;
    const referralTarget = half
      ? referralsSinceLevel + half.missingReferrals
      : referralsSinceLevel;
    const criteria: Criterion[] = [];
    if (nextLevel) {
      criteria.push({
        label: `Investissements pour ${nextLevel.levelLabel}`,
        current: investmentCount,
        target: nextTarget,
        display: `${investmentCount} / ${nextTarget}`,
        action: {
          label: 'Voir les maisons',
          onClick: () => router.push(Routes.HOME),
        },
      });
    }
    if (half) {
      criteria.push({
        label: 'Montant investi pour ½ étoile',
        current: amountSinceLevel,
        target: amountTarget,
        display: `${formatWithLocal(amountSinceLevel)} / ${formatWithLocal(amountTarget)}`,
        action: {
          label: 'Investir',
          onClick: () => router.push(Routes.HOME),
        },
      });
      criteria.push({
        label: 'Parrainages pour ½ étoile (autre chemin)',
        current: referralsSinceLevel,
        target: referralTarget,
        display: `${referralsSinceLevel} / ${referralTarget}`,
        action: {
          label: 'Parrainer',
          onClick: () => router.push(Routes.PROFILE),
        },
      });
    }

    return (
      <div style={heroStyle}>
        <span className="t14" style={{ color: '#c8cdd9' }}>
          Votre palier actuel
        </span>
        <Stack direction="row" alignItems="center" gap={1.5} flexWrap="wrap">
          <h2 style={{ color: 'var(--white-color)' }}>
            {investorLevel.levelLabel}
          </h2>
          <LevelBadge
            rank={rank}
            level={levels.find((item) => item.rank === rank)}
            stars={stars.total}
          />
        </Stack>
        {levelSince && (
          <p className="t12" style={{ color: '#c8cdd9' }}>
            Depuis le {formatDate(levelSince)}
          </p>
        )}
        <p className="t16" style={{ color: '#c8cdd9' }}>
          {investmentCount} investissement{investmentCount > 1 ? 's' : ''}
          {nextLevel
            ? ` · encore ${nextLevel.missingInvestments} pour passer ${nextLevel.levelLabel}`
            : ' · palier maximum atteint'}
        </p>

        <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
          <StarRoundedIcon sx={{ color: 'var(--accent-color)' }} />
          <Rating
            value={stars.total}
            precision={0.5}
            readOnly
            max={maxStars}
            sx={{
              '& .MuiRating-iconFilled': { color: 'var(--accent-color)' },
              '& .MuiRating-iconEmpty': { color: 'rgba(255,255,255,0.35)' },
            }}
          />
          <span className="t14" style={{ color: '#c8cdd9' }}>
            {stars.total} / {maxStars}
            {stars.fromAmount || stars.fromReferrals
              ? ` · ${stars.fromAmount} via montants, ${stars.fromReferrals} via parrainages`
              : ''}
          </span>
        </Stack>

        {criteria.length > 0 && (
          <>
            <h5 style={{ color: 'var(--white-color)', marginTop: 8 }}>
              Chemin vers la suite
            </h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {criteria.map((criterion) => (
                <CriterionRow key={criterion.label} criterion={criterion} />
              ))}
            </ul>
          </>
        )}

        {stars.isMax ? (
          <p className="t12" style={{ color: '#c8cdd9' }}>
            Maximum de {maxStars} étoiles atteint.
          </p>
        ) : rules ? (
          <p className="t12" style={{ color: '#c8cdd9' }}>
            Une étoile tous les {formatWithLocal(rules.starAmountStep)} investis à
            ce palier, ou tous les {rules.referralsPerStar} parrainages.
            Maximum {rules.maxStars} étoiles. Le montant et le parrainage sont
            deux chemins distincts.
          </p>
        ) : null}
      </div>
    );
  };

  const requirementLabel = (level: InvestmentLevel) => {
    if (level.rank === 1) return 'Accessible dès l’inscription.';
    const count = level.requirements.completedInvestments;
    return `${count} investissement${count > 1 ? 's' : ''}`;
  };

  const body = (
    <main
      className={embedded ? undefined : 'container'}
      style={{
        maxWidth: 900,
        margin: '0 auto',
        paddingTop: embedded ? 0 : 10,
        paddingBottom: embedded ? 8 : 40,
      }}
    >
          {renderCurrent()}

          <h3 style={{ fontWeight: 700, margin: '28px 0 14px' }}>
            Tous les paliers
          </h3>
          <ol
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              listStyle: 'none',
            }}
          >
            {levels.map((level) => {
              const reached = isLoggedIn && level.rank <= rank;
              const isCurrent = isLoggedIn && level.rank === rank;
              const unlockedHouses = houses.filter(
                (house) => house.requiredLevel === level.rank,
              );
              return (
                <li
                  key={level.rank}
                  style={{
                    padding: 18,
                    borderRadius: 24,
                    backgroundColor: 'var(--white-color)',
                    border: `${isCurrent ? 2 : 1}px solid ${isCurrent ? 'var(--accent-color)' : 'var(--border-color)'}`,
                    opacity: reached || !isLoggedIn ? 1 : 0.85,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={1}
                    flexWrap="wrap"
                  >
                    <Stack direction="row" alignItems="center" gap={1}>
                      <LevelBadge
                        rank={level.rank}
                        level={level}
                        locked={isLoggedIn && !reached}
                        size="medium"
                      />
                      {isCurrent && (
                        <span className="t12" style={{ fontWeight: 700 }}>
                          Votre palier
                        </span>
                      )}
                    </Stack>
                  </Stack>
                  <p className="t14" style={{ margin: '10px 0' }}>
                    {level.description}
                  </p>
                  <p
                    className="t12"
                    style={{ marginBottom: unlockedHouses.length ? 10 : 0 }}
                  >
                    {requirementLabel(level)}
                    {level.perks.length ? ` · ${level.perks.join(' · ')}` : ''}
                  </p>
                  {unlockedHouses.length > 0 && (
                    <Stack
                      direction="row"
                      gap={1}
                      flexWrap="wrap"
                      alignItems="center"
                    >
                      <span className="t12" style={{ fontWeight: 600 }}>
                        Débloque :
                      </span>
                      {unlockedHouses.map((house) => (
                        <span
                          key={house.id}
                          className="clickable"
                          onClick={() =>
                            router.push(`${Routes.HOUSE}/${house.id}`)
                          }
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            padding: '3px 10px 3px 3px',
                            borderRadius: 20,
                            fontSize: 12,
                            backgroundColor: 'var(--neon-white)',
                            border: '1px solid var(--border-color)',
                          }}
                        >
                          <Image
                            src={`${URLS_ASSETS.HOUSES}/${house.logo}`}
                            alt={house.name}
                            width={20}
                            height={20}
                            style={{ borderRadius: 6 }}
                          />
                          {house.name}
                        </span>
                      ))}
                    </Stack>
                  )}
                </li>
              );
            })}
          </ol>
    </main>
  );

  if (embedded) return body;

  return (
    <components.Screen>
      <components.Background />
      <components.Header
        showGoBack={true}
        showBasket={true}
        title="Mes paliers"
      />
      <div className="screen-content">{body}</div>
      <components.Modal />
    </components.Screen>
  );
};

const heroStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  borderRadius: 28,
  background: [
    'radial-gradient(60% 45% at 100% 0%, rgba(252, 197, 94, 0.3) 0%, rgba(252, 197, 94, 0) 70%)',
    'linear-gradient(160deg, #1e2538 0%, #2b3554 55%, #1e2538 100%)',
  ].join(', '),
};

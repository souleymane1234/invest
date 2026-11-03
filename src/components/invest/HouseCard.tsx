'use client';

import React from 'react';
import Link from 'next/link';
import { AssetImage as Image } from './AssetImage';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { URLS_ASSETS } from '@/config';
import { Routes } from '@/routes';
import { TradingHouse } from '@/types/TradingHouseType';
import { formatDuration, formatNumber, formatPercent } from '@/utils/invest_helper';
import { cheapestPlan } from '@/utils/plan_helper';
import { MarketChip, RiskBadge, VerifiedBadge } from './Badges';
import { FavoriteButton } from './FavoriteButton';
import { LevelBadge } from './LevelBadge';
import { useUserLevel } from '@/hooks/useUserLevel';
import { Amount } from '@/components/invest/Amount';
import { useMoney } from '@/hooks/useMoney';
import { Sparkline } from './Sparkline';

type Props = {
  house: TradingHouse;
};

const Metric: React.FC<{ label: string; value: string; color?: string }> = ({
  label,
  value,
  color,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span className="t12">{label}</span>
    <span
      className="house-card__metric"
      style={{
        fontWeight: 700,
        lineHeight: 1.2,
        color: color ?? 'var(--main-color)',
      }}
    >
      {value}
    </span>
  </div>
);

export const HouseCard: React.FC<Props> = ({ house }) => {
  const { stats } = house;
  const { formatCompactAmount } = useMoney();
  const { isLocked, levelOf } = useUserLevel();
  const locked = isLocked(house);
  const entryPlan = cheapestPlan(house.plans);

  return (
    <Link
      href={`${Routes.HOUSE}/${house.id}`}
      className="house-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--white-color)',
        border: '1px solid var(--border-color)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Image
          src={`${URLS_ASSETS.HOUSES}/${house.logo}`}
          alt={house.name}
          width={52}
          height={52}
          className="house-card__logo"
          style={{ flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <h5 className="number-of-lines-1">{house.name}</h5>
            {house.verified && <VerifiedBadge />}
          </div>
          <span className="t12 number-of-lines-1">{house.tagline}</span>
        </div>
        <FavoriteButton houseId={house.id} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {house.markets.map((market) => (
          <MarketChip key={market.id} label={market.name} />
        ))}
        <RiskBadge risk={stats.riskLevel} />
        {locked && (
          <LevelBadge
            rank={house.requiredLevel}
            level={levelOf(house.requiredLevel)}
            locked
          />
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <Metric label="Taux de gain" value={formatPercent(stats.winRate)} />
        <Metric
          label="Rendement"
          value={formatPercent(stats.annualRoi, true)}
          color={
            stats.annualRoi >= 0
              ? 'var(--success-color)'
              : 'var(--danger-color)'
          }
        />
        <span className="house-card__sparkline">
          <Sparkline performance={house.performance} width={90} height={36} />
        </span>
      </div>

      <div
        className="house-card__footer"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
          borderTop: '1px solid #eef0f5',
        }}
      >
        <span
          className="t12"
          title={`${formatCompactAmount(stats.capitalManaged)} gérés`}
          style={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <StarRoundedIcon
            sx={{ fontSize: 16, color: 'var(--accent-color)' }}
          />
          {stats.rating.toLocaleString('fr-FR')} ·{' '}
          {formatNumber(stats.investorsCount)} investisseurs
        </span>
        <span
          className="t12"
          style={{ color: 'var(--main-color)', fontWeight: 600 }}
        >
          {entryPlan ? (
            <>
              Dès <Amount value={entryPlan.minAmount} />
              {entryPlan.durationDays
                ? ` · ${formatDuration(entryPlan.durationDays)}`
                : ''}
            </>
          ) : (
            'Aucune formule'
          )}
        </span>
      </div>
    </Link>
  );
};

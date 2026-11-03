'use client';

import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { InvestorLevel } from '@/types/LevelType';
import { useMoney } from '@/hooks/useMoney';

type Props = {
  investorLevel: InvestorLevel;
  onProgress: () => void;
};

export const InvestorLevelBanner: React.FC<Props> = ({
  investorLevel,
  onProgress,
}) => {
  const { formatWithLocal } = useMoney();
  const { stars, nextLevel, investmentCount, rules, amountSinceLevel } =
    investorLevel;
  const maxStars = rules?.maxStars ?? 5;
  const half = !stars.isMax ? stars.nextHalfStar : undefined;

  return (
    <div
      className="clickable"
      onClick={onProgress}
      style={{
        padding: 16,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: 'var(--main-color)',
      }}
    >
      <p
        className="t14"
        style={{ color: 'var(--white-color)', marginBottom: 6 }}
      >
        Votre palier :{' '}
        <span style={{ fontWeight: 700 }}>{investorLevel.levelLabel}</span>
      </p>
      <p className="t14" style={{ color: '#c8cdd9' }}>
        {investmentCount} investissement
        {investmentCount > 1 ? 's' : ''}
        {nextLevel
          ? ` · encore ${nextLevel.missingInvestments} pour ${nextLevel.levelLabel}`
          : ''}
      </p>
      <p
        className="t14"
        style={{
          color: '#c8cdd9',
          marginTop: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <StarRoundedIcon sx={{ fontSize: 16, color: 'var(--accent-color)' }} />
        {stars.total} / {maxStars} étoile{stars.total > 1 ? 's' : ''}
        {half
          ? ` · encore ${formatWithLocal(half.missingAmount)} ou ${half.missingReferrals} parrainage${half.missingReferrals > 1 ? 's' : ''} pour ½ étoile`
          : stars.isMax
            ? ' · maximum atteint'
            : ''}
        {amountSinceLevel > 0
          ? ` · ${formatWithLocal(amountSinceLevel)} investis à ce palier`
          : ''}
      </p>
      <span
        className="t12"
        style={{ color: '#fcc55e', fontWeight: 600, display: 'inline-block', marginTop: 8 }}
      >
        Voir comment progresser →
      </span>
    </div>
  );
};

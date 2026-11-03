import React from 'react';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import { InvestmentLevel } from '@/types/LevelType';

type Props = {
  level?: InvestmentLevel;
  rank: number;
  locked?: boolean;
  size?: 'small' | 'medium';
  stars?: number;
};

/** Pastille « Palier X » ; avec `locked`, indique un palier requis non atteint. */
export const LevelBadge: React.FC<Props> = ({
  level,
  rank,
  locked,
  size = 'small',
  stars,
}) => {
  const color = level?.color ?? 'var(--main-color)';
  const Icon = locked ? LockRoundedIcon : WorkspacePremiumRoundedIcon;
  const fontSize = size === 'small' ? 12 : 14;
  const textColor = locked ? '#ffffff' : color;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: size === 'small' ? '2px 8px' : '4px 12px',
        borderRadius: 30,
        fontSize,
        fontWeight: 700,
        whiteSpace: 'nowrap',
        color: textColor,
        backgroundColor: locked ? 'rgba(30, 37, 56, 0.85)' : 'var(--white-color)',
        border: locked ? 'none' : `1px solid ${color}`,
      }}
    >
      <Icon sx={{ fontSize: fontSize + 2, color: textColor, '& path': { fill: textColor } }} />
      {level?.name ?? `Palier ${rank}`}
      {typeof stars === 'number' ? ` · ${stars}★` : ''}
    </span>
  );
};

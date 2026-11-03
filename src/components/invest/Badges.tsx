import React from 'react';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { RiskLevel } from '@/types/TradingHouseType';
import { riskColor } from '@/utils/invest_helper';

const pill: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  padding: '2px 10px',
  borderRadius: 30,
  fontSize: 12,
  lineHeight: 1.6,
  fontWeight: 500,
  whiteSpace: 'nowrap',
};

export const RiskBadge: React.FC<{ risk: RiskLevel }> = ({ risk }) => (
  <span
    style={{
      ...pill,
      color: riskColor(risk),
      border: `1px solid ${riskColor(risk)}`,
    }}
  >
    Risque {risk}
  </span>
);

export const MarketChip: React.FC<{
  label: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ label, active, onClick }) => (
  <span
    onClick={onClick}
    className={onClick ? 'clickable' : undefined}
    style={{
      ...pill,
      fontSize: onClick ? 14 : 12,
      padding: onClick ? '6px 16px' : pill.padding,
      color: 'var(--main-color)',
      backgroundColor: active ? 'var(--accent-color)' : 'var(--neon-white)',
      border: `1px solid ${active ? 'var(--accent-color)' : 'var(--border-color)'}`,
    }}
  >
    {label}
  </span>
);

export const VerifiedBadge: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <VerifiedRoundedIcon
    titleAccess="Maison vérifiée"
    sx={{ fontSize: size, color: 'var(--main-turquoise)' }}
  />
);

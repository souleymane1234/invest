'use client';

import React from 'react';
import { useMoney } from '@/hooks/useMoney';

type Props = {
  value: number;
  compact?: boolean;
  signed?: boolean;
  color?: string;
  align?: 'start' | 'end';
  onDark?: boolean;
};

/** Montant API en USD, avec équivalent local plus petit. */
export const Amount: React.FC<Props> = ({
  value,
  compact,
  signed,
  color,
  align = 'start',
  onDark,
}) => {
  const { formatAmount, formatCompactAmount, formatLocal, showLocal } =
    useMoney();
  const usd = compact ? formatCompactAmount(value) : formatAmount(value);
  const prefix = signed && value > 0 ? '+' : signed && value < 0 ? '−' : '';

  return (
    <span
      className={`money-amount${onDark ? ' money-amount--on-dark' : ''}`}
      style={{
        color,
        alignItems: align === 'end' ? 'flex-end' : 'flex-start',
        textAlign: align === 'end' ? 'right' : 'left',
      }}
    >
      <span className="money-amount__usd">
        {prefix}
        {usd}
      </span>
      {showLocal ? (
        <span className="money-amount__local">
          {prefix}
          {formatLocal(value)}
        </span>
      ) : null}
    </span>
  );
};

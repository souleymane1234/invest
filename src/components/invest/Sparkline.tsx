import React, { useId } from 'react';
import { PerformancePoint } from '@/types/TradingHouseType';

type Props = {
  performance: PerformancePoint[];
  width?: number;
  height?: number;
};

/** Courbe de capital cumulée (base 100) à partir des rendements mensuels. */
export function cumulativeCurve(performance: PerformancePoint[]): number[] {
  return performance.reduce<number[]>(
    (acc, point) => [...acc, acc[acc.length - 1] * (1 + point.value / 100)],
    [100],
  );
}

export const Sparkline: React.FC<Props> = ({
  performance,
  width = 120,
  height = 40,
}) => {
  const gradientId = useId();
  if (!performance.length) return null;
  const values = cumulativeCurve(performance);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const points = values.map((value, index) => [
    (index / (values.length - 1)) * width,
    height - 2 - ((value - min) / span) * (height - 4),
  ]);
  const line = points.map(([x, y]) => `${x},${y}`).join(' ');
  const positive = values[values.length - 1] >= values[0];
  const color = positive ? 'var(--success-color)' : 'var(--danger-color)';

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.25} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${line} ${width},${height}`}
        fill={`url(#${gradientId})`}
      />
      <polyline points={line} fill="none" stroke={color} strokeWidth={2} />
    </svg>
  );
};

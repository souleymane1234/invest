'use client';

import React, { useId, useState } from 'react';
import { PerformancePoint } from '@/types/TradingHouseType';
import { formatPercent } from '@/utils/invest_helper';
import { cumulativeCurve } from './Sparkline';

type Props = {
  performance: PerformancePoint[];
};

const WIDTH = 800;
const CURVE_HEIGHT = 200;
const BARS_TOP = 230;
const BARS_HEIGHT = 110;
const LABELS_Y = 365;
const PADDING_X = 30;

export const PerformanceChart: React.FC<Props> = ({ performance }) => {
  const gradientId = useId();
  const [hovered, setHovered] = useState<number | null>(null);

  const curve = cumulativeCurve(performance).slice(1);
  const min = Math.min(100, ...curve);
  const max = Math.max(...curve);
  const span = max - min || 1;
  const step = (WIDTH - PADDING_X * 2) / performance.length;
  const xAt = (index: number) => PADDING_X + step * index + step / 2;
  const yCurve = (value: number) =>
    10 + (CURVE_HEIGHT - 20) * (1 - (value - min) / span);

  const maxAbs = Math.max(...performance.map((point) => Math.abs(point.value)), 1);
  const zeroY = BARS_TOP + BARS_HEIGHT / 2;
  const barHeight = (value: number) =>
    (Math.abs(value) / maxAbs) * (BARS_HEIGHT / 2);

  const line = curve.map((value, index) => `${xAt(index)},${yCurve(value)}`).join(' ');
  const total = curve[curve.length - 1] - 100;
  const active = hovered !== null ? performance[hovered] : null;

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 8,
          minHeight: 28,
        }}
      >
        <span className="t14">
          {active
            ? `${active.month} : ${formatPercent(active.value, true)} · capital ${formatPercent(curve[hovered!] - 100, true)}`
            : 'Survolez le graphique pour voir le détail mensuel'}
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: total >= 0 ? 'var(--success-color)' : 'var(--danger-color)',
          }}
        >
          {formatPercent(total, true)} sur 12 mois
        </span>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} 380`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        onMouseLeave={() => setHovered(null)}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fcc55e" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#fcc55e" stopOpacity={0} />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <line
            key={ratio}
            x1={PADDING_X}
            x2={WIDTH - PADDING_X}
            y1={10 + (CURVE_HEIGHT - 20) * ratio}
            y2={10 + (CURVE_HEIGHT - 20) * ratio}
            stroke="#e3e7ef"
          />
        ))}
        <polygon
          points={`${xAt(0)},${CURVE_HEIGHT} ${line} ${xAt(curve.length - 1)},${CURVE_HEIGHT}`}
          fill={`url(#${gradientId})`}
        />
        <polyline
          points={line}
          fill="none"
          stroke="#e0a83a"
          strokeWidth={3}
          strokeLinejoin="round"
        />
        {curve.map((value, index) => (
          <circle
            key={index}
            cx={xAt(index)}
            cy={yCurve(value)}
            r={hovered === index ? 6 : 3}
            fill="#1e2538"
          />
        ))}

        <line
          x1={PADDING_X}
          x2={WIDTH - PADDING_X}
          y1={zeroY}
          y2={zeroY}
          stroke="#c8cdd9"
        />
        {performance.map((point, index) => {
          const height = barHeight(point.value);
          const positive = point.value >= 0;
          return (
            <rect
              key={point.month}
              x={xAt(index) - step * 0.3}
              y={positive ? zeroY - height : zeroY}
              width={step * 0.6}
              height={Math.max(height, 1)}
              rx={4}
              fill={positive ? '#1a9e5c' : '#c1121f'}
              opacity={hovered === null || hovered === index ? 1 : 0.4}
            />
          );
        })}
        {performance.map((point, index) => (
          <text
            key={`label-${point.month}`}
            x={xAt(index)}
            y={LABELS_Y}
            textAnchor="middle"
            fontSize={13}
            fill="#666e84"
          >
            {point.month}
          </text>
        ))}

        {performance.map((point, index) => (
          <rect
            key={`hover-${point.month}`}
            x={xAt(index) - step / 2}
            y={0}
            width={step}
            height={380}
            fill="transparent"
            onMouseEnter={() => setHovered(index)}
            onTouchStart={() => setHovered(index)}
          />
        ))}
      </svg>
    </div>
  );
};

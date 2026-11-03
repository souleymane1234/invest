import React from 'react';
import { APP_NAME } from '@/config';

type Props = {
  size?: number;
  showName?: boolean;
  light?: boolean;
};

export const AppLogo: React.FC<Props> = ({
  size = 32,
  showName = true,
  light = false,
}) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect
        width={32}
        height={32}
        rx={9}
        fill={light ? '#FCC55E' : '#1E2538'}
      />
      <path
        d="M6 22l6-6 4 3 9-10"
        stroke={light ? '#1E2538' : '#FCC55E'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={25} cy={9} r={2.5} fill={light ? '#1E2538' : '#FCC55E'} />
    </svg>
    {showName && (
      <span
        style={{
          fontSize: size * 0.7,
          fontWeight: 800,
          color: light ? 'var(--white-color)' : 'var(--main-color)',
          letterSpacing: -0.5,
        }}
      >
        {APP_NAME}
      </span>
    )}
  </span>
);

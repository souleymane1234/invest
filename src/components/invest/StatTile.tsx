import React from 'react';

type Props = {
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
};

export const StatTile: React.FC<Props> = ({ label, value, hint, color, icon }) => (
  <div
    style={{
      height: '100%',
      padding: 16,
      borderRadius: 20,
      backgroundColor: 'var(--white-color)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }}
  >
    <span
      className="t14"
      style={{ display: 'flex', alignItems: 'center', gap: 6 }}
    >
      {icon}
      {label}
    </span>
    <span
      style={{
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1.2,
        color: color ?? 'var(--main-color)',
      }}
    >
      {value}
    </span>
    {hint && <span className="t12">{hint}</span>}
  </div>
);

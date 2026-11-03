import React from 'react';
import { Button } from '@/components/Button';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export const EmptyState: React.FC<Props> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: '40px 20px',
      borderRadius: 24,
      backgroundColor: 'var(--white-color)',
      border: '1px dashed var(--border-color)',
    }}
  >
    <div style={{ color: 'var(--accent-color)' }}>{icon}</div>
    <h4>{title}</h4>
    <p className="t16" style={{ maxWidth: 420 }}>
      {description}
    </p>
    {actionLabel && onAction && (
      <Button
        label={actionLabel}
        containerStyle={{ width: 240, marginTop: 8 }}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          onAction();
        }}
      />
    )}
  </div>
);

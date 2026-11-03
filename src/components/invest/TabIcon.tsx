import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

type Props = {
  Icon: SvgIconComponent;
  active: boolean;
};

export const TabIcon: React.FC<Props> = ({ Icon, active }) => {
  const color = active ? 'var(--main-color)' : '#4a5269';

  return (
    <span
      style={{
        width: 32,
        height: 32,
        flexShrink: 0,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: active ? 'var(--accent-color)' : 'transparent',
      }}
    >
      <Icon sx={{ fontSize: 22, color, '& path': { fill: color } }} />
    </span>
  );
};

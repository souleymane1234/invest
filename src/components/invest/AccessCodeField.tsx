'use client';

import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { ACCESS_CODE_MAX_LENGTH } from '@/config';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  autoFocus?: boolean;
  onEnter?: () => void;
  containerStyle?: React.CSSProperties;
};

export const AccessCodeField: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  autoFocus,
  onEnter,
  containerStyle,
}) => {
  const [visible, setVisible] = useState(false);
  const iconColor = '#666e84';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: 20,
        paddingRight: 6,
        borderRadius: 25,
        border: '1px solid #C8CDD9',
        backgroundColor: 'var(--white-color)',
        ...containerStyle,
      }}
    >
      <input
        type={visible ? 'text' : 'password'}
        inputMode="numeric"
        autoComplete="current-password"
        autoFocus={autoFocus}
        maxLength={ACCESS_CODE_MAX_LENGTH}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value.replace(/\D/g, ''))}
        onKeyDown={(event) => event.key === 'Enter' && onEnter?.()}
        style={{
          flex: 1,
          height: '100%',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontSize: 20,
          letterSpacing: value ? 6 : 0,
          color: 'var(--main-color)',
        }}
      />
      <IconButton
        aria-label={visible ? 'Masquer le code' : 'Afficher le code'}
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <VisibilityOffRoundedIcon
            sx={{ color: iconColor, '& path': { fill: iconColor } }}
          />
        ) : (
          <VisibilityRoundedIcon
            sx={{ color: iconColor, '& path': { fill: iconColor } }}
          />
        )}
      </IconButton>
    </div>
  );
};

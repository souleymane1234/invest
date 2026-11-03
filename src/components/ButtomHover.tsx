'use client';

import clsx from 'clsx';
import React from 'react';

interface ButtomHoverProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  disconnexion?: boolean;
}

export const ButtomHover: React.FC<ButtomHoverProps> = ({
  text = 'Learn More',
  onClick,
  type = 'button',
  disconnexion = false,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      className={clsx('button-hover', disconnexion && 'disconnexion')}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

import React from 'react';

export const Background: React.FC = () => {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        background: [
          'radial-gradient(70% 60% at 100% 0%, rgba(30, 37, 56, 0.16) 0%, rgba(30, 37, 56, 0) 70%)',
          'radial-gradient(70% 60% at 0% 100%, rgba(252, 197, 94, 0.30) 0%, rgba(252, 197, 94, 0) 70%)',
          'linear-gradient(160deg, #eceff5 0%, #f7f8fa 50%, #fdf6e7 100%)',
        ].join(', '),
      }}
    />
  );
};

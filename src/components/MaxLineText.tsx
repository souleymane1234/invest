import React from 'react';

interface FadeTextProps {
  text: string;
  maxLines?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MaxLineText = ({
  text,
  maxLines = 3,
  className = '',
  style,
}: FadeTextProps) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: '-webkit-box',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        fontFamily: 'var(--font-league-spartan)',
        color: 'var(--white-color)',
        marginTop: 2,
        marginRight: 300,
        ...style,
      }}
    >
      {text}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3em', // Ajuste selon ton besoin
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.09) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default MaxLineText;

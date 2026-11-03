import * as React from 'react';

interface HeartSvgProps {
  isLiked?: boolean;
}

export const HeartSvg: React.FC<HeartSvgProps> = ({ isLiked = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} fill="none">
    <circle cx={15.5} cy={15.619} r={15} fill="#fff" />
    <g>
      <path
        fill={isLiked ? '#1E2538' : 'transparent'}
        stroke={isLiked ? '#1E2538' : '#1E2538'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M20.575 12.168a3.156 3.156 0 0 0-4.467 0l-.608.608-.609-.608a3.158 3.158 0 1 0-4.466 4.466l.608.608L15.5 21.71l4.466-4.467.609-.608a3.158 3.158 0 0 0 0-4.466v0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M8.5 10.119h14v13h-14z" />
      </clipPath>
    </defs>
  </svg>
);

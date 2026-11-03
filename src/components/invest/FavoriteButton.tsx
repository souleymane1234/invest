'use client';

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useFavorite } from '@/hooks/useFavorite';

type Props = {
  houseId: string;
  size?: 'small' | 'medium';
  light?: boolean;
};

export const FavoriteButton: React.FC<Props> = ({ houseId, size = 'small', light }) => {
  const { isFavorite, isPending, toggleFavorite } = useFavorite(houseId);

  return (
    <Tooltip title={isFavorite ? 'Retirer des favoris' : 'Suivre cette maison'}>
      <IconButton
        size={size}
        disabled={isPending}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          toggleFavorite();
        }}
        sx={{ backgroundColor: light ? 'rgba(255,255,255,0.9)' : 'transparent' }}
      >
        {isFavorite ? (
          <FavoriteRoundedIcon sx={{ color: '#e5484d' }} />
        ) : (
          <FavoriteBorderRoundedIcon sx={{ color: 'var(--main-color)' }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

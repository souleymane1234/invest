'use client';

import React from 'react';
import { Dialog, DialogContent, IconButton, Stack } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export const ProfileSheet: React.FC<Props> = ({
  open,
  title,
  onClose,
  children,
}) => {
  const { isDesktop } = useDeviceDetect();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={!isDesktop}
      maxWidth="md"
      fullWidth
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#F5FAFB',
            borderRadius: isDesktop ? '28px' : 0,
            maxHeight: isDesktop ? '90vh' : '100%',
          },
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ px: 2.5, py: 2, borderBottom: '1px solid var(--border-color)' }}
      >
        <h4 style={{ flex: 1 }}>{title}</h4>
        <IconButton onClick={onClose} aria-label="Fermer">
          <CloseRoundedIcon />
        </IconButton>
      </Stack>
      <DialogContent sx={{ px: 2.5, py: 2 }}>{children}</DialogContent>
    </Dialog>
  );
};

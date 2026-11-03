'use client';

import React, { useState } from 'react';
import { AssetImage as Image } from './AssetImage';
import { Dialog, IconButton } from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import { URLS_ASSETS } from '@/config';

type Props = {
  screenshots: string[];
  alt: string;
  layout?: 'carousel' | 'grid';
};

export const ScreenshotGallery: React.FC<Props> = ({
  screenshots,
  alt,
  layout = 'carousel',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const src = (name: string) => `${URLS_ASSETS.HOUSES}/${name}`;
  const move = (delta: number) =>
    setOpenIndex((index) =>
      index === null
        ? null
        : (index + delta + screenshots.length) % screenshots.length,
    );

  const thumbnail = (name: string, index: number) => (
    <Image
      src={src(name)}
      alt={`${alt} — capture ${index + 1}`}
      width={1280}
      height={800}
      className="clickable"
      onClick={() => setOpenIndex(index)}
      style={{ width: '100%', height: 'auto', borderRadius: 18 }}
    />
  );

  return (
    <>
      {layout === 'grid' ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 14,
          }}
        >
          {screenshots.map((name, index) => (
            <div key={name}>{thumbnail(name, index)}</div>
          ))}
        </div>
      ) : (
        <Swiper spaceBetween={14} slidesPerView="auto">
          {screenshots.map((name, index) => (
            <SwiperSlide key={name} style={{ width: 'min(80vw, 420px)' }}>
              {thumbnail(name, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Dialog
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: { sx: { backgroundColor: '#111623', borderRadius: '20px' } },
        }}
      >
        {openIndex !== null && (
          <div style={{ position: 'relative' }}>
            <Image
              src={src(screenshots[openIndex])}
              alt={`${alt} — capture ${openIndex + 1}`}
              width={1280}
              height={800}
              style={{ width: '100%', height: 'auto' }}
            />
            <IconButton
              onClick={() => setOpenIndex(null)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
              aria-label="Fermer"
            >
              <CloseRoundedIcon />
            </IconButton>
            {[-1, 1].map((delta) => (
              <IconButton
                key={delta}
                onClick={() => move(delta)}
                aria-label={delta < 0 ? 'Précédente' : 'Suivante'}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [delta < 0 ? 'left' : 'right']: 8,
                  color: 'white',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                }}
              >
                {delta < 0 ? (
                  <ChevronLeftRoundedIcon />
                ) : (
                  <ChevronRightRoundedIcon />
                )}
              </IconButton>
            ))}
            <span
              style={{
                position: 'absolute',
                bottom: 10,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                fontSize: 14,
              }}
            >
              {openIndex + 1} / {screenshots.length}
            </span>
          </div>
        )}
      </Dialog>
    </>
  );
};

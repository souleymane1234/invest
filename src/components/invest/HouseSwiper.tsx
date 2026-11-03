'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AssetImage as Image } from './AssetImage';
import { Skeleton } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useUserLevel } from '@/hooks/useUserLevel';
import { LevelBadge } from './LevelBadge';
import { URLS_ASSETS } from '@/config';
import { Routes } from '@/routes';
import { TradingHouse } from '@/types/TradingHouseType';
import { formatDuration, formatPercent } from '@/utils/invest_helper';
import { featuredPlan } from '@/utils/plan_helper';
import { Amount } from '@/components/invest/Amount';

const SLIDE_WIDTH = 'min(38vw, 148px)';
const DESKTOP_SLIDE_WIDTH = 320;

const HouseSlide: React.FC<{ house: TradingHouse }> = ({ house }) => {
  const { isLocked, levelOf } = useUserLevel();
  const locked = isLocked(house);
  const plan = featuredPlan(house.plans);

  return (
    <Link
      href={`${Routes.HOUSE}/${house.id}`}
      aria-label={`Investir chez ${house.name}`}
      className="house-slide"
      style={{
        display: 'block',
        position: 'relative',
        aspectRatio: '1',
        overflow: 'hidden',
      }}
    >
      <Image
        src={`${URLS_ASSETS.HOUSES}/${house.card || house.cover || house.logo}`}
        alt={house.name}
        fill
        sizes="(max-width: 768px) 38vw, 320px"
        style={{
          objectFit: 'cover',
          filter: locked ? 'grayscale(0.6) brightness(0.75)' : undefined,
        }}
      />
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(17,22,35,0.12) 0%, rgba(17,22,35,0.08) 42%, rgba(17,22,35,0.78) 78%, rgba(17,22,35,0.94) 100%)',
        }}
      />
      {locked && (
        <span style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
          <LevelBadge
            rank={house.requiredLevel}
            level={levelOf(house.requiredLevel)}
            locked
          />
        </span>
      )}
      <span
        className="house-slide__roi"
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderRadius: 30,
          fontWeight: 700,
          color: 'var(--success-color)',
          backgroundColor: 'var(--white-color)',
        }}
      >
        <TrendingUpRoundedIcon sx={{ fontSize: 14 }} />
        {formatPercent(plan?.expectedReturn ?? house.stats.annualRoi, true)}
      </span>
      <span
        className="house-slide__copy"
        style={{
          position: 'absolute',
          zIndex: 1,
          color: '#ffffff',
        }}
      >
        <span
          className="number-of-lines-1 house-slide__name"
          style={{
            display: 'block',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
          }}
        >
          {house.name}
        </span>
        {plan && (
          <>
            <span
              className="number-of-lines-1 house-slide__plan"
              style={{
                display: 'block',
                fontWeight: 600,
                color: '#f3f5f8',
                marginTop: 2,
              }}
            >
              {plan.name}
            </span>
            <span
              className="house-slide__price"
              style={{
                display: 'block',
                fontWeight: 600,
                color: '#ffffff',
                marginTop: 2,
              }}
            >
              Dès <Amount value={plan.minAmount} />
              {plan.durationDays ? ` · ${formatDuration(plan.durationDays)}` : ''}
            </span>
          </>
        )}
      </span>
      <span
        className="house-slide__invest"
        style={{
          position: 'absolute',
          zIndex: 1,
          borderRadius: 30,
          fontWeight: 600,
          color: 'var(--main-color)',
          backgroundColor: 'var(--accent-color)',
        }}
      >
        Investir
      </span>
    </Link>
  );
};

type Props = {
  houses: TradingHouse[];
  isLoading?: boolean;
};

const ArrowButton: React.FC<{
  direction: 'prev' | 'next';
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <button
    type="button"
    aria-label={direction === 'prev' ? 'Précédent' : 'Suivant'}
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '38%',
      transform: 'translateY(-50%)',
      [direction === 'prev' ? 'left' : 'right']: -6,
      zIndex: 10,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--white-color)',
      boxShadow: '0 4px 14px rgba(30, 37, 56, 0.25)',
    }}
  >
    {direction === 'prev' ? (
      <ChevronLeftRoundedIcon sx={{ color: 'var(--main-color)' }} />
    ) : (
      <ChevronRightRoundedIcon sx={{ color: 'var(--main-color)' }} />
    )}
  </button>
);

export const HouseSwiper: React.FC<Props> = ({ houses, isLoading }) => {
  const { isDesktop } = useDeviceDetect();
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const slideWidth = isDesktop ? DESKTOP_SLIDE_WIDTH : SLIDE_WIDTH;

  const updateEdges = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', gap: 14, overflow: 'hidden' }}>
        {[0, 1, 2, 3, 4].map((index) => (
          <Skeleton
            key={index}
            variant="rounded"
            sx={{
              flexShrink: 0,
              width: slideWidth,
              height: 'auto',
              aspectRatio: '1',
              borderRadius: '24px',
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      {isDesktop && !isBeginning && (
        <ArrowButton
          direction="prev"
          onClick={() => swiperRef.current?.slidePrev()}
        />
      )}
      <Swiper
        spaceBetween={isDesktop ? 18 : 8}
        slidesPerView="auto"
        style={{ marginRight: isDesktop ? 0 : -20 }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateEdges(swiper);
        }}
        onSlideChange={updateEdges}
        onResize={updateEdges}
        onReachEnd={updateEdges}
      >
        {houses.map((house) => (
          <SwiperSlide key={house.id} style={{ width: slideWidth }}>
            <HouseSlide house={house} />
          </SwiperSlide>
        ))}
      </Swiper>
      {isDesktop && !isEnd && (
        <ArrowButton
          direction="next"
          onClick={() => swiperRef.current?.slideNext()}
        />
      )}
    </div>
  );
};

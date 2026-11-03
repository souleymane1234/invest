'use client';

import { useEffect } from 'react';
import { stores } from '@/stores';
import { rankFromMinLevel } from '@/data/mapTradingHouse';

type Lockable =
  | number
  | {
      canInvest?: boolean;
      requiredLevel?: number;
      minStars?: number;
      meetsLevel?: boolean;
      meetsStars?: boolean;
    };

/** Palier et étoiles : source GET /level. Les avantages sont décidés au backend. */
export function useUserLevel() {
  const { user, isLoggedIn } = stores.useUserStore();
  const { levels, load, investorLevel } = stores.useLevelsStore();

  useEffect(() => {
    load();
  }, [load]);

  const rank = isLoggedIn
    ? investorLevel
      ? rankFromMinLevel(investorLevel.level)
      : (user?.levelRank ?? 1)
    : 1;
  const stars = isLoggedIn
    ? (investorLevel?.stars.total ?? user?.stars ?? 0)
    : 0;
  const levelOf = (levelRank: number) =>
    levels.find((level) => level.rank === levelRank);

  const isLocked = (target: Lockable) => {
    if (typeof target === 'number') return target > rank;
    if (typeof target.canInvest === 'boolean') return !target.canInvest;
    if (typeof target.meetsLevel === 'boolean' && !target.meetsLevel) {
      return true;
    }
    if (typeof target.meetsStars === 'boolean' && !target.meetsStars) {
      return true;
    }
    if ((target.minStars ?? 0) > stars) return true;
    return (target.requiredLevel ?? 1) > rank;
  };

  return {
    rank,
    stars,
    investorLevel,
    level: levelOf(rank),
    levels,
    levelOf,
    isLocked,
  };
}

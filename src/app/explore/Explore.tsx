'use client';

import React, { useMemo, useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import { components } from '@/components';
import { stores } from '@/stores';
import { HouseCard } from '@/components/invest/HouseCard';
import { MarketChip } from '@/components/invest/Badges';
import { EmptyState } from '@/components/invest/EmptyState';
import { RiskLevel, TradingHouse } from '@/types/TradingHouseType';
import { HouseGridSkeleton } from '../home/Dashboard';
import { useUserLevel } from '@/hooks/useUserLevel';
import { cheapestPlan } from '@/utils/plan_helper';

type SortKey =
  | 'annualRoi'
  | 'winRate'
  | 'risk'
  | 'investors'
  | 'rating'
  | 'minAmount';

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'annualRoi', label: 'Rendement 12 mois' },
  { value: 'winRate', label: 'Taux de gain' },
  { value: 'risk', label: 'Risque le plus faible' },
  { value: 'investors', label: 'Nombre d’investisseurs' },
  { value: 'rating', label: 'Meilleure note' },
  { value: 'minAmount', label: 'Ticket d’entrée le plus bas' },
];

const riskOrder: Record<RiskLevel, number> = { faible: 0, modéré: 1, élevé: 2 };
const risks: RiskLevel[] = ['faible', 'modéré', 'élevé'];

const minAmount = (house: TradingHouse) =>
  cheapestPlan(house.plans)?.minAmount ?? Number.POSITIVE_INFINITY;

const sorters: Record<SortKey, (a: TradingHouse, b: TradingHouse) => number> = {
  annualRoi: (a, b) => b.stats.annualRoi - a.stats.annualRoi,
  winRate: (a, b) => b.stats.winRate - a.stats.winRate,
  risk: (a, b) =>
    riskOrder[a.stats.riskLevel] - riskOrder[b.stats.riskLevel] ||
    a.stats.maxDrawdown - b.stats.maxDrawdown,
  investors: (a, b) => b.stats.investorsCount - a.stats.investorsCount,
  rating: (a, b) => b.stats.rating - a.stats.rating,
  minAmount: (a, b) => minAmount(a) - minAmount(b),
};

export const Explore: React.FC = () => {
  const { houses, markets, isLoading } = stores.useHousesStore();
  const [search, setSearch] = useState('');
  const [market, setMarket] = useState<string | null>(null);
  const [risk, setRisk] = useState<RiskLevel | null>(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [accessibleOnly, setAccessibleOnly] = useState(false);
  const { rank, isLocked } = useUserLevel();
  const [sort, setSort] = useState<SortKey>('annualRoi');

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    return houses
      .filter(
        (house) =>
          (!query ||
            house.name.toLowerCase().includes(query) ||
            house.tagline.toLowerCase().includes(query)) &&
          (!market || house.markets.some((item) => item.id === market)) &&
          (!risk || house.stats.riskLevel === risk) &&
          (!verifiedOnly || house.verified) &&
          (!accessibleOnly || !isLocked(house)),
      )
      .sort(sorters[sort]);
  }, [houses, search, market, risk, verifiedOnly, accessibleOnly, rank, sort]);

  const resetFilters = () => {
    setSearch('');
    setMarket(null);
    setRisk(null);
    setVerifiedOnly(false);
    setAccessibleOnly(false);
  };

  return (
    <main className="container" style={{ paddingBottom: 30 }}>
      <components.Header title="Explorer" showBasket={true} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          height: 50,
          marginTop: 10,
          marginBottom: 16,
          padding: '0 18px',
          borderRadius: 25,
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--white-color)',
        }}
      >
        <SearchRoundedIcon sx={{ color: 'var(--text-color)' }} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Rechercher une maison de trading"
          style={{
            flex: 1,
            height: '100%',
            border: 'none',
            outline: 'none',
            fontSize: 16,
            backgroundColor: 'transparent',
            color: 'var(--main-color)',
          }}
        />
      </div>

      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}
      >
        <MarketChip
          label="Tous les marchés"
          active={!market}
          onClick={() => setMarket(null)}
        />
        {markets.map((item) => (
          <MarketChip
            key={item.id}
            label={item.name}
            active={market === item.id}
            onClick={() => setMarket(market === item.id ? null : item.id)}
          />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 20,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {risks.map((item) => (
            <MarketChip
              key={item}
              label={`Risque ${item}`}
              active={risk === item}
              onClick={() => setRisk(risk === item ? null : item)}
            />
          ))}
          <MarketChip
            label="Vérifiées uniquement"
            active={verifiedOnly}
            onClick={() => setVerifiedOnly(!verifiedOnly)}
          />
          <MarketChip
            label={`Accessibles à mon palier (${rank})`}
            active={accessibleOnly}
            onClick={() => setAccessibleOnly(!accessibleOnly)}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="t14">Trier par</span>
          <Select
            size="small"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            sx={{
              borderRadius: '20px',
              backgroundColor: 'var(--white-color)',
              minWidth: 210,
            }}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      {!isLoading && (
        <p className="t14" style={{ marginBottom: 12 }}>
          {results.length} maison{results.length > 1 ? 's' : ''} trouvée
          {results.length > 1 ? 's' : ''}
        </p>
      )}

      {isLoading ? (
        <HouseGridSkeleton count={8} />
      ) : results.length === 0 ? (
        <EmptyState
          icon={<SearchOffRoundedIcon sx={{ fontSize: 48 }} />}
          title="Aucune maison trouvée"
          description="Aucune maison de trading ne correspond à vos critères. Essayez d’élargir votre recherche."
          actionLabel="Réinitialiser les filtres"
          onAction={resetFilters}
        />
      ) : (
        <Grid container spacing={2}>
          {results.map((house) => (
            <Grid key={house.id} size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}>
              <HouseCard house={house} />
            </Grid>
          ))}
        </Grid>
      )}
    </main>
  );
};

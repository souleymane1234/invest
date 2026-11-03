'use client';

import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { useUserLevel } from '@/hooks/useUserLevel';
import { useMoney } from '@/hooks/useMoney';
import { Routes } from '@/routes';
import { LevelBadge } from './LevelBadge';
import { InvestmentPlan } from '@/types/TradingHouseType';
import {
  formatDate,
  formatDuration,
  formatNumber,
  formatPercent,
} from '@/utils/invest_helper';
import { isPlanOpen, planWorkStartDate } from '@/utils/plan_helper';

type Props = {
  plan: InvestmentPlan;
  houseName?: string;
  onInvest: () => void;
};

export const PlanCard: React.FC<Props> = ({ plan, houseName, onInvest }) => {
  const router = useRouter();
  const { formatWithLocal } = useMoney();
  const { isLocked, levelOf } = useUserLevel();
  const locked = isLocked(plan);
  const open = isPlanOpen(plan);
  const requiredLevel = levelOf(plan.requiredLevel);
  const lockLabel =
    plan.requiredLevelLabel ||
    requiredLevel?.name ||
    `palier ${plan.requiredLevel}`;
  const workStart = planWorkStartDate(plan);
  const details = [
    `De ${formatWithLocal(plan.minAmount)} à ${formatWithLocal(plan.maxAmount)}`,
    plan.durationDays
      ? `Durée de placement : ${formatDuration(plan.durationDays)}`
      : null,
    plan.subscriptionEndDate
      ? `Souscription jusqu’au ${formatDate(plan.subscriptionEndDate)}`
      : null,
    workStart ? `Travail à partir du ${formatDate(workStart)}` : null,
    plan.maturityDate ? `Échéance le ${formatDate(plan.maturityDate)}` : null,
    plan.minStars
      ? `Minimum ${plan.minStars} étoile${plan.minStars > 1 ? 's' : ''}`
      : null,
    plan.investorsCount
      ? `${formatNumber(plan.investorsCount)} investisseur${plan.investorsCount > 1 ? 's' : ''}`
      : null,
    ...plan.features,
  ].filter((item): item is string => Boolean(item));

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: 20,
        borderRadius: 24,
        backgroundColor: plan.popular
          ? 'var(--main-color)'
          : 'var(--white-color)',
        border: `1px solid ${plan.popular ? 'var(--main-color)' : 'var(--border-color)'}`,
        opacity: open ? 1 : 0.72,
      }}
    >
      {locked && (
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <LevelBadge rank={plan.requiredLevel} level={requiredLevel} locked />
        </div>
      )}
      {plan.popular && open && (
        <span
          style={{
            position: 'absolute',
            top: -12,
            right: 20,
            padding: '2px 12px',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            backgroundColor: 'var(--accent-color)',
            color: 'var(--main-color)',
          }}
        >
          Populaire
        </span>
      )}
      {!open && (
        <span
          style={{
            position: 'absolute',
            top: -12,
            right: 20,
            padding: '2px 12px',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            backgroundColor: 'var(--danger-color)',
            color: 'var(--white-color)',
          }}
        >
          Fermée
        </span>
      )}
      <div>
        {houseName && (
          <span
            className="t12"
            style={{ color: plan.popular ? '#c8cdd9' : undefined }}
          >
            {houseName}
          </span>
        )}
        <h4 style={{ color: plan.popular ? 'var(--white-color)' : undefined }}>
          {plan.name}
        </h4>
        {plan.description && (
          <p
            className="t14"
            style={{
              marginTop: 4,
              color: plan.popular ? '#c8cdd9' : undefined,
            }}
          >
            {plan.description}
          </p>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span
          style={{
            fontSize: 34,
            fontWeight: 800,
            lineHeight: 1,
            color: plan.popular
              ? 'var(--accent-color)'
              : 'var(--success-color)',
          }}
        >
          {formatPercent(plan.expectedReturn, true)}
        </span>
        {plan.durationDays > 0 && (
          <span
            className="t14"
            style={{ color: plan.popular ? '#c8cdd9' : undefined }}
          >
            en {formatDuration(plan.durationDays)}
          </span>
        )}
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {details.map((feature) => (
          <li
            key={feature}
            className="t14"
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'flex-start',
              color: plan.popular ? 'var(--white-color)' : undefined,
            }}
          >
            <CheckCircleRoundedIcon
              sx={{ fontSize: 18, mt: '2px', color: 'var(--accent-color)' }}
            />
            {feature}
          </li>
        ))}
      </ul>
      {locked ? (
        <>
          <p
            className="t12"
            style={{
              marginTop: 'auto',
              color: plan.popular ? '#c8cdd9' : undefined,
            }}
          >
            Formule réservée aux investisseurs {lockLabel} ou supérieur.
          </p>
          <Button
            label={`Débloquer : ${lockLabel}`}
            colorScheme={plan.popular ? 'primary' : 'secondary'}
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              router.push(Routes.LEVELS);
            }}
          />
        </>
      ) : !open ? (
        <p
          className="t14"
          style={{
            marginTop: 'auto',
            color: plan.popular ? '#c8cdd9' : undefined,
          }}
        >
          La souscription à cette formule est close.
        </p>
      ) : (
        <Button
          label="Investir"
          containerStyle={{ marginTop: 'auto' }}
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            onInvest();
          }}
        />
      )}
    </div>
  );
};

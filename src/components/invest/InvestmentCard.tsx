import React from 'react';
import Link from 'next/link';
import { AssetImage as Image } from './AssetImage';
import { LinearProgress } from '@mui/material';
import { URLS_ASSETS } from '@/config';
import { Routes } from '@/routes';
import {
  INVESTMENT_STATUS_LABEL,
  Investment,
} from '@/types/InvestmentType';
import { Amount } from '@/components/invest/Amount';
import {
  expectedGain,
  formatDate,
  formatPercent,
  hasWorkStarted,
  investmentProgress,
  investmentWorkStart,
  isInvestmentActive,
  remainingDays,
} from '@/utils/invest_helper';

type Props = {
  investment: Investment;
};

const Line: React.FC<{
  label: string;
  value: React.ReactNode;
  color?: string;
}> = ({ label, value, color }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span className="t12">{label}</span>
    <span style={{ fontWeight: 700, color: color ?? 'var(--main-color)' }}>
      {value}
    </span>
  </div>
);

export const InvestmentCard: React.FC<Props> = ({ investment }) => {
  const active = isInvestmentActive(investment);
  const working = hasWorkStarted(investment);
  const progress = investmentProgress(investment);
  const days = remainingDays(investment);
  const workStart = investmentWorkStart(investment);
  const statusLabel =
    INVESTMENT_STATUS_LABEL[investment.status] ??
    (active ? 'En cours' : 'Terminé');

  return (
    <Link
      href={`${Routes.INVESTMENT}/${investment.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: 18,
        borderRadius: 24,
        backgroundColor: 'var(--white-color)',
        border: '1px solid var(--border-color)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Image
          src={`${URLS_ASSETS.HOUSES}/${investment.houseLogo}`}
          alt={investment.houseName}
          width={44}
          height={44}
          style={{ borderRadius: 12 }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <h5 className="number-of-lines-1">{investment.houseName}</h5>
          <span className="t12">
            Formule {investment.planName} · {formatPercent(investment.expectedReturn, true)}
          </span>
        </div>
        <span
          style={{
            padding: '2px 10px',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            color:
              investment.status === 'CANCELED'
                ? 'var(--danger-color)'
                : active
                  ? 'var(--success-color)'
                  : 'var(--text-color)',
            backgroundColor:
              investment.status === 'CANCELED'
                ? 'var(--danger-color-light, #fde8e8)'
                : active
                  ? 'var(--success-color-light)'
                  : 'var(--neon-white)',
          }}
        >
          {statusLabel}
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <Line
          label="Montant investi"
          value={<Amount value={investment.amount} />}
        />
        <Line
          label="Gains versés"
          value={<Amount value={investment.paidAmount ?? 0} signed />}
          color="var(--success-color)"
        />
        <Line
          label="À l’échéance"
          value={
            <Amount
              value={
                investment.amount +
                expectedGain(investment.amount, investment.expectedReturn)
              }
            />
          }
        />
      </div>

      <div>
        <LinearProgress
          variant="determinate"
          value={progress * 100}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#eef0f5',
            '& .MuiLinearProgress-bar': { backgroundColor: 'var(--accent-color)' },
          }}
        />
        <div
          style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}
        >
          <span className="t12">
            {working
              ? `Début du travail : ${formatDate(workStart)}`
              : `Travail à partir du ${formatDate(workStart)}`}
          </span>
          <span className="t12">
            {active
              ? working
                ? `${days} jour${days > 1 ? 's' : ''} restant${days > 1 ? 's' : ''} · échéance ${formatDate(investment.endDate)}`
                : `Souscription jusqu’au ${formatDate(investment.subscriptionEndDate ?? workStart)} · échéance ${formatDate(investment.endDate)}`
              : `Terminé le ${formatDate(investment.endDate)}`}
          </span>
        </div>
      </div>
    </Link>
  );
};

import { InvestmentPlan } from '@/types/TradingHouseType';

const DAY_MS = 24 * 60 * 60 * 1000;

export const endOfLocalDay = (value: string): number => {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return Number.NaN;
  date.setHours(23, 59, 59, 999);
  return date.getTime();
};

/** La souscription est encore ouverte ce jour-là (inclus). */
export const isSubscriptionWindowOpen = (
  subscriptionEndDate?: string,
): boolean => {
  if (!subscriptionEndDate) return false;
  const end = endOfLocalDay(subscriptionEndDate);
  return Number.isFinite(end) && Date.now() <= end;
};

/** Début du travail : après la souscription, sur la fenêtre maturité − durée. */
export const planWorkStartDate = (
  plan: Pick<
    InvestmentPlan,
    'subscriptionEndDate' | 'maturityDate' | 'durationDays'
  >,
): Date | undefined => {
  if (plan.maturityDate && plan.durationDays > 0) {
    const maturity = new Date(plan.maturityDate).getTime();
    if (Number.isFinite(maturity)) {
      return new Date(maturity - plan.durationDays * DAY_MS);
    }
  }
  if (plan.subscriptionEndDate) {
    const end = new Date(plan.subscriptionEndDate);
    if (Number.isFinite(end.getTime())) return end;
  }
  return undefined;
};

export const isPlanOpen = (plan: InvestmentPlan): boolean => {
  if (plan.isOpen === false) return false;
  if (plan.status && plan.status.toUpperCase() !== 'OPEN') return false;
  if (
    plan.subscriptionEndDate &&
    Date.now() > endOfLocalDay(plan.subscriptionEndDate)
  ) {
    return false;
  }
  return true;
};

export const featuredPlan = (
  plans: InvestmentPlan[],
): InvestmentPlan | undefined => {
  const open = plans.filter(isPlanOpen);
  const list = open.length ? open : plans;
  return [...list].sort((a, b) => b.expectedReturn - a.expectedReturn)[0];
};

export const cheapestPlan = (
  plans: InvestmentPlan[],
): InvestmentPlan | undefined => {
  const open = plans.filter(isPlanOpen);
  const list = open.length ? open : plans;
  if (!list.length) return undefined;
  return list.reduce((min, plan) =>
    plan.minAmount < min.minAmount ? plan : min,
  );
};

export const planMaturityDate = (plan: InvestmentPlan): Date =>
  plan.maturityDate
    ? new Date(plan.maturityDate)
    : new Date(Date.now() + plan.durationDays * 24 * 60 * 60 * 1000);

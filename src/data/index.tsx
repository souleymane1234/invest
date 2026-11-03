import { getReviews } from './getReviews';
import { getPromocodes } from './getPromocodes';
import { getOnboarding } from './getOnboarding';
import { getNotifications } from './getNotifications';
import { getUser } from './getUser';
import { getHouseById, getHouses, getMarkets, rateHouse } from './houses';
import {
  getInvestmentById,
  getInvestmentPayouts,
  getInvestments,
  getTransactions,
  invest,
  toggleFavorite,
} from './investments';
import { getInvestorLevel, getLevels, getLevelStatus } from './levels';
import { getCurrencyRates } from './currencies';
import {
  getReferral,
  getReferralDividends,
  getReferralFilleuls,
  getReferralLevels,
} from './referral';
import {
  depositWallet,
  getWallet,
  getWalletQuote,
  getWalletTransactionById,
  getWalletTransactions,
  withdrawWallet,
} from './wallet';

export const data = {
  getReviews,
  getPromocodes,
  getOnboarding,
  getNotifications,
  getUser,
  getHouses,
  getHouseById,
  getMarkets,
  rateHouse,
  invest,
  getInvestments,
  getInvestmentById,
  getInvestmentPayouts,
  getTransactions,
  toggleFavorite,
  getLevels,
  getLevelStatus,
  getInvestorLevel,
  getCurrencyRates,
  getWallet,
  getWalletQuote,
  getWalletTransactionById,
  getWalletTransactions,
  depositWallet,
  withdrawWallet,
  getReferral,
  getReferralLevels,
  getReferralFilleuls,
  getReferralDividends,
};

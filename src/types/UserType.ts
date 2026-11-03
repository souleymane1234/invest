import { Investment, Transaction } from './InvestmentType';
import { NotificationType } from './NotificationType';

export type UserType = {
  id: string;
  full_name: string;
  pseudo: string;
  email: string | null;
  phone_number: string;
  profil: string;
  /** Devise des montants (XOF = franc CFA). */
  currency?: string;
  /** Montant actuellement investi dans des formules en cours. */
  activeBalance?: number;
  /** Gains versés, disponibles au retrait (`availableBalance` API). */
  availableBalance?: number;
  /** Code de parrainage à partager. */
  referralCode?: string;
  notifications?: NotificationType[];
  investments?: Investment[];
  transactions?: Transaction[];
  favoriteHouseIds?: string[];
  levelRank?: number;
  levelLabel?: string;
  /** Étoiles investisseur (GET /trading-house/:id → investorLevel.stars). */
  stars?: number;
  referredBy?: string;
  created_at?: string;
};

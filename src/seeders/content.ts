import { OnboardingType, PromocodeType, ReviewType } from '@/types';
import {
  NotificationPriorityEnum,
  NotificationType,
} from '@/types/NotificationType';

export function buildSeedNotifications(): NotificationType[] {
  const hoursAgo = (hours: number) =>
    new Date(Date.now() - hours * 60 * 60 * 1000);
  return [
    {
      id: 'notif-1',
      message:
        'Bienvenue ! Comparez les maisons de trading et choisissez la formule qui vous correspond.',
      isRead: false,
      priority: NotificationPriorityEnum.MEDIUM,
      created_at: hoursAgo(2),
      updated_at: hoursAgo(2),
    },
    {
      id: 'notif-2',
      message:
        'Nouvelle formule « Quant+ » chez Orion Quant : jusqu’à 32 % en 90 jours.',
      isRead: false,
      priority: NotificationPriorityEnum.PROMOTIONAL,
      created_at: hoursAgo(20),
      updated_at: hoursAgo(20),
    },
    {
      id: 'notif-3',
      message:
        'Conseil : diversifiez vos placements entre plusieurs maisons pour réduire le risque.',
      isRead: true,
      priority: NotificationPriorityEnum.LOW,
      created_at: hoursAgo(72),
      updated_at: hoursAgo(72),
    },
  ];
}

export const seedReviews: ReviewType[] = [
  {
    id: 1,
    name: 'Koffi Yao',
    rating: 5,
    comment: 'Très pratique pour comparer les maisons de trading avant d’investir.',
    photo: '/seed/avatars/avatar_1.jpg',
    date: '12/10/2026',
  },
  {
    id: 2,
    name: 'Awa Traoré',
    rating: 4,
    comment: 'Le paiement par mobile money est simple et rapide.',
    photo: '/seed/avatars/avatar_2.jpg',
    date: '08/10/2026',
  },
  {
    id: 3,
    name: 'Moussa Diallo',
    rating: 5,
    comment: 'Je suis mes gains en temps réel depuis mon portefeuille.',
    photo: '/seed/avatars/avatar_3.jpg',
    date: '01/10/2026',
  },
];

export const seedPromocodes: PromocodeType[] = [
  {
    id: 1,
    name: 'Bienvenue',
    code: 'WELCOME10',
    image: '',
    expiry: '31/12/2026',
    discount: 10,
  },
  {
    id: 2,
    name: 'Parrainage',
    code: 'PARRAIN30',
    image: '',
    expiry: '30/11/2026',
    discount: 30,
  },
];

export const seedOnboarding: OnboardingType[] = [
  {
    id: 1,
    title1: 'Comparez',
    title2: 'les maisons',
    image: '/assets/onboarding/01.png',
    description1: 'Taux de gain, rendement, risque :',
    description2: 'toutes les stats au même endroit.',
  },
  {
    id: 2,
    title1: 'Investissez',
    title2: 'simplement',
    image: '/assets/onboarding/02.png',
    description1: 'Choisissez une formule',
    description2: 'et payez par mobile money.',
  },
  {
    id: 3,
    title1: 'Suivez',
    title2: 'vos gains',
    image: '/assets/onboarding/03.png',
    description1: 'Votre portefeuille et vos transactions',
    description2: 'en temps réel.',
  },
];

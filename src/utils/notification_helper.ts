import {
  NotificationPriorityEnum,
  NotificationType,
} from '@/types/NotificationType';

export const notificationTitle = (
  notificationPioriry: NotificationPriorityEnum,
): string => {
  switch (notificationPioriry) {
    case NotificationPriorityEnum.PROMOTIONAL:
      return 'Promotion';
    case NotificationPriorityEnum.LOW:
      return 'Conseil';
    case NotificationPriorityEnum.HIGH:
      return 'Important';
    case NotificationPriorityEnum.MEDIUM:
      return 'Information';
    default:
      return notificationPioriry;
  }
};

export const sortNotifications = (
  notifications: NotificationType[],
): NotificationType[] => {
  return [...notifications].sort((a, b) => {
    // D'abord trier par statut de lecture (non lues en premier)
    if (a.isRead !== b.isRead) {
      return a.isRead ? 1 : -1;
    }

    // Pour les notifications de même statut, trier par date décroissante
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
};

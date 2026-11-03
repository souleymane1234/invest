export type NotificationType = {
  id: string;
  message: string;
  isRead: boolean;
  priority: NotificationPriorityEnum;
  created_at: Date;
  updated_at: Date;
};

export enum NotificationPriorityEnum {
  LOW = 'low', // Notification non urgente (ex: suggestion de contenu),
  MEDIUM = 'medium', // Notification standard (ex: mise à jour importante),
  PROMOTIONAL = 'promo', // Notification marketing/promotionnelle
  HIGH = 'high', // Notification urgente (ex: activité suspecte)
}

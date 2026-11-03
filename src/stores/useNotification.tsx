'use client';

import { create } from 'zustand';
import { isBrowser } from '@/lib/utils';
import { NotificationType } from '@/types/NotificationType';
import {
  deleteAllNotificationsIndexDb,
  getAllNotificationIndexDb,
  saveAllNotificationIndexDb,
} from '@/storages/indexed_db_service';
import { readAllNotificationUser } from '@/data/getNotifications';

type NotificationStoreType = {
  notifications: NotificationType[];
  setNotifications: (notifications: NotificationType[]) => void;
  clear: () => void;
  readAllNotification: (notifications: NotificationType[]) => void;
  init: () => void;
};

export const useNotificationStore = create<NotificationStoreType>((set) => ({
  notifications: [],
  setNotifications: async (notifications: NotificationType[]) => {
    if (isBrowser()) {
      await saveAllNotificationIndexDb(notifications);
    }
    set({ notifications });
  },
  readAllNotification: async (notifications: NotificationType[]) => {
    if (!isBrowser()) return;
    const response = await readAllNotificationUser();
    if (response.etat === false) return;
    const notifs = notifications.map((notification) => ({
      ...notification,
      isRead: true,
    }));
    await saveAllNotificationIndexDb(notifs);
    set({ notifications: notifs });
  },
  clear: async () => {
    if (isBrowser()) {
      await deleteAllNotificationsIndexDb();
    }
    set({ notifications: [] });
  },
  init: async () => {
    if (isBrowser()) {
      const notifs = await getAllNotificationIndexDb();
      set({ notifications: notifs });
    }
  },
}));

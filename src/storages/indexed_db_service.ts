import {
  NotificationPriorityEnum,
  NotificationType,
} from '@/types/NotificationType';
import { TradingHouse } from '@/types/TradingHouseType';
import { openDB, deleteDB, DBSchema, IDBPDatabase } from 'idb';

interface InvestDB extends DBSchema {
  houses: {
    key: string;
    value: TradingHouse;
  };
  notifications: {
    key: string;
    value: NotificationType;
    indexes: {
      'by-id': string;
      'by-priority': NotificationPriorityEnum;
    };
  };
}

const DATABASE_NAME = 'InvestHub';
const DATABASE_VERSION = 1;
const OBJECT_STORE_HOUSES = 'houses';
const OBJECT_STORE_NOTIFICATIONS = 'notifications';

const initDB = async (): Promise<IDBPDatabase<InvestDB>> => {
  return openDB<InvestDB>(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(OBJECT_STORE_HOUSES)) {
        db.createObjectStore(OBJECT_STORE_HOUSES, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(OBJECT_STORE_NOTIFICATIONS)) {
        const store = db.createObjectStore(OBJECT_STORE_NOTIFICATIONS, {
          keyPath: 'id',
        });
        store.createIndex('by-id', 'id');
        store.createIndex('by-priority', 'priority');
      }
    },
  });
};

// --- Maisons de trading ---
const saveAllHousesIndexDb = async (houses: TradingHouse[]): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(OBJECT_STORE_HOUSES, 'readwrite');
  const store = tx.objectStore(OBJECT_STORE_HOUSES);
  await store.clear();
  for (const house of houses) {
    await store.put(house);
  }
  await tx.done;
};

const getAllHousesIndexDb = async (): Promise<TradingHouse[]> => {
  const db = await initDB();
  return db.getAll(OBJECT_STORE_HOUSES);
};

const getHouseByIdIndexDb = async (
  id: string,
): Promise<TradingHouse | undefined> => {
  const db = await initDB();
  return db.get(OBJECT_STORE_HOUSES, id);
};

// --- Notifications ---
const saveAllNotificationIndexDb = async (
  notifications: NotificationType[],
): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(OBJECT_STORE_NOTIFICATIONS, 'readwrite');
  const store = tx.objectStore(OBJECT_STORE_NOTIFICATIONS);
  await store.clear();
  for (const notification of notifications) {
    await store.put(notification);
  }
  await tx.done;
};

const getAllNotificationIndexDb = async (): Promise<NotificationType[]> => {
  const db = await initDB();
  return db.getAll(OBJECT_STORE_NOTIFICATIONS);
};

const deleteAllNotificationsIndexDb = async (): Promise<void> => {
  const db = await initDB();
  await db.clear(OBJECT_STORE_NOTIFICATIONS);
};

const resetDatabaseIndexDb = async (): Promise<void> => {
  await deleteDB(DATABASE_NAME);
};

export {
  initDB,
  saveAllHousesIndexDb,
  getAllHousesIndexDb,
  getHouseByIdIndexDb,
  saveAllNotificationIndexDb,
  getAllNotificationIndexDb,
  deleteAllNotificationsIndexDb,
  resetDatabaseIndexDb,
};

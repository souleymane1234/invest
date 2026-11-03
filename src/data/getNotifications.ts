import { LocalStorageService } from '@/storages/local_storage_service';
import { URLS, USE_SEED_AUTH } from '../config';
import * as seed from '@/seeders/api';
import {
  NotificationPriorityEnum,
  NotificationType,
} from '@/types/NotificationType';
import { AuthResponse } from '@/types';

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object'
    ? (value as Record<string, unknown>)
    : null;
}

function asDate(value: unknown): Date {
  if (value instanceof Date) return value;
  const parsed = new Date(String(value ?? ''));
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function mapPriority(value: unknown): NotificationPriorityEnum {
  const raw = String(value ?? '').toLowerCase();
  if (raw === NotificationPriorityEnum.HIGH || raw === 'urgente') {
    return NotificationPriorityEnum.HIGH;
  }
  if (raw === NotificationPriorityEnum.LOW || raw === 'conseil') {
    return NotificationPriorityEnum.LOW;
  }
  if (
    raw === NotificationPriorityEnum.PROMOTIONAL ||
    raw === 'promotional' ||
    raw === 'promotion'
  ) {
    return NotificationPriorityEnum.PROMOTIONAL;
  }
  return NotificationPriorityEnum.MEDIUM;
}

function mapNotification(raw: unknown, index: number): NotificationType | null {
  const item = asRecord(raw);
  if (!item) return null;

  const id = String(item.id ?? item._id ?? `notif-${index}`);
  const message = String(
    item.message ?? item.content ?? item.title ?? item.text ?? '',
  ).trim();
  if (!id) return null;

  const readAt = item.read_at ?? item.readAt;
  const isRead = Boolean(
    item.isRead ??
    item.is_read ??
    item.read ??
    (readAt != null && readAt !== ''),
  );

  return {
    id,
    message,
    isRead,
    priority: mapPriority(item.priority),
    created_at: asDate(item.created_at ?? item.createdAt ?? item.created),
    updated_at: asDate(
      item.updated_at ?? item.updatedAt ?? item.updated ?? item.created_at,
    ),
  };
}

function mapNotifications(result: unknown): NotificationType[] {
  const list = Array.isArray(result)
    ? result
    : Array.isArray(asRecord(result)?.notifications)
      ? (asRecord(result)!.notifications as unknown[])
      : Array.isArray(asRecord(result)?.data)
        ? (asRecord(result)!.data as unknown[])
        : [];

  return list
    .map(mapNotification)
    .filter((item): item is NotificationType => item !== null);
}

function errorFromBody(errorData: unknown, fallback: string): string {
  const body = asRecord(errorData);
  const message = body?.message ?? body?.error;
  if (Array.isArray(message)) return message.join(' ');
  return typeof message === 'string' && message ? message : fallback;
}

/** Notifications de l'investisseur connecté (`GET /notification`). */
export async function getNotifications(): Promise<NotificationType[]> {
  if (USE_SEED_AUTH) return seed.getNotifications();
  if (typeof window === 'undefined') return [];

  const token = LocalStorageService.getToken();
  if (!token) return [];

  const response = await fetch(URLS.GET_NOTIFICATIONS, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  });
  if (response.status === 401 || response.status === 403) return [];
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const json = (await response.json()) as AuthResponse;
  if (json.etat === false) return [];
  return mapNotifications(json.result);
}

/** Marquer toutes les notifications comme lues (`PUT /notification`). */
export async function readAllNotificationUser(): Promise<AuthResponse> {
  if (USE_SEED_AUTH) return seed.readAllNotificationUser();
  if (typeof window === 'undefined') {
    return { etat: false, error: ['Utilisateur non connecté'] };
  }

  const token = LocalStorageService.getToken();
  if (!token) return { etat: false, error: ['Utilisateur non connecté'] };

  const response = await fetch(URLS.GET_NOTIFICATIONS, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    return {
      etat: false,
      error: [
        errorFromBody(
          errorData,
          'Impossible de marquer les notifications comme lues',
        ),
      ],
    };
  }

  const data = (await response.json().catch(() => ({}))) as AuthResponse;
  return {
    etat: data.etat ?? true,
    message: data.message,
    result: data.result,
  };
}

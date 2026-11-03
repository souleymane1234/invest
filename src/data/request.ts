import { LocalStorageService } from '@/storages/local_storage_service';

export async function apiRequest<T>(
  url: string,
  init: { method?: string; body?: unknown } = {},
): Promise<T> {
  const token =
    typeof window !== 'undefined' ? LocalStorageService.getToken() : null;
  const response = await fetch(url, {
    method: init.method ?? 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
    ...(init.body !== undefined && { body: JSON.stringify(init.body) }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.message || `HTTP error! status: ${response.status}`,
    );
  }
  return (await response.json()) as T;
}

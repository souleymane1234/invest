import { URLS, USE_SEED_DATA } from '../config';
import * as seed from '@/seeders/api';

export async function getPromocodes() {
  if (USE_SEED_DATA) return seed.getPromocodes();

  const response = await fetch(URLS.GET_PROMOCODES);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.promocodes;
}

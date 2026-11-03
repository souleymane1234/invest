import { URLS, USE_SEED_DATA } from '../config';
import * as seed from '@/seeders/api';

export async function getOnboarding() {
  if (USE_SEED_DATA) return seed.getOnboarding();

  const response = await fetch(URLS.GET_ONBOARDING);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.onboarding;
}

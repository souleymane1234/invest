import { URLS, USE_SEED_DATA } from '../config';
import * as seed from '@/seeders/api';

export async function getReviews() {
  if (USE_SEED_DATA) return seed.getReviews();

  const response = await fetch(URLS.GET_REVIEWS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.reviews;
}

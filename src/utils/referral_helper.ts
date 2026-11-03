import { Routes } from '@/routes';

export function referralShareUrl(link: string, code: string): string {
  if (typeof window === 'undefined') {
    return link.startsWith('?') ? `${Routes.SIGN_IN}${link}` : link || Routes.SIGN_IN;
  }
  const origin = window.location.origin;
  if (link.startsWith('http')) return link;
  if (link.startsWith('?')) return `${origin}${Routes.SIGN_IN}${link}`;
  if (link.startsWith('/')) return `${origin}${link}`;
  return `${origin}${Routes.SIGN_IN}?ref=${encodeURIComponent(code)}`;
}

export function captureReferralCodeFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  const ref = new URLSearchParams(window.location.search).get('ref');
  const code = ref?.trim().toUpperCase();
  if (!code) return sessionStorage.getItem('referral_ref');
  sessionStorage.setItem('referral_ref', code);
  return code;
}

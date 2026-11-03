export const APP_NAME = 'InvestHub';
export const APP_DESCRIPTION =
  'Comparez les maisons de trading, leurs performances et leurs formules, puis investissez en quelques clics.';

// Code d'accès (sert de mot de passe) : chiffres uniquement
export const ACCESS_CODE_MIN_LENGTH = 4;
export const ACCESS_CODE_MAX_LENGTH = 6;

// Favoris, paliers catalogue, contenus BoozGame : seeder tant que
// NEXT_PUBLIC_USE_SEED_DATA !== 'false'.
export const USE_SEED_DATA = process.env.NEXT_PUBLIC_USE_SEED_DATA !== 'false';

// Investissements (GET/POST /investment) : vraie API,
// sauf si NEXT_PUBLIC_USE_SEED_INVESTMENTS === 'true'.
export const USE_SEED_INVESTMENTS =
  process.env.NEXT_PUBLIC_USE_SEED_INVESTMENTS === 'true';

// Portefeuille (GET /wallet, /wallet/transactions, /wallet/quote) : vraie API,
// sauf si NEXT_PUBLIC_USE_SEED_WALLET === 'true'.
export const USE_SEED_WALLET =
  process.env.NEXT_PUBLIC_USE_SEED_WALLET === 'true';

// Parrainage (GET /referral, /referral/levels, /filleuls, /dividends) : vraie API,
// sauf si NEXT_PUBLIC_USE_SEED_REFERRAL === 'true'.
export const USE_SEED_REFERRAL =
  process.env.NEXT_PUBLIC_USE_SEED_REFERRAL === 'true';

// Maisons de trading (/trading-house) : vraie API,
// sauf si NEXT_PUBLIC_USE_SEED_HOUSES === 'true'.
export const USE_SEED_HOUSES =
  process.env.NEXT_PUBLIC_USE_SEED_HOUSES === 'true';

// Connexion, profil et notifications (/user/auth/*, /user, /notification) :
// vraie API, sauf si NEXT_PUBLIC_USE_SEED_AUTH === 'true'.
// Les taux GET /currency/rates sont publics, toujours la vraie API.
export const USE_SEED_AUTH = process.env.NEXT_PUBLIC_USE_SEED_AUTH === 'true';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://api.tradeshouses.com';

const PROJECT_NAME = 'brainnest';
const MAIN_URL = `https://george-fx.github.io/APIs/${PROJECT_NAME}`;
const BASE_URL = `${API_ORIGIN}/api/v1`;
const base_url_asset =
  process.env.NEXT_PUBLIC_BASE_URL_ASSET || `${API_ORIGIN}/uploads`;

const GET_REVIEWS = `${MAIN_URL}/api/reviews.json`;
const ANONYMOUS_USER = `${BASE_URL}/user/auth/anonym-user`;
const AUTHENTICATION = `${BASE_URL}/user/auth/authentification`;
const VERIFY_AUTHENTICATION = `${BASE_URL}/user/auth/valid-authentification`;
const ACCESS_CODE = `${BASE_URL}/user/access-code`;
const GET_HOUSES = `${BASE_URL}/trading-house`;
const GET_HOUSE_CATEGORIES = `${BASE_URL}/trading-house/category`;
const GET_MARKETS = GET_HOUSE_CATEGORIES;
const INVESTMENTS = `${BASE_URL}/investment`;
const WALLET = `${BASE_URL}/wallet`;
const TRANSACTIONS = `${WALLET}/transactions`;
const FAVORITES = `${BASE_URL}/user/favorites`;
const LEVELS = `${BASE_URL}/levels`;
const USER_LEVEL = `${BASE_URL}/level`;
const GET_NOTIFICATIONS = `${BASE_URL}/notification`;
const GET_CURRENCY_RATES = `${BASE_URL}/currency/rates`;
const GET_USER = `${BASE_URL}/user`;
const REFERRAL = `${BASE_URL}/referral`;
const GENERATE_REGISTRATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/generate-registration-biometrics`;
const GENERATE_AUTHENTICATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/generate-authentication-biometrics`;
const REGISTRATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/registration-biometrics`;
const AUTHENTICATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/authentication-biometrics`;
const GET_PROMOCODES = `${MAIN_URL}/api/promocodes.json`;
const GET_ONBOARDING = `${MAIN_URL}/api/onboarding.json`;

export const URLS = {
  MAIN_URL,
  GET_REVIEWS,
  GET_HOUSES,
  GET_HOUSE_CATEGORIES,
  GET_MARKETS,
  INVESTMENTS,
  WALLET,
  TRANSACTIONS,
  FAVORITES,
  LEVELS,
  USER_LEVEL,
  GET_NOTIFICATIONS,
  GET_CURRENCY_RATES,
  GET_USER,
  REFERRAL,
  GENERATE_REGISTRATION_BIOMETRICS_OPTIONS,
  GENERATE_AUTHENTICATION_BIOMETRICS_OPTIONS,
  REGISTRATION_BIOMETRICS_OPTIONS,
  AUTHENTICATION_BIOMETRICS_OPTIONS,
  GET_ONBOARDING,
  GET_PROMOCODES,
  AUTHENTICATION,
  VERIFY_AUTHENTICATION,
  ACCESS_CODE,
  ANONYMOUS_USER,
};

export const apiUrlAsset = {
  avatars: USE_SEED_DATA ? '/seed/avatars' : `${base_url_asset}/avatars`,
  tradingHouses: USE_SEED_HOUSES
    ? '/seed/houses'
    : `${base_url_asset}/trading-houses`,
};

export const URLS_ASSETS = {
  HOUSES: apiUrlAsset.tradingHouses,
  AVATARS: apiUrlAsset.avatars,
};

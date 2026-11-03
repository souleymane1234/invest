module.exports = [
"[project]/invest/src/app/favicon.ico.mjs { IMAGE => \"[project]/invest/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/invest/src/app/favicon.ico.mjs { IMAGE => \"[project]/invest/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/invest/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/invest/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/invest/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/invest/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCESS_CODE_MAX_LENGTH",
    ()=>ACCESS_CODE_MAX_LENGTH,
    "ACCESS_CODE_MIN_LENGTH",
    ()=>ACCESS_CODE_MIN_LENGTH,
    "APP_DESCRIPTION",
    ()=>APP_DESCRIPTION,
    "APP_NAME",
    ()=>APP_NAME,
    "URLS",
    ()=>URLS,
    "URLS_ASSETS",
    ()=>URLS_ASSETS,
    "USE_SEED_AUTH",
    ()=>USE_SEED_AUTH,
    "USE_SEED_DATA",
    ()=>USE_SEED_DATA,
    "USE_SEED_HOUSES",
    ()=>USE_SEED_HOUSES,
    "USE_SEED_INVESTMENTS",
    ()=>USE_SEED_INVESTMENTS,
    "USE_SEED_REFERRAL",
    ()=>USE_SEED_REFERRAL,
    "USE_SEED_WALLET",
    ()=>USE_SEED_WALLET,
    "apiUrlAsset",
    ()=>apiUrlAsset
]);
const APP_NAME = 'InvestHub';
const APP_DESCRIPTION = 'Comparez les maisons de trading, leurs performances et leurs formules, puis investissez en quelques clics.';
const ACCESS_CODE_MIN_LENGTH = 4;
const ACCESS_CODE_MAX_LENGTH = 6;
const USE_SEED_DATA = process.env.NEXT_PUBLIC_USE_SEED_DATA !== 'false';
const USE_SEED_INVESTMENTS = process.env.NEXT_PUBLIC_USE_SEED_INVESTMENTS === 'true';
const USE_SEED_WALLET = process.env.NEXT_PUBLIC_USE_SEED_WALLET === 'true';
const USE_SEED_REFERRAL = process.env.NEXT_PUBLIC_USE_SEED_REFERRAL === 'true';
const USE_SEED_HOUSES = process.env.NEXT_PUBLIC_USE_SEED_HOUSES === 'true';
const USE_SEED_AUTH = process.env.NEXT_PUBLIC_USE_SEED_AUTH === 'true';
const API_ORIGIN = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.tradeshouses.com';
const PROJECT_NAME = 'brainnest';
const MAIN_URL = `https://george-fx.github.io/APIs/${PROJECT_NAME}`;
const BASE_URL = `${API_ORIGIN}/api/v1`;
const base_url_asset = process.env.NEXT_PUBLIC_BASE_URL_ASSET || `${API_ORIGIN}/uploads`;
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
const URLS = {
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
    ANONYMOUS_USER
};
const apiUrlAsset = {
    avatars: USE_SEED_DATA ? '/seed/avatars' : `${base_url_asset}/avatars`,
    tradingHouses: USE_SEED_HOUSES ? '/seed/houses' : `${base_url_asset}/trading-houses`
};
const URLS_ASSETS = {
    HOUSES: apiUrlAsset.tradingHouses,
    AVATARS: apiUrlAsset.avatars
};
}),
"[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvestmentDetailClient",
    ()=>InvestmentDetailClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InvestmentDetailClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InvestmentDetailClient() from the server but InvestmentDetailClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx <module evaluation>", "InvestmentDetailClient");
}),
"[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvestmentDetailClient",
    ()=>InvestmentDetailClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const InvestmentDetailClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InvestmentDetailClient() from the server but InvestmentDetailClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx", "InvestmentDetailClient");
}),
"[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$investment$2f5b$id$5d2f$InvestmentDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$investment$2f5b$id$5d2f$InvestmentDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$investment$2f5b$id$5d2f$InvestmentDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/invest/src/app/investment/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvestmentPage,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$investment$2f5b$id$5d2f$InvestmentDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/app/investment/[id]/InvestmentDetailClient.tsx [app-rsc] (ecmascript)");
;
;
;
const viewport = {
    themeColor: '#F5FAFB'
};
const metadata = {
    title: `Suivi d’investissement — ${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"]}`,
    description: 'Détail, avancement et versements journaliers de votre investissement.'
};
async function InvestmentPage({ params }) {
    const { id } = await params;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$investment$2f5b$id$5d2f$InvestmentDetailClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvestmentDetailClient"], {
        id: id
    }, void 0, false, {
        fileName: "[project]/invest/src/app/investment/[id]/page.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
}),
"[project]/invest/src/app/investment/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/invest/src/app/investment/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8d2426a7._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/invest/src/styles/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dangerColor",
    ()=>dangerColor,
    "primaryColor",
    ()=>primaryColor
]);
const primaryColor = '#FCC55E';
const dangerColor = '#c1121f';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/invest/src/utils/plan_helper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cheapestPlan",
    ()=>cheapestPlan,
    "endOfLocalDay",
    ()=>endOfLocalDay,
    "featuredPlan",
    ()=>featuredPlan,
    "isPlanOpen",
    ()=>isPlanOpen,
    "isSubscriptionWindowOpen",
    ()=>isSubscriptionWindowOpen,
    "planMaturityDate",
    ()=>planMaturityDate,
    "planWorkStartDate",
    ()=>planWorkStartDate
]);
const DAY_MS = 24 * 60 * 60 * 1000;
const endOfLocalDay = (value)=>{
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) return Number.NaN;
    date.setHours(23, 59, 59, 999);
    return date.getTime();
};
const isSubscriptionWindowOpen = (subscriptionEndDate)=>{
    if (!subscriptionEndDate) return false;
    const end = endOfLocalDay(subscriptionEndDate);
    return Number.isFinite(end) && Date.now() <= end;
};
const planWorkStartDate = (plan)=>{
    if (plan.maturityDate && plan.durationDays > 0) {
        const maturity = new Date(plan.maturityDate).getTime();
        if (Number.isFinite(maturity)) {
            return new Date(maturity - plan.durationDays * DAY_MS);
        }
    }
    if (plan.subscriptionEndDate) {
        const end = new Date(plan.subscriptionEndDate);
        if (Number.isFinite(end.getTime())) return end;
    }
    return undefined;
};
const isPlanOpen = (plan)=>{
    if (plan.isOpen === false) return false;
    if (plan.status && plan.status.toUpperCase() !== 'OPEN') return false;
    if (plan.subscriptionEndDate && new Date(plan.subscriptionEndDate).getTime() < Date.now()) {
        return false;
    }
    return true;
};
const featuredPlan = (plans)=>{
    const open = plans.filter(isPlanOpen);
    const list = open.length ? open : plans;
    return [
        ...list
    ].sort((a, b)=>b.expectedReturn - a.expectedReturn)[0];
};
const cheapestPlan = (plans)=>{
    const open = plans.filter(isPlanOpen);
    const list = open.length ? open : plans;
    if (!list.length) return undefined;
    return list.reduce((min, plan)=>plan.minAmount < min.minAmount ? plan : min);
};
const planMaturityDate = (plan)=>plan.maturityDate ? new Date(plan.maturityDate) : new Date(Date.now() + plan.durationDays * 24 * 60 * 60 * 1000);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/invest/src/hooks/useUserLevel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserLevel",
    ()=>useUserLevel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/mapTradingHouse.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useUserLevel() {
    _s();
    const { user, isLoggedIn } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useUserStore();
    const { levels, load, investorLevel } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useLevelsStore();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserLevel.useEffect": ()=>{
            load();
        }
    }["useUserLevel.useEffect"], [
        load
    ]);
    const rank = isLoggedIn ? investorLevel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankFromMinLevel"])(investorLevel.level) : user?.levelRank ?? 1 : 1;
    const stars = isLoggedIn ? investorLevel?.stars.total ?? user?.stars ?? 0 : 0;
    const levelOf = (levelRank)=>levels.find((level)=>level.rank === levelRank);
    const isLocked = (target)=>{
        if (typeof target === 'number') return target > rank;
        if (typeof target.canInvest === 'boolean') return !target.canInvest;
        if (typeof target.meetsLevel === 'boolean' && !target.meetsLevel) {
            return true;
        }
        if (typeof target.meetsStars === 'boolean' && !target.meetsStars) {
            return true;
        }
        if ((target.minStars ?? 0) > stars) return true;
        return (target.requiredLevel ?? 1) > rank;
    };
    return {
        rank,
        stars,
        investorLevel,
        level: levelOf(rank),
        levels,
        levelOf,
        isLocked
    };
}
_s(useUserLevel, "64bMRx1/7/Nbzgl2tqnMBCaW2dY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useUserStore,
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useLevelsStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/invest/src/hooks/useMoney.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMoney",
    ()=>useMoney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/invest_helper.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const storageFormat = {
    code: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"],
    digits: 0,
    symbol: 'FCFA'
};
function useMoney() {
    _s();
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useUserStore({
        "useMoney.useUserStore[user]": (state)=>state.user
    }["useMoney.useUserStore[user]"]);
    const rates = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useCurrencyStore({
        "useMoney.useCurrencyStore[rates]": (state)=>state.rates
    }["useMoney.useCurrencyStore[rates]"]);
    const preferred = (user?.currency || __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"]).toUpperCase();
    const rateMap = rates?.rates ?? {
        [__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"]]: 1,
        USD: 1
    };
    const canConvert = Boolean(rateMap[preferred] && rateMap[__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"]]);
    const code = canConvert ? preferred : __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"];
    const meta = rates?.currencies.find((item)=>item.code === code);
    const digits = meta?.digits ?? (code === 'XOF' || code === 'XAF' ? 0 : 2);
    const format = {
        code,
        digits,
        symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currencySymbol"])(code)
    };
    const toDisplay = (storageAmount)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertAmount"])(storageAmount, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"], code, rateMap);
    const toStorage = (displayAmount)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertAmount"])(displayAmount, code, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"], rateMap);
    return {
        code,
        digits,
        symbol: format.symbol,
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currencyName"])(code),
        ratesReady: Boolean(rates),
        toDisplay,
        toStorage,
        formatAmount: (storageAmount)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(toDisplay(storageAmount), format),
        formatCompactAmount: (storageAmount)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCompactAmount"])(toDisplay(storageAmount), format),
        formatStorageAmount: (storageAmount)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(storageAmount, storageFormat)
    };
}
_s(useMoney, "5aWEjasdAAjYrv0UbnuqREXXrY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useUserStore,
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useCurrencyStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/invest/src/hooks/useFavorite.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavorite",
    ()=>useFavorite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/routes/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function useFavorite(houseId) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, isLoggedIn, setUser } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useUserStore();
    const [isPending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFavorite = !!user?.favoriteHouseIds?.includes(houseId);
    const toggleFavorite = async ()=>{
        if (!isLoggedIn) {
            __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageService"].saveLocationRedirection(window.location.pathname);
            router.push(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"].SIGN_IN);
            return;
        }
        setPending(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"].toggleFavorite(houseId);
            if (response.etat) setUser(response.result.client);
        } finally{
            setPending(false);
        }
    };
    return {
        isFavorite,
        isPending,
        toggleFavorite
    };
}
_s(useFavorite, "bJn2IIF/y5EQi4bEtt2MCJiVDYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stores"].useUserStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/invest/src/constants/serviceMobileMoney.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizePaymentService",
    ()=>normalizePaymentService,
    "paymentServiceLabel",
    ()=>paymentServiceLabel,
    "servicesAirTimeMoney",
    ()=>servicesAirTimeMoney,
    "servicesMobileMoney",
    ()=>servicesMobileMoney
]);
const servicesMobileMoney = [
    {
        name: 'moovci',
        label: 'Moov Money',
        flag: '/assets/payments/moov.png',
        type: 'mobile money',
        length: 10,
        startWith: '01',
        country: 'CI'
    },
    {
        name: 'waveci',
        label: 'Wave',
        flag: '/assets/payments/wave.png',
        type: 'mobile money',
        length: 10,
        startWith: '',
        country: 'CI'
    },
    {
        name: 'orangeci',
        label: 'Orange Money',
        flag: '/assets/payments/orange.png',
        type: 'mobile money',
        length: 10,
        startWith: '07',
        country: 'CI'
    },
    {
        name: 'mtnci',
        label: 'MTN Mobile Money',
        flag: '/assets/payments/mtn.png',
        type: 'mobile money',
        length: 10,
        startWith: '05',
        country: 'CI'
    },
    {
        name: 'visa',
        flag: 'https://logoeps.com/wp-content/uploads/2025/02/Visa-logo-.png',
        type: 'credit card'
    },
    {
        name: 'master card',
        flag: 'https://www.mastercard.com/content/dam/public/mastercardcom/fr/fr/logos/mastercard-og-image.png',
        type: 'credit card'
    }
];
const servicesAirTimeMoney = [
    {
        name: 'Crédit de communication MOOV AFRICA CI',
        flag: 'https://yt3.googleusercontent.com/So4zVrbYgRhy9UskS8_Fduc5rq6uO6dq6uZec4PwMRhKEJEcJ6gEGysdzyt3jxfC36B-mZ4P=s900-c-k-c0x00ffffff-no-rj',
        value: 'moovci',
        length: 10,
        startWith: '01',
        country: 'CI'
    },
    {
        value: 'orangeci',
        flag: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/3840px-Orange_logo.svg.png',
        name: 'Crédit de communication ORANGE CI',
        length: 10,
        startWith: '07',
        country: 'CI'
    },
    {
        value: 'mtnci',
        flag: 'https://www.mtn.ci/wp-content/uploads/2023/05/MTN-CI.jpg',
        name: 'Crédit de communication MTN CI',
        length: 10,
        startWith: '05',
        country: 'CI'
    }
];
const SERVICE_ALIASES = {
    wave: 'waveci',
    waveci: 'waveci',
    orange: 'orangeci',
    orangeci: 'orangeci',
    orangemoney: 'orangeci',
    mtn: 'mtnci',
    mtnci: 'mtnci',
    moov: 'moovci',
    moovci: 'moovci'
};
const normalizePaymentService = (name)=>SERVICE_ALIASES[name.toLowerCase().replace(/[\s_-]/g, '')] ?? name;
const paymentServiceLabel = (name)=>{
    const normalized = normalizePaymentService(name);
    return servicesMobileMoney.find((service)=>service.name === normalized || service.name === name)?.label ?? name;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/invest/src/mooks/avatars.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "avatarsMook",
    ()=>avatarsMook
]);
const avatarsMook = Array.from({
    length: 25
}, (_, index)=>`avatar_${index + 1}.jpg`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/invest/src/data/authentication.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeAccessCode",
    ()=>changeAccessCode,
    "checkAccount",
    ()=>checkAccount,
    "createAnonymousUser",
    ()=>createAnonymousUser,
    "loginWithAccessCode",
    ()=>loginWithAccessCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getUser.ts [app-client] (ecmascript)");
;
;
;
;
async function errorMessage(response, fallback) {
    const data = await response.json().catch(()=>null);
    const message = data?.message ?? data?.error;
    if (Array.isArray(message)) return message.join(' ');
    return typeof message === 'string' && message ? message : fallback;
}
async function postJson(url, body, fallbackError) {
    const token = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken() : "TURBOPACK unreachable";
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...token && {
                Authorization: token
            }
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) throw new Error(await errorMessage(response, fallbackError));
    return response.json();
}
async function checkAccount(phoneNumber, referralCode) {
    const json = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"] ? await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestAuthentication"](phoneNumber, referralCode) : await postJson(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLS"].AUTHENTICATION, {
        phone_number: phoneNumber,
        ...referralCode && {
            referralCode
        }
    }, 'Impossible de vérifier ce numéro');
    const isNewAccount = json?.result?.isNewAccount;
    return {
        hasAccount: typeof isNewAccount === 'boolean' ? !isNewAccount : null,
        isLocked: json?.result?.isLocked === true,
        message: json?.message
    };
}
async function loginWithAccessCode(phoneNumber, accessCode, referralCode) {
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"] ? await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAuthentication"](phoneNumber, accessCode, referralCode) : await postJson(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLS"].VERIFY_AUTHENTICATION, {
        phone_number: phoneNumber,
        otp: accessCode,
        ...referralCode && {
            referralCode
        }
    }, 'Code d’accès incorrect');
    if (data.etat === undefined) data.etat = !!data.result?.client;
    if (data.etat && data.result?.client?.access_token && ("TURBOPACK compile-time value", "object") !== 'undefined') {
        const { access_token, ...rest } = data.result.client;
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(access_token);
        // Investissements encore simulés : on rattache les données seeder du compte.
        const client = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_SEED_INVESTMENTS"] && !__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"] ? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachSeedData"](rest) : rest;
        data.result.client = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"] ? client : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withStorageBalances"])(client);
    }
    return data;
}
async function changeAccessCode(currentCode, newCode) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["changeAccessCode"](currentCode, newCode);
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLS"].ACCESS_CODE, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...token && {
                Authorization: token
            }
        },
        body: JSON.stringify({
            currentOtp: currentCode,
            newOtp: newCode
        })
    });
    if (!response.ok) {
        throw new Error(await errorMessage(response, 'Impossible de changer le code'));
    }
    const data = await response.json().catch(()=>({}));
    return {
        etat: data?.etat ?? true,
        message: data?.message,
        result: data?.result
    };
}
async function createAnonymousUser() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnonymousUser"]();
    const data = await postJson(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLS"].ANONYMOUS_USER, {}, 'Impossible de créer le compte');
    if (data.etat && ("TURBOPACK compile-time value", "object") !== 'undefined') {
        const { access_token, ...rest } = data.result.client;
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(access_token);
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(rest);
        data.result.client = rest;
    }
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=invest_src_b85b980e._.js.map
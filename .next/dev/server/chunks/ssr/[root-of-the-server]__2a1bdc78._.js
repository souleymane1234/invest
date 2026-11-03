module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/invest/src/stores/useCartStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const initialState = {
    total: 0,
    list: [],
    delivery: 0,
    discount: 0,
    subtotal: 0,
    promoCode: '',
    discountAmount: 0
};
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        ...initialState,
        addToCart: (dish)=>{
            set((state)=>{
                const inCart = state.list.find((item)=>item.id === dish.id);
                if (inCart) {
                    state.list = state.list.map((item)=>{
                        if (item.id === dish.id) {
                            if (item.quantity) {
                                item.quantity += 1;
                            }
                        }
                        return item;
                    });
                    state.subtotal += Number(dish.price);
                    state.discountAmount = Number((state.subtotal - state.total).toFixed(2));
                    state.total += Number(dish.price) * (1 - state.discount / 100);
                } else {
                    state.list.push({
                        ...dish,
                        quantity: 1
                    });
                    state.subtotal += Number(dish.price);
                    state.total += Number(dish.price) * (1 - state.discount / 100);
                }
                return {
                    ...state
                };
            });
        },
        removeFromCart: (dish)=>{
            set((state)=>{
                const inCart = state.list.find((item)=>item.id === dish.id);
                if (inCart) {
                    state.list = state.list.reduce((acc, item)=>{
                        if (item.id === dish.id) {
                            if (item.quantity && item.quantity > 1) {
                                item.quantity -= 1;
                                acc.push(item);
                            }
                        } else {
                            acc.push(item);
                        }
                        return acc;
                    }, []);
                    state.subtotal -= Number(dish.price);
                    state.discountAmount = Number((state.subtotal - state.total).toFixed(2));
                    state.total -= Number(dish.price) * (1 - state.discount / 100);
                    if (state.list.length === 0) {
                        state.discount = 0;
                        state.promoCode = '';
                    }
                }
                return {
                    ...state
                };
            });
        },
        setDiscount: (discount)=>{
            set((state)=>{
                state.discount = discount;
                state.total = state.subtotal * (1 - discount / 100);
                state.discountAmount = state.subtotal - state.total;
                return {
                    ...state
                };
            });
        },
        resetCart: ()=>{
            set(()=>({
                    ...initialState
                }));
        },
        setPromoCode: (promoCode)=>{
            set((state)=>{
                state.promoCode = promoCode;
                return {
                    ...state
                };
            });
        }
    }), {
    name: 'cart-storage'
}));
}),
"[project]/invest/src/stores/useModalStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalStore",
    ()=>useModalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const initialState = {
    isOpen: false
};
const useModalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        ...initialState,
        openModal: ()=>set({
                isOpen: true
            }),
        closeModal: ()=>set({
                isOpen: false
            })
    }));
}),
"[project]/invest/src/stores/useWishlistStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWishlistStore",
    ()=>useWishlistStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const initialState = {
    list: []
};
const useWishlistStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        ...initialState,
        addToWishlist: (dish)=>{
            set((state)=>{
                const inWishlist = state.list.find((item)=>item.id === dish.id);
                if (!inWishlist) {
                    return {
                        ...state,
                        list: [
                            ...state.list,
                            dish
                        ]
                    };
                }
                return state;
            });
        },
        removeFromWishlist: (dish)=>{
            set((state)=>({
                    ...state,
                    list: state.list.filter((item)=>item.id !== dish.id)
                }));
        }
    }), {
    name: 'wishlist-storage'
}));
}),
"[project]/invest/src/stores/useVerificationStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVerificationStore",
    ()=>useVerificationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useVerificationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        emailVerified: false,
        phoneVerified: false,
        setEmailVerified: (verified)=>set({
                emailVerified: verified
            }),
        setPhoneVerified: (verified)=>set({
                phoneVerified: verified
            })
    }), {
    name: 'verification-storage'
}));
}),
"[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalStorageService",
    ()=>LocalStorageService
]);
class LocalStorageService {
    static CURRENT_NAVIGATION = 'current_navigation';
    static TOKEN_KEY = 'jwt_token';
    static USER_KEY = 'userInfo';
    static HOME_DICTACIEL_TOUR_KEY = 'home_dictaciel_tour';
    static LOCATION_REDIRECTION_KEY = 'location_redirection';
    static saveLocationRedirection(url) {
        localStorage.setItem(this.LOCATION_REDIRECTION_KEY, url);
    }
    // Récupérer le token JWT
    static getLocationRedirection() {
        return localStorage.getItem(this.LOCATION_REDIRECTION_KEY);
    }
    // Sauvegarder le token JWT
    static saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
    // Récupérer le token JWT
    static getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }
    // Vérifier si le token JWT est présent
    static isTokenPresent() {
        return this.getToken() !== null;
    }
    // Supprimer le token JWT
    static removeToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
    // Sauvegarder l'utilisateur
    static saveUser(user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    // Récupérer l'utilisateur
    static getUser() {
        const user = localStorage.getItem(this.USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
    // Sauvegarder le token JWT
    static saveCurrentNavigation(currentIndex) {
        localStorage.setItem(this.CURRENT_NAVIGATION, currentIndex.toString());
    }
    // Récupérer le Current index de navigation
    static getCurrentNavigation() {
        const currentNavigation = localStorage.getItem(this.CURRENT_NAVIGATION);
        return currentNavigation ? Number.parseInt(currentNavigation, 10) : 0;
    }
    // Sauvegarder le visite du home dictaciel tour
    static saveHomeDictacielTourVisited() {
        localStorage.setItem(this.HOME_DICTACIEL_TOUR_KEY, 'true');
    }
    // Récupérer l'état du visite du home dictaciel tour
    static isHomeDictacielTourVisited() {
        const alreadyVisited = localStorage.getItem(this.HOME_DICTACIEL_TOUR_KEY);
        return alreadyVisited === 'true';
    }
    // Supprimer les infos du user
    static removeUser() {
        localStorage.removeItem(this.USER_KEY);
    }
    static clearData() {
        [
            this.USER_KEY,
            this.TOKEN_KEY
        ].map((key)=>localStorage.removeItem(key));
    }
    static clearAllData() {
        localStorage.clear();
    }
}
}),
"[project]/invest/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "isBrowser",
    ()=>isBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs);
}
const isBrowser = ()=>("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof window.localStorage !== 'undefined';
}),
"[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAllNotificationsIndexDb",
    ()=>deleteAllNotificationsIndexDb,
    "getAllHousesIndexDb",
    ()=>getAllHousesIndexDb,
    "getAllNotificationIndexDb",
    ()=>getAllNotificationIndexDb,
    "getHouseByIdIndexDb",
    ()=>getHouseByIdIndexDb,
    "initDB",
    ()=>initDB,
    "resetDatabaseIndexDb",
    ()=>resetDatabaseIndexDb,
    "saveAllHousesIndexDb",
    ()=>saveAllHousesIndexDb,
    "saveAllNotificationIndexDb",
    ()=>saveAllNotificationIndexDb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
;
const DATABASE_NAME = 'InvestHub';
const DATABASE_VERSION = 1;
const OBJECT_STORE_HOUSES = 'houses';
const OBJECT_STORE_NOTIFICATIONS = 'notifications';
const initDB = async ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openDB"])(DATABASE_NAME, DATABASE_VERSION, {
        upgrade (db) {
            if (!db.objectStoreNames.contains(OBJECT_STORE_HOUSES)) {
                db.createObjectStore(OBJECT_STORE_HOUSES, {
                    keyPath: 'id'
                });
            }
            if (!db.objectStoreNames.contains(OBJECT_STORE_NOTIFICATIONS)) {
                const store = db.createObjectStore(OBJECT_STORE_NOTIFICATIONS, {
                    keyPath: 'id'
                });
                store.createIndex('by-id', 'id');
                store.createIndex('by-priority', 'priority');
            }
        }
    });
};
// --- Maisons de trading ---
const saveAllHousesIndexDb = async (houses)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_HOUSES, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_HOUSES);
    await store.clear();
    for (const house of houses){
        await store.put(house);
    }
    await tx.done;
};
const getAllHousesIndexDb = async ()=>{
    const db = await initDB();
    return db.getAll(OBJECT_STORE_HOUSES);
};
const getHouseByIdIndexDb = async (id)=>{
    const db = await initDB();
    return db.get(OBJECT_STORE_HOUSES, id);
};
// --- Notifications ---
const saveAllNotificationIndexDb = async (notifications)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NOTIFICATIONS, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NOTIFICATIONS);
    await store.clear();
    for (const notification of notifications){
        await store.put(notification);
    }
    await tx.done;
};
const getAllNotificationIndexDb = async ()=>{
    const db = await initDB();
    return db.getAll(OBJECT_STORE_NOTIFICATIONS);
};
const deleteAllNotificationsIndexDb = async ()=>{
    const db = await initDB();
    await db.clear(OBJECT_STORE_NOTIFICATIONS);
};
const resetDatabaseIndexDb = async ()=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDB"])(DATABASE_NAME);
};
;
}),
"[project]/invest/src/stores/useUserStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserStore",
    ()=>useUserStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const useUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isLoggedIn: false,
        isLoadedCurrentUser: false,
        token: null,
        user: null,
        setUser: (user)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])() && user) {
                __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(user);
            }
            set({
                user,
                isLoggedIn: true
            });
        },
        logout: async ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                const tokenPresent = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].isTokenPresent();
                if (tokenPresent) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetDatabaseIndexDb"])();
                    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].clearData();
                }
            }
            set({
                user: null,
                isLoggedIn: false,
                token: null
            });
        },
        initAuth: ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                const tokenPresent = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].isTokenPresent();
                const tokenInfo = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
                const userInfo = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getUser();
                set({
                    isLoggedIn: tokenPresent,
                    isLoadedCurrentUser: true,
                    user: userInfo,
                    token: tokenInfo ? tokenInfo.split(' ')[1] : null
                });
            }
        }
    }));
}),
"[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_DESCRIPTION",
    ()=>APP_DESCRIPTION,
    "APP_NAME",
    ()=>APP_NAME,
    "URLS",
    ()=>URLS,
    "URLS_ASSETS",
    ()=>URLS_ASSETS,
    "USE_SEED_DATA",
    ()=>USE_SEED_DATA
]);
const APP_NAME = 'InvestHub';
const APP_DESCRIPTION = 'Comparez les maisons de trading, leurs performances et leurs formules, puis investissez en quelques clics.';
const USE_SEED_DATA = process.env.NEXT_PUBLIC_USE_SEED_DATA !== 'false';
const PROJECT_NAME = 'brainnest';
const MAIN_URL = `https://george-fx.github.io/APIs/${PROJECT_NAME}`;
const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`;
const BASE_URL_ASSETS = USE_SEED_DATA ? '/seed' : `${process.env.NEXT_PUBLIC_BASE_URL_ASSET}/uploads`;
const GET_REVIEWS = `${MAIN_URL}/api/reviews.json`;
const ANONYMOUS_USER = `${BASE_URL}/user/auth/anonym-user`;
const AUTHENTICATION = `${BASE_URL}/user/auth/authentification`;
const VERIFY_AUTHENTICATION = `${BASE_URL}/user/auth/valid-authentification`;
const GET_HOUSES = `${BASE_URL}/houses`;
const GET_MARKETS = `${BASE_URL}/markets`;
const INVESTMENTS = `${BASE_URL}/investments`;
const TRANSACTIONS = `${BASE_URL}/transactions`;
const FAVORITES = `${BASE_URL}/user/favorites`;
const GET_NOTIFICATIONS = `${BASE_URL}/notification`;
const GET_USER = `${BASE_URL}/user`;
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
    GET_MARKETS,
    INVESTMENTS,
    TRANSACTIONS,
    FAVORITES,
    GET_NOTIFICATIONS,
    GET_USER,
    GENERATE_REGISTRATION_BIOMETRICS_OPTIONS,
    GENERATE_AUTHENTICATION_BIOMETRICS_OPTIONS,
    REGISTRATION_BIOMETRICS_OPTIONS,
    AUTHENTICATION_BIOMETRICS_OPTIONS,
    GET_ONBOARDING,
    GET_PROMOCODES,
    AUTHENTICATION,
    VERIFY_AUTHENTICATION,
    ANONYMOUS_USER
};
const URLS_ASSETS = {
    HOUSES: `${BASE_URL_ASSETS}/houses`,
    AVATARS: `${BASE_URL_ASSETS}/avatars`
};
}),
"[project]/invest/src/types/NotificationType.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationPriorityEnum",
    ()=>NotificationPriorityEnum
]);
var NotificationPriorityEnum = /*#__PURE__*/ function(NotificationPriorityEnum) {
    NotificationPriorityEnum["LOW"] = "low";
    NotificationPriorityEnum["MEDIUM"] = "medium";
    NotificationPriorityEnum["PROMOTIONAL"] = "promo";
    NotificationPriorityEnum["HIGH"] = "high";
    return NotificationPriorityEnum;
}({});
}),
"[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accruedGain",
    ()=>accruedGain,
    "expectedGain",
    ()=>expectedGain,
    "formatAmount",
    ()=>formatAmount,
    "formatCompactAmount",
    ()=>formatCompactAmount,
    "formatDate",
    ()=>formatDate,
    "formatDuration",
    ()=>formatDuration,
    "formatNumber",
    ()=>formatNumber,
    "formatPercent",
    ()=>formatPercent,
    "investmentProgress",
    ()=>investmentProgress,
    "isInvestmentActive",
    ()=>isInvestmentActive,
    "remainingDays",
    ()=>remainingDays,
    "riskColor",
    ()=>riskColor
]);
const DAY_MS = 24 * 60 * 60 * 1000;
const amountFormatter = new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0
});
const formatAmount = (value)=>`${amountFormatter.format(Math.round(value))} FCFA`;
const formatCompactAmount = (value)=>{
    if (value >= 1_000_000_000) {
        return `${(value / 1_000_000_000).toLocaleString('fr-FR', {
            maximumFractionDigits: 1
        })} Md FCFA`;
    }
    if (value >= 1_000_000) {
        return `${(value / 1_000_000).toLocaleString('fr-FR', {
            maximumFractionDigits: 1
        })} M FCFA`;
    }
    return formatAmount(value);
};
const formatNumber = (value)=>amountFormatter.format(value);
const formatPercent = (value, withSign = false)=>{
    const formatted = `${value.toLocaleString('fr-FR', {
        maximumFractionDigits: 1
    })} %`;
    return withSign && value > 0 ? `+${formatted}` : formatted;
};
const formatDate = (value)=>new Date(value).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
const formatDuration = (days)=>{
    if (days % 365 === 0) return days === 365 ? '1 an' : `${days / 365} ans`;
    if (days % 30 === 0) return `${days / 30} mois`;
    return `${days} jours`;
};
const riskColor = (risk)=>{
    switch(risk){
        case 'faible':
            return 'var(--success-color)';
        case 'modéré':
            return 'var(--warning-color)';
        default:
            return 'var(--danger-color)';
    }
};
const investmentProgress = (investment)=>{
    const start = new Date(investment.startDate).getTime();
    const end = new Date(investment.endDate).getTime();
    return Math.min(1, Math.max(0, (Date.now() - start) / (end - start)));
};
const isInvestmentActive = (investment)=>new Date(investment.endDate).getTime() > Date.now();
const expectedGain = (amount, expectedReturn)=>amount * expectedReturn / 100;
const accruedGain = (investment)=>expectedGain(investment.amount, investment.expectedReturn) * investmentProgress(investment);
const remainingDays = (investment)=>Math.max(0, Math.ceil((new Date(investment.endDate).getTime() - Date.now()) / DAY_MS));
}),
"[project]/invest/src/seeders/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSeedNotifications",
    ()=>buildSeedNotifications,
    "seedOnboarding",
    ()=>seedOnboarding,
    "seedPromocodes",
    ()=>seedPromocodes,
    "seedReviews",
    ()=>seedReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/NotificationType.ts [app-ssr] (ecmascript)");
;
function buildSeedNotifications() {
    const hoursAgo = (hours)=>new Date(Date.now() - hours * 60 * 60 * 1000);
    return [
        {
            id: 'notif-1',
            message: 'Bienvenue ! Comparez les maisons de trading et choisissez la formule qui vous correspond.',
            isRead: false,
            priority: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].MEDIUM,
            created_at: hoursAgo(2),
            updated_at: hoursAgo(2)
        },
        {
            id: 'notif-2',
            message: 'Nouvelle formule « Quant+ » chez Orion Quant : jusqu’à 32 % en 90 jours.',
            isRead: false,
            priority: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].PROMOTIONAL,
            created_at: hoursAgo(20),
            updated_at: hoursAgo(20)
        },
        {
            id: 'notif-3',
            message: 'Conseil : diversifiez vos placements entre plusieurs maisons pour réduire le risque.',
            isRead: true,
            priority: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].LOW,
            created_at: hoursAgo(72),
            updated_at: hoursAgo(72)
        }
    ];
}
const seedReviews = [
    {
        id: 1,
        name: 'Koffi Yao',
        rating: 5,
        comment: 'Très pratique pour comparer les maisons de trading avant d’investir.',
        photo: '/seed/avatars/avatar_1.jpg',
        date: '12/10/2026'
    },
    {
        id: 2,
        name: 'Awa Traoré',
        rating: 4,
        comment: 'Le paiement par mobile money est simple et rapide.',
        photo: '/seed/avatars/avatar_2.jpg',
        date: '08/10/2026'
    },
    {
        id: 3,
        name: 'Moussa Diallo',
        rating: 5,
        comment: 'Je suis mes gains en temps réel depuis mon portefeuille.',
        photo: '/seed/avatars/avatar_3.jpg',
        date: '01/10/2026'
    }
];
const seedPromocodes = [
    {
        id: 1,
        name: 'Bienvenue',
        code: 'WELCOME10',
        image: '',
        expiry: '31/12/2026',
        discount: 10
    },
    {
        id: 2,
        name: 'Parrainage',
        code: 'PARRAIN30',
        image: '',
        expiry: '30/11/2026',
        discount: 30
    }
];
const seedOnboarding = [
    {
        id: 1,
        title1: 'Comparez',
        title2: 'les maisons',
        image: '/assets/onboarding/01.png',
        description1: 'Taux de gain, rendement, risque :',
        description2: 'toutes les stats au même endroit.'
    },
    {
        id: 2,
        title1: 'Investissez',
        title2: 'simplement',
        image: '/assets/onboarding/02.png',
        description1: 'Choisissez une formule',
        description2: 'et payez par mobile money.'
    },
    {
        id: 3,
        title1: 'Suivez',
        title2: 'vos gains',
        image: '/assets/onboarding/03.png',
        description1: 'Votre portefeuille et vos transactions',
        description2: 'en temps réel.'
    }
];
}),
"[project]/invest/src/seeders/houses.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSeedHouses",
    ()=>buildSeedHouses,
    "seedMarkets",
    ()=>seedMarkets
]);
const seedMarkets = [
    {
        id: 'forex',
        name: 'Forex'
    },
    {
        id: 'crypto',
        name: 'Crypto'
    },
    {
        id: 'actions',
        name: 'Actions'
    },
    {
        id: 'matieres',
        name: 'Matières premières'
    },
    {
        id: 'indices',
        name: 'Indices'
    }
];
const seedHouses = [
    {
        slug: 'atlas-capital',
        name: 'Atlas Capital',
        tagline: 'Le Forex maîtrisé, sans surprise',
        description: 'Atlas Capital est une maison de trading spécialisée sur les paires de devises majeures et les grands indices. Son équipe de 12 traders gère le capital de ses clients avec une approche disciplinée et une gestion stricte du risque.',
        strategy: 'Swing trading sur EUR/USD, GBP/USD et US30, avec un risque limité à 1 % du capital par position et des stop-loss systématiques.',
        markets: [
            'forex',
            'indices'
        ],
        foundedYear: 2017,
        country: "Côte d'Ivoire",
        license: 'Agréée AMF-UMOA n° 2017-114',
        verified: true,
        monthlyReturns: [
            3.1,
            2.4,
            -1.2,
            4.0,
            2.8,
            1.9,
            3.5,
            -0.8,
            2.6,
            3.3,
            2.1,
            2.9
        ],
        winRate: 72,
        maxDrawdown: 6.5,
        riskLevel: 'modéré',
        investorsCount: 4820,
        capitalManaged: 2_450_000_000,
        totalTrades: 3640,
        daysAgo: 400,
        plans: [
            [
                'Starter',
                10_000,
                100_000,
                30,
                6,
                "à l'échéance",
                [
                    'Capital garanti à 90 %',
                    'Retrait à l’échéance'
                ]
            ],
            [
                'Premium',
                100_000,
                1_000_000,
                90,
                22,
                'mensuel',
                [
                    'Gains versés chaque mois',
                    'Conseiller dédié'
                ],
                true
            ],
            [
                'Elite',
                1_000_000,
                10_000_000,
                180,
                50,
                'mensuel',
                [
                    'Rapport hebdomadaire',
                    'Accès prioritaire aux nouveaux fonds'
                ]
            ]
        ],
        reviews: [
            [
                'Koffi Yao',
                5,
                'Très sérieux, mes gains arrivent chaque mois sans retard.',
                4
            ],
            [
                'Awa Traoré',
                4,
                'Bonne communication, rendement régulier même si pas spectaculaire.',
                18
            ],
            [
                'Serge Kouadio',
                5,
                'Je suis client depuis 2 ans, aucune mauvaise surprise.',
                40
            ]
        ]
    },
    {
        slug: 'nova-crypto',
        name: 'Nova Crypto Fund',
        tagline: 'Capter la croissance des cryptomonnaies',
        description: 'Nova Crypto Fund investit sur les principales cryptomonnaies (Bitcoin, Ethereum, Solana) et profite de la volatilité du marché grâce à des algorithmes de trading automatisés actifs 24h/24.',
        strategy: 'Trading algorithmique de tendance et d’arbitrage entre plateformes, avec une couverture partielle en stablecoins lors des fortes baisses.',
        markets: [
            'crypto'
        ],
        foundedYear: 2020,
        country: 'Sénégal',
        license: 'Enregistrée auprès de la BCEAO (PSAN)',
        verified: true,
        monthlyReturns: [
            8.2,
            -4.5,
            12.1,
            6.3,
            -7.8,
            9.4,
            5.1,
            11.0,
            -3.2,
            7.7,
            4.9,
            6.8
        ],
        winRate: 61,
        maxDrawdown: 18.4,
        riskLevel: 'élevé',
        investorsCount: 7310,
        capitalManaged: 1_870_000_000,
        totalTrades: 15200,
        daysAgo: 220,
        plans: [
            [
                'Découverte',
                5_000,
                50_000,
                14,
                7,
                "à l'échéance",
                [
                    'Idéal pour débuter',
                    'Retrait rapide'
                ]
            ],
            [
                'Croissance',
                50_000,
                500_000,
                60,
                28,
                'hebdomadaire',
                [
                    'Gains versés chaque semaine',
                    'Tableau de bord temps réel'
                ],
                true
            ],
            [
                'Turbo',
                500_000,
                5_000_000,
                120,
                65,
                'mensuel',
                [
                    'Stratégies à effet de levier',
                    'Gestionnaire personnel'
                ]
            ]
        ],
        reviews: [
            [
                'Moussa Diallo',
                5,
                'Rendement impressionnant, mais il faut accepter les mois négatifs.',
                2
            ],
            [
                'Fatou Bamba',
                3,
                'Volatil, j’ai eu un mois à -7 %. Le reste de l’année a compensé.',
                25
            ],
            [
                'Ibrahim Koné',
                5,
                'Le tableau de bord en temps réel est top.',
                33
            ],
            [
                'Aya Kouassi',
                4,
                'Très bon support client sur WhatsApp.',
                60
            ]
        ]
    },
    {
        slug: 'sahel-trading',
        name: 'Sahel Trading Group',
        tagline: 'Matières premières et devises africaines',
        description: 'Sahel Trading Group négocie les matières premières agricoles et énergétiques (cacao, café, pétrole) ainsi que les devises liées. Une maison prudente, adaptée aux investisseurs qui cherchent la stabilité.',
        strategy: 'Positions de moyen terme sur les contrats à terme de matières premières, couvertes par des options pour limiter les pertes.',
        markets: [
            'matieres',
            'forex'
        ],
        foundedYear: 2012,
        country: 'Mali',
        license: 'Agréée CREPMF n° 2012-031',
        verified: true,
        monthlyReturns: [
            1.6,
            1.9,
            1.2,
            2.1,
            0.8,
            1.7,
            1.5,
            2.0,
            1.1,
            1.8,
            1.4,
            1.9
        ],
        winRate: 79,
        maxDrawdown: 3.1,
        riskLevel: 'faible',
        investorsCount: 3120,
        capitalManaged: 3_900_000_000,
        totalTrades: 980,
        daysAgo: 900,
        plans: [
            [
                'Sécurité',
                25_000,
                250_000,
                60,
                7,
                "à l'échéance",
                [
                    'Capital garanti à 100 %',
                    'Faible risque'
                ]
            ],
            [
                'Équilibre',
                250_000,
                2_500_000,
                180,
                18,
                'mensuel',
                [
                    'Gains mensuels',
                    'Rapport trimestriel détaillé'
                ],
                true
            ]
        ],
        reviews: [
            [
                'Mariam Ouattara',
                5,
                'Parfait pour placer mon épargne sans stress.',
                7
            ],
            [
                'Koffi Yao',
                4,
                'Rendement modeste mais très régulier.',
                45
            ],
            [
                'Awa Traoré',
                5,
                'Maison historique, très transparente.',
                80
            ]
        ]
    },
    {
        slug: 'baobab-invest',
        name: 'Baobab Invest',
        tagline: 'Investir dans les entreprises qui grandissent',
        description: 'Baobab Invest construit des portefeuilles d’actions sur la BRVM et les grandes places internationales. L’objectif : faire croître le capital sur la durée en misant sur des entreprises solides.',
        strategy: 'Sélection d’actions à dividendes et de valeurs de croissance, rééquilibrage mensuel et diversification sur plus de 40 titres.',
        markets: [
            'actions',
            'indices'
        ],
        foundedYear: 2015,
        country: "Côte d'Ivoire",
        license: 'SGI agréée AMF-UMOA n° 2015-087',
        verified: true,
        monthlyReturns: [
            2.2,
            1.4,
            -0.6,
            2.9,
            1.8,
            2.5,
            -1.1,
            3.0,
            1.6,
            2.4,
            1.9,
            2.1
        ],
        winRate: 68,
        maxDrawdown: 5.2,
        riskLevel: 'faible',
        investorsCount: 5640,
        capitalManaged: 4_250_000_000,
        totalTrades: 1450,
        daysAgo: 600,
        plans: [
            [
                'Épargne',
                10_000,
                200_000,
                90,
                8,
                "à l'échéance",
                [
                    'Dividendes réinvestis',
                    'Sans frais d’entrée'
                ]
            ],
            [
                'Patrimoine',
                200_000,
                3_000_000,
                365,
                28,
                'mensuel',
                [
                    'Gains mensuels',
                    'Accès aux introductions en bourse'
                ],
                true
            ]
        ],
        reviews: [
            [
                'Serge Kouadio',
                4,
                'Bonne maison pour le long terme.',
                12
            ],
            [
                'Fatou Bamba',
                5,
                'Les rapports mensuels sont très clairs.',
                30
            ],
            [
                'Moussa Diallo',
                4,
                'Rendement correct et risque faible.',
                55
            ]
        ]
    },
    {
        slug: 'lagune-fx',
        name: 'Lagune FX',
        tagline: 'Le scalping Forex à haute fréquence',
        description: 'Lagune FX est une jeune maison de trading spécialisée dans le scalping sur le Forex. Ses traders réalisent des dizaines de positions par jour pour capter de petits mouvements de prix.',
        strategy: 'Scalping intraday sur les sessions de Londres et New York, avec des positions de quelques minutes et un ratio gain/risque de 1,5.',
        markets: [
            'forex'
        ],
        foundedYear: 2021,
        country: 'Bénin',
        license: 'Enregistrée auprès de l’AMF-UMOA (en cours)',
        verified: false,
        monthlyReturns: [
            4.5,
            3.2,
            5.1,
            -2.4,
            4.8,
            3.9,
            2.2,
            5.6,
            -1.8,
            4.1,
            3.6,
            4.4
        ],
        winRate: 66,
        maxDrawdown: 9.8,
        riskLevel: 'modéré',
        investorsCount: 1980,
        capitalManaged: 640_000_000,
        totalTrades: 22400,
        daysAgo: 60,
        plans: [
            [
                'Flash',
                10_000,
                100_000,
                21,
                8,
                "à l'échéance",
                [
                    'Durée courte',
                    'Gains rapides'
                ]
            ],
            [
                'Pro',
                100_000,
                1_000_000,
                60,
                25,
                'hebdomadaire',
                [
                    'Gains chaque semaine',
                    'Statistiques détaillées'
                ],
                true
            ]
        ],
        reviews: [
            [
                'Ibrahim Koné',
                4,
                'Très bons résultats depuis 6 mois.',
                5
            ],
            [
                'Aya Kouassi',
                3,
                'Licence pas encore finalisée, je reste prudente.',
                20
            ],
            [
                'Koffi Yao',
                5,
                'Le plan Pro est très rentable.',
                28
            ]
        ]
    },
    {
        slug: 'orion-quant',
        name: 'Orion Quant',
        tagline: 'L’intelligence artificielle au service du trading',
        description: 'Orion Quant développe des modèles quantitatifs et d’intelligence artificielle qui analysent des milliers de signaux pour trader les cryptomonnaies et les indices mondiaux.',
        strategy: 'Modèles statistiques et apprentissage automatique, exécution 100 % automatisée et réallocation quotidienne entre crypto et indices.',
        markets: [
            'crypto',
            'indices'
        ],
        foundedYear: 2019,
        country: 'Togo',
        license: 'Agréée AMF-UMOA n° 2019-142',
        verified: true,
        monthlyReturns: [
            5.6,
            6.1,
            -3.4,
            7.2,
            4.3,
            -2.1,
            6.8,
            5.4,
            3.9,
            -4.6,
            7.5,
            6.2
        ],
        winRate: 64,
        maxDrawdown: 14.2,
        riskLevel: 'élevé',
        investorsCount: 6150,
        capitalManaged: 2_980_000_000,
        totalTrades: 41800,
        daysAgo: 120,
        plans: [
            [
                'Algo',
                20_000,
                200_000,
                30,
                9,
                "à l'échéance",
                [
                    'Exécution automatisée',
                    'Aucune intervention humaine'
                ]
            ],
            [
                'Quant+',
                200_000,
                2_000_000,
                90,
                32,
                'mensuel',
                [
                    'Gains mensuels',
                    'Accès aux signaux de l’IA'
                ],
                true
            ],
            [
                'Institutionnel',
                2_000_000,
                20_000_000,
                365,
                120,
                'mensuel',
                [
                    'Portefeuille sur mesure',
                    'Reporting quotidien'
                ]
            ]
        ],
        reviews: [
            [
                'Mariam Ouattara',
                5,
                'Les performances sont au rendez-vous.',
                3
            ],
            [
                'Serge Kouadio',
                4,
                'Quelques mois difficiles mais bilan annuel excellent.',
                22
            ],
            [
                'Fatou Bamba',
                5,
                'Très professionnel, reporting impeccable.',
                50
            ]
        ]
    },
    {
        slug: 'ivoire-gold',
        name: 'Ivoire Gold Traders',
        tagline: 'L’or, valeur refuge par excellence',
        description: 'Ivoire Gold Traders est spécialisée dans le trading de l’or et des métaux précieux. Elle profite des mouvements de l’once d’or face au dollar tout en protégeant le capital de ses clients.',
        strategy: 'Trading de tendance sur XAU/USD et XAG/USD, renforcé lors des périodes d’incertitude économique.',
        markets: [
            'matieres'
        ],
        foundedYear: 2016,
        country: "Côte d'Ivoire",
        license: 'Agréée AMF-UMOA n° 2016-059',
        verified: true,
        monthlyReturns: [
            2.8,
            3.4,
            1.9,
            -1.5,
            3.1,
            2.7,
            3.8,
            2.2,
            -0.9,
            3.5,
            2.9,
            3.2
        ],
        winRate: 74,
        maxDrawdown: 5.9,
        riskLevel: 'modéré',
        investorsCount: 4380,
        capitalManaged: 2_120_000_000,
        totalTrades: 2730,
        daysAgo: 300,
        plans: [
            [
                'Or Bronze',
                15_000,
                150_000,
                45,
                8,
                "à l'échéance",
                [
                    'Exposition à l’or',
                    'Idéal en période d’incertitude'
                ]
            ],
            [
                'Or Argent',
                150_000,
                1_500_000,
                90,
                20,
                'mensuel',
                [
                    'Gains mensuels',
                    'Couverture contre l’inflation'
                ],
                true
            ],
            [
                'Or Platine',
                1_500_000,
                15_000_000,
                180,
                45,
                'mensuel',
                [
                    'Conseiller dédié',
                    'Bilan mensuel personnalisé'
                ]
            ]
        ],
        reviews: [
            [
                'Aya Kouassi',
                5,
                'Mon meilleur placement de l’année.',
                9
            ],
            [
                'Moussa Diallo',
                4,
                'Rendement stable, équipe disponible.',
                35
            ],
            [
                'Ibrahim Koné',
                5,
                'Je recommande le plan Or Argent.',
                70
            ]
        ]
    },
    {
        slug: 'kora-asset',
        name: 'Kora Asset Management',
        tagline: 'Un portefeuille diversifié, actions et crypto',
        description: 'Kora Asset Management combine actions technologiques et cryptomonnaies pour offrir un potentiel de croissance élevé, tout en diversifiant le risque sur deux classes d’actifs complémentaires.',
        strategy: 'Allocation 60 % actions technologiques / 40 % crypto, rééquilibrée chaque semaine selon la volatilité du marché.',
        markets: [
            'actions',
            'crypto'
        ],
        foundedYear: 2018,
        country: 'Cameroun',
        license: 'Agréée COSUMAF n° 2018-022',
        verified: true,
        monthlyReturns: [
            3.9,
            -2.2,
            4.6,
            3.1,
            5.2,
            -1.4,
            4.0,
            3.7,
            2.5,
            -2.8,
            4.9,
            3.8
        ],
        winRate: 63,
        maxDrawdown: 11.6,
        riskLevel: 'modéré',
        investorsCount: 3560,
        capitalManaged: 1_340_000_000,
        totalTrades: 5120,
        daysAgo: 180,
        plans: [
            [
                'Mix',
                10_000,
                150_000,
                30,
                7,
                "à l'échéance",
                [
                    'Diversification immédiate',
                    'Faible montant d’entrée'
                ]
            ],
            [
                'Mix Plus',
                150_000,
                2_000_000,
                120,
                30,
                'mensuel',
                [
                    'Gains mensuels',
                    'Rééquilibrage hebdomadaire'
                ],
                true
            ]
        ],
        reviews: [
            [
                'Koffi Yao',
                4,
                'Bon compromis entre risque et rendement.',
                6
            ],
            [
                'Mariam Ouattara',
                4,
                'Interface claire, retraits rapides.',
                27
            ],
            [
                'Serge Kouadio',
                3,
                'Quelques mois négatifs, à garder sur le long terme.',
                48
            ]
        ]
    }
];
const DAY_MS = 24 * 60 * 60 * 1000;
const daysAgoIso = (days)=>new Date(Date.now() - days * DAY_MS).toISOString();
const round = (value, digits = 1)=>Math.round(value * 10 ** digits) / 10 ** digits;
function lastMonthsLabels(count) {
    const now = new Date();
    return Array.from({
        length: count
    }, (_, index)=>{
        const date = new Date(now.getFullYear(), now.getMonth() - count + index, 1);
        return date.toLocaleDateString('fr-FR', {
            month: 'short',
            year: '2-digit'
        });
    });
}
function buildHouse(seed, index) {
    const id = `house-${seed.slug}`;
    const labels = lastMonthsLabels(seed.monthlyReturns.length);
    const annualRoi = (seed.monthlyReturns.reduce((acc, value)=>acc * (1 + value / 100), 1) - 1) * 100;
    const monthlyRoi = seed.monthlyReturns.reduce((acc, value)=>acc + value, 0) / seed.monthlyReturns.length;
    const reviews = seed.reviews.map(([author, rating, comment, daysAgo], reviewIndex)=>({
            id: `${id}-review-${reviewIndex}`,
            author,
            avatar: `avatar_${(index * 3 + reviewIndex) % 25 + 1}.jpg`,
            rating,
            comment,
            date: daysAgoIso(daysAgo)
        }));
    const rating = reviews.reduce((acc, review)=>acc + review.rating, 0) / reviews.length;
    const plans = seed.plans.map(([name, minAmount, maxAmount, durationDays, expectedReturn, payout, features, popular], planIndex)=>({
            id: `${id}-plan-${planIndex}`,
            houseId: id,
            name,
            minAmount,
            maxAmount,
            durationDays,
            expectedReturn,
            payout,
            features,
            popular
        }));
    return {
        id,
        name: seed.name,
        logo: `${seed.slug}-logo.png`,
        cover: `${seed.slug}-cover.jpg`,
        tagline: seed.tagline,
        description: seed.description,
        strategy: seed.strategy,
        markets: seedMarkets.filter((market)=>seed.markets.includes(market.id)),
        foundedYear: seed.foundedYear,
        country: seed.country,
        license: seed.license,
        verified: seed.verified,
        stats: {
            winRate: seed.winRate,
            monthlyRoi: round(monthlyRoi),
            annualRoi: round(annualRoi),
            maxDrawdown: seed.maxDrawdown,
            riskLevel: seed.riskLevel,
            investorsCount: seed.investorsCount,
            capitalManaged: seed.capitalManaged,
            totalTrades: seed.totalTrades,
            rating: round(rating),
            reviewsCount: reviews.length
        },
        performance: seed.monthlyReturns.map((value, monthIndex)=>({
                month: labels[monthIndex],
                value
            })),
        screenshots: [
            1,
            2,
            3,
            4
        ].map((shot)=>`${seed.slug}-shot-${shot}.jpg`),
        plans,
        reviews,
        created_at: daysAgoIso(seed.daysAgo)
    };
}
function buildSeedHouses() {
    return seedHouses.map(buildHouse);
}
}),
"[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "biometricLogin",
    ()=>biometricLogin,
    "createAnonymousUser",
    ()=>createAnonymousUser,
    "getHouseById",
    ()=>getHouseById,
    "getHouses",
    ()=>getHouses,
    "getInvestments",
    ()=>getInvestments,
    "getMarkets",
    ()=>getMarkets,
    "getNotifications",
    ()=>getNotifications,
    "getOnboarding",
    ()=>getOnboarding,
    "getPromocodes",
    ()=>getPromocodes,
    "getReviews",
    ()=>getReviews,
    "getTransactions",
    ()=>getTransactions,
    "getUser",
    ()=>getUser,
    "invest",
    ()=>invest,
    "readAllNotificationUser",
    ()=>readAllNotificationUser,
    "requestAuthentication",
    ()=>requestAuthentication,
    "toggleFavorite",
    ()=>toggleFavorite,
    "updateUser",
    ()=>updateUser,
    "verifyAuthentication",
    ()=>verifyAuthentication
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/NotificationType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/houses.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const DB_KEY = 'seed_db';
const TOKEN_PREFIX = 'Bearer seed-';
const LATENCY_MS = 150;
const isBrowser = ()=>("TURBOPACK compile-time value", "undefined") !== 'undefined';
const wait = (ms = LATENCY_MS)=>new Promise((resolve)=>setTimeout(resolve, ms));
const uid = (prefix)=>`${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
function readDb() {
    if (!isBrowser()) return {
        users: {}
    };
    //TURBOPACK unreachable
    ;
    const raw = undefined;
}
function writeDb(db) {
    if (isBrowser()) //TURBOPACK unreachable
    ;
}
function currentUserId() {
    if (!isBrowser()) return null;
    //TURBOPACK unreachable
    ;
    const token = undefined;
}
function getCurrentUser() {
    const id = currentUserId();
    return id ? readDb().users[id] ?? null : null;
}
function saveUser(user) {
    const db = readDb();
    db.users[user.id] = user;
    writeDb(db);
}
function createUser(phoneNumber = '') {
    return {
        id: `${Date.now()}`,
        full_name: '',
        pseudo: '',
        email: '',
        phone_number: phoneNumber,
        profil: 'avatar_1.jpg',
        notifications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedNotifications"])(),
        investments: [],
        transactions: [],
        favoriteHouseIds: []
    };
}
function login(user) {
    saveUser(user);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(`${TOKEN_PREFIX}${user.id}`);
    return {
        etat: true,
        result: {
            client: user
        }
    };
}
function findUserByPhone(phoneNumber) {
    return Object.values(readDb().users).find((user)=>user.phone_number === phoneNumber);
}
function notification(message) {
    const now = new Date();
    return {
        id: uid('notif'),
        message,
        isRead: false,
        priority: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].HIGH,
        created_at: now,
        updated_at: now
    };
}
/** Crée la transaction de gain des investissements arrivés à échéance. */ function settleMaturedInvestments(user) {
    const transactions = [
        ...user.transactions ?? []
    ];
    const notifications = [
        ...user.notifications ?? []
    ];
    let changed = false;
    for (const investment of user.investments ?? []){
        const reference = `GAIN-${investment.id}`;
        const matured = new Date(investment.endDate).getTime() <= Date.now();
        if (!matured || transactions.some((item)=>item.reference === reference)) {
            continue;
        }
        const gain = investment.amount * investment.expectedReturn / 100;
        transactions.unshift({
            id: uid('tx'),
            type: 'gain',
            label: `Gains ${investment.planName} — ${investment.houseName}`,
            amount: investment.amount + gain,
            date: investment.endDate,
            status: 'réussi',
            paymentService: investment.paymentService,
            reference
        });
        notifications.unshift(notification(`Votre investissement ${investment.planName} chez ${investment.houseName} est arrivé à échéance : ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAmount"])(investment.amount + gain)} versés.`));
        changed = true;
    }
    if (!changed) return user;
    const updated = {
        ...user,
        transactions,
        notifications
    };
    saveUser(updated);
    return updated;
}
async function getHouses() {
    await wait();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedHouses"])();
}
async function getHouseById(id) {
    await wait();
    const house = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedHouses"])().find((item)=>item.id === id);
    if (!house) throw new Error(`Maison introuvable : ${id}`);
    return house;
}
async function getMarkets() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedMarkets"];
}
async function getUser() {
    await wait();
    const user = getCurrentUser();
    if (!user) {
        if (isBrowser() && __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].isTokenPresent()) //TURBOPACK unreachable
        ;
        return null;
    }
    return settleMaturedInvestments(user);
}
async function updateUser(item) {
    await wait();
    const user = getCurrentUser();
    if (!user) return {
        etat: false,
        error: [
            'Utilisateur non connecté'
        ]
    };
    const updated = {
        ...user,
        ...item
    };
    saveUser(updated);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(updated);
    return {
        etat: true,
        result: {
            client: updated
        }
    };
}
async function getNotifications() {
    await wait();
    return getCurrentUser()?.notifications ?? [];
}
async function readAllNotificationUser() {
    await wait();
    const user = getCurrentUser();
    if (!user) return {
        etat: false,
        error: [
            'Utilisateur non connecté'
        ]
    };
    saveUser({
        ...user,
        notifications: (user.notifications ?? []).map((item)=>({
                ...item,
                isRead: true
            }))
    });
    return {
        etat: true
    };
}
async function requestAuthentication(phoneNumber) {
    await wait();
    return {
        etat: true,
        message: `Code OTP envoyé au ${phoneNumber} (mode démo : n'importe quel code à 4 chiffres)`
    };
}
async function verifyAuthentication(phoneNumber, otp) {
    await wait();
    if (!/^\d{4}$/.test(otp)) {
        return {
            etat: false,
            error: [
                'Code OTP invalide'
            ]
        };
    }
    return login(findUserByPhone(phoneNumber) ?? createUser(phoneNumber));
}
async function createAnonymousUser() {
    await wait();
    const response = login(createUser());
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(response.result.client);
    return response;
}
async function biometricLogin(phoneNumber) {
    const response = await verifyAuthentication(phoneNumber, '0000');
    return {
        etat: true,
        result: response.result.client
    };
}
async function invest(payload) {
    await wait(1200);
    const user = getCurrentUser();
    if (!user) return {
        etat: false,
        error: [
            'Veuillez vous connecter'
        ]
    };
    const house = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedHouses"])().find((item)=>item.id === payload.houseId);
    const plan = house?.plans.find((item)=>item.id === payload.planId);
    if (!house || !plan) {
        return {
            etat: false,
            error: [
                'Formule introuvable'
            ]
        };
    }
    if (payload.amount < plan.minAmount || payload.amount > plan.maxAmount) {
        return {
            etat: false,
            error: [
                `Le montant doit être compris entre ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAmount"])(plan.minAmount)} et ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAmount"])(plan.maxAmount)}`
            ]
        };
    }
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + plan.durationDays * 24 * 60 * 60 * 1000);
    const investment = {
        id: uid('inv'),
        houseId: house.id,
        houseName: house.name,
        houseLogo: house.logo,
        planId: plan.id,
        planName: plan.name,
        amount: payload.amount,
        expectedReturn: plan.expectedReturn,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        paymentService: payload.service,
        phoneNumber: payload.numberTel
    };
    const transaction = {
        id: uid('tx'),
        type: 'investissement',
        label: `${plan.name} — ${house.name}`,
        amount: payload.amount,
        date: startDate.toISOString(),
        status: 'réussi',
        paymentService: payload.service,
        reference: `INV-${investment.id.slice(4, 17)}`
    };
    saveUser({
        ...user,
        phone_number: user.phone_number || payload.numberTel,
        investments: [
            investment,
            ...user.investments ?? []
        ],
        transactions: [
            transaction,
            ...user.transactions ?? []
        ],
        notifications: [
            notification(`Investissement de ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAmount"])(payload.amount)} confirmé chez ${house.name} (${plan.name}).`),
            ...user.notifications ?? []
        ]
    });
    return {
        etat: true,
        result: {
            investment,
            transaction
        }
    };
}
async function getInvestments() {
    await wait();
    const user = getCurrentUser();
    return user ? settleMaturedInvestments(user).investments ?? [] : [];
}
async function getTransactions() {
    await wait();
    const user = getCurrentUser();
    return user ? settleMaturedInvestments(user).transactions ?? [] : [];
}
async function toggleFavorite(houseId) {
    await wait(50);
    const user = getCurrentUser();
    if (!user) return {
        etat: false,
        error: [
            'Veuillez vous connecter'
        ]
    };
    const favorites = user.favoriteHouseIds ?? [];
    const favoriteHouseIds = favorites.includes(houseId) ? favorites.filter((id)=>id !== houseId) : [
        ...favorites,
        houseId
    ];
    const updated = {
        ...user,
        favoriteHouseIds
    };
    saveUser(updated);
    return {
        etat: true,
        result: {
            client: updated
        }
    };
}
async function getReviews() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedReviews"];
}
async function getPromocodes() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedPromocodes"];
}
async function getOnboarding() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedOnboarding"];
}
}),
"[project]/invest/src/data/getNotifications.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotifications",
    ()=>getNotifications,
    "readAllNotificationUser",
    ()=>readAllNotificationUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
;
async function getNotifications() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNotifications"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_NOTIFICATIONS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Origin: origin,
            ...token && {
                Authorization: token
            }
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.result;
}
async function readAllNotificationUser() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readAllNotificationUser"]();
    try {
        const origin = window.origin;
        let token;
        // Vérifie si nous sommes côté client avant d'accéder à localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_NOTIFICATIONS, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Origin: origin,
                ...token && {
                    Authorization: token
                }
            },
            body: JSON.stringify({
                readAll: true
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Échec de la vérification OTP');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in update client:', error);
        throw error; // À gérer dans le composant appelant
    }
}
}),
"[project]/invest/src/stores/useNotification.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotificationStore",
    ()=>useNotificationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getNotifications.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const useNotificationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        notifications: [],
        setNotifications: async (notifications)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllNotificationIndexDb"])(notifications);
            }
            set({
                notifications
            });
        },
        readAllNotification: async (notifications)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readAllNotificationUser"])();
                const notifs = notifications.map((notification)=>({
                        ...notification,
                        isRead: true
                    }));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllNotificationIndexDb"])(notifications);
                set({
                    notifications: notifs
                });
            }
        },
        clear: async ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteAllNotificationsIndexDb"])();
            }
            set({
                notifications: []
            });
        },
        init: async ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                const notifs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllNotificationIndexDb"])();
                set({
                    notifications: notifs
                });
            }
        }
    }));
}),
"[project]/invest/src/data/getReviews.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReviews",
    ()=>getReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
async function getReviews() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReviews"]();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_REVIEWS);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.reviews;
}
}),
"[project]/invest/src/data/getPromocodes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPromocodes",
    ()=>getPromocodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
async function getPromocodes() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPromocodes"]();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_PROMOCODES);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.promocodes;
}
}),
"[project]/invest/src/data/getOnboarding.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOnboarding",
    ()=>getOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
async function getOnboarding() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOnboarding"]();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_ONBOARDING);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.onboarding;
}
}),
"[project]/invest/src/data/getUser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUser",
    ()=>getUser,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
;
;
;
;
async function getUser() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUser"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_USER, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Origin: origin,
            ...token && {
                Authorization: token
            }
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    if (json.etat) {
        const { access_token, ...rest } = json.result.client;
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(access_token);
        json.result.client = rest;
        const client = json.result.client;
        return client;
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].clearData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteAllNotificationsIndexDb"])();
    }
    return null;
}
async function updateUser(item) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUser"](item);
    try {
        const origin = window.origin;
        let token;
        // Vérifie si nous sommes côté client avant d'accéder à localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_USER, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Origin: origin,
                ...token && {
                    Authorization: token
                }
            },
            body: JSON.stringify(item)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Échec de la vérification OTP');
        }
        const data = await response.json();
        // Stockage du token si présent dans la réponse
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return data;
    } catch (error) {
        console.error('Error in update client:', error);
        throw error; // À gérer dans le composant appelant
    }
}
}),
"[project]/invest/src/data/request.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
;
async function apiRequest(url, init = {}) {
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    const response = await fetch(url, {
        method: init.method ?? 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...token && {
                Authorization: token
            }
        },
        ...init.body !== undefined && {
            body: JSON.stringify(init.body)
        }
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
}),
"[project]/invest/src/data/houses.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHouseById",
    ()=>getHouseById,
    "getHouses",
    ()=>getHouses,
    "getMarkets",
    ()=>getMarkets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/request.ts [app-ssr] (ecmascript)");
;
;
;
async function getHouses() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHouses"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_HOUSES);
    return json.result;
}
async function getHouseById(id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHouseById"](id);
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_HOUSES}/${id}`);
    return json.result;
}
async function getMarkets() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMarkets"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_MARKETS);
    return json.result;
}
}),
"[project]/invest/src/data/investments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInvestments",
    ()=>getInvestments,
    "getTransactions",
    ()=>getTransactions,
    "invest",
    ()=>invest,
    "toggleFavorite",
    ()=>toggleFavorite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/request.ts [app-ssr] (ecmascript)");
;
;
;
async function invest(payload) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invest"](payload);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].INVESTMENTS, {
        method: 'POST',
        body: payload
    });
}
async function getInvestments() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestments"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].INVESTMENTS);
    return json.result;
}
async function getTransactions() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactions"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].TRANSACTIONS);
    return json.result;
}
async function toggleFavorite(houseId) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFavorite"](houseId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].FAVORITES, {
        method: 'POST',
        body: {
            houseId
        }
    });
}
}),
"[project]/invest/src/data/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getReviews$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getReviews.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPromocodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getPromocodes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOnboarding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getOnboarding.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getNotifications.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/houses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/investments.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const data = {
    getReviews: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getReviews$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReviews"],
    getPromocodes: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPromocodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPromocodes"],
    getOnboarding: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOnboarding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOnboarding"],
    getNotifications: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNotifications"],
    getUser: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUser"],
    getHouses: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHouses"],
    getHouseById: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHouseById"],
    getMarkets: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMarkets"],
    invest: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invest"],
    getInvestments: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestments"],
    getTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactions"],
    toggleFavorite: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFavorite"]
};
}),
"[project]/invest/src/stores/useHousesStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHousesStore",
    ()=>useHousesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const useHousesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        houses: [],
        markets: [],
        isLoading: false,
        error: null,
        load: async ()=>{
            if (get().isLoading) return;
            set({
                isLoading: get().houses.length === 0,
                error: null
            });
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])() && get().houses.length === 0) {
                const cached = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllHousesIndexDb"])().catch(()=>[]);
                if (cached.length > 0) set({
                    houses: cached,
                    isLoading: false
                });
            }
            try {
                const [houses, markets] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getHouses(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getMarkets()
                ]);
                set({
                    houses,
                    markets,
                    isLoading: false
                });
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllHousesIndexDb"])(houses).catch(()=>undefined);
            } catch (error) {
                console.error('Erreur lors du chargement des maisons:', error);
                set({
                    isLoading: false,
                    error: get().houses.length === 0 ? 'Impossible de charger les maisons de trading' : null
                });
            }
        }
    }));
}),
"[project]/invest/src/stores/useInvestModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInvestModal",
    ()=>useInvestModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
'use client';
;
const useInvestModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isOpen: false,
        house: null,
        planId: null,
        openModal: (house, planId)=>set({
                isOpen: true,
                house,
                planId: planId ?? null
            }),
        closeModal: ()=>set({
                isOpen: false
            })
    }));
}),
"[project]/invest/src/stores/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stores",
    ()=>stores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useCartStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useCartStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useModalStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useModalStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useWishlistStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useWishlistStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useVerificationStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useVerificationStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useUserStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useNotification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useHousesStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useHousesStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useInvestModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useInvestModal.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const stores = {
    useCartStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useCartStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"],
    useModalStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useModalStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModalStore"],
    useWishlistStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useWishlistStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlistStore"],
    useVerificationStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useVerificationStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVerificationStore"],
    useUserStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"],
    useNotificationStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"],
    useHousesStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useHousesStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHousesStore"],
    useInvestModal: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useInvestModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInvestModal"]
};
}),
"[project]/invest/src/hooks/useDeviceDetect.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeviceDetect",
    ()=>useDeviceDetect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useWindowSize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@react-hookz/web/dist/useWindowSize/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@react-hookz/web/dist/useMediaQuery/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useNetworkState$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@react-hookz/web/dist/useNetworkState/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useScreenOrientation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@react-hookz/web/dist/useScreenOrientation/index.js [app-ssr] (ecmascript)");
;
function useDeviceDetect() {
    // measureOnMount: true => la taille réelle n'est lue qu'après le montage
    // (donc identique au SSR : {0, 0}) au lieu d'être lue de façon synchrone
    // pendant le rendu d'hydratation, ce qui provoquait un mismatch (React #418).
    const { width = 0, height = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useWindowSize$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowSize"])(undefined, true);
    const orientation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useScreenOrientation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScreenOrientation"])();
    const { online: isOnline } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useNetworkState$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNetworkState"])();
    // initializeWithValue: false => la valeur vaut `undefined` au SSR et lors du
    // premier rendu client (identique), puis se met à jour après le montage via
    // l'effet interne du hook. Sans ça, le premier rendu client lisait déjà le
    // vrai `matchMedia`, ce qui divergeait du HTML serveur et faisait planter
    // l'hydratation dès qu'un composant (Home, GameContent, ModalSubscribe...)
    // affichait un arbre différent selon isDesktop/isMobile.
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(max-width: 768px)', {
        initializeWithValue: false
    });
    const isTablet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(min-width: 769px) and (max-width: 1024px)', {
        initializeWithValue: false
    });
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$react$2d$hookz$2f$web$2f$dist$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])('(min-width: 1025px)', {
        initializeWithValue: false
    });
    return {
        width,
        height,
        orientation,
        isOnline,
        isMobile,
        isTablet,
        isDesktop
    };
}
}),
"[project]/invest/src/utils/notification_helper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notificationTitle",
    ()=>notificationTitle,
    "sortNotifications",
    ()=>sortNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/NotificationType.ts [app-ssr] (ecmascript)");
;
const notificationTitle = (notificationPioriry)=>{
    switch(notificationPioriry){
        case __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].PROMOTIONAL:
            return 'Promotion';
        case __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].LOW:
            return 'Conseil';
        case __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].HIGH:
            return 'Important';
        case __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].MEDIUM:
            return 'Information';
        default:
            return notificationPioriry;
    }
};
const sortNotifications = (notifications)=>{
    return [
        ...notifications
    ].sort((a, b)=>{
        // D'abord trier par statut de lecture (non lues en premier)
        if (a.isRead !== b.isRead) {
            return a.isRead ? 1 : -1;
        }
        // Pour les notifications de même statut, trier par date décroissante
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
};
}),
"[project]/invest/src/app/layoutPageClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$nextjs$2d$registry$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/nextjs-registry/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$nextjs$2d$registry$2f$es$2f$AntdRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AntdRegistry$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@ant-design/nextjs-registry/es/AntdRegistry.js [app-ssr] (ecmascript) <export default as AntdRegistry>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$hooks$2f$useDeviceDetect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/hooks/useDeviceDetect.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$notification_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/notification_helper.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LayoutPageClient = ({ children, leagueSpartan, dosis })=>{
    const { isOnline } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$hooks$2f$useDeviceDetect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeviceDetect"])();
    const { init, setNotifications, clear: clearNotification } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useNotificationStore();
    const { logout, setUser } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useUserStore();
    async function fetchData() {
        try {
            init();
            const [userData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getUser()
            ]);
            if (userData) {
                const notifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$notification_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortNotifications"])(userData.notifications);
                setNotifications(notifications);
                setUser(userData);
            } else {
                clearNotification();
                logout();
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données depuis API:', error);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOnline) {
            fetchData();
        }
    }, [
        isOnline
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
        id: "app",
        className: `${dosis.variable} ${leagueSpartan.variable}`,
        style: {
            backgroundColor: 'var(--white-color)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$ant$2d$design$2f$nextjs$2d$registry$2f$es$2f$AntdRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AntdRegistry$3e$__["AntdRegistry"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/invest/src/app/layoutPageClient.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/invest/src/app/layoutPageClient.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LayoutPageClient;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2a1bdc78._.js.map
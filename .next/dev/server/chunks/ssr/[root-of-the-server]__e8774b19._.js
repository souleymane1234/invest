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
    static FIRST_CONNEXION_KEY = 'first_connexion';
    // Mémorise `isFirstConnexion` (réponse de connexion) pour afficher l'accueil une seule fois
    static setFirstConnexion(value) {
        if (value) localStorage.setItem(this.FIRST_CONNEXION_KEY, 'true');
        else localStorage.removeItem(this.FIRST_CONNEXION_KEY);
    }
    static isFirstConnexion() {
        return localStorage.getItem(this.FIRST_CONNEXION_KEY) === 'true';
    }
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
"[project]/invest/src/types/WalletType.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_WALLET",
    ()=>EMPTY_WALLET,
    "WALLET_QUOTE_TYPES",
    ()=>WALLET_QUOTE_TYPES,
    "WALLET_TRANSACTION_STATUS_LABEL",
    ()=>WALLET_TRANSACTION_STATUS_LABEL,
    "WALLET_TRANSACTION_TYPE_LABEL",
    ()=>WALLET_TRANSACTION_TYPE_LABEL
]);
const WALLET_QUOTE_TYPES = [
    'deposit',
    'withdraw'
];
const WALLET_TRANSACTION_TYPE_LABEL = {
    deposit: 'Dépôt',
    withdraw: 'Retrait',
    investment: 'Investissement',
    payout: 'Versement',
    referral: 'Parrainage',
    capital: 'Capital restitué',
    other: 'Mouvement'
};
const WALLET_TRANSACTION_STATUS_LABEL = {
    PENDING: 'En cours',
    SUCCESS: 'Réussi',
    FAILED: 'Échoué',
    CANCELED: 'Annulé'
};
const EMPTY_WALLET = {
    activeBalance: 0,
    availableBalance: 0,
    investmentsInProgress: 0,
    investedAmount: 0,
    expectedPayout: 0,
    totalDeposited: 0,
    totalWithdrawn: 0,
    totalPayouts: 0,
    totalCapitalReturned: 0,
    totalReferralDividends: 0
};
}),
"[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORAGE_CURRENCY",
    ()=>STORAGE_CURRENCY,
    "accruedGain",
    ()=>accruedGain,
    "buildDailyPayouts",
    ()=>buildDailyPayouts,
    "convertAmount",
    ()=>convertAmount,
    "currencyName",
    ()=>currencyName,
    "currencySymbol",
    ()=>currencySymbol,
    "durationDays",
    ()=>durationDays,
    "elapsedDays",
    ()=>elapsedDays,
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
    "formatInputAmount",
    ()=>formatInputAmount,
    "formatNumber",
    ()=>formatNumber,
    "formatPercent",
    ()=>formatPercent,
    "investmentProgress",
    ()=>investmentProgress,
    "isInvestmentActive",
    ()=>isInvestmentActive,
    "isInvestmentCanceled",
    ()=>isInvestmentCanceled,
    "parseInputAmount",
    ()=>parseInputAmount,
    "remainingDays",
    ()=>remainingDays,
    "riskColor",
    ()=>riskColor,
    "storageToUsd",
    ()=>storageToUsd,
    "toInvestmentDetail",
    ()=>toInvestmentDetail,
    "usdToStorage",
    ()=>usdToStorage
]);
const DAY_MS = 24 * 60 * 60 * 1000;
const STORAGE_CURRENCY = 'XOF';
const XOF_FORMAT = {
    code: STORAGE_CURRENCY,
    digits: 0,
    symbol: 'FCFA'
};
const amountFormatter = new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0
});
const convertAmount = (amount, from, to, rates)=>{
    if (!Number.isFinite(amount)) return 0;
    const source = from.toUpperCase();
    const target = to.toUpperCase();
    if (source === target) return amount;
    const fromRate = rates[source];
    const toRate = rates[target];
    if (!fromRate || !toRate) return amount;
    return amount * (toRate / fromRate);
};
const usdToStorage = (usd, rates)=>Math.round(convertAmount(usd, 'USD', STORAGE_CURRENCY, rates));
const storageToUsd = (storageAmount, rates)=>{
    const usd = convertAmount(storageAmount, STORAGE_CURRENCY, 'USD', rates);
    return Math.round(usd * 100) / 100;
};
const currencySymbol = (code)=>{
    const upper = code.toUpperCase();
    if (upper === 'XOF' || upper === 'XAF') return 'FCFA';
    try {
        const part = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: upper,
            currencyDisplay: 'narrowSymbol'
        }).formatToParts(0).find((item)=>item.type === 'currency');
        return part?.value ?? upper;
    } catch  {
        return upper;
    }
};
const currencyName = (code)=>{
    try {
        return new Intl.DisplayNames([
            'fr'
        ], {
            type: 'currency'
        }).of(code.toUpperCase()) ?? code.toUpperCase();
    } catch  {
        return code.toUpperCase();
    }
};
const formatAmount = (value, format = XOF_FORMAT)=>{
    const digits = Math.max(0, format.digits);
    const amount = digits === 0 ? Math.round(value) : value;
    const formatted = new Intl.NumberFormat('fr-FR', {
        minimumFractionDigits: digits === 0 ? 0 : Math.min(2, digits),
        maximumFractionDigits: digits
    }).format(amount);
    return `${formatted} ${format.symbol}`;
};
const formatCompactAmount = (value, format = XOF_FORMAT)=>{
    const symbol = format.symbol;
    if (value >= 1_000_000_000) {
        return `${(value / 1_000_000_000).toLocaleString('fr-FR', {
            maximumFractionDigits: 1
        })} Md ${symbol}`;
    }
    if (value >= 1_000_000) {
        return `${(value / 1_000_000).toLocaleString('fr-FR', {
            maximumFractionDigits: 1
        })} M ${symbol}`;
    }
    return formatAmount(value, format);
};
const formatInputAmount = (value, digits)=>{
    if (!Number.isFinite(value)) return '';
    if (digits <= 0) return String(Math.round(value));
    return value.toFixed(digits).replace(/\.?0+$/, '').replace('.', ',');
};
const parseInputAmount = (raw)=>{
    const parsed = Number(raw.replace(/\s/g, '').replace(',', '.'));
    return Number.isFinite(parsed) ? parsed : 0;
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
const OPEN_STATUSES = [
    'PENDING',
    'ACTIVE'
];
const isInvestmentActive = (investment)=>OPEN_STATUSES.includes(investment.status) || !investment.status && new Date(investment.endDate).getTime() > Date.now();
const isInvestmentCanceled = (investment)=>investment.status === 'CANCELED';
const expectedGain = (amount, expectedReturn)=>amount * expectedReturn / 100;
const accruedGain = (investment)=>expectedGain(investment.amount, investment.expectedReturn) * investmentProgress(investment);
const remainingDays = (investment)=>Math.max(0, Math.ceil((new Date(investment.endDate).getTime() - Date.now()) / DAY_MS));
const durationDays = (investment)=>{
    const start = new Date(investment.startDate).getTime();
    const end = new Date(investment.endDate).getTime();
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
        return 1;
    }
    return Math.max(1, Math.round((end - start) / DAY_MS));
};
const elapsedDays = (investment)=>{
    const start = new Date(investment.startDate).getTime();
    if (!Number.isFinite(start)) return 0;
    const end = new Date(investment.endDate).getTime();
    const cap = Number.isFinite(end) ? Math.min(Date.now(), end) : Date.now();
    return Math.max(0, Math.min(durationDays(investment), Math.floor((cap - start) / DAY_MS)));
};
const toInvestmentDetail = (investment, extras = {})=>{
    const progress = extras.progress ?? investmentProgress(investment);
    const expected = extras.expectedGain ?? expectedGain(investment.amount, investment.expectedReturn);
    const paid = extras.paidAmount ?? expected * progress;
    const remaining = extras.remainingAmount ?? Math.max(0, expected - paid);
    return {
        ...investment,
        progress,
        expectedGain: expected,
        paidAmount: paid,
        remainingAmount: remaining,
        daysElapsed: extras.daysElapsed ?? elapsedDays(investment),
        daysRemaining: extras.daysRemaining ?? remainingDays(investment)
    };
};
const buildDailyPayouts = (investment)=>{
    const days = durationDays(investment);
    const gain = expectedGain(investment.amount, investment.expectedReturn);
    const daily = Math.floor(gain / days);
    const remainder = Math.round(gain - daily * days);
    const start = new Date(investment.startDate);
    start.setHours(12, 0, 0, 0);
    const now = Date.now();
    const canceled = investment.status === 'CANCELED';
    const matured = investment.status === 'MATURED' || investment.status === 'PAID';
    const list = [];
    for(let i = 0; i < days; i += 1){
        const date = new Date(start.getTime() + i * DAY_MS);
        if (canceled && date.getTime() > now) continue;
        const received = matured || date.getTime() <= now;
        list.push({
            id: `${investment.id}-day-${i + 1}`,
            date: date.toISOString(),
            amount: i === days - 1 ? daily + remainder : daily,
            status: received ? 'received' : 'upcoming'
        });
    }
    return list;
};
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
"[project]/invest/src/seeders/levels.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeLevelRank",
    ()=>computeLevelRank,
    "levelForHouseRoi",
    ()=>levelForHouseRoi,
    "levelForPlanReturn",
    ()=>levelForPlanReturn,
    "levelProgress",
    ()=>levelProgress,
    "levelStatus",
    ()=>levelStatus,
    "seedLevels",
    ()=>seedLevels
]);
const DAY_MS = 24 * 60 * 60 * 1000;
const seedLevels = [
    {
        rank: 1,
        name: 'Découverte',
        description: 'Votre point de départ : des formules courtes et prudentes pour vous familiariser.',
        color: '#b7793f',
        maxPlanReturn: 10,
        maxHouseAnnualRoi: 25,
        requirements: {
            completedInvestments: 0,
            completedAmount: 0,
            profileCompleted: false,
            accountAgeDays: 0
        },
        perks: [
            'Formules jusqu’à +10 %',
            'Maisons à risque faible'
        ]
    },
    {
        rank: 2,
        name: 'Confirmé',
        description: 'Vous avez fait vos preuves : accédez à des formules plus rémunératrices.',
        color: '#8a94a6',
        maxPlanReturn: 25,
        maxHouseAnnualRoi: 35,
        requirements: {
            completedInvestments: 1,
            completedAmount: 50_000,
            profileCompleted: true,
            accountAgeDays: 0
        },
        perks: [
            'Formules jusqu’à +25 %',
            'Maisons jusqu’à +35 % / an'
        ]
    },
    {
        rank: 3,
        name: 'Expert',
        description: 'Investisseur régulier : les stratégies dynamiques vous sont ouvertes.',
        color: '#e0a83a',
        maxPlanReturn: 50,
        maxHouseAnnualRoi: 55,
        requirements: {
            completedInvestments: 3,
            completedAmount: 500_000,
            profileCompleted: true,
            accountAgeDays: 30
        },
        perks: [
            'Formules jusqu’à +50 %',
            'Maisons jusqu’à +55 % / an'
        ]
    },
    {
        rank: 4,
        name: 'Élite',
        description: 'Accès complet à toutes les maisons et formules, y compris les plus performantes.',
        color: '#1e2538',
        maxPlanReturn: null,
        maxHouseAnnualRoi: null,
        requirements: {
            completedInvestments: 6,
            completedAmount: 2_000_000,
            profileCompleted: true,
            accountAgeDays: 90
        },
        perks: [
            'Toutes les formules',
            'Toutes les maisons, sans limite de rendement'
        ]
    }
];
const levelFor = (value, key)=>seedLevels.find((level)=>level[key] === null || value <= level[key]).rank;
const levelForPlanReturn = (expectedReturn)=>levelFor(expectedReturn, 'maxPlanReturn');
const levelForHouseRoi = (annualRoi)=>levelFor(annualRoi, 'maxHouseAnnualRoi');
function levelProgress(user) {
    const completed = (user.investments ?? []).filter((investment)=>new Date(investment.endDate).getTime() <= Date.now());
    const createdAt = user.created_at ? new Date(user.created_at).getTime() : Date.now();
    return {
        completedInvestments: completed.length,
        completedAmount: completed.reduce((acc, investment)=>acc + investment.amount, 0),
        profileCompleted: !!user.full_name?.trim() && !!user.email?.trim(),
        accountAgeDays: Math.floor((Date.now() - createdAt) / DAY_MS)
    };
}
const meetsRequirements = (level, progress)=>progress.completedInvestments >= level.requirements.completedInvestments && progress.completedAmount >= level.requirements.completedAmount && (!level.requirements.profileCompleted || progress.profileCompleted) && progress.accountAgeDays >= level.requirements.accountAgeDays;
function computeLevelRank(user) {
    const progress = levelProgress(user);
    let rank = 1;
    for (const level of seedLevels.slice(1)){
        if (!meetsRequirements(level, progress)) break;
        rank = level.rank;
    }
    return Math.max(rank, user.levelRank ?? 1);
}
function levelStatus(user) {
    const rank = user.levelRank ?? computeLevelRank(user);
    return {
        current: seedLevels.find((level)=>level.rank === rank),
        next: seedLevels.find((level)=>level.rank === rank + 1) ?? null,
        progress: levelProgress(user)
    };
}
}),
"[project]/invest/src/seeders/houses.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSeedHouses",
    ()=>buildSeedHouses,
    "seedMarkets",
    ()=>seedMarkets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/levels.ts [app-ssr] (ecmascript)");
;
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
    const houseLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelForHouseRoi"])(annualRoi);
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
            popular,
            requiredLevel: Math.max(houseLevel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelForPlanReturn"])(expectedReturn))
        }));
    return {
        id,
        name: seed.name,
        logo: `${seed.slug}-logo.png`,
        cover: `${seed.slug}-cover.jpg`,
        card: `${seed.slug}-card.jpg`,
        tagline: seed.tagline,
        description: seed.description,
        strategy: seed.strategy,
        markets: seedMarkets.filter((market)=>seed.markets.includes(market.id)),
        foundedYear: seed.foundedYear,
        country: seed.country,
        license: seed.license,
        verified: seed.verified,
        requiredLevel: houseLevel,
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
    "attachSeedData",
    ()=>attachSeedData,
    "biometricLogin",
    ()=>biometricLogin,
    "changeAccessCode",
    ()=>changeAccessCode,
    "createAnonymousUser",
    ()=>createAnonymousUser,
    "depositWallet",
    ()=>depositWallet,
    "getHouseById",
    ()=>getHouseById,
    "getHouses",
    ()=>getHouses,
    "getInvestmentById",
    ()=>getInvestmentById,
    "getInvestmentPayouts",
    ()=>getInvestmentPayouts,
    "getInvestments",
    ()=>getInvestments,
    "getInvestorLevel",
    ()=>getInvestorLevel,
    "getLevelStatus",
    ()=>getLevelStatus,
    "getLevels",
    ()=>getLevels,
    "getMarkets",
    ()=>getMarkets,
    "getNotifications",
    ()=>getNotifications,
    "getOnboarding",
    ()=>getOnboarding,
    "getPromocodes",
    ()=>getPromocodes,
    "getReferral",
    ()=>getReferral,
    "getReferralDividends",
    ()=>getReferralDividends,
    "getReferralFilleuls",
    ()=>getReferralFilleuls,
    "getReferralLevels",
    ()=>getReferralLevels,
    "getReviews",
    ()=>getReviews,
    "getTransactions",
    ()=>getTransactions,
    "getUser",
    ()=>getUser,
    "getWallet",
    ()=>getWallet,
    "getWalletQuote",
    ()=>getWalletQuote,
    "getWalletTransactionById",
    ()=>getWalletTransactionById,
    "getWalletTransactions",
    ()=>getWalletTransactions,
    "invest",
    ()=>invest,
    "rateHouse",
    ()=>rateHouse,
    "readAllNotificationUser",
    ()=>readAllNotificationUser,
    "requestAuthentication",
    ()=>requestAuthentication,
    "toggleFavorite",
    ()=>toggleFavorite,
    "updateUser",
    ()=>updateUser,
    "verifyAuthentication",
    ()=>verifyAuthentication,
    "withdrawWallet",
    ()=>withdrawWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/NotificationType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$WalletType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/WalletType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/houses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/levels.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const MAX_FAILED_ATTEMPTS = 3;
const SUSPENSION_STEPS_MS = [
    10,
    30,
    180,
    1440
].map((minutes)=>minutes * 60 * 1000);
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
// Uniquement des formules du palier 1 : un compte de démo démarre au palier Découverte.
const DEMO_PORTFOLIO = [
    [
        'sahel-trading',
        0,
        100_000,
        75
    ],
    [
        'baobab-invest',
        0,
        50_000,
        100
    ],
    [
        'baobab-invest',
        0,
        100_000,
        15
    ]
];
const DEMO_ACCOUNT_AGE_DAYS = 120;
/** Investissements d'exemple pour que le portefeuille de démo ne soit pas vide. */ function buildDemoPortfolio(phoneNumber) {
    const houses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedHouses"])();
    const investments = [];
    const transactions = [];
    DEMO_PORTFOLIO.forEach(([slug, planIndex, amount, startedDaysAgo], index)=>{
        const house = houses.find((item)=>item.id === `house-${slug}`);
        const plan = house.plans[planIndex];
        const start = new Date(Date.now() - startedDaysAgo * 24 * 60 * 60 * 1000);
        const end = new Date(start.getTime() + plan.durationDays * 24 * 60 * 60 * 1000);
        const id = `inv-demo-${index}`;
        const service = [
            'orangeci',
            'mtnci',
            'waveci'
        ][index];
        investments.push({
            id,
            houseId: house.id,
            houseName: house.name,
            houseLogo: house.logo,
            planId: plan.id,
            planName: plan.name,
            amount,
            expectedReturn: plan.expectedReturn,
            startDate: start.toISOString(),
            endDate: end.toISOString(),
            status: end.getTime() > Date.now() ? 'ACTIVE' : 'MATURED',
            paymentService: service,
            phoneNumber
        });
        transactions.push({
            id: `tx-demo-${index}`,
            type: 'investissement',
            label: `${plan.name} — ${house.name}`,
            amount,
            date: start.toISOString(),
            status: 'réussi',
            paymentService: service,
            reference: `INV-DEMO-${index + 1}`
        });
    });
    transactions.sort((a, b)=>b.date.localeCompare(a.date));
    return {
        investments,
        transactions
    };
}
function randomReferralCode() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({
        length: 8
    }, ()=>alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}
/** Soldes calculés comme le ferait le backend (`activeBalance`, `availableBalance`). */ function withBalances(user) {
    const invested = (user.investments ?? []).filter((investment)=>new Date(investment.endDate).getTime() > Date.now()).reduce((acc, investment)=>acc + investment.amount, 0);
    const { deposits, availableBalance } = (user.transactions ?? []).reduce((acc, transaction)=>{
        if (transaction.status !== 'réussi') return acc;
        if (transaction.type === 'deposit') {
            return {
                ...acc,
                deposits: acc.deposits + transaction.amount
            };
        }
        if (transaction.type === 'gain') {
            return {
                ...acc,
                availableBalance: acc.availableBalance + transaction.amount
            };
        }
        if (transaction.type === 'retrait') {
            return {
                ...acc,
                availableBalance: acc.availableBalance - transaction.amount
            };
        }
        return acc;
    }, {
        deposits: 0,
        availableBalance: 0
    });
    const activeBalance = invested + deposits;
    return {
        ...user,
        currency: user.currency ?? 'XOF',
        activeBalance,
        availableBalance
    };
}
function createUser(phoneNumber = '') {
    return {
        id: `${Date.now()}`,
        created_at: new Date(Date.now() - DEMO_ACCOUNT_AGE_DAYS * 24 * 60 * 60 * 1000).toISOString(),
        levelRank: 1,
        currency: 'XOF',
        referralCode: randomReferralCode(),
        full_name: '',
        pseudo: '',
        email: null,
        phone_number: phoneNumber,
        profil: 'avatar_21.jpg',
        notifications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedNotifications"])(),
        ...buildDemoPortfolio(phoneNumber),
        favoriteHouseIds: [
            'house-sahel-trading'
        ]
    };
}
/** Recalcule le palier ; notifie l'utilisateur quand il en gagne un. */ function refreshLevel(user) {
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeLevelRank"])(user);
    if (rank === user.levelRank) return user;
    const isPromotion = user.levelRank !== undefined && rank > user.levelRank;
    const level = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedLevels"].find((item)=>item.rank === rank);
    const updated = {
        ...user,
        levelRank: rank,
        notifications: isPromotion ? [
            notification(`Félicitations ! Vous passez au palier ${level.name} : ${level.perks.join(', ')}.`),
            ...user.notifications ?? []
        ] : user.notifications
    };
    saveUser(updated);
    return updated;
}
/** Même format que `POST /user/auth/valid-authentification`. */ function login(user, isFirstConnexion = false) {
    const withCode = {
        ...user,
        referralCode: user.referralCode ?? randomReferralCode()
    };
    saveUser(withCode);
    return {
        etat: true,
        result: {
            client: {
                ...withBalances(refreshLevel(settleMaturedInvestments(withCode))),
                access_token: `${TOKEN_PREFIX}${user.id}`
            },
            isFirstConnexion
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
const PROFILE_FIELDS = [
    'full_name',
    'pseudo',
    'email',
    'phone_number',
    'profil',
    'currency',
    'referralCode'
];
function attachSeedData(client) {
    const db = readDb();
    const existing = db.users[client.id];
    const record = {
        ...existing ?? {
            id: client.id,
            created_at: new Date().toISOString(),
            levelRank: 1,
            notifications: [],
            investments: [],
            transactions: [],
            favoriteHouseIds: []
        }
    };
    for (const field of PROFILE_FIELDS){
        record[field] = client[field];
    }
    saveUser(record);
    const seeded = withBalances(refreshLevel(settleMaturedInvestments(record)));
    return {
        ...client,
        created_at: seeded.created_at,
        levelRank: seeded.levelRank,
        investments: seeded.investments,
        transactions: seeded.transactions,
        favoriteHouseIds: seeded.favoriteHouseIds,
        activeBalance: seeded.activeBalance,
        availableBalance: seeded.availableBalance
    };
}
async function getHouses() {
    await wait();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedHouses"])();
}
async function getHouseById(id) {
    await wait();
    const houses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedHouses"])();
    const house = houses.find((item)=>item.id === id);
    if (!house) throw new Error(`Maison introuvable : ${id}`);
    return {
        house,
        similar: houses.filter((item)=>item.id !== id).slice(0, 4),
        investorLevel: null
    };
}
async function getMarkets() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedMarkets"];
}
async function rateHouse(houseId, payload) {
    await wait();
    const user = getCurrentUser();
    if (!user) {
        return {
            etat: false,
            error: [
                'Connectez-vous pour laisser un avis'
            ]
        };
    }
    const invested = (user.investments ?? []).some((item)=>item.houseId === houseId);
    if (!invested) {
        return {
            etat: false,
            error: [
                'Vous devez avoir investi dans cette maison pour la noter.'
            ]
        };
    }
    return {
        etat: true,
        message: 'Avis publié',
        result: {
            rating: payload.rating,
            message: payload.message,
            author: user.full_name || user.pseudo
        }
    };
}
async function getUser() {
    await wait();
    const user = getCurrentUser();
    if (!user) {
        if (isBrowser() && __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].isTokenPresent()) //TURBOPACK unreachable
        ;
        return null;
    }
    return withBalances(refreshLevel(settleMaturedInvestments(user)));
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
    const { levelRank: _ignored, ...editable } = item;
    const updated = withBalances(refreshLevel({
        ...user,
        ...editable
    }));
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
function formatWait(ms) {
    const minutes = Math.ceil(ms / 60_000);
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.ceil(minutes / 60);
    return hours < 24 ? `${hours} h` : `${Math.ceil(hours / 24)} j`;
}
function saveCredential(userId, credential) {
    const db = readDb();
    db.credentials = {
        ...db.credentials ?? {},
        [userId]: credential
    };
    writeDb(db);
}
const isValidAccessCode = (code)=>new RegExp(`^\\d{${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACCESS_CODE_MIN_LENGTH"]},${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACCESS_CODE_MAX_LENGTH"]}}$`).test(code);
const accessCodeFormatError = `Le code d'accès doit contenir ${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACCESS_CODE_MIN_LENGTH"]} à ${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACCESS_CODE_MAX_LENGTH"]} chiffres`;
async function requestAuthentication(phoneNumber, _referralCode) {
    await wait();
    const user = findUserByPhone(phoneNumber);
    const blockedUntil = user && readDb().credentials?.[user.id]?.blockedUntil;
    return {
        etat: true,
        result: {
            isNewAccount: !user,
            isLocked: !!blockedUntil && blockedUntil > Date.now()
        }
    };
}
async function verifyAuthentication(phoneNumber, otp, referralCode) {
    await wait();
    if (!isValidAccessCode(otp)) {
        return {
            etat: false,
            error: [
                accessCodeFormatError
            ]
        };
    }
    const existing = findUserByPhone(phoneNumber);
    if (!existing) {
        const user = {
            ...createUser(phoneNumber),
            referredBy: referralCode || undefined
        };
        saveCredential(user.id, {
            code: otp,
            failures: 0,
            suspensions: 0
        });
        return login(user, true);
    }
    const credential = readDb().credentials?.[existing.id];
    if (!credential) {
        // Compte créé avant l'arrivée des codes d'accès : le premier code saisi devient le sien.
        saveCredential(existing.id, {
            code: otp,
            failures: 0,
            suspensions: 0
        });
        return login(existing);
    }
    if (credential.blockedUntil && credential.blockedUntil > Date.now()) {
        return {
            etat: false,
            error: [
                `Trop de codes erronés : compte suspendu, réessayez dans ${formatWait(credential.blockedUntil - Date.now())}.`
            ]
        };
    }
    if (credential.code !== otp) {
        const failures = credential.failures + 1;
        if (failures >= MAX_FAILED_ATTEMPTS) {
            const duration = SUSPENSION_STEPS_MS[Math.min(credential.suspensions, SUSPENSION_STEPS_MS.length - 1)];
            saveCredential(existing.id, {
                ...credential,
                failures: 0,
                suspensions: credential.suspensions + 1,
                blockedUntil: Date.now() + duration
            });
            return {
                etat: false,
                error: [
                    `Code incorrect. Compte suspendu pendant ${formatWait(duration)}.`
                ]
            };
        }
        saveCredential(existing.id, {
            ...credential,
            failures
        });
        const left = MAX_FAILED_ATTEMPTS - failures;
        return {
            etat: false,
            error: [
                `Code incorrect. Il vous reste ${left} tentative${left > 1 ? 's' : ''}.`
            ]
        };
    }
    saveCredential(existing.id, {
        ...credential,
        failures: 0,
        blockedUntil: undefined
    });
    return login(existing);
}
async function changeAccessCode(currentCode, newCode) {
    await wait();
    const user = getCurrentUser();
    if (!user) return {
        etat: false,
        error: [
            'Veuillez vous connecter'
        ]
    };
    const credential = readDb().credentials?.[user.id];
    if (credential && credential.code !== currentCode) {
        return {
            etat: false,
            error: [
                'Le code d’accès actuel est incorrect'
            ]
        };
    }
    if (!isValidAccessCode(newCode)) {
        return {
            etat: false,
            error: [
                accessCodeFormatError
            ]
        };
    }
    if (newCode === currentCode) {
        return {
            etat: false,
            error: [
                'Le nouveau code doit être différent de l’actuel'
            ]
        };
    }
    saveCredential(user.id, {
        code: newCode,
        failures: 0,
        suspensions: credential?.suspensions ?? 0
    });
    return {
        etat: true,
        message: 'Code d’accès modifié'
    };
}
async function createAnonymousUser() {
    await wait();
    const response = login(createUser(), true);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(response.result.client.access_token);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(response.result.client);
    return response;
}
async function biometricLogin(phoneNumber) {
    const response = login(findUserByPhone(phoneNumber) ?? createUser(phoneNumber));
    const { access_token, ...client } = response.result.client;
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(access_token);
    return {
        etat: true,
        result: client
    };
}
async function invest(payload) {
    await wait(1200);
    const current = getCurrentUser();
    if (!current) return {
        etat: false,
        error: [
            'Veuillez vous connecter'
        ]
    };
    const user = refreshLevel(settleMaturedInvestments(current));
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
    const userLevel = user.levelRank ?? 1;
    if (plan.requiredLevel > userLevel) {
        const required = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedLevels"].find((item)=>item.rank === plan.requiredLevel);
        return {
            etat: false,
            error: [
                `Cette formule est réservée au palier ${required.name} ou supérieur.`
            ],
            result: {
                code: 'LEVEL_REQUIRED',
                requiredLevel: plan.requiredLevel
            }
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
        status: 'ACTIVE',
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
async function getInvestmentById(id) {
    await wait();
    const investments = await getInvestments();
    const investment = investments.find((item)=>item.id === id);
    if (!investment) return null;
    const payouts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildDailyPayouts"])(investment);
    const paidAmount = payouts.filter((item)=>item.status === 'received').reduce((acc, item)=>acc + item.amount, 0);
    const remainingAmount = payouts.filter((item)=>item.status === 'upcoming').reduce((acc, item)=>acc + item.amount, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toInvestmentDetail"])(investment, {
        paidAmount,
        remainingAmount
    });
}
async function getInvestmentPayouts(id) {
    await wait();
    const investments = await getInvestments();
    const investment = investments.find((item)=>item.id === id);
    const list = investment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildDailyPayouts"])(investment) : [];
    return {
        received: list.filter((item)=>item.status === 'received'),
        upcoming: list.filter((item)=>item.status === 'upcoming')
    };
}
async function getTransactions() {
    await wait();
    const user = getCurrentUser();
    return user ? settleMaturedInvestments(user).transactions ?? [] : [];
}
const XOF_PER_USD = 588.30159502;
function toWalletTransaction(transaction) {
    const type = transaction.type === 'retrait' ? 'withdraw' : transaction.type === 'deposit' ? 'deposit' : transaction.type === 'gain' ? 'payout' : 'investment';
    return {
        id: transaction.id,
        type,
        status: transaction.status === 'réussi' ? 'SUCCESS' : transaction.status === 'échoué' ? 'FAILED' : 'PENDING',
        amount: transaction.amount,
        service: transaction.paymentService,
        reference: transaction.reference,
        label: transaction.label,
        date: transaction.date,
        balanceKind: type === 'investment' || type === 'deposit' ? 'active' : 'available'
    };
}
function seedWalletTransactions() {
    const user = getCurrentUser();
    const settled = user ? settleMaturedInvestments(user) : null;
    const fromHistory = (settled?.transactions ?? []).map(toWalletTransaction);
    const pending = {
        id: 'tx-pending-deposit',
        type: 'deposit',
        status: 'PENDING',
        amount: 10_000,
        usdAmount: 10_000 / XOF_PER_USD,
        service: 'waveci',
        reference: 'DEP-PENDING-1',
        label: 'Recharge Wave',
        date: new Date().toISOString(),
        balanceKind: 'available',
        message: 'Confirmez le paiement sur votre téléphone.'
    };
    const byId = new Map();
    for (const item of [
        pending,
        ...fromHistory
    ])byId.set(item.id, item);
    return [
        ...byId.values()
    ].sort((a, b)=>b.date.localeCompare(a.date));
}
async function getWallet() {
    await wait();
    const user = getCurrentUser();
    if (!user) return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$WalletType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_WALLET"]
    };
    const settled = withBalances(settleMaturedInvestments(user));
    const investments = settled.investments ?? [];
    const active = investments.filter((item)=>item.status !== 'CANCELED' && new Date(item.endDate).getTime() > Date.now());
    const done = investments.filter((item)=>item.status !== 'CANCELED' && new Date(item.endDate).getTime() <= Date.now());
    const txs = settled.transactions ?? [];
    const sum = (type, status = 'réussi')=>txs.filter((item)=>item.type === type && item.status === status).reduce((acc, item)=>acc + item.amount, 0);
    return {
        activeBalance: settled.activeBalance ?? 0,
        availableBalance: settled.availableBalance ?? 0,
        investmentsInProgress: active.length,
        investedAmount: active.reduce((acc, item)=>acc + item.amount, 0),
        expectedPayout: active.reduce((acc, item)=>acc + item.amount * item.expectedReturn / 100, 0),
        totalDeposited: sum('deposit'),
        totalWithdrawn: sum('retrait'),
        totalPayouts: sum('gain'),
        totalCapitalReturned: done.reduce((acc, item)=>acc + item.amount, 0),
        totalReferralDividends: 0
    };
}
async function getWalletTransactions(params = {}) {
    await wait();
    const page = params.page ?? 1;
    const limit = params.limit ?? 20;
    const type = params.type?.toLowerCase();
    const all = seedWalletTransactions().filter((item)=>!type || item.type === type);
    const start = (page - 1) * limit;
    return {
        items: all.slice(start, start + limit),
        total: all.length,
        page,
        limit
    };
}
async function getWalletTransactionById(id) {
    await wait();
    return seedWalletTransactions().find((item)=>item.id === id) ?? null;
}
async function getWalletQuote(params) {
    await wait();
    const usdAmount = params.amount / XOF_PER_USD;
    return {
        type: params.type,
        service: params.service,
        amount: params.amount,
        usdAmount,
        rate: XOF_PER_USD,
        fee: 0,
        netUsd: usdAmount,
        currency: 'XOF'
    };
}
async function depositWallet(payload) {
    await wait(900);
    const current = getCurrentUser();
    if (!current) return {
        etat: false,
        error: [
            'Veuillez vous connecter'
        ]
    };
    if (payload.service === 'orangeci' && (!payload.otp || payload.otp.length !== 6)) {
        return {
            etat: false,
            error: [
                'Le code OTP doit contenir 6 chiffres'
            ]
        };
    }
    if (payload.amount <= 0) {
        return {
            etat: false,
            error: [
                'Montant invalide'
            ]
        };
    }
    const user = withBalances(settleMaturedInvestments(current));
    const transaction = {
        id: uid('tx'),
        type: 'deposit',
        label: `Recharge ${payload.service}`,
        amount: payload.amount,
        date: new Date().toISOString(),
        status: 'réussi',
        paymentService: payload.service,
        reference: `DEP-${Date.now()}`
    };
    saveUser({
        ...user,
        phone_number: user.phone_number || payload.numberTel,
        transactions: [
            transaction,
            ...user.transactions ?? []
        ],
        notifications: [
            notification(`Recharge de ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAmount"])(payload.amount)} confirmée sur votre solde actif.`),
            ...user.notifications ?? []
        ]
    });
    return {
        etat: true,
        result: {
            transaction: toWalletTransaction(transaction)
        }
    };
}
async function withdrawWallet(payload) {
    await wait(900);
    const current = getCurrentUser();
    if (!current) return {
        etat: false,
        error: [
            'Veuillez vous connecter'
        ]
    };
    const user = withBalances(settleMaturedInvestments(current));
    if (payload.amount <= 0) {
        return {
            etat: false,
            error: [
                'Montant invalide'
            ]
        };
    }
    if (payload.amount > (user.availableBalance ?? 0)) {
        return {
            etat: false,
            error: [
                'Solde disponible insuffisant'
            ]
        };
    }
    const transaction = {
        id: uid('tx'),
        type: 'retrait',
        label: `Retrait ${payload.service}`,
        amount: payload.amount,
        date: new Date().toISOString(),
        status: 'réussi',
        paymentService: payload.service,
        reference: `WTH-${Date.now()}`
    };
    saveUser({
        ...user,
        phone_number: user.phone_number || payload.numberTel,
        transactions: [
            transaction,
            ...user.transactions ?? []
        ],
        notifications: [
            notification(`Retrait de ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAmount"])(payload.amount)} envoyé vers votre mobile money.`),
            ...user.notifications ?? []
        ]
    });
    return {
        etat: true,
        result: {
            transaction: toWalletTransaction(transaction)
        }
    };
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
    const stored = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getUser();
    const client = stored?.id === updated.id ? {
        ...stored,
        favoriteHouseIds
    } : updated;
    return {
        etat: true,
        result: {
            client
        }
    };
}
async function getLevels() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedLevels"];
}
async function getLevelStatus() {
    await wait();
    const user = getCurrentUser();
    return user ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelStatus"])(refreshLevel(settleMaturedInvestments(user))) : null;
}
async function getInvestorLevel() {
    await wait();
    const status = await getLevelStatus();
    if (!status) return null;
    const missing = status.next ? Math.max(0, status.next.requirements.completedInvestments - status.progress.completedInvestments) : 0;
    return {
        level: status.current.name.toUpperCase(),
        levelLabel: status.current.name,
        investmentCount: status.progress.completedInvestments,
        nextLevel: status.next ? {
            level: status.next.name.toUpperCase(),
            levelLabel: status.next.name,
            missingInvestments: missing
        } : undefined,
        amountSinceLevel: 0,
        referralsSinceLevel: 0,
        stars: {
            total: 0,
            fromAmount: 0,
            fromReferrals: 0,
            isMax: false,
            nextHalfStar: {
                missingAmount: 500,
                missingReferrals: 1
            }
        },
        rules: {
            starAmountStep: 1000,
            referralsPerStar: 2,
            maxStars: 5,
            intermediateMinInvestments: 4,
            professionalMinInvestments: 11
        }
    };
}
const SEED_REFERRAL_LEVELS = [
    {
        id: 'seed-ref-debutant',
        name: 'Débutant',
        position: 0,
        minReferrals: 0,
        minActiveReferrals: 0,
        maxParallelInvestments: 1,
        dividendPercentage: 0,
        maxDividendsPerReferral: 0
    },
    {
        id: 'seed-ref-bronze',
        name: 'Bronze',
        position: 1,
        minReferrals: 1,
        minActiveReferrals: 1,
        maxParallelInvestments: 2,
        dividendPercentage: 10,
        maxDividendsPerReferral: 3
    },
    {
        id: 'seed-ref-argent',
        name: 'Argent',
        position: 2,
        minReferrals: 5,
        minActiveReferrals: 3,
        maxParallelInvestments: 3,
        dividendPercentage: 10,
        maxDividendsPerReferral: 5
    },
    {
        id: 'seed-ref-or',
        name: 'Or',
        position: 3,
        minReferrals: 15,
        minActiveReferrals: 10,
        maxParallelInvestments: 5,
        dividendPercentage: 10,
        maxDividendsPerReferral: 10
    }
];
async function getReferral() {
    await wait();
    const user = getCurrentUser();
    if (!user) return null;
    const code = user.referralCode || randomReferralCode();
    const level = SEED_REFERRAL_LEVELS[0];
    const next = SEED_REFERRAL_LEVELS[1];
    const activeInvestments = (user.investments ?? []).filter((item)=>new Date(item.endDate).getTime() > Date.now()).length;
    return {
        referralCode: code,
        referralLink: `?ref=${code}`,
        sponsor: user.referredBy ? {
            id: 'sponsor',
            name: 'Parrain',
            referralCode: user.referredBy
        } : null,
        level,
        nextLevel: {
            ...next,
            missingReferrals: Math.max(0, next.minReferrals),
            missingActiveReferrals: Math.max(0, next.minActiveReferrals)
        },
        stats: {
            totalReferrals: 0,
            activeReferrals: 0,
            dividendsCount: 0,
            totalDividends: 0
        },
        investmentsInProgress: activeInvestments,
        remainingParallelInvestments: Math.max(0, level.maxParallelInvestments - activeInvestments)
    };
}
async function getReferralLevels() {
    await wait();
    return SEED_REFERRAL_LEVELS;
}
async function getReferralFilleuls() {
    await wait();
    return [];
}
async function getReferralDividends() {
    await wait();
    return [];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/NotificationType.ts [app-ssr] (ecmascript)");
;
;
;
;
function asRecord(value) {
    return value && typeof value === 'object' ? value : null;
}
function asDate(value) {
    if (value instanceof Date) return value;
    const parsed = new Date(String(value ?? ''));
    return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}
function mapPriority(value) {
    const raw = String(value ?? '').toLowerCase();
    if (raw === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].HIGH || raw === 'urgente') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].HIGH;
    }
    if (raw === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].LOW || raw === 'conseil') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].LOW;
    }
    if (raw === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].PROMOTIONAL || raw === 'promotional' || raw === 'promotion') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].PROMOTIONAL;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].MEDIUM;
}
function mapNotification(raw, index) {
    const item = asRecord(raw);
    if (!item) return null;
    const id = String(item.id ?? item._id ?? `notif-${index}`);
    const message = String(item.message ?? item.content ?? item.title ?? item.text ?? '').trim();
    if (!id) return null;
    const readAt = item.read_at ?? item.readAt;
    const isRead = Boolean(item.isRead ?? item.is_read ?? item.read ?? (readAt != null && readAt !== ''));
    return {
        id,
        message,
        isRead,
        priority: mapPriority(item.priority),
        created_at: asDate(item.created_at ?? item.createdAt ?? item.created),
        updated_at: asDate(item.updated_at ?? item.updatedAt ?? item.updated ?? item.created_at)
    };
}
function mapNotifications(result) {
    const list = Array.isArray(result) ? result : Array.isArray(asRecord(result)?.notifications) ? asRecord(result).notifications : Array.isArray(asRecord(result)?.data) ? asRecord(result).data : [];
    return list.map(mapNotification).filter((item)=>item !== null);
}
function errorFromBody(errorData, fallback) {
    const body = asRecord(errorData);
    const message = body?.message ?? body?.error;
    if (Array.isArray(message)) return message.join(' ');
    return typeof message === 'string' && message ? message : fallback;
}
async function getNotifications() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNotifications"]();
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const response = undefined;
    const json = undefined;
}
async function readAllNotificationUser() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readAllNotificationUser"]();
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            etat: false,
            error: [
                'Utilisateur non connecté'
            ]
        };
    }
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const response = undefined;
    const data = undefined;
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
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) return;
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readAllNotificationUser"])();
            if (response.etat === false) return;
            const notifs = notifications.map((notification)=>({
                    ...notification,
                    isRead: true
                }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllNotificationIndexDb"])(notifs);
            set({
                notifications: notifs
            });
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
"[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrencyRates",
    ()=>getCurrencyRates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
;
const FALLBACK_CURRENCIES = [
    {
        code: 'USD',
        rate: 1,
        digits: 2,
        source: 'base',
        rateDate: ''
    },
    {
        code: 'XOF',
        rate: 588.30159502,
        digits: 0,
        source: 'parité euro',
        rateDate: ''
    },
    {
        code: 'XAF',
        rate: 588.30159502,
        digits: 0,
        source: 'parité euro',
        rateDate: ''
    },
    {
        code: 'EUR',
        rate: 0.89686,
        digits: 2,
        source: 'frankfurter',
        rateDate: ''
    },
    {
        code: 'GBP',
        rate: 0.7503,
        digits: 2,
        source: 'frankfurter',
        rateDate: ''
    }
];
const FALLBACK_RATES = {
    base: 'USD',
    updatedAt: '',
    rates: Object.fromEntries(FALLBACK_CURRENCIES.map((item)=>[
            item.code,
            item.rate
        ])),
    currencies: FALLBACK_CURRENCIES
};
async function getCurrencyRates() {
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_CURRENCY_RATES, {
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();
        const result = json?.result;
        if (!json?.etat || !result?.rates) throw new Error('Réponse devises invalide');
        return {
            base: result.base || 'USD',
            updatedAt: result.updatedAt || '',
            rates: result.rates,
            currencies: Array.isArray(result.currencies) ? result.currencies : []
        };
    } catch  {
        return FALLBACK_RATES;
    }
}
}),
"[project]/invest/src/data/getUser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUser",
    ()=>getUser,
    "updateUser",
    ()=>updateUser,
    "withStorageBalances",
    ()=>withStorageBalances
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function clearSession() {
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].clearData();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteAllNotificationsIndexDb"])().catch(()=>undefined);
}
/** Retire le token du client renvoyé par l'API (il est stocké à part). */ function storeClient(client) {
    const { access_token, ...rest } = client;
    if (access_token) __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(access_token);
    // Tant que les investissements sont simulés, on y rattache les données seeder.
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_INVESTMENTS"] ? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attachSeedData"](rest) : rest;
}
async function withStorageBalances(client) {
    const rates = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])()).rates;
    return {
        ...client,
        activeBalance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usdToStorage"])(client.activeBalance ?? 0, rates),
        availableBalance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usdToStorage"])(client.availableBalance ?? 0, rates)
    };
}
async function getUser() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUser"]();
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const response = undefined;
    const json = undefined;
}
async function updateUser(item) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUser"](item);
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_USER, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...token && {
                Authorization: token
            }
        },
        body: JSON.stringify(item)
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>null);
        const message = errorData?.message;
        return {
            etat: false,
            error: [
                Array.isArray(message) ? message.join(' ') : message || 'Impossible de mettre à jour le profil'
            ]
        };
    }
    const data = await response.json().catch(()=>({}));
    if (data.etat === false) return data;
    // La réponse du PUT n'est pas documentée : on relit le profil à jour.
    const client = data.result?.client ? await withStorageBalances(storeClient(data.result.client)) : await getUser();
    if (!client) return {
        etat: false,
        error: [
            'Session expirée, reconnectez-vous'
        ]
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(client);
    return {
        etat: true,
        message: data.message,
        result: {
            client
        }
    };
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
            Accept: 'application/json',
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
"[project]/invest/src/data/mapTradingHouse.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenHouseGroups",
    ()=>flattenHouseGroups,
    "mapInvestorLevel",
    ()=>mapInvestorLevel,
    "mapMarket",
    ()=>mapMarket,
    "mapReview",
    ()=>mapReview,
    "mapTradingHouse",
    ()=>mapTradingHouse,
    "rankFromMinLevel",
    ()=>rankFromMinLevel,
    "userFromInvestorLevel",
    ()=>userFromInvestorLevel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)");
;
const LEVEL_RANK = {
    BEGINNER: 1,
    DEBUTANT: 1,
    INTERMEDIATE: 2,
    CONFIRMED: 2,
    CONFIRME: 2,
    ADVANCED: 3,
    EXPERT: 3,
    ELITE: 4,
    PROFESSIONAL: 3
};
const asRecord = (value)=>value && typeof value === 'object' ? value : null;
const usdToStorage = (usd, rates)=>Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertAmount"])(usd, 'USD', __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_CURRENCY"], rates));
const firstSentence = (text)=>{
    const trimmed = text.trim();
    const match = trimmed.match(/^.+?[.!?]/);
    const sentence = (match ? match[0] : trimmed).trim();
    return sentence.length > 140 ? `${sentence.slice(0, 137)}…` : sentence;
};
const riskFromSuccess = (successRate)=>{
    if (successRate >= 70) return 'faible';
    if (successRate >= 50) return 'modéré';
    return 'élevé';
};
const rankFromMinLevel = (minLevel)=>LEVEL_RANK[(minLevel || 'BEGINNER').toUpperCase()] ?? 1;
function userFromInvestorLevel(user, level) {
    return {
        ...user,
        levelRank: rankFromMinLevel(level.level),
        levelLabel: level.levelLabel,
        stars: level.stars.total
    };
}
function mapInvestorLevel(raw, rates) {
    if (!raw?.level) return null;
    const rateMap = 'rates' in rates ? rates.rates : rates;
    const next = raw.nextLevel;
    const stars = raw.stars;
    const half = stars?.nextHalfStar;
    const rules = raw.rules;
    return {
        level: raw.level,
        levelLabel: raw.levelLabel || raw.level,
        levelSince: raw.levelSince,
        investmentCount: Number(raw.investmentCount ?? 0),
        nextLevel: next?.level ? {
            level: next.level,
            levelLabel: next.levelLabel || next.level,
            missingInvestments: Number(next.missingInvestments ?? 0)
        } : undefined,
        amountSinceLevel: usdToStorage(Number(raw.amountSinceLevel ?? 0), rateMap),
        referralsSinceLevel: Number(raw.referralsSinceLevel ?? 0),
        stars: {
            total: Number(stars?.total ?? 0),
            fromAmount: Number(stars?.fromAmount ?? 0),
            fromReferrals: Number(stars?.fromReferrals ?? 0),
            isMax: Boolean(stars?.isMax),
            nextHalfStar: half ? {
                missingAmount: usdToStorage(Number(half.missingAmount ?? 0), rateMap),
                missingReferrals: Number(half.missingReferrals ?? 0)
            } : undefined
        },
        rules: rules ? {
            starAmountStep: usdToStorage(Number(rules.starAmountStep ?? 0), rateMap),
            referralsPerStar: Number(rules.referralsPerStar ?? 0),
            maxStars: Number(rules.maxStars ?? 5),
            intermediateMinInvestments: Number(rules.intermediateMinInvestments ?? 0),
            professionalMinInvestments: Number(rules.professionalMinInvestments ?? 0)
        } : undefined
    };
}
function mapMarket(raw) {
    return {
        id: String(raw.id ?? ''),
        name: String(raw.name ?? '')
    };
}
function mapReview(raw, index) {
    const item = asRecord(raw);
    if (!item) return null;
    const user = asRecord(item.user);
    const author = String(item.author ?? item.full_name ?? user?.full_name ?? user?.pseudo ?? 'Investisseur');
    const comment = String(item.comment ?? item.message ?? item.content ?? '').trim();
    return {
        id: String(item.id ?? `review-${index}`),
        author,
        avatar: String(item.avatar ?? item.profil ?? user?.profil ?? ''),
        rating: Number(item.rating ?? item.stars ?? 0),
        comment,
        date: String(item.created_at ?? item.date ?? new Date().toISOString())
    };
}
function mapPlan(forfait, house, rates, popularId) {
    const isOpen = forfait.isOpen ?? forfait.status === 'OPEN';
    return {
        id: forfait.id,
        houseId: forfait.tradingHouseId || house.id,
        name: forfait.title,
        minAmount: usdToStorage(Number(forfait.minAmount ?? 0), rates),
        maxAmount: usdToStorage(Number(forfait.maxAmount ?? 0), rates),
        durationDays: Number(forfait.workDurationDays ?? 0),
        expectedReturn: Number(forfait.roiPercentage ?? 0),
        payout: "à l'échéance",
        features: [],
        popular: forfait.id === popularId,
        requiredLevel: rankFromMinLevel(house.minLevel),
        requiredLevelLabel: house.minLevelLabel,
        description: forfait.description,
        canInvest: forfait.access?.canInvest ?? house.access?.canInvest,
        isOpen,
        subscriptionEndDate: forfait.subscriptionEndDate,
        maturityDate: forfait.maturityDate,
        minStars: Number(forfait.minStars ?? 0),
        status: forfait.status,
        totalCollected: usdToStorage(Number(forfait.totalCollected ?? 0), rates),
        investorsCount: Number(forfait.numberInvestors ?? 0),
        meetsLevel: forfait.access?.meetsLevel ?? house.access?.meetsLevel,
        meetsStars: forfait.access?.meetsStars ?? house.access?.meetsStars
    };
}
function mapTradingHouse(raw, rates, reviews = []) {
    const rateMap = 'rates' in rates ? rates.rates : rates;
    const forfaits = (raw.forfaits ?? []).filter((item)=>item.isActive !== false);
    const popularId = [
        ...forfaits
    ].sort((a, b)=>Number(b.roiPercentage ?? 0) - Number(a.roiPercentage ?? 0))[0]?.id;
    const plans = forfaits.map((item)=>mapPlan(item, raw, rateMap, popularId));
    const covers = (raw.covers ?? []).map((item)=>item.imageUrl).filter(Boolean);
    const maxRoi = Math.max(0, ...plans.map((plan)=>plan.expectedReturn));
    const successRate = Number(raw.successRate ?? 0);
    const collected = forfaits.reduce((acc, item)=>acc + Number(item.totalCollected ?? 0), 0);
    const forfaitInvestors = forfaits.reduce((acc, item)=>acc + Number(item.numberInvestors ?? 0), 0);
    const created = raw.created_at ? new Date(raw.created_at) : new Date();
    const description = raw.description ?? '';
    const foundedMatch = description.match(/fondé(?:e)? en (\d{4})/i);
    const foundedYear = foundedMatch ? Number(foundedMatch[1]) : Number.isNaN(created.getTime()) ? 0 : created.getFullYear();
    return {
        id: raw.id,
        name: raw.title,
        logo: raw.profilPicture || covers[0] || '',
        cover: covers[0] || raw.profilPicture || '',
        card: covers[0] || raw.profilPicture || '',
        tagline: firstSentence(description) || raw.minLevelLabel || raw.title,
        description,
        strategy: '',
        markets: (raw.categories ?? []).map(mapMarket),
        foundedYear,
        country: '',
        license: raw.isCertified ? 'Maison certifiée' : '',
        verified: Boolean(raw.isCertified),
        requiredLevel: rankFromMinLevel(raw.minLevel),
        requiredLevelLabel: raw.minLevelLabel,
        canInvest: raw.access?.canInvest,
        meetsLevel: raw.access?.meetsLevel,
        meetsStars: raw.access?.meetsStars,
        certifiedAt: raw.certifiedAt,
        videoPitch: raw.videoPitch || undefined,
        stats: {
            winRate: successRate,
            monthlyRoi: 0,
            annualRoi: maxRoi,
            maxDrawdown: 0,
            riskLevel: riskFromSuccess(successRate),
            investorsCount: Math.max(Number(raw.numberInvestors ?? 0), forfaitInvestors),
            capitalManaged: usdToStorage(collected, rateMap),
            totalTrades: 0,
            rating: Number(raw.rating?.average ?? 0),
            reviewsCount: Number(raw.rating?.count ?? reviews.length)
        },
        performance: [],
        screenshots: covers,
        plans,
        reviews,
        created_at: raw.created_at || created.toISOString()
    };
}
function flattenHouseGroups(groups, rates) {
    const byId = new Map();
    for (const group of groups){
        for (const raw of group.tradingHouses ?? []){
            if (raw.isActive === false || byId.has(raw.id)) continue;
            byId.set(raw.id, mapTradingHouse(raw, rates));
        }
    }
    return [
        ...byId.values()
    ];
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
    ()=>getMarkets,
    "rateHouse",
    ()=>rateHouse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/request.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/mapTradingHouse.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function ratesMap() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])();
}
async function getHouses() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_HOUSES"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHouses"]();
    const [json, rates] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_HOUSES),
        ratesMap()
    ]);
    if (!json.etat) throw new Error('Impossible de charger les maisons');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenHouseGroups"])(json.result ?? [], rates);
}
async function getHouseById(id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_HOUSES"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHouseById"](id);
    const rates = await ratesMap();
    try {
        const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_HOUSES}/${id}`);
        if (!json.etat) throw new Error('Maison introuvable');
        const raw = json.result?.tradingHouse;
        if (!raw?.id) throw new Error('Maison introuvable');
        const reviews = (json.result.ratings ?? []).map(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapReview"]).filter((item)=>item !== null);
        return {
            house: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapTradingHouse"])(raw, rates, reviews),
            similar: (json.result.similarTradingHouses ?? []).filter((item)=>item?.id && item.id !== raw.id).map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapTradingHouse"])(item, rates)),
            investorLevel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapInvestorLevel"])(json.result.investorLevel, rates)
        };
    } catch  {
        const houses = await getHouses();
        const house = houses.find((item)=>item.id === id);
        if (!house) throw new Error('Maison introuvable');
        return {
            house,
            similar: houses.filter((item)=>item.id !== id).slice(0, 4),
            investorLevel: null
        };
    }
}
function apiErrorMessage(data, fallback) {
    const item = data && typeof data === 'object' ? data : {};
    const message = item.message ?? item.error;
    if (Array.isArray(message)) return message.map(String).join(' ');
    if (typeof message === 'string' && message.trim()) return message;
    return fallback;
}
async function rateHouse(houseId, payload) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_HOUSES"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rateHouse"](houseId, payload);
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    if (!token) {
        return {
            etat: false,
            error: [
                'Connectez-vous pour laisser un avis'
            ]
        };
    }
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_HOUSES}/${houseId}/rating`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify({
            rating: payload.rating,
            message: payload.message
        })
    });
    const json = await response.json().catch(()=>({}));
    if (response.status === 201 || response.ok && json.etat !== false) {
        return {
            etat: true,
            message: json.message,
            result: json.result
        };
    }
    return {
        etat: false,
        error: [
            apiErrorMessage(json, response.status === 403 ? 'Vous devez avoir investi dans cette maison pour la noter.' : 'Impossible de publier votre avis')
        ]
    };
}
async function getMarkets() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_HOUSES"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMarkets"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_HOUSE_CATEGORIES);
    if (!json.etat) return [];
    return (json.result ?? []).map(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapMarket"]).filter((item)=>item.id && item.name);
}
}),
"[project]/invest/src/types/InvestmentType.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INVESTMENT_STATUSES",
    ()=>INVESTMENT_STATUSES,
    "INVESTMENT_STATUS_LABEL",
    ()=>INVESTMENT_STATUS_LABEL
]);
const INVESTMENT_STATUSES = [
    'PENDING',
    'ACTIVE',
    'MATURED',
    'PAID',
    'CANCELED'
];
const INVESTMENT_STATUS_LABEL = {
    PENDING: 'En attente',
    ACTIVE: 'En cours',
    MATURED: 'Échu',
    PAID: 'Payé',
    CANCELED: 'Annulé'
};
}),
"[project]/invest/src/data/wallet.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "depositWallet",
    ()=>depositWallet,
    "getWallet",
    ()=>getWallet,
    "getWalletQuote",
    ()=>getWalletQuote,
    "getWalletTransactionById",
    ()=>getWalletTransactionById,
    "getWalletTransactions",
    ()=>getWalletTransactions,
    "mapWallet",
    ()=>mapWallet,
    "mapWalletQuote",
    ()=>mapWalletQuote,
    "mapWalletTransaction",
    ()=>mapWalletTransaction,
    "mapWalletTransactions",
    ()=>mapWalletTransactions,
    "withdrawWallet",
    ()=>withdrawWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$WalletType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/WalletType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/request.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const asRecord = (value)=>value && typeof value === 'object' ? value : null;
function optionalNumber(...candidates) {
    for (const value of candidates){
        if (value === undefined || value === null || value === '') continue;
        const n = Number(value);
        if (Number.isFinite(n)) return n;
    }
    return undefined;
}
function optionalString(...candidates) {
    for (const value of candidates){
        if (typeof value === 'string' && value.trim()) return value;
    }
    return undefined;
}
function unwrapResult(json) {
    const envelope = asRecord(json);
    return envelope?.result ?? json;
}
function asType(value) {
    const type = String(value ?? '').toLowerCase();
    if (type.includes('deposit') || type.includes('recharge') || type.includes('depot')) {
        return 'deposit';
    }
    if (type.includes('withdraw') || type.includes('retrait')) return 'withdraw';
    if (type.includes('invest')) return 'investment';
    if (type.includes('payout') || type.includes('gain') || type.includes('versement')) {
        return 'payout';
    }
    if (type.includes('referral') || type.includes('parrain') || type.includes('dividend')) {
        return 'referral';
    }
    if (type.includes('capital') || type.includes('return')) return 'capital';
    return 'other';
}
function asStatus(value) {
    const status = String(value ?? '').toUpperCase();
    if ([
        'SUCCESS',
        'COMPLETED',
        'PAID',
        'DONE',
        'RÉUSSI',
        'REUSSI'
    ].includes(status)) {
        return 'SUCCESS';
    }
    if ([
        'FAILED',
        'ERROR',
        'ÉCHOUÉ',
        'ECHOUE'
    ].includes(status)) return 'FAILED';
    if ([
        'CANCELED',
        'CANCELLED',
        'ANNULÉ',
        'ANNULE'
    ].includes(status)) {
        return 'CANCELED';
    }
    return 'PENDING';
}
function asBalanceKind(value) {
    const kind = String(value ?? '').toLowerCase();
    if (kind.includes('active') || kind.includes('actif')) return 'active';
    if (kind.includes('available') || kind.includes('disponible')) {
        return 'available';
    }
    return undefined;
}
function asQuoteType(value, fallback) {
    const type = String(value ?? fallback).toLowerCase();
    return type === 'withdraw' ? 'withdraw' : 'deposit';
}
function apiErrorMessage(data, fallback) {
    const item = asRecord(data) ?? {};
    const message = item.message ?? item.error;
    if (Array.isArray(message)) return message.map(String).join(' ');
    if (typeof message === 'string' && message.trim()) return message;
    return fallback;
}
const WALLET_MONEY_KEYS = [
    'activeBalance',
    'availableBalance',
    'investedAmount',
    'expectedPayout',
    'totalDeposited',
    'totalWithdrawn',
    'totalPayouts',
    'totalCapitalReturned',
    'totalReferralDividends'
];
function mapWallet(raw) {
    const item = asRecord(raw) ?? {};
    return {
        activeBalance: optionalNumber(item.activeBalance) ?? 0,
        availableBalance: optionalNumber(item.availableBalance) ?? 0,
        investmentsInProgress: optionalNumber(item.investmentsInProgress) ?? 0,
        investedAmount: optionalNumber(item.investedAmount) ?? 0,
        expectedPayout: optionalNumber(item.expectedPayout) ?? 0,
        totalDeposited: optionalNumber(item.totalDeposited) ?? 0,
        totalWithdrawn: optionalNumber(item.totalWithdrawn) ?? 0,
        totalPayouts: optionalNumber(item.totalPayouts) ?? 0,
        totalCapitalReturned: optionalNumber(item.totalCapitalReturned) ?? 0,
        totalReferralDividends: optionalNumber(item.totalReferralDividends) ?? 0
    };
}
function walletUsdToStorage(wallet, rates) {
    const next = {
        ...wallet
    };
    for (const key of WALLET_MONEY_KEYS){
        next[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usdToStorage"])(wallet[key], rates);
    }
    return next;
}
function mapWalletTransaction(raw) {
    const outer = asRecord(raw);
    if (!outer) return null;
    const item = asRecord(outer.transaction) ?? asRecord(outer.data) ?? outer;
    const id = String(item.id ?? item.transactionId ?? item.reference ?? '');
    if (!id) return null;
    const type = asType(item.type ?? item.kind ?? item.operation);
    const originalAmount = optionalNumber(item.originalAmount);
    const originalCurrency = optionalString(item.originalCurrency);
    const usdAmount = originalAmount !== undefined ? optionalNumber(item.amount, item.usdAmount, item.amountUsd) : optionalNumber(item.usdAmount, item.amountUsd, item.creditedUsd, item.debitedUsd);
    const amount = originalAmount ?? optionalNumber(item.localAmount, item.value, item.netAmount, item.amount) ?? 0;
    const service = optionalString(item.paymentMethod, item.service, item.paymentService);
    return {
        id,
        type,
        status: asStatus(item.status),
        amount,
        usdAmount,
        originalAmount,
        originalCurrency,
        exchangeRate: optionalNumber(item.exchangeRate, item.rate, item.fxRate),
        exchangeMargin: optionalNumber(item.exchangeMargin),
        currency: optionalString(item.currency, originalCurrency),
        service,
        phoneNumber: optionalString(item.numberClient, item.phoneNumber, item.numberTel),
        reference: optionalString(item.ref_partner, item.reference, item.externalId),
        label: String(item.label ?? item.description ?? item.message ?? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$WalletType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WALLET_TRANSACTION_TYPE_LABEL"][type]),
        date: String(item.created_at ?? item.createdAt ?? item.date ?? item.paidAt ?? new Date().toISOString()),
        updatedAt: optionalString(item.updated_at, item.updatedAt),
        balanceKind: asBalanceKind(item.balanceType ?? item.balanceKind ?? item.balance ?? item.wallet ?? item.solde),
        balanceAfter: item.balanceAfter === null ? null : optionalNumber(item.balanceAfter),
        message: optionalString(item.message, item.description),
        paidAt: optionalString(item.paidAt, item.paid_at),
        expiresAt: optionalString(item.expiresAt, item.expiredAt),
        paymentUrl: optionalString(item.payment_url, item.paymentUrl, item.url)
    };
}
function mapWalletTransactions(raw) {
    const item = asRecord(raw);
    const list = Array.isArray(raw) ? raw : Array.isArray(item?.items) ? item.items : Array.isArray(item?.transactions) ? item.transactions : [];
    const items = list.map(mapWalletTransaction).filter((entry)=>entry !== null);
    return {
        items,
        total: optionalNumber(item?.total, item?.count) ?? items.length,
        page: optionalNumber(item?.page) ?? 1,
        limit: optionalNumber(item?.limit, item?.perPage) ?? items.length
    };
}
function mapWalletQuote(raw, fallback) {
    const item = asRecord(raw);
    if (!item) return null;
    const usdAmount = optionalNumber(item.usdAmount, item.amountUsd, item.creditedUsd, item.debitedUsd, item.usd, item.netUsd);
    const amount = optionalNumber(item.amount, item.localAmount, item.value) ?? fallback.amount;
    if (usdAmount === undefined && amount === undefined) return null;
    return {
        type: asQuoteType(item.type, fallback.type),
        service: String(item.service ?? fallback.service),
        amount,
        usdAmount: usdAmount ?? 0,
        rate: optionalNumber(item.rate, item.fxRate, item.exchangeRate),
        fee: optionalNumber(item.fee, item.fees),
        netUsd: optionalNumber(item.netAmount, item.netUsd),
        currency: item.currency ? String(item.currency) : undefined
    };
}
async function getWallet() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_WALLET"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWallet"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].WALLET);
    const wallet = mapWallet(unwrapResult(json));
    const rates = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])()).rates;
    return walletUsdToStorage(wallet, rates);
}
async function getWalletTransactions(params = {}) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_WALLET"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletTransactions"](params);
    const query = new URLSearchParams();
    query.set('page', String(params.page ?? 1));
    query.set('limit', String(params.limit ?? 20));
    if (params.type) query.set('type', String(params.type).toUpperCase());
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].TRANSACTIONS}?${query.toString()}`);
    return mapWalletTransactions(unwrapResult(json));
}
async function getWalletTransactionById(id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_WALLET"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletTransactionById"](id);
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].TRANSACTIONS}/${id}`);
    return mapWalletTransaction(unwrapResult(json));
}
async function getWalletQuote(params) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_WALLET"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletQuote"](params);
    const query = new URLSearchParams({
        type: params.type,
        service: params.service,
        amount: String(params.amount)
    });
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].WALLET}/quote?${query.toString()}`);
    const mapped = mapWalletQuote(unwrapResult(json), params);
    if (!mapped) {
        throw new Error('Aperçu indisponible pour ce montant');
    }
    return mapped;
}
async function postWalletMove(path, payload, fallbackError) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_WALLET"]) {
        return path === 'deposit' ? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["depositWallet"](payload) : __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withdrawWallet"](payload);
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    if (!token) {
        return {
            etat: false,
            error: [
                'Connectez-vous pour continuer'
            ]
        };
    }
    const body = path === 'deposit' ? {
        amount: payload.amount,
        service: payload.service,
        numberTel: payload.numberTel,
        ...payload.otp ? {
            otp: payload.otp
        } : {}
    } : {
        amount: payload.amount,
        service: payload.service,
        numberTel: payload.numberTel
    };
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].WALLET}/${path}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(body)
    });
    const json = await response.json().catch(()=>({}));
    if (response.status === 201 || response.ok && json.etat !== false) {
        const result = asRecord(json.result) ?? {};
        const transaction = mapWalletTransaction({
            ...result,
            id: result.id ?? result.transactionId,
            type: result.type ?? (path === 'deposit' ? 'DEPOSIT' : 'WITHDRAW'),
            payment_url: result.payment_url ?? result.url ?? result.paymentUrl,
            amount: result.amount ?? payload.amount,
            originalAmount: result.originalAmount,
            originalCurrency: result.originalCurrency,
            paymentMethod: result.paymentMethod ?? result.service ?? payload.service,
            numberClient: result.numberClient ?? result.numberTel ?? payload.numberTel
        }) ?? mapWalletTransaction(result.transaction);
        return {
            etat: true,
            message: json.message,
            result: {
                transaction,
                wallet: result.wallet ? mapWallet(result.wallet) : undefined,
                paymentUrl: optionalString(result.url, result.payment_url, result.paymentUrl, transaction?.paymentUrl),
                raw: json.result
            }
        };
    }
    return {
        etat: false,
        error: [
            apiErrorMessage(json, fallbackError)
        ]
    };
}
async function depositWallet(payload) {
    return postWalletMove('deposit', payload, 'Impossible de recharger le solde');
}
async function withdrawWallet(payload) {
    return postWalletMove('withdraw', payload, 'Impossible d’effectuer ce retrait');
}
}),
"[project]/invest/src/data/investments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInvestmentById",
    ()=>getInvestmentById,
    "getInvestmentPayouts",
    ()=>getInvestmentPayouts,
    "getInvestments",
    ()=>getInvestments,
    "getTransactions",
    ()=>getTransactions,
    "invest",
    ()=>invest,
    "mapInvestment",
    ()=>mapInvestment,
    "mapInvestmentDetail",
    ()=>mapInvestmentDetail,
    "mapPayout",
    ()=>mapPayout,
    "mapPayouts",
    ()=>mapPayouts,
    "toggleFavorite",
    ()=>toggleFavorite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$InvestmentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/InvestmentType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/invest_helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/request.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/houses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const asRecord = (value)=>value && typeof value === 'object' ? value : null;
const asStatus = (value)=>{
    const status = String(value ?? 'ACTIVE').toUpperCase();
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$InvestmentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVESTMENT_STATUSES"].includes(status) ? status : 'ACTIVE';
};
function apiErrorMessage(data, fallback) {
    const item = asRecord(data) ?? {};
    const message = item.message ?? item.error;
    if (Array.isArray(message)) return message.map(String).join(' ');
    if (typeof message === 'string' && message.trim()) return message;
    return fallback;
}
function mapInvestment(raw, rates) {
    const item = asRecord(raw);
    if (!item) return null;
    const forfait = asRecord(item.forfait) ?? asRecord(item.plan);
    const house = asRecord(item.tradingHouse) ?? asRecord(item.house);
    const id = String(item.id ?? '');
    if (!id) return null;
    const amountUsd = Number(item.amount ?? 0);
    return {
        id,
        houseId: String(item.tradingHouseId ?? house?.id ?? item.houseId ?? ''),
        houseName: String(house?.title ?? house?.name ?? item.houseName ?? ''),
        houseLogo: String(house?.profilPicture ?? house?.logo ?? item.houseLogo ?? ''),
        planId: String(item.forfaitId ?? forfait?.id ?? item.planId ?? ''),
        planName: String(forfait?.title ?? forfait?.name ?? item.planName ?? ''),
        amount: rates ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usdToStorage"])(amountUsd, rates) : amountUsd,
        expectedReturn: Number(item.roiPercentage ?? forfait?.roiPercentage ?? item.expectedReturn ?? 0),
        startDate: String(item.created_at ?? item.startDate ?? item.startedAt ?? new Date().toISOString()),
        endDate: String(item.maturityDate ?? item.endDate ?? forfait?.maturityDate ?? item.created_at ?? new Date().toISOString()),
        status: asStatus(item.status),
        paymentService: item.paymentService ? String(item.paymentService) : undefined,
        phoneNumber: item.phoneNumber ? String(item.phoneNumber) : undefined
    };
}
const RECEIVED_STATUSES = [
    'RECEIVED',
    'PAID',
    'DONE',
    'SUCCESS',
    'COMPLETED',
    'VERSE',
    'VERSED'
];
const UPCOMING_STATUSES = [
    'UPCOMING',
    'PENDING',
    'SCHEDULED',
    'DUE',
    'TO_PAY',
    'PLANNED',
    'A_VENIR'
];
function optionalNumber(...candidates) {
    for (const value of candidates){
        if (value === undefined || value === null || value === '') continue;
        const n = Number(value);
        if (Number.isFinite(n)) return n;
    }
    return undefined;
}
function asProgress(value) {
    const n = optionalNumber(value);
    if (n === undefined) return undefined;
    return n > 1 ? Math.min(1, n / 100) : Math.min(1, Math.max(0, n));
}
function payoutDate(item) {
    const value = item.date ?? item.scheduledAt ?? item.payoutDate ?? item.dueDate ?? item.paidAt ?? item.created_at ?? item.day;
    if (typeof value === 'string' && value.trim()) return value;
    if (value instanceof Date) return value.toISOString();
    return new Date().toISOString();
}
function payoutState(item, fallback) {
    const status = String(item.status ?? '').toUpperCase();
    if (RECEIVED_STATUSES.includes(status)) return 'received';
    if (UPCOMING_STATUSES.includes(status)) return 'upcoming';
    if (item.received === true || item.isPaid === true || item.paid === true) {
        return 'received';
    }
    if (item.paidAt) return 'received';
    if (fallback) return fallback;
    return new Date(payoutDate(item)).getTime() <= Date.now() ? 'received' : 'upcoming';
}
function mapPayout(raw, fallback, index = 0) {
    const item = asRecord(raw);
    if (!item) return null;
    const amount = optionalNumber(item.amount, item.value, item.gain, item.dailyAmount, item.payout, item.netAmount);
    if (amount === undefined) return null;
    const date = payoutDate(item);
    return {
        id: String(item.id ?? `${date}-${index}`),
        date,
        amount,
        status: payoutState(item, fallback)
    };
}
function sortPayouts(list) {
    return [
        ...list
    ].sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime());
}
function groupPayouts(list) {
    return {
        received: sortPayouts(list.filter((item)=>item.status === 'received')),
        upcoming: sortPayouts(list.filter((item)=>item.status === 'upcoming'))
    };
}
function mapPayoutList(list, fallback) {
    if (!Array.isArray(list)) return [];
    return list.map((item, index)=>mapPayout(item, fallback, index)).filter((item)=>item !== null);
}
function mapPayouts(raw) {
    const item = asRecord(raw);
    if (Array.isArray(raw)) return groupPayouts(mapPayoutList(raw));
    if (!item) return {
        received: [],
        upcoming: []
    };
    if (item.result !== undefined && !item.received && !item.upcoming && !item.payouts) {
        return mapPayouts(item.result);
    }
    if (item.data !== undefined && !Array.isArray(item.data) && !item.received && !item.upcoming && !item.payouts) {
        return mapPayouts(item.data);
    }
    const received = mapPayoutList(item.received ?? item.paid ?? item.verses, 'received');
    const upcoming = mapPayoutList(item.upcoming ?? item.pending ?? item.scheduled ?? item.toReceive, 'upcoming');
    if (received.length > 0 || upcoming.length > 0) {
        return {
            received: sortPayouts(received),
            upcoming: sortPayouts(upcoming)
        };
    }
    return groupPayouts(mapPayoutList(item.payouts ?? item.versements ?? item.dailyPayouts ?? item.items ?? item.data));
}
function mapInvestmentDetail(raw, rates) {
    const item = asRecord(raw);
    if (!item) return null;
    const nested = asRecord(item.investment) ?? asRecord(item.data);
    const progressSrc = asRecord(item.progress) ?? asRecord(nested?.progress) ?? {};
    const src = {
        ...nested ?? {},
        ...item
    };
    const base = mapInvestment(nested ?? item, rates);
    if (!base) return null;
    const progress = asProgress(src.progressPercent ?? src.percent ?? src.advancement ?? src.completion ?? progressSrc.percent ?? progressSrc.progress ?? (typeof src.progress === 'object' ? undefined : src.progress)) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investmentProgress"])(base);
    const expected = optionalNumber(src.expectedGain, src.totalGain, src.gainAmount, src.expectedReturnAmount, progressSrc.expectedGain) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expectedGain"])(base.amount, base.expectedReturn);
    const paid = optionalNumber(src.paidAmount, src.receivedAmount, src.totalPaid, src.gainsReceived, progressSrc.paidAmount, progressSrc.received);
    const remaining = optionalNumber(src.remainingAmount, src.upcomingAmount, src.toReceive, src.remaining, progressSrc.remainingAmount, progressSrc.remaining);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toInvestmentDetail"])(base, {
        progress,
        expectedGain: expected,
        paidAmount: paid,
        remainingAmount: remaining,
        daysElapsed: optionalNumber(src.daysElapsed, src.elapsedDays, src.currentDay, progressSrc.daysElapsed),
        daysRemaining: optionalNumber(src.daysRemaining, src.remainingDays, src.daysLeft, progressSrc.daysRemaining)
    });
}
function unwrapResult(json) {
    const envelope = asRecord(json);
    return envelope?.result ?? json;
}
async function enrichInvestments(investments) {
    if (investments.length === 0 || investments.every((item)=>item.houseName && item.planName)) {
        return investments;
    }
    const houses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHouses"])().catch(()=>[]);
    const byId = new Map(houses.map((house)=>[
            house.id,
            house
        ]));
    return investments.map((item)=>{
        const house = byId.get(item.houseId);
        const plan = house?.plans.find((entry)=>entry.id === item.planId);
        return {
            ...item,
            houseName: item.houseName || house?.name || 'Maison de trading',
            houseLogo: item.houseLogo || house?.logo || '',
            planName: item.planName || plan?.name || 'Formule',
            expectedReturn: item.expectedReturn || plan?.expectedReturn || 0,
            endDate: item.endDate || plan?.maturityDate || item.startDate
        };
    });
}
async function fetchByStatus(status) {
    const url = status ? `${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].INVESTMENTS}?status=${encodeURIComponent(status)}` : __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].INVESTMENTS;
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(url);
    const list = Array.isArray(json.result) ? json.result : [];
    const rates = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])()).rates;
    return list.map((item)=>mapInvestment(item, rates)).filter((item)=>item !== null);
}
async function invest(payload) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_INVESTMENTS"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invest"]({
            houseId: payload.houseId ?? '',
            planId: payload.planId ?? payload.forfaitId,
            amount: payload.amount,
            service: payload.service ?? 'solde',
            numberTel: payload.numberTel ?? '',
            otp: payload.otp
        });
    }
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    if (!token) {
        return {
            etat: false,
            error: [
                'Connectez-vous pour investir'
            ]
        };
    }
    const rates = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])()).rates;
    const amountUsd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageToUsd"])(payload.amount, rates);
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].INVESTMENTS, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify({
            forfaitId: payload.forfaitId,
            amount: amountUsd
        })
    });
    const json = await response.json().catch(()=>({}));
    if (response.status === 201 || response.ok && json.etat !== false) {
        const mapped = mapInvestment(json.result, rates) ?? mapInvestment(asRecord(json.result)?.investment, rates);
        return {
            etat: true,
            message: json.message,
            result: {
                investment: mapped,
                raw: json.result
            }
        };
    }
    return {
        etat: false,
        error: [
            apiErrorMessage(json, response.status === 400 ? 'Impossible d’enregistrer cet investissement' : 'Solde insuffisant ou formule indisponible')
        ]
    };
}
async function getInvestments(status) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_INVESTMENTS"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestments"]();
    if (status) return enrichInvestments(await fetchByStatus(status));
    try {
        const all = await fetchByStatus();
        if (all.length > 0) return enrichInvestments(all);
    } catch  {
    // L’API exige souvent un statut : on agrège les 5 filtres.
    }
    const groups = await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$InvestmentType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INVESTMENT_STATUSES"].map((item)=>fetchByStatus(item).catch(()=>[])));
    const byId = new Map();
    for (const item of groups.flat())byId.set(item.id, item);
    return enrichInvestments([
        ...byId.values()
    ]);
}
async function getInvestmentById(id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_INVESTMENTS"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestmentById"](id);
    try {
        const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].INVESTMENTS}/${id}`);
        const rates = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])()).rates;
        const mapped = mapInvestmentDetail(unwrapResult(json), rates);
        if (mapped) {
            const [enriched] = await enrichInvestments([
                mapped
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toInvestmentDetail"])(enriched, mapped);
        }
    } catch  {
    // Liste en secours si le détail échoue.
    }
    const fromList = (await getInvestments().catch(()=>[])).find((item)=>item.id === id);
    return fromList ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$invest_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toInvestmentDetail"])(fromList) : null;
}
async function getInvestmentPayouts(id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_INVESTMENTS"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestmentPayouts"](id);
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].INVESTMENTS}/${id}/payouts`);
    return mapPayouts(unwrapResult(json));
}
async function getTransactions() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_WALLET"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactions"]();
    const page = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletTransactions"])({
        page: 1,
        limit: 50
    });
    return page.items.map((item)=>({
            id: item.id,
            type: item.type === 'withdraw' ? 'retrait' : item.type === 'deposit' ? 'deposit' : item.type === 'payout' ? 'gain' : 'investissement',
            label: item.label,
            amount: item.amount,
            date: item.date,
            status: item.status === 'SUCCESS' ? 'réussi' : item.status === 'FAILED' ? 'échoué' : 'en attente',
            paymentService: item.service ?? '',
            reference: item.reference ?? item.id
        }));
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
"[project]/invest/src/data/levels.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_LEVEL_CATALOG",
    ()=>API_LEVEL_CATALOG,
    "getInvestorLevel",
    ()=>getInvestorLevel,
    "getLevelStatus",
    ()=>getLevelStatus,
    "getLevels",
    ()=>getLevels,
    "overlayLevelRules",
    ()=>overlayLevelRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/request.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/mapTradingHouse.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const API_LEVEL_CATALOG = [
    {
        rank: 1,
        name: 'Débutant',
        description: 'Votre point de départ. Les maisons ouvertes aux débutants et leurs forfaits vous sont accessibles dès l’inscription.',
        color: '#b7793f',
        maxPlanReturn: null,
        maxHouseAnnualRoi: null,
        requirements: {
            completedInvestments: 0,
            completedAmount: 0,
            profileCompleted: false,
            accountAgeDays: 0
        },
        perks: [
            'Accès dès l’inscription',
            'Étoiles en investissant ou en parrainant'
        ]
    },
    {
        rank: 2,
        name: 'Intermédiaire',
        description: 'Après plusieurs investissements, de nouvelles maisons et formules s’ouvrent à vous.',
        color: '#8a94a6',
        maxPlanReturn: null,
        maxHouseAnnualRoi: null,
        requirements: {
            completedInvestments: 4,
            completedAmount: 0,
            profileCompleted: false,
            accountAgeDays: 0
        },
        perks: [
            'Maisons et forfaits niveau Intermédiaire'
        ]
    },
    {
        rank: 3,
        name: 'Professionnel',
        description: 'Le palier le plus élevé : accès étendu aux maisons réservées aux investisseurs expérimentés.',
        color: '#1e2538',
        maxPlanReturn: null,
        maxHouseAnnualRoi: null,
        requirements: {
            completedInvestments: 11,
            completedAmount: 0,
            profileCompleted: false,
            accountAgeDays: 0
        },
        perks: [
            'Maisons et forfaits niveau Professionnel'
        ]
    }
];
function overlayLevelRules(levels, investor) {
    const rules = investor?.rules;
    if (!rules) return levels;
    return levels.map((level)=>{
        if (level.rank === 2) {
            return {
                ...level,
                requirements: {
                    ...level.requirements,
                    completedInvestments: rules.intermediateMinInvestments
                }
            };
        }
        if (level.rank === 3) {
            return {
                ...level,
                requirements: {
                    ...level.requirements,
                    completedInvestments: rules.professionalMinInvestments
                }
            };
        }
        return level;
    });
}
async function getLevels() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLevels"]();
    return API_LEVEL_CATALOG;
}
async function getInvestorLevel() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestorLevel"]();
    try {
        const [json, rates] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].USER_LEVEL),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])()
        ]);
        if (!json.etat) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapInvestorLevel"])(json.result, rates);
    } catch  {
        return null;
    }
}
async function getLevelStatus() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_AUTH"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLevelStatus"]();
    return null;
}
}),
"[project]/invest/src/data/referral.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReferral",
    ()=>getReferral,
    "getReferralDividends",
    ()=>getReferralDividends,
    "getReferralFilleuls",
    ()=>getReferralFilleuls,
    "getReferralLevels",
    ()=>getReferralLevels,
    "mapDividend",
    ()=>mapDividend,
    "mapFilleul",
    ()=>mapFilleul,
    "mapReferralLevel",
    ()=>mapReferralLevel,
    "mapReferralOverview",
    ()=>mapReferralOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/request.ts [app-ssr] (ecmascript)");
;
;
;
const asRecord = (value)=>value && typeof value === 'object' ? value : null;
function optionalNumber(...candidates) {
    for (const value of candidates){
        if (value === undefined || value === null || value === '') continue;
        const n = Number(value);
        if (Number.isFinite(n)) return n;
    }
    return undefined;
}
function unwrapResult(json) {
    const envelope = asRecord(json);
    return envelope?.result ?? json;
}
function mapReferralLevel(raw) {
    const item = asRecord(raw);
    if (!item) return null;
    const id = String(item.id ?? '');
    const name = String(item.name ?? '');
    if (!id && !name) return null;
    return {
        id,
        name: name || 'Palier',
        position: optionalNumber(item.position) ?? 0,
        minReferrals: optionalNumber(item.minReferrals) ?? 0,
        minActiveReferrals: optionalNumber(item.minActiveReferrals) ?? 0,
        maxParallelInvestments: optionalNumber(item.maxParallelInvestments) ?? 0,
        dividendPercentage: optionalNumber(item.dividendPercentage) ?? 0,
        maxDividendsPerReferral: optionalNumber(item.maxDividendsPerReferral) ?? 0
    };
}
function mapNextLevel(raw) {
    const base = mapReferralLevel(raw);
    if (!base) return null;
    const item = asRecord(raw) ?? {};
    return {
        ...base,
        missingReferrals: optionalNumber(item.missingReferrals) ?? 0,
        missingActiveReferrals: optionalNumber(item.missingActiveReferrals) ?? 0
    };
}
function mapSponsor(raw) {
    const item = asRecord(raw);
    if (!item) return null;
    const id = String(item.id ?? '');
    const name = String(item.full_name ?? item.name ?? item.pseudo ?? item.referralCode ?? '');
    if (!id && !name) return null;
    return {
        id,
        name: name || 'Parrain',
        referralCode: item.referralCode ? String(item.referralCode) : undefined
    };
}
function mapStats(raw) {
    const item = asRecord(raw) ?? {};
    return {
        totalReferrals: optionalNumber(item.totalReferrals) ?? 0,
        activeReferrals: optionalNumber(item.activeReferrals) ?? 0,
        dividendsCount: optionalNumber(item.dividendsCount) ?? 0,
        totalDividends: optionalNumber(item.totalDividends) ?? 0
    };
}
function mapReferralOverview(raw) {
    const item = asRecord(raw);
    if (!item) return null;
    const referralCode = String(item.referralCode ?? '');
    if (!referralCode) return null;
    return {
        referralCode,
        referralLink: String(item.referralLink ?? `?ref=${referralCode}`),
        sponsor: mapSponsor(item.sponsor),
        level: mapReferralLevel(item.level),
        nextLevel: mapNextLevel(item.nextLevel),
        stats: mapStats(item.stats),
        investmentsInProgress: optionalNumber(item.investmentsInProgress) ?? 0,
        remainingParallelInvestments: optionalNumber(item.remainingParallelInvestments) ?? 0
    };
}
function mapFilleul(raw) {
    const item = asRecord(raw);
    if (!item) return null;
    const user = asRecord(item.user) ?? asRecord(item.client) ?? item;
    const id = String(user.id ?? item.id ?? '');
    if (!id) return null;
    return {
        id,
        name: String(user.full_name ?? user.pseudo ?? user.name ?? item.name ?? 'Filleul'),
        phoneNumber: user.phone_number ? String(user.phone_number) : item.phoneNumber ? String(item.phoneNumber) : undefined,
        avatar: user.profil ? String(user.profil) : undefined,
        isActive: Boolean(item.isActive ?? item.active ?? item.hasActiveInvestment ?? false),
        createdAt: String(item.created_at ?? item.createdAt ?? user.created_at ?? ''),
        investedAmount: optionalNumber(item.investedAmount, item.amount)
    };
}
function mapDividend(raw) {
    const item = asRecord(raw);
    if (!item) return null;
    const id = String(item.id ?? item.reference ?? '');
    if (!id) return null;
    const filleul = asRecord(item.filleul) ?? asRecord(item.referral) ?? asRecord(item.user);
    return {
        id,
        amount: optionalNumber(item.amount, item.value, item.dividend) ?? 0,
        date: String(item.created_at ?? item.createdAt ?? item.date ?? ''),
        label: String(item.label ?? item.description ?? item.message ?? 'Dividende de parrainage'),
        filleulName: filleul ? String(filleul.full_name ?? filleul.pseudo ?? filleul.name ?? '') : item.filleulName ? String(item.filleulName) : undefined,
        percentage: optionalNumber(item.percentage, item.dividendPercentage)
    };
}
async function getReferral() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_REFERRAL"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferral"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].REFERRAL);
    return mapReferralOverview(unwrapResult(json));
}
async function getReferralLevels() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_REFERRAL"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferralLevels"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].REFERRAL}/levels`);
    const result = unwrapResult(json);
    return Array.isArray(result) ? result.map(mapReferralLevel).filter((item)=>item !== null) : [];
}
async function getReferralFilleuls() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_REFERRAL"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferralFilleuls"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].REFERRAL}/filleuls`);
    const result = unwrapResult(json);
    return Array.isArray(result) ? result.map(mapFilleul).filter((item)=>item !== null) : [];
}
async function getReferralDividends() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_REFERRAL"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferralDividends"]();
    const json = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].REFERRAL}/dividends`);
    const result = unwrapResult(json);
    return Array.isArray(result) ? result.map(mapDividend).filter((item)=>item !== null) : [];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/levels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/referral.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/wallet.ts [app-ssr] (ecmascript)");
;
;
;
;
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
    rateHouse: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$houses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rateHouse"],
    invest: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invest"],
    getInvestments: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestments"],
    getInvestmentById: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestmentById"],
    getInvestmentPayouts: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestmentPayouts"],
    getTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactions"],
    toggleFavorite: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$investments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFavorite"],
    getLevels: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLevels"],
    getLevelStatus: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLevelStatus"],
    getInvestorLevel: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInvestorLevel"],
    getCurrencyRates: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"],
    getWallet: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWallet"],
    getWalletQuote: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletQuote"],
    getWalletTransactionById: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletTransactionById"],
    getWalletTransactions: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWalletTransactions"],
    depositWallet: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["depositWallet"],
    withdrawWallet: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withdrawWallet"],
    getReferral: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferral"],
    getReferralLevels: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferralLevels"],
    getReferralFilleuls: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferralFilleuls"],
    getReferralDividends: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReferralDividends"]
};
}),
"[project]/invest/src/stores/useHousesStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHousesStore",
    ()=>useHousesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
'use client';
;
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
                const isUuid = (id)=>/^[0-9a-f-]{36}$/i.test(id);
                const compatible = cached.length > 0 && cached.every((house)=>__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_HOUSES"] ? !isUuid(house.id) : isUuid(house.id));
                if (compatible) set({
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
"[project]/invest/src/stores/useTabStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeTab",
    ()=>HomeTab,
    "useTabStore",
    ()=>useTabStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
var HomeTab = /*#__PURE__*/ function(HomeTab) {
    HomeTab[HomeTab["HOME"] = 0] = "HOME";
    HomeTab[HomeTab["EXPLORE"] = 1] = "EXPLORE";
    HomeTab[HomeTab["PORTFOLIO"] = 2] = "PORTFOLIO";
    HomeTab[HomeTab["PROFILE"] = 3] = "PROFILE";
    return HomeTab;
}({});
const useTabStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        currentTab: 0,
        setTab: (tab)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].saveCurrentNavigation(tab);
            set({
                currentTab: tab
            });
        },
        init: ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                const saved = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getCurrentNavigation();
                set({
                    currentTab: saved in HomeTab ? saved : 0
                });
            }
        }
    }));
}),
"[project]/invest/src/stores/useLevelsStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLevelsStore",
    ()=>useLevelsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/levels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/mapTradingHouse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useUserStore.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const useLevelsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        levels: [],
        investorLevel: null,
        load: async ()=>{
            if (get().levels.length > 0) return;
            const levels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overlayLevelRules"])(await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getLevels().catch(()=>[]), get().investorLevel);
            set({
                levels
            });
        },
        setInvestorLevel: (investorLevel)=>{
            set({
                investorLevel,
                levels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overlayLevelRules"])(get().levels.length ? get().levels : [], investorLevel)
            });
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"].getState().user;
            if (investorLevel && user) {
                __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"].getState().setUser((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$mapTradingHouse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userFromInvestorLevel"])(user, investorLevel));
            }
        },
        loadInvestorLevel: async ()=>{
            const investorLevel = await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getInvestorLevel().catch(()=>null);
            if (!investorLevel) {
                set({
                    investorLevel: null
                });
                return;
            }
            get().setInvestorLevel(investorLevel);
            if (get().levels.length === 0) {
                const levels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overlayLevelRules"])(await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getLevels().catch(()=>[]), investorLevel);
                set({
                    levels
                });
            }
        }
    }));
}),
"[project]/invest/src/stores/useCurrencyStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrencyStore",
    ()=>useCurrencyStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/currencies.ts [app-ssr] (ecmascript)");
'use client';
;
;
const useCurrencyStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        rates: null,
        load: async ()=>{
            if (get().rates) return;
            const rates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$currencies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrencyRates"])();
            set({
                rates
            });
        }
    }));
}),
"[project]/invest/src/stores/useWalletStore.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWalletStore",
    ()=>useWalletStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$WalletType$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/WalletType.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useUserStore.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const preferAmount = (primary, fallback)=>primary || fallback || 0;
const mergeWithUser = (wallet)=>{
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"].getState().user;
    return {
        ...wallet,
        activeBalance: preferAmount(wallet.activeBalance, current?.activeBalance),
        availableBalance: preferAmount(wallet.availableBalance, current?.availableBalance)
    };
};
const applyBalances = (wallet)=>{
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"].getState().user;
    if (!current) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"].getState().setUser({
        ...current,
        activeBalance: preferAmount(wallet.activeBalance, current.activeBalance),
        availableBalance: preferAmount(wallet.availableBalance, current.availableBalance)
    });
};
const useWalletStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        wallet: null,
        isLoading: false,
        setWallet: (wallet)=>{
            const next = wallet ? mergeWithUser(wallet) : wallet;
            set({
                wallet: next,
                isLoading: false
            });
            if (next) applyBalances(next);
        },
        load: async ()=>{
            set({
                isLoading: true
            });
            try {
                const wallet = mergeWithUser(await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getWallet());
                set({
                    wallet,
                    isLoading: false
                });
                applyBalances(wallet);
                return wallet;
            } catch  {
                set({
                    isLoading: false
                });
                return null;
            }
        }
    }));
;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useTabStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useTabStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useLevelsStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useLevelsStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useCurrencyStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useCurrencyStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useWalletStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/invest/src/stores/useWalletStore.tsx [app-ssr] (ecmascript) <locals>");
;
;
;
;
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
    useInvestModal: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useInvestModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInvestModal"],
    useTabStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useTabStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTabStore"],
    useLevelsStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useLevelsStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLevelsStore"],
    useCurrencyStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useCurrencyStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrencyStore"],
    useWalletStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useWalletStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWalletStore"]
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
    // l'hydratation dès qu'un composant (Home, HouseDetail, InvestModal...)
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
"[project]/invest/src/routes/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Routes",
    ()=>Routes,
    "TabScreens",
    ()=>TabScreens
]);
var TabScreens = /*#__PURE__*/ function(TabScreens) {
    TabScreens["HOME"] = "Accueil";
    TabScreens["EXPLORE"] = "Explorer";
    TabScreens["PORTFOLIO"] = "Portefeuille";
    TabScreens["PROFILE"] = "Profil";
    return TabScreens;
}({});
var Routes = /*#__PURE__*/ function(Routes) {
    Routes["FAQ"] = "/FAQ";
    Routes["HOME"] = "/";
    Routes["SHOP"] = "/shop";
    Routes["ORDER"] = "/order";
    Routes["ONBOARDING"] = "/onboarding";
    Routes["FILTER"] = "/filter";
    Routes["SIGN_IN"] = "/sign-in";
    Routes["PRODUCT"] = "/product";
    Routes["HOUSE"] = "/house";
    Routes["INVESTMENT"] = "/investment";
    Routes["TRANSACTIONS"] = "/transactions";
    Routes["FAVORITES"] = "/favorites";
    Routes["LEVELS"] = "/levels";
    Routes["REFERRAL"] = "/referral";
    Routes["SIGN_UP"] = "/sign-up";
    Routes["REVIEWS"] = "/reviews";
    Routes["PROFILE"] = "/profile";
    Routes["CHECKOUT"] = "/checkout";
    Routes["WISHLIST"] = "/wishlist";
    Routes["CATEGORIES"] = "/categories";
    Routes["INFO_SAVED"] = "/info-saved";
    Routes["CART_EMPTY"] = "/cart-empty";
    Routes["DESCRIPTION"] = "/description";
    Routes["EDIT_PROFILE"] = "/edit-profile";
    Routes["VERIFICATION"] = "/verification";
    Routes["ORDER_FAILED"] = "/order-failed";
    Routes["NEW_PASSWORD"] = "/new-password";
    Routes["MY_PROMOCODES"] = "/my-promocodes";
    Routes["ORDER_HISTORY"] = "/order-history";
    Routes["WISHLIST_EMPTY"] = "/wishlist-empty";
    Routes["EMAIL_VERIFIED"] = "/email-verified";
    Routes["PHONE_VERIFIED"] = "/phone-verified";
    Routes["LEAVE_A_REVIEW"] = "/leave-a-review";
    Routes["FORGOT_PASSWORD"] = "/forgot-password";
    Routes["ORDER_SUCCESSFUL"] = "/order-successful";
    Routes["PROMOCODES_EMPTY"] = "/promocodes-empty";
    Routes["TRACK_YOUR_ORDER"] = "/track-your-order";
    Routes["VERIFY_YOUR_EMAIL"] = "/verify-your-email";
    Routes["ORDER_HISTORY_EMPTY"] = "/order-history-empty";
    Routes["SIGN_UP_ACCOUNT_CREATED"] = "/sign-up-account-created";
    Routes["VERIFY_YOUR_PHONE_NUMBER"] = "/verify-your-phone-number";
    Routes["SHIPPING_AND_PAYMENT_INFO"] = "/shipping-and-payment-info";
    Routes["FORGOT_PASSWORD_SENT_EMAIL"] = "/forgot-password-sent-email";
    return Routes;
}({});
}),
"[project]/invest/src/utils/referral_helper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "captureReferralCodeFromUrl",
    ()=>captureReferralCodeFromUrl,
    "referralShareUrl",
    ()=>referralShareUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/routes/index.tsx [app-ssr] (ecmascript)");
;
function referralShareUrl(link, code) {
    if ("TURBOPACK compile-time truthy", 1) {
        return link.startsWith('?') ? `${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].SIGN_IN}${link}` : link || __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].SIGN_IN;
    }
    //TURBOPACK unreachable
    ;
    const origin = undefined;
}
function captureReferralCodeFromUrl() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const ref = undefined;
    const code = undefined;
}
}),
"[project]/invest/src/components/invest/AppLogo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLogo",
    ()=>AppLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
;
;
const AppLogo = ({ size = 32, showName = true, light = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: "0 0 32 32",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: 32,
                        height: 32,
                        rx: 9,
                        fill: light ? '#FCC55E' : '#1E2538'
                    }, void 0, false, {
                        fileName: "[project]/invest/src/components/invest/AppLogo.tsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 22l6-6 4 3 9-10",
                        stroke: light ? '#1E2538' : '#FCC55E',
                        strokeWidth: 3,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/invest/src/components/invest/AppLogo.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 25,
                        cy: 9,
                        r: 2.5,
                        fill: light ? '#1E2538' : '#FCC55E'
                    }, void 0, false, {
                        fileName: "[project]/invest/src/components/invest/AppLogo.tsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/invest/src/components/invest/AppLogo.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            showName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: size * 0.7,
                    fontWeight: 800,
                    color: light ? 'var(--white-color)' : 'var(--main-color)',
                    letterSpacing: -0.5
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_NAME"]
            }, void 0, false, {
                fileName: "[project]/invest/src/components/invest/AppLogo.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/invest/src/components/invest/AppLogo.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/invest/src/components/invest/TabIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabIcon",
    ()=>TabIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TabIcon = ({ Icon, active })=>{
    const color = active ? 'var(--main-color)' : '#4a5269';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            width: 32,
            height: 32,
            flexShrink: 0,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: active ? 'var(--accent-color)' : 'transparent'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            sx: {
                fontSize: 22,
                color,
                '& path': {
                    fill: color
                }
            }
        }, void 0, false, {
            fileName: "[project]/invest/src/components/invest/TabIcon.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/invest/src/components/invest/TabIcon.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/invest/src/components/BottomTabBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomTabBar",
    ()=>BottomTabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/routes/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
'use client';
;
;
;
;
;
;
const BottomTabBar = ({ tabs, onChange, currentActive })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isLoggedIn, initAuth, isLoadedCurrentUser } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useUserStore();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initAuth();
    }, [
        initAuth,
        isLoggedIn
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            flexShrink: 0,
            zIndex: 50
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            style: {
                paddingLeft: '3%',
                paddingRight: '3%',
                borderTop: '1px solid #C8CDD9',
                backgroundColor: '#F5FAFB'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: `repeat(${tabs.length}, 1fr)`
                },
                children: tabs.map((tab, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            id: tab.id,
                            className: "clickable",
                            onClick: ()=>{
                                if (tab.name === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].PROFILE && !isLoggedIn && isLoadedCurrentUser) {
                                    router.push(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].SIGN_IN);
                                    return;
                                }
                                onChange(index);
                            },
                            style: {
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderRadius: 20
                            },
                            children: [
                                tab.icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 10,
                                        marginTop: 3,
                                        display: 'block',
                                        color: currentActive === index ? 'var(--main-color)' : 'var(--text-color)',
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        fontWeight: 500,
                                        lineHeight: 1.5,
                                        fontFamily: 'var(--font-league-spartan)'
                                    },
                                    className: "number-of-lines-1",
                                    children: tab.name
                                }, void 0, false, {
                                    fileName: "[project]/invest/src/components/BottomTabBar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/invest/src/components/BottomTabBar.tsx",
                            lineNumber: 66,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, tab.id, false, {
                        fileName: "[project]/invest/src/components/BottomTabBar.tsx",
                        lineNumber: 57,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/invest/src/components/BottomTabBar.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/invest/src/components/BottomTabBar.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/invest/src/components/BottomTabBar.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/invest/src/components/ButtomHover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtomHover",
    ()=>ButtomHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const ButtomHover = ({ text = 'Learn More', onClick, type = 'button', disconnexion = false, disabled = false, ...rest })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('button-hover', disconnexion && 'disconnexion'),
        onClick: onClick,
        type: type,
        disabled: disabled,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "circle",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "icon arrow"
                }, void 0, false, {
                    fileName: "[project]/invest/src/components/ButtomHover.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/invest/src/components/ButtomHover.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "button-text",
                children: text
            }, void 0, false, {
                fileName: "[project]/invest/src/components/ButtomHover.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/invest/src/components/ButtomHover.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/invest/src/components/SideBarMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SideBarMenu",
    ()=>SideBarMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/Stack/Stack.js [app-ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/routes/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$ButtomHover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/components/ButtomHover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"])(({ theme })=>({
        justifyContent: 'flex-start',
        textTransform: 'none',
        borderRadius: '9999px',
        padding: theme.spacing(1.5, 2),
        color: 'white',
        fontWeight: 500,
        transition: 'background-color 0.3s'
    }));
const SideBarMenu = ({ menuItems, activeItem, onChangeMenu })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isLoggedIn, initAuth, isLoadedCurrentUser, logout } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useUserStore();
    const { clear } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useNotificationStore();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initAuth();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "div",
        py: 6,
        px: 4,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
            spacing: 2,
            sx: {
                width: '100%'
            },
            children: [
                menuItems.map((item, index)=>{
                    const isActive = activeItem === index;
                    const icon = item.icon;
                    if (item.name === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].PROFILE) {
                        if (!isLoggedIn && isLoadedCurrentUser) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$ButtomHover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtomHover"], {
                                id: item.id,
                                onClick: ()=>{
                                    router.push(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].SIGN_IN);
                                },
                                text: "Connexion/Inscription"
                            }, `button-item-${item.id}`, false, {
                                fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                                lineNumber: 56,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        } else if (isLoggedIn && isLoadedCurrentUser) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
                                fullWidth: true,
                                onClick: ()=>onChangeMenu(index),
                                id: item.id,
                                sx: {
                                    height: 50,
                                    backgroundColor: isActive ? '#fcc55ea0' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: isActive ? '#fcc55ea0' : '#fcc55e74'
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                    sx: {
                                        width: '100%'
                                    },
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    spacing: 2,
                                    children: [
                                        icon,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                textTransform: 'capitalize'
                                            },
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                                    lineNumber: 80,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `nav-item-${item.id}`, false, {
                                fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        }
                        return null;
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
                        fullWidth: true,
                        onClick: ()=>onChangeMenu(index),
                        id: item.id,
                        sx: {
                            height: 50,
                            backgroundColor: isActive ? '#fcc55ea0' : 'transparent',
                            '&:hover': {
                                backgroundColor: isActive ? '#fcc55ea0' : '#fcc55e74'
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            sx: {
                                width: '100%'
                            },
                            direction: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            spacing: 2,
                            children: [
                                icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        textTransform: 'capitalize'
                                    },
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, `nav-item-${item.id}`, false, {
                        fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }),
                isLoggedIn && isLoadedCurrentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$ButtomHover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtomHover"], {
                    onClick: ()=>{
                        clear();
                        logout();
                        router.refresh();
                    },
                    disconnexion: true,
                    text: "Deconnexion"
                }, `button-item-deconnexion`, false, {
                    fileName: "[project]/invest/src/components/SideBarMenu.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/invest/src/components/SideBarMenu.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/invest/src/components/SideBarMenu.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/invest/src/components/AppNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppNav",
    ()=>AppNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/Grid/Grid.js [app-ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/material/esm/Stack/Stack.js [app-ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HomeRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/icons-material/esm/HomeRounded.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TravelExploreRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/icons-material/esm/TravelExploreRounded.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalanceWalletRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/icons-material/esm/AccountBalanceWalletRounded.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PersonRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/@mui/icons-material/esm/PersonRounded.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$hooks$2f$useDeviceDetect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/hooks/useDeviceDetect.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/routes/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useTabStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useTabStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$invest$2f$AppLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/components/invest/AppLogo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$invest$2f$TabIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/components/invest/TabIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$BottomTabBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/components/BottomTabBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$SideBarMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/components/SideBarMenu.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const HIDE_NAV_PREFIXES = [
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].SIGN_IN,
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].SIGN_UP,
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].VERIFICATION,
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].PHONE_VERIFIED,
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].FORGOT_PASSWORD,
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].FORGOT_PASSWORD_SENT_EMAIL,
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].NEW_PASSWORD,
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].ONBOARDING
];
const isHomePath = (pathname)=>pathname === __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].HOME || pathname === '/home';
const hideNav = (pathname)=>HIDE_NAV_PREFIXES.some((prefix)=>pathname === prefix || pathname.startsWith(`${prefix}/`));
const tabFromPath = (pathname)=>{
    if (isHomePath(pathname)) return null;
    if (pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].HOUSE) || pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].FILTER)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useTabStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeTab"].EXPLORE;
    }
    if (pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].INVESTMENT) || pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].TRANSACTIONS)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useTabStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeTab"].PORTFOLIO;
    }
    if (pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].PROFILE) || pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].FAVORITES) || pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].LEVELS) || pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].REFERRAL) || pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].EDIT_PROFILE)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useTabStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeTab"].PROFILE;
    }
    return null;
};
const AppNav = ({ children })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() ?? __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].HOME;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isDesktop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$hooks$2f$useDeviceDetect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeviceDetect"])();
    const { currentTab, setTab, init } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useTabStore();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        init();
    }, [
        init
    ]);
    const activeTab = tabFromPath(pathname) ?? currentTab;
    const menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].HOME,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].HOME,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HomeRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].EXPLORE,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].EXPLORE,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TravelExploreRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].PORTFOLIO,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].PORTFOLIO,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalanceWalletRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].PROFILE,
                name: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabScreens"].PROFILE,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PersonRounded$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            }
        ].map((item, index)=>({
                ...item,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$invest$2f$TabIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabIcon"], {
                    Icon: item.icon,
                    active: activeTab === index
                }, void 0, false, {
                    fileName: "[project]/invest/src/components/AppNav.tsx",
                    lineNumber: 99,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            })), [
        activeTab
    ]);
    const goToTab = (tab)=>{
        setTab(tab);
        if (!isHomePath(pathname)) router.push(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$routes$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"].HOME);
    };
    if (hideNav(pathname)) return children;
    const sideBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
        className: "side-bar-menu",
        size: {
            md: 2
        },
        style: {
            padding: 0,
            margin: 0,
            height: '100vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
            direction: "column",
            sx: {
                padding: 0,
                margin: 0,
                width: '100%',
                height: '100%'
            },
            alignItems: "center",
            justifyContent: "space-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    component: "div",
                    sx: {
                        my: 2,
                        mx: 0,
                        padding: 0,
                        width: '100%'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            direction: "row",
                            justifyContent: "center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$invest$2f$AppLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppLogo"], {
                                size: 30
                            }, void 0, false, {
                                fileName: "[project]/invest/src/components/AppNav.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/invest/src/components/AppNav.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$SideBarMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SideBarMenu"], {
                            menuItems: menu,
                            activeItem: activeTab,
                            onChangeMenu: goToTab
                        }, void 0, false, {
                            fileName: "[project]/invest/src/components/AppNav.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/invest/src/components/AppNav.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "t12",
                    style: {
                        margin: 16
                    },
                    children: [
                        "Les performances passées ne préjugent pas des performances futures. Investir comporte un risque de perte en capital. © ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APP_NAME"],
                        ' ',
                        new Date().getFullYear()
                    ]
                }, void 0, true, {
                    fileName: "[project]/invest/src/components/AppNav.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/invest/src/components/AppNav.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/invest/src/components/AppNav.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    if (isDesktop) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
            container: true,
            spacing: 0,
            style: {
                padding: 0,
                margin: 0,
                height: '100%'
            },
            children: [
                sideBar,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                    size: {
                        md: 10
                    },
                    style: {
                        padding: 0,
                        margin: 0,
                        height: '100vh',
                        overflow: 'auto'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/invest/src/components/AppNav.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/invest/src/components/AppNav.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            minHeight: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    overflow: 'hidden'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/invest/src/components/AppNav.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$BottomTabBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomTabBar"], {
                tabs: menu,
                onChange: goToTab,
                currentActive: activeTab
            }, void 0, false, {
                fileName: "[project]/invest/src/components/AppNav.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/invest/src/components/AppNav.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$referral_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/utils/referral_helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$AppNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/components/AppNav.tsx [app-ssr] (ecmascript)");
'use client';
;
;
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
    const { load: loadRates } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useCurrencyStore();
    const { loadInvestorLevel } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useLevelsStore();
    const { setWallet } = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useWalletStore();
    async function fetchData() {
        try {
            init();
            loadRates();
            const [userData, apiNotifications] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getUser(),
                __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getNotifications().catch(()=>null)
            ]);
            if (userData) {
                const notifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$notification_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortNotifications"])(apiNotifications ?? userData.notifications ?? []);
                setNotifications(notifications);
                setUser(userData);
                await loadInvestorLevel();
                const [investments, wallet] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getInvestments().catch(()=>[]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["data"].getWallet().catch(()=>null)
                ]);
                const current = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stores"].useUserStore.getState().user;
                if (current) {
                    setUser({
                        ...current,
                        investments,
                        ...wallet ? {
                            activeBalance: wallet.activeBalance || current.activeBalance,
                            availableBalance: wallet.availableBalance || current.availableBalance
                        } : {}
                    });
                }
                setWallet(wallet);
            } else {
                clearNotification();
                logout();
                setWallet(null);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données depuis API:', error);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$utils$2f$referral_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureReferralCodeFromUrl"])();
    }, []);
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$components$2f$AppNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppNav"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/invest/src/app/layoutPageClient.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/invest/src/app/layoutPageClient.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/invest/src/app/layoutPageClient.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/invest/src/app/layoutPageClient.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LayoutPageClient;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e8774b19._.js.map
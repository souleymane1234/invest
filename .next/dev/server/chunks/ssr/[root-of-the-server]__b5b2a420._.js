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
"[project]/invest/src/stores/useModalSubscribe.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalSubscribe",
    ()=>useModalSubscribe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const initialState = {
    isOpen: false
};
const useModalSubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        ...initialState,
        openModal: ()=>set({
                isOpen: true
            }),
        closeModal: ()=>set({
                isOpen: false
            })
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

// src/services/indexedDBService.ts
__turbopack_context__.s([
    "deleteAllNotificationsIndexDb",
    ()=>deleteAllNotificationsIndexDb,
    "getAllCategoriesBlocGameIndexDb",
    ()=>getAllCategoriesBlocGameIndexDb,
    "getAllCategoriesIndexDb",
    ()=>getAllCategoriesIndexDb,
    "getAllGamesIndexDb",
    ()=>getAllGamesIndexDb,
    "getAllNotificationIndexDb",
    ()=>getAllNotificationIndexDb,
    "getAllPricingIndexDb",
    ()=>getAllPricingIndexDb,
    "getCategoryBlocGameByCategoryNameIndexDb",
    ()=>getCategoryBlocGameByCategoryNameIndexDb,
    "getGameByIdIndexDb",
    ()=>getGameByIdIndexDb,
    "getNotificationByIdIndexDb",
    ()=>getNotificationByIdIndexDb,
    "getNotificationsByPriorytyIndexDb",
    ()=>getNotificationsByPriorytyIndexDb,
    "getPricingByIdIndexDb",
    ()=>getPricingByIdIndexDb,
    "initDB",
    ()=>initDB,
    "resetDatabaseIndexDb",
    ()=>resetDatabaseIndexDb,
    "saveAllGamesIndexDb",
    ()=>saveAllGamesIndexDb,
    "saveAllNotificationIndexDb",
    ()=>saveAllNotificationIndexDb,
    "saveAllPricingIndexDb",
    ()=>saveAllPricingIndexDb,
    "saveCategoriesBlocGameIndexDb",
    ()=>saveCategoriesBlocGameIndexDb,
    "saveCategoriesIndexDb",
    ()=>saveCategoriesIndexDb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
;
const DATABASE_NAME = 'BoozGame';
const DATABASE_VERSION = 6;
const OBJECT_STORE_NAME_GAMES = 'games';
const OBJECT_STORE_NAME_PRICINGS = 'pricings';
const OBJECT_STORE_NAME_CATEGORIESBLOCGAME = 'categoriesBlocGame';
const OBJECT_STORE_NAME_CATEGORIES = 'categories';
const OBJECT_STORE_NOTIFICATIONS = 'notifications';
// const OBJECT_STORE_NAME_BANNERS = 'banners';
const initDB = async ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openDB"])(DATABASE_NAME, DATABASE_VERSION, {
        upgrade (db) {
            if (!db.objectStoreNames.contains(OBJECT_STORE_NAME_GAMES)) {
                const store = db.createObjectStore(OBJECT_STORE_NAME_GAMES, {
                    keyPath: 'id'
                });
                store.createIndex('by-title', 'title');
                store.createIndex('by-description', 'description');
                store.createIndex('by-id', 'id');
            }
            if (!db.objectStoreNames.contains(OBJECT_STORE_NAME_CATEGORIESBLOCGAME)) {
                const store = db.createObjectStore(OBJECT_STORE_NAME_CATEGORIESBLOCGAME, {
                    keyPath: 'categorieId'
                });
                store.createIndex('by-category', 'category');
                store.createIndex('by-categorieId', 'categorieId');
            }
            if (!db.objectStoreNames.contains(OBJECT_STORE_NAME_CATEGORIES)) {
                const store = db.createObjectStore(OBJECT_STORE_NAME_CATEGORIES, {
                    keyPath: 'id'
                });
                store.createIndex('by-name', 'name');
            }
            if (!db.objectStoreNames.contains(OBJECT_STORE_NAME_PRICINGS)) {
                const store = db.createObjectStore(OBJECT_STORE_NAME_PRICINGS, {
                    keyPath: 'id'
                });
                store.createIndex('by-id', 'id');
            }
            if (!db.objectStoreNames.contains(OBJECT_STORE_NOTIFICATIONS)) {
                const store = db.createObjectStore(OBJECT_STORE_NOTIFICATIONS, {
                    keyPath: 'id'
                });
                store.createIndex('by-id', 'id');
                store.createIndex('by-priority', 'priority');
            }
        //   if (!db.objectStoreNames.contains(OBJECT_STORE_NAME_BANNERS)) {
        //     const store = db.createObjectStore(OBJECT_STORE_NAME_BANNERS, {
        //       keyPath: 'id',
        //     });
        //     store.createIndex('by-title', 'title');
        //   }
        }
    });
};
// --- Games ---
const saveAllGamesIndexDb = async (games)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_GAMES, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME_GAMES);
    await store.clear();
    for (const game of games){
        await store.put(game);
    }
    await tx.done;
};
const getAllGamesIndexDb = async ()=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_GAMES, 'readonly');
    const games = await tx.objectStore(OBJECT_STORE_NAME_GAMES).getAll();
    await tx.done;
    return games;
};
const getGameByIdIndexDb = async (id)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_GAMES, 'readonly');
    const index = tx.objectStore(OBJECT_STORE_NAME_GAMES).index('by-id');
    const game = await index.get(id);
    await tx.done;
    return game;
};
// --- CategoriesBlocGame ---
const saveCategoriesBlocGameIndexDb = async (categories)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_CATEGORIESBLOCGAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME_CATEGORIESBLOCGAME);
    await store.clear();
    for (const category of categories){
        await store.put(category);
    }
    await tx.done;
};
const getAllCategoriesBlocGameIndexDb = async ()=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_CATEGORIESBLOCGAME, 'readonly');
    const categories = await tx.objectStore(OBJECT_STORE_NAME_CATEGORIESBLOCGAME).getAll();
    await tx.done;
    return categories;
};
const getCategoryBlocGameByCategoryNameIndexDb = async (category)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_CATEGORIESBLOCGAME, 'readonly');
    const index = tx.objectStore(OBJECT_STORE_NAME_CATEGORIESBLOCGAME).index('by-category');
    const categoryItem = await index.get(category.trim());
    await tx.done;
    return categoryItem;
};
// --- Categories ---
const saveCategoriesIndexDb = async (categories)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_CATEGORIES, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME_CATEGORIES);
    await store.clear();
    for (const category of categories){
        await store.put(category);
    }
    await tx.done;
};
const getAllCategoriesIndexDb = async ()=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_CATEGORIES, 'readonly');
    const categories = await tx.objectStore(OBJECT_STORE_NAME_CATEGORIES).getAll();
    await tx.done;
    return categories;
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
    const tx = db.transaction(OBJECT_STORE_NOTIFICATIONS, 'readonly');
    const notifications = await tx.objectStore(OBJECT_STORE_NOTIFICATIONS).getAll();
    await tx.done;
    return notifications;
};
const deleteAllNotificationsIndexDb = async ()=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NOTIFICATIONS, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NOTIFICATIONS);
    await store.clear(); // Supprime toutes les notifications
    await tx.done;
};
const getNotificationByIdIndexDb = async (id)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NOTIFICATIONS, 'readonly');
    const index = tx.objectStore(OBJECT_STORE_NOTIFICATIONS).index('by-id');
    const notification = await index.get(id);
    await tx.done;
    return notification;
};
const getNotificationsByPriorytyIndexDb = async (priority)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NOTIFICATIONS, 'readonly');
    const index = tx.objectStore(OBJECT_STORE_NOTIFICATIONS).index('by-priority');
    const notifications = await index.getAll(priority);
    await tx.done;
    return notifications;
};
// --- Pricing ---
const saveAllPricingIndexDb = async (pricings)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_PRICINGS, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME_PRICINGS);
    await store.clear();
    for (const pricing of pricings){
        await store.put(pricing);
    }
    await tx.done;
};
const getAllPricingIndexDb = async ()=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_PRICINGS, 'readonly');
    const pricings = await tx.objectStore(OBJECT_STORE_NAME_PRICINGS).getAll();
    await tx.done;
    return pricings;
};
const getPricingByIdIndexDb = async (id)=>{
    const db = await initDB();
    const tx = db.transaction(OBJECT_STORE_NAME_PRICINGS, 'readonly');
    const index = tx.objectStore(OBJECT_STORE_NAME_PRICINGS).index('by-id');
    const pricing = await index.get(id);
    await tx.done;
    return pricing;
};
// --- Banners ---
// const saveBanners = async (banners: { id: string; title: string; imageUrl: string }[]): Promise<void> => {
//   const db = await initDB();
//   const tx = db.transaction(OBJECT_STORE_NAME_BANNERS, 'readwrite');
//   const store = tx.objectStore(OBJECT_STORE_NAME_BANNERS);
//   await store.clear();
//   for (const banner of banners) {
//     await store.put(banner);
//   }
//   await tx.done;
// };
// const getAllBanners = async (): Promise<{ id: string; title: string; imageUrl: string }[]> => {
//   const db = await initDB();
//   const tx = db.transaction(OBJECT_STORE_NAME_BANNERS, 'readonly');
//   const banners = await tx.objectStore(OBJECT_STORE_NAME_BANNERS).getAll();
//   await tx.done;
//   return banners;
// };
// --- Helper ---
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

// Données seeder locales tant que NEXT_PUBLIC_USE_SEED_DATA !== 'false'
__turbopack_context__.s([
    "URLS",
    ()=>URLS,
    "URLS_ASSETS",
    ()=>URLS_ASSETS,
    "USE_SEED_DATA",
    ()=>USE_SEED_DATA
]);
const USE_SEED_DATA = process.env.NEXT_PUBLIC_USE_SEED_DATA !== 'false';
const PROJECT_NAME = 'brainnest';
const MAIN_URL = `https://george-fx.github.io/APIs/${PROJECT_NAME}`;
const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`;
const BASE_URL_ASSETS = USE_SEED_DATA ? '/seed' : `${process.env.NEXT_PUBLIC_BASE_URL_ASSET}/uploads`;
const GET_BANNERS = `${MAIN_URL}/api/banners.json`;
const GET_REVIEWS = `${MAIN_URL}/api/reviews.json`;
const ANONYMOUS_USER = `${BASE_URL}/user/auth/anonym-user`;
const AUTHENTICATION = `${BASE_URL}/user/auth/authentification`;
const VERIFY_AUTHENTICATION = `${BASE_URL}/user/auth/valid-authentification`;
const SET_SUBSCRIPTION = `${BASE_URL}/subscription`;
const SEND_SUBSCRIPTION_OTP = `${BASE_URL}/subscription/otp`;
const GET_ORDERS = `${BASE_URL}/orders`;
const GET_GAMES = `${BASE_URL}/game`;
const GET_PRICING = `${BASE_URL}/pricing`;
const GET_NOTIFICATIONS = `${BASE_URL}/notification`;
const GET_USER = `${BASE_URL}/user`;
const GENERATE_REGISTRATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/generate-registration-biometrics`;
const GENERATE_AUTHENTICATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/generate-authentication-biometrics`;
const REGISTRATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/registration-biometrics`;
const AUTHENTICATION_BIOMETRICS_OPTIONS = `${BASE_URL}/user/auth/authentication-biometrics`;
const GET_PROMOCODES = `${MAIN_URL}/api/promocodes.json`;
const GET_ONBOARDING = `${MAIN_URL}/api/onboarding.json`;
const GET_CATEGORIES = `${MAIN_URL}/api/categories.json`;
const URLS = {
    MAIN_URL,
    GET_ORDERS,
    GET_BANNERS,
    GET_REVIEWS,
    GET_GAMES,
    GET_PRICING,
    GET_NOTIFICATIONS,
    GET_USER,
    GENERATE_REGISTRATION_BIOMETRICS_OPTIONS,
    GENERATE_AUTHENTICATION_BIOMETRICS_OPTIONS,
    REGISTRATION_BIOMETRICS_OPTIONS,
    AUTHENTICATION_BIOMETRICS_OPTIONS,
    GET_ONBOARDING,
    GET_CATEGORIES,
    GET_PROMOCODES,
    AUTHENTICATION,
    VERIFY_AUTHENTICATION,
    ANONYMOUS_USER,
    SET_SUBSCRIPTION,
    SEND_SUBSCRIPTION_OTP
};
const URLS_ASSETS = {
    MAIN_URL,
    GET_ORDERS,
    GET_BANNERS,
    GET_REVIEWS,
    GAMES: `${BASE_URL_ASSETS}/games`,
    CATEGORIES: `${BASE_URL_ASSETS}/categories`,
    AVATARS: `${BASE_URL_ASSETS}/avatars`,
    GET_ONBOARDING,
    GET_CATEGORIES,
    GET_PROMOCODES
};
}),
"[project]/invest/src/enum/stateTransactionEnum.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusEnum",
    ()=>StatusEnum
]);
var StatusEnum = /*#__PURE__*/ function(StatusEnum) {
    StatusEnum["PENDING"] = "PENDING";
    StatusEnum["EXPIRED"] = "EXPIRED";
    StatusEnum["CONFIRMED"] = "CONFIRMED";
    StatusEnum["REJECTED"] = "REJECTED";
    StatusEnum["INITIALISED"] = "INITIALISED";
    StatusEnum["DONE"] = "DONE";
    StatusEnum["FAILURE"] = "FAILURE";
    return StatusEnum;
}({});
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
"[project]/invest/src/seeders/games.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSeedCategoryBlocs",
    ()=>buildSeedCategoryBlocs,
    "buildSeedGames",
    ()=>buildSeedGames,
    "seedCategories",
    ()=>seedCategories
]);
const seedCategories = [
    {
        id: 'cat-action',
        name: 'Action',
        urlImage: 'action.png'
    },
    {
        id: 'cat-aventure',
        name: 'Aventure',
        urlImage: 'aventure.png'
    },
    {
        id: 'cat-puzzle',
        name: 'Puzzle',
        urlImage: 'puzzle.png'
    },
    {
        id: 'cat-course',
        name: 'Course',
        urlImage: 'course.png'
    },
    {
        id: 'cat-sport',
        name: 'Sport',
        urlImage: 'sport.png'
    },
    {
        id: 'cat-arcade',
        name: 'Arcade',
        urlImage: 'arcade.png'
    }
];
const seedGames = [
    {
        id: 'game-snake-master',
        slug: 'snake-master',
        title: 'Snake Master',
        description: 'Guidez le serpent, mangez un maximum de fruits et évitez de vous mordre la queue. Un classique indémodable !',
        numberPlayed: 15420,
        isPortrait: false,
        play: 'snake',
        categories: [
            'cat-arcade',
            'cat-action'
        ],
        daysAgo: 3,
        ratings: [
            5,
            4,
            5,
            4
        ]
    },
    {
        id: 'game-memory-quest',
        slug: 'memory-quest',
        title: 'Memory Quest',
        description: 'Retrouvez toutes les paires de cartes en un minimum de coups. Entraînez votre mémoire en vous amusant.',
        numberPlayed: 9870,
        isPortrait: true,
        play: 'memory',
        categories: [
            'cat-puzzle'
        ],
        daysAgo: 5,
        ratings: [
            5,
            5,
            4,
            4
        ]
    },
    {
        id: 'game-tap-rush',
        slug: 'tap-rush',
        title: 'Tap Rush',
        description: 'Touchez les cibles le plus vite possible avant la fin du chrono. Réflexes exigés !',
        numberPlayed: 12030,
        isPortrait: true,
        play: 'tap',
        categories: [
            'cat-arcade',
            'cat-action'
        ],
        daysAgo: 8,
        ratings: [
            4,
            4
        ]
    },
    {
        id: 'game-neon-racer',
        slug: 'neon-racer',
        title: 'Neon Racer',
        description: 'Foncez à toute vitesse sur des circuits néon et battez les meilleurs temps.',
        numberPlayed: 20510,
        isPortrait: false,
        play: 'tap',
        categories: [
            'cat-course',
            'cat-arcade'
        ],
        daysAgo: 12,
        ratings: [
            5,
            5
        ]
    },
    {
        id: 'game-jungle-run',
        slug: 'jungle-run',
        title: 'Jungle Run',
        description: 'Courez à travers la jungle, sautez par-dessus les obstacles et ramassez les trésors cachés.',
        numberPlayed: 7640,
        isPortrait: true,
        play: 'tap',
        categories: [
            'cat-aventure',
            'cat-action'
        ],
        daysAgo: 20,
        ratings: [
            4,
            5,
            4,
            5
        ]
    },
    {
        id: 'game-space-defender',
        slug: 'space-defender',
        title: 'Space Defender',
        description: 'Défendez la galaxie contre les vagues d’envahisseurs. Combien de temps tiendrez-vous ?',
        numberPlayed: 18300,
        isPortrait: false,
        play: 'snake',
        categories: [
            'cat-action',
            'cat-arcade'
        ],
        daysAgo: 30,
        ratings: [
            5,
            4
        ]
    },
    {
        id: 'game-foot-star',
        slug: 'foot-star',
        title: 'Foot Star',
        description: 'Tirez au but, dribblez vos adversaires et devenez la star du football.',
        numberPlayed: 25110,
        isPortrait: false,
        play: 'tap',
        categories: [
            'cat-sport'
        ],
        daysAgo: 45,
        ratings: [
            5,
            5,
            5,
            4
        ]
    },
    {
        id: 'game-basket-shot',
        slug: 'basket-shot',
        title: 'Basket Shot',
        description: 'Visez le panier et enchaînez les paniers à trois points pour exploser le score.',
        numberPlayed: 6420,
        isPortrait: true,
        play: 'tap',
        categories: [
            'cat-sport',
            'cat-arcade'
        ],
        daysAgo: 60,
        ratings: [
            4,
            3
        ]
    },
    {
        id: 'game-block-puzzle',
        slug: 'block-puzzle',
        title: 'Block Puzzle',
        description: 'Assemblez les blocs pour compléter des lignes. Simple à prendre en main, difficile à maîtriser.',
        numberPlayed: 13980,
        isPortrait: true,
        play: 'memory',
        categories: [
            'cat-puzzle'
        ],
        daysAgo: 75,
        ratings: [
            5,
            4
        ]
    },
    {
        id: 'game-word-hunter',
        slug: 'word-hunter',
        title: 'Word Hunter',
        description: 'Trouvez les mots cachés dans la grille avant la fin du temps imparti.',
        numberPlayed: 4210,
        isPortrait: true,
        play: 'memory',
        categories: [
            'cat-puzzle',
            'cat-aventure'
        ],
        daysAgo: 100,
        ratings: []
    },
    {
        id: 'game-ninja-jump',
        slug: 'ninja-jump',
        title: 'Ninja Jump',
        description: 'Sautez de mur en mur, évitez les pièges et grimpez toujours plus haut.',
        numberPlayed: 11250,
        isPortrait: true,
        play: 'tap',
        categories: [
            'cat-action',
            'cat-aventure'
        ],
        daysAgo: 120,
        ratings: [
            4,
            5
        ]
    },
    {
        id: 'game-pirate-treasure',
        slug: 'pirate-treasure',
        title: 'Pirate Treasure',
        description: 'Partez à la chasse au trésor sur les îles pirates et résolvez les énigmes du capitaine.',
        numberPlayed: 8930,
        isPortrait: false,
        play: 'memory',
        categories: [
            'cat-aventure',
            'cat-puzzle'
        ],
        daysAgo: 150,
        ratings: [
            5,
            4,
            4,
            5
        ]
    }
];
const daysAgoIso = (days)=>new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
const toGameCategory = (category)=>({
        ...category,
        created_at: daysAgoIso(365),
        updated_at: daysAgoIso(365)
    });
function buildSeedGames() {
    const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return seedGames.map((seed)=>{
        const createdAt = daysAgoIso(seed.daysAgo);
        return {
            id: seed.id,
            title: seed.title,
            description: seed.description,
            numberPlayed: seed.numberPlayed,
            profilPicture: `${seed.slug}.jpg`,
            url: `${origin}/seed/play/${seed.play}.html`,
            isPortrait: seed.isPortrait,
            isActive: true,
            created_at: createdAt,
            updated_at: createdAt,
            covers: [
                1,
                2,
                3
            ].map((index)=>({
                    id: `${seed.id}-cover-${index}`,
                    imageUrl: `${seed.slug}-cover-${index}.jpg`,
                    created_at: createdAt,
                    updated_at: createdAt
                })),
            ratings: seed.ratings.map((value, index)=>({
                    id: `${seed.id}-rating-${index}`,
                    value,
                    gameId: seed.id,
                    created_at: createdAt,
                    updated_at: createdAt
                })),
            categories: seedCategories.filter((category)=>seed.categories.includes(category.id)).map(toGameCategory)
        };
    });
}
function buildSeedCategoryBlocs() {
    const games = buildSeedGames();
    return seedCategories.map((category)=>({
            categorieId: category.id,
            category: category.name,
            urlImage: category.urlImage,
            games: games.filter((game)=>game.categories.some((item)=>item.id === category.id))
        }));
}
}),
"[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "biometricLogin",
    ()=>biometricLogin,
    "createAnonymousUser",
    ()=>createAnonymousUser,
    "getBanners",
    ()=>getBanners,
    "getCategories",
    ()=>getCategories,
    "getGames",
    ()=>getGames,
    "getGamesByID",
    ()=>getGamesByID,
    "getNotifications",
    ()=>getNotifications,
    "getOnboarding",
    ()=>getOnboarding,
    "getOrders",
    ()=>getOrders,
    "getPricing",
    ()=>getPricing,
    "getPromocodes",
    ()=>getPromocodes,
    "getReviews",
    ()=>getReviews,
    "getUser",
    ()=>getUser,
    "readAllNotificationUser",
    ()=>readAllNotificationUser,
    "requestAuthentication",
    ()=>requestAuthentication,
    "sendSubscriptionOtp",
    ()=>sendSubscriptionOtp,
    "setSubscription",
    ()=>setSubscription,
    "updateUser",
    ()=>updateUser,
    "verifyAuthentication",
    ()=>verifyAuthentication
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/enum/stateTransactionEnum.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/games.ts [app-ssr] (ecmascript)");
;
;
;
;
const DB_KEY = 'seed_db';
const TOKEN_PREFIX = 'Bearer seed-';
const LATENCY_MS = 150;
const isBrowser = ()=>("TURBOPACK compile-time value", "undefined") !== 'undefined';
const wait = ()=>new Promise((resolve)=>setTimeout(resolve, LATENCY_MS));
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
        subscriptions: [],
        notifications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedNotifications"])()
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
async function getGames() {
    await wait();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedCategoryBlocs"])();
}
async function getGamesByID(id) {
    await wait();
    const games = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedGames"])();
    const game = games.find((item)=>item.id === id);
    if (!game) throw new Error(`Jeu introuvable: ${id}`);
    const categoryIds = game.categories.map((category)=>category.id);
    const similarGame = games.filter((item)=>item.id !== id && item.categories.some((category)=>categoryIds.includes(category.id)));
    return {
        ranking: {
            myRank: null,
            allRanking: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSeedRanking"])(id)
        },
        game,
        similarGame
    };
}
async function getPricing() {
    await wait();
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedPricings"];
}
async function getUser() {
    await wait();
    const user = getCurrentUser();
    if (!user && isBrowser() && __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].isTokenPresent()) //TURBOPACK unreachable
    ;
    return user;
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
        notifications: (user.notifications ?? []).map((notification)=>({
                ...notification,
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
async function sendSubscriptionOtp() {
    await wait();
    return {
        etat: true,
        message: 'Code OTP envoyé (mode démo)'
    };
}
async function setSubscription({ forfaitId, numberTel }) {
    await wait();
    const user = getCurrentUser();
    const pricing = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedPricings"].find((item)=>item.id === forfaitId);
    if (!user || !pricing) {
        return {
            etat: false,
            error: [
                'Abonnement impossible'
            ]
        };
    }
    const subscriptionId = `sub-${Date.now()}`;
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + pricing.durationForfait * 24 * 60 * 60 * 1000);
    saveUser({
        ...user,
        phone_number: user.phone_number || numberTel || '',
        subscriptions: [
            ...user.subscriptions ?? [],
            {
                id: subscriptionId,
                forfaitId,
                status: 'PENDING',
                isActive: true,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
            }
        ]
    });
    return {
        etat: true,
        result: {
            subscriptionId
        }
    };
}
async function getOrders(id) {
    await wait();
    return {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusEnum"].DONE,
        ref: id
    };
}
async function getBanners() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedBanners"];
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
async function getCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedCategories"].map((category, index)=>({
            id: index + 1,
            name: category.name,
            image: `/seed/categories/${category.urlImage}`
        }));
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
"[project]/invest/src/stores/usePricing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePricingStore",
    ()=>usePricingStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const usePricingStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        pricings: [],
        setPricings: async (pricings)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllPricingIndexDb"])(pricings);
            }
            set({
                pricings
            });
        },
        init: async ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) {
                const pricings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPricingIndexDb"])();
                set({
                    pricings
                });
            }
        }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useModalSubscribe$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useModalSubscribe.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useUserStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/useNotification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$usePricing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/stores/usePricing.tsx [app-ssr] (ecmascript)");
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
    useModalSubscribe: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useModalSubscribe$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModalSubscribe"],
    useWishlistStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useWishlistStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlistStore"],
    useVerificationStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useVerificationStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVerificationStore"],
    useUserStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useUserStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserStore"],
    useNotificationStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$useNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationStore"],
    usePricingStore: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$stores$2f$usePricing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePricingStore"]
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
"[project]/invest/src/data/getOrders.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrders",
    ()=>getOrders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/enum/stateTransactionEnum.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
;
;
;
;
async function getOrders(id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrders"](id);
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_ORDERS}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Origin: origin
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    if (json.etat === false) {
        return {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusEnum"].REJECTED,
            ref: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusEnum"].REJECTED
        };
    } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return json.result;
}
}),
"[project]/invest/src/data/getBanners.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBanners",
    ()=>getBanners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
;
async function getBanners() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBanners"]();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_BANNERS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...token && {
                Authorization: token
            }
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.products;
}
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
"[project]/invest/src/data/getGames.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGames",
    ()=>getGames,
    "getGamesByID",
    ()=>getGamesByID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
;
async function getGames() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGames"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = globalThis.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_GAMES, {
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
async function getGamesByID(Id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGamesByID"](Id);
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_GAMES}/${Id}`, {
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
}),
"[project]/invest/src/data/getCategories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategories",
    ()=>getCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
;
async function getCategories() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategories"]();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_CATEGORIES, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...token && {
                Authorization: token
            }
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.products;
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
"[project]/invest/src/data/getPricing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPricing",
    ()=>getPricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-ssr] (ecmascript)");
;
;
;
;
async function getPricing() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPricing"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].GET_PRICING, {
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
        const pricings = json.result;
        return pricings;
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocalStorageService"].clearData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteAllNotificationsIndexDb"])();
    }
    return [];
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
"[project]/invest/src/data/setSubscription.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setSubscription",
    ()=>setSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
;
async function setSubscription({ forfaitId, service, numberTel, otp }) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSubscription"]({
        forfaitId,
        numberTel
    });
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].SET_SUBSCRIPTION, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Origin: origin,
            ...token && {
                Authorization: token
            }
        },
        body: JSON.stringify({
            forfaitId,
            service: service,
            numberTel: numberTel,
            otp: otp
        })
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return json;
}
}),
"[project]/invest/src/data/sendSubscriptionOtp.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendSubscriptionOtp",
    ()=>sendSubscriptionOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-ssr] (ecmascript)");
;
;
;
async function sendSubscriptionOtp({ numberTel }) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendSubscriptionOtp"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URLS"].SEND_SUBSCRIPTION_OTP, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Origin: origin,
            ...token && {
                Authorization: token
            }
        },
        body: JSON.stringify({
            numberTel
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>null);
        throw new Error(errorData?.message || "Échec de l'envoi du code OTP");
    }
    return await response.json();
}
}),
"[project]/invest/src/data/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOrders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getOrders.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getBanners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getBanners.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getReviews$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getReviews.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getGames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getGames.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getCategories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPromocodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getPromocodes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOnboarding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getOnboarding.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getPricing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getNotifications.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$setSubscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/setSubscription.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$sendSubscriptionOtp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/sendSubscriptionOtp.ts [app-ssr] (ecmascript)");
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
const data = {
    getOrders: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOrders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrders"],
    getPricing: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPricing"],
    getBanners: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getBanners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBanners"],
    getReviews: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getReviews$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReviews"],
    getGames: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getGames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGames"],
    getGamesByID: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getGames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGamesByID"],
    getPromocodes: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPromocodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPromocodes"],
    getCategories: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategories"],
    getOnboarding: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOnboarding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOnboarding"],
    getNotifications: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNotifications"],
    getUser: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUser"],
    setSubscription: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$setSubscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSubscription"],
    sendSubscriptionOtp: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$sendSubscriptionOtp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendSubscriptionOtp"]
};
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

//# sourceMappingURL=%5Broot-of-the-server%5D__b5b2a420._.js.map
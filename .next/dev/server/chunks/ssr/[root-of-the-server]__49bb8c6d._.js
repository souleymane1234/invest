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
"[project]/invest/src/app/reviews/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/invest/src/app/reviews/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/invest/src/enum/stateTransactionEnum.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/invest/src/enum/typeTransactionEnum.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeTransactionEnum",
    ()=>TypeTransactionEnum
]);
var TypeTransactionEnum = /*#__PURE__*/ function(TypeTransactionEnum) {
    TypeTransactionEnum["AIR_TIME"] = "AIR_TIME";
    TypeTransactionEnum["E_PAYMENT"] = "E_PAYMENT";
    return TypeTransactionEnum;
}({});
}),
"[project]/invest/src/types/NotificationType.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/invest/src/seeders/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSeedNotifications",
    ()=>buildSeedNotifications,
    "buildSeedRanking",
    ()=>buildSeedRanking,
    "seedBanners",
    ()=>seedBanners,
    "seedOnboarding",
    ()=>seedOnboarding,
    "seedPricings",
    ()=>seedPricings,
    "seedPromocodes",
    ()=>seedPromocodes,
    "seedReviews",
    ()=>seedReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$typeTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/enum/typeTransactionEnum.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/types/NotificationType.ts [app-rsc] (ecmascript)");
;
;
const seedPricings = [
    {
        id: 'pricing-day',
        admin: 'seed',
        price: 100,
        periode: 'jour',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$typeTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypeTransactionEnum"].E_PAYMENT,
        durationForfait: 1
    },
    {
        id: 'pricing-week',
        admin: 'seed',
        price: 500,
        periode: 'semaine',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$typeTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypeTransactionEnum"].E_PAYMENT,
        durationForfait: 7
    },
    {
        id: 'pricing-month',
        admin: 'seed',
        price: 1500,
        periode: 'mois',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$typeTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TypeTransactionEnum"].E_PAYMENT,
        durationForfait: 30
    }
];
function buildSeedNotifications() {
    const hoursAgo = (hours)=>new Date(Date.now() - hours * 60 * 60 * 1000);
    return [
        {
            id: 'notif-1',
            message: 'Bienvenue ! Découvrez nos nouveaux jeux ajoutés cette semaine.',
            isRead: false,
            priority: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].MEDIUM,
            created_at: hoursAgo(2),
            updated_at: hoursAgo(2)
        },
        {
            id: 'notif-2',
            message: '-50% sur le forfait mensuel ce week-end seulement !',
            isRead: false,
            priority: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].PROMOTIONAL,
            created_at: hoursAgo(20),
            updated_at: hoursAgo(20)
        },
        {
            id: 'notif-3',
            message: 'Astuce : complétez votre profil pour apparaître au classement.',
            isRead: true,
            priority: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$types$2f$NotificationType$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotificationPriorityEnum"].LOW,
            created_at: hoursAgo(72),
            updated_at: hoursAgo(72)
        }
    ];
}
const rankingPlayers = [
    {
        pseudo: 'KingAbj',
        full_name: 'Koffi Yao'
    },
    {
        pseudo: 'Ninja225',
        full_name: 'Awa Traoré'
    },
    {
        pseudo: 'Pro_Gamer',
        full_name: 'Moussa Diallo'
    },
    {
        pseudo: 'Lion',
        full_name: 'Aya Kouassi'
    },
    {
        pseudo: 'Flash',
        full_name: 'Ibrahim Koné'
    },
    {
        pseudo: 'Mamba',
        full_name: 'Fatou Bamba'
    },
    {
        pseudo: 'Tiger',
        full_name: 'Serge Kouadio'
    },
    {
        pseudo: 'Zen',
        full_name: 'Mariam Ouattara'
    }
];
function buildSeedRanking(gameId) {
    const seed = [
        ...gameId
    ].reduce((acc, char)=>acc + char.charCodeAt(0), 0);
    const now = new Date();
    return rankingPlayers.map((player, index)=>({
            rank: index + 1,
            isMe: false,
            userId: `seed-player-${index + 1}`,
            profil: `avatar_${(seed + index) % 25 + 1}.jpg`,
            pseudo: player.pseudo,
            full_name: player.full_name,
            highScore: 5000 - index * 450 - seed % 200,
            created_at: now,
            updated_at: now
        }));
}
const seedBanners = [
    {
        id: 1,
        image: 'banner-1.jpg'
    }
];
const seedReviews = [
    {
        id: 1,
        name: 'Koffi Yao',
        rating: 5,
        comment: 'Super plateforme, les jeux se lancent très vite !',
        photo: '/seed/avatars/avatar_1.jpg',
        date: '12/10/2026'
    },
    {
        id: 2,
        name: 'Awa Traoré',
        rating: 4,
        comment: 'Beaucoup de choix, j’adore Memory Quest.',
        photo: '/seed/avatars/avatar_2.jpg',
        date: '08/10/2026'
    },
    {
        id: 3,
        name: 'Moussa Diallo',
        rating: 5,
        comment: 'Le classement motive à rejouer, top !',
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
        name: 'Week-end',
        code: 'WEEKEND30',
        image: '',
        expiry: '30/11/2026',
        discount: 30
    },
    {
        id: 3,
        name: 'Mensuel',
        code: 'MONTH50',
        image: '',
        expiry: '31/10/2026',
        discount: 50
    }
];
const seedOnboarding = [
    {
        id: 1,
        title1: 'Des centaines',
        title2: 'de jeux',
        image: '/assets/onboarding/01.png',
        description1: 'Jouez à vos jeux préférés',
        description2: 'directement depuis votre navigateur.'
    },
    {
        id: 2,
        title1: 'Défiez',
        title2: 'vos amis',
        image: '/assets/onboarding/02.png',
        description1: 'Grimpez dans le classement',
        description2: 'et devenez le meilleur joueur.'
    },
    {
        id: 3,
        title1: 'Abonnement',
        title2: 'simple',
        image: '/assets/onboarding/03.png',
        description1: 'Payez par mobile money',
        description2: 'et jouez sans limite.'
    }
];
}),
"[project]/invest/src/seeders/games.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/enum/stateTransactionEnum.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/games.ts [app-rsc] (ecmascript)");
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
        notifications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildSeedNotifications"])()
    };
}
function login(user) {
    saveUser(user);
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(`${TOKEN_PREFIX}${user.id}`);
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildSeedCategoryBlocs"])();
}
async function getGamesByID(id) {
    await wait();
    const games = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildSeedGames"])();
    const game = games.find((item)=>item.id === id);
    if (!game) throw new Error(`Jeu introuvable: ${id}`);
    const categoryIds = game.categories.map((category)=>category.id);
    const similarGame = games.filter((item)=>item.id !== id && item.categories.some((category)=>categoryIds.includes(category.id)));
    return {
        ranking: {
            myRank: null,
            allRanking: (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildSeedRanking"])(id)
        },
        game,
        similarGame
    };
}
async function getPricing() {
    await wait();
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedPricings"];
}
async function getUser() {
    await wait();
    const user = getCurrentUser();
    if (!user && isBrowser() && __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].isTokenPresent()) //TURBOPACK unreachable
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
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(updated);
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
    __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].saveUser(response.result.client);
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
    const pricing = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedPricings"].find((item)=>item.id === forfaitId);
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
        status: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusEnum"].DONE,
        ref: id
    };
}
async function getBanners() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedBanners"];
}
async function getReviews() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedReviews"];
}
async function getPromocodes() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedPromocodes"];
}
async function getOnboarding() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedOnboarding"];
}
async function getCategories() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$games$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedCategories"].map((category, index)=>({
            id: index + 1,
            name: category.name,
            image: `/seed/categories/${category.urlImage}`
        }));
}
}),
"[project]/invest/src/data/getOrders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrders",
    ()=>getOrders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/enum/stateTransactionEnum.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
;
;
;
;
async function getOrders(id) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrders"](id);
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_ORDERS}/${id}`, {
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
            status: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusEnum"].REJECTED,
            ref: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$enum$2f$stateTransactionEnum$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StatusEnum"].REJECTED
        };
    } else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return json.result;
}
}),
"[project]/invest/src/data/getBanners.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBanners",
    ()=>getBanners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
;
async function getBanners() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBanners"]();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_BANNERS, {
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
"[project]/invest/src/data/getReviews.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReviews",
    ()=>getReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
async function getReviews() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReviews"]();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_REVIEWS);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.reviews;
}
}),
"[project]/invest/src/data/getGames.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGames",
    ()=>getGames,
    "getGamesByID",
    ()=>getGamesByID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
;
async function getGames() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGames"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = globalThis.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_GAMES, {
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGamesByID"](Id);
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_GAMES}/${Id}`, {
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
"[project]/invest/src/data/getCategories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategories",
    ()=>getCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
;
async function getCategories() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"]();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].getToken();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_CATEGORIES, {
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
"[project]/invest/src/data/getPromocodes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPromocodes",
    ()=>getPromocodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
async function getPromocodes() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPromocodes"]();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_PROMOCODES);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.promocodes;
}
}),
"[project]/invest/src/data/getOnboarding.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOnboarding",
    ()=>getOnboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
async function getOnboarding() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOnboarding"]();
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_ONBOARDING);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.onboarding;
}
}),
"[project]/invest/src/storages/indexed_db_service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/idb/build/index.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["openDB"])(DATABASE_NAME, DATABASE_VERSION, {
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDB"])(DATABASE_NAME);
};
;
}),
"[project]/invest/src/data/getPricing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPricing",
    ()=>getPricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-rsc] (ecmascript)");
;
;
;
;
async function getPricing() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPricing"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_PRICING, {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].clearData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAllNotificationsIndexDb"])();
    }
    return [];
}
}),
"[project]/invest/src/data/getNotifications.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotifications",
    ()=>getNotifications,
    "readAllNotificationUser",
    ()=>readAllNotificationUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
;
async function getNotifications() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_NOTIFICATIONS, {
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readAllNotificationUser"]();
    try {
        const origin = window.origin;
        let token;
        // Vérifie si nous sommes côté client avant d'accéder à localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_NOTIFICATIONS, {
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
"[project]/invest/src/data/getUser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUser",
    ()=>getUser,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/indexed_db_service.ts [app-rsc] (ecmascript)");
;
;
;
;
async function getUser() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_USER, {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].saveToken(access_token);
        json.result.client = rest;
        const client = json.result.client;
        return client;
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalStorageService"].clearData();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$indexed_db_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAllNotificationsIndexDb"])();
    }
    return null;
}
async function updateUser(item) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUser"](item);
    try {
        const origin = window.origin;
        let token;
        // Vérifie si nous sommes côté client avant d'accéder à localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].GET_USER, {
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
"[project]/invest/src/data/setSubscription.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setSubscription",
    ()=>setSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
;
async function setSubscription({ forfaitId, service, numberTel, otp }) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSubscription"]({
        forfaitId,
        numberTel
    });
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Détermine l'origin à utiliser
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].SET_SUBSCRIPTION, {
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
"[project]/invest/src/data/sendSubscriptionOtp.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendSubscriptionOtp",
    ()=>sendSubscriptionOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$storages$2f$local_storage_service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/storages/local_storage_service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/config/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/seeders/api.ts [app-rsc] (ecmascript)");
;
;
;
async function sendSubscriptionOtp({ numberTel }) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USE_SEED_DATA"]) return __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$seeders$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendSubscriptionOtp"]();
    let token;
    // Vérifie si nous sommes côté client avant d'accéder à localStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const origin = window.origin;
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$config$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["URLS"].SEND_SUBSCRIPTION_OTP, {
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
"[project]/invest/src/data/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOrders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getOrders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getBanners$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getBanners.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getReviews$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getReviews.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getGames$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getGames.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getCategories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getCategories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPromocodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getPromocodes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOnboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getOnboarding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getPricing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getNotifications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/getUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$setSubscription$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/setSubscription.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$sendSubscriptionOtp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/sendSubscriptionOtp.ts [app-rsc] (ecmascript)");
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
    getOrders: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOrders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrders"],
    getPricing: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPricing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPricing"],
    getBanners: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getBanners$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBanners"],
    getReviews: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getReviews$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getReviews"],
    getGames: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getGames$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGames"],
    getGamesByID: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getGames$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGamesByID"],
    getPromocodes: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getPromocodes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPromocodes"],
    getCategories: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getCategories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"],
    getOnboarding: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getOnboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOnboarding"],
    getNotifications: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getNotifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNotifications"],
    getUser: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$getUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"],
    setSubscription: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$setSubscription$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSubscription"],
    sendSubscriptionOtp: __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$sendSubscriptionOtp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendSubscriptionOtp"]
};
}),
"[project]/invest/src/app/reviews/Reviews.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reviews",
    ()=>Reviews
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Reviews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Reviews() from the server but Reviews is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/invest/src/app/reviews/Reviews.tsx <module evaluation>", "Reviews");
}),
"[project]/invest/src/app/reviews/Reviews.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reviews",
    ()=>Reviews
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Reviews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Reviews() from the server but Reviews is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/invest/src/app/reviews/Reviews.tsx", "Reviews");
}),
"[project]/invest/src/app/reviews/Reviews.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$reviews$2f$Reviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/invest/src/app/reviews/Reviews.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$reviews$2f$Reviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/invest/src/app/reviews/Reviews.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$reviews$2f$Reviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/invest/src/app/reviews/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsPage,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/data/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$reviews$2f$Reviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/invest/src/app/reviews/Reviews.tsx [app-rsc] (ecmascript)");
;
;
;
const viewport = {
    themeColor: '#F5FAFB'
};
const metadata = {
    title: 'Reviews',
    description: 'Reviews.'
};
async function ReviewsPage() {
    let reviews = [];
    try {
        reviews = await __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$data$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["data"].getReviews();
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error('An unknown error occurred');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$invest$2f$src$2f$app$2f$reviews$2f$Reviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reviews"], {
        reviews: reviews
    }, void 0, false, {
        fileName: "[project]/invest/src/app/reviews/page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
}),
"[project]/invest/src/app/reviews/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/invest/src/app/reviews/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__49bb8c6d._.js.map
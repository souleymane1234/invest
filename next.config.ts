const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  swcMinify: true,
  runtimeCaching: [
    {
      urlPattern:
        /^https?:\/\/(localhost:8081|192\.168\.1\.6:8081|api\.boozgame\.com|api\.tradeshouses\.com)\/uploads\/(houses|markets|avatars|trading-houses)\/.*\.(png|jpg|jpeg|gif|webp|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 500,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern:
        /^https?:\/\/(localhost:8081|192\.168\.1\.6:8081|api\.boozgame\.com)\/api\/v1\/(houses|markets|avatars)/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  // Retirez la config eslint - elle n'est plus supportée ici
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8081',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.6',
        port: '8081',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.boozgame.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.tradeshouses.com',
        pathname: '/**',
      },
    ],
  },
  // Ajoutez une config Turbopack vide pour désactiver l'avertissement
  turbopack: {},
};

module.exports = withPWA(nextConfig);

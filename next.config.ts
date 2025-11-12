import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler para optimización automática de componentes
  reactCompiler: true,

  // Turbopack File System Caching para desarrollo más rápido
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  // Cache Components (movido fuera de experimental)
  cacheComponents: true,

  // Optimizaciones de imagen
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compilador SWC con optimizaciones modernas
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Modern transpilation - target modern browsers only
  transpilePackages: [],

  // TypeScript config
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;


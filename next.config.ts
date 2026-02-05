import type { NextConfig } from "next";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
    resolveAlias: {
      tailwindcss: require.resolve("tailwindcss"),
    },
  },
};

export default nextConfig;

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Images must be unoptimized for static export
  images: {
    unoptimized: true,
  },

  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true,

  // Strict mode for better performance debugging
  reactStrictMode: true,

  // Optimize bundle - tree-shake heavy packages
  experimental: {
    optimizePackageImports: ['framer-motion', '@tsparticles/react', '@tsparticles/slim', '@tsparticles/engine'],
  },

  // Compress responses
  compress: true,

  // Power header removal for security
  poweredByHeader: false,
}

export default nextConfig

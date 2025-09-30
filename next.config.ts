import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],
    // Allow optimization for external domains if needed
    remotePatterns: [
      // Add any external image domains here if needed
    ],
    // Enable placeholder blur for better UX
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable compression
  compress: true,
  // Optimize performance
  experimental: {
    optimizePackageImports: ['@tailwindcss/postcss'],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;

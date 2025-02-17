import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  webpack: (config) => {
    config.optimization.splitChunks = false;
    return config;
  },
};

export default nextConfig;

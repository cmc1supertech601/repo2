import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dad-construction',
  assetPrefix: '/dad-construction/',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;

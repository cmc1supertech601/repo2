import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/repo2',
  assetPrefix: '/repo2/',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;

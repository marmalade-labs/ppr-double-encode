/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    pprFallbacks: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {}, // ✅ use an object, NOT false or true
  },
};

export default nextConfig;

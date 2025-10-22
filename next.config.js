/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  turbopack: {
    root: "./",
  },
};

module.exports = nextConfig;

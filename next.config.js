/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;

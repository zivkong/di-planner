/** @type {import('next').NextConfig} */
const isProduction = !!(process.env.NODE_ENV === 'production')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProduction ? "/di-planner" : ""
}

module.exports = nextConfig

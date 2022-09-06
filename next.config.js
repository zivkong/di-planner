/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/di-planner"
}

if (process.env.NODE_ENV !== 'production') delete nextConfig.basePath

module.exports = nextConfig

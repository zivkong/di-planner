/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

if (process.env.NODE_ENV === 'production') nextConfig["basePath"] = "/di-planner"

module.exports = nextConfig

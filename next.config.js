/** @type {import('next').NextConfig} */
const isProduction = !!(process.env.NODE_ENV === 'production')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

if (isProduction) {
  nextConfig["basePath"] = "/di-planner"
  nextConfig["assetPrefix"] = "/di-planner/"
}

module.exports = nextConfig

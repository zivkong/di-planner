/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

console.log("ENV", process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') nextConfig["basePath"] = "/di-planner"

module.exports = nextConfig

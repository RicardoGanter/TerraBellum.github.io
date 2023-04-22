/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  output: 'export',
  images: { unoptimized: true } ,
  outputTracing: 'all'
}
module.exports = nextConfig

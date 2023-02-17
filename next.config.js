/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   concurrentFeatures: true
  // }
  images:{
    loader:"akamai",
    path:""
  }
}

module.exports = nextConfig

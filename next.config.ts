/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // This is important for Vercel deployments
  // Add trailing slashes to URLs to ensure consistent routing
  trailingSlash: true,
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    app_url: process.env.NEXT_APP_URL,
    base_url: process.env.NEXT_PUBLIC_API_HOST,

  },
  images: {
    domains: [
      'localhost:3000',
      'http://localhost:3000',
      'localhost',
    ],
  },
}

module.exports = nextConfig

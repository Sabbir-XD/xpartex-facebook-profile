/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "randomuser.me",
      "images.unsplash.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ], 
 
  },
};

module.exports = nextConfig;

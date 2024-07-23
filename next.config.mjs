/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'firebasestorage.googleapis.com' },
    ],
  },
}

export default nextConfig

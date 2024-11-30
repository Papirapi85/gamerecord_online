/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'g7ttfzigvkyrt3gn.public.blop.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ]
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gamerecord-online.vercel.app',
        port: '',
        pathname: '/**',
      },
    ]
  },
};

export default nextConfig;

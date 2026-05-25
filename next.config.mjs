/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.haritbooks.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rokbucket.rokomari.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wafilife-media.wafilife.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'baatighar.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'publishers.com.bd',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'bdbooks.bintel.cloud',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

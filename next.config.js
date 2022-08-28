/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/elite-devs/',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://res.cloudinary.com/elite-devs>; rel="preconnect"',
          },
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com>; rel="preconnect"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

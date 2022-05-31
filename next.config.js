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
};

module.exports = nextConfig;

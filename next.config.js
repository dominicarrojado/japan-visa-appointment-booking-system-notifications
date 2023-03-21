/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  trailingSlash: true,
  basePath: isProd
    ? '/japan-visa-appointment-booking-system-notifications'
    : '',
};

module.exports = nextConfig;

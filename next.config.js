/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'pt-BR', 'es'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig

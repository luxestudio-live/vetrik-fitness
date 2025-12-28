/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/power-gold-gym/' : '',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/power-gold-gym' : '',
}

export default nextConfig

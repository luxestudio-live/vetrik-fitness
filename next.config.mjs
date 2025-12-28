/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/vetrik-fitness/' : '',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/vetrik-fitness' : '',
}

export default nextConfig

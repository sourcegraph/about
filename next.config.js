/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
})

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  webpack(config, options) {
    const { isServer } = options

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/media/',
              outputPath: `${isServer ? '../' : ''}static/media/`,
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      }
    )
    return config
  },
}

module.exports = withPWA(withBundleAnalyzer(nextConfig))

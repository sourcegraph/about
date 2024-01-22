/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

console.log(process.env);

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  // Fixes error: Global CSS cannot be imported from within node_modules: Ref:https://react-tweet.vercel.app/next#troubleshooting
  transpilePackages: ['react-tweet'],
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
  redirects() {
    if(process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/:path*',
          destination: 'https://sourcegraph.com/:path*',
          permanent: true
        }
      ]
    } else return []
  },
}

module.exports = withBundleAnalyzer(nextConfig)

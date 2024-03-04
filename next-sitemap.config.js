/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://sourcegraph.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/*?q=',
        noindex: '/*?q=',
        nofollow: '/*?q=',
      },
    ],
  },
}

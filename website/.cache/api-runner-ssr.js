var plugins = [{
      plugin: require('/Users/jdorfman/github/sg/about/website/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"offsetY":50,"icon":"<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 18 95 120\" height=\"18\" width=\"18\"><path d=\"M53.69,78.7H37.94l-5.85,25H21.74l5.85-25H15.89L18,69.1H29.84l4.65-19.65H23.39l2.1-9.6H36.74l5.7-23.7H52.79l-5.7,23.7H62.84l5.7-23.7H78.89l-5.7,23.7H84.74l-2.4,9.6H70.94L66.29,69.1H77.24l-2.4,9.6H64l-5.85,25H47.84Zm-13.5-9.6H55.94l4.65-19.65H44.84Z\"/></svg>","maintainCase":true,"removeAccents":true,"elements":["h1","h2","h3","h4"],"className":"anchor"},
    },{
      plugin: require('/Users/jdorfman/github/sg/about/website/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[],"exclude":["404","404.html","/dev-404-page","/uninstall/"]},
    },{
      plugin: require('/Users/jdorfman/github/sg/about/website/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jdorfman/github/sg/about/website/node_modules/gatsby-plugin-react-helmet-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"noTrailingSlash":false,"siteUrl":"https://about.sourcegraph.com"},
    },{
      plugin: require('/Users/jdorfman/github/sg/about/website/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  filter: { fields: { blogType: { in: [\"blog\",\"podcast\"] } } }\n                  sort: { order: DESC, fields: [frontmatter___publishDate] },\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug, blogType }\n                      frontmatter {\n                        title\n                        publishDate\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/blog/rss.xml","title":"Sourcegraph blog RSS feed"}]},
    },{
      plugin: require('/Users/jdorfman/github/sg/about/website/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

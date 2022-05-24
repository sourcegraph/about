module.exports = [{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[],"offsetY":50,"icon":"<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 18 95 120\" height=\"18\" width=\"18\"><path d=\"M53.69,78.7H37.94l-5.85,25H21.74l5.85-25H15.89L18,69.1H29.84l4.65-19.65H23.39l2.1-9.6H36.74l5.7-23.7H52.79l-5.7,23.7H62.84l5.7-23.7H78.89l-5.7,23.7H84.74l-2.4,9.6H70.94L66.29,69.1H77.24l-2.4,9.6H64l-5.85,25H47.84Zm-13.5-9.6H55.94l4.65-19.65H44.84Z\"/></svg>","maintainCase":true,"removeAccents":true,"elements":["h1","h2","h3","h4"],"className":"anchor"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":880,"linkImagesToOriginal":false,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-helmet-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"noTrailingSlash":false,"siteUrl":"https://about.sourcegraph.com"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

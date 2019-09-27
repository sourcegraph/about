exports.onClientEntry = function() {
  // Google Analytics
  ;(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    ;(i[r] =
      i[r] ||
      function() {
        ;(i[r].q = i[r].q || []).push(arguments)
      }),
      (i[r].l = 1 * new Date())
    ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

  ga('create', 'UA-40540747-17', 'auto')
  ga('send', 'pageview')
}

exports.onInitialClientRender = function() {
  /**
   * Initialize scripts
   */
  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })

  const appId = 'SourcegraphWeb'

  setTimeout(function() {
    const appId = 'SourcegraphWeb'
    const env = window.location.origin === 'https://about.sourcegraph.com' ? 'production' : 'development'
    initializeGA()
  }, 0)
}

exports.onRouteUpdate = function({ location }) {
  // TODO: @attfarhan fix condition to ensure "tracker is configured"

  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })
}

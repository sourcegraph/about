exports.onInitialClientRender = function() {
  /**
   * Initialize scripts
   */
  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })

  {
    /* Required by HubSpot */
  }
  if (window) {
    window.jQuery =
      window.jQuery ||
      (() => ({
        change: () => {},
        trigger: () => {},
      }))
  }
}

exports.onRouteUpdate = function({ location }) {
  // TODO: @attfarhan fix condition to ensure "tracker is configured"

  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })
}

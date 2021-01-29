exports.onInitialClientRender = function () {
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
      window.jQuery || function(nodeOrSelector) {
        if (typeof(nodeOrSelector) == 'string') {
            return document.querySelector(s);
        }
        return nodeOrSelector;
    };
  }
}

exports.onRouteUpdate = function ({ location }) {
  // TODO: @attfarhan fix condition to ensure "tracker is configured"

  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })
}

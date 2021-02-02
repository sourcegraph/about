exports.onInitialClientRender = function () {
  /**
   * Initialize scripts
   */
  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })

/**
 * HACK: jQuery is required for HubSpot embedded forms. We polyfill
 * jQuery to access elements in jQuery forms directly, instead of
 * working with jQuery collections.
 * See https://www.unstack.com/blog/hubspot-on-form-submit-callbacks-without-jquery
 * for more info.
 *
 */
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

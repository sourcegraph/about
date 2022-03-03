const { eventLogger } = require('./src/utils/event-logger')

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
      window.jQuery ||
      function (nodeOrSelector) {
        if (typeof nodeOrSelector == 'string') {
          return document.querySelector(s)
        }
        return nodeOrSelector
      }
  }
}

/**
 * Strip provided URL parameters and update window history
 */
function stripURLParameters(url, parametersToRemove) {
  const parsedUrl = new URL(url)
  for (const key of parametersToRemove) {
    if (parsedUrl.searchParams.has(key)) {
      parsedUrl.searchParams.delete(key)
    }
  }
  window.history.replaceState(window.history.state, window.document.title, parsedUrl.href)
}
const UTM_PARAMETER_KEYS = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content']

exports.onRouteUpdate = function ({ location }) {
  // TODO: @attfarhan fix condition to ensure "tracker is configured"

  const eventArguments = { path: location.pathname }
  const urlSearchParams = new URLSearchParams(location.search)
  UTM_PARAMETER_KEYS.forEach(key => {
    if (urlSearchParams.has(key)) {
      eventArguments[key] = urlSearchParams.get(key)
    }
  })

  eventLogger?.log('ViewStaticPage', eventArguments, eventArguments)

  stripURLParameters(location.href, UTM_PARAMETER_KEYS)

  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })
}

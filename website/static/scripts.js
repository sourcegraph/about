/**
 * Core event logging
 */
function initializeTelligent(appId, env, retry) {
  if (!window.telligent) {
    // If telligent isn't loaded, try again after a short pause
    // This has proven to be an issue specifically on pages (mostly blog posts)
    // with large image and video files that need to be downloaded
    if (retry) {
      setTimeout(function() {
        initializeTelligent(appId, env, false)
      }, 1000)
    }
    return
  }

  const telligentUrl = 'sourcegraph-logging.telligentdata.com'
  window.telligent('newTracker', 'sg', telligentUrl, {
    appId: appId,
    platform: 'Web',
    encodeBase64: false,
    env: env,
    configUseCookies: true,
    useCookies: true,
    cookieDomain: 'sourcegraph.com',
    metadata: {
      gaCookies: true,
      performanceTiming: true,
      augurIdentityLite: true,
      webPage: true,
    },
  })
}

function initializeGA() {
  if (!window.ga) {
    return
  }
  this.ga(function(trackerId) {
    if (window.telligent) {
      window.telligent('addStaticMetadataObject', {
        deviceInfo: { GAClientId: trackerId },
      })
    }
  })
}

function initializeIntercom(appId) {
  if (!window.intercom || !window.intercomSettings) {
    return
  }
  this.intercom('boot', this.intercomSettings)
  this.setIntercomProperty('is_on_prem', false)
  this.setIntercomProperty('tracking_app_id', appId)
}

function trackPageView() {
  if (!window.telligent) {
    return
  }

  const url = new URL(window.location.href)
  let props = {
    platform: 'Web',
    path_name: window && window.location && window.location.pathname ? window.location.pathname.slice(1) : '',
    static: true,
    utm_source: url.searchParams.get('utm_source') || undefined,
    utm_campaign: url.searchParams.get('utm_campaign') || undefined,
    utm_product_name: url.searchParams.get('utm_product_name') || undefined,
    utm_product_version: url.searchParams.get('utm_product_version') || undefined,
    utm_term: url.searchParams.get('utm_term') || undefined,
    utm_medium: url.searchParams.get('utm_medium') || undefined,
    utm_content: url.searchParams.get('utm_content') || undefined,
  }

  // Remove leading and trailing slashes
  let name = window.location.pathname.replace(/^\/|\/$/g, '')
  // Remove "/index.html" file names
  name = name.replace(/\/index.html$/, '')
  // Remove all ".html" extensions on other file names
  name = name.replace(/(\/[^\/]+).html$/, (_, c) => {
    return c
  })
  // Replace "/"s with capitalized characters
  name = name.replace(/\/(.)/g, (_, c) => {
    return c.toUpperCase()
  })

  if (name === '') {
    name = 'ViewHome'
  } else if (name.startsWith('blog')) {
    name = 'ViewBlog'
    const splitPath = window.location.pathname.replace(/^\/|\/$/g, '').split('/')
    props['blog_article'] = splitPath[splitPath.length - 1]
  } else if (name.startsWith('go')) {
    name = 'ViewGo'
    const splitPath = window.location.pathname.replace(/^\/|\/$/g, '').split('/')
    props['blog_article'] = splitPath[splitPath.length - 1]
  } else if (name.startsWith('graphql')) {
    name = 'ViewGraphQL'
    const splitPath = window.location.pathname.replace(/^\/|\/$/g, '').split('/')
    props['blog_article'] = splitPath[splitPath.length - 1]
  } else {
    // Pascal case
    name = `View${name.charAt(0).toUpperCase()}${name.slice(1)}`
  }

  props['page_name'] = name
  props['page_title'] = name

  window.telligent('track', 'view', props)
  logToConsole(name, props)
}

function logToConsole(eventName, object) {
  const eventLogDebug = typeof localStorage !== 'undefined' && localStorage.getItem('eventLogDebug') !== null
  if (eventLogDebug) {
    console.log('%cEVENT %s', 'color: #aaa', eventName, object)
  }
}

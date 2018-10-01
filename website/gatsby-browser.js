exports.onClientEntry = function() {
  // Telligent
  ;(function(t, r, a, c, k, e, d) {
    if (!t[k]) {
      t.GlobalTelligentNamespace = t.GlobalTelligentNamespace || []
      t.GlobalTelligentNamespace.push(k)
      t[k] = function() {
        ;(t[k].q = t[k].q || []).push(arguments)
      }
      t[k].q = t[k].q || []
      e = r.createElement(a)
      d = r.getElementsByTagName(a)[0]
      e.async = 1
      e.src = c
      d.parentNode.insertBefore(e, d)
    }
  })(window, document, 'script', 'https://storage.googleapis.com/telligent-artifacts/tracker/tel.js', 'telligent')
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
  // Intercom
  window.intercomSettings = { app_id: 'wd8xxn47' }
  ;(function() {
    var w = window
    var ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      ic('update', intercomSettings)
    } else {
      var d = document
      var i = function() {
        i.c(arguments)
      }
      i.q = []
      i.c = function(args) {
        i.q.push(args)
      }
      w.Intercom = i
      function l() {
        var s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = 'https://widget.intercom.io/widget/wd8xxn47'
        s.onload = () => {
          initializeIntercom('SourcegraphWeb')
        }
        var x = d.getElementsByTagName('script')[0]
        x.parentNode.insertBefore(s, x)
      }
      w.addEventListener('load', l, false)
    }
  })()
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
    initializeTelligent(appId, env, true)
    initializeGA()
  }, 0)
}

exports.onRouteUpdate = function({ location }) {
  // HACK: Wait one second for onInitialClientRender to happen to ensure telligent tracker is available.
  // TODO: @attfarhan fix condition to ensure "tracker is configured"

  setTimeout(() => {
    if (typeof twttr !== `undefined` && window.twttr.widgets && typeof window.twttr.widgets.load === `function`) {
      window.twttr.widgets.load()
    }
  })

  setTimeout(function() {
    trackPageView()
  }, 1000)
}

// Tailwind
import '../styles/globals.css'

import { ReactNode, useEffect } from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

// PostHog
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import { AuthModalProvider } from '../context/AuthModalContext'
import { useEventLogger, useLogAllLinkClicks } from '../hooks/eventLogger'
import { useLandingSource } from '../hooks/landingSource'
import 'prism-themes/themes/prism-one-light.css'

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
  posthog.init('phc_GYC9gnJzJhbUMe7qIZPjMpTwAeF4kkC7AGAOXZgJ4pB', {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development'){posthog.debug()}
    }
  })
}

const App = ({ Component, pageProps }: AppProps): ReactNode => {
    useEventLogger()
    useLandingSource()
    useLogAllLinkClicks()

    const router = useRouter()

    useEffect(() => {
      const handleRouteChange = () => posthog?.capture('$pageview')
      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [])

    return (
      <PostHogProvider client={posthog}>
        <AuthModalProvider>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Component {...pageProps} />
        </AuthModalProvider>
      </PostHogProvider>
    )
}

export default App

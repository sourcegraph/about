// Tailwind
import '../styles/globals.css'

import { ReactNode, useEffect } from 'react'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// PostHog
import posthog, { CaptureResult } from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import { AuthModalProvider } from '../context/AuthModalContext'
import { appolloClient } from '../graphql/client'
import { useEventLogger, useLogAllLinkClicks } from '../hooks/eventLogger'
import { useLandingSource } from '../hooks/landingSource'
import 'prism-themes/themes/prism-one-light.css'

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
    posthog.init('phc_GYC9gnJzJhbUMe7qIZPjMpTwAeF4kkC7AGAOXZgJ4pB', {
        api_host: 'https://app.posthog.com',
        loaded: posthog => {
            if (process.env.NODE_ENV === 'development') {
                posthog.debug()
            }
        },
    })
}

const App = ({ Component, pageProps }: AppProps): ReactNode => {
    useEventLogger()
    useLandingSource()
    useLogAllLinkClicks()

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (): void | CaptureResult => posthog?.capture('$pageview')
        router.events.on('routeChangeComplete', handleRouteChange)

        return (): void => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    return (
        <PostHogProvider client={posthog}>
            <ApolloProvider client={appolloClient}>
                <AuthModalProvider>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <Component {...pageProps} />
                </AuthModalProvider>
            </ApolloProvider>
        </PostHogProvider>
    )
}

export default App

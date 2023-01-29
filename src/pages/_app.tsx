// Tailwind
import '../styles/globals.css'

// TODO: Remove once Bootstrap is completely removed
import '../styles/globals.scss'

import { ReactNode } from 'react'

import type { AppProps } from 'next/app'
import SSRProvider from 'react-bootstrap/SSRProvider'

import { useEventLogger, useLogAllLinkClicks } from '../hooks/eventLogger'
import { useLandingSource } from '../hooks/landingSource'

import 'prism-themes/themes/prism-one-light.css'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
    useEventLogger()
    useLandingSource()
    useLogAllLinkClicks()

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <SSRProvider>
                <Component {...pageProps} />
            </SSRProvider>
        </>
    )
}

export default App

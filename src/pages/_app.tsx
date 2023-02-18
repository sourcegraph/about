// Tailwind
import '../styles/globals.css'

import { ReactNode } from 'react'

import type { AppProps } from 'next/app'

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
            <Component {...pageProps} />
        </>
    )
}

export default App

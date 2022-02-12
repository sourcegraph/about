import Head from 'next/head'
import React, { FunctionComponent, ReactNode, ReactFragment } from 'react'

import Footer from './footer'
import Header from './header'

interface LayoutProps {
    meta?: {
        title?: string
        description?: string
        externalTitle?: string
        externalDescription?: string
        image?: string
        icon?: string
    }
    location: {
        pathname: string
    }
    children: ReactNode | ReactFragment
    minimal?: boolean

    hero?: ReactFragment
    heroAndHeaderClassName?: string

    className?: string
    hideFooter?: boolean
    hideGetStartedButton?: boolean
}

const Layout: FunctionComponent<LayoutProps> = props => {
    const pathname = '' // TODO
    const isHome = pathname === '/'
    const isBlog = pathname === '/blog'
    const isProductPage = ''
    const meta = props.meta

    return (
        <div className={`flex flex-column fill-height ${props.className}`}>
            <Head>
                <title>{meta.externalTitle || meta.title}</title>
                <meta name="description" content={meta.externalDescription || meta.description} />

                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:site" content="@sourcegraph" />
                <meta name="twitter:image" content={meta.image} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={meta.description} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:description" content={meta.description} />

                <link rel="icon" type="image/png" href={meta.icon} />
                <link rel="icon" type="image/png" href={meta.image} />
            </Head> 

            <div className={props.heroAndHeaderClassName}>
                <Header
                    isHome={isHome}
                    isBlog={isBlog}
                    // isProductPage={isProductPage}
                    minimal={props.minimal}
                    className={props.className}
                    hideGetStartedButton={props.hideGetStartedButton}
                />

                {props.hero}
            </div>

            <section className="d-flex flex-column fill-height">
                {props.children}
            </section>
            
            {!props.hideFooter && (
                <Footer className={`pt-4 ${props.className}`} minimal={props.minimal} />
            )}
        </div>
    )
}

Layout.defaultProps = {
    meta: {
        title: 'Sourcegraph - Universal Code Search',
        description: 'Find and fix things across all of your code with Sourcegraph universal code search.',
        image: 'https://about.sourcegraph.com/sourcegraph-mark.png',
        icon: 'https://about.sourcegraph.com/favicon.png',
    },
    hideFooter: false
}

export default Layout

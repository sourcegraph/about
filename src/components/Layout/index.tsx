import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FunctionComponent, ReactNode, ReactFragment } from 'react'

import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
    meta?: {
        title?: string
        description?: string
        externalTitle?: string
        externalDescription?: string
        image?: string
        icon?: string
    }
    children: ReactNode
    minimal?: boolean

    hero?: ReactFragment
    heroAndHeaderClassName?: string

    className?: string
    hideFooter?: boolean
    hideGetStartedButton?: boolean
}

export const Layout: FunctionComponent<LayoutProps> = props => {
    const router = useRouter()
    const { pathname } = router

    const isHome = pathname === '/'
    const isBlog = pathname === '/blog'
    const isProductPage = pathname.startsWith('/product/')
    const isCaseStudyPage = pathname.startsWith('/case-studies/') && pathname.split('/')[2] !== ''

    const meta: LayoutProps['meta'] = {
        ...props.meta,
        title: props.meta?.title || 'Sourcegraph - Universal Code Search',
        description:
            props.meta?.description ||
            'Find and fix things across all of your code with Sourcegraph universal code search.',
        image: props.meta?.image || 'https://about.sourcegraph.com/sourcegraph-mark.png',
        icon: props.meta?.icon || 'https://about.sourcegraph.com/favicon.png',
    }

    return (
        <div className={`d-flex flex-column min-vh-100 ${props.className || ''}`}>
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
                    isProductPage={isProductPage}
                    minimal={props.minimal}
                    className={props.className}
                    hideGetStartedButton={props.hideGetStartedButton}
                />

                {props.hero}
            </div>
            
            <section className="flex-1">{props.children}</section>

            {!props.hideFooter && (
                <Footer
                    className={`pt-4 ${props.className || ''} ${isCaseStudyPage ? 'bg-black' : ''}`}
                    minimal={props.minimal}
                />
            )}
        </div>
    )
}

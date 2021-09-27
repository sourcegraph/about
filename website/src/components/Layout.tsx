import * as React from 'react'
import { Helmet } from 'react-helmet'
import '../css/styles.scss'
import { Footer } from './Footer'
import Header from './Header'

interface LayoutProps {
    meta?: {
        title?: string
        description?: string
        seoTitle?: string
        seoDescription?: string
        image?: string
        icon?: string
    }
    location: {
        pathname: string
    }
    children: React.ReactNode
    minimal?: boolean

    hero?: React.ReactFragment
    heroAndHeaderClassName?: string

    className?: string
}

export default class Layout extends React.PureComponent<LayoutProps> {
    public render(): JSX.Element | null {
        const defaultMetaProps: LayoutProps['meta'] = {
            title: 'Sourcegraph - Universal Code Search',
            description: 'Find and fix things across all of your code with Sourcegraph universal code search.',
            image: 'https://about.sourcegraph.com/sourcegraph-mark.png',
            icon: 'https://about.sourcegraph.com/favicon.png',
        }
        const pathname = this.props.location.pathname
        const isHome = pathname === '/'
        const isBlog = pathname === '/blog'
        const isProductPage = pathname.startsWith('/product/')
        const metaProps = { ...defaultMetaProps, ...this.props.meta }

        return (
            <div className={`flex flex-column fill-height ${this.props.className || ''}`}>
                <Helmet>
                    {metaProps.seoTitle ? <title>{metaProps.seoTitle}</title> : <title>{metaProps.title}</title>}

                    <meta name="twitter:title" content={metaProps.title} />
                    <meta name="twitter:site" content="@sourcegraph" />
                    <meta name="twitter:image" content={metaProps.image} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content={metaProps.description} />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={metaProps.title} />
                    <meta property="og:image" content={metaProps.image} />
                    <meta property="og:description" content={metaProps.description} />

                    {metaProps.seoDescription ? (
                        <meta name="description" content={metaProps.seoDescription} />
                    ) : (
                        <meta name="description" content={metaProps.description} />
                    )}

                    <link rel="icon" type="image/png" href={metaProps.icon} />
                    <link rel="icon" type="image/png" href={metaProps.image} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <div className={this.props.heroAndHeaderClassName}>
                    <Header
                        isHome={isHome}
                        isBlog={isBlog}
                        isProductPage={isProductPage}
                        minimal={this.props.minimal}
                        className={`${this.props.className || ''}`}
                    />
                    {this.props.hero}
                </div>
                <section className="d-flex flex-column fill-height">{this.props.children}</section>
                <Footer className={`pt-4 ${this.props.className || ''}`} minimal={this.props.minimal} />
            </div>
        )
    }
}

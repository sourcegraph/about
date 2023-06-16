import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from './Footer'
import { Header, HeaderColorTheme } from './Header/Header'

interface LayoutProps {
    meta?: {
        title?: string
        description?: string
        externalTitle?: string
        externalDescription?: string
        image?: string
        videoID?: string
        icon?: string
        canonical?: string
    }
    children: ReactNode
    minimal?: boolean

    hero?: ReactNode
    heroAndHeaderClassName?: string
    childrenClassName?: string
    displayChildrenUnderNav?: boolean
    headerColorTheme?: HeaderColorTheme

    className?: string
    hideFooter?: boolean
    hideHeader?: boolean
}

export const Layout: FunctionComponent<LayoutProps> = ({ headerColorTheme, className, ...props }) => {
    const navRef = useRef<HTMLElement>(null)
    const [contentOffsetY, setContentOffsetY] = useState(0)
    const router = useRouter()
    const { pathname, asPath } = router

    const isArticle = ['/blog/', '/podcast/'].includes(pathname.replace('[...slug]', ''))

    const meta: LayoutProps['meta'] = {
        ...props.meta,
        title: props.meta?.title || 'Sourcegraph - Universal Code Search',
        description:
            props.meta?.description ||
            'Find and fix things across all of your code with Sourcegraph universal code search.',
        image:
            props.meta?.image ||
            'https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/meta/sourcegraph-social.png',
        icon: props.meta?.icon || 'https://about.sourcegraph.com/favicon.png',
    }

    const videoMeta = {
        thumbnail: '',
        embedURL: '',
        watchURL: '',
    }
    if (meta.videoID) {
        videoMeta.thumbnail = `https://img.youtube.com/vi/${meta.videoID}/maxresdefault.jpg`
        videoMeta.embedURL = `https://www.youtube.com/embed/${meta.videoID}`
        videoMeta.watchURL = `https://www.youtube.com/v/${meta.videoID}`
    }

    /**
     * This sets a top buffer for the sticky nav's main position by using
     * the height of the navbar.
     */
    useEffect(() => {
        if (navRef.current) {
            const navHeight = navRef.current.getBoundingClientRect().height || 116
            setContentOffsetY(navHeight)
        }
    }, [])

    return (
        <div className={`flex min-h-screen flex-col ${className || ''}`}>
            <Head>
                <title>{meta.externalTitle || meta.title}</title>
                <meta name="description" content={meta.externalDescription || meta.description} />

                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:site" content="@sourcegraph" />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:creator" content="@sourcegraph" />

                {meta.videoID ? (
                    <>
                        <meta name="twitter:player" content={videoMeta.embedURL} />
                        <meta name="twitter:player:width" content="560" />
                        <meta name="twitter:player:height" content="315" />
                        <meta name="twitter:card" content="player" />
                        <meta name="twitter:image" content={videoMeta.thumbnail} />

                        <meta property="og:video" content={videoMeta.watchURL} />
                        <meta property="og:video:url" content={videoMeta.watchURL} />
                        <meta property="og:video:secure_url" content={videoMeta.watchURL} />
                        <meta property="og:video:type" content="video/mp4" />
                        <meta property="og:video:width" content="560" />
                        <meta property="og:video:height" content="315" />
                        <meta property="og:image" content={videoMeta.thumbnail} />
                        <meta property="og:image:secure_url" content={videoMeta.thumbnail} />
                    </>
                ) : (
                    <>
                        <meta name="twitter:image" content={meta.image} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta property="og:image" content={meta.image} />
                        <meta property="og:image:secure_url" content={meta.image} />
                    </>
                )}

                <meta property="og:url" content={`https://about.sourcegraph.com${asPath}`} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content={isArticle ? 'article' : 'website'} />
                <meta property="og:site_name" content="Sourcegraph" />

                <link rel="icon" type="image/png" href={meta.icon} />

                {meta.canonical ? <link rel="canonical" href={meta.canonical} /> : ''}
            </Head>

            {!props.hideHeader && (
                <div
                    className={classNames(props.heroAndHeaderClassName, 'pt-[147px] md:pt-[116px]')}
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{ paddingTop: contentOffsetY !== 0 ? contentOffsetY : undefined }}
                >
                    <Header minimal={props.minimal} colorTheme={headerColorTheme || 'white'} navRef={navRef} />

                    {props.hero}
                </div>
            )}
            <style>{`body { background-color: ${
                headerColorTheme === 'purple'
                    ? 'var(--sg-color-violet-750)'
                    : headerColorTheme === 'dark'
                    ? 'black'
                    : 'white'
            }; }`}</style>
            <section
                className={classNames('flex-1', props.childrenClassName, {
                    '-mt-[68px] pt-5xl md:-mt-[74px] md:!pt-[148px]': props.displayChildrenUnderNav,
                })}
            >
                {props.children}
            </section>

            {!props.hideFooter && (
                <Footer dark={headerColorTheme === 'dark' || headerColorTheme === 'purple'} minimal={props.minimal} />
            )}
        </div>
    )
}

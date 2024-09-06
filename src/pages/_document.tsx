import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

interface MyDocumentProps extends DocumentInitialProps {
    pathName: string
}

export default class MyDocument extends Document<MyDocumentProps> {
    public static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps, pathName: ctx.asPath || '' }
    }

    public override render(): JSX.Element {
        const { pathName } = this.props
        const isHomepage = pathName === '/'

        return (
            <Html lang="en">
                <Head>
                    {/* So that Triblio (and other third-party scripts) can read the full URL. More details here: https://learning.triblio.com/article/212-understanding-site-referrer-policy */}
                    <meta name="referrer" content="no-referrer-when-downgrade" />

                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#ffffff" />
                    <meta name="apple-mobile-web-app-title" content="Sourcegraph" />
                    <link rel="apple-touch-startup-image" href="/sourcegraph/sourcegraph-mark.png" />

                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/sourcegraph/sourcegraph-mark-touch-180.png" />

                    <link rel="manifest" href="/manifest.json" />

                    <link rel="alternate" type="application/rss+xml" href="/feed.rss.xml" />

                    {/* Sourcegraph Chrome Extension */}
                    <link
                        rel="chrome-webstore-item"
                        href="https://chrome.google.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack"
                    />

                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&family=Source+Code+Pro&display=swap"
                        rel="stylesheet"
                    />

                    {/* Inter Font */}
                    <link rel="preconnect" href="https://rsms.me/" />
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

                    {/* Google structured data. (WebSite) */}
                    <Script
                        id="structured_data"
                        type="application/ld+json"
                        strategy="beforeInteractive"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'WebSite',
                                name: 'Sourcegraph',
                                url: 'https://sourcegraph.com',
                            }),
                        }}
                    />

                    {/* Google structured data. (Organization) */}
                    {isHomepage && (
                        <Script
                            id="structured_data_company"
                            type="application/ld+json"
                            strategy="beforeInteractive"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    '@context': 'https://schema.org',
                                    '@type': 'Organization',
                                    image: 'https://sourcegraph.com/sourcegraph-logo.svg',
                                    url: 'https://www.sourcegraph.com',
                                    sameAs: [
                                        'https://github.com/sourcegraph',
                                        'https://twitter.com/sourcegraph',
                                        'https://www.youtube.com/c/Sourcegraph/featured',
                                        'https://www.linkedin.com/sourcegraph/',
                                        'https://discord.com/servers/sourcegraph-969688426372825169',
                                    ],
                                    logo: 'https://sourcegraph.com/sourcegraph-logo.svg',
                                    name: 'Sourcegraph',
                                    description:
                                        "Sourcegraph's code intelligence platform makes it easy for devs to write, fix, and maintain code with Cody, the AI coding assistant, and Code Search",
                                }),
                            }}
                        />
                    )}

                    {/* Cookiebot */}
                    {/* Cookiebot recommends this in the head, which aligns with Next.js' recommendation for CCMs */}
                    <Script
                        id="script-cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                        data-blockingmode="auto"
                        type="text/javascript"
                        strategy="beforeInteractive"
                    />

                    {/* GTM Data Layer */}
                    {/* Google recommends this in the head, but Next.js recommends afterInteractive */}
                    {/* Note: Deprecate gtag UA config when we've migrated to GA4 */}
                    <Script id="script-gtm-data-layer" data-cookieconsent="ignore" strategy="afterInteractive">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        
                        function gtag() {
                            dataLayer.push(arguments);
                        }
                        
                        gtag("consent", "default", {
                            ad_storage: "denied",
                            analytics_storage: "denied",
                            wait_for_update: 500,
                        });
                        
                        gtag("set", "ads_data_redaction", true);
                        
                        gtag('js', new Date());
                        gtag('config', 'UA-40540747-17');
                    `}
                    </Script>

                    {/* Google Tag Manager */}
                    {/* Google recommends this in the head, but Next.js recommends afterInteractive */}
                    <Script id="script-gtm" data-cookieconsent="ignore" strategy="afterInteractive">
                        {`
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-TB4NLS7');  
                        `}
                    </Script>

                    {/* StackAdapt Pixel */}
                    <Script id="stack-adapt-pixel" data-cookieconsent="ignore" strategy="afterInteractive">
                        {`
                            !function(s,a,e,v,n,t,z){if(s.saq)return;n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!s._saq)s._saq=n;n.push=n;n.loaded=!0;n.version='1.0';n.queue=[];t=a.createElement(e);
                            t.async=!0;t.src=v;z=a.getElementsByTagName(e)[0];z.parentNode.insertBefore(t,z)}(window,document,'script','https://tags.srv.stackadapt.com/events.js');
                            saq('ts', 'RhgJyv1POYn3YCYB1MQ6Gw');
                        `}
                    </Script>

                    {/* Triblio "Webpage Personalization" */}
                    {/* Triblio recommends this in the head which we follow with beforeInteractive */}
                    <Script
                        id="script-triblio-personalization"
                        type="text/javascript"
                        src="https://tribl.io/h.js?orgId=Yee6bMKj7QSARqAePdE8"
                        async={true}
                        strategy="beforeInteractive"
                    />

                    {/* Triblio "Analytics and Overlay Cards" */}
                    {/* Triblio recommends this in the body which aligns with Next.js' recommendation for analytics */}
                    <Script
                        id="script-triblio-analytics"
                        type="text/javascript"
                        src="https://tribl.io/footer.js?orgId=Yee6bMKj7QSARqAePdE8"
                        strategy="afterInteractive"
                        defer={true}
                    />
                </Head>
                <body>
                    {/* Google Tag Manager (noscript) */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-TB4NLS7"
                            // eslint-disable-next-line react/forbid-dom-props
                            style={{ display: 'none', visibility: 'hidden' }}
                            height="0"
                            width="0"
                            title="GTM"
                        />
                    </noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

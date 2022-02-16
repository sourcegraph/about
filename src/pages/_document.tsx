import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    public override render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    {/* So that Triblio (and other third-party scripts) can read the full URL. More details here: https://learning.triblio.com/article/212-understanding-site-referrer-policy */}
                    <meta name="referrer" content="no-referrer-when-downgrade" />
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                    <link rel="icon" type="image/png" href="/favicon.png" />

                    {/* TODO Implement RSS Feed */}
                    {/* <link rel="alternate" type="application/rss+xml" title="Universal Code Search | Sourcegraph" href="/rss.xml" /> */}

                    {/* Sourcegraph Chrome Extension */}
                    <link
                        rel="chrome-webstore-item"
                        href="https://chrome.google.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack"
                    />

                    {/* Adobe Source Sans Pro Fonts */}
                    <link rel="stylesheet" href="https://use.typekit.net/ngk3rlb.css" />

                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&family=PT+Sans:wght@400;700&display=swap"
                        rel="stylesheet"
                    />

                    <meta name="google-site-verification" content="vRPkjcQnrXKgId0IyxVPHp0CGp3B7zaEFiTpyb8kPSQ" />
                </Head>
                <body>
                    {/* Google Tag Manager (noscript) */}
                    <style
                        dangerouslySetInnerHTML={{
                            __html: '.gtm-hide { "display:none;visibility:hidden" 0 !important}',
                        }}
                    />
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-TB4NLS7"
                            className="gtm-hide"
                            height="0"
                            width="0"
                            title="GTM"
                        />
                    </noscript>
                    {/*  End Google Tag Manager (noscript) */}

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

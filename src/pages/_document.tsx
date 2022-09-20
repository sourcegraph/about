import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
                    {/* <link rel="alternate" type="application/rss+xml" title="Universal Code Search - Sourcegraph" href="/rss.xml" /> */}

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
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&family=Source+Code+Pro&display=swap"
                        rel="stylesheet"
                    />

                    {/* Cookiebot */}
                    <Script
                        id="cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                        data-blockingmode="auto"
                        type="text/javascript"
                        strategy="beforeInteractive"
                    />

                    {/* Google Tag Manager Data Layer Window */}
                    <Script id="gtm-data-layer" strategy="beforeInteractive">
                        window.dataLayer = window.dataLayer || [];
                    </Script>

                    {/* Google Tag Manager */}
                    <Script id="gtm" data-cookieconsent="ignore" strategy="beforeInteractive">
                        {`
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TB4NLS7');  
                        `}
                    </Script>

                    {/* Google Analytics Data Layer Settings */}
                    {/* Note: GA is configured via GTM */}
                    <Script id="ga" data-cookieconsent="ignore" strategy="beforeInteractive">
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
                    `}
                    </Script>

                    {/* Triblio "Webpage Personalization" */}
                    <Script
                        id="triblio-p"
                        type="text/javascript"
                        src="https://tribl.io/h.js?orgId=Yee6bMKj7QSARqAePdE8"
                        async={true}
                        strategy="beforeInteractive"
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

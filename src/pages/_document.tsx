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

                    {/* Sourcegraph Chrome Extension */}
                    <link
                        rel="chrome-webstore-item"
                        href="https://chrome.google.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack"
                    />

                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&family=Source+Code+Pro&display=swap"
                        rel="stylesheet"
                    />

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

                    {/* Drift */}
                    {/* Drift recommends this in the head, but Next.js recommends chat bots afterInteractive */}
                    <Script id="script-drift" type="text/javascript" strategy="afterInteractive" defer={true}>
                        {`
                            "use strict";
                            !function() {
                            var t = window.driftt = window.drift = window.driftt || [];
                            if (!t.init) {
                                if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                                t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                                t.factory = function(e) {
                                return function() {
                                    var n = Array.prototype.slice.call(arguments);
                                    return n.unshift(e), t.push(n), t;
                                };
                                }, t.methods.forEach(function(e) {
                                t[e] = t.factory(e);
                                }), t.load = function(t) {
                                var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                                var i = document.getElementsByTagName("script")[0];
                                i.parentNode.insertBefore(o, i);
                                };
                            }
                            }();
                            drift.SNIPPET_VERSION = '0.3.1';
                            drift.load('bgv3pp29xsp9');
                        `}
                    </Script>
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

import '@styles/globals.scss'

import { ReactNode } from 'react'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import SSRProvider from 'react-bootstrap/SSRProvider'

import { useEventLogger, useLogAllLinkClicks } from '@hooks'

import 'prism-themes/themes/prism-one-light.css'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
    useEventLogger()
    useLogAllLinkClicks()

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* // Import all top-level scripts here: https://nextjs.org/docs/messages/no-script-in-document-page */}

            {/* Triblio "Webpage Personalization" */}
            <Script
                id="triblio-p"
                type="text/javascript"
                src="https://tribl.io/h.js?orgId=Yee6bMKj7QSARqAePdE8"
                strategy="beforeInteractive"
            />

            {/* Triblio "Analytics and Overlay Cards" */}
            <Script
                id="triblio-a"
                type="text/javascript"
                src="https://tribl.io/footer.js?orgId=Yee6bMKj7QSARqAePdE8"
                strategy="afterInteractive"
            />

            {/* Google Analytics */}
            <Script id="track-ga" data-cookieconsent="ignore">
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

            {/* Google Tag Manager */}
            <Script id="track-gtm" data-cookieconsent="ignore">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TB4NLS7');  
            `}
            </Script>

            {/* Cookiebot */}
            <Script
                id="cookiebot"
                src="https://consent.cookiebot.com/uc.js"
                data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                data-blockingmode="auto"
                type="text/javascript"
                strategy="afterInteractive"
            />

            {/* Drift */}
            <Script id="drift" type="text/javascript">
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

            <SSRProvider>
                <Component {...pageProps} />
            </SSRProvider>
        </>
    )
}

export default App

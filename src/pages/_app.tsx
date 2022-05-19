import '@styles/globals.scss'

import { ReactNode } from 'react'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import SSRProvider from 'react-bootstrap/SSRProvider'

import { useEventLogger } from '@hooks'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
    useEventLogger()

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* // Import all top-level scripts here: https://nextjs.org/docs/messages/no-script-in-document-page */}

            {/* Triblio "Webpage Personalization" for Sales/Marketing */}
            <Script
                data-cfasync="false"
                type="text/javascript"
                src="https://tribl.io/h.js?orgId=Yee6bMKj7QSARqAePdE8"
            />

            {/* Google Analytics */}
            <Script data-cookieconsent="ignore" id="track-ga">
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
            <Script data-cookieconsent="ignore" id="track-gtm">
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
                id="Cookiebot"
                src="https://consent.cookiebot.com/uc.js"
                data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                data-blockingmode="auto"
                type="text/javascript"
            />

            {/* Add jQuery as a dependency for Clearbit - without this Clearbit doesn't work */}
            <Script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

            {/* Drift */}
            <Script type="text/javascript" id="drift">
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

            {/* Clearbit script for Hubspot form enrichment */}
            <Script type="text/javascript" id="clearbit-hubspot">
                {
                    '!function(e){var o=document.getElementsByTagName("script")[0];if("object"==typeof e.ClearbitForHubspot)return console.log("Clearbit For HubSpot included more than once"),!1;e.ClearbitForHubspot={},e.ClearbitForHubspot.forms=[],e.ClearbitForHubspot.addForm=function(o){var t=o[0];"function"==typeof e.ClearbitForHubspot.onFormReady?e.ClearbitForHubspot.onFormReady(t):e.ClearbitForHubspot.forms.push(t)};var t=document.createElement("script");t.async=!0,t.src="https://hubspot.clearbit.com/v1/forms/pk_a66b9ed76e62c713c06aab39bfae7234/forms.js",o.parentNode.insertBefore(t,o),e.addEventListener("message",function(o){if("hsFormCallback"===o.data.type&&"onFormReady"===o.data.eventName)if(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0)e.ClearbitForHubspot.addForm(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'));else if(document.querySelectorAll("iframe.hs-form-iframe").length>0){document.querySelectorAll("iframe.hs-form-iframe").forEach(function(t){t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0&&e.ClearbitForHubspot.addForm(t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'))})}})}(window);'
                }
            </Script>

            <SSRProvider>
                <Component {...pageProps} />
            </SSRProvider>
        </>
    )
}

export default App

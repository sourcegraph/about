/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from 'react'
import { Helmet } from 'react-helmet'
import './css/styles.scss'

interface HtmlProps {
    body: any
    postBodyComponents: any
    headComponents: any
}

export default class HTML extends React.Component<HtmlProps> {
    public render(): JSX.Element | null {
        const head = Helmet.renderStatic()

        return (
            <html lang="en">
                <head>
                    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NV75KPZ"></script>
                    {this.props.headComponents}
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                    {/* {css} */}
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <link rel="alternate" type="application/rss+xml" title="Sourcegraph Blog" href="/rss.xml" />
                    <link
                        rel="chrome-webstore-item"
                        href="https://chrome.google.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack"
                    />
                    <meta name="google-site-verification" content="vRPkjcQnrXKgId0IyxVPHp0CGp3B7zaEFiTpyb8kPSQ" />
                    <script data-cookieconsent="ignore" dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                                function gtag() {
                                    dataLayer.push(arguments);
                                }
                                gtag("consent", "default", {
                                    ad_storage: "denied",
                                    analytics_storage: "denied",
                                wait_for_update: 500,
                                });
                                gtag("set", "ads_data_redaction", true);
                    `,
                    }}
                    />
                    {/*  Google Tag Manager */}
                    <script data-cookieconsent="ignore" dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TB4NLS7');  
                    `,
                    }}
                    />
                    {/* End Google Tag Manager */}
                    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d" data-blockingmode="auto" type="text/javascript"></script>

                    {/* Add jQuery as a dependency for the Clearbit script - without this Clearbit doesn't work*/}
                    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

                    {/* Add Clearbit script for Hubspot form enrichment */}
                    <script type="text/javascript" dangerouslySetInnerHTML={{
                        __html: `!function(e){var o=document.getElementsByTagName("script")[0];if("object"==typeof e.ClearbitForHubspot)return console.log("Clearbit For HubSpot included more than once"),!1;e.ClearbitForHubspot={},e.ClearbitForHubspot.forms=[],e.ClearbitForHubspot.addForm=function(o){var t=o[0];"function"==typeof e.ClearbitForHubspot.onFormReady?e.ClearbitForHubspot.onFormReady(t):e.ClearbitForHubspot.forms.push(t)};var t=document.createElement("script");t.async=!0,t.src="https://hubspot.clearbit.com/v1/forms/pk_a66b9ed76e62c713c06aab39bfae7234/forms.js",o.parentNode.insertBefore(t,o),e.addEventListener("message",function(o){if("hsFormCallback"===o.data.type&&"onFormReady"===o.data.eventName)if(document.querySelectorAll('form[data-form-id="'+o.data.id+'"]').length>0)e.ClearbitForHubspot.addForm(document.querySelectorAll('form[data-form-id="'+o.data.id+'"]'));else if(document.querySelectorAll("iframe.hs-form-iframe").length>0){document.querySelectorAll("iframe.hs-form-iframe").forEach(function(t){t.contentWindow.document.querySelectorAll('form[data-form-id="'+o.data.id+'"]').length>0&&e.ClearbitForHubspot.addForm(t.contentWindow.document.querySelectorAll('form[data-form-id="'+o.data.id+'"]'))})}})}(window);
                        `,
                    }}
                    />
                </head>
                <body>
                    {/*   Google Tag Manager (noscript) */}
                    <style dangerouslySetInnerHTML={{ __html: `.gtm-hide { display:none;visibility:hidden" 0 !important}` }} />
                    <noscript>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TB4NLS7" className="gtm-hide" height="0" width="0"></iframe>
                    </noscript>
                    {/*  End Google Tag Manager (noscript) */}
                    <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}

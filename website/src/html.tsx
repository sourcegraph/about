/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from 'react'
import Helmet from 'react-helmet'
import eventLogger = require('./EventLogger')

// Load production style
let styles: string
if (process.env.NODE_ENV === `production`) {
    try {
        styles = require('!raw-loader!../public/styles.css')
    } catch (err) {
        console.log(err)
    }
}

interface HtmlProps {
    body: any
    postBodyComponents: any
    headComponents: any
}

module.exports = class HTML extends React.Component<HtmlProps> {
    public render(): JSX.Element | null {
        const head = Helmet.renderStatic()

        const css =
            process.env.NODE_ENV === `production` ? (
                <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: styles }} />
            ) : null

        return (
            <html lang="en">
                <head>
                    {this.props.headComponents}
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                    <link rel="stylesheet" href="/styles.css" />
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                    {css}
                    <script type="text/javascript" src="/scripts.js" />
                    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.4/js/tether.min.js" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" />
                    <link rel="icon" type="image/png" href="https://about.sourcegraph.com/favicon.png" />
                    <link
                        rel="chrome-webstore-item"
                        href="https://chrome.google.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
                    />
                </head>
                <body>
                    <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    {this.props.postBodyComponents}
                    <script
                        type="text/javascript"
                        src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
                    />
                </body>
            </html>
        )
    }
}

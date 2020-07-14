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
                    {this.props.headComponents}
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                    {/* {css} */}
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <link
                        rel="chrome-webstore-item"
                        href="https://chrome.google.com/webstore/detail/dgjhfomjieaadpoljlnidmbgkdffpack"
                    />
                    <script
                        type="text/javascript"
                        id="hs-script-loader"
                        async={true}
                        defer={true}
                        src="//js.hs-scripts.com/2762526.js"
                    />
                </head>
                <body>
                    <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}

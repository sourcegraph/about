import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

export const DevToolsQuizPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'New Year, New Dev Tools - Take the Quiz - Sourcegraph',
            description:
                'Dev tools have made huge strides recently. This is a chance to think about your go-to tools for searching, reading, and understanding code and discover some new ones along the way.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="dev-tools-quiz-page"
    >
        <Helmet>
            <script src="//embed.typeform.com/next/embed.js"></script>
        </Helmet>
        <body data-tf-widget="bSiNOCmx" data-tf-iframe-props="title=Dev Tools Quiz" data-tf-hidden="utm_source=xxxxx,utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx"></body>
    </Layout>
)

export default DevToolsQuizPage

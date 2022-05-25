// eslint-disable-next-line unicorn/prevent-abbreviations
import { FunctionComponent } from 'react'

import Script from 'next/script'

import { Layout } from '@components'

const DevelopmentToolsQuizPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'New Year, New Dev Tools - Take the Quiz - Sourcegraph',
            description:
                'Dev tools have made huge strides recently. This is a chance to think about your go-to tools for searching, reading, and understanding code and discover some new ones along the way.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        hideHeader={true}
        hideFooter={true}
    >
        <div
            className="vh-100"
            data-tf-widget="bSiNOCmx"
            data-tf-iframe-props="title=Dev Tools Quiz"
            data-tf-hidden="utm_source=xxxxx,utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx"
        />
        <Script src="//embed.typeform.com/next/embed.js" />
    </Layout>
)

export default DevelopmentToolsQuizPage

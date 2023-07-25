import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const SourcegraphAiPlatformPageB: FunctionComponent = () => (
    <GatedPageLayout
        pageType="B"
        type="Whitepaper"
        title="How Sourcegraph’s code AI platform powers Cody"
        description="Cody is built on top of Sourcegraph’s code AI platform, giving it the context and intelligence it needs."
        image="/resources/ai-platform-cody-whitepaper.svg"
        formId="c4389b26-dd30-4442-a8bb-bad31cf1be72"
        ogImage="https://about.sourcegraph.com/resources/ai-platform-cody-og.png"
        actionPage="ai-powers-cody"
    />
)

export default SourcegraphAiPlatformPageB

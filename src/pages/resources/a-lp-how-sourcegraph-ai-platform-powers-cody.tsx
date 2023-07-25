import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const SourcegraphAiPlatformPageA: FunctionComponent = () => (
    <GatedPageLayout
        pageType="A"
        type="Whitepaper"
        title="How Sourcegraph’s code AI platform powers Cody"
        description="Cody is built on top of Sourcegraph’s code AI platform, giving it the context and intelligence it needs."
        image="/resources/ai-platform-cody-whitepaper.svg"
        outlineContent={
            <>
                <p className="text-2xl font-semibold text-gray-700">This paper outlines:</p>
                <ul className="text-lg text-gray-700">
                    <li>How Cody works and how exactly it makes use of Sourcegraph’s AI platform.</li>
                    <li>What goes on under the hood of a typical user interaction with Cody.</li>
                    <li>
                        How the platform gives Cody a unique advantage compared to other coding assistants today and how
                        that advantage will grow in the future.
                    </li>
                </ul>
            </>
        }
        formId="c4389b26-dd30-4442-a8bb-bad31cf1be72"
        ogImage="https://about.sourcegraph.com/resources/ai-platform-cody-og.png"
        actionPage="ai-powers-cody"
    />
)

export default SourcegraphAiPlatformPageA

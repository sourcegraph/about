import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { amazonCodewhispererVsCody } from '../../components/Compare/constants'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs. Amazon CodeWhisperer',
            description: 'Feature comparison of Sourcegraph Cody and Amazon CodeWhisperer',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs. Amazon CodeWhisperer"
                competitorDescription="Amazon CodeWhisperer Logo"
                competitorIcon="/assets/compare/amazon-codewhisperer.svg"
            >
                <p>
                    CodeWhisperer is an AI code assistant from Amazon focused on autocomplete, free for individuals with
                    AWS Builder IDs. Uniquely, CodeWhisperer is optimized to give code completions based on best
                    practices for using AWS APIs. Enterprise users can also customize CodeWhisperer for their own
                    codebases, but this is not available for free-tier users.
                </p>

                <p>
                    CodeWhisperer itself does not offer chat or command features, but AWS offers a chat assistant
                    (“Amazon Q”) in the same IDE extension as CodeWhisperer. Q is currently in a free preview, and it is
                    expected to cost $20 / user / month once it is fully released.{' '}
                </p>
                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    CodeWhisperer is a good solution for developers primarily looking for autocomplete or developers
                    working with AWS APIs. It can also provide context-aware autocomplete for enterprises using the new
                    codebase customization. Meanwhile, Cody is a good option for developers who want more expansive
                    functionality, such as chat and commands alongside autocomplete, or for free-tier users who are
                    looking for a context-aware code AI.
                </p>
            </CompareHero>
        }
    >
        <CompareTables compareData={amazonCodewhispererVsCody} />

        <CodyCallToActionContentSection
            title="Get Cody, the AI coding assistant"
            description="Cody makes it easy to write, fix, and maintain code."
            cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
            cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
        />

        <OtherComparisons />
    </Layout>
)

export default CompareCopilotPage

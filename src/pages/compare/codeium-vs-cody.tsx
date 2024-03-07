import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { codeiumVsCody } from '../../components/Compare/constants'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs Codeium',
            description: 'Feature comparison of Sourcegraph Cody and Codeium',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs Codeium"
                competitorDescription="Codeium Logo"
                competitorIcon="/assets/compare/codeium.svg"
            >
                <p>
                    Codeium is an AI coding extension that provides code completion, search, and chat for over 70
                    programming languages. It is available for many popular IDEs including Visual Studio Code,
                    JetBrains, Visual Studio, and others.
                </p>

                <p>
                    Codeium differentiates itself from other AI coding tools by training in-house models on various
                    programming languages, while also providing support for popular LLMs like GPT-4.
                </p>
                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Codeium is a code AI extension that provides code completion, search, and chat for over 70
                    programming languages by training in-house models. Cody is a good choice for users who want more
                    transparency and choice for the model being used, whereas Codeium has more extensive IDE support
                    today.
                </p>
            </CompareHero>
        }
    >
        <CompareTables compareData={codeiumVsCody} />

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

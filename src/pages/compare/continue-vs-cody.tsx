import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { continueVsCody } from '../../components/Compare/constants'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs Continue',
            description: 'Feature comparison of Sourcegraph Cody and Continue',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs Cursor"
                competitorDescription="Continue Logo"
                competitorIcon="/assets/compare/continue.svg"
            >
                <p>
                    Continue is an open source autopilot for IDEs, designed to enhance coding with any LLM directly
                    within the user's preferred development environment. It offers features like task and tab
                    autocomplete, the ability to ask coding questions, natural language editing, and generating files
                    from scratch. Continue supports any LLM and provider, offering local-first, modular use and
                    customization options. It focuses on using the codebase as context, allowing users to continue
                    working in their flow without switching applications. Additionally, it supports team-wide deployment
                    and continuous custom model finetuning.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Continue is an open source IDE tool that integrates any LLM to boost coding with features like
                    autocomplete and natural language editing. Cody is a great option for those seeking enterprise
                    support and customizable commands for a more personalized development experience.
                </p>
            </CompareHero>
        }
    >
        <CompareTables compareData={continueVsCody} />

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

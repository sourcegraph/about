import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { copilotVsCody } from '../../components/Compare/constants'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs GitHub Copilot',
            description: 'Feature comparison of Sourcegraph Cody and GitHub Copilot',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs GitHub Copilot"
                competitorDescription="GitHub Copilot Logo"
                competitorIcon="/assets/compare/github-copilot.svg"
            >
                <p>
                    Sourcegraph Cody and GitHub Copilot are AI code assistants optimized for different enterprise needs.
                    Cody excels in three key scenarios: (1) enterprises working with large, distributed codebases across
                    multiple code hosts, (2) organizations requiring precise, context-aware code generation and
                    responses, and (3) teams needing flexibility in their AI infrastructure.
                </p>

                <p>
                    Cody's key advantage is its ability to understand and utilize context from complete codebases,
                    regardless of where code is hosted. This context enables Cody to generate higher-quality code and
                    provide more accurate responses via chat and the Prompt Library (which allows teams to create
                    customizable, shareable prompts to automate their work). Additionally, Cody offers unmatched
                    flexibility in AI infrastructure - organizations can self-host models, use their own model keys, or
                    establish secure connections to LLMs through cloud providers like Amazon Bedrock and Azure OpenAI.
                </p>

                <p>
                    GitHub Copilot is well-suited for organizations seeking basic autocomplete and chat functionality
                    for small codebases hosted exclusively on GitHub Enterprise Cloud. While it integrates well with
                    GitHub's ecosystem, its context is limited to single repositories and GitHub-hosted code, and
                    organizations cannot control their model infrastructure.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Choose Cody for comprehensive codebase understanding across multiple hosts, higher-quality code
                    generation through better context, and flexible model hosting. Choose Copilot for basic code
                    autocomplete and chat for small codebases hosted in GitHub Enterprise Cloud.
                </p>
            </CompareHero>
        }
    >
        <CompareTables compareData={copilotVsCody} />

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

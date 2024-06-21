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
                    Copilot is an AI code assistant that offers autocomplete, chat, and commands. It has strong
                    autocomplete performance using the OpenAI Codex model, and it offers in-IDE and mobile chat with
                    GPT-4. It also offers deep integration with the GitHub platform with Copilot Enterprise.
                </p>

                <p>
                    Unfortunately, Copilot does not offer a standard free tier. Copilot is also limited in how it uses
                    code context on its Individual and Business tiers; codebase personalization is limited to Copilot
                    Enterprise, and codebase context is limited to code hosted in GitHub. However, Copilot Enterprise
                    also requires a GitHub Enterprise Cloud subscription and is not available with their on-premise
                    Enterprise offering.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Copilot is a good choice for individuals who are willing to pay for a solution or for enterprises
                    looking for a solution that is deeply embedded in the GitHub ecosystem. However, Cody is the better
                    option for individuals who want a free AI code assistant that they can personalize using codebase
                    context, or for users who would like to select which LLM they'd like to use. Cody is also a good
                    option for enterprise users who want to personalize their AI with code from non-GitHub code hosts.
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

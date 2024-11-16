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
                    GPT-4o. It also offers deep integration with the GitHub platform with Copilot Enterprise.
                </p>

                <p>
                    Unfortunately, Copilot does not offer a standard free tier. Copilot is also limited in how it uses
                    code context on its Individual and Business tiers; full codebase personalization is limited to
                    Copilot Enterprise, and even then, codebase context is limited to code hosted in GitHub. Copilot
                    Enterprise also requires a GitHub Enterprise Cloud subscription and is not available with their
                    on-premise Enterprise offering. While Copilot does offer the choice between multiple chat models,
                    users aren't able to host their own models, bring their own model keys, or connect to cloud
                    providers like Amazon Bedrock and Azure OpenAI for a more private connection.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    tl;dr Copilot is a good choice for enterprises looking for a solution deeply embedded in the GitHub
                    ecosystem. However, Cody is the better option for enterprises that want their AI solution to utilize
                    context from a full codebase spanning multiple code hosts. Cody is also a better option for
                    enterprises looking for model flexibility, such as the ability to self-host models, bring their own
                    model keys, or securely connect to an LLM via cloud provider services such as Amazon Bedrock.
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

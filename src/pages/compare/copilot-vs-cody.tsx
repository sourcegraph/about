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
                    GPT-4o. Copilot Chat also supports a number of the latest models, including Claude 3.5 Sonnet and
                    Gemini 1.5 Pro. Lastly, it offers deep integration with the GitHub platform with Copilot Enterprise.
                </p>

                <p>
                    Copilot does not offer a standard free tier. Copilot also limits how much code from private
                    codebases can be used as context; users on Individual and Business tiers are limited to 5 repos and
                    50 repos, respectively. Also, only code hosted on GitHub can be used as context. Copilot Enterprise
                    does not have a limit on the number of repos used as context, but it requires a GitHub Enterprise
                    Cloud subscription and is not available with the on-premise Enterprise offering.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Copilot is a good choice for enterprises that are exluclusively using GitHub as a code host and that
                    are looking for a solution that is deeply embedded in the GitHub ecosystem. Cody is the
                    better option for enterprises that want a solution that works with multiple code hosts, or for
                    enterprises that want to bring their own model keys (such as via Amazon Bedrock) for enhanced
                    security. Cody also provides a cheaper price point without a limit on the number of repositories
                    that can be used as context.
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

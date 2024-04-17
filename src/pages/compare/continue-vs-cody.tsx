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
                title="Sourcegraph Cody vs Continue"
                competitorDescription="Continue Logo"
                competitorIcon="/assets/compare/continue.svg"
            >
                <p>
                    Continue is an "open source autopilot in your IDE," designed to enhance coding with any LLM directly
                    within the user's preferred development environment. It offers features like autocomplete, the
                    ability to ask coding questions, natural language editing, and generating files from scratch.
                    Continue is highly customizable and supports many LLMs and providers. It is "local-first," so users
                    can bring their own local model to use even when their machine is offline. Continue also supports
                    cloud-based LLMs, but users must bring their provide their own API key. Continue provides free
                    access to a few cloud-based models but only on a trial basis.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Continue is a highly flexible, open source IDE tool for autocomplete and LLM chat. It's a strong
                    option for users who want to bring their own models, particularly local models. Cody is a good
                    option for users who want to use LLMs as a service, users who want free access to LLMs (via Cody
                    Free), or for teams looking for solutions with enterprise security and support.
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

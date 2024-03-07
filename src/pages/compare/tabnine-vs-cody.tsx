import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { tabnineVsCody } from '../../components/Compare/constants'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs Tabnine',
            description: 'Feature comparison of Sourcegraph Cody and Tabnine',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs Tabnine"
                competitorDescription="Tabnine Logo"
                competitorIcon="/assets/compare/tabnine.svg"
            >
                <p>
                    Tabnine is an AI assistant primarily focused on code autocomplete. Tabnine Chat, an in-IDE chat
                    feature, is also in beta but only for Enterprise users. The free tier of Tabnine has limited
                    functionality, offering short code completions of 2-3 words, and not offering chat or other AI
                    commands.
                </p>
                <p>
                    The most unique aspect of Tabnine is its hybrid LLM approach. Tabnine's free tier (Starter) runs a
                    small model on the user's local machine and a larger model in the cloud. Tabnine Pro also offers a
                    model where users can run the Tabnine AI models entirely on their local machine.
                </p>
                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Tabnine is a good choice for users who want to run their LLM entirely on their local machine, but
                    its Starter and Pro tiers are restricted to only autocomplete. Cody Free and Cody Pro offer a wider
                    range of features (autocomplete, chat, and commands) using cloud-based models.
                </p>
            </CompareHero>
        }
    >
        <CompareTables compareData={tabnineVsCody} />

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

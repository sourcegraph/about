import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { cursorVsCody } from '../../components/Compare/constants'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs Cursor',
            description: 'Feature comparison of Sourcegraph Cody and Cursor',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs Cursor"
                competitorDescription="Cursor Logo"
                competitorIcon="/assets/compare/cursor.svg"
            >
                <p>
                    Cursor is an “AI-first Code Editor.” Unlike other solutions which are commonly IDE extensions and
                    plugins, Cursor itself is a fork of VS Code. Cursor features autocomplete (called "Tab"), chat, and
                    Command+K for quickly editing code. Cursor users can also feed local code context to the LLM by 
                    manually selecting files and symbols to include in chat.
                </p>

                <p>
                    The main downside of Cursor being a fork of VS Code is that it is not available to use with other
                    IDEs (such as the JetBrains family), as well as the fact that it's not 100% feature parity with VS Code.
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Cursor is a good choice for users willing to migrate from their preferred IDE to Cursor. It offers
                    unique functionality and has local codebase context features. However, Cody is a better choice for
                    users who want to use their existing IDE. Cody also offers more functionality for enterprise
                    developers, including the ability to reference remote codebase context in chat and flexibility in
                    LLM deployment - e.g., using your own LLM infrastructure in services like Amazon Bedrock.
                    Lastly, Cody offers more generous usage for premium models such as Claude 3.5 Sonnet and GPT-4o.
                </p>
            </CompareHero>
        }
    >
        <CompareTables compareData={cursorVsCody} />

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

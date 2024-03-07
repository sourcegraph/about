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
                    plugins, Cursor itself is a fork of VS Code. This gives Cursor some unique functionality, including
                    its “Auto-debug” feature that can attempt to fix errors that appear in the VS Code terminal. Cursor
                    also provides codebase context to the LLM, and users can manually select files and symbols to
                    include as context for questions.
                </p>

                <p>
                    The main downside of Cursor being a fork of VS Code is that it is not available to use with other
                    IDEs (such as the JetBrains family).
                </p>

                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Cursor is a good choice for users who are willing to migrate from their preferred IDE to Cursor. It
                    offers unique functionality and has strong codebase context features. However, Cody is a better
                    option for users who want LLM choice or who want their code AI to work within their IDE of choice.
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

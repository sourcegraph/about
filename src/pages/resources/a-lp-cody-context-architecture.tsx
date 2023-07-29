import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const CodyContextArchitecturePageA: FunctionComponent = () => (
    <GatedPageLayout
        pageType="A"
        type="Whitepaper"
        title="Cody context architecture"
        description="Context awareness is key to the quality and precision of Cody."
        image="/resources/cody-context-architecture-whitepaper.svg"
        outlineContent={
            <>
                <p className="text-2xl font-semibold text-gray-700">This paper outlines:</p>
                <ul className="text-lg text-gray-700">
                    <li>
                        How Cody generates a prompt that is specifically designed to help answer questions about the
                        user’s code
                    </li>
                    <li>How Cody selects the right context by searching for relevant code snippets</li>
                    <li>
                        What are the two methods for fetching context, and why embeddings are preferred over keyword
                        search
                    </li>
                    <li>How is Sourcegraph continually working to improve context search</li>
                </ul>
            </>
        }
        formId="39c8517d-3d63-4162-b777-6d0fb72973ed"
        ogImage="https://about.sourcegraph.com/resources/cody-context-architecture-og.png"
        actionPage="cody-context-architecture"
    />
)

export default CodyContextArchitecturePageA

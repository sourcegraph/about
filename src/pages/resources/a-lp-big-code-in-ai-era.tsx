import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const BigCodeInAiEraPageA: FunctionComponent = () => (
    <GatedPageLayout
        pageType="A"
        type="Report"
        title="Big Code in the AI era"
        description="The Big Code problem is a rapidly growing crisis for developers, engineering leaders, and companies today."
        image="/resources/big-code-report.svg"
        outlineContent={
            <>
                <p className="text-2xl font-semibold text-gray-700">This report outlines:</p>
                <ul className="text-lg text-gray-700">
                    <li>The AI era is here. Most devs are using AI tools to write code.</li>
                    <li>Big Code’s getting bigger. Codebases are have grown by at least 5x in the past three years.</li>
                    <li>Innovation is blocked. Devs are stuck trying to find and understand code.</li>
                    <li>
                        AI is the best and worst thing to happen to dev teams. Most devs struggle with confusing code
                        written by somebody else.
                    </li>
                </ul>
            </>
        }
        formId="3612c366-2e75-4a4b-9212-6dcbd6b008fe"
        ogImage="https://about.sourcegraph.com/resources/big-code-og.png"
        actionPage="big-code"
    />
)

export default BigCodeInAiEraPageA

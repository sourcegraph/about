import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const BigCodeInAiEraPageB: FunctionComponent = () => (
    <GatedPageLayout
        pageType="B"
        type="Report"
        title="Big Code in the AI era"
        description="The Big Code problem is a rapidly growing crisis for developers, engineering leaders, and companies today."
        image="/resources/big-code-report.svg"
        formId="3612c366-2e75-4a4b-9212-6dcbd6b008fe"
        formInlineMessage={
            'Thank you! <a style="text-decoration: underline;" href=\'https://info.sourcegraph.com/hubfs/PDFs/big-code-in-ai-report.pdf\'>Download the report here.</a>'
        }
        ogImage="https://about.sourcegraph.com/resources/big-code-og.png"
    />
)

export default BigCodeInAiEraPageB

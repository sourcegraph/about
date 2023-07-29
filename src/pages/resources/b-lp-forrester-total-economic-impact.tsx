import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const ForresterTotalEconomicImapctPageB: FunctionComponent = () => (
    <GatedPageLayout
        pageType="B"
        type="Report"
        title="The Total Economic Impact™ of Sourcegraph code intelligence platform"
        description="A commissioned study conducted by Forrester Consulting on behalf of Sourcegraph."
        image="/resources/forrester-whitepaper.svg"
        formId="e09d62b0-7c79-422e-a3d2-98c7c2948716"
        ogImage="https://about.sourcegraph.com/resources/forrester-og.png"
        actionPage="forrester-tei"
    />
)

export default ForresterTotalEconomicImapctPageB

import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const ForesterTotalEconomicImpactPageA: FunctionComponent = () => (
    <GatedPageLayout
        pageType="A"
        type="Report"
        title="The Total Economic Impact™ of Sourcegraph code intelligence platform"
        description="A commissioned study conducted by Forrester Consulting on behalf of Sourcegraph."
        image="/resources/forrester-whitepaper.svg"
        outlineContent={
            <p className="text-lg text-gray-700">
                Developer organizations are increasingly focused on improving productivity, due to the high cost and
                challenges of finding and retaining high-quality talent. Code intelligence platforms such as Sourcegraph
                aid developers by providing developer-focused, featurerich, and high-speed code search and intelligence
                capabilities across an organization’s entire codebase.
            </p>
        }
        formId="e09d62b0-7c79-422e-a3d2-98c7c2948716"
        formInlineMessage={
            'Thank you! <a style="text-decoration: underline;" href=\'https://2762526.fs1.hubspotusercontent-na1.net/hubfs/2762526/PDFs/Sourcegraph%20TEI.pdf\' target="_blank">Download the report here.</a>'
        }
        ogImage="https://about.sourcegraph.com/resources/forrester-og.png"
    />
)

export default ForesterTotalEconomicImpactPageA

import { FunctionComponent } from 'react'

import { GatedPageLayout } from '../../components'

export const CodyContextArchitecturePageB: FunctionComponent = () => (
    <GatedPageLayout
        pageType="B"
        type="Whitepaper"
        title="Cody context architecture"
        description="Context awareness is key to the quality and precision of Cody."
        image="/resources/cody-context-architecture-whitepaper.svg"
        formId="39c8517d-3d63-4162-b777-6d0fb72973ed"
        ogImage="https://about.sourcegraph.com/resources/cody-context-architecture-og.png"
        actionPage="cody-context-architecture"
    />
)

export default CodyContextArchitecturePageB

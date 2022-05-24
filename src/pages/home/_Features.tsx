import { FunctionComponent } from 'react'

import { ContentSection, FeatureWalkthrough } from '@components'
import { sourcegraphFeatures } from '@data'

const FeatureSection: FunctionComponent = () => (
    <ContentSection color="white" className="py-8 pb-7">
        <FeatureWalkthrough features={sourcegraphFeatures} />
    </ContentSection>
)

export default FeatureSection

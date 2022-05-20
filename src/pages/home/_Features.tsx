import { FunctionComponent } from 'react'

import { FeatureWalkthrough } from '@components'
import { sourcegraphFeatures } from '@data'

const FeatureSection: FunctionComponent = () => (
    <FeatureWalkthrough features={sourcegraphFeatures} color="white" className="py-8 pb-7" />
)

export default FeatureSection

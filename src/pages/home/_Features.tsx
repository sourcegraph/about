import { FunctionComponent } from 'react'

import { FeatureDisplay } from '@components'
import { sourcegraphFeatures } from '@data'

const FeatureSection: FunctionComponent = () => (
    <FeatureDisplay features={sourcegraphFeatures} color="white" className="py-8 pb-7" />
)

export default FeatureSection

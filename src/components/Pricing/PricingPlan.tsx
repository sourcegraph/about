import { ReactNode, FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'

import { FeatureCluster, SPOTLIGHT_FEATURE_INFO } from './data'
import { PricingPlanFeature } from './PricingPlanFeature'

interface Props {
    name: string
    description: string
    price: string
    priceInterval?: string
    buttons: ReactNode
    beforeFeatures?: ReactNode
    features: FeatureCluster[]
    borderColorClass: string
    textColorClass: string
}

/** A pricing plan on the pricing page. */
export const PricingPlan: FunctionComponent<Props> = ({
    name,
    description,
    price,
    priceInterval,
    buttons,
    beforeFeatures,
    features,
    borderColorClass,
    textColorClass,
}) => (
    <div className={`h-full rounded border-t-16 border-gray-200 p-xs shadow-lg sm:p-md ${borderColorClass}`}>
        <h2 className="mb-sm font-semibold">{name}</h2>
        <h4 className="my-sm">
            <span className="text-xl">{price}</span>{' '}
            {priceInterval && <span className="text-base font-normal">{priceInterval}</span>}
        </h4>
        <h3 className="my-sm max-w-sm text-lg font-normal">{description}</h3>
        {buttons}

        {(beforeFeatures || features.length > 0) && (
            <div className="ml-0 py-sm">
                {beforeFeatures}
                {features.map(node => (
                    <div key={node.topic} className="border-0 bg-transparent px-0">
                        <div className="flex items-center text-xl font-semibold">
                            <CheckIcon className={`mr-2 ${textColorClass}`} />
                            <h5 className="w-full">{node.topic}</h5>
                        </div>
                        <ul className="ml-2xl mb-xs">
                            {node?.features?.map(feature => (
                                <div key={feature}>
                                    <PricingPlanFeature feature={SPOTLIGHT_FEATURE_INFO[feature]} tag="li" />
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )}
    </div>
)

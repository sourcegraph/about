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
    <div
        className={`h-full sm:p-md p-xs shadow-lg border-t-16 rounded border-gray-200 ${borderColorClass}`}
    >
        <h2 className="mb-sm font-semibold">{name}</h2>
        <h4 className="my-sm">
            <span className="text-xl">{price}</span>{' '}
            {priceInterval && <span className="text-base font-normal">{priceInterval}</span>}
        </h4>
        <h3 className="font-normal max-w-sm text-lg my-sm">{description}</h3>
        {buttons}

        {(beforeFeatures || features.length > 0) && (
            <div className="py-sm ml-0">
                {beforeFeatures}
                {features.map(node => (
                    <div key={node.topic} className="px-0 bg-transparent border-0">
                        <div className="text-xl font-semibold flex items-center">
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

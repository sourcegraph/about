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
        className={`h-100 sm:tw-p-md tw-p-xs tw-shadow-lg tw-border-t-16 tw-rounded tw-border-gray-200 ${borderColorClass}`}
    >
        <h2 className="tw-mb-sm tw-font-semibold">{name}</h2>
        <h4 className="tw-my-sm">
            <span className="tw-text-xl">{price}</span>{' '}
            {priceInterval && <span className="tw-text-base tw-font-normal">{priceInterval}</span>}
        </h4>
        <h3 className="tw-font-normal tw-max-w-sm tw-text-lg tw-my-sm">{description}</h3>
        {buttons}

        {(beforeFeatures || features.length > 0) && (
            <div className="tw-py-sm ml-0">
                {beforeFeatures}
                {features.map(node => (
                    <div key={node.topic} className="tw-px-0 bg-transparent border-0">
                        <div className="tw-text-xl tw-font-semibold tw-flex tw-items-center">
                            <CheckIcon className={`mr-2 ${textColorClass}`} />
                            <h5 className="tw-w-full">{node.topic}</h5>
                        </div>
                        <ul className="tw-ml-2xl tw-mb-xs">
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

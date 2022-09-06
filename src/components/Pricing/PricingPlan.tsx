import { ReactFragment, FunctionComponent } from 'react'

import { Feature } from './interfaces'
import { PricingPlanFeature } from './PricingPlanFeature'

interface Props {
    name: string
    description: string
    price: string
    features: Feature[]
    buttons: ReactFragment
    isEnterprise: boolean
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: FunctionComponent<Props> = ({
    name,
    price,
    description,
    features,
    buttons,
    isEnterprise,
}) => (
    <div className={`h-100 tw-p-md tw-shadow-lg tw-border-t-16 tw-rounded tw-border-gray-200 tw-border-${isEnterprise ? 'violet-400' : 'vermillion-300'}`}>
        <h2 className="tw-mb-sm tw-font-semibold">{name}</h2>
        <h3 className="tw-font-normal tw-max-w-sm">{description}</h3>
        <h4 className="tw-my-sm">{price}</h4>
        {buttons}

        <div className="py-3 ml-0">
            {isEnterprise &&
                <li className="tw-px-0 bg-transparent border-0 tw-text-xl list-group-item">
                    Everything in Business, plus:
                </li>
            }
            {features.map(feature => (
                <div key={feature.title}>
                    <PricingPlanFeature
                        feature={feature}
                        isEnterprise={isEnterprise}
                        className="tw-px-0 bg-transparent border-0 tw-text-xl list-group-item"
                    />
                </div>
            ))}
            {/* {FEATURE_ORDER.map(feature => (
                <div key={FEATURE_INFO[feature].label}>
                    <PricingPlanFeature
                        info={FEATURE_INFO[feature]}
                        value={features[feature]}
                        tag="li"
                        className="tw-px-0 bg-transparent border-0 tw-text-xl list-group-item"
                    />
                </div>
            ))} */}
        </div>
    </div>
)

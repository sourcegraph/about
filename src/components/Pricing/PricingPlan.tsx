import { ReactNode, FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'

import { FeatureCluster, SPOTLIGHT_FEATURE_INFO } from './data'
import { PricingPlanFeature } from './PricingPlanFeature'

interface Props {
    name: string
    description: string
    price: string
    features: FeatureCluster[]
    buttons: ReactNode
    isEnterprise: boolean
}

/** A pricing plan on the pricing page. */
export const PricingPlan: FunctionComponent<Props> = ({
    name,
    price,
    description,
    features,
    buttons,
    isEnterprise,
}) => (
    <div
        className={`h-100 tw-p-md tw-shadow-lg tw-border-t-16 tw-rounded tw-border-gray-200 ${
            isEnterprise ? 'tw-border-t-violet-400' : 'tw-border-t-vermillion-300'
        }`}
    >
        <h2 className="tw-mb-sm tw-font-semibold">{name}</h2>
        <h3 className="tw-font-normal tw-max-w-sm">{description}</h3>
        <h4 className="tw-my-sm">{price}</h4>
        {buttons}

        <div className="tw-py-sm ml-0">
            {isEnterprise && <div className="tw-text-xl tw-font-semibold tw-mb-sm">Everything in Business, plus:</div>}
            {features.map(node => (
                <div
                    key={node.topic}
                    className="tw-px-0 bg-transparent border-0 tw-text-xl list-group-itemtw-justify-between"
                >
                    <div className="tw-text-xl tw-font-semibold tw-flex tw-items-center">
                        <CheckIcon
                            className={`mr-2 icon-inline ${
                                isEnterprise ? 'tw-text-violet-400' : 'tw-text-vermillion-300'
                            } tw-inline`}
                        />
                        <h5>{node.topic}</h5>
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
    </div>
)

import { ReactNode, FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'

import { FeatureCluster, SPOTLIGHT_FEATURE_INFO } from './data'
import { PricingPlanFeature } from './PricingPlanFeature'

const COLORS: Record<'violet' | 'vermillion', { borderClass: string; textClass: string }> = {
    vermillion: {
        borderClass: 'tw-border-t-vermillion-300',
        textClass: 'tw-text-vermillion-300',
    },
    violet: {
        borderClass: 'tw-border-t-violet-400',
        textClass: 'tw-text-violet-400',
    },
}

interface Props {
    name: string
    description: string
    price: string
    accentColor: keyof typeof COLORS
    buttons: ReactNode
    beforeFeatures?: ReactNode
    features: FeatureCluster[]
}

/** A pricing plan on the pricing page. */
export const PricingPlan: FunctionComponent<Props> = ({
    name,
    description,
    price,
    accentColor,
    buttons,
    beforeFeatures,
    features,
}) => (
    <div
        className={`h-100 sm:tw-p-md tw-p-xs tw-shadow-lg tw-border-t-16 tw-rounded tw-border-gray-200 ${COLORS[accentColor].borderClass}`}
    >
        <h2 className="tw-mb-sm tw-font-semibold">{name}</h2>
        <h3 className="tw-font-normal tw-max-w-sm">{description}</h3>
        <h4 className="tw-my-sm">{price}</h4>
        {buttons}

        <div className="tw-py-sm ml-0">
            {beforeFeatures}
            {features.map(node => (
                <div key={node.topic} className="tw-px-0 bg-transparent border-0">
                    <div className="tw-text-xl tw-font-semibold tw-flex tw-items-center">
                        <CheckIcon className={`mr-2 ${COLORS[accentColor].textClass}`} />
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
    </div>
)

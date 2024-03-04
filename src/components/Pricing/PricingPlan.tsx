import { ReactNode, FunctionComponent, useState } from 'react'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'

import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { Tooltip } from '../Tooltip'

import { FeatureCluster, SPOTLIGHT_FEATURE_INFO } from './data'
import { PricingPlanFeature } from './PricingPlanFeature'

interface Props {
    name: string | ReactNode
    description: ReactNode
    price?: ReactNode
    priceDetail?: ReactNode
    buttons: ReactNode
    features: FeatureCluster[]
    borderColorClass?: string
    shadow?: string
    nameClass?: string
    paddingX?: string
    planClasses?: string
}

/** A pricing plan on the pricing page. */
export const PricingPlan: FunctionComponent<Props> = ({
    name,
    description,
    price,
    priceDetail,
    buttons,
    features,
    borderColorClass = 'border-gray-200',
    shadow = 'pricing-plan-card',
    nameClass,
    paddingX = 'px-[24px]',
    planClasses,
}) => {
    const [showDetails, setShowDetails] = useState(false)

    const handleButtonClick = (): void => {
        setShowDetails(!showDetails)
    }
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.mdi

    return (
        <div className={classNames('rounded-2xl border border-gray-200 bg-white', shadow, planClasses)}>
            <div className={classNames('rounded-t', borderColorClass)} />
            <div className={classNames('py-[40px]', paddingX)}>
                <span className={classNames('mb-2 text-2xl font-semibold', nameClass)}>{name}</span>
                <span
                    className={classNames(
                        'flex border-b-1 pb-[24px] text-base font-normal leading-[20px] -tracking-[0.25px]',
                        nameClass ? 'text-violet-500' : 'text-gray-400'
                    )}
                >
                    {description}
                </span>
                <span className="my-sm grid gap-[3px]">
                    {price && <div className="flex items-center text-4xl text-gray-500">{price}</div>}
                    {priceDetail && priceDetail}
                </span>
                {buttons}
                {isMobile && !showDetails && (
                    <button
                        title="see details"
                        type="button"
                        className="flex w-full items-center justify-center pt-6 pb-6"
                        onClick={handleButtonClick}
                    >
                        <div className=" flex cursor-pointer flex-row items-center justify-center gap-4 text-lg font-semibold leading-[27px]">
                            <span>SEE DETAILS</span>
                            <ChevronDownIcon className="w-xs" />
                        </div>
                    </button>
                )}
                {(!isMobile || showDetails) && (
                    <div
                        className={`${
                            isMobile ? 'transition-max-height overflow-hidden duration-700 ease-in-out' : ''
                        }`}
                    >
                        {features.length > 0 && (
                            <div className="ml-0 mt-8 border-t-1">
                                {features.map(node => (
                                    <div key={node.topic} className="border-0 bg-transparent px-0">
                                        <div className={classNames('mb-2 flex items-center pt-[32px] text-sm')}>
                                            <h5 className="text-base font-semibold leading-5 -tracking-[0.25px] text-gray-500">
                                                {node.topic}
                                            </h5>
                                            {node.description && (
                                                <Tooltip
                                                    wrapperClassName="my-auto ml-xxs text-gray-300 flex items-center text-sm"
                                                    text={node.description}
                                                    tooltipClassName="p-2"
                                                >
                                                    <InformationCircleOutlineIcon size={18} />
                                                </Tooltip>
                                            )}
                                        </div>
                                        <ul className="ml-0 grid list-none gap-y-2 border-b-1 pb-[32px]">
                                            {node?.features?.map(feature => (
                                                <div key={feature}>
                                                    <PricingPlanFeature
                                                        feature={SPOTLIGHT_FEATURE_INFO[feature]}
                                                        tag="li"
                                                    />
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

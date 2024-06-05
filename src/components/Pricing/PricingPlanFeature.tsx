import { FunctionComponent } from 'react'

import classNames from 'classnames'
import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'

import { Badge } from '../Badge'
import { Tooltip } from '../Tooltip'

import { FeatureInfo } from './data'

interface Props {
    feature: FeatureInfo
    tag: 'li' | 'h5'
    className?: string
}

export const PricingPlanFeature: FunctionComponent<Props> = ({ feature, tag: Tag = 'li', className }) => (
    <Tag className={classNames(Tag === 'li' && 'text-sm')}>
        <div className="flex items-center">
            <div
                className={classNames(
                    feature.label === 'Bring your own LLM'
                        ? 'text-[#5E6E8C]'
                        : 'text-gray-500',
                    className
                )}
            >
                {feature.label}
            </div>
            {feature.label === 'Context Filters' && (
                <Badge
                    text="new"
                    size="small"
                    className="ml-1 px-1 not-italic leading-3 text-gray-500"
                    color="light-gray"
                />
            )}
            {feature.label === 'Bring your own LLM' && (
                <Badge
                    text="coming soon"
                    size="small"
                    className="ml-1 px-1 not-italic leading-3 text-gray-500"
                    color="light-gray"
                />
            )}
            {feature.description && (
                <Tooltip
                    wrapperClassName="my-auto ml-xxs text-gray-300 flex items-center"
                    tooltipClassName="p-2 z-20"
                    text={feature.description}
                >
                    <InformationCircleOutlineIcon size={18} />
                </Tooltip>
            )}
        </div>
    </Tag>
)

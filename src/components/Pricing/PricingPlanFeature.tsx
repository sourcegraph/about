import { FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'
import QuestionMarkCircleOutlineIcon from 'mdi-react/QuestionMarkCircleOutlineIcon'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FeatureInfo } from './interfaces'

interface Props {
    info: FeatureInfo
    value: boolean
    tag: 'li'
    className?: string
}

export const PricingPlanFeature: FunctionComponent<Props> = ({
    info: { label, description },
    value,
    tag: Tag = 'li',
    className = '',
}) =>
    value ? (
        <Tag className={`${className} tw-flex justify-content-between`}>
            <div className="tw-text-xl">
                <CheckIcon className="mr-2 icon-inline text-success tw-inline" /> {label}
            </div>
            {description && (
                <OverlayTrigger
                    placement="auto"
                    flip={true}
                    transition={false}
                    overlay={<Tooltip id="tooltip">{description}</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <span {...triggerHandler} ref={ref} className="ml-2 tw-text-gray-400">
                            <QuestionMarkCircleOutlineIcon />
                        </span>
                    )}
                </OverlayTrigger>
            )}
        </Tag>
    ) : null

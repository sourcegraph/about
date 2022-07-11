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
        <Tag className={`${className} d-flex justify-content-between`}>
            <div className="text-xl">
                <CheckIcon className="icon-inline text-success mr-2" /> {label}
            </div>
            {description && (
                <OverlayTrigger
                    placement="auto"
                    flip={true}
                    transition={false}
                    overlay={<Tooltip id="tooltip">{description}</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <span {...triggerHandler} ref={ref} className="ml-2 text-gray-4">
                            <QuestionMarkCircleOutlineIcon />
                        </span>
                    )}
                </OverlayTrigger>
            )}
        </Tag>
    ) : null

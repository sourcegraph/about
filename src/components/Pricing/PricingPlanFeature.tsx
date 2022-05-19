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
        <Tag
            className={`pricing-plan-feature ${className} d-flex justify-content-between ${
                value ? 'pricing-plan-feature__value-true' : 'pricing-plan-feature__value-false'
            }`}
        >
            <div>
                <CheckIcon
                    className={`icon-inline ${
                        value ? 'pricing-plan-feature__icon-true' : 'pricing-plan-feature__icon-false'
                    }`}
                />{' '}
                {label}
            </div>
            {description && (
                <OverlayTrigger
                    placement="auto"
                    flip={true}
                    transition={false}
                    overlay={<Tooltip id="tooltip">{description}</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <span {...triggerHandler} ref={ref} className="ml-2 pricing-plan-feature__help">
                            <QuestionMarkCircleOutlineIcon />
                        </span>
                    )}
                </OverlayTrigger>
            )}
        </Tag>
    ) : null

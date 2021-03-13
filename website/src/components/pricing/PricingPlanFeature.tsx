import React from 'react'
import CheckIcon from 'mdi-react/CheckIcon'
import { FeatureInfo } from './PricingPlan'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import QuestionMarkCircleOutlineIcon from 'mdi-react/QuestionMarkCircleOutlineIcon'

interface Props {
    info: FeatureInfo
    value: boolean

    tag: 'li'
    className?: string
}

export const PricingPlanFeature: React.FunctionComponent<Props> = ({
    info: { label, url, description },
    value,
    tag: Tag = 'li',
    className = '',
}) => {
    return (
        value ?
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
                    <OverlayTrigger placement="auto" flip={true} overlay={<Tooltip id="tooltip">{description}</Tooltip>}>
                        <span className="ml-2 pricing-plan-feature__help">
                            <QuestionMarkCircleOutlineIcon />
                        </span>
                    </OverlayTrigger>
                )}
            </Tag>
        : null
    )
}

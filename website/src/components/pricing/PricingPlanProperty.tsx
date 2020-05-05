import React from 'react'

interface Props {
    description?: React.ReactFragment

    className?: string
}

export const PricingPlanProperty: React.FunctionComponent<Props> = ({ description, className = '', children }) => {
    return (
        <div className={`pricing-plan-property ${className} pb-1`}>
            <div>{children}</div>
            <small className="text-muted">{description}</small>
        </div>
    )
}

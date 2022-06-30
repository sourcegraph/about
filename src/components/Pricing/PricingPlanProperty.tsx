import { FunctionComponent, ReactFragment } from 'react'

interface PricingPlanPropertyProps {
    description?: ReactFragment

    className?: string
}

export const PricingPlanProperty: FunctionComponent<PricingPlanPropertyProps> = ({ description, className = '', children }) => (
    <div className={`pricing-plan-property ${className} pb-1`}>
        <div>{children}</div>
        <small className="text-muted">{description}</small>
    </div>
)

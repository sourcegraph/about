import { FunctionComponent, ReactFragment } from 'react'

interface Props {
    description?: ReactFragment

    className?: string
}

export const PricingPlanProperty: FunctionComponent<Props> = ({ description, className = '', children }) => (
    <div className={`pricing-plan-property ${className} pb-1`}>
        <div>{children}</div>
        <small className="text-muted">{description}</small>
    </div>
)

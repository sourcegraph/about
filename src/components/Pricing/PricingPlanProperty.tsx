import { FunctionComponent, ReactFragment } from 'react'

interface Props {
    description?: ReactFragment

    className?: string
}

export const PricingPlanProperty: FunctionComponent<Props> = ({ description, className = '', children }) => (
    <div className={`tw-text-xl ${className} tw-pb-1`}>
        <div>{children}</div>
        <small className="text-muted">{description}</small>
    </div>
)
import { FunctionComponent, ReactNode } from 'react'

interface Props {
    description?: string | ReactNode
    children: ReactNode
    className?: string
}

export const PricingPlanProperty: FunctionComponent<Props> = ({ description, className = '', children }) => (
    <div className={`text-xl ${className} pb-1`}>
        <div>{children}</div>
        <small className="text-gray-400">{description}</small>
    </div>
)

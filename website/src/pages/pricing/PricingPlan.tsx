import * as React from 'react'

export interface PricingPlanFeature {
    name: string
    id: string
}

interface Props {
    className?: string
    name: string
    description: string
    price: string
    priceSubtitle: string
    features: PricingPlanFeature[]
    buttonLabel: string
    buttonOnClick: () => void
    buttonHref: string
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: React.FunctionComponent<Props> = ({
    className,
    name,
    description,
    price,
    priceSubtitle,
    features,
    buttonLabel,
    buttonOnClick,
    buttonHref,
}) => (
    <div className={`card pricing__card ${className}`}>
        <h1 className="card-title border-bottom py-2">{name}</h1>
        <div className="card-body py-1 pricing-plan__description">{description}</div>
        <div className="card-body">
            <div className="pricing-plan__price">
                <h2>{price}</h2>
                <h3>{priceSubtitle}</h3>
            </div>
            <a
                className="btn btn-pricing btn-lg justify-content-center text-center"
                role="button"
                href={buttonHref}
                onClick={buttonOnClick}
            >
                {buttonLabel}
            </a>
            <div className="list-group list-group-flush">
                {features.map(({ name, id }, i) => (
                    <a
                        key={i}
                        href={`#${id}`}
                        className="list-group-item list-group-item-action bg-transparent border-0 py-1"
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    </div>
)

import { FunctionComponent, ReactNode } from 'react'

import { Background, HubSpotForm } from '@components'

interface ProductHero extends Background {
    product: 'code search' | 'batch changes' | 'code insights'
    title: string | ReactNode
    description: string
}

export const ProductHero: FunctionComponent<Omit<ProductHero, 'className' | 'children'>> = ({
    variant,
    illustration,
    product,
    title,
    description,
    displayUnderNav,
}) => (
    <Background
        variant={variant}
        illustration={illustration}
        className="d-flex align-items-center min-h-600"
        displayUnderNav={displayUnderNav}
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="d-flex flex-column-reverse">
                        <h1 className="display-2 font-weight-bold mb-4">{title}</h1>
                        <div className="text-uppercase mb-2 font-weight-bold">{product}</div>
                    </div>
                    <h5 className="mb-5 font-weight-normal">{description}</h5>
                    <div className="d-flex flex-column pt-1 max-w-400">
                        <HubSpotForm masterFormName="contactEmail" />
                    </div>
                </div>
            </div>
        </div>
    </Background>
)

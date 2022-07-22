import { FunctionComponent, ReactNode } from 'react'

import { Background } from '@components'

interface ProductHero extends Background {
    product: 'code search' | 'batch changes' | 'code insights'
    title: string | ReactNode
    description: string
}

export const ProductHero: FunctionComponent<Omit <ProductHero, 'className' | 'children'>> = ({
    variant,
    illustration,
    product,
    title,
    description,
    displayUnderNav
}) => (
    <Background
        variant={variant}
        illustration={illustration}
        className="d-flex align-items-center"
        displayUnderNav={displayUnderNav}
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="text-uppercase mb-2">{product}</div>
                    <h1 className="display-2 font-weight-bold mb-4">{title}</h1>
                    <h3 className="mb-5">{description}</h3>
                    <div className="d-flex flex-column pt-1 max-w-400">
                        {/* TODO: Add form */}
                    </div>
                </div>
            </div>
        </div>
    </Background>
)

import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

import { Background, HubSpotForm } from '@components'

interface ProductHero extends Background {
    product: 'code search' | 'batch changes' | 'code insights'
    title: string | ReactNode
    description: string
    displayUnderNav?: boolean
}

export const ProductHero: FunctionComponent<Omit<ProductHero, 'className' | 'children' | 'illustration'>> = ({
    variant,
    product,
    title,
    description,
    displayUnderNav = false,
}) => {
    const illustrationName: string = product.split(' ')[1]
    const illustration: Background['illustration'] = illustrationName as Background['illustration']

    const defaultNavHeight = 74
    const [navHeight, setNavHeight] = useState(defaultNavHeight)

    useEffect(() => {
        const nav = document.querySelector('.navbar')
        setNavHeight(nav?.getBoundingClientRect().height || defaultNavHeight)
    }, [])

    const style = {}
    if (displayUnderNav) {
        Object.assign(style, {
            marginTop: `-${navHeight}px`,
            paddingTop: `${navHeight}px`,
        })
    }

    return (
        <Background
            variant={variant}
            illustration={illustration}
            className="d-flex align-items-center min-h-600"
            style={style}
        >
            <div className="container">
                <div className="max-w-600 w-100">
                    <div className="d-flex flex-column-reverse">
                        <h1 className="display-2 font-weight-bold mb-4 whitespace-pre-line">{title}</h1>
                        <div className="text-uppercase mb-2 font-weight-bold">{product}</div>
                    </div>
                    <h5 className="mb-5 font-weight-normal">{description}</h5>
                    <div className="d-flex flex-column pt-1 max-w-400">
                        <HubSpotForm masterFormName="contactEmail" />
                    </div>
                </div>
            </div>
        </Background>
    )
}

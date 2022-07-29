import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'

import { Background, HubSpotForm } from '@components'

interface ProductHero extends Background {
    product?: 'code search' | 'batch changes' | 'code insights'
    title: string | ReactNode
    backButton?: ReactNode
    description?: string
    displayUnderNav?: boolean
}

export const ProductHero: FunctionComponent<Omit<ProductHero, 'className' | 'children' | 'illustration'>> = ({
    variant,
    product,
    title,
    backButton,
    description,
    displayUnderNav = false,
}) => {
    let illustration: Background['illustration']
    if (product) {
        const illustrationName: string = product.split(' ')[1]
        illustration = illustrationName as Background['illustration']
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rootReference = useRef<any>(null)

    useEffect(() => {
        const defaultNavHeight = 74
        const nav = document.querySelector('.navbar')
        const navHeight = nav?.getBoundingClientRect().height || defaultNavHeight
        
        if (displayUnderNav) {            
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const rootElement = rootReference?.current
            
            // TODO: Improve this with Tailwind
            if (rootElement) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                rootElement.style.marginTop = `-${navHeight}px`
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                rootElement.firstChild.style.paddingTop = `${navHeight}px`
            }
        }
    }, [rootReference, displayUnderNav])

    return (
        <div ref={rootReference}>
            <Background
                variant={variant}
                illustration={illustration}
                className="d-flex align-items-center min-h-600"
            >
                <div className="container">
                    <div className="max-w-700 w-100">
                        {backButton}
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
        </div>
    )
}

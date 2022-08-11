import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'

import classNames from 'classnames'

import { Background, TwoColumnSection } from '@components'

interface Hero extends Background {
    product?: 'code search' | 'batch changes' | 'code insights'
    title: string | ReactNode
    backButton?: ReactNode
    leftCol?: ReactNode
    subtitle?: string
    description?: string
    cta?: ReactNode
    displayUnderNav?: boolean
}

export const Hero: FunctionComponent<Omit<Hero, 'className' | 'children' | 'illustration'>> = ({
    variant,
    product,
    title,
    backButton,
    leftCol,
    subtitle,
    description,
    cta,
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

    const mainContent = (
        <div className={classNames(product && 'max-w-700 w-100')}>
            {backButton}

            <div className="d-flex flex-column-reverse">
                <h1 className="display-2 font-weight-bold mb-4 whitespace-pre-line">{title}</h1>
                {product && <div className="text-uppercase mb-2 font-weight-bold">{product}</div>}
            </div>

            {subtitle && <h3 className="font-weight-normal max-w-800">{subtitle}</h3>}

            {description && <h5 className="mb-5 max-w-600 font-weight-normal">{description}</h5>}

            {cta && <div className="d-flex flex-column pt-1 max-w-400">{cta}</div>}
        </div>
    )

    return (
        <div ref={rootReference}>
            <Background
                variant={variant}
                illustration={illustration}
                className={classNames(
                    'd-flex align-items-center',
                    product && 'min-h-600',
                    variant.includes('dark') && 'text-white'
                )}
            >
                <div className={classNames('container', !product && 'py-7')}>
                    {leftCol ? (
                        <TwoColumnSection
                            centerContent={true}
                            leftColumnSize="col-lg-4"
                            rightColumnSize="col-lg-8"
                            leftColumn={leftCol}
                            rightColumn={mainContent}
                        />
                    ) : (
                        mainContent
                    )}
                </div>
            </Background>
        </div>
    )
}

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
        <div className={classNames(product && 'tw-max-w-[700px] tw-w-full')}>
            {backButton}

            <div className="tw-flex tw-flex-col-reverse">
                <h1 className="mb-4 tw-whitespace-pre-line">{title}</h1>
                {product && <h6 className="mb-2">{product}</h6>}
            </div>

            {subtitle && <h3 className="max-w-800">{subtitle}</h3>}

            {cta && <div className="tw-mt-md tw-flex tw-flex-col max-w-400">{cta}</div>}
        </div>
    )

    return (
        <div ref={rootReference}>
            <Background
                variant={variant}
                illustration={illustration}
                className={classNames(
                    'tw-flex tw-items-center',
                    product && 'tw-min-h-[650px]',
                    variant.includes('dark') && 'tw-text-white'
                )}
            >
                <div className={classNames('container', !product && 'tw-py-5xl')}>
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

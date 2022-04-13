import { useCarousel } from '../../hooks/carousel'
import React, { FunctionComponent, ReactFragment, ReactNode } from 'react'
import { BlockquoteWithLogoBottom } from '../Blockquote'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import styles from './QuoteCarousel.module.scss'

interface Blockquote {
    quote: string
    header?: string
    by?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
    linkText?: string
    link?: string
}

interface QuoteCarouselProps {
    items: ReactNode[]
    currentItem?: ReactNode
    previousItem?: ReactNode
    currentItemIndex?: number
    autoAdvance?: boolean
}

export const QuoteCarousel: FunctionComponent<QuoteCarouselProps> = ({ items, autoAdvance }) => {
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as Blockquote[]

    return (
        <div className="d-flex flex-lg-row align-items-lg-center flex-column justify-content-center text-center h-xl-450 h-lg-450 h-md-450 h-sm-550 position-relative">
            <div className="d-lg-flex d-none align-items-center btn">
                <ArrowLeftIcon
                    className="mr-4"
                    color="#808080"
                    onClick={() => carouselHook.moveCarousel('decrement')}
                />
            </div>
            <div className="px-lg-7">
                {carouselItems.map(item => (
                    <div
                        key={item.quote}
                        className={item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none'}
                    >
                        <BlockquoteWithLogoBottom
                            quote={item.quote}
                            header={item.header}
                            by={item.by}
                            logoHref={item.logoHref}
                            logoImage={item.logoImage}
                            logoAlt={item.logoAlt}
                            linkText={item.linkText}
                            link={item.link}
                        />
                    </div>
                ))}
            </div>
            <div className="d-lg-flex d-none align-items-center btn">
                <ArrowRightIcon className="ml-4" color="#808080" onClick={() => carouselHook.moveCarousel()} />
            </div>
            <div
                className={`d-lg-none d-flex justify-content-center mt-4 w-100 position-absolute ${styles.positionNav}`}
            >
                <div>
                    <ArrowLeftIcon
                        className="mr-4"
                        color="#808080"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                    />
                </div>
                <div>
                    <ArrowRightIcon className="ml-4" color="#808080" onClick={() => carouselHook.moveCarousel()} />
                </div>
            </div>
        </div>
    )
}

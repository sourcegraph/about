import { useCarousel } from '../hooks/carousel'
import React, { FunctionComponent, ReactFragment, ReactNode } from 'react'
import { BlockquoteWithLogo } from './Blockquote'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

interface Blockquote {
    quote: string
    header?: string
    by?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    linkText?: string
    link?: string
}

interface QuoteCarouselProps {
    items: ReactNode[]
    currentItem?: ReactNode
    previousItem?: ReactNode
    currentItemIndex?: number
    autoAdvance?: boolean
    className?: string
}

export const QuoteCarousel: FunctionComponent<QuoteCarouselProps> = ({ items, autoAdvance, className }) => {
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as Blockquote[]

    return (
        <div className={`d-flex justify-content-center text-center ${className}`}>
            <div className="d-flex align-items-center">
                <ArrowLeftIcon
                    className="mr-4"
                    onClick={() => carouselHook.moveCarousel('decrement')}
                />
            </div>
            <div className="px-7">
                {carouselItems.map(item => (
                    <div
                        key={item.quote}
                        className={item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none'}
                    >
                        <BlockquoteWithLogo 
                            quote={item.quote}
                            header={item.header}
                            by={item.by} 
                            logoHref={item.logoHref}
                            logoImage={item.logoImage}
                            linkText={item.linkText}
                            link={item.link} 
                        />
                    </div>
                ))}
            </div>
            <div className="d-flex align-items-center">
                <ArrowRightIcon
                    className="ml-4"
                    onClick={() => carouselHook.moveCarousel()}
                />
            </div>
        </div>
    )
}

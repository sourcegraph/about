import React, { FunctionComponent, ReactFragment } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Carousel from 'react-bootstrap/Carousel'

import { BlockquoteWithLogoBottom } from '@components'
import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'
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
    items: Blockquote[]
}

export const QuoteCarousel: FunctionComponent<QuoteCarouselProps> = ({ items }) => {
    const windowWidth = useWindowWidth()
    const isLgOrDown = windowWidth < breakpoints.xl

    return (
        <Carousel
            prevIcon={<ArrowLeftIcon color="#808080" />}
            prevLabel=""
            nextIcon={<ArrowRightIcon color="#808080" />}
            nextLabel=""
            indicators={isLgOrDown}
        >
            {items.map(item => (
                <Carousel.Item key={item.quote}>
                    <div className="d-flex flex-column align-items-center justify-content-center text-center mx-auto col-lg-8 col-12 py-7 min-h-md-550">
                        <BlockquoteWithLogoBottom
                            key={item.quote}
                            quote={item.quote}
                            header={item.header}
                            author={item.by}
                            logo={{
                                src: item.logoImage || '',
                                alt: item.logoAlt || '',
                                href: item.logoHref,
                            }}
                            link={{
                                href: item.link || '',
                                text: item.linkText || '',
                            }}
                        />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
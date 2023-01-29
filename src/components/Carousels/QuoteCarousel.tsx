import React, { FunctionComponent, ReactFragment } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Carousel from 'react-bootstrap/Carousel'

import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { Blockquote } from '../Blockquote'

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
    const isMdOrDown = windowWidth < breakpoints.lg

    return (
        <Carousel
            prevIcon={<ArrowLeftIcon color="#808080" />}
            prevLabel=""
            nextIcon={<ArrowRightIcon color="#808080" />}
            nextLabel=""
            indicators={isMdOrDown}
        >
            {items.map(item => (
                <Carousel.Item key={item.quote}>
                    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mx-auto col-lg-8 col-12 min-h-md-550">
                        <Blockquote
                            key={item.quote}
                            quote={item.quote}
                            headline={item.header}
                            author={item.by}
                            border={false}
                            largeText={!item.header}
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

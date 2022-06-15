import React, { FunctionComponent, ReactFragment } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { BlockquoteWithLogoBottom } from '@components'

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

export const QuoteCarousel: FunctionComponent<QuoteCarouselProps> = ({ items }) => (
    <Carousel controls={true} interval={null}>
        {items.map(item => (
            <Carousel.Item key={item.quote}>
                <div className="d-flex flex-column align-items-center text-center mx-auto col-lg-9 col-12">
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

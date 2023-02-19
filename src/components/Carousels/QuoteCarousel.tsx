import React, { FunctionComponent, ReactFragment } from 'react'

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

// TODO(sqs): This is no longer actually a carousel (it shows them all), but I didn't go and rename
// it yet.
export const QuoteCarousel: FunctionComponent<QuoteCarouselProps> = ({ items }) => (
    <>
        {items.map(item => (
            <div key={item.quote} className="mx-auto my-20 max-w-2xl">
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
        ))}
    </>
)

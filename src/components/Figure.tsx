import { FunctionComponent, ReactNode } from 'react'

import { LinkWrapper } from './LinkWrapper'

interface LinkProps {
    href: string
    alt: string
}

interface FigureProps {
    src: string
    alt: string
    caption?: string | ReactNode
    className?: string
    link?: LinkProps
}

export const Figure: FunctionComponent<FigureProps> = ({ src, alt, caption, className, link }) => (
        <>
        { link ? (
        <LinkWrapper link={link}>
            <figure>
                <img src={src} alt={alt} className={className} />
                {caption && <figcaption>{caption}</figcaption>}
            </figure>
        </LinkWrapper>
        ) : (
            <figure>
                <img src={src} alt={alt} className={className} />
                {caption && <figcaption>{caption}</figcaption>}
            </figure>
        )
        }
        </>
    )

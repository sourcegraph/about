import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface FigureProps {
    src: string
    alt: string
    caption?: string | ReactNode
    link?: string
    className?: string
}

export const Figure: FunctionComponent<FigureProps> = ({ src, alt, caption, link, className }) => (
    <figure>
        <img src={src} alt={alt} className={classNames(className, 'mb-0')} />
        {caption && (
            <figcaption>
                {link ?
                    <a href={link}>{caption}</a> :
                    caption
                }
            </figcaption>
        )}
    </figure>
)

import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
interface Figure {
    src: string
    alt: string
    caption?: string | ReactNode
    captionCenter?: boolean
    link?: string
    linkIcon?: boolean
    centre?: boolean
    shadow?: boolean
}

export const Figure: FunctionComponent<Figure> = ({
    src,
    alt,
    caption,
    captionCenter,
    link,
    linkIcon = false,
    centre = false,
    shadow = false,
}) => (
    <figure>
        <img src={src} alt={alt} title={alt} className={classNames({ 'mx-auto': centre, 'drop-shadow-xl': shadow })} />
        {caption && (
            <figcaption className={"mt-3 " + (captionCenter ? 'text-center' : '')}>
                {link ? (
                    <a href={link} className="flex not-italic">
                        {caption}
                        {linkIcon && <OpenInNewIcon className="my-auto ml-xxs" size={18} />}
                    </a>
                ) : (
                    caption
                )}
            </figcaption>
        )}
    </figure>
)

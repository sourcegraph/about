import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
interface Figure {
    src: string
    alt: string
    caption?: string | ReactNode
    link?: string
    linkIcon?: boolean
    centre?: boolean
    shadow?: boolean
}

export const Figure: FunctionComponent<Figure> = ({
    src,
    alt,
    caption,
    link,
    linkIcon = false,
    centre = false,
    shadow = true,
}) => (
    <figure>
        <img
            src={src}
            alt={alt}
            title={alt}
            className={classNames({ 'mx-auto': centre, 'drop-shadow-xl': shadow })}
        />
        {caption && (
            <figcaption className="mt-3">
                {link ? (
                    <a href={link} className="not-italic flex">
                        {caption}
                        {linkIcon && <OpenInNewIcon className="ml-xxs my-auto" size={18} />}
                    </a>
                ) : (
                    caption
                )}
            </figcaption>
        )}
    </figure>
)

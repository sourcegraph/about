import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface Figure {
    src: string
    alt: string
    caption?: string | ReactNode
    link?: string
    centre?: boolean
    shadow?: boolean
}

export const Figure: FunctionComponent<Figure> = ({ src, alt, caption, link, centre = false, shadow = true }) => (
    <figure>
        <img
            src={src}
            alt={alt}
            title={alt}
            className={classNames({ 'tw-mx-auto': centre, 'tw-drop-shadow-xl': shadow })}
        />
        {caption && <figcaption className="tw-mt-3">{link ? <a href={link}>{caption}</a> : caption}</figcaption>}
    </figure>
)

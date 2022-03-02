import React, { FunctionComponent } from 'react'

interface Props {
    src: string
    alt: string
    className?: string
    caption?: string
}

export const InContentImage: FunctionComponent<Props> = ({ src, caption, alt, className }) => (
    <figure>
        <img src={src} className={className} alt={alt} />
        {caption && <figcaption className="blockquote-footer">{caption}</figcaption>}
    </figure>
)

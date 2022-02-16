import React from 'react'

interface Props {
    src: string
    alt: string
    className?: string
    caption?: string
}

export const InContentImage: React.FunctionComponent<Props> = ({ src, caption, alt, className }) => (
    <p>
        <img src={src} className={className} alt={alt} />
        {caption && <footer className="blockquote-footer">{caption}</footer>}
    </p>
)

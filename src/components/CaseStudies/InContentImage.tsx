import { FunctionComponent } from 'react'

interface InContentImageProps {
    src: string
    alt: string
    className?: string
    caption?: string
}

export const InContentImage: FunctionComponent<InContentImageProps> = ({ src, caption, alt, className }) => (
    <figure>
        <img src={src} className={className} alt={alt} />
        {caption && <figcaption className="blockquote-footer">{caption}</figcaption>}
    </figure>
)

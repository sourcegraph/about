import { FunctionComponent, ReactNode } from 'react'

interface FigureProps {
    src: string
    alt: string
    caption?: string | ReactNode
    className?: string
}

export const Figure: FunctionComponent<FigureProps> = ({ src, alt, caption, className }) => (
    <figure>
        <img src={src} alt={alt} className={className} />
        {caption && <figcaption>{caption}</figcaption>}
    </figure>
)

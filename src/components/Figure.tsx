import { FunctionComponent, ReactNode } from 'react'

interface FigureProps {
    src: string
    alt: string
    caption?: string | ReactNode
}

export const Figure: FunctionComponent<FigureProps> = ({ src, alt, caption }) => (
    <figure>
    <img src={src} alt={alt} />
    {caption && <figcaption>{caption}</figcaption>}
    </figure>
)

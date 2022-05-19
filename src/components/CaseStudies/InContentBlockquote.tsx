import { FunctionComponent } from 'react'

interface Props {
    quote: string
    author?: string
}

export const InContentBlockquote: FunctionComponent<Props> = ({ quote, author }) => (
    <blockquote className="blockquote pl-5">
        <p className="font-weight-bold border-left border-3 border-vermillion px-4">&ldquo;{quote}&rdquo;</p>
        {author && <figcaption className="text-muted">&mdash; {author}</figcaption>}
    </blockquote>
)

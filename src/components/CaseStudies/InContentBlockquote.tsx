import React, { FunctionComponent } from 'react'

interface Props {
    quote: string
    author?: string
}

export const InContentBlockquote: FunctionComponent<Props> = ({ quote, author }) => (
    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
        <p>{quote}</p>
        {author && <footer className="blockquote-footer">{author}</footer>}
    </blockquote>
)

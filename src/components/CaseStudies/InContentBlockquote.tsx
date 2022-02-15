import React from 'react'

interface Props {
    quote: string;
    author?: string;
}

export const InContentBlockquote: React.FunctionComponent<Props> = ({
    quote,
    author
}) => (
    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
        <p dangerouslySetInnerHTML={{ __html: quote }} />
        {author && <footer className="blockquote-footer">{author}</footer>}
    </blockquote>
);

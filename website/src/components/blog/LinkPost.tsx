import { Link } from 'gatsby'
import * as React from 'react'
import { PostComponentProps } from './postTypes'
import remark from 'remark'
import remarkHTML from 'remark-html'

interface Props extends PostComponentProps {
    post: PostComponentProps['post']
}

/**
 * A blog post that consists of short text (with no headline, only an emphasized first sentence).
 * This post always displays its full text and never hides it behind a "Read more" link.
 */
export const LinkPost: React.FunctionComponent<Props> = ({
    post,
    url,
    className = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
}) => {
    // Interpret title as Markdown, but without surrounding <p>...</p>.
    const titleHTML = remark()
        .use(remarkHTML)
        .processSync(post.frontmatter.title)
        .toString()
        .replace(/^<p>/, '')
        .replace(/<\/p>$/, '')

    return (
        <Tag className={`link-post ${className}`}>
            <div className="card-body">
                <h2
                    className="font-size-base font-family-base link-post__html d-inline"
                    dangerouslySetInnerHTML={{
                        __html: titleHTML,
                    }}
                />
                <div className="link-post__html d-inline" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <div className="card-footer bg-unset border-top-0 pt-0">
                <Link to={url} className={`text-muted ${titleLinkClassName}`}>
                    {post.frontmatter.publishDate}
                </Link>
            </div>
        </Tag>
    )
}

import { Link } from 'gatsby'
import * as React from 'react'
import { PostComponentProps } from './postTypes'
import { getHTMLParts } from '../../pages/podcast'

interface Props extends PostComponentProps {}

/**
 * A podcast episode post.
 */
export const PodcastPost: React.FunctionComponent<Props> = ({
    post,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
}) => {
    const { guestsHTML, audioHTML, summaryHTML } = getHTMLParts(post.html)
    return (
        <Tag className={`podcast-post ${className}`}>
            <header className={`podcast-post__header ${headerClassName}`}>
                <h2 className={titleClassName}>
                    <Link to={url} className={`d-block ${titleLinkClassName}`}>
                        {post.frontmatter.title}
                    </Link>
                </h2>
                <p className="text-muted mb-0">{post.frontmatter.publishDate}</p>
                {guestsHTML && <p className="text-muted mb-0" dangerouslySetInnerHTML={{ __html: guestsHTML }}></p>}
            </header>
            {summaryHTML && (
                <div className="card-body podcast-post__body pt-0" dangerouslySetInnerHTML={{ __html: summaryHTML }} />
            )}
            <div className="card-body border-top d-flex flex-wrap align-items-center">
                {audioHTML && (
                    <div className="podcast-post__body mr-3" dangerouslySetInnerHTML={{ __html: audioHTML }} />
                )}
                <div className="flex-1" />
                <div>
                    <Link className="text-muted mr-4" to={`/podcast/${post.frontmatter.slug}/notes`}>
                        Notes
                    </Link>
                    <Link className="text-muted mr-4" to={`/podcast/${post.frontmatter.slug}/transcript`}>
                        Transcript
                    </Link>
                    <Link className="text-muted" to="/podcast">
                        Subscribe to podcast
                    </Link>
                </div>
            </div>
        </Tag>
    )
}

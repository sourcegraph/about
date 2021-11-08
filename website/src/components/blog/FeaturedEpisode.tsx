import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'
import { PostComponentProps } from './postTypes'

interface Props extends PostComponentProps {}

/**
 * A featured episode with embedded video.
 */
export const FeaturedEpisode: React.FunctionComponent<Props> = ({
    post,
    url,
    full,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = true,
}) => {
    console.log(post.frontmatter.youtube)
    return (
        <Tag className={`blog-post ${className}`}>
            <div className="card-body pt-0 d-flex">
                <div className="container my-4 video-embed embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube-nocookie.com/embed/${post.frontmatter.youtube}?autoplay=0&amp;cc_load_policy=0&amp;start=93&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0`}
                        allowFullScreen
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
            <header className={headerClassName}>
                <h1 className={titleClassName}>
                    <Link to={url} className={`d-block ${titleLinkClassName}`}>
                        {post.frontmatter.title}
                    </Link>
                </h1>
                <p className="blog-post__byline mb-0">
                    {post.frontmatter.author} on {post.frontmatter.publishDate}
                </p>
                <div className="flex-1">
                    {' '}
                    <p className="blog-post__excerpt">
                        {post.frontmatter.description
                            ? truncate(post.frontmatter.description, { length: 300 })
                            : truncate(post.excerpt, { length: 300 })}{' '}
                        <Link to={url} className="blog-post__read-more">
                            Read more
                        </Link>
                    </p>
                </div>
            </header>
        </Tag>
    )
}

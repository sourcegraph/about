import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'
import { PostComponentProps } from './postTypes'

interface Props extends PostComponentProps {}

/**
 * A blog post.
 */
export const BlogPost: React.FunctionComponent<Props> = ({
    post,
    url,
    full,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false,
}) => {
    const body = full ? (
        <div className="blog-post__html" dangerouslySetInnerHTML={{ __html: post.html }} />
    ) : (
        <>
            <p className="blog-post__excerpt">
                {post.frontmatter.description
                    ? truncate(post.frontmatter.description, { length: 300 })
                    : truncate(post.excerpt, { length: 300 })}{' '}
            </p>
            <Link to={url} className="blog-post__read-more">
                Read more
            </Link>
        </>
    )

    return (
        <Tag className={`blog-post ${className}`}>
            <header className={headerClassName}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link to={url} className={`d-block ${titleLinkClassName}`}>
                            {post.frontmatter.title}
                        </Link>
                    ) : (
                        post.frontmatter.title
                    )}
                </h1>
                {post.frontmatter.author && post.frontmatter.publishDate && (
                    <p className="blog-post__byline mb-0">
                        {post.frontmatter.authorUrl ? (
                            post.frontmatter.authorUrl.includes('http') ?
                                <a href={post.frontmatter.authorUrl} target="_blank" rel="nofollow noreferrer">
                                    {post.frontmatter.author}
                                </a> :
                                <Link to={post.frontmatter.authorUrl}>
                                    {post.frontmatter.author}
                                </Link>
                        ) : (
                            <span>{post.frontmatter.author}</span>
                        )}{' '}
                        on <time dateTime={post.frontmatter.publishDate}>{post.frontmatter.publishDate}</time>
                    </p>
                )}
            </header>
            {!full && post.frontmatter.heroImage ? (
                <div className="card-body pt-0 d-flex flex-card">
                    <div className="flex-1">{body}</div>
                    <Link to={url}>
                        <img
                            className="blog-post__image flex-1"
                            src={post.frontmatter.heroImage}
                            alt={post.frontmatter.title}
                        />
                    </Link>
                </div>
            ) : (
                <div className="card-body">{body}</div>
            )}
        </Tag>
    )
}

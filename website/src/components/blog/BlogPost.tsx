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
            <Link to={url} className="font-weight-bold">
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
                {post.frontmatter.authors?.length && (
                    <p className="text-align-center text-secondary mb-0">
                        {post.frontmatter.authors.map((a, index) => {
                            return (
                                <span key={a.name}>
                                    {a.url ? (
                                        a.url.includes('http') ? (
                                            <a href={a.url} target="_blank" rel="nofollow noreferrer">
                                                {a.name}
                                            </a>
                                        ) : (
                                            <Link to={a.url}>{a.name}</Link>
                                        )
                                    ) : (
                                        a.name
                                    )}
                                    {index == post.frontmatter.authors!.length - 1 ? ' ' : ', '}
                                </span>
                            )
                        })}

                        {post.frontmatter.publishDate && (
                            <span>
                                on <time dateTime={post.frontmatter.publishDate}>{post.frontmatter.publishDate}</time>
                            </span>
                        )}
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

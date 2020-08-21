import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'
import { PostComponentProps } from './postTypes'

interface Props extends PostComponentProps {}

export const BlogPost: React.FunctionComponent<Props> = ({
    post,
    url,
    full,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
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
                <h2 className={titleClassName}>
                    <Link to={url} className={`d-block ${titleLinkClassName}`}>
                        {post.frontmatter.title}
                    </Link>
                </h2>
                <p className="blog-post__byline mb-0">
                    {post.frontmatter.author} on {post.frontmatter.publishDate}
                </p>
            </header>
            {!full && post.frontmatter.heroImage ? (
                <div className="card-body pt-0 d-flex">
                    <div className="flex-1">{body}</div>
                    <Link to={url} className="pl-3">
                        <img
                            className="blog-post__image"
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

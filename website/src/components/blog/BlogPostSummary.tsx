import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'
import { BlogPostSummaryProps } from './BlogPosts'

interface Props extends BlogPostSummaryProps {
    post: any
}

/**
 * A summary for this blog post, shown in a list of posts.
 */
export const BlogPostSummary: React.FunctionComponent<Props> = ({
    post,
    blogType,
    className = '',
    headerClassName = '',
    titleClassName = '',
    tag: Tag = 'li',
}) => {
    const excerpt = (
        <>
            <p className="blog-post-summary__excerpt">
                {post.node.frontmatter.description
                    ? truncate(post.node.frontmatter.description, { length: 300 })
                    : truncate(post.node.excerpt, { length: 300 })}{' '}
            </p>
            <Link to={`/${blogType}/${post.node.frontmatter.slug}`} className="blog-post-summary__read-more">
                Read more
            </Link>
        </>
    )

    return (
        <Tag className={`blog-post-summary ${className}`}>
            <header className={headerClassName}>
                <h2 className={titleClassName}>
                    <Link to={`/${blogType}/${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</Link>
                </h2>
                <p className="blog-post-summary__byline mb-0">
                    {post.node.frontmatter.author} on {post.node.frontmatter.publishDate}
                </p>
            </header>
            {post.node.frontmatter.heroImage ? (
                <div className="card-body row">
                    <div className="col-sm-12 col-md-9">{excerpt}</div>
                    <div className="col-sm-12 col-md-3 text-center">
                        <Link
                            to={`/${blogType}/${post.node.frontmatter.slug}`}
                            className="d-block pt-2 align-self-center"
                        >
                            <img
                                className="blog-post-summary__image"
                                src={post.node.frontmatter.heroImage}
                                alt={post.node.frontmatter.title}
                            />
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="card-body">{excerpt}</div>
            )}
        </Tag>
    )
}

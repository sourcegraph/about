import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'

interface Props {
    post: any
    blogType: string
    className?: string
    tag?: 'li'
}

/**
 * A summary for this blog post, shown in a list of posts.
 */
export const BlogPostSummary: React.FunctionComponent<Props> = ({
    post,
    blogType,
    className = '',
    tag: Tag = 'li',
}) => (
    <Tag className={`row ${className}`}>
        <div className="col-sm-12 col-md-3 text-center pt-3 pb-4">
            <Link to={`/${blogType}/${post.node.frontmatter.slug}`} className="d-block pt-2 align-self-center">
                <img
                    className="blog-posts__post__image"
                    src={post.node.frontmatter.heroImage}
                    alt={post.node.frontmatter.title}
                />
            </Link>
        </div>
        <div className="col-sm-12 col-md-9 pt-3 pb-2">
            <h2 className="blog-posts__post__title">
                <Link to={`/${blogType}/${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</Link>
            </h2>
            <p className="blog-posts__post__byline">
                By {post.node.frontmatter.author} on {post.node.frontmatter.publishDate}
            </p>
            <p className="blog-posts__post__excerpt">
                {post.node.frontmatter.description
                    ? truncate(post.node.frontmatter.description, { length: 300 })
                    : truncate(post.node.excerpt, { length: 300 })}{' '}
                <Link to={`/${blogType}/${post.node.frontmatter.slug}`} className="blog-posts__post__read-more">
                    Read more
                </Link>
            </p>
        </div>
    </Tag>
)

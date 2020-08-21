import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'
import { PostComponentProps } from './postTypes'
import { BLOGS } from '../../pages/blog'

interface Props extends PostComponentProps {}

export const BlogPost: React.FunctionComponent<Props> = ({
    post,
    full,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
}) => {
    let slug = post.frontmatter.slug
    switch (slug) {
        case BLOGS.GopherCon:
            slug = `/${BLOGS.GopherCon}/${slug}`
            break
        case BLOGS.GraphQLSummit:
            slug = `/${BLOGS.GraphQLSummit}/${slug}`
            break
        case BLOGS.StrangeLoop:
            slug = `/${BLOGS.StrangeLoop}/${slug}`
            break
        default:
            slug = `/${BLOGS.Blog}/${slug}`
            break
    }

    const body = full ? (
        <div className="blog-post__html" dangerouslySetInnerHTML={{ __html: post.html }} />
    ) : (
        <>
            <p className="blog-post__excerpt">
                {post.frontmatter.description
                    ? truncate(post.frontmatter.description, { length: 300 })
                    : truncate(post.excerpt, { length: 300 })}{' '}
            </p>
            {/* TODO(sqs): blogType, dont hardcode /blog/ */}
            <Link to={`/blog/${post.frontmatter.slug}`} className="blog-post__read-more">
                Read more
            </Link>
        </>
    )

    return (
        <Tag className={`blog-post ${className}`}>
            <header className={headerClassName}>
                <h2 className={titleClassName}>
                    {/* TODO(sqs): blogType, dont hardcode /blog/ */}
                    <Link to={`/blog/${post.frontmatter.slug}`} className={`d-block ${titleLinkClassName}`}>
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
                    {/* TODO(sqs): blogType, dont hardcode /blog/ */}
                    <Link to={`/blog/${post.frontmatter.slug}`} className="pl-3">
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

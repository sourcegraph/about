import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'
import { PostComponentProps } from './postTypes'
import { BLOGS } from '../../pages/blog'
import SocialLinks from '../SocialLinks'

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
        case BLOGS.PressReleases:
            slug = `/${BLOGS.PressReleases}/${slug}`
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

    const fileName = post.fileAbsolutePath.split('blogposts/').pop()

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
                <div className="card-body row">
                    <div className="col-sm-12 col-md-9">{body}</div>
                    <div className="col-sm-12 col-md-3 text-center">
                        {/* TODO(sqs): blogType, dont hardcode /blog/ */}
                        <Link to={`/blog/${post.frontmatter.slug}`} className="d-block pt-2 align-self-center">
                            <img
                                className="blog-post__image"
                                src={post.frontmatter.heroImage}
                                alt={post.frontmatter.title}
                            />
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="card-body">{body}</div>
            )}
            <div className="card-footer">
                {/* TODO(sqs): full vs summary */}
                <a
                    href={`https://github.com/sourcegraph/about/edit/master/blogposts/${fileName}`}
                    className="btn btn-link text-muted ml-3"
                >
                    Edit this post
                </a>
            </div>
        </Tag>
    )
}

import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

/**
 * A blog post.
 */
export const BlogPost: FunctionComponent<PostComponentProps> = ({
    post,
    content,
    url,
    full,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false,
}) => {
    const body =
        full && content ? (
            <div className="blog-post__html">
                <MDXRemote {...content} />
            </div>
        ) : (
            <>
                {post.frontmatter.description && (
                    <p className="blog-post__excerpt">{truncate(post.frontmatter.description, { length: 300 })}</p>
                )}
                <Link href={url} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="blog-post__read-more">Read more</a>
                </Link>
            </>
        )

    return (
        <Tag className={`blog-post ${className}`}>
            <header className={headerClassName}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link href={url} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={`d-block ${titleLinkClassName}`}>{post.frontmatter.title}</a>
                        </Link>
                    ) : (
                        post.frontmatter.title
                    )}
                </h1>
                {post.frontmatter.author && post.frontmatter.publishDate && (
                    <p className="blog-post__byline mb-0">
                        {post.frontmatter.author} on {formatDate(post.frontmatter.publishDate)}
                    </p>
                )}
            </header>
            {!full && post.frontmatter.heroImage ? (
                <div className="card-body pt-0 d-flex flex-card">
                    <div className="flex-1">{body}</div>
                    <Link href={url} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>
                            <img
                                className="blog-post__image flex-1"
                                src={post.frontmatter.heroImage}
                                alt={post.frontmatter.title}
                            />
                        </a>
                    </Link>
                </div>
            ) : (
                <div className="card-body">{body}</div>
            )}
        </Tag>
    )
}

import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'

interface Props extends PostComponentProps {}

export const PressReleasePost: FunctionComponent<Props> = ({
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
                <p className="blog-post__excerpt">
                    {post.frontmatter.description
                        ? truncate(post.frontmatter.description, { length: 300 })
                        : truncate(post.excerpt, { length: 300 })}{' '}
                </p>
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
                <p className="blog-post__byline mb-0">{post.frontmatter.publishDate}</p>
            </header>
            {!full && post.frontmatter.heroImage ? (
                <div className="card-body pt-0 d-flex">
                    <div className="flex-1">{body}</div>
                    <Link href={url} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="pl-3">
                            <img
                                className="blog-post__image"
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

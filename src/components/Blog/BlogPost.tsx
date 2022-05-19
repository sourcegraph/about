import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { BlockquoteWithBorder } from '@components'
import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

export type Components = import('mdx/types').MDXComponents
const components = { BlockquoteWithBorder }

/**
 * A blog post.
 */
export const BlogPost: FunctionComponent<PostComponentProps> = ({
    post,
    content,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    renderTitleAsLink = false,
}) => (
    <article className={`blog-post ${className}`}>
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
        {content && (
            <div className="card-body">
                <div className="blog-post__html">
                    <MDXRemote {...content} components={components as Components} />
                </div>
            </div>
        )}
    </article>
)


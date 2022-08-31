import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { Alert, Blockquote, Figure, HubSpotForm, TableWrapper, Video, YouTube } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

type PostComponents = import('mdx/types').MDXComponents
const components = { Alert, Blockquote, HubSpotForm, Figure, TableWrapper, Video, YouTube }

/**
 * This component is used to render all types of posts:
 * blog, podcast, and release posts
 */
export const PostLayout: FunctionComponent<PostComponentProps> = ({
    post,
    content,
    url,
    className = '',
    headerClassName = '',
    tag: Tag = 'article',
    renderTitleAsLink = false,
    contentClassName = '',
}) => (
    <Tag className={`blog-post ${className}`}>
        <header className={headerClassName}>
            <h2>
                {renderTitleAsLink === true ? (
                    <Link href={url} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="tw-block"
                            title={post.frontmatter.title}
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            {post.frontmatter.title}
                        </a>
                    </Link>
                ) : (
                    post.frontmatter.title
                )}
            </h2>

            {post.frontmatter.authors?.length && (
                <p className="mb-0 text-align-center text-secondary">
                    {post.frontmatter.authors.map((a, index) => (
                        <span key={a.name} data-author={a.name}>
                            {a.url ? (
                                a.url.includes('http') ? (
                                    <a
                                        href={a.url}
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        title={a.name}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        {a.name}
                                    </a>
                                ) : (
                                    <Link href={a.url} passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            title={a.name}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
                                        >
                                            {a.name}
                                        </a>
                                    </Link>
                                )
                            ) : (
                                a.name
                            )}
                            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                            {index === post.frontmatter.authors!.length - 1 ? ' ' : ', '}
                        </span>
                    ))}
                </p>
            )}

            {post.frontmatter.publishDate && (
                <p className="mb-0 text-align-center text-secondary">
                    <time dateTime={post.frontmatter.publishDate}>{formatDate(post.frontmatter.publishDate)}</time>
                </p>
            )}
        </header>

        {content && (
            <div className="card-body">
                <div className={`blog-post__html ${contentClassName}`}>
                    <MDXRemote {...content} components={components as PostComponents} />
                </div>
            </div>
        )}
    </Tag>
)

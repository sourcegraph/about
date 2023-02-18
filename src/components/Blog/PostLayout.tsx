import { FunctionComponent } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { Alert, Badge, Blockquote, Figure, HubSpotForm, TableWrapper, Video, YouTube } from '..'
import { buttonStyle, buttonLocation } from '../../data/tracking'
import { PostComponentProps } from '../../interfaces/posts'
import { formatDate } from '../../util'

import styles from './PostLayout.module.css'

type PostComponents = import('mdx/types').MDXComponents
const components = { Alert, Badge, Blockquote, HubSpotForm, Figure, OpenInNewIcon, TableWrapper, Video, YouTube }

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
    <Tag className={`p-sm ${className}`}>
        <header className={headerClassName}>
            <h2>
                {renderTitleAsLink === true ? (
                    <Link
                        href={url}
                        className="block"
                        title={post.frontmatter.title}
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {post.frontmatter.title}
                    </Link>
                ) : (
                    post.frontmatter.title
                )}
            </h2>

            {post.frontmatter.authors?.length && (
                <p className="text-align-center text-secondary mb-0">
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
                                    <Link
                                        href={a.url}
                                        title={a.name}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        {a.name}
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
                <p className="text-align-center text-secondary mb-0">
                    <time dateTime={post.frontmatter.publishDate}>{formatDate(post.frontmatter.publishDate)}</time>
                </p>
            )}
        </header>

        {content && (
            <div className={classNames('min-h-[60vh]', styles.content, contentClassName)}>
                <MDXRemote {...content} components={components as PostComponents} />
            </div>
        )}
    </Tag>
)

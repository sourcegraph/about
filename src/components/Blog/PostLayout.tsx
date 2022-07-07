import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import {
    Alert,
    BlockquoteWithBorder,
    HubSpotForm,
    Figure,
    TableWrapper,
    Video,
    YouTube,
    TrySourcegraph,
} from '@components'
import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

type PostComponents = import('mdx/types').MDXComponents
const components = { Alert, BlockquoteWithBorder, HubSpotForm, Figure, TableWrapper, Video, YouTube }

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
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'article',
    renderTitleAsLink = false,
    contentClassName = '',
}) => (
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

            {post.frontmatter.authors?.length && (
                <p className="text-align-center text-secondary mb-0">
                    {post.frontmatter.authors.map((a, index) => (
                        <span key={a.name} data-author={a.name}>
                            {a.url ? (
                                a.url.includes('http') ? (
                                    <a href={a.url} target="_blank" rel="nofollow noreferrer">
                                        {a.name}
                                    </a>
                                ) : (
                                    <Link href={a.url}>{a.name}</Link>
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
            <div className="card-body max-w-650">
                <div className={`blog-post__html ${contentClassName}`}>
                    <MDXRemote {...content} components={components as PostComponents} />
                </div>
            </div>
        )}
        <TrySourcegraph />
    </Tag>
)

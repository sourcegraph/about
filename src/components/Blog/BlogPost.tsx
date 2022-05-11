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
            {post.frontmatter.author && post.frontmatter.publishDate && (
                <p className="text-align-center text-secondary mb-0">
                    {post.frontmatter.author} on{' '}
                    <time dateTime={post.frontmatter.publishDate}>{formatDate(post.frontmatter.publishDate)}</time>
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

import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

interface Props extends PostComponentProps {}

export const PressReleasePost: FunctionComponent<Props> = ({
    post,
    content,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false,
}) => (
    <Tag className={`blog-post overflow-hidden pb-2 ${className}`}>
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
            <time dateTime={post.frontmatter.publishDate} className="text-align-center text-secondary mb-0">
                {formatDate(String(post.frontmatter.publishDate))}
            </time>
        </header>
        {content && (
            <div className="card-body">
                <div className="blog-post__html">
                    <MDXRemote {...content} />
                </div>
            </div>
        )}
    </Tag>
)

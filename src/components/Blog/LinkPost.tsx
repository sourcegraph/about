import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'

interface Props extends PostComponentProps {
    post: PostComponentProps['post']
}

/**
 * A blog post that consists of short text (with no headline, only an emphasized first sentence).
 * This post always displays its full text and never hides it behind a "Read more" link.
 */
export const LinkPost: FunctionComponent<Props> = ({
    post,
    content,
    url,
    className = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
}) => {
    const titleClassName = 'font-size-base font-family-base link-post__html d-inline'
    const title = post.frontmatter.canonical ? (
        <h2 className={titleClassName}>
            <Link href={post.frontmatter.canonical}>{post.frontmatter.title}</Link>
        </h2>
    ) : (
        <h2 className={titleClassName}>{post.frontmatter.title}</h2>
    )

    return (
        <Tag className={`link-post ${className}`}>
            <div className="card-body">
                {title}
                {content && (
                    <div className="link-post__html d-inline">
                        <MDXRemote {...content} />
                    </div>
                )}
            </div>
            <div className="card-footer bg-unset border-top-0 pt-0">
                <Link href={url} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={`text-muted ${titleLinkClassName}`}>{post.frontmatter.publishDate}</a>
                </Link>
            </div>
        </Tag>
    )
}

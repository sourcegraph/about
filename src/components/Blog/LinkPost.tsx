import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '../../data/tracking'
import { PostComponentProps } from '../../interfaces/posts'

interface Props extends PostComponentProps {
    post: PostComponentProps['post']
}

/**
 * A blog post that consists of short text (with no headline, only an emphasized first sentence).
 * This post always displays its full text and never hides it behind a "Read more" link.
 */
export const LinkPost: FunctionComponent<Props> = ({ post, content, url, className = '', tag: Tag = 'div' }) => {
    const titleClassName = 'tw-text-base link-post__html tw-inline'
    const title = post.frontmatter.canonical ? (
        <h2 className={titleClassName}>
            <Link
                href={post.frontmatter.canonical}
                title={post.frontmatter.title}
                data-button-style={buttonStyle.text}
                data-button-location={buttonLocation.body}
                data-button-type="cta"
            >
                {post.frontmatter.title}
            </Link>
        </h2>
    ) : (
        <h2 className={titleClassName}>{post.frontmatter.title}</h2>
    )

    return (
        <Tag className={`link-post ${className}`}>
            <div className="card-body">
                {title}
                {content && (
                    <div className="link-post__html tw-inline">
                        <MDXRemote {...content} />
                    </div>
                )}
            </div>

            <div className="tw-pt-0 bg-transparent card-footer border-top-0">
                <Link
                    href={url}
                    className="tw-text-gray-500"
                    title={post.frontmatter.publishDate}
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    {post.frontmatter.publishDate}
                </Link>
            </div>
        </Tag>
    )
}

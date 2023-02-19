import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '../../data/tracking'
import { PostComponentProps } from '../../interfaces/posts'

import styles from './LinkPost.module.css'

interface Props extends PostComponentProps {
    post: PostComponentProps['post']
}

/**
 * A blog post that consists of short text (with no headline, only an emphasized first sentence).
 * This post always displays its full text and never hides it behind a "Read more" link.
 */
export const LinkPost: FunctionComponent<Props> = ({ post, content, url, className = '', tag: Tag = 'div' }) => {
    const titleClassName = 'text-base link-post__html inline'
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
        <Tag className={`overflow-hidden ${className}`}>
            <div>
                {title}
                {content && (
                    <div className={`${styles.html} inline`}>
                        <MDXRemote {...content} />
                    </div>
                )}
            </div>

            <div className="border-t-0 bg-transparent pt-0">
                <Link
                    href={url}
                    className="text-gray-500"
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

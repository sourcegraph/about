import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

/**
 * A podcast episode post.
 */
export const PodcastPost: React.FunctionComponent<PostComponentProps> = ({
    post,
    content,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    renderTitleAsLink = false,
}) => (
    <article className={`podcast-post ${className}`}>
        <header className={`podcast-post__header ${headerClassName}`}>
            <h1 className={titleClassName}>
                {renderTitleAsLink ? (
                    <Link href={url} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={`d-block ${titleLinkClassName}`}>{post.frontmatter.title}</a>
                    </Link>
                ) : (
                    post.frontmatter.title
                )}
            </h1>
            {post.frontmatter.publishDate && (
                <p className="text-muted mb-0">
                    <time dateTime={post.frontmatter.publishDate}>{formatDate(post.frontmatter.publishDate)}</time>
                </p>
            )}
            {post.frontmatter.author && (
                <p className="text-muted mb-0">{(post.frontmatter.author as string[]).join(', ')}</p>
            )}
        </header>
        {content && (
            <div className="podcast-post__body">
                <MDXRemote {...content} />
            </div>
        )}
    </article>
)

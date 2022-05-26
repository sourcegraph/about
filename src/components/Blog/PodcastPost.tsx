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
            {post.frontmatter.publishDate &&
                <p className="text-align-center text-secondary mb-0">
                    <time dateTime={post.frontmatter.publishDate}>{formatDate(post.frontmatter.publishDate)}</time>
                </p>
            }
            {post.frontmatter.authors?.length && (
                <p className="text-align-center text-secondary mb-0">
                    {post.frontmatter.authors.map((a, index) => (
                            <span key={a.name}>
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
                        )
                    )}
                </p>
            )}
        </header>
        {content && (
            <div className="podcast-post__body">
                <MDXRemote {...content} />
            </div>
        )}
    </article>
)

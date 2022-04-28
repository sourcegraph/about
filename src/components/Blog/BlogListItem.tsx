import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import Link from 'next/link'

import { PostIndexItem } from '@interfaces/posts'
import { formatDate } from '@util'

/**
 * A index blog post item.
 */
export const BlogListItem: FunctionComponent<PostIndexItem> = ({
    frontmatter,
    excerpt,
    slugPath,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    renderTitleAsLink = false,
}) => (
    <div className={`blog-post ${className}`}>
        <header className={headerClassName}>
            <h1 className={titleClassName}>
                {renderTitleAsLink === true && slugPath ? (
                    <Link href={`/blog/${slugPath}`} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={`d-block ${titleLinkClassName}`}>{frontmatter.title}</a>
                    </Link>
                ) : (
                    frontmatter.title
                )}
            </h1>
            {frontmatter.author && frontmatter.publishDate && (
                <p className="blog-post__byline mb-0">
                    {frontmatter.author} on {formatDate(frontmatter.publishDate)}
                </p>
            )}
        </header>
        {slugPath && (
            <div className="card-body pt-0 d-flex flex-card">
                <div className="flex-1 w-75">
                    {frontmatter.description ? (
                        <p className="blog-post__excerpt">{truncate(frontmatter.description, { length: 300 })}</p>
                    ) : (
                        <p className="blog-post__excerpt">{excerpt}</p>
                    )}
                    <Link href={`/blog/${slugPath}`} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="blog-post__read-more">Read more</a>
                    </Link>
                </div>
                {frontmatter.heroImage && (
                    <Link href={`/blog/${slugPath}`} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>
                            <img
                                className="blog-post__image flex-1 max-w-250"
                                src={frontmatter.heroImage}
                                alt={frontmatter.title}
                            />
                        </a>
                    </Link>
                )}
            </div>
        )}
    </div>
)

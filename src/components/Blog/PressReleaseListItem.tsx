import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import Link from 'next/link'

import { PostIndexItem } from '@interfaces/posts'
import { formatDate } from '@util'

/**
 * An index blog post item.
 */
export const PressReleaseListItem: FunctionComponent<PostIndexItem> = ({
    frontmatter,
    excerpt,
    slugPath,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
}) => (
    <div className={`blog-post ${className}`}>
        <header className={headerClassName}>
            <h1 className={titleClassName}>
                <Link href={`/press-release/${slugPath}`} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={`d-block ${titleLinkClassName}`}>{frontmatter.title}</a>
                </Link>
            </h1>
            {frontmatter.author && frontmatter.publishDate && (
                <p className="text-align-center text-secondary mb-0">
                    <time dateTime={frontmatter.publishDate}>{formatDate(frontmatter.publishDate)}</time>
                </p>
            )}
        </header>
        {slugPath && (
            <div className="card-body pt-0 d-flex flex-card">
                <div className="row w-100">
                    <div className="col-md-10 pb-3 pb-md-0">
                        {frontmatter.description ? (
                            <p>{truncate(frontmatter.description, { length: 300 })}</p>
                        ) : (
                            <p>{excerpt}</p>
                        )}
                        <div className="text-center text-sm-left">
                            <Link href={`/press-release/${slugPath}`} passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="font-weight-bold">Read more</a>
                            </Link>
                        </div>
                    </div>
                    {frontmatter.heroImage && (
                        <div className="col-md-2 d-flex justify-content-center">
                            <Link href={`/press-release/${slugPath}`} passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>
                                    <img className="max-h-150" src={frontmatter.heroImage} alt={frontmatter.title} />
                                </a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>
)

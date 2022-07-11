import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import Link from 'next/link'

import { PostIndexItemProps } from '@interfaces/posts'
import { formatDate } from '@util'

export const PostListItem: FunctionComponent<PostIndexItemProps> = ({
    frontmatter,
    excerpt,
    slugPath,
    className,
    headerClassName,
    titleClassName,
    titleLinkClassName = '',
    renderTitleAsLink = false,
    blogType,
    children,
}) => (
    <article className={className}>
        <header className={headerClassName}>
            <h1 className={titleClassName}>
                {renderTitleAsLink === true ? (
                    <Link href={`/${blogType}/${slugPath}`} passHref={true}>
                        <a className={`d-block ${titleLinkClassName}`} href="#none" title={frontmatter.title}>{frontmatter.title}</a>
                    </Link>
                ) : (
                    frontmatter.title
                )}
            </h1>

            {frontmatter.authors?.length && (
                <p className="text-align-center text-secondary mb-0">
                    {frontmatter.authors.map((a, index) => (
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
                            {index === frontmatter.authors!.length - 1 ? ' ' : ', '}
                        </span>
                    ))}
                </p>
            )}

            {frontmatter.publishDate && (
                <p className="text-align-center text-secondary mb-0">
                    <time dateTime={frontmatter.publishDate}>{formatDate(frontmatter.publishDate)}</time>
                </p>
            )}
        </header>

        {slugPath && (
            <div className="card-body pt-0 d-flex flex-card align-items-center">
                <div className="row w-100">
                    <div className="col-md-9 pb-3 pb-md-0">
                        {frontmatter.description ? (
                            <p>{truncate(frontmatter.description, { length: 300 })}</p>
                        ) : (
                            <p>{excerpt}</p>
                        )}
                        <div className="text-center text-sm-left">
                            <Link href={`/${blogType}/${slugPath}`} passHref={true}>
                                <a className="font-weight-bold" href="#none" title="Read more">Read more</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex">
                        <Link href={`/${blogType}/${slugPath}`} passHref={true}>
                            <a href="#none">
                                <img
                                    className="w-100"
                                    src={
                                        frontmatter.heroImage
                                            ? frontmatter.heroImage
                                            : 'https://storage.googleapis.com/sourcegraph-assets/sourcegraph-social-image.png'
                                    }
                                    alt={frontmatter.title}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )}

        {children}
    </article>
)

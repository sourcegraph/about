import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '../../data/tracking'
import { PostIndexItemProps } from '../../interfaces/posts'
import { formatDate } from '../../util'

export const PostListItem: FunctionComponent<PostIndexItemProps> = ({
    frontmatter,
    excerpt,
    slugPath,
    className,
    headerClassName,
    renderTitleAsLink = false,
    blogType,
    children,
}) => (
    <article className={className}>
        <header className={headerClassName}>
            <h4>
                {renderTitleAsLink === true ? (
                    <Link
                        href={`/${blogType}/${slugPath}`}
                        className="tw-text-gray-600 tw-block"
                        title={frontmatter.title}
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {frontmatter.title}
                    </Link>
                ) : (
                    frontmatter.title
                )}
            </h4>

            {frontmatter.authors?.length && (
                <p className="mb-0 text-align-center text-secondary">
                    {frontmatter.authors.map((a, index) => (
                        <span key={a.name} data-author={a.name}>
                            {a.url ? (
                                a.url.includes('http') ? (
                                    <a
                                        href={a.url}
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        title={a.name}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        {a.name}
                                    </a>
                                ) : (
                                    <Link
                                        href={a.url}
                                        title={a.name}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        {a.name}
                                    </Link>
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
                <p className="mb-0 text-align-center text-secondary">
                    <time dateTime={frontmatter.publishDate}>{formatDate(frontmatter.publishDate)}</time>
                </p>
            )}
        </header>

        {slugPath && (
            <div className="tw-pt-0 card-body tw-flex flex-card tw-items-center">
                <div className="row w-100">
                    <div className="tw-pb-xs col-md-9 md:tw-pb-0">
                        {frontmatter.description ? (
                            <p>{truncate(frontmatter.description, { length: 300 })}</p>
                        ) : (
                            <p>{typeof excerpt === 'string' && excerpt}</p>
                        )}
                        <div className="tw-text-center xs:tw-text-left">
                            <Link
                                href={`/${blogType}/${slugPath}`}
                                title="Read more"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-3 tw-flex">
                        <Link
                            href={`/${blogType}/${slugPath}`}
                            title={frontmatter.title}
                            data-button-style={buttonStyle.image}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            <img
                                className="w-100"
                                src={
                                    frontmatter.heroImage
                                        ? frontmatter.heroImage
                                        : 'https://storage.googleapis.com/sourcegraph-assets/sourcegraph-social-image.png'
                                }
                                alt={frontmatter.title}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )}

        {children}
    </article>
)

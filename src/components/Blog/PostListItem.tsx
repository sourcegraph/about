import { FunctionComponent } from 'react'

import { truncate } from 'lodash'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'
import { PostIndexItemProps } from '@interfaces/posts'
import { formatDate } from '@util'

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
            <h3 className="tw-text-xl">
                {renderTitleAsLink === true ? (
                    <Link href={`/${blogType}/${slugPath}`} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="text-black d-block"
                            title={frontmatter.title}
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            {frontmatter.title}
                        </a>
                    </Link>
                ) : (
                    frontmatter.title
                )}
            </h3>

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
                                    <Link href={a.url} passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            title={a.name}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
                                        >
                                            {a.name}
                                        </a>
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
            <div className="pt-0 card-body d-flex flex-card align-items-center">
                <div className="row w-100">
                    <div className="pb-3 col-md-9 pb-md-0">
                        {frontmatter.description ? (
                            <p>{truncate(frontmatter.description, { length: 300 })}</p>
                        ) : (
                            <p>{excerpt}</p>
                        )}
                        <div className="tw-text-center xs:tw-text-left">
                            <Link href={`/${blogType}/${slugPath}`} passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="font-weight-bold"
                                    title="Read more"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Read more
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex">
                        <Link href={`/${blogType}/${slugPath}`} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
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
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )}

        {children}
    </article>
)

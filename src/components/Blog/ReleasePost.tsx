import { FunctionComponent } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { Alert, Badge, Figure, Video, YouTube } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { PostComponentProps } from '@interfaces/posts'
import { formatDate } from '@util'

type ReleaseComponents = import('mdx/types').MDXComponents
const components = { Alert, Badge, Figure, Video, YouTube }

interface Props extends PostComponentProps {}

/**
 * A post about a release.
 */
export const ReleasePost: FunctionComponent<Props> = ({
    post,
    content,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false,
}) => {
    const body = (
        <>
            {content && (
                <div className="card-body release-post__body">
                    <MDXRemote {...content} components={components as ReleaseComponents} />
                </div>
            )}

            <h3 className="tw-pt-sm tw-pb-xxs m-0 card-body release-post__changelog-header">Changelog highlights</h3>

            <div className="tw-border-y tw-border-solid tw-border-gray-200 list-group list-group-flush">
                {post.frontmatter.changelogItems?.map(({ url, category, description }) => (
                    <a
                        href={url}
                        className="release-post__item md:tw-flex list-group-item list-group-item-action"
                        key={url}
                        title={`${category}: ${description}`}
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <span className="mb-2 release-post__item-category mb-md-0">
                            <span className="release-post__item-category-badge">{category}</span>
                        </span>
                        <span className="release-post__item-description">{description}</span>
                    </a>
                ))}
            </div>

            <ul className="tw-mb-0 tw-py-4 tw-flex-wrap tw-list-none tw-flex-col md:tw-flex-row md:tw-flex">
                <li className="release-post__help-item">
                    <a
                        href="https://docs.sourcegraph.com/admin/install"
                        title="How to install"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        How to install
                    </a>
                </li>
                <li className="release-post__help-item">
                    <a
                        href="https://docs.sourcegraph.com/admin/updates"
                        title="How to upgrade"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        How to upgrade
                    </a>
                </li>
                <li className="tw-flex-1" />
                <li className="release-post__help-item">
                    <a
                        href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                        title="Full changelog"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Full changelog
                    </a>
                </li>
            </ul>

            <div className="card-body release-post__body">
                * Please{' '}
                <Link href="/demo" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="contact Sourcegraph"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        contact Sourcegraph
                    </a>
                </Link>{' '}
                with any licensing questions.
            </div>
        </>
    )

    return (
        <Tag className={`release-post ${className}`}>
            <header className={`release-post__header ${headerClassName}`}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link href={url} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="tw-block"
                                title={post.frontmatter.title}
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                {post.frontmatter.title}
                            </a>
                        </Link>
                    ) : (
                        post.frontmatter.title
                    )}
                </h1>

                {post.frontmatter.publishDate && (
                    <time className="text-muted" dateTime={post.frontmatter.publishDate}>
                        {formatDate(post.frontmatter.publishDate)}
                    </time>
                )}
            </header>

            <div className="card-body">{body}</div>
        </Tag>
    )
}

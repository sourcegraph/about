import { FunctionComponent } from 'react'

import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { Alert, Badge, Figure, Video, YouTube } from '..'
import { buttonStyle, buttonLocation } from '../../data/tracking'
import { PostComponentProps } from '../../interfaces/posts'
import { formatDate } from '../../util'

type ReleaseComponents = import('mdx/types').MDXComponents
const components = { Alert, Badge, Figure, OpenInNewIcon, Video, YouTube }

interface Props extends PostComponentProps {}

/**
 * A post about a release.
 */
export const ReleasePost: FunctionComponent<Props> = ({
    post: { frontmatter },
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

            {frontmatter.changelogItems?.length ? (
                <div>
                    <h3 className="tw-pt-sm tw-pb-xxs m-0 card-body release-post__changelog-header">
                        Changelog highlights
                    </h3>

                    <div className="tw-border-y tw-border-solid tw-border-gray-200 list-group list-group-flush">
                        {frontmatter.changelogItems?.map(({ url, category, description }) => (
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
                        <li>
                            <a
                                href="https://docs.sourcegraph.com/admin/install"
                                className="tw-text-gray-400"
                                title="How to install"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                How to install
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://docs.sourcegraph.com/admin/updates"
                                className="tw-text-gray-400"
                                title="How to upgrade"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                How to upgrade
                            </a>
                        </li>
                        <li className="tw-flex-1" />
                        <li>
                            <a
                                href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                                className="tw-text-gray-400"
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
                        <Link
                            href="/demo"
                            title="contact Sourcegraph"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            {' '}
                            contact Sourcegraph
                        </Link>{' '}
                        with any licensing questions.
                    </div>
                </div>
            ) : (
                <ul className="tw-border-t tw-mt-md tw-mb-0 tw-py-4 tw-flex-wrap tw-list-none tw-flex-col md:tw-flex-row md:tw-flex">
                    <li>
                        <a
                            href="https://docs.sourcegraph.com/admin/install"
                            className="tw-text-gray-400"
                            title="How to install"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            How to install
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://docs.sourcegraph.com/admin/updates"
                            className="tw-text-gray-400"
                            title="How to upgrade"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            How to upgrade
                        </a>
                    </li>
                    <li className="tw-flex-1" />
                    <li>
                        <a
                            href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                            className="tw-text-gray-400"
                            title="Full changelog"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Full changelog
                        </a>
                    </li>
                </ul>
            )}
        </>
    )

    return (
        <Tag className={`release-post ${className}`}>
            <header className={`release-post__header ${headerClassName}`}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link
                            href={url}
                            className="tw-block"
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
                </h1>

                {frontmatter.publishDate && (
                    <time className="tw-text-gray-400" dateTime={frontmatter.publishDate}>
                        {formatDate(frontmatter.publishDate)}
                    </time>
                )}
            </header>

            <div className="card-body">{body}</div>
        </Tag>
    )
}

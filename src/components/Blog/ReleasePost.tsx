import { FunctionComponent } from 'react'

import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { Alert, Badge, Figure, Video, YouTube } from '..'
import { buttonStyle, buttonLocation } from '../../data/tracking'
import { PostComponentProps } from '../../interfaces/posts'
import { formatDate } from '../../util'

import styles from './ReleasePost.module.css'

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
                <div className={`${styles.body} p-sm`}>
                    <MDXRemote {...content} components={components as ReleaseComponents} />
                </div>
            )}

            {frontmatter.changelogItems?.length ? (
                <div>
                    <h3 className={`pt-sm pb-xxs m-0 ${styles['changelog-header']}`}>Changelog highlights</h3>

                    <ol className="border-y border-solid border-gray-200 list-none ml-0">
                        {frontmatter.changelogItems?.map(({ url, category, description }) => (
                            <li key={url} className="bg-white [&:not(:last-child)]:border-b-1 m-0 p-0">
                                <a
                                    href={url}
                                    className={`${styles.item} block md:flex px-xs py-xxs text-black`}
                                    title={`${category}: ${description}`}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <span
                                        className={`mb-2 ${styles['item-category']} md:mb-0 block md:inline`}
                                    >
                                        <Badge text={category} breakWords={false} size="large" color="white-outlined" />
                                    </span>
                                    <span className={styles['item-description']}>{description}</span>
                                </a>
                            </li>
                        ))}
                    </ol>

                    <ul className="mb-0 py-4 flex-wrap list-none flex-col md:flex-row md:flex">
                        <li>
                            <a
                                href="https://docs.sourcegraph.com/admin/install"
                                className="text-gray-400"
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
                                className="text-gray-400"
                                title="How to upgrade"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                How to upgrade
                            </a>
                        </li>
                        <li className="flex-1" />
                        <li>
                            <a
                                href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                                className="text-gray-400"
                                title="Full changelog"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Full changelog
                            </a>
                        </li>
                    </ul>

                    <div className={styles.body}>
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
                <ul className="border-t mt-md mb-0 py-4 flex-wrap list-none flex-col md:flex-row md:flex">
                    <li>
                        <a
                            href="https://docs.sourcegraph.com/admin/install"
                            className="text-gray-400"
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
                            className="text-gray-400"
                            title="How to upgrade"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            How to upgrade
                        </a>
                    </li>
                    <li className="flex-1" />
                    <li>
                        <a
                            href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                            className="text-gray-400"
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
        <Tag className={className}>
            <header className={headerClassName}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link
                            href={url}
                            className="block"
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
                    <time className="text-gray-400" dateTime={frontmatter.publishDate}>
                        {formatDate(frontmatter.publishDate)}
                    </time>
                )}
            </header>

            {body}
        </Tag>
    )
}

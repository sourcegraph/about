import { FunctionComponent } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'

import { Alert, Badge, Figure, Video, YouTube } from '..'
import { buttonLocation, buttonStyle } from '../../data/tracking'
import { PostComponentProps } from '../../interfaces/posts'

import { BylineAndDate } from './BylineAndDate'
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
    className = '',
    tag: Tag = 'div',
}) => {
    const body = (
        <>
            {content && (
                <div
                    className={classNames(
                        'mt-8',
                        'min-h-[60vh]',
                        styles.content,
                        'prose',
                        'xl:prose-lg',
                        'leading-relaxed',
                        'xl:leading-relaxed',
                        'prose-headings:font-semibold',
                        'prose-headings:mb-2.5',
                        'prose-a:text-violet-500',
                        'prose-a:no-underline',
                        'hover:prose-a:text-violet-400',
                        'hover:prose-a:underline',
                        'prose-img:rounded-lg',
                        'prose-img:!mt-8',
                        'prose-code:before:hidden',
                        'prose-code:after:hidden'
                    )}
                >
                    <MDXRemote {...content} components={components as ReleaseComponents} />
                </div>
            )}

            {frontmatter.changelogItems?.length ? (
                <div>
                    <h3 className={`m-0 pt-6 pb-2 ${styles['changelog-header']}`}>Changelog highlights</h3>

                    <ol className="ml-0 mb-2 list-none border-y border-solid border-gray-200">
                        {frontmatter.changelogItems?.map(({ url, category, description }) => (
                            <li key={url} className="m-0 bg-white p-0 [&:not(:last-child)]:border-b-1">
                                <a
                                    href={url}
                                    className={`${styles.item} block px-4 py-2 text-black md:flex`}
                                    title={`${category}: ${description}`}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <span className={`mb-2 ${styles['item-category']} block md:mb-0 md:inline`}>
                                        <Badge text={category} breakWords={false} size="large" color="white-outlined" />
                                    </span>
                                    <span className={styles['item-description']}>{description}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                    <CommonLinks />
                </div>
            ) : (
                <CommonLinks />
            )}
        </>
    )

    return (
        <Tag className={className}>
            <h1 className="text-blog-h1">{frontmatter.title}</h1>

            {(frontmatter.authors?.length || frontmatter.publishDate) && (
                <div className="mt-3">
                    <BylineAndDate authors={frontmatter.authors} publishDate={frontmatter.publishDate} />
                </div>
            )}

            {body}
        </Tag>
    )
}

const CommonLinks: React.FunctionComponent<{ className?: string }> = ({ className }) => (
    <ul className={classNames(className, 'mb-0 ml-0 list-none flex-col flex-wrap gap-8 md:flex md:flex-row')}>
        <li>
            <a href="https://sourcegraph.com/docs/admin/install" className="text-gray-400">
                How to install
            </a>
        </li>
        <li>
            <a href="https://sourcegraph.com/docs/admin/updates" className="text-gray-400">
                How to upgrade
            </a>
        </li>
        <li className="flex-1" />
        <li>
            <a
                href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                className="text-gray-400"
            >
                Full changelog
            </a>
        </li>
    </ul>
)

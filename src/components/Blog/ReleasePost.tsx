import { truncate } from 'lodash'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'

interface Props extends PostComponentProps {}

/**
 * A post about a release.
 */
export const ReleasePost: React.FunctionComponent<Props> = ({
    post,
    content,
    url,
    full,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false,
}) => {
    const body = full ? (
        <>
            {content && (
                <div className="card-body release-post__body">
                    <MDXRemote {...content} />
                </div>
            )}

            <h3 className="card-body pb-2 pt-4 m-0 release-post__changelog-header">Changelog highlights</h3>
            <div className="release-post__items list-group list-group-flush">
                {post.frontmatter.changelogItems?.map(({ url, category, description }) => (
                    <a
                        href={url}
                        className="release-post__item d-md-flex list-group-item list-group-item-action"
                        key={url}
                    >
                        <span className="release-post__item-category mb-2 mb-md-0">
                            <span className="release-post__item-category-badge">{category}</span>
                        </span>
                        <span className="release-post__item-description">{description}</span>
                    </a>
                ))}
            </div>
            <ul className="card-body list-unstyled d-flex flex-wrap mb-0">
                <li className="release-post__help-item">
                    <a href="https://docs.sourcegraph.com/admin/install">How to install</a>
                </li>
                <li className="release-post__help-item">
                    <a href="https://docs.sourcegraph.com/admin/updates">How to upgrade</a>
                </li>
                <li className="flex-1" />
                <li className="release-post__help-item">
                    <a href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md">
                        Full changelog
                    </a>
                </li>
            </ul>
            <div className="card-body release-post__body">
                * Please <Link href="/contact/product-specialist/">contact Sourcegraph</Link> with any licensing
                questions.
            </div>
        </>
    ) : (
        <>
            <p className="blog-post__excerpt">
                {post.frontmatter.description
                    ? truncate(post.frontmatter.description, { length: 300 })
                    : truncate(post.excerpt, { length: 300 })}{' '}
            </p>
            <Link href={url} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="blog-post__read-more">Read more</a>
            </Link>
        </>
    )

    return (
        <Tag className={`release-post ${className}`}>
            <header className={`release-post__header ${headerClassName}`}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link href={url} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={`d-block ${titleLinkClassName}`}>{post.frontmatter.title}</a>
                        </Link>
                    ) : (
                        post.frontmatter.title
                    )}
                </h1>
                <p className="text-muted mb-0">{post.frontmatter.publishDate}</p>
            </header>
            {!full && post.frontmatter.heroImage ? (
                <div className="card-body pt-0 d-flex flex-card">
                    <div className="flex-1">{body}</div>
                    <Link href={url} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>
                            <img
                                className="blog-post__image flex-1"
                                src={post.frontmatter.heroImage}
                                alt={post.frontmatter.title}
                            />
                        </a>
                    </Link>
                </div>
            ) : (
                <div className="card-body">{body}</div>
            )}
        </Tag>
    )
}

import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'
import { PostComponentProps } from './postTypes'

interface Props extends PostComponentProps { }

/**
 * A post about a release.
 */
export const ReleasePost: React.FunctionComponent<Props> = ({
    post,
    url,
    full,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
}) => {
    const body = full ? (
        <>
            {post.html && (
                <div className="card-body release-post__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            )}

            <h3 className="card-body pb-2 pt-4 m-0 release-post__changelog-header">Changelog highlights</h3>
            <div className="release-post__items list-group list-group-flush">
                {post.frontmatter.changelogItems?.map(({ url, category, description }, i) => (
                    <a href={url} className="release-post__item d-md-flex list-group-item list-group-item-action" key={i}>
                        <span className="release-post__item-category mb-2 mb-md-0">
                            <span className="release-post__item-category-badge">{category}</span>
                        </span>
                        <span
                            className="release-post__item-description"
                            dangerouslySetInnerHTML={{
                                __html: remark().use(remarkHTML).processSync(description).toString(),
                            }}
                        />
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
                * Please <a href="https://about.sourcegraph.com/contact/sales/">contact Sourcegraph</a> with any licensing questions.
            </div>
        </>
    ) : (
        <>
            <p className="blog-post__excerpt">
                {post.frontmatter.description
                    ? truncate(post.frontmatter.description, { length: 300 })
                    : truncate(post.excerpt, { length: 300 })}{' '}
            </p>
            <Link to={url} className="blog-post__read-more">
                Read more
            </Link>
        </>
    )

    return (
        <Tag className={`release-post ${className}`}>
            <header className={`release-post__header ${headerClassName}`}>
                <h1 className={titleClassName}>
                    <Link to={url} className={`d-block ${titleLinkClassName}`}>
                        {post.frontmatter.title}
                    </Link>
                </h1>
                <p className="text-muted mb-0">{post.frontmatter.publishDate}</p>
            </header>

            <div className="card-body">{body}</div>
        </Tag>
    )
}

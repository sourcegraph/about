import { Link } from 'gatsby'
import * as React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'
import { PostComponentProps } from './postTypes'

interface Props extends PostComponentProps {}

/**
 * A release post, shown by itself on a page.
 *
 * TODO(sqs): fix blogType
 */
export const ReleasePost: React.FunctionComponent<Props> = ({
    post,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
}) => (
    <Tag className={`release-post ${className}`}>
        <header className={`release-post__header ${headerClassName}`}>
            <h2 className={titleClassName}>
                {/* TODO(sqs): blogType not /blog/ */}
                <Link to={`/blog/${post.frontmatter.slug}`} className={`d-block ${titleLinkClassName}`}>
                    {post.frontmatter.title}
                </Link>
            </h2>
            <p className="text-muted mb-0">{post.frontmatter.publishDate}</p>
        </header>
        <h3 className="card-body pb-2 pt-0 m-0 release-post__changelog-header">Changelog</h3>
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
        {post.html && (
            <div className="card-body border-top release-post__body" dangerouslySetInnerHTML={{ __html: post.html }} />
        )}
    </Tag>
)

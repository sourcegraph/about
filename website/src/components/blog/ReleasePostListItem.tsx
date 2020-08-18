import { Link } from 'gatsby'
import * as React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'
import { PostListItemProps } from './postTypes'

interface Props extends PostListItemProps {}

/**
 * A summary for this release post, shown in a list of blog posts.
 */
export const ReleasePostListItem: React.FunctionComponent<Props> = ({
    post,
    blogType,
    className = '',
    headerClassName = '',
    titleClassName = '',
    tag: Tag = 'li',
}) => (
    <Tag className={`release-post ${className}`}>
        <header className={`release-post__header ${headerClassName}`}>
            <h2 className={titleClassName}>
                <Link to={`/${blogType}/${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</Link>
            </h2>
            <p className="text-muted mb-0">{post.node.frontmatter.publishDate}</p>
        </header>
        <h3 className="card-body pb-2 pt-0 m-0 release-post__changelog-header">Changelog</h3>
        <div className="release-post__items list-group list-group-flush">
            {post.node.frontmatter.changelogItems?.map(({ url, category, description }, i) => (
                <a href={url} className="release-post__item list-group-item list-group-item-action" key={i}>
                    <span className="release-post__item-category">
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
                <a href="https://docs.sourcegraph.com/admin/install/">How to install</a>
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
        {post.node.html && (
            <div
                className="card-body border-top release-post__body"
                dangerouslySetInnerHTML={{ __html: post.node.html }}
            />
        )}
    </Tag>
)

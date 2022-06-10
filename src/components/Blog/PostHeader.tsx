import { FunctionComponent } from 'react';

import Link from 'next/link'

import { PostHeaderProps } from '@interfaces/posts'
import { formatDate } from '@util'

export const PostHeader: FunctionComponent<PostHeaderProps> = ({
    frontmatter,
    url,
    headerClassName,
    titleClassName,
    titleLinkClassName = '',
    renderTitleAsLink = false,
}) => (
    <header className={headerClassName}>
        <h1 className={titleClassName}>
            {renderTitleAsLink === true ? (
                <Link href={url} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={`d-block ${titleLinkClassName}`}>{frontmatter.title}</a>
                </Link>
            ) : (
                frontmatter.title
            )}
        </h1>

        {frontmatter.authors?.length && (
            <p className="text-align-center text-secondary mb-0">
                {frontmatter.authors.map((a, index) => (
                    <span key={a.name} data-author={a.name}>
                        {a.url ? (
                            a.url.includes('http') ? (
                                <a href={a.url} target="_blank" rel="nofollow noreferrer">
                                    {a.name}
                                </a>
                            ) : (
                                <Link href={a.url}>{a.name}</Link>
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
            <p className="text-align-center text-secondary mb-0">
                <time dateTime={frontmatter.publishDate}>{formatDate(frontmatter.publishDate)}</time>
            </p>
        )}
    </header>
)

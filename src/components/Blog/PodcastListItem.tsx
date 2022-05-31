import { FunctionComponent } from 'react'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link'

import { PodcastAudioPlayer } from '@components'
import { PostIndexItem } from '@interfaces/posts'
import { formatDate } from '@util'

/**
 * An index podcast post item.
 */
export const PodcastListItem: FunctionComponent<PostIndexItem> = ({
    frontmatter,
    excerpt,
    slugPath,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
}) => (
    <article className={`podcast-post ${className} p-4`}>
        <header className={`podcast-post__header ${headerClassName}`}>
            <h1 className={titleClassName}>
                <Link href={`/podcast/${slugPath}`} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={`d-block font-weight-bold ${titleLinkClassName}`}>{frontmatter.title}</a>
                </Link>
            </h1>
            {frontmatter.publishDate && (
                <p className="text-align-center text-secondary mb-0">
                    <time dateTime={frontmatter.publishDate}>{formatDate(frontmatter.publishDate)}</time>
                </p>
            )}
            {frontmatter.authors?.length && (
                <p className="text-align-center text-secondary mb-0">
                    {frontmatter.authors.map((a, index) => (
                        <span key={a.name}>
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
        </header>
        <MDXRemote {...(excerpt as MDXRemoteSerializeResult)} />
        <PodcastAudioPlayer source={frontmatter.audioSrc} />
        <div className="flex-1">
            <div>
                <Link href={`/podcast/${slugPath}`} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="text-muted mr-4 font-weight-bold">Permalink</a>
                </Link>
                <Link href={`/podcast/${slugPath}#notes`} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="text-muted mr-4 font-weight-bold">Show notes</a>
                </Link>
                <Link href={`/podcast/${slugPath}#transcript`} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="text-muted mr-4 font-weight-bold">Transcript</a>
                </Link>
            </div>
        </div>
    </article>
)

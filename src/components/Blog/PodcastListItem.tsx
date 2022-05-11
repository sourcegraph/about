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
            {frontmatter.author && frontmatter.publishDate && (
                <div className="text-align-center text-secondary mb-0">
                    <div>
                        <time dateTime={frontmatter.publishDate}>{formatDate(frontmatter.publishDate)}</time>
                    </div>
                    {(frontmatter.author as string[]).join(', ')}
                </div>
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

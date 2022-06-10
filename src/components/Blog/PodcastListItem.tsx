import { FunctionComponent } from 'react'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link'

import { PostHeader, PodcastAudioPlayer } from '@components'
import { PostIndexItem } from '@interfaces/posts'

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
        <PostHeader
            frontmatter={frontmatter}
            url={`/podcast/${slugPath}`}
            headerClassName={`podcast-post__header ${headerClassName}`}
            titleClassName={titleClassName}
            renderTitleAsLink={true}
            titleLinkClassName={titleLinkClassName}
        />

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

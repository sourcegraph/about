import { FunctionComponent } from 'react'

import Link from 'next/link'

import { PostListItem, PodcastAudioPlayer } from '@components'
import { PostIndexItemProps } from '@interfaces/postProps'

/**
 * An index podcast post item.
 */
export const PodcastListItem: FunctionComponent<PostIndexItemProps> = ({
    frontmatter,
    excerpt,
    slugPath,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    renderTitleAsLink = false,
    blogType,
}) => {
    const newFrontmatter = {
        ...frontmatter,
    }
    if (frontmatter.videoID) {
        newFrontmatter.heroImage = `https://img.youtube.com/vi/${frontmatter.videoID}/maxresdefault.jpg`
    }

    return (
        <article className={`podcast-post ${className} p-4`}>
            <PostListItem
                frontmatter={newFrontmatter}
                excerpt={excerpt}
                slugPath={slugPath}
                headerClassName={`podcast-post__header ${headerClassName}`}
                titleClassName={titleClassName}
                titleLinkClassName={titleLinkClassName}
                renderTitleAsLink={renderTitleAsLink}
                blogType={blogType}
            >
                <>
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
                            {frontmatter.videoID && (
                                <a
                                    href={`https://www.youtube.com/v/${frontmatter.videoID}`}
                                    className="text-muted mr-4 font-weight-bold"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Watch the video
                                </a>
                            )}
                        </div>
                    </div>
                </>
            </PostListItem>
        </article>
    )
}

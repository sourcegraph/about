import { FunctionComponent } from 'react'

import Link from 'next/link'

import { PostListItem, PodcastAudioPlayer } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { PostIndexItemProps } from '@interfaces/posts'

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
                                <a
                                    className="text-muted mr-4 font-weight-bold"
                                    title="Permalink"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Permalink
                                </a>
                            </Link>

                            <Link href={`/podcast/${slugPath}#notes`} passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="text-muted mr-4 font-weight-bold"
                                    title="Show notes"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Show notes
                                </a>
                            </Link>
                            <Link href={`/podcast/${slugPath}#transcript`} passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="text-muted mr-4 font-weight-bold"
                                    title="Transcript"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Transcript
                                </a>
                            </Link>
                            {frontmatter.videoID && (
                                <a
                                    href={`https://www.youtube.com/v/${frontmatter.videoID}`}
                                    className="text-muted mr-4 font-weight-bold"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Watch the video"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
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

import { FunctionComponent } from 'react'

import Link from 'next/link'

import { PostListItem, PodcastAudioPlayer } from '..'
import { buttonStyle, buttonLocation } from '../../data/tracking'
import { PostIndexItemProps } from '../../interfaces/posts'

/**
 * An index podcast post item.
 */
export const PodcastListItem: FunctionComponent<PostIndexItemProps> = ({
    frontmatter,
    excerpt,
    slugPath,
    className = '',
    headerClassName = '',
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
                renderTitleAsLink={renderTitleAsLink}
                blogType={blogType}
            >
                <>
                    <PodcastAudioPlayer source={frontmatter.audioSrc} />

                    <div className="tw-flex-1">
                        <div>
                            <Link
                                href={`/podcast/${slugPath}`}
                                className="mr-4 tw-text-gray-400"
                                title="Permalink"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Permalink
                            </Link>

                            <Link
                                href={`/podcast/${slugPath}#notes`}
                                className="mr-4 tw-text-gray-400"
                                title="Show notes"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Show notes
                            </Link>
                            <Link
                                href={`/podcast/${slugPath}#transcript`}
                                className="mr-4 tw-text-gray-400"
                                title="Transcript"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Transcript
                            </Link>
                            {frontmatter.videoID && (
                                <a
                                    href={`https://www.youtube.com/v/${frontmatter.videoID}`}
                                    className="mr-4 tw-text-gray-400"
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

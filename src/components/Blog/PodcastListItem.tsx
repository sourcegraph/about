import { FunctionComponent } from 'react'

import Link from 'next/link'

import { PostIndexItemProps } from '../../interfaces/posts'

import { PodcastAudioPlayer } from './PodcastAudioPlayer'
import { PostListItem } from './PostListItem'

/**
 * An index podcast post item.
 */
export const PodcastListItem: FunctionComponent<PostIndexItemProps> = ({
    frontmatter,
    excerpt,
    slugPath,
    className = '',
    blogType,
}) => {
    const newFrontmatter = {
        ...frontmatter,
    }
    if (frontmatter.videoID) {
        newFrontmatter.heroImage = `https://img.youtube.com/vi/${frontmatter.videoID}/maxresdefault.jpg`
    }

    return (
        <PostListItem
            frontmatter={newFrontmatter}
            excerpt={excerpt}
            slugPath={slugPath}
            blogType={blogType}
            className={className}
        >
            <>
                <PodcastAudioPlayer source={frontmatter.audioSrc} />

                <div className="flex-1">
                    <Link
                        href={`/podcast/${slugPath}`}
                        className="mr-6 whitespace-nowrap text-gray-400"
                        title="Permalink"
                    >
                        Permalink
                    </Link>

                    <Link
                        href={`/podcast/${slugPath}#notes`}
                        className="mr-6 whitespace-nowrap text-gray-400"
                        title="Show notes"
                    >
                        Show notes
                    </Link>
                    <Link
                        href={`/podcast/${slugPath}#transcript`}
                        className="mr-6 whitespace-nowrap text-gray-400"
                        title="Transcript"
                    >
                        Transcript
                    </Link>
                    {frontmatter.videoID && (
                        <a
                            href={`https://www.youtube.com/v/${frontmatter.videoID}`}
                            className="mr-6 whitespace-nowrap text-gray-400"
                            target="_blank"
                            rel="noreferrer"
                            title="Watch the video"
                        >
                            Watch the video
                        </a>
                    )}
                </div>
            </>
        </PostListItem>
    )
}

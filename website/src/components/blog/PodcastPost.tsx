import { Link } from 'gatsby'
import * as React from 'react'
import { PostComponentProps } from './postTypes'
import { getHTMLParts } from '../../pages/podcast'

interface Props extends PostComponentProps {}

/**
 * A podcast episode post.
 */
export const PodcastPost: React.FunctionComponent<Props> = ({
    post,
    full,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false
}) => {
    const { guestsHTML, summaryHTML, audioHTML, showNotesHTML, transcriptHTML } = getHTMLParts(post.html)
    return (
        <Tag className={`podcast-post ${className}`}>
            <header className={`podcast-post__header ${headerClassName}`}>
            <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link to={url} className={`d-block ${titleLinkClassName}`}>
                            {post.frontmatter.title}
                        </Link>
                    ) : post.frontmatter.title}
                </h1>
                <p className="text-muted mb-0">{post.frontmatter.publishDate}</p>
                {guestsHTML && <p className="text-muted mb-0" dangerouslySetInnerHTML={{ __html: guestsHTML }}></p>}
            </header>
            {summaryHTML && (
                <div
                    className="card-body podcast-post__body pt-0 pb-0"
                    dangerouslySetInnerHTML={{ __html: summaryHTML }}
                />
            )}
            <div className="card-body">
                {audioHTML && (
                    <div
                        className="podcast-post__body audio-container"
                        dangerouslySetInnerHTML={{ __html: audioHTML }}
                    />
                )}

                <div className="flex-1" />
                {!full && (
                    <div>
                        <Link className="text-muted mr-4" to={post.fields.permalink}>
                            Permalink
                        </Link>
                        <Link className="text-muted mr-4" to={`${post.fields.permalink}#notes`}>
                            Show notes
                        </Link>
                        <Link className="text-muted mr-4" to={`${post.fields.permalink}#transcript`}>
                            Transcript
                        </Link>
                    </div>
                )}
            </div>
            {full && (
                <>
                    {showNotesHTML && (
                        <div className="card-body border-top">
                            <h3 className="h4 mb-3">
                                <a id="notes" /> Show notes
                            </h3>
                            <div className="podcast-post__body" dangerouslySetInnerHTML={{ __html: showNotesHTML }} />
                        </div>
                    )}
                    {transcriptHTML && (
                        <div className="card-body border-top">
                            <h3 className="h4 mb-3">
                                <a id="transcript" /> Transcript
                            </h3>
                            <div className="podcast-post__body" dangerouslySetInnerHTML={{ __html: transcriptHTML }} />
                        </div>
                    )}
                </>
            )}
        </Tag>
    )
}

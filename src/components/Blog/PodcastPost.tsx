import Link from 'next/link'

import { PostComponentProps } from '@interfaces/posts'
import { getHTMLParts } from '@util'

interface Props extends PostComponentProps {}

/**
 * A podcast episode post.
 */
export const PodcastPost: React.FunctionComponent<Props> = ({
    post,
    url,
    className = '',
    headerClassName = '',
    titleClassName = '',
    titleLinkClassName = '',
    tag: Tag = 'div',
    renderTitleAsLink = false,
}) => {
    // const { guestsHTML, summaryHTML, audioHTML, showNotesHTML, transcriptHTML } = getHTMLParts(content)
    const {
        guestsHTML = '',
        summaryHTML = '',
        audioHTML = '',
        showNotesHTML = '',
        transcriptHTML = '',
    } = getHTMLParts('')
    return (
        <Tag className={`podcast-post ${className}`}>
            <header className={`podcast-post__header ${headerClassName}`}>
                <h1 className={titleClassName}>
                    {renderTitleAsLink === true ? (
                        <Link href={url} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={`d-block ${titleLinkClassName}`}>{post.frontmatter.title}</a>
                        </Link>
                    ) : (
                        post.frontmatter.title
                    )}
                </h1>
                <p className="text-muted mb-0">{post.frontmatter.publishDate}</p>
                {guestsHTML && <p className="text-muted mb-0">{guestsHTML}</p>}
            </header>
            {summaryHTML && <div className="card-body podcast-post__body pt-0 pb-0">{summaryHTML}</div>}
            <div className="card-body">
                {audioHTML && <div className="podcast-post__body audio-container">{audioHTML}</div>}

                <div className="flex-1" />
                {post.fields?.permalink && (
                    <div>
                        <Link href={post.fields.permalink} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="text-muted mr-4">Permalink</a>
                        </Link>
                        <Link href={`${post.fields.permalink}#notes`} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="text-muted mr-4">Show notes</a>
                        </Link>
                        <Link href={`${post.fields.permalink}#transcript`} passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="text-muted mr-4">Show notes</a>
                        </Link>
                    </div>
                )}
            </div>
            <>
                {showNotesHTML && (
                    <div className="card-body border-top">
                        <h3 className="h4 mb-3">
                            <a href="#notes" id="notes">
                                Show notes
                            </a>
                        </h3>
                        <div className="podcast-post__body" dangerouslySetInnerHTML={{ __html: showNotesHTML }} />
                    </div>
                )}
                {transcriptHTML && (
                    <div className="card-body border-top">
                        <h3 className="h4 mb-3">
                            <a href="#transcript" id="transcript">
                                Transcript
                            </a>
                        </h3>
                        <div className="podcast-post__body" dangerouslySetInnerHTML={{ __html: transcriptHTML }} />
                    </div>
                )}
            </>
        </Tag>
    )
}

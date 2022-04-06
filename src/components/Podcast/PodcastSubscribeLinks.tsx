import { FunctionComponent } from 'react'

interface Props {
    className?: string
    linkClassName?: string
}

export const PodcastSubscribeLinks: FunctionComponent<Props> = ({ className = '', linkClassName = '' }) => (
    <div className={className}>
        <span>Subscribe:</span>{' '}
        <a
            target="_blank"
            rel="noreferrer"
            href="https://podcasts.apple.com/us/podcast/the-sourcegraph-podcast/id1516219009"
            className={linkClassName}
        >
            Apple
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/1YlDYvCxNB7jAndbZPt5a6"
            className={linkClassName}
        >
            Spotify
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMDk3OTc4LnJzcw=="
            className={linkClassName}
        >
            Google
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_jf5GDl61SvEOXvwvKS1IXA"
            className={linkClassName}
        >
            YouTube
        </a>
        <a target="_blank" rel="noreferrer" href="https://feeds.buzzsprout.com/1097978.rss" className={linkClassName}>
            RSS
        </a>
    </div>
)

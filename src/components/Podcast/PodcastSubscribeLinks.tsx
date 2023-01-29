import { FunctionComponent } from 'react'

import { buttonStyle, buttonLocation } from '../../data/tracking'

interface Props {
    linkClassName?: string
}

export const PodcastSubscribeLinks: FunctionComponent<Props> = ({ linkClassName = '' }) => (
    <div>
        <span className="tw-text-gray-500">Subscribe:</span>{' '}
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_jf5GDl61SvEOXvwvKS1IXA"
            className={linkClassName}
            title="YouTube"
            data-button-style={buttonStyle.text}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
        >
            YouTube
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://podcasts.apple.com/us/podcast/the-sourcegraph-podcast/id1516219009"
            className={linkClassName}
            title="Apple"
            data-button-style={buttonStyle.text}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
        >
            Apple
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/1YlDYvCxNB7jAndbZPt5a6"
            className={linkClassName}
            title="Spotify"
            data-button-style={buttonStyle.text}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
        >
            Spotify
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMDk3OTc4LnJzcw=="
            className={linkClassName}
            title="Google"
            data-button-style={buttonStyle.text}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
        >
            Google
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://feeds.buzzsprout.com/1097978.rss"
            className={linkClassName}
            title="RSS"
            data-button-style={buttonStyle.text}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
        >
            RSS
        </a>
    </div>
)

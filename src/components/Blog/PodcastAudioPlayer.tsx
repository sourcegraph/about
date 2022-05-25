import { FunctionComponent } from 'react'

interface PodcastAudioPlayerProps {
    source?: string
}

export const PodcastAudioPlayer: FunctionComponent<PodcastAudioPlayerProps> = ({ source }) => (
    <p className="podcast-post__body audio-container">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio className="object-center w-100" src={source} controls={true} preload="none" />
    </p>
)

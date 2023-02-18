import { FunctionComponent } from 'react'

import styles from './PodcastAudioPlayer.module.css'

interface PodcastAudioPlayerProps {
    source?: string
}

export const PodcastAudioPlayer: FunctionComponent<PodcastAudioPlayerProps> = ({ source }) => (
    <p className={styles['audio-container']}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio className="object-center w-full" src={source} controls={true} preload="none" />
    </p>
)

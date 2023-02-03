import React from 'react'

const VIDEOS: Record<'homepage-demo-202301', { poster: string; track: string; mp4: string; webm: string }> = {
    'homepage-demo-202301': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1_poster.png',
        track: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.vtt',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-0.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.mp4',
    },
} as const

export const DemoVideo: React.FunctionComponent<{ video: keyof typeof VIDEOS; className?: string }> = ({
    video,
    className,
}) => (
    <video
        className={className}
        autoPlay={false}
        playsInline={true}
        controls={true}
        title="Sourcegraph demo video"
        // Required for cross-origin caption track to work
        crossOrigin="anonymous"
        data-cookieconsent="ignore"
        poster={VIDEOS[video].poster}
    >
        <track
            default={true}
            label="English"
            kind="captions"
            srcLang="en"
            src={VIDEOS[video].track}
            data-cookieconsent="ignore"
        />
        <source type="video/webm" src={VIDEOS[video].webm} data-cookieconsent="ignore" />
        <source type="video/mp4" src={VIDEOS[video].mp4} data-cookieconsent="ignore" />
    </video>
)

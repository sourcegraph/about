import React, { useCallback, useRef, useState } from 'react'

import classNames from 'classnames'
import PlayCircleIcon from 'mdi-react/PlayCircleIcon'

import { TelemetryRecorder } from '@sourcegraph/telemetry'

const VIDEOS: Record<
    'homepage-demo-202301' | 'cody-demo-202305' | 'cody-promo-202306',
    { poster: string; track: string; mp4: string; webm: string; dimensions: number }
> = {
    // Demo of Sourcegraph full platform
    'homepage-demo-202301': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1_poster.png',
        track: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.vtt',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-0.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.mp4',
        dimensions: 16 / 9,
    },
    // Demo of Cody's 4 use cases
    'cody-demo-202305': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-use-cases-202305-poster-1.png',
        track: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-use-cases-202305.vtt',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-use-cases-202305.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-use-cases-202305.mp4',
        dimensions: 16 / 9,
    },
    // June 2023 Cody video
    'cody-promo-202306': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-promo-202306-poster.png',
        track: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-promo-202306.vtt',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-promo-202306.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-promo-202306.mp4',
        dimensions: 16 / 9,
    },
} as const

export const DemoVideo: React.FunctionComponent<{
    video: keyof typeof VIDEOS
    splash?: boolean
    className?: string
    splashClassName?: string
    playButton?: React.ReactNode
    scrollIntoViewOnPlay?: boolean
    telemetryRecorder: TelemetryRecorder<'', ''>
}> = ({ video, splash = false, className, splashClassName, playButton, scrollIntoViewOnPlay = false, telemetryRecorder }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isShowing, setIsShowing] = useState(false)
    const onPlayClick = useCallback(() => {
        setIsShowing(true)
        if (scrollIntoViewOnPlay) {
            setTimeout(() => videoRef.current?.scrollIntoView({ block: 'center', inline: 'center' }), 0)
        }
    }, [scrollIntoViewOnPlay])

    const videoInfo = VIDEOS[video]
    const title = 'Sourcegraph demo video'

    return isShowing || !splash ? (
        <video
            className={className}
            autoPlay={isShowing}
            playsInline={true}
            controls={true}
            title={title}
            // Required for cross-origin caption track to work
            crossOrigin="anonymous"
            data-cookieconsent="ignore"
            poster={videoInfo.poster}
            ref={videoRef}
            // eslint-disable-next-line react/forbid-dom-props
            style={{ aspectRatio: videoInfo.dimensions }}
            onPlay={() => telemetryRecorder.recordEvent('video', 'play', { metadata: { video: 5 }, privateMetadata: { title } })}
        >
            <track
                default={true}
                label="English"
                kind="captions"
                srcLang="en"
                src={videoInfo.track}
                data-cookieconsent="ignore"
            />
            <source type="video/webm" src={videoInfo.webm} data-cookieconsent="ignore" />
            <source type="video/mp4" src={videoInfo.mp4} data-cookieconsent="ignore" />
        </video>
    ) : (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            onClick={onPlayClick}
            onKeyUp={onPlayClick}
            className={classNames('relative flex cursor-pointer items-center justify-center', className)}
            // eslint-disable-next-line react/forbid-dom-props
            style={{
                aspectRatio: videoInfo.dimensions,
            }}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
        >
            <div
                className={classNames('absolute top-0 right-0 bottom-0 left-0 bg-contain opacity-40', splashClassName)}
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                    backgroundImage: `url(${videoInfo.poster})`,
                }}
            />
            {playButton || <PlayCircleIcon className="h-[100px] w-[100px]" />}
        </div>
    )
}

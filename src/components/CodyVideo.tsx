import React, { useCallback, useRef, useState } from 'react'

import classNames from 'classnames'
import PlayCircleIcon from 'mdi-react/PlayCircleIcon'

import { TelemetryProps } from '../telemetry'

const VIDEOS: Record<
    'cody-demo-202303' | 'cody-promo-202306',
    { poster: string; mp4: string; webm: string; dimensions: number }
> = {
    'cody-demo-202303': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-demo-202303-poster-2.png',
        // track: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-demo-202303.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-demo-202303.mp4',
        dimensions: 16 / 9,
    },
    // June 2023 Cody video
    'cody-promo-202306': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-promo-202306-poster.png',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-promo-202306.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/cody-promo-202306.mp4',
        dimensions: 16 / 9,
    },
} as const

interface DemoVideoProps extends TelemetryProps {
    video: keyof typeof VIDEOS
    splash?: boolean
    className?: string
    splashClassName?: string
    showPlayButton?: boolean
    playIconClassName?: string
}

export const DemoVideo: React.FunctionComponent<DemoVideoProps> = ({
    telemetryRecorder,
    video,
    splash = false,
    className,
    splashClassName,
    playIconClassName,
    showPlayButton = true,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const [isShowing, setIsShowing] = useState(false)
    const onPlayClick = useCallback(() => {
        setIsShowing(true)
        setTimeout(() => videoRef.current?.scrollIntoView({ block: 'center', inline: 'center' }), 0)
    }, [])

    const videoInfo = VIDEOS[video]
    const title = 'Sourcegraph Cody demo video'

    return isShowing || !splash ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
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
            onPlay={() =>
                telemetryRecorder.recordEvent('video', 'play', { metadata: { video: 4 }, privateMetadata: { title } })
            }
        >
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
            {showPlayButton && <PlayCircleIcon className={classNames('h-[100px] w-[100px]', playIconClassName)} />}
        </div>
    )
}

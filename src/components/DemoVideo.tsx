import React, { useCallback, useRef, useState } from 'react'

import classNames from 'classnames'
import PlayCircleIcon from 'mdi-react/PlayCircleIcon'

const VIDEOS: Record<
    'homepage-demo-202301',
    { poster: string; track: string; mp4: string; webm: string; dimensions: number }
> = {
    'homepage-demo-202301': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1_poster.png',
        track: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.vtt',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-0.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/homepage-demo-202301-1.mp4',
        dimensions: 16 / 9,
    },
} as const

export const DemoVideo: React.FunctionComponent<{
    video: keyof typeof VIDEOS
    splash?: boolean
    className?: string
    splashClassName?: string
}> = ({ video, splash = false, className, splashClassName }) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const [isShowing, setIsShowing] = useState(false)
    const onPlayClick = useCallback(() => {
        setIsShowing(true)
        setTimeout(() => videoRef.current?.scrollIntoView({ block: 'center', inline: 'center' }), 0)
    }, [])

    const videoInfo = VIDEOS[video]

    return isShowing || !splash ? (
        <video
            className={className}
            autoPlay={isShowing}
            playsInline={true}
            controls={true}
            title="Sourcegraph demo video"
            // Required for cross-origin caption track to work
            crossOrigin="anonymous"
            data-cookieconsent="ignore"
            poster={videoInfo.poster}
            ref={videoRef}
            // eslint-disable-next-line react/forbid-dom-props
            style={{ aspectRatio: videoInfo.dimensions }}
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
            className={classNames('tw-relative tw-flex tw-items-center tw-justify-center tw-cursor-pointer', className)}
            // eslint-disable-next-line react/forbid-dom-props
            style={{
                aspectRatio: videoInfo.dimensions,
            }}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
        >
            <div
                className={classNames(
                    'tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0 tw-bg-contain tw-opacity-40',
                    splashClassName
                )}
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                    backgroundImage: `url(${videoInfo.poster})`,
                }}
            />
            <PlayCircleIcon className="tw-w-[100px] tw-h-[100px]" />
        </div>
    )
}

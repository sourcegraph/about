import React, { useCallback, useRef, useState } from 'react'

import classNames from 'classnames'
import PlayCircleIcon from 'mdi-react/PlayCircleIcon'

const VIDEOS: Record<
    'app-demo-202304',
    { poster: string; mp4: string; webm: string; dimensions: number }
> = {
    'app-demo-202304': {
        poster: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/website/app/demo-videos/app-demo-202304-poster.png',
        // track: '',
        webm: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/website/app/demo-videos/app-demo-202304.webm',
        mp4: 'https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/website/app/demo-videos/app-demo-202304.mp4',
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
        // eslint-disable-next-line jsx-a11y/media-has-caption
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
            <PlayCircleIcon className="h-[100px] w-[100px]" />
        </div>
    )
}

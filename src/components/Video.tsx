import { FunctionComponent } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

import { TelemetryProps } from '../telemetry'

interface Video {
    host?: 'gcp' | 'self'
    source: {
        webm?: string
        mp4: string
    }
    loop: boolean
    caption?: string
    link?: string
    linkIcon?: boolean
    title: string
    controls?: boolean
    autoPlay?: boolean
    className?: string
    thumbnail?: string
}

const hosts = {
    gcp: 'https://storage.googleapis.com/sourcegraph-assets/',
    self: '',
}

export const Video: FunctionComponent<Video & TelemetryProps> = ({
    host = 'gcp',
    source,
    loop,
    caption,
    link,
    linkIcon,
    title,
    controls = false,
    autoPlay = true,
    className,
    thumbnail,
    telemetryRecorder,
}) => (
    <figure>
        <video
            className={classNames('w-full', className)}
            width={1280}
            height={720}
            autoPlay={autoPlay}
            muted={true}
            loop={loop}
            playsInline={true}
            controls={controls}
            poster={thumbnail}
            title={title}
            // GCS does not set cookies, so we don't want Cookiebot to block this video based on consent
            data-cookieconsent="ignore"
            onPlay={() => telemetryRecorder.recordEvent('video', 'play', { privateMetadata: { title } })}
        >
            <source type="video/webm" src={`${hosts[host]}${source.webm}.webm`} data-cookieconsent="ignore" />
            <source type="video/mp4" src={`${hosts[host]}${source.mp4}.mp4`} data-cookieconsent="ignore" />
        </video>
        {caption && (
            <figcaption className="mt-3">
                {link ? (
                    <a href={link} className="flex font-normal not-italic">
                        {caption}
                        {linkIcon && <OpenInNewIcon className="my-auto ml-2" size={18} />}
                    </a>
                ) : (
                    caption
                )}
            </figcaption>
        )}
    </figure>
)

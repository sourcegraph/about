import { FunctionComponent } from 'react'

import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

import { getEventLogger } from '../hooks/eventLogger'

interface Video {
    host?: 'gcp' | 'self'
    source: {
        webm: string
        mp4: string
    }
    loop: boolean
    caption?: string
    link?: string
    linkIcon?: boolean
    title: string
    controls?: boolean
    autoPlay?: boolean
}

const hosts = {
    gcp: 'https://storage.googleapis.com/sourcegraph-assets/',
    self: '',
}

export const Video: FunctionComponent<Video> = ({
    host = 'gcp',
    source,
    loop,
    caption,
    link,
    linkIcon,
    title,
    controls = false,
    autoPlay = true,
}) => (
    <figure>
        <video
            className="w-full"
            width={1280}
            height={720}
            autoPlay={autoPlay}
            muted={true}
            loop={loop}
            playsInline={true}
            controls={controls}
            title={title}
            // GCS does not set cookies, so we don't want Cookiebot to block this video based on consent
            data-cookieconsent="ignore"
            onPlay={() => getEventLogger().log('StaticVideoPlayed', {title}, {title})}
        >
            <source type="video/webm" src={`${hosts[host]}${source.webm}.webm`} data-cookieconsent="ignore" />
            <source type="video/mp4" src={`${hosts[host]}${source.mp4}.mp4`} data-cookieconsent="ignore" />
        </video>
        {caption && (
            <figcaption className="mt-3">
                {link ? (
                    <a href={link} className="flex font-normal not-italic">
                        {caption}
                        {linkIcon && <OpenInNewIcon className="my-auto ml-xxs" size={18} />}
                    </a>
                ) : (
                    caption
                )}
            </figcaption>
        )}
    </figure>
)

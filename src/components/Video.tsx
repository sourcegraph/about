import { FunctionComponent } from 'react'

interface Video {
    host?: 'gcp' | 'self'
    source: {
        webm: string
        mp4: string
    }
    loop: boolean
    showCaption?: boolean
    caption: string
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
    showCaption = false,
    title,
    controls = false,
    autoPlay = true,
}) => (
    <figure>
        <video
            className="w-100 h-auto shadow"
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
        >
            <source type="video/mp4" src={`${hosts[host]}${source.mp4}.mp4`} data-cookieconsent="ignore" />
            <source type="video/webm" src={`${hosts[host]}${source.webm}.webm`} data-cookieconsent="ignore" />
            {caption && caption}
        </video>
        {showCaption && <figcaption>{caption}</figcaption>}
    </figure>
)

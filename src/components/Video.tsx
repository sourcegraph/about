import { FunctionComponent } from 'react'

interface Video {
    mp4: string
    webm: string
    loop: boolean
    showCaption?: boolean
    caption: string
    title: string
    controls?: boolean
    autoPlay?: boolean
}

export const Video: FunctionComponent<Video> = ({
    mp4,
    webm,
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
            <source type="video/mp4" src={mp4} data-cookieconsent="ignore" />
            <source type="video/webm" src={webm} data-cookieconsent="ignore" />
            {caption && caption}
        </video>
        {showCaption && <figcaption>{caption}</figcaption>}
    </figure>
)

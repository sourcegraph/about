import { FunctionComponent } from 'react'

interface Video {
    source: {
        webm: string
        mp4: string
    }
    loop: boolean
    caption: string // can also be used for alt
    title: string
}

export const Video: FunctionComponent<Video> = ({ source, loop, caption, title }) => (
    <figure>
        <video
            className="w-100 h-auto shadow"
            width={1280}
            height={720}
            autoPlay={true}
            muted={true}
            loop={loop}
            playsInline={true}
            controls={false}
            title={title}
            // GCS does not set cookies, so we don't want Cookiebot to block this video based on consent
            data-cookieconsent="ignore"
        >
            <source
                type="video/webm"
                src={`https://storage.googleapis.com/sourcegraph-assets/${source.webm}.webm`}
                data-cookieconsent="ignore"
            />
            <source
                type="video/mp4"
                src={`https://storage.googleapis.com/sourcegraph-assets/${source.mp4}.mp4`}
                data-cookieconsent="ignore"
            />
            {caption && <figcaption>{caption}</figcaption>}
        </video>
    </figure>
)

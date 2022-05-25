import { FunctionComponent } from 'react'

export const Video: FunctionComponent<{ filePath: string }> = ({ filePath }) => (
    <video
        className="w-100 h-auto shadow"
        width={1280}
        height={720}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        controls={false}
        // GCS does not set cookies, so we don't want Cookiebot to block this video based on consent
        data-cookieconsent="ignore"
    >
        <source
            type="video/webm"
            src={`https://storage.googleapis.com/sourcegraph-assets/${filePath}.webm`}
            data-cookieconsent="ignore"
        />
        <source
            type="video/mp4"
            src={`https://storage.googleapis.com/sourcegraph-assets/${filePath}.mp4`}
            data-cookieconsent="ignore"
        />
    </video>
)

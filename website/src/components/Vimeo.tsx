import React from 'react'

// Params at https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters
export const Vimeo: React.FunctionComponent<{
    className?: string
    id: number
    title?: string
    byline?: string
    muted?: boolean
    controls?: boolean
    color?: string
    autoplay?: boolean
    autopause?: boolean
    loop?: boolean
    time?: string
    texttrack?: string
}> = ({
    className = '',
    id,
    title = '',
    byline = '',
    muted = true,
    controls = true,
    color = '0CB6F4',
    autoplay = false,
    autopause = true,
    loop = false,
    time = '0',
    texttrack = 'en.subtitles',
}) => (
    <div className={`vimeo-embed embed-responsive embed-responsive-16by9 ${className}`}>
        <iframe
            className="embed-responsive-item"
            src={`https://player.vimeo.com/video/${id}?color=${color}&title=${title}&byline=${byline}&muted=${muted}&controls=${controls}&autoplay=${autoplay}&autopause=${autopause}&loop=${loop}&time=${time}&texttrack=${texttrack}`}
            allow="fullscreen"
        />
    </div>
)

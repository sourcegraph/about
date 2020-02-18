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
    autopause = false,
    loop = false,
    time = '0',
    texttrack = 'en.subtitles',
}) => (
    <div className={`vimeo-embed embed-responsive embed-responsive-16by9 ${className}`}>
        <iframe
            className="embed-responsive-item"
            src={`https://player.vimeo.com/video/${id}?color=${color}&title=${title}&byline=${byline}&muted=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&autoplay=${autoplay ? 1 : 0}&autopause=${autopause ? 1 : 0}&loop=${loop ? 1 : 0}&time=${time}&texttrack=${texttrack}`} allow="autoplay; fullscreen"
        />
    </div>
)

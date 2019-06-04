import React from 'react'

// Params at https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters
export const Vimeo: React.FunctionComponent<{
    className?: string
    id: number
    title: string
    byline: string
    muted: true
    controls: boolean
    color: string
    autoplay: boolean
    loop: boolean
    time: string
    texttrack: string
}> = ({
    className = '',
    id,
    title = '',
    byline = '',
    muted = true,
    controls = true,
    color = '0CB6F4',
    autoplay = false,
    loop = false,
    time = '0',
    texttrack = 'en.subtitles',
}) => (
    <div className={`vimeo-embed ${className}`}>
        <iframe
            src={`https://player.vimeo.com/video/${id}?title=${title}&amp;byline=${byline}&amp;muted=${muted}&amp;controls=${controls}&amp;autoplay=${autoplay}&amp;&loop=${loop}&amp;time=${time}&amp;texttrack=${texttrack}`}
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
        />
    </div>
)

import { ReactFragment } from 'react'

export interface Video {
    mp4: string
    webm: string
}

export interface VideoElement {
    el: HTMLVideoElement | null
    paused: boolean
}

export interface Features {
    productFeature: string
    title: string
    description: string | ReactFragment
    details: string[]
    ctaLink: string
    video: Video
}

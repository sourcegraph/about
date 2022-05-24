export interface Video {
    mp4: string
    webm: string
}

export interface VideoElement {
    el: HTMLVideoElement | null
    paused: boolean
}

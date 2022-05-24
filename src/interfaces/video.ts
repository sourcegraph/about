export interface IVideo {
    mp4: string
    webm: string
}

export interface IVideoElement {
    el: HTMLVideoElement | null
    paused: boolean
}

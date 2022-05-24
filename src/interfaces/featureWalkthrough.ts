import { ReactFragment } from 'react'

import { Video } from './video'

export interface Features {
    productFeature: string
    title: string
    description: string | ReactFragment
    details: string[]
    ctaLink: string
    video: Video
}

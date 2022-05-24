import { ReactFragment } from 'react'

import { IVideo } from './video'

export interface IFeatures {
    productFeature: string
    title: string
    description: string | ReactFragment
    details: string[]
    ctaLink: string
    video: IVideo
}

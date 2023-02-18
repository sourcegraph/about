import React from 'react'

import { BlogType, BlogTypeInfo } from '../../interfaces/posts'
import { PodcastSubscribeLinks } from '../Podcast/PodcastSubscribeLinks'

export const BLOG_TYPE_TO_INFO: Record<BlogType, BlogTypeInfo> = {
    blog: {
        title: 'Blog',
        baseUrl: '/blog',
        belowTitle: (
            <>
                <p className="mb-1 text-xl">
                    Our changelog, announcements, dev posts, and anything else we think you'll find interesting.
                </p>
            </>
        ),
        meta: {
            title: 'Sourcegraph blog',
            description: "Our changelog, announcements, dev posts, and anything else we think you'll find interesting.",
        },
    },
    press: {
        title: 'Press releases',
        baseUrl: '/press',
        meta: {
            title: 'Sourcegraph - Press releases',
            description: 'Press releases from Sourcegraph',
        },
    },
    podcast: {
        title: 'Sourcegraph Podcast',
        belowTitle: (
            <>
                <p className="my-2 text-xl">Conversations, stories, and insights from dev tool creators</p>
                <PodcastSubscribeLinks linkClassName="mx-1" />
            </>
        ),
        baseUrl: '/podcast',
        meta: {
            title: 'Sourcegraph Podcast',
            description: 'Conversations, stories, and insights from dev tool creators',
        },
    },
}

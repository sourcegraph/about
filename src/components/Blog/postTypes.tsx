import React from 'react'

import { BlogType, BlogTypeInfo } from '@interfaces/posts'

import { PodcastSubscribeLinks } from '../Podcast/PodcastSubscribeLinks'

export const BLOG_TYPE_TO_INFO: Record<BlogType, BlogTypeInfo> = {
    blog: {
        title: 'strings: the Sourcegraph blog',
        baseUrl: '/blog',
        belowTitle: (
            <>
                <p className="mb-1">A collection of characters, stories, and other elements</p>
            </>
        ),
        meta: {
            title: 'strings: the Sourcegraph blog',
            description:
                "News from Sourcegraph: our changelog, announcements, tech blog posts, and anything else we think you'll find interesting.",
        },
    },
    press: {
        title: 'Press release',
        baseUrl: '/press-release',
        meta: {
            title: 'Sourcegraph - Press release',
            description: 'Press release from Sourcegraph',
        },
    },
    podcast: {
        title: 'Sourcegraph Podcast',
        belowTitle: (
            <>
                <p className="mb-1">Conversations, stories, and insights from dev tool creators</p>
                <PodcastSubscribeLinks className="text-muted" linkClassName="mx-1" />
            </>
        ),
        baseUrl: '/podcast',
        meta: {
            title: 'Sourcegraph Podcast',
            description: 'Conversations, stories, and insights from dev tool creators',
        },
    },
}

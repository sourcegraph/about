import React from 'react'

import { BlogType, BlogTypeInfo } from '../../interfaces/posts'
import { PodcastSubscribeLinks } from '../Podcast/PodcastSubscribeLinks'

export const BLOG_TYPE_TO_INFO: Record<BlogType, BlogTypeInfo> = {
    blog: {
        title: 'Blog',
        baseUrl: '/blog',
        meta: {
            title: 'Sourcegraph blog',
            description: "Our changelog, announcements, dev posts, and anything else we think you'll find interesting.",
        },
    },
    changelog: {
        title: 'Changelog',
        baseUrl: '/changelog',
        meta: {
            title: 'Sourcegraph Changelog',
            description: "Our changelog, announcements, dev posts, and anything else we think you'll find interesting.",
        },
    },
    podcast: {
        title: 'Podcast',
        belowTitle: (
            <>
                <p className="my-2 text-xl">Conversations, stories, and insights from dev tool creators</p>
                <PodcastSubscribeLinks linkClassName="mx-1 btn-link" />
            </>
        ),
        baseUrl: '/podcast',
        meta: {
            title: 'Sourcegraph Podcast',
            description: 'Conversations, stories, and insights from dev tool creators',
        },
    },
}

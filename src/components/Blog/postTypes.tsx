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
    graphql: {
        title: 'GraphQL Summit 2017 liveblog',
        baseUrl: '/graphql',
        meta: {
            title: 'GraphQL Summit 2017 liveblog',
            description: 'Check out the official GraphQL Summit 2017 Liveblog proudly hosted by Sourcegraph.',
        },
    },
    go: {
        title: 'GopherCon and dotGo 2019 liveblogs',
        baseUrl: '/go',
        meta: {
            title: 'GopherCon and dotGo liveblogs',
            description: 'Check out the official GopherCon 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/gophercon-2019/gophercon-2019-banner.png',
        },
    },
    'strange-loop': {
        title: 'Strange Loop 2019 liveblog',
        baseUrl: '/strange-loop',
        meta: {
            title: 'Strange Loop 2019 liveblog',
            description: 'Check out the official Strange Loop 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/blog/strange-loop-banner-landscape.jpg',
        },
    },
    'github-universe': {
        title: 'GitHub Universe 2016 liveblog',
        baseUrl: '/github-universe',
        meta: {
            title: 'GitHub Universe 2016 liveblog',
            description: 'We liveblogged the 2016 GitHub Universe event.',
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

import React from 'react'
import { BlogPost } from './BlogPost'
import { ReleasePost } from './ReleasePost'
import { PressReleasePost } from './PressReleasePost'
import { PodcastPost } from './PodcastPost'
import { PodcastSubscribeLinks } from '../podcast/PodcastSubscribeLinks'
import { LinkPost } from './LinkPost'

export enum PostType {
    BlogPost,
    LinkPost,
    PressReleasePost,
    ReleasePost,
    PodcastPost,
}

export interface Post {
    frontmatter: {
        title: string
        description: string
        seoTitle: string
        seoDescription: string
        slug: string
        canonical: string
        publishDate: string
        heroImage?: string
        author?: string
        authorUrl?: string
        tags?: string[]
        changelogItems?: {
            url: string
            category: string
            description: string
        }[]
    }
    html: string
    excerpt: string
    fileAbsolutePath: string
    fields: {
        slug: string
        permalink: string
        blogType: BlogType
    }
}

export interface PostComponentProps {
    post: Post

    /** The URL to the post. */
    url: string

    /**
     * If true, show the full post. If false, only show a summary of the post (suitable for display
     * as an item in a list of posts).
     */
    full: boolean

    className?: string
    headerClassName?: string
    titleClassName?: string
    titleLinkClassName?: string
    tag?: 'li' | 'div'
}

export const POST_TYPE_TO_COMPONENT: Record<PostType, React.FunctionComponent<PostComponentProps>> = {
    [PostType.BlogPost]: BlogPost,
    [PostType.LinkPost]: LinkPost,
    [PostType.ReleasePost]: ReleasePost,
    [PostType.PressReleasePost]: PressReleasePost,
    [PostType.PodcastPost]: PodcastPost,
}

export const postType = (post: Post): PostType =>
    post.frontmatter.tags?.includes('release')
        ? PostType.ReleasePost
        : post.frontmatter.tags?.includes('press')
        ? PostType.PressReleasePost
        : post.frontmatter.tags?.includes('podcast')
        ? PostType.PodcastPost
        : post.frontmatter.style === 'short-inline-title'
        ? PostType.LinkPost
        : PostType.BlogPost

export enum BlogType {
    GopherCon = 'go',
    DotGo = 'go',
    GraphQLSummit = 'graphql',
    StrangeLoop = 'strange-loop',
    GitHubUniverse = 'github-universe',
    PressRelease = 'press',
    Podcast = 'podcast',
    Blog = 'blog',
}

export interface BlogTypeInfo {
    title: string
    belowTitle?: React.ReactFragment
    baseUrl: string
    meta: { title: string; description: string; image?: string }
}

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

export const urlToPost = (post: Post, blog: BlogTypeInfo): string =>
    post.frontmatter.style === 'short-inline-title' && post.frontmatter.canonical
        ? post.frontmatter.canonical
        : post.fields.permalink

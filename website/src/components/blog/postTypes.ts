import React from 'react'
import { BlogPost } from './BlogPost'
import { ReleasePost } from './ReleasePost'

export enum PostType {
    BlogPost,
    ReleasePost,
}

export interface Post {
    frontmatter: {
        title: string
        description: string
        slug: string
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
    [PostType.ReleasePost]: ReleasePost,
}

export const postType = (post: Post): PostType =>
    post.frontmatter.tags?.includes('release') ? PostType.ReleasePost : PostType.BlogPost

export enum BlogType {
    GopherCon = 'go',
    DotGo = 'go',
    GraphQLSummit = 'graphql',
    StrangeLoop = 'strange-loop',
    GitHubUniverse = 'github-universe',
    Blog = 'blog',
}

export interface BlogTypeInfo {
    title: string
    baseUrl: string
    meta: { title: string; description: string; image?: string }
}

export const BLOG_TYPE_TO_INFO: Record<BlogType, BlogTypeInfo> = {
    blog: {
        title: 'Blog',
        baseUrl: '/blog',
        meta: {
            title: 'Sourcegraph blog',
            description:
                "News from Sourcegraph: our changelog, announcements, tech blog posts, and anything else we think you'll find interesting.",
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
        title: 'GopherCon and dotGo liveblogs',
        baseUrl: '/go',
        meta: {
            title: 'GopherCon and dotGo liveblogs',
            description: 'Check out the official GopherCon 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/gophercon-2019/gophercon-2019-banner.png',
        },
    },
    'strange-loop': {
        title: 'Strange Loop liveblog',
        baseUrl: '/strange-loop',
        meta: {
            title: 'Strange Loop liveblog',
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
}

export const urlToPost = (post: Post, blog: BlogTypeInfo): string => `${blog.baseUrl}/${post.frontmatter.slug}`

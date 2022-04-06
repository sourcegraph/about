import { FunctionComponent } from 'react'

import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { BlogPost } from '../components/Blog/BlogPost'
import { LinkPost } from '../components/Blog/LinkPost'
import { PodcastPost } from '../components/Blog/PodcastPost'
import { PressReleasePost } from '../components/Blog/PressReleasePost'
import { ReleasePost } from '../components/Blog/ReleasePost'

export enum PostType {
    BlogPost,
    LinkPost,
    PressReleasePost,
    ReleasePost,
    PodcastPost,
}

export interface Post {
    frontmatter: FrontMatter
    content: string
    excerpt?: string
    fileAbsolutePath?: string
    fields?: {
        slug: string
        permalink: string
        blogType: BlogType
    }
}

export interface FrontMatter {
    slug?: string
    title?: string
    description?: string
    /** Controls the page's `<title>` for SEO and the browser tab label. Defaults to {@link title}. */
    externalTitle?: string
    /** Controls the page's `<meta name="description">` for SEO. Defaults to {@link description}. */
    externalDescription?: string
    canonical?: string
    publishDate?: string
    heroImage?: string
    author?: string
    authorUrl?: string
    tags?: string[]
    changelogItems?: {
        url: string
        category: string
        description: string
    }[]
    socialImage?: string
    layout?: string
    style?: string
}

export interface PostComponentProps {
    post: Post
    content: MDXRemoteSerializeResult | null

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
    renderTitleAsLink?: boolean
}

export const POST_TYPE_TO_COMPONENT: Record<PostType, FunctionComponent<PostComponentProps>> = {
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

export const urlToPost = (post: Post): string =>
    post.frontmatter.style === 'short-inline-title' && post.frontmatter.canonical
        ? post.frontmatter.canonical
        : post.frontmatter.slug
        ? post.frontmatter.slug
        : '/blog'

export interface Page {
    frontmatter: FrontMatter
    content: string
}

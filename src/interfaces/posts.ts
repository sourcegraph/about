import { FunctionComponent } from 'react'

import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { BlogListItem } from '../components/Blog/BlogListItem'
import { BlogPost } from '../components/Blog/BlogPost'
import { LinkPost } from '../components/Blog/LinkPost'
import { PodcastListItem } from '../components/Blog/PodcastListItem'
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

export enum PostIndexType {
    BlogPostIndex,
    PodcastIndex,
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
    /** Controls the page's `<PostIndexItemmeta name="description">` for SEO. Defaults to {@link description}. */
    externalDescription?: string
    canonical?: string
    publishDate?: string
    heroImage?: string
    author?: string | string[]
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
    audioSrc?: string
}

export interface PostComponentProps {
    post: Post
    content: MDXRemoteSerializeResult | null

    /** The URL to the post. */
    url: string

    className?: string
    headerClassName?: string
    titleClassName?: string
    titleLinkClassName?: string
    tag?: 'li' | 'div'
    renderTitleAsLink?: boolean
}

export interface PostIndexComponentProps {
    posts: PostIndexItem[]
    allPosts: PostIndexItem[]
}

export interface PostIndexItem {
    frontmatter: FrontMatter
    excerpt: string | MDXRemoteSerializeResult
    slugPath: string
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

export const POST_INDEX_TYPE_TO_COMPONENT: Record<PostIndexType, FunctionComponent<PostIndexItem>> = {
    [PostIndexType.BlogPostIndex]: BlogListItem,
    [PostIndexType.PodcastIndex]: PodcastListItem,
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

export const postIndexType = (frontmatter: FrontMatter): PostIndexType =>
    frontmatter.tags?.includes('podcast') ? PostIndexType.PodcastIndex : PostIndexType.BlogPostIndex

export enum BlogType {
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

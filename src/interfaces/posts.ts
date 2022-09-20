import { FunctionComponent, ReactNode } from 'react'

import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { LinkPost } from '../components/Blog/LinkPost'
import { PodcastListItem } from '../components/Blog/PodcastListItem'
import { PostLayout } from '../components/Blog/PostLayout'
import { PostListItem } from '../components/Blog/PostListItem'
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
    PressReleaseIndex,
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
    published?: boolean
    heroImage?: string
    authors?: {
        name: string
        url?: string
    }[]
    tags?: string[]
    changelogItems?: {
        url: string
        category: string
        description: string
    }[]
    socialImage?: string
    videoID?: string
    layout?: string
    style?: string
    audioSrc?: string
}

export interface PostComponentProps {
    post: Post
    content: MDXRemoteSerializeResult | null

    /** The URL to the post. */
    url: string

    headerClassName?: string
    titleClassName?: string
    renderTitleAsLink?: boolean
    className?: string
    tag?: 'li' | 'div' | 'article'
    contentClassName?: string
}

export interface PostIndexComponentProps {
    posts: PostIndexItemProps[]
    allPosts: PostIndexItemProps[]
}

export interface PostIndexItemProps {
    frontmatter: FrontMatter
    excerpt: string | MDXRemoteSerializeResult
    slugPath: string
    className?: string
    headerClassName?: string
    titleClassName?: string
    tag?: 'li' | 'div' | 'article'
    renderTitleAsLink?: boolean
    blogType: BlogType
    children?: ReactNode
}

export const POST_TYPE_TO_COMPONENT: Record<PostType, FunctionComponent<PostComponentProps>> = {
    [PostType.BlogPost]: PostLayout,
    [PostType.LinkPost]: LinkPost,
    [PostType.ReleasePost]: ReleasePost,
    [PostType.PressReleasePost]: PostLayout,
    [PostType.PodcastPost]: PostLayout,
}

export const POST_INDEX_TYPE_TO_COMPONENT: Record<PostIndexType, FunctionComponent<PostIndexItemProps>> = {
    [PostIndexType.BlogPostIndex]: PostListItem,
    [PostIndexType.PodcastIndex]: PodcastListItem,
    [PostIndexType.PressReleaseIndex]: PostListItem,
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
    frontmatter.tags?.includes('podcast')
        ? PostIndexType.PodcastIndex
        : frontmatter.tags?.includes('press')
        ? PostIndexType.PressReleaseIndex
        : PostIndexType.BlogPostIndex

export enum BlogType {
    PressRelease = 'press',
    Podcast = 'podcast',
    Blog = 'blog',
}

export const blogType = (frontmatter: FrontMatter): BlogType =>
    frontmatter.tags?.includes('podcast')
        ? BlogType.Podcast
        : frontmatter.tags?.includes('press')
        ? BlogType.PressRelease
        : BlogType.Blog

export interface BlogTypeInfo {
    title: string
    belowTitle?: ReactNode
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

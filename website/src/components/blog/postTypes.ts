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

export const postType = (post: Post['node']): PostType =>
    post.frontmatter.tags?.includes('release') ? PostType.ReleasePost : PostType.BlogPost

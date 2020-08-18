import React from 'react'
import { BlogPostListItem } from './BlogPostListItem'
import { ReleasePostListItem } from './ReleasePostListItem'

export enum PostType {
    BlogPost,
    ReleasePost,
}

export interface PostNode {
    node: {
        frontmatter: {
            title: string
            description: string
            slug: string
            publishDate: string
            heroImage?: string
            author?: string
            changelogItems?: {
                url: string
                category: string
                description: string
            }[]
        }
        html: string
        excerpt: string
    }
}

export interface PostProps {
    post: PostNode
}

/** Props common to all posts when rendered as list items. */
export interface PostListItemProps extends PostProps {
    blogType: string
    className?: string
    headerClassName?: string
    titleClassName?: string
    tag?: 'li'
}

export interface PostRenderOptions {
    /** The component used to render the post as an item in a list. */
    listItem: React.FunctionComponent<PostListItemProps>

    /** The component used to render the full post on its own page. */
    fullPage: React.Component<any>
}

export const POST_TYPE_OPTIONS: Record<PostType, PostRenderOptions> = {
    [PostType.BlogPost]: {
        listItem: BlogPostListItem,
        fullPage: BlogPost,
    },
    [PostType.ReleasePost]: {
        listItem: ReleasePostListItem,
        fullPage: ReleasePost,
    },
}

export const postType = (post: any): PostType =>
    post.node.frontmatter.tags?.includes('release') ? PostType.ReleasePost : PostType.BlogPost

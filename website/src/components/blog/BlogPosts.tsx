import * as React from 'react'
import { BlogPostSummary } from './BlogPostSummary'
import { ReleasePostSummary } from './ReleasePostSummary'

export interface BlogPostSummaryProps {
    blogType: string
    className?: string
    headerClassName?: string
    titleClassName?: string
    tag?: 'li'
}

interface Props {
    posts: any[]
    blogType: string
}

const postType = (post: any): 'blog' | 'release' =>
    post.node.frontmatter.tags?.includes('release') ? 'release' : 'blog'

export const BlogPosts: React.FunctionComponent<Props> = ({ posts, blogType }) => {
    const blogPostSummaryProps: BlogPostSummaryProps = {
        blogType,
        className: 'blog-posts__post card',
        headerClassName: 'card-header bg-white border-bottom-0 text-center',
        titleClassName: 'blog-posts__post-title',
    }
    return (
        <ul className="blog-posts container list-unstyled">
            {posts.map((post: any) =>
                postType(post) === 'blog' ? (
                    <BlogPostSummary post={post} key={post.node.frontmatter.slug} {...blogPostSummaryProps} />
                ) : (
                    <ReleasePostSummary post={post} key={post.node.frontmatter.slug} {...blogPostSummaryProps} />
                )
            )}
        </ul>
    )
}

import * as React from 'react'
import { PostListItemProps, POST_TYPE_OPTIONS, postType, PostNode } from './postTypes'

interface Props {
    posts: PostNode[]
    blogType: string
}

export const PostsList: React.FunctionComponent<Props> = ({ posts, blogType }) => {
    const postProps: Omit<PostListItemProps, 'post'> = {
        blogType,
        className: 'posts-list__post card',
        headerClassName: 'card-header bg-white border-bottom-0 text-center',
        titleClassName: 'posts-list__post-title',
    }
    return (
        <ul className="posts-list container list-unstyled">
            {posts.map(post => {
                const PostListItem = POST_TYPE_OPTIONS[postType(post)].listItem
                return <PostListItem post={post} key={post.node.frontmatter.slug} {...postProps} />
            })}
        </ul>
    )
}

import * as React from 'react'
import { POST_TYPE_TO_COMPONENT, postType, Post, PostComponentProps } from './postTypes'

interface Props {
    posts: { node: Post }[]
    blogType: string
}

export const PostsList: React.FunctionComponent<Props> = ({ posts, blogType }) => {
    const postProps: Omit<PostComponentProps, 'post'> = {
        full: false,
        blogType,
        className: 'posts-list__post card',
        headerClassName: 'card-header bg-white border-bottom-0 text-center',
        titleClassName: 'posts-list__post-title',
        titleLinkClassName: 'posts-list__post-title-link',
        tag: 'li',
    }
    return (
        <ul className="posts-list list-unstyled">
            {posts.map(post => {
                const C = POST_TYPE_TO_COMPONENT[postType(post.node)]
                return <C post={post.node} key={post.node.frontmatter.slug} {...postProps} />
            })}
        </ul>
    )
}

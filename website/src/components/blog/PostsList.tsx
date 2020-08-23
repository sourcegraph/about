import * as React from 'react'
import { POST_TYPE_TO_COMPONENT, postType, Post, PostComponentProps, BlogTypeInfo, urlToPost } from './postTypes'

interface Props {
    posts: { node: Post }[]
    blogInfo: BlogTypeInfo
}

export const PostsList: React.FunctionComponent<Props> = ({ posts, blogInfo }) => {
    const postProps: Omit<PostComponentProps, 'post' | 'url'> = {
        full: false,
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
                return (
                    <C
                        post={post.node}
                        url={urlToPost(post.node, blogInfo)}
                        key={post.node.frontmatter.slug}
                        {...postProps}
                    />
                )
            })}
        </ul>
    )
}

import { FunctionComponent } from 'react'

import { POST_TYPE_TO_COMPONENT, postType, PostComponentProps, urlToPost, Post } from '@interfaces/posts'

interface Props {
    posts: { node: Post }[]
}

export const PostsList: FunctionComponent<Props> = ({ posts }) => {
    const postProps: Omit<PostComponentProps, 'post' | 'url'> = {
        full: false,
        className: 'posts-list__post card',
        headerClassName: 'card-header bg-white border-bottom-0 text-center',
        titleClassName: 'posts-list__post-title',
        titleLinkClassName: 'posts-list__post-title-link',
        tag: 'li',
        content: null,
    }
    return (
        <ul className="posts-list list-unstyled">
            {posts.map(post => {
                const PostList = POST_TYPE_TO_COMPONENT[postType(post.node)]
                return (
                    <PostList
                        post={post.node}
                        url={urlToPost(post.node)}
                        key={post.node.frontmatter.slug}
                        renderTitleAsLink={true}
                        {...postProps}
                    />
                )
            })}
        </ul>
    )
}

import { FunctionComponent } from 'react'

import { POST_INDEX_TYPE_TO_COMPONENT, postIndexType, PostComponentProps, PostIndexItem } from '@interfaces/posts'

interface Props {
    posts: PostIndexItem[]
}

export const PostsList: FunctionComponent<Props> = ({ posts }) => {
    const postProps: Omit<PostComponentProps, 'post' | 'url'> = {
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
                const PostList = POST_INDEX_TYPE_TO_COMPONENT[postIndexType()]
                return (
                    <PostList
                        frontmatter={post.frontmatter}
                        excerpt={post.excerpt}
                        slugPath={post.slugPath}
                        key={post.frontmatter.title}
                        renderTitleAsLink={true}
                        {...postProps}
                    />
                )
            })}
        </ul>
    )
}

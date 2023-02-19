import { FunctionComponent } from 'react'

import {
    POST_INDEX_TYPE_TO_COMPONENT,
    postIndexType,
    PostComponentProps,
    PostIndexItemProps,
    blogType,
} from '../../interfaces/posts'

interface Props {
    posts: PostIndexItemProps[]
}

export const PostsList: FunctionComponent<Props> = ({ posts }) => {
    const postProps: Omit<PostComponentProps, 'post' | 'url'> = {
        className: 'mb-8 bg-white border-1 p-xs',
        headerClassName: 'text-center',
        tag: 'li',
        content: null,
    }
    return (
        <ul className="ml-0 list-none">
            {posts.map(post => {
                const PostList = POST_INDEX_TYPE_TO_COMPONENT[postIndexType(post.frontmatter)]

                return (
                    <PostList
                        frontmatter={post.frontmatter}
                        excerpt={post.excerpt}
                        slugPath={post.slugPath}
                        key={post.frontmatter.title}
                        renderTitleAsLink={true}
                        blogType={blogType(post.frontmatter)}
                        {...postProps}
                    />
                )
            })}
        </ul>
    )
}

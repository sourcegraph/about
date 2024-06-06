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
        className: 'py-6 border-t-1',
        tag: 'li',
        content: null,
    }
    return (
        <ol className="ml-0 grid list-none gap-x-12 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
            {posts.map(post => {
                const PostList = POST_INDEX_TYPE_TO_COMPONENT[postIndexType(post.frontmatter)]

                return (
                    <PostList
                        frontmatter={post.frontmatter}
                        excerpt={post.excerpt}
                        slugPath={post.slugPath}
                        key={post.frontmatter.title}
                        blogType={blogType(post.frontmatter)}
                        {...postProps}
                    />
                )
            })}
        </ol>
    )
}

import { FunctionComponent } from 'react'

import { Layout, BlogHeader, PostsList } from '@components'
import { Post, BlogTypeInfo } from '@interfaces/posts'

interface Props {
    blogInfo: BlogTypeInfo
    posts: { node: Post }[]
}

export const PostsListPage: FunctionComponent<Props> = ({ blogInfo, posts, children }) => (
    <Layout meta={blogInfo.meta} className="bg-light navbar-light">
        <div className="container-lg">
            <BlogHeader {...blogInfo} />
            <div className="pt-4">
                <PostsList posts={posts} />
            </div>
            {children}
        </div>
    </Layout>
)

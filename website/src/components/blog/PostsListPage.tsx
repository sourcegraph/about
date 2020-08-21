import { PageProps } from 'gatsby'
import * as React from 'react'
import { Post, BlogTypeInfo } from './postTypes'
import Layout from '../Layout'
import { BlogHeader } from './BlogHeader'
import { PostsList } from './PostsList'

interface Props extends Pick<PageProps, 'location'> {
    blogInfo: BlogTypeInfo
    posts: { node: Post }[]
}

export const PostsListPage: React.FunctionComponent<Props> = ({ blogInfo, posts, location, children }) => (
    <Layout location={location} meta={blogInfo.meta} className="bg-light-transparent navbar-light">
        <div className="container-lg">
            <BlogHeader {...blogInfo} />
            <div className="pt-4">
                <PostsList blogInfo={blogInfo} posts={posts} />
            </div>
            {children}
        </div>
    </Layout>
)

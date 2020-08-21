import { PageProps } from 'gatsby'
import * as React from 'react'
import { Post } from './postTypes'
import Layout from '../Layout'
import { BlogHeader } from './BlogHeader'
import { PostsList } from './PostsList'

interface Props extends Pick<PageProps, 'location'> {
    title: string
    meta: { title: string; description: string; image?: string }
    posts: { node: Post }[]
}

export const PostsListPage: React.FunctionComponent<Props> = ({ title, meta, posts, location, children }) => (
    <Layout location={location} meta={meta} className="bg-light-transparent navbar-light">
        <div className="container-lg">
            <BlogHeader title={title} />
            <div className="pt-4">
                <PostsList blogType="blog" posts={posts} />
            </div>
            {children}
        </div>
    </Layout>
)

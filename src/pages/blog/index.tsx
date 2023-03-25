import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { PostsListPage } from '../../components/Blog/PostsListPage'
import { BLOG_TYPE_TO_INFO } from '../../components/Blog/postTypes'
import { BlogType, PostIndexComponentProps } from '../../interfaces/posts'
import { getAllPublishedBlogPosts } from '../../lib'

const BlogHome: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => (
    <PostsListPage blogInfo={BLOG_TYPE_TO_INFO[BlogType.Blog]} posts={posts} allPosts={allPosts} />
)

export default BlogHome

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const publishedPosts = await getAllPublishedBlogPosts()
    if (!publishedPosts) {
        return { notFound: true }
    }
    return {
        props: {
            allPosts: publishedPosts,
            posts: publishedPosts.slice(0, 20),
            preview,
        },
    }
}

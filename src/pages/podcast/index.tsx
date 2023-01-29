import path from 'path'

import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { PostsListPage, BLOG_TYPE_TO_INFO } from '../../components'
import { BlogType, Post, PostIndexComponentProps } from '../../interfaces/posts'
import { getSortedSlugs, loadMarkdownFile, getMarkdownFiles, serializeMdxSource } from '../../lib'

const CONTENT_PARENT_DIRECTORY = './content/'

const PodcastHome: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => (
    <PostsListPage blogInfo={BLOG_TYPE_TO_INFO[BlogType.Podcast]} posts={posts} allPosts={allPosts} />
)

export default PodcastHome

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allSlugs = await getSortedSlugs('podcast')
    if (!allSlugs) {
        return { notFound: true }
    }
    const files = await getMarkdownFiles()
    if (!files) {
        return { notFound: true }
    }
    const posts = await Promise.all(
        allSlugs.map(async slug => {
            const filePath = files.records[slug.slugPath].filePath
            const file = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as Post
            const content = await serializeMdxSource(file.frontmatter.description ?? '')
            return { frontmatter: file.frontmatter, excerpt: content, slugPath: slug.slugPath }
        })
    )

    const publishedPosts = posts.filter(post => post.frontmatter.published)
    return {
        props: {
            allPosts: publishedPosts,
            posts: publishedPosts.slice(0, 20),
            preview,
        },
    }
}

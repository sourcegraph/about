import path from 'path'

import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { PostsListPage, BLOG_TYPE_TO_INFO } from '@components'
import { BlogType, PostProps, PostIndexComponentProps } from '@interfaces/postProps'
import { getSortedSlugs, loadMarkdownFile, getMarkdownFiles, serializeMdxSource } from '@lib'

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
            const file = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as PostProps
            const content = await serializeMdxSource(file.frontmatter.description ?? '')
            return { frontmatter: file.frontmatter, excerpt: content, slugPath: slug.slugPath }
        })
    )

    return {
        props: {
            allPosts: posts,
            posts: posts.slice(0, 20),
            preview,
        },
    }
}

import path from 'path'

import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { PostsListPage, BLOG_TYPE_TO_INFO } from '../../components'
import { BlogType, Post, PostIndexComponentProps } from '../../interfaces/posts'
import { getSortedSlugs, loadMarkdownFile, getMarkdownFiles, serializeMdxSource } from '../../lib'
import styles from './learn.module.css'

const CONTENT_PARENT_DIRECTORY = './content/'

const LearnHome: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => (
    <div>
        <h1>Sourcegraph University</h1>
        <div className={`${styles.test}`}>
            <div>This is a panel</div>
            <div>This is a panel</div>
        </div>
    </div>
    // <PostsListPage blogInfo={BLOG_TYPE_TO_INFO[BlogType.Podcast]} posts={posts} allPosts={allPosts} />

    // Units
    // - Daniel Stenburg, cURL
    // - conc
    // - codesearch.ai
    // - TypeScript ESLint
    // - Caddy
    // - NextAuth.js
    // - Qdrant
    //
    // Future units
    // - Zig
    // - Kelly Norton
    // - Nelson Elhage
    // - Han-Wen Nienhuys

    // Dev tool leaders talk series
    // - Jason Warner
    // - Jean Yang
    // - Max Howell
    // - Adam Berry
    // - Max Brunsfeld
    // - Sugu Sougoumarane
    // - swyx
    // - Cassidy Williams

)

export default LearnHome

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allSlugs = await getSortedSlugs('podcast')
    // if (!allSlugs) {
    //     return { notFound: true }
    // }
    // const files = await getMarkdownFiles()
    // if (!files) {
    //     return { notFound: true }
    // }
    // const posts = await Promise.all(
    //     allSlugs.map(async slug => {
    //         const filePath = files.records[slug.slugPath].filePath
    //         const file = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as Post
    //         const content = await serializeMdxSource(file.frontmatter.description ?? '')
    //         return { frontmatter: file.frontmatter, excerpt: content, slugPath: slug.slugPath }
    //     })
    // )

    // const publishedPosts = posts.filter(post => post.frontmatter.published)
    // return {
    //     props: {
    //         allPosts: publishedPosts,
    //         posts: publishedPosts.slice(0, 20),
    //         preview,
    //     },
    // }
    return {
        props: {
            posts: [],
            allPosts: [],
            preview,
        }
    }
}

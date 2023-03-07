import path from 'path'

import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { PostsListPage, BLOG_TYPE_TO_INFO, Layout, Hero, ContentSection } from '../../components'
import { StandardCallToAction } from '../../components/cta/StandardCallToAction'
import { BlogType, Post, PostIndexComponentProps } from '../../interfaces/posts'
import { getSortedSlugs, loadMarkdownFile, getMarkdownFiles, serializeMdxSource } from '../../lib'
import styles from './learn.module.scss'
import { buttonLocation } from '../../data/tracking'

const CONTENT_PARENT_DIRECTORY = './content/'

interface Unit {
    title: string
    subtitle: string
    description: string
    thumbnailUrl: string
}

const units: Unit[] = [
    {
        title: 'conc',
        subtitle: 'structured concurrency for Go',
        description: `Concurrency is one of Go's superpowers, but can be tricky to manage. So we open-sourced our library for managing concurrency in Go`,
        thumbnailUrl: 'https://user-images.githubusercontent.com/12631702/210295964-785cc63d-d697-420c-99ff-f492eb81dec9.svg'
    }
]

const LearnHome: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => (
    <Layout
        meta={{
            title: 'This is the title',
            description:
                'This is the description',
        }}
    >
        <h1 className={styles.mainHeader}>Sourcegraph University</h1>
        <div className={styles.cardContainer}>
        {units.map(unit => (
            <div className={styles.card}>
                <h1><span className={styles.title}>{unit.title}</span> <span className={styles.subtitle}>{unit.subtitle}</span></h1>
                <img src={unit.thumbnailUrl} />
                <p>{unit.description}</p>
            </div>
        ))}
        </div>
        {/* <div className={`${styles.test}`}>
            <div>
                <h2>conc</h2>
                <h3>Structured concurrency for Go</h3>
            </div>
            <div>This is another panel</div>
        </div> */}
    </Layout>

    // <div className={`${styles.test}`}>

    // <PostsListPage blogInfo={BLOG_TYPE_TO_INFO[BlogType.Podcast]} posts={posts} allPosts={allPosts} />

    // Units
    // - conc
    // - codesearch.ai
    // - TypeScript ESLint
    // - Caddy
    // - NextAuth.js
    // - Qdrant
    // - Daniel Stenburg, cURL
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

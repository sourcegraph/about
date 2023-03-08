import path from 'path'
import classNames from 'classnames'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { MDXRemote } from 'next-mdx-remote'
import { Layout, BlogHeader, BLOG_TYPE_TO_INFO } from '../../components'
import { getAllSlugs, getMarkdownFiles, loadMarkdownFile, serializeMdxSource } from '../../lib'
import styles from './learn.module.scss'

type FrontMatter = any
type Post = any

// interface FrontMatter {
//     slug?: string
//     title?: string
//     description?: string
//     /** Controls the page's `<title>` for SEO and the browser tab label. Defaults to {@link title}. */
//     externalTitle?: string
//     /** Controls the page's `<PostIndexItemmeta name="description">` for SEO. Defaults to {@link description}. */
//     externalDescription?: string
//     canonical?: string
//     publishDate?: string
//     published?: boolean
//     heroImage?: string
//     authors?: {
//         name: string
//         url?: string
//     }[]
//     tags?: string[]
//     changelogItems?: {
//         url: string
//         category: string
//         description: string
//     }[]
//     socialImage?: string
//     videoID?: string
//     layout?: string
//     style?: string
//     audioSrc?: string
// }

// interface Post {
//     frontmatter: FrontMatter
//     content: string
//     excerpt?: string
//     fileAbsolutePath?: string
//     fields?: {
//         slug: string
//         permalink: string
//     }
// }

export interface PageProps {
    post: Post
    content: MDXRemoteSerializeResult
}

const CONTENT_PARENT_DIRECTORY = './content/'

// interface PageProps {}

// const LearnPage: FunctionComponent<PageProps> = () => {
//     return (
//         <Layout meta={{
//             title: 'This is the title',
//             description: 'TODO description',
//         }}>
//             <div>This is a page</div>
//         </Layout>
//     )
// }


    // const title = post.frontmatter.title
    // const description = post.frontmatter.description ? post.frontmatter.description : post.excerpt
    // const image = post.frontmatter.socialImage
    // const videoID = post.frontmatter.videoID
    // const canonical = post.frontmatter.canonical
    // const externalTitle = post.frontmatter.externalTitle
    // const externalDescription = post.frontmatter.externalDescription
    // const meta = {
    //     title,
    //     image,
    //     videoID,
    //     description,
    //     externalTitle,
    //     externalDescription,
    //     canonical,
    // }

const LearnPage: NextPage<PageProps> = ({ post, content }) => {
    return (
        <Layout
            meta={
                {
                    /* TODO */
                }
            }
        >
            <article className={`${styles.learnPostContainer}`}>
                <div className={`mx-auto px-sm lg:container`}>
                    <h2 className={`${styles.header}`}>
                        Open source university
                    </h2>
                    <h3 className={styles.header}>
                        Uplevel your development by learning from the best of open source
                    </h3>
                </div>
                <div className="mt-8 bg-white">
                    <div className="mx-auto max-w-screen-xl">
                        <h1>
                            <span>{post.frontmatter.title}</span>
                            &nbsp;
                            <span className={styles.subtitle}>{post.frontmatter.subtitle}</span>
                        </h1>
                        <div>
                            <MDXRemote {...content} />
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export default LearnPage

export const getStaticPaths: GetStaticPaths = async () => {
    const allSlugs = await getAllSlugs()
    if (!allSlugs) {
        return { paths: [{ params: { slug: ['404'] } }], fallback: false }
    }
    const slugs = Object.keys(allSlugs.records.learn.recordSlugs)
    const paths = slugs.map(slug => ({ params: { slug: slug.split('/') } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    if (!params?.slug) {
        throw new Error('Missing slug')
    }
    const files = await getMarkdownFiles()
    if (!files) {
        return { notFound: true }
    }
    const fileSlug = `${(params.slug as string[]).join('/')}`
    const filePath = files.records[fileSlug].filePath
    const post = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as Post
    const content = await serializeMdxSource(post.content)

    return {
        props: {
            post,
            content,
            preview,
        },
    }
}

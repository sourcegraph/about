import path from 'path'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Layout, BlogHeader, BLOG_TYPE_TO_INFO } from '../../components'
import { Post, POST_TYPE_TO_COMPONENT, postType, urlToPost } from '../../interfaces/posts'
import { getAllSlugs, getMarkdownFiles, loadMarkdownFile, serializeMdxSource } from '../../lib'

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

const LearnPage: NextPage<PageProps> = ({ post, content }) => {
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

    return <Layout meta={{/* TODO */}}>
        <article>
            <div className="mx-auto px-sm lg:container">
                Learn header goes here
                {/* <BlogHeader {...blogInfo} /> */}
            </div>
            <div className="mt-8 bg-white">
                <div className="mx-auto max-w-screen-xl">
                    <div>Post goes here</div>
                    <h1>
                        <span>{post.frontmatter.title}</span>
                        {/* <span>{post.frontmatter.subtitle}</span> */}
                    </h1>
                </div>
            </div>
        </article>
    </Layout>
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

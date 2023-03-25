import path from 'path'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Layout } from '../../components'
import { BlogHeader } from '../../components/Blog/BlogHeader'
import { BLOG_TYPE_TO_INFO } from '../../components/Blog/postTypes'
import { DownloadAppCallToActionSection } from '../../components/cta/DownloadAppCallToActionSection'
import { Post, POST_TYPE_TO_COMPONENT, postType } from '../../interfaces/posts'
import { getAllSlugs, getMarkdownFiles, loadMarkdownFile, serializeMdxSource } from '../../lib'

export interface PageProps {
    post: Post
    content: MDXRemoteSerializeResult
}

const CONTENT_PARENT_DIRECTORY = './content/'

const BlogPage: NextPage<PageProps> = ({ post, content }) => {
    const title = post.frontmatter.title
    const description = post.frontmatter.description ? post.frontmatter.description : post.excerpt
    const image = post.frontmatter.socialImage
    const videoID = post.frontmatter.videoID
    const canonical = post.frontmatter.canonical
    const externalTitle = post.frontmatter.externalTitle
    const externalDescription = post.frontmatter.externalDescription
    const meta = {
        title,
        image,
        videoID,
        description,
        externalTitle,
        externalDescription,
        canonical,
    }

    const blogInfo = BLOG_TYPE_TO_INFO[post.fields?.blogType ?? 'blog']
    const PostTemplate = POST_TYPE_TO_COMPONENT[postType(post)]

    return (
        <Layout meta={meta}>
            <article className="mx-auto mb-xl max-w-screen-xl px-sm">
                <BlogHeader {...blogInfo} variant="post" />
                <PostTemplate post={post} content={content} className="max-w-[840px]" />
            </article>

            <DownloadAppCallToActionSection colorTheme="light" />
        </Layout>
    )
}

export default BlogPage

export const getStaticPaths: GetStaticPaths = async () => {
    const allSlugs = await getAllSlugs()
    if (!allSlugs) {
        return { paths: [{ params: { slug: ['404'] } }], fallback: false }
    }
    const slugs = Object.keys(allSlugs.records.blogposts.recordSlugs)
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

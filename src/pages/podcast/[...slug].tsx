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

const PodcastPage: NextPage<PageProps> = ({ post, content }) => {
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

    const podcastInfo = BLOG_TYPE_TO_INFO[post.fields?.blogType ?? 'podcast']
    const PostTemplate = POST_TYPE_TO_COMPONENT[postType(post)]

    return (
        <Layout meta={meta}>
            <article>
                <div className="container-lg">
                    <BlogHeader {...podcastInfo} />
                </div>
                <div className="post-template mt-5 bg-white">
                    <div className="container-lg">
                        <PostTemplate
                            post={post}
                            content={content}
                            url={urlToPost(post)}
                            className="post-template__post podcast-post max-w-750 tw-mx-auto"
                            headerClassName="card-header bg-white border-bottom-0 tw-text-center tw-pt-md"
                            contentClassName="podcast-post__body"
                        />
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export default PodcastPage

export const getStaticPaths: GetStaticPaths = async () => {
    const allSlugs = await getAllSlugs()
    if (!allSlugs) {
        return { paths: [{ params: { slug: ['404'] } }], fallback: false }
    }
    const slugs = Object.keys(allSlugs.records.podcast.recordSlugs)
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

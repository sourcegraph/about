import path from 'path'

import classNames from 'classnames'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { HubSpotForm, Layout } from '../../components'
import { BlogHeader } from '../../components/Blog/BlogHeader'
import { BLOG_TYPE_TO_INFO } from '../../components/Blog/postTypes'
import { DownloadAppCallToActionSection } from '../../components/cta/DownloadAppCallToActionSection'
import { Post, POST_TYPE_TO_COMPONENT, postType } from '../../interfaces/posts'
import { getAllSlugs, getMarkdownFiles, loadMarkdownFile, serializeMdxSource } from '../../lib'

import styles from '../../styles/CustomHubspotForm.module.scss'

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
            <header className="mx-auto max-w-7xl px-8 lg:px-10 2xl:px-0">
                <BlogHeader {...blogInfo} title="Back to Blog" variant="post" />
            </header>

            <div className="mx-auto flex max-w-7xl flex-col gap-x-14 px-8 lg:flex-row lg:px-10 2xl:px-0">
                <article className="flex-1">
                    <PostTemplate post={post} content={content} />
                </article>

                <aside className="mt-36 hidden md:block md:w-[350px]">
                    <div className="sticky top-36">
                        <div
                            className={classNames(
                                styles.blogForm,
                                'flex flex-col items-start rounded-xl border border-gray-200 p-6'
                            )}
                        >
                            <h3 className="mb-4 text-xl normal-case leading-snug">
                                Subscribe for the latest code AI news and product updates
                            </h3>

                            <HubSpotForm
                                formId="ab908b80-d1ed-44fd-968c-505c85ed72ac"
                                inlineMessage="Thanks, you are now subscribed!"
                            />
                        </div>
                    </div>
                </aside>
            </div>

            <DownloadAppCallToActionSection
                href="https://sourcegraph.com/cody"
                title="Get Cody, the AI coding assistant"
                description="Cody makes it easy to write, fix, and maintain code."
                colorTheme="light"
                buttonText="Learn more"
            />
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

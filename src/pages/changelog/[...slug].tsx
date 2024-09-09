import path from 'path'

import { useEffect, useState } from 'react'

import { ArrowUpRight } from 'lucide-react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Layout, HubSpotForm } from '../../components'
import { BlogHeader } from '../../components/Blog/BlogHeader'
import { BLOG_TYPE_TO_INFO } from '../../components/Blog/postTypes'
import { ChangelogLayout } from '../../components/Changelog/ChangelogLayout'
import { XIcon } from '../../components/Changelog/icons'
import { Page } from '../../interfaces/posts'
import { getAllSlugs, getMarkdownFiles, loadMarkdownFile, serializeMdxSource } from '../../lib'

export type Components = import('mdx/types').MDXComponents

interface PageProps {
    date: string
    content: MDXRemoteSerializeResult
    keywords: string[],
    post: any
}

const CONTENT_PARENT_DIRECTORY = './content/'

const getMainUrl = (fullUrl: string): string => {
    const url = new URL(fullUrl);
    return `${url.origin}${url.pathname.split('/').slice(0, 3).join('/')}`
}

const TermPage: NextPage<PageProps> = ({ post, content }) => {
    const [xPostUrl, setXPostUrl] = useState('')
    const relatedTopics = post?.frontmatter?.relatedTopics

    useEffect(() => {
        const fullUrl = window.location.href
        const extractedMainUrl = getMainUrl(fullUrl);

        const completeURL = `https://x.com/intent/tweet?url=${extractedMainUrl}&via=Sourcegraph&text=Check out the latest changes from Sourcegraph:`

        setXPostUrl(completeURL);
    }, []);

    const {
        title,
        videoID,
        description,
        externalTitle,
        externalDescription,
        canonical,
    } = post?.frontmatter

    const meta = {
        title,
        image: 'https://sourcegraph.com/assets/changelog/sourcegraph-changelog-og.png',
        videoID,
        description: description || post.excerpt,
        externalTitle,
        externalDescription,
        canonical,
    }

    const blogInfo = BLOG_TYPE_TO_INFO?.changelog

    return (
        <Layout meta={meta} className='bg-gray-50'>
            <header className="mx-auto max-w-7xl px-8 lg:px-10 2xl:px-0">
                <BlogHeader {...blogInfo} title="Back to Changelog" variant="post" />
            </header>
            <div className="min-h-scree flex items-center justify-center">
                <div className="mx-auto flex max-w-7xl flex-col gap-x-14 px-8 lg:flex-row lg:px-10 2xl:px-0">
                    <article className="flex-1">
                        <ChangelogLayout post={post} content={content} />
                    </article>
                    <aside className="w-full md:mt-0 md:w-1/4 md:pl-6">
                        <div className="space-y-6">
                            <h2 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-gray-700 mb-4 mt-2">
                                Related
                            </h2>
                            <div>
                                {relatedTopics?.map((topic: any) => 
                                    <div
                                        key={topic.title}
                                        className="text-gray-700 font-sans text-sm font-normal leading-[150%] mt-2"
                                    >
                                        <span className="inline-flex items-center">
                                        <a
                                            href={topic.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-inherit no-underline"
                                        >
                                            <span className="truncate sm:max-w-none">
                                            {topic.title}
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 ml-1  sm:inline" />
                                        </a>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-6 mt-8">
                            <h2 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-gray-700 mb-4 mt-6">
                                SHARE
                            </h2>
                            <span className='self-stretch text-gray-700 font-sans text-sm font-normal leading-[150%] tracking-[0px]' >Share on X (Twitter) to continue the  discussion with others</span>
                        </div>
                        <button
                            type="submit"
                            className="flex px-6 py-2 justify-center items-center gap-2 rounded border border-violet-700 mt-6"
                            onClick={() => window.open(xPostUrl, '_blank', 'noopener,noreferrer')}
                        >
                            <span>
                                <XIcon />
                            </span>
                            <span className='text-violet-700 font-sans text-base font-semibold leading-[150%] tracking-[-0.25px]'>
                                Post
                            </span>
                        </button>
                        <div className="mt-8 subsribe-changelog-button">
                            <h2 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-gray-700 mt-8 mb-4">SUBSCRIBE</h2>
                            <HubSpotForm
                                formId="ab908b80-d1ed-44fd-968c-505c85ed72ac"
                                inlineMessage="Thanks, you are now subscribed!"
                            />
                        </div>
                    </aside>
                </div>
            </div>
        </Layout>
    )
}

export default TermPage

export const getStaticPaths: GetStaticPaths = async () => {
    const allSlugs = await getAllSlugs()

    if (!allSlugs || Object.keys(allSlugs).length === 0) {
        return { paths: [{ params: { slug: ['404'] } }], fallback: false }
    }

    const slugs = Object.keys(allSlugs.records.changelog.recordSlugs)
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

    const post = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as Page
    const content = await serializeMdxSource(post.content)

    return {
        props: {
            post,
            content,
            preview,
        },
    }
}

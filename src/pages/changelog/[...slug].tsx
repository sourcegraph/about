import path from 'path'

import { useEffect, useState } from 'react'

import { ArrowUpRight } from 'lucide-react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Layout, HubSpotForm, Alert, Badge, Blockquote, Figure, TableWrapper, Video, YouTube  } from '../../components'
import changelogComponents from '../../components/Changelog'
import { XIcon } from '../../components/Changelog/icons'
import { PostDetailsInfo } from '../../components/Changelog/PostDetailsInfo'
import { Page } from '../../interfaces/posts'
import { getAllSlugs, getMarkdownFiles, loadMarkdownFile, serializeMdxSource } from '../../lib'
import { formatDate } from '../../lib/utils'

export type Components = import('mdx/types').MDXComponents

const components = { ...changelogComponents, Alert, Badge, Blockquote, HubSpotForm, Figure, OpenInNewIcon, TableWrapper, Video, YouTube }

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

    const title = post.frontmatter.title
    const name = post?.frontmatter?.authors?.[0]?.name ?? ''
    const avatar = post?.frontmatter?.authors?.[0]?.avatar ?? ''
    const version = post?.frontmatter?.version
    const publishDate = post?.frontmatter?.publishDate
    const tags = post?.frontmatter?.tags
    const relatedTopics = post?.frontmatter?.relatedTopics

    useEffect(() => {
        const fullUrl = window.location.href
        const extractedMainUrl = getMainUrl(fullUrl);

        const completeURL = `https://x.com/intent/tweet?url=${extractedMainUrl}&via=Sourcegraph&text=Check out the latest changes from Sourcegraph:`

        setXPostUrl(completeURL);
    }, []);

    return (
        <Layout className='bg-gray-50'>
            <div className="min-h-scree flex items-center justify-center ml-6">
                <div className="container mx-auto flex w-full md:w-[80%] flex-col p-6 md:flex-row">
                    <div className="flex w-full flex-col md:w-3/4">
                        <div className="mb-12 flex flex-col md:flex-row">
                            <aside className="hidden md:block w-1/4 pr-6" />
                            <div className="ml-0 md:ml-4 w-full md:w-[60%]">
                                <h2>{title}</h2>
                                <PostDetailsInfo
                                    version={version}
                                    avatar={avatar}
                                    username={name}
                                    keywords={tags}
                                    date={formatDate(publishDate)}
                                />
                                <MDXRemote {...content} components={components} />
                            </div>
                        </div>
                    </div>
                    {/* Right part */}
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

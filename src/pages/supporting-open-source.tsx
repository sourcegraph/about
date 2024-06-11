import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'
import Link from 'next/link'

import { ContentSection, Layout, Heading } from '../components'
import { PostsList } from '../components/Blog/PostsList'
import { useLoadMoreAndSearch } from '../hooks/loadMoreAndSearch'
import { Post, PostIndexComponentProps } from '../interfaces/posts'
import { getAllPublishedBlogPosts } from '../lib'

const socialMediaStyles = 'text-xl text-gray-400 hover:text-gray-300 transition-colors duration-300'

const Community: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => {
    const { currentRecords, page, setPage, filteredRecords } = useLoadMoreAndSearch(allPosts, 1, posts, 2)

    return (
        <Layout
            meta={{
                title: 'Sourcegraph Open Source Support Program',
                description:
                    'At Sourcegraph, we are committed to supporting the open source projects that form the backbone of our products.',
            }}
            className="community-page bg-gray-50"
        >
            <ContentSection parentClassName="md:!pt-16 md:!pb-8 flex items-center" className="py-4 md:py-0 lg:px-6">
                <div className="flex max-w-[624px] md:max-w-2xl flex-col gap-6 text-center lg:max-w-3xl px-2 sm:px-4 md:px-0 mdi:px-4">
                    <Heading size="h1" className="text-gray-700">
                        Supporting open source
                    </Heading>
                    <Heading size="h3" className="leading-[31.2px] !tracking-[-0.25px] text-gray-500">
                        At Sourcegraph, we are committed to supporting the open source projects that form the backbone
                        of our products.
                    </Heading>
                </div>
            </ContentSection>

            <ContentSection parentClassName="md:mt-0 md:pt-8 md:pb-0" className="lg:px-6">
                <div className="flex-1">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfMHmJrqpg0SNpMxNyxUi2VPbGUBwvkrET1oLZun-bojaxrPA/viewform?embedded=true"
                        width="100%"
                        height="1252"
                        title="Cody Pro credits form"
                    >
                        Loading…
                    </iframe>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!pt-[10px] !pb-0" className="px-6">
                <div className="flex flex-col justify-start pb-8 md:flex-row md:justify-between md:py-24">
                    <div className="flex flex-col md:w-1/2">
                        <Heading size="h2" className="pb-sm !leading-[40px] !tracking-[-1px] text-gray-700">
                            Funding
                        </Heading>
                        <p className="mb-0 max-w-[534px] font-sans text-lg tracking-[-0.25px] text-gray-700">
                            We actively contribute to various funding platforms, including thanks.dev, Open Collective,
                            Stackaid, GitHub Sponsors, and more, to ensure the sustainability of these critical
                            projects.
                        </p>
                    </div>
                    <div className="mt-lg flex flex-col gap-sm md:mt-0 md:px-4xl">
                        <div className="flex w-full flex-wrap justify-start gap-lg md:justify-center">
                            <Link
                                href="https://github.com/orgs/sourcegraph-community/sponsoring"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="/community/github-sponsors-mona.svg"
                                    className="h-[97px] w-[81px]"
                                    alt="GitHub Sponsors link"
                                />
                            </Link>
                            <Link
                                href="https://www.stackaid.us/github/sourcegraph"
                                className="self-center"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="/community/stackaid_dark_light.svg"
                                    className="h-[31px] w-[223px]"
                                    alt="StackAid link"
                                />
                            </Link>
                        </div>
                        <div className="flex w-full flex-wrap items-center justify-start gap-lg md:justify-center">
                            <Link href="https://opencollective.com/sourcegraph" target="_blank" rel="noopener">
                                <img
                                    src="/community/opencollective-ar21.svg"
                                    className="h-[58px] w-[252px]"
                                    alt="Open collective link"
                                />
                            </Link>
                            <Link href="https://fossfunders.com/" target="_blank" rel="noopener">
                                <img
                                    src="/community/foss-funders.svg"
                                    className="h-[87px] w-[123px]"
                                    alt="Foss funders link"
                                />
                            </Link>
                        </div>
                        <div className="flex w-full flex-row flex-wrap justify-start gap-lg md:justify-center">
                            <Link href="https://codemirror.net/" target="_blank" rel="noopener">
                                <img
                                    src="/community/code-mirror.svg"
                                    className="h-[87px] w-[87px]"
                                    alt="Code mirror link"
                                />
                            </Link>
                            <Link
                                href="https://thanks.dev/d/gh/sourcegraph/dependencies"
                                className="self-center"
                                target="_blank"
                                rel="noopener"
                            >
                                <img
                                    src="/community/thanks-dev.svg"
                                    className="h-[36px] w-[197px]"
                                    alt="Thanks dev link"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection parentClassName="mt-6 md:mt-0 md:pt-8 md:pb-0" className="lg:px-6">
                <Heading size="h2" className="text-center !leading-[40px] !tracking-[-1px] md:text-left">
                    Guest blog posts
                </Heading>
                <div className="flex-1 p-4 sm:pt-sm">
                    {!currentRecords.length ? (
                        <div className="col-span-2 mx-auto mb-3xl text-center">
                            <p className="text-lg">Blogs written by our Guests will appear here.</p>
                        </div>
                    ) : (
                        <PostsList posts={currentRecords} />
                    )}

                    {currentRecords.length < filteredRecords.length && (
                        <div className="flex justify-center">
                            <button type="button" className="btn btn-primary my-8" onClick={() => setPage(page + 1)}>
                                Load more
                            </button>
                        </div>
                    )}
                </div>
            </ContentSection>
        </Layout>
    )
}

export default Community

export const getStaticProps: GetStaticProps<{
    allPosts: Post[]
    posts: Post[]
}> = async ({ preview = false }) => {
    const publishedPosts = await getAllPublishedBlogPosts('guest-post')
    return {
        props: {
            allPosts: publishedPosts ?? [],
            posts: publishedPosts?.slice(0, 2) ?? [],
            preview,
        },
    }
}

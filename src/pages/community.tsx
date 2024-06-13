import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FaDiscord, FaGithub } from 'react-icons/fa'

import { ContentSection, Layout, Heading } from '../components'
import { PostsList } from '../components/Blog/PostsList'
import EventsList from '../components/EventsList'
import { buttonStyle, buttonLocation } from '../data/tracking'
import { useLoadMoreAndSearch } from '../hooks/loadMoreAndSearch'
import { Post, PostIndexComponentProps } from '../interfaces/posts'
import { getAllPublishedBlogPosts } from '../lib'

const socialMediaStyles = 'text-xl text-gray-400 hover:text-gray-300 transition-colors duration-300'

const expertsData = [
    {
        name: 'Kynlo Akari',
        role: 'Developer',
        image: '/community/kynlo_akari.jpeg',
        links: {
            discord: 'https://discord.com/users/937994994868957184',
            github: 'https://github.com/Kynlos',
            twitter: 'https://twitter.com/Kynlos',
        },
    },
    {
        name: 'Deepak Kumar',
        role: 'Software Engineer',
        image: '/community/deepak.jpeg',
        links: {
            discord: 'https://discord.com/users/720294116885397635',
            github: 'https://github.com/deepak2431',
            twitter: 'https://twitter.com/deepakdk3478',
        },
    },
    {
        name: 'Tino Wening',
        role: 'Developer',
        image: '/community/tino.jpeg',
        links: {
            discord: 'https://discord.com/users/518125939910115353',
            github: 'https://github.com/PriNova',
            twitter: 'https://twitter.com/PriNova75',
        },
    },
]

const CommunityExpert: FunctionComponent<{ expert: typeof expertsData[0] }> = ({ expert }) => (
    <div className="flex w-full flex-col items-center">
        <img src={expert.image} alt="avatar" className="mb-4 h-12 w-12 rounded-full" />
        <Heading size="h4" className="pb-1">
            {expert.name}
        </Heading>
        <p className="text-grey-700 mb-5 text-sm leading-[19.88px]">{expert.role}</p>
        <div className="flex gap-4">
            <a href={expert.links.discord}>
                <FaDiscord className={socialMediaStyles} />
            </a>
            <a href={expert.links.twitter}>
                <img className={`h5 w-5 ${socialMediaStyles}`} src="/icons/x-logo.svg" alt="x-logo" />
            </a>
            <a href={expert.links.github}>
                <FaGithub className={socialMediaStyles} />
            </a>
        </div>
    </div>
)

const Community: FunctionComponent<PostIndexComponentProps> = ({ posts, allPosts }) => {
    const { currentRecords, page, setPage, filteredRecords } = useLoadMoreAndSearch(allPosts, 1, posts, 2)

    return (
        <Layout
            meta={{
                title: 'Welcome to the Sourcegraph Community',
                description:
                    "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
            }}
            className="community-page bg-gray-50"
        >
            <ContentSection parentClassName="md:!py-24" className="py-4 md:py-0 lg:px-6">
                <div className="flex flex-col">
                    <Heading size="h1" className="mb-6 text-center md:text-left">
                        Welcome to the Sourcegraph Community
                    </Heading>
                    <div className="flex max-w-3xl flex-col justify-center text-gray-500 md:justify-center">
                        <Heading size="h3" className="text-center leading-[30px] !tracking-[-0.25px] md:text-left">
                            Our community is driven by a shared passion for open source and developer productivity,
                            fueled by the power of AI tools & code search.
                        </Heading>
                        <br />
                        <p className="mb-8 text-center text-lg tracking-[-0.25px] md:text-left">
                            Whether you’re a seasoned veteran or a budding enthusiast, join us to explore, learn, and
                            collaborate as we collectively transform how we read, write, and fix code.
                        </p>
                        <div className="flex justify-center md:justify-start ">
                            <a
                                className="btn btn-primary mr-4 w-fit tracking-[-0.25px]"
                                href="https://discord.com/servers/sourcegraph-969688426372825169"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                                title="Join our Discord"
                            >
                                Discord
                            </a>
                            <a
                                className="btn btn-outline btn-outline-primary w-fit tracking-[-0.25px]"
                                href="https://community.sourcegraph.com/"
                                data-button-style={buttonStyle.outline}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                                target="_blank rel=noopener"
                                title="Community support"
                            >
                                Community support
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="md:!py-0" className="lg:px-6">
                <div className="sg-community-experts mx-auto flex max-w-screen-xl flex-col items-center rounded-lg border border-gray-200 py-16">
                    <div className="flex max-w-[840px] flex-col items-center">
                        <Heading size="h2" className="max-w-[672px] pb-4 text-center !leading-[100%] !tracking-[-1px]">
                            Our experts are the heart of our community
                        </Heading>
                        <p className="text-center text-lg tracking-[-0.25px]">
                            Our experts embody the spirit of collaboration and knowledge sharing. They generously
                            contribute their expertise through insightful blog posts, videos, pull requests, and active
                            participation on Discord and other social media.
                        </p>
                        <p className="mb-0 text-center text-lg tracking-[-0.25px]">
                            Connect with them to learn from their experiences and broaden your understanding of AI, code
                            search, and open source.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-center justify-between gap-8 py-16 md:flex-row">
                        {expertsData.map(expert => (
                            <CommunityExpert key={expert.name} expert={expert} />
                        ))}
                    </div>
                    <div>
                        <p className="mb-0 text-center text-lg tracking-[-0.25px]">
                            Pssst, we allow open source devs to use Cody for free!{' '}
                            <a
                                href="https://sourcegraph.com/supporting-open-source"
                                className="text-black  underline underline-offset-[3.55px]"
                                target="_blank rel=noopener"
                            >
                                Apply for Cody Pro credits.
                            </a>
                        </p>
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="!pt-[10px] !pb-0" className="px-6">
                <div className="flex flex-col justify-start pb-8 md:flex-row md:justify-between md:py-24">
                    <div className="flex flex-col md:w-1/2">
                        <Heading size="h2" className="pb-6 !leading-[40px] !tracking-[-1px] text-gray-700">
                            Supporting open source
                        </Heading>
                        <p className="mb-0 max-w-[534px] font-sans text-lg tracking-[-0.25px] text-gray-700">
                            At Sourcegraph, we are committed to supporting the open source projects that form the
                            backbone of our products. We actively contribute to various funding platforms, including
                            thanks.dev, Open Collective, Stackaid, GitHub Sponsors, and more, to ensure the
                            sustainability of these critical projects.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col gap-6 md:mt-0 md:px-16">
                        <div className="flex w-full flex-wrap justify-start gap-10 md:justify-center">
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
                        <div className="flex w-full flex-wrap items-center justify-start gap-10 md:justify-center">
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
                        <div className="flex w-full flex-row flex-wrap justify-start gap-10 md:justify-center">
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

            <EventsList />

            <ContentSection parentClassName="mt-6 md:mt-0 md:pt-8 md:pb-0" className="lg:px-6">
                <Heading size="h2" className="text-center !leading-[40px] !tracking-[-1px] md:text-left">
                    Blog posts
                </Heading>
                <div className="flex-1 p-4 sm:pt-6">
                    {!currentRecords.length ? (
                        <div className="col-span-2 mx-auto mb-16 text-center">
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

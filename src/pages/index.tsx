import { FunctionComponent, useRef } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import {
    ContentSection,
    Layout,
    CustomerLogos,
    Heading,
    ExternalsAuth,
    EmailAuth,
    VideoCarousel,
    CallToActionWithCody,
} from '../components'
import { TwitterEmbed } from '../components/EmbedTweet'
import { breakpoints } from '../data/breakpoints'
import { useInView } from '../hooks/useInView'
import { useWindowWidth } from '../hooks/windowWidth'

const carouselVideos = [
    {
        title: 'Code Fixup',
        description: 'Cody edits and improves code directly using inline instructions.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-fixup-may2023.mp4',
        link: '/cody',
    },
    {
        title: 'Context-aware chat',
        description: 'Cody can explain what code is doing—at a high level or in detail.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-web-chat-may2023.mp4',
        link: '/cody',
    },
    {
        title: 'Completion',
        description: 'Cody offers code completions in real time as you code or type comments.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-completion-may2023.mp4',
        link: '/cody',
    },
    {
        title: 'Recipes',
        description: 'Generate unit tests, summarize changes, or create docs with prebuilt recipes.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-unit-test-may2023.mp4',
        link: '/cody',
    },
]

const Home: FunctionComponent = () => {
    const innovationSectionRef = useRef<HTMLDivElement>(null)
    const { isInView } = useInView(innovationSectionRef, 0.9)

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Code Intelligence Platform',
                description:
                    'Sourcegraph makes it easy to write, read, and fix code—even in big, complex codebases—with universal code search, large-scale refactors, and more.',
            }}
            heroAndHeaderClassName="text-white"
            headerColorTheme="purple"
            className="sg-bg-gradient-radial-home"
            hero={<HomeHero />}
        >
            <div
                ref={innovationSectionRef}
                className={classNames('transition-opacity duration-1000', isInView ? 'opacity-100' : 'opacity-10')}
            >
                <img
                    src="/home/light.svg"
                    className={classNames(
                        'mx-auto hidden max-h-[89px] pb-2 transition-opacity duration-1000 md:block',
                        isInView ? 'opacity-100' : 'opacity-0'
                    )}
                    alt=""
                    aria-hidden={true}
                />
                <ContentSection parentClassName="!py-0">
                    <CustomerLogos
                        ctaLink={
                            <Link
                                href="/case-studies"
                                title="See how innovative companies are using Sourcegraph"
                                className="btn bg-transparent py-0 pl-0 text-base text-white"
                            >
                                Learn how innovative companies are using Sourcegraph
                                <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                            </Link>
                        }
                        className="-px-sm !bg-transparent"
                        headline="1.8M+ devs at the world's leading eng orgs are Sourcegraph customers"
                        headlineClassName="!text-4xl"
                        monochrome={true}
                        dark={true}
                    />
                </ContentSection>{' '}
            </div>

            <ContentSection
                parentClassName="!pb-0"
                className="flex flex-col items-center justify-center md:pt-4 md:pb-[46px]"
            >
                <Heading size="h3" className="mb-16 text-center !text-4xl font-semibold text-white md:mb-16">
                    See what devs are saying about Cody
                </Heading>
                <div className="relative -mt-[10px] grid w-full grid-cols-1 gap-x-6 md:grid-cols-2">
                    <div className="relative grid auto-rows-min grid-cols-1">
                        <TwitterEmbed
                            tweetId="1653717721639419905"
                            className="mb-1 flex justify-center xl:-mr-[78px]"
                        />
                        <TwitterEmbed
                            tweetId="1639077704715894784"
                            className="mb-1 flex justify-center xl:-mr-[78px]"
                        />
                    </div>
                    <div className="relative grid grid-cols-1">
                        <TwitterEmbed
                            tweetId="1665267475125026817"
                            className="mb-1 flex justify-center xl:-ml-[78px]"
                        />
                        <TwitterEmbed tweetId="1656134934820683782" className="flex justify-center xl:-ml-[78px]" />
                    </div>
                </div>
            </ContentSection>

            <CallToActionWithCody className="-mt-[10px] md:mt-0" />
        </Layout>
    )
}

const HomeHero: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const whatIsSourcegraphRef = useRef<HTMLDivElement>(null)
    const codyGraph = useRef<HTMLImageElement>(null)

    const { isInView: isWhatIsSourcegraphInView } = useInView(whatIsSourcegraphRef)
    const { isInView: isCodyGraphInView } = useInView(codyGraph, 0.5)

    return (
        <>
            <ContentSection parentClassName="!py-0 !px-sm overflow-x-clip" className="pb-[55px] md:pb-0">
                <div className="grid grid-cols-1 gap-x-4 gap-y-16 bg-right bg-no-repeat pt-16 pb-11 md:grid-cols-2 md:px-6 md:pt-24 md:pb-16 lg:bg-[url('/home/home-hero-bg.png')] lg:bg-[length:800px_600px] xl:bg-[length:1000px_800px]">
                    <div className="mx-auto flex w-full max-w-[567px] flex-col items-center px-0 md:mx-0 md:items-start">
                        <Heading
                            size="h1"
                            className="w-full text-center !text-[42px] leading-[58px] text-white md:max-w-[407px] md:text-start md:!text-[52px]"
                        >
                            Meet Cody, your{' '}
                            <span className="sg-bg-gradient-infrared bg-clip-text text-transparent">
                                AI coding assistant
                            </span>
                        </Heading>

                        <p className="mb-0 mt-6 text-center text-[26px] font-normal leading-[36px] text-gray-200 md:text-left">
                            Cody writes code and answers questions using your own code graph as context—even in complex
                            codebases with multiple code hosts.
                        </p>
                        <div className="flex flex-col items-center md:items-start">
                            <p className="mt-9 text-xl font-semibold text-white">Sign up to get free access 👇</p>
                            <div className="flex max-w-[319px] flex-col">
                                <div className="mb-2 flex gap-2">
                                    <ExternalsAuth
                                        className="col-span-1 mt-1 w-full justify-center !font-normal"
                                        authProvider="github"
                                        label="GitHub"
                                        source="about-home"
                                    />
                                    <ExternalsAuth
                                        className="col-span-1 mt-1 w-full justify-center !font-normal"
                                        authProvider="gitlab"
                                        label="GitLab"
                                        source="about-home"
                                    />
                                </div>
                                <EmailAuth
                                    icon={true}
                                    className="sg-email-auth-btn col-span-2 h-12 border bg-white bg-opacity-10 text-lg !font-normal text-white"
                                    source="about-home"
                                />
                            </div>
                            <p className="mt-4 text-sm text-violet-300 opacity-70">
                                By registering, you agree to our{' '}
                                <Link
                                    className="text-violet-300 underline"
                                    target="_blank"
                                    href="https://about.sourcegraph.com/terms"
                                >
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link
                                    className="text-violet-300 underline"
                                    target="_blank"
                                    href="https://about.sourcegraph.com/terms/privacy"
                                >
                                    Private Policy
                                </Link>
                            </p>
                        </div>
                    </div>

                    <VideoCarousel videos={carouselVideos} />
                </div>

                <div
                    ref={whatIsSourcegraphRef}
                    className={classNames(
                        'mx-auto max-w-[758px] transition-opacity duration-1000',
                        isWhatIsSourcegraphInView ? 'opacity-100' : 'opacity-10'
                    )}
                >
                    <img
                        src="/home/light.svg"
                        className={classNames(
                            'mx-auto max-h-[89px] pt-[20px] pb-4 md:pt-0 md:pb-[17px]',
                            isWhatIsSourcegraphInView ? 'opacity-100' : 'opacity-0'
                        )}
                        alt=""
                        aria-hidden={true}
                    />
                    <Heading size="h6" className="text-center text-white">
                        What is sourcegraph?
                    </Heading>

                    <Heading size="h2" className="mx-auto mt-4 max-w-[728px] text-center !text-4xl text-white">
                        Sourcegraph is an AI platform that makes it easy to read, write, and fix code–even in big,
                        complex code bases.
                    </Heading>
                </div>

                {isMobile ? (
                    <img
                        loading="lazy"
                        alt="Home Illustartion"
                        src="/home/home-illustration-mobile.svg"
                        className={classNames(
                            'mx-auto h-[285px] w-fit py-6 transition-opacity duration-1000 md:hidden',
                            isCodyGraphInView ? 'opacity-100' : 'opacity-10'
                        )}
                        ref={codyGraph}
                    />
                ) : (
                    <img
                        loading="lazy"
                        alt="Home Illustartion"
                        src="/home/home-illustration.svg"
                        className={classNames(
                            'mx-auto hidden h-[465px] pt-2 pb-[73px] transition-opacity duration-1000 md:block md:w-[859px] lg:w-[1005px]',
                            isCodyGraphInView ? 'opacity-100' : 'opacity-10'
                        )}
                        ref={codyGraph}
                    />
                )}

                <div className="flex flex-col items-center">
                    <div className="mb-6 flex flex-col gap-[13px] md:flex-row">
                        <div className="sg-bg-gradient-cip-tools flex flex-col items-start justify-end gap-4 rounded-lg border border-black border-opacity-[4%] p-6 md:pt-[60px]">
                            <Heading size="h4" className="text-white ">
                                Code graph
                            </Heading>
                            <p className="mb-0 text-[18px] text-gray-200">
                                Sourcegraph builds a compiler-accurate map of your code graph, the only graph that
                                includes all your code including all code hosts, dependencies, and code-related data,
                                providing Cody and Code Search with deep knowledge of your entire codebase.
                            </p>
                        </div>
                        <div className="sg-bg-gradient-cip-tools flex flex-col items-start justify-end gap-4 rounded-lg border border-black border-opacity-[4%] p-6 md:pt-[60px]">
                            <Heading size="h4" className="text-white">
                                Tools & workflows
                            </Heading>
                            <p className="mb-0 text-[18px] text-gray-200">
                                Tools and workflows are the capabilities that make Cody and Code Search extra powerful.
                                Batch Changes lets you make coordinated changes and migrations across all your
                                repositories, while Code Insights gives you the power to map time series trends from
                                patterns in your codebase.
                            </p>
                        </div>
                    </div>
                    <div className="sg-bg-gradient-cip-cody mb-6 grid grid-cols-1 gap-x-[30px] rounded-lg border border-black border-opacity-[4%] md:grid-cols-2">
                        <div className="flex flex-col items-start gap-6 px-6 py-8 md:gap-4 md:py-[84.5px] md:pl-20">
                            <Heading size="h4" className="text-5xl text-white md:text-[52px]">
                                Cody
                            </Heading>
                            <p className="mb-0 text-[18px] text-gray-200">
                                Write, fix, and maintain code with the most powerful & accurate AI coding assistant.
                                Cody uses the code graph to understand your entire codebase and help developers focus on
                                writing and shipping code.
                            </p>
                            <Link
                                href="#"
                                className="hover:sg-bg-hover-link-button flex items-center justify-center rounded-[5px] bg-white py-2 px-6 font-semibold text-violet-500"
                            >
                                Learn more about Cody
                            </Link>
                        </div>
                        <img src="/home/cody-graph.svg" className="hidden md:block" alt="cody graph" />
                        <img src="/home/code-graph-mobile.svg" className="mb-8 md:hidden" alt="cody graph" />
                    </div>
                    <div className="sg-bg-gradient-cip-cody relative grid h-[700px] w-full grid-cols-1 gap-x-[30px] overflow-hidden rounded-lg border border-black border-opacity-[4%] md:flex md:h-full md:justify-between">
                        <div className="flex shrink flex-col items-start gap-6 px-6 py-8 md:w-[614px] md:gap-4 md:py-[84.5px] md:pl-20">
                            <Heading size="h4" className="text-5xl text-white md:text-[52px]">
                                Code Search
                            </Heading>
                            <p className="mb-0 text-[18px] text-gray-200">
                                Search your entire codebase—every code host and repository, at any scale—in a single
                                place. Code Search makes it easy for developers to onboard to new codebases, understand
                                code faster, and find & fix security risks.
                            </p>
                            <div className="flex flex-col gap-x-4 gap-y-4 md:flex-row md:flex-wrap lg:gap-y-8">
                                <Link
                                    href="#"
                                    className="hover:sg-bg-hover-link-button flex items-center justify-center rounded-[5px] bg-white py-2 px-6 font-semibold text-violet-500"
                                >
                                    Learn more about Cody
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center gap-[10px] pb-4 font-semibold text-white lg:pb-0"
                                >
                                    Learn more about Enterprise <ChevronRightIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="md:flex md:items-center md:justify-end">
                            <img
                                src="/home/code-graph.svg"
                                className="absolute -right-[18px] top-[332px] h-[384px] w-[608px] md:static md:h-full md:w-full"
                                alt=""
                                aria-hidden={true}
                            />
                        </div>
                    </div>
                </div>
            </ContentSection>
        </>
    )
}
export default Home

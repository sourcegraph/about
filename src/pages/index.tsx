import { FunctionComponent, ReactNode } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import Link from 'next/link'

import {
    ContentSection,
    Layout,
    IntegrationsSection,
    CustomerLogos,
    Heading,
    Badge,
    ExternalsAuth,
    EmailAuth,
    VideoCarousel,
} from '../components'
import { MeetWithProductExpertButton } from '../components/cta/MeetWithProductExpertButton'
import { DownloadLink } from '../components/DownloadLink'
import { buttonLocation } from '../data/tracking'

interface TestimonyProps {
    thumbnail: string
    content: ReactNode
    about: string
    github: string
}

interface AppDownloadLinksProps {
    className?: string
}

const testimonies: TestimonyProps[] = [
    {
        thumbnail: '/testimonies/bryce-kalow-2.svg',
        content: (
            <p className="pb-[4px] text-lg">
                “By its nature and capabilities, Sourcegraph can be a tool to reduce friction, speed up feedback loops,
                and improve developer velocity.”
            </p>
        ),
        about: 'Bryce Kalow, Senior Web Engineer at HashiCorp',
        github: 'BRKalow',
    },
    {
        thumbnail: '/testimonies/justin-phillip.svg',
        content: (
            <>
                <p className="pb-1 text-lg">
                    “During our decomp efforts, we also spent time to refactor our APIs. Many of these APIs were
                    undocumented and lacked a formalized contract.
                </p>
                <p className="pb-1 text-lg">
                    {' '}
                    With the help of Sourcegraph, we were able to quickly look at all clients of an API and remove
                    unused attributes that lived in different repositories, ultimately simplifying our APIs and speeding
                    up developer iteration time.”
                </p>
            </>
        ),
        about: 'Justin Phillips, Software Engineer, Lyft',
        github: 'jmphilli',
    },
    {
        thumbnail: '/testimonies/ronnie-magatti.svg',
        content: (
            <p className="pb-1 text-lg">
                “With Sourcegraph, developers are more productive and it’s clear that every team is getting 1% better
                every day.”
            </p>
        ),
        about: 'Ronnie Magatti, Team Lead & Principal Software Engineer at Neo Financial',
        github: 'rmagatti',
    },
]

const codyFeatures = [
    {
        heading: 'Code graph',
        description:
            'Sourcegraph builds a compiler-accurate map of your code graph, the only graph that includes all your code including all code hosts, dependencies, and code-related data, providing Cody and Code Search with deep knowledge of your entire codebase.',
    },
    {
        heading: 'Tools & workflows',
        description:
            'Tools are the capabilities that make Cody and Code Search extra powerful. Batch Changes allows you to make coordinated changes across all your repositories, while Code Insights gives you the power to map time series trends from patterns  in your codebase.',
    },
    {
        heading: 'Embeddings',
        description:
            'By creating embeddings for your entire code graph, Cody can quickly search and draw context from your codebase. This means Cody is able to provide you with the most relevant, context-aware answers.',
    },
    {
        heading: (
            <div>
                Data Plugins <Badge text="Coming soon" size="small" color="dark-gray" className="ml-4" />
            </div>
        ),
        description: 'Third-party tools plug data into Sourcegraph’s AI platform to further enrich the code graph.',
    },
    {
        heading: 'APIs',
        description:
            'Developers can build their own custom tools on top of the Sourcegraph platform via the API, taking advantage of the unique code graph, embeddings, and tools.',
    },
    {
        heading: 'Language model',
        description: 'Sourcegraph gives teams the freedom to choose the best large language model to fit their needs.',
    },
]

const carouselVideos = [
    {
        title: 'Recipes',
        description: 'Generate unit tests, summarize changes, or create docs with prebuilt recipes.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-unit-test-may2023.mp4',
        link: '/cody',
    },
    {
        title: 'Context-aware chat',
        description: 'Cody can explain what code is doing—at a high level or in detail.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-web-chat-may2023.mp4',
        link: '/cody',
    },
    {
        title: 'Code Fixup',
        description: 'Cody edits and improves code directly using inline instructions.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-fixup-may2023.mp4',
        link: '/cody',
    },
    {
        title: 'Completion',
        description: 'Cody offers code completions in real time as you code or type comments.',
        video: 'https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-completion-may2023.mp4',
        link: '/cody',
    },
]

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                'Sourcegraph makes it easy to write, read, and fix code—even in big, complex codebases—with universal code search, large-scale refactors, and more.',
        }}
        heroAndHeaderClassName="sg-home-hero-bg text-white"
        headerColorTheme="purple"
        className="bg-violet-750"
        hero={<HomeHero />}
    >
        <ContentSection background="white" className="pt-[0px]">
            <CustomerLogos
                ctaLink={
                    <Link
                        href="/case-studies"
                        title="See how innovative companies are using Sourcegraph"
                        className="btn bg-transparent py-0 pl-0 text-violet-500"
                    >
                        Learn how innovative companies are using Sourcegraph
                        <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                    </Link>
                }
                className="-px-sm"
                headline="1.8M+ devs at the world's leading eng orgs are Sourcegraph customers"
                headlineClassName="!text-4xl"
            />
        </ContentSection>

        <ContentSection className="pt-[9px]" background="white" parentClassName="!py-0 leading-[43px]">
            <div className="md:grid-rows-8 mx-auto grid max-w-[1082px] grid-cols-1 gap-5 md:grid-cols-2">
                <div className="row-span-8 grid grid-cols-1 gap-5">
                    <Testimony {...testimonies[0]} />
                    <Testimony {...testimonies[2]} />
                </div>
                <div className="row-span-4">
                    <Testimony {...testimonies[1]} />
                </div>
            </div>
        </ContentSection>

        <IntegrationsSection />

        <ContentSection
            className="relative !m-0 ml-[32px] flex max-w-full flex-col overflow-hidden py-[96px] md:mx-4 md:max-h-[384px] md:flex-row md:items-center md:py-[114.5px]"
            parentClassName="!py-0 bg-gradient-to-tr from-violet-600 via-violet-750 to-violet-800 md:px-0"
        >
            <img
                src="/home/background.svg"
                alt="bg"
                className="absolute -right-[300px] top-16 hidden w-[100%] md:inline-block"
                aria-hidden={true}
            />
            <img
                src="/home/background.svg"
                alt="bg"
                className="absolute -left-[900px] -top-20 hidden w-[100%] md:inline-block"
                aria-hidden={true}
            />
            <div className="z-10 flex flex-1 flex-col md:pl-sm">
                <div className="max-w-[444px] md:self-end">
                    <Heading className="mb-[10px] !text-[36px] text-white" size="h2">
                        Try Cody for free
                    </Heading>
                    <p className="mb-0 text-lg text-gray-200">
                        Cody writes code and answers questions for you, speeding up work and keeping devs in flow.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <ExternalsAuth
                            className="w-fit !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="about-home"
                        />
                        <ExternalsAuth
                            className="w-fit !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="about-home"
                        />
                        <EmailAuth
                            icon={true}
                            className="sg-email-auth-btn w-fit border bg-white bg-opacity-10 px-4 !font-normal text-white md:h-12 md:px-6 md:text-lg"
                            source="about-home"
                            label="Email"
                        />
                    </div>
                    <p className="mt-4 mb-0 text-[14px] text-white opacity-70">
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
            <div className="my-[42px] border-b border-gray-400 md:my-0 md:mx-[42px] md:h-[266px] md:border-l" />
            <div className="z-10 flex flex-1 flex-col md:pr-sm">
                <Heading size="h4" className="mb-4 text-white">
                    Cody for Enterprise
                </Heading>
                <p className="mb-8 max-w-[444px] text-lg text-gray-200">
                    Cody with Sourcegraph Enterprise uses the code graph to provide context-aware answers based on your
                    own private codebase.
                </p>
                <div className="flex flex-col sm:flex-row">
                    <Link href="/cody" title="Get Cody for work" className="btn btn-outline-white max-w-[200px] px-6">
                        Get Cody for work
                    </Link>
                    <MeetWithProductExpertButton
                        buttonClassName="text-white pl-0 mt-3 sm:pl-6 sm:mt-0"
                        chevron={true}
                        buttonLocation={buttonLocation.body}
                    >
                        Speak to an engineer
                    </MeetWithProductExpertButton>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

const HomeHero: FunctionComponent = () => (
    <>
        <ContentSection parentClassName="!py-0 !px-sm overflow-x-clip">
            <div className="grid grid-cols-1 gap-x-4 gap-y-16 bg-right bg-no-repeat pt-12 pb-11 md:grid-cols-2 md:px-6 md:pb-[96px] lg:bg-[url('/home/home-hero-bg.png')] lg:bg-[length:800px_600px] xl:bg-[length:1000px_800px]">
                <div className="mx-auto flex w-full max-w-[567px] flex-col items-center px-0 md:mx-0 md:items-start">
                    <Heading
                        size="h1"
                        className="w-full text-center !text-[42px] leading-[58px] md:max-w-[407px] md:text-start md:!text-[52px]"
                    >
                        <span className="sg-bg-gradient-purple-white bg-clip-text text-transparent">
                            Meet Cody, your AI code assistant
                        </span>
                    </Heading>

                    <p className="mb-0 mt-6 text-center text-[26px] font-normal leading-[36px] text-gray-200 md:text-left">
                        Cody writes code and answers questions using your own code graph as context—even in complex
                        codebases with multiple code hosts.
                    </p>
                    <div className="flex flex-col items-center md:items-start">
                        <p className="sg-bg-gradient-purple-white mt-9 bg-clip-text text-xl font-semibold text-transparent">
                            Sign up to get free access <span className="text-white">👇</span>
                        </p>
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

            <Heading size="h6" className="text-center text-white">
                What is sourcegraph?
            </Heading>

            <Heading size="h2" className="mx-auto mt-4 max-w-[728px] text-center !text-[36px] text-white">
                Sourcegraph is an AI platform that makes it easy to read, write, and fix code–even in big, complex code
                bases.
            </Heading>

            <img alt="Home Illustartion" src="/home/home-illustration.svg" className="mx-auto hidden py-6 md:block" />
            <img alt="Home Illustartion" src="/home/home-illustration-mobile.svg" className="mx-auto py-6 md:hidden" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:justify-start">
                {codyFeatures.map(item => (
                    <div
                        key={item.description}
                        className="sg-home-cody-feature-div max-w-[410px] justify-self-center p-6 sm:justify-self-start md:min-h-[251px]"
                    >
                        <Heading size="h4" className="text-white">
                            {item.heading}
                        </Heading>
                        <p className="mt-4 mb-0 text-lg text-gray-200">{item.description}</p>
                    </div>
                ))}
            </div>
        </ContentSection>

        <ContentSection className="md:pb-4" parentClassName="!py-0 px-0 md:px-sm">
            <div className="sg-home-cta mt-[88px] mb-0 flex flex-col overflow-hidden md:mt-6 md:mb-24 md:flex-row">
                <div className="flex flex-col justify-center p-4 text-center md:text-start lg:p-8 xl:p-12">
                    <div className="flex w-fit items-center gap-x-2 rounded-[5px] bg-blue-400 py-1 px-[7px]">
                        <img src="/home/cody-icon.svg" alt="Cody Icon" className="h-[17px] w-[17px]" />
                        <p className="text-blue-600 mb-0 text-[12px] font-semibold leading-[21px]">
                            Cody is coming to the app June 2023
                        </p>
                    </div>
                    <Heading className="my-4 !text-4xl text-white" size="h2">
                        Download the Sourcegraph app
                    </Heading>
                    <p className="mb-4 text-lg text-gray-200 md:max-w-[614px]">
                        Find, fix, & navigate code with the free Sourcegraph app. The app includes code search and
                        navigation, plus Code Insights and Batch Changes for your local code.
                    </p>
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <Link href="/get-started" title="Download the app" className="btn btn-inverted-primary mt-1">
                            Download the app
                        </Link>
                        <Link
                            href="/get-started?t=enterprise"
                            title="Sourcegraph for enterprise"
                            className="btn flex bg-transparent p-0 text-white"
                        >
                            Sourcegraph for enterprise <ChevronRightIcon className="!mb-0 inline" />
                        </Link>
                    </div>
                </div>
                <div aria-hidden={true} className="flex justify-center">
                    <img
                        className="relative -right-[50px] sm:right-0"
                        src="/home/app-illustration.png"
                        alt="App Illustration"
                    />
                </div>
            </div>
        </ContentSection>
    </>
)

const AppDownloadLinks: FunctionComponent<AppDownloadLinksProps> = ({ className }) => (
    <div className={className}>
        <DownloadLink
            className="btn btn-inverted-primary w-fit px-4 font-normal shadow-btn"
            title="Download for Mac"
            downloadName="app-download-mac-dmg"
        >
            Download for Mac
            <Badge className="ml-2" size="small" text="Beta" color="blurple" />
        </DownloadLink>
        <div className="mt-3 flex flex-row">
            <Link
                href="/get-started"
                title="Linux"
                className="border-r-1 border-r-gray-300 pr-2 text-sm leading-[21px] text-gray-300 underline"
            >
                Linux
            </Link>
            <Link
                href="/get-started"
                title="Other platforms"
                className="ml-2 text-sm leading-[21px] text-gray-300 underline"
            >
                Other platforms
            </Link>
        </div>
        <p className="mt-3 text-sm leading-[21px] text-gray-300">
            By using Sourcegraph, you agree to the{' '}
            <Link href="/terms/privacy" title="Privacy polic" className="text-gray-300 underline">
                Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" title="Terms" className="text-gray-300 underline">
                Terms of Service
            </Link>
            .
        </p>
    </div>
)

const Testimony: FunctionComponent<TestimonyProps> = ({ thumbnail, content, about, github }) => (
    <div className="flex items-start rounded-lg border px-8 py-12 leading-7 md:p-12">
        <img className="col-span-1 mr-6 min-w-[40px]" src={thumbnail} alt={about} />
        <div className="col-span-6">
            <div>{content}</div>
            <div className="mb-4 text-base text-gray-400"> - {about}</div>
            <div className="mt-2 flex ">
                <GithubIcon />
                <Link href={`https://github.com/${github}`} className="ml-2 text-gray-600 underline">
                    {github}
                </Link>
            </div>
        </div>
    </div>
)
export default Home

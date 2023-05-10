import { FunctionComponent, ReactNode } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import Link from 'next/link'

import { ContentSection, Layout, IntegrationsSection, CustomerLogos, Heading, Badge } from '../components'
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

const features = [
    {
        title: 'Code search',
        description: 'Search all of your repositories across all branches and all code hosts.',
        image: '/home/search.png',
    },
    {
        title: 'Code intelligence',
        description: 'Navigate code, find references, see code owners, trace history, and more.',
        image: '/home/code_intelligence.png',
    },
    {
        title: 'Fix and refactor',
        description: 'Roll out large-scale changes to many repositories at once and track big migrations.',
        image: '/home/fix.png',
    },
]

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                'Sourcegraph makes it easy to write, read, and fix code—even in big, complex codebases—with universal code search, large-scale refactors, and more.',
        }}
        heroAndHeaderClassName="sg-hero-bg-gradient text-white"
        headerColorTheme="purple"
        className="bg-violet-750"
        hero={<HomeHero />}
    >
        <div className="flex flex-wrap items-center justify-center gap-3.5 border-b border-gray-200 bg-white py-6 px-sm text-center">
            <Heading size="h5" className="!text-2xl	!leading-[34px]">
                Sourcegraph is used by some of the largest companies in the world.
            </Heading>
            <Link href="/contact/request-info" className="flex items-center text-xl font-semibold text-violet-500">
                Learn about Sourcegraph Enterprise <ArrowRightIcon className="ml-1.5 inline" />
            </Link>
        </div>

        <ContentSection parentClassName="!pb-0" background="white">
            <Heading size="h2" className="max-w-[915px] text-center !text-4xl md:text-start">
                <span className="text-violet-500">Sourcegraph’s code intelligence</span> makes it easy to read, write,
                and fix code–even in big, complex code bases.
            </Heading>
            <div className="mt-10 flex flex-wrap justify-center gap-6 md:flex-nowrap">
                {features.map(({ description, image, title }) => (
                    <div
                        key={title}
                        className="flex max-w-[410px] flex-col justify-between gap-6 rounded-lg border border-gray-300 md:gap-y-12"
                    >
                        <div className="flex flex-col gap-4 p-6 pb-0">
                            <Heading size="h4">{title}</Heading>
                            <p className="m-0 text-gray-500">{description}</p>
                        </div>

                        <img src={image} alt={title} className="rounded-b-lg md:h-[250px]" />
                    </div>
                ))}
            </div>
        </ContentSection>

        <ContentSection
            className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-tr from-violet-600 via-violet-750 to-violet-800 md:flex-row"
            parentClassName="!pt-6 !pb-0 bg-white"
        >
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
                <img src="/home/app-illustration.png" alt="App Illustration" />
            </div>
        </ContentSection>

        <ContentSection background="white" className="pt-[0px]">
            <CustomerLogos
                ctaLink={
                    <Link
                        href="/case-studies"
                        title="See how innovative companies are using Sourcegraph"
                        className="btn bg-transparent py-0 pl-0 text-violet-500"
                    >
                        See how innovative companies are using Sourcegraph
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
                    <Link
                        href="https://sourcegraph.com/sign-up"
                        title="Get started with Cody"
                        className="btn btn-inverted-primary mt-8 px-4 shadow-btn"
                        target="_blank"
                    >
                        Get started with Cody
                    </Link>
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
    <ContentSection
        parentClassName="!py-0 !px-sm overflow-x-clip"
        className="grid grid-cols-1 gap-x-4 gap-y-8 bg-cover bg-right bg-no-repeat pt-12 pb-12 md:grid-cols-2 md:bg-[url('/home/hero-illustration.svg')] md:px-6 md:pb-[112px]"
    >
        <div className="mx-auto flex w-full max-w-[554px] flex-col items-center px-0 md:mx-0 md:items-start">
            <Heading size="h1" className="max-w-[407px] text-5xl leading-[52px] lg:text-6xl xl:text-7xl">
                <span className="sg-bg-gradient-purple-white bg-clip-text text-transparent">
                    Meet Cody, your AI code assistant
                </span>
            </Heading>

            <p className="mx-auto mb-0 mt-6 text-center text-[26px] !font-normal leading-[36px] text-gray-200 md:text-left">
                Cody writes code and answers questions using your own code graph as context—even in complex codebases
                with multiple code hosts.
            </p>
            <Link
                href="https://sourcegraph.com/sign-up"
                title="Get Cody for free"
                className="btn btn-inverted-primary mt-9 px-4 shadow-btn"
                target="_blank"
            >
                Get Cody for free
            </Link>
        </div>

        <div className="h-fit overflow-hidden rounded-lg">
            <video
                className=" sg-video-border-gradient mx-auto w-full max-w-[602px] rounded-lg border-8"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                controls={false}
                data-cookieconsent="ignore"
            >
                <source
                    type="video/webm"
                    src="https://storage.googleapis.com/sourcegraph-assets/cody-homepage-05-2023.webm"
                    data-cookieconsent="ignore"
                />
                <source
                    type="video/mp4"
                    src=" https://storage.googleapis.com/sourcegraph-assets/cody-homepage-05-2023.mp4"
                    data-cookieconsent="ignore"
                />
            </video>
        </div>
    </ContentSection>
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

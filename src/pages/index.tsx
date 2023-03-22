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
            <p className="pb-[4px] text-xl">
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
                <p className="pb-1 text-xl">
                    “During our decomp efforts, we also spent time to refactor our APIs. Many of these APIs were
                    undocumented and lacked a formalized contract.
                </p>
                <p className="pb-1 text-xl">
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
            <p className="pb-1 text-xl">
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
        description: 'Navigate code, find references, see code owners, trace history, security, and more.',
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
        heroAndHeaderClassName="sg-bg-gradient-purple text-white"
        headerColorTheme="purple"
        className="bg-violet-750"
        hero={<HomeHero />}
    >
        <div className="flex flex-wrap items-center justify-center gap-3.5 border-b border-gray-200 bg-white py-6 px-sm text-center">
            <Heading size="h5" className="!text-2xl	!leading-[34px]">
                Sourcegraph is used by some of the largest companies in the world.
            </Heading>
            <Link href="/contact/request-info" className="text-xl font-semibold text-violet-500">
                Learn about Sourcegraph Enterprise <ArrowRightIcon className="ml-1.5 inline" />
            </Link>
        </div>

        <ContentSection
            parentClassName="!pb-0"
            background="white"
            className="flex flex-wrap justify-center gap-6 md:flex-nowrap"
        >
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
        </ContentSection>

        <ContentSection background="white">
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
            className="mb-[16px] grid grid-cols-1 overflow-hidden rounded-lg bg-gradient-to-tr from-violet-600 via-violet-750 to-violet-800 md:grid-cols-8 md:max-h-[310px] lg:max-h-[380px]"
            parentClassName="bg-white !pt-0"
        >
            <div className="p-4 md:col-span-4 lg:p-8 xl:p-12">
                <Badge
                    className="bg-violet-100 text-violet-600 md:bg-violet-600 md:text-violet-100"
                    size="small"
                    text="Experimental"
                />
                <Heading className="mt-3 mb-4 text-white" size="h2">
                    Cody AI
                </Heading>
                <p className="mb-4 text-lg text-gray-200">
                    Working with Cody, Sourcegraph’s new AI coding assistant, is like a having a senior engineer as a
                    personal assistant who can search and read your codebase to find answers to your questions.
                </p>
                <Link href="/cody" title="Learn more about Cody" className="flex btn bg-transparent p-0 text-white">
                    <ChevronRightIcon className="!mb-0 inline" />
                </Link>
            </div>
            <div aria-hidden={true} className="relative flex justify-end ml-[96px w-full md:col-span-4 ml-[136px] md:-ml-0 lg:-mt-0 lg:ml-40">
                <img
                    className="h-[437px] max-w-[637px] md:absolute md:-top-[90px] md:-right-[112px] md:h-[537px] md:w-[737px] lg:-top-[82px] lg:right-[54px] lg:h-[170%]"
                    src="/starship/cody-illustration.svg"
                    alt=""
                />
            </div>
        </ContentSection>

        <ContentSection
            className="relative max-w-full flex flex-col overflow-hidden ml-[32px] md:mx-4 py-[96px] md:max-h-[384px] md:flex-row md:items-center md:py-[114.5px] !m-0"
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
                <div className="w-fit md:self-end">
                    <Heading className="mb-[10px] text-white" size="h2">
                        Download Sourcegraph
                    </Heading>
                    <p className="mb-8 text-gray-200">For individual developers</p>
                    <AppDownloadLinks />
                </div>
            </div>
            <div className="my-[42px] border-b border-gray-400 md:my-0 md:mx-[42px] md:h-[266px] md:border-l" />
            <div className="z-10 flex flex-1 flex-col md:pr-sm">
                <Heading size="h4" className="mb-4 text-gray-200">
                    Sourcegraph for Enterprise
                </Heading>
                <p className="mb-8 max-w-[376px] text-gray-200">
                    Get in touch to learn how organizations use Sourcegraph at Scale:
                </p>
                <div className="flex">
                    <MeetWithProductExpertButton dark={true} requestInfo={true} buttonLocation={buttonLocation.body} />
                    <MeetWithProductExpertButton
                        buttonClassName="text-gray-200"
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
        parentClassName="!py-0 !px-0 overflow-x-clip"
        className="grid grid-cols-1 gap-x-4 pt-12 md:grid-cols-2 md:bg-[url('/home/background.svg')] md:px-6"
    >
        <div className="mx-auto flex max-w-[529px] flex-col items-center px-0 md:mx-0 md:items-start">
            <Heading size="h1" className="text-5xl leading-[2rem] lg:text-6xl xl:text-7xl">
                <span className="sg-bg-gradient-purple-white whitespace-nowrap bg-clip-text text-transparent">
                    Code intelligence
                </span>
            </Heading>

            <p className="mx-auto mb-0 mt-6 text-center text-[26px] !font-normal leading-[36px] text-gray-200 md:text-left">
                Sourcegraph makes it easy to read, write, and fix&nbsp;code&mdash;even in
                big,&nbsp;complex&nbsp;codebases.
            </p>
            <p className="mt-9 mb-6 text-lg text-white">
                Free. Built on{' '}
                <Link
                    href="https://github.com/sourcegraph/sourcegraph"
                    title="Privacy polic"
                    className="text-white underline"
                    target="_blank"
                >
                    open source
                </Link>
                .
            </p>
            <AppDownloadLinks className="flex flex-col items-center md:items-start" />
        </div>

        <div className="mt-[70px] w-full rounded-tl-[10px] bg-[url('/home/banner.png')] bg-cover bg-no-repeat ml-sm md:mt-0 h-[362px] md:h-[543px] md:w-[758px] md:rounded-t-[10px]" />
    </ContentSection>
)

const AppDownloadLinks: FunctionComponent<AppDownloadLinksProps> = ({ className }) => (
    <div className={className}>
        <DownloadLink
            href="https://sourcegraph.com/search"
            className="btn btn-inverted-primary w-fit px-4 font-normal"
            title="Download for mac"
            downloadName="app-download-mac-dmg"
        >
            Download for mac
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
                privacy policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" title="Terms" className="text-gray-300 underline">
                terms
            </Link>
            .
        </p>
    </div>
)

const Testimony: FunctionComponent<TestimonyProps> = ({ thumbnail, content, about, github }) => (
    <div className="flex items-start rounded border px-8 py-12 leading-7 md:p-12">
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

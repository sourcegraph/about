import { FunctionComponent, ReactSVG, useState, useEffect } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { posthog } from 'posthog-js'

import { ContentSection, Layout, CodyPartners } from '../components'
import HomeHero2024 from '../components/Home/HomeHero2024'
import { Icon } from '../components/icon'
import ReadCaseStudyLink from '../components/ReadCaseStudyLink'
import { useAuthModal } from '../context/AuthModalContext'
import { captureCustomEventWithPageData } from '../lib/utils'

interface HomeHeroProps {
    onOpenModal: (pagePosition: string) => void
}

const Home: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const iconDefinition: [keyof ReactSVG, Record<string, string>][] = [
        ['svg', { viewBox: '0 0 32 32' }],
        [
            'path',
            {
                d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
            },
        ],
    ]

    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal('home')
    }

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Code Intelligence Platform',
                description:
                    "Sourcegraph's code intelligence platform makes it easy for devs to write, fix, and maintain code with Cody, the AI coding assistant, and Code Search.",
            }}
            heroAndHeaderClassName=""
            headerColorTheme="white"
            customDark={false}
            hero={<HomeHero2024 />}
            className="relative w-full !overflow-hidden bg-gray-50 px-6 xl:px-0"
            displayChildrenUnderNav={false}
        >
            <div className="oveflow-hidden relative w-full bg-gray-50">
                <p className="mg:text-base text-center font-mono text-sm text-gray-400">
                    Trusted by the world's largest dev teams
                </p>

                {/* partners ----------------------------------------------------------------- */}
                <div className="flex items-center">
                    <CodyPartners isLight={true} className="!pb-4 pt-4" />
                </div>

                {/* coding is complex --------------------------------------------------------- */}
                <div className="mt-48 text-center">
                    <h2 className="text-balance mx-auto max-w-3xl text-3xl font-medium sm:text-5xl md:text-6xl">
                        Make working in sprawling codebases{' '}
                        <span className="sg-gradient-text font-bold">delightful</span>
                    </h2>

                    <p className="text-balance mt-4 text-center text-sm text-gray-500 sm:text-base md:text-xl lg:mt-8">
                        Growing codebases and dependencies make writing code complex. <br />
                        Sourcegraph helps developers spend more time doing what they love:{' '}
                        <span className="font-bold">writing code</span>.
                    </p>
                </div>

                {/* solve hard software problems ----------------------------------------------- */}
                <div className="mt-14">
                    <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white py-20 px-10">
                        <div className="flex flex-col items-center justify-center">
                            <p className="mg:text-base text-center font-mono text-lg text-gray-400">
                                Solve hard software problems
                            </p>
                            <h2 className="text-balance mx-auto mt-2 max-w-xl text-center text-2xl font-medium sm:text-4xl">
                                Take the pain out of working in complex enterprise codebases
                            </h2>
                        </div>

                        <div className="relative mt-12 flex overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 pt-8 md:px-10">
                            <h3 className="mt-4 text-lg md:text-3xl">
                                Find reusable code implementations across your entire codebase
                            </h3>

                            <div className="hidden lg:block">
                                <img
                                    className="relative h-full w-full translate-y-1"
                                    src="/home/code-search.svg"
                                    alt="Find reusable code"
                                />
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-4">
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                                Get answers about unfamiliar code without leaving your editor
                            </div>
                            <div className="col-start-1 row-start-2 rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                                Simplify large and tedious projects like code migrations using AI
                            </div>
                            <div className="col-start-2 row-span-2 rounded-2xl bg-gray-100 bg-white px-6 py-8 md:px-10">
                                LYFT
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="mx-auto flex flex-col pb-20 md:max-w-screen-xl md:px-6">
                    <div className="px-6 md:px-0">
                        <BentoWithMockup isVariantTitle={true} href="/resources/gartner-mq" />
                    </div>
                </div> */}

                {/* cody ----------------------------------------------------------------- */}
                <div className="mt-40">
                    <div className="mx-auto max-w-7xl">
                        {/* header */}
                        <div className="flex items-center justify-center gap-4">
                            <img
                                className="h-[65px] w-[65px] rounded-t-2xl"
                                src="/home/branded-icons/cody-squircle.svg"
                                alt="Cody Product logo"
                            />
                            <h2 className="text-3xl font-medium sm:text-5xl md:text-7xl">Cody</h2>
                        </div>

                        {/* description */}
                        <p className="text-balance mx-auto mt-4 max-w-xl text-center text-sm text-gray-500 sm:text-base md:text-lg lg:mt-8">
                            Ship code faster with Cody, the AI coding assistant. Cody uses the latest models plus the
                            most extensive development context to help you solve hard problems in your IDE.
                        </p>

                        {/* link */}
                        <div className="mt-4 text-center">
                            <Link
                                href="https://sourcegraph.com/cody"
                                title="Cody"
                                className="btn btn-link btn-link-icon"
                            >
                                Learn more about Cody
                                <ChevronRightIcon className="link-icon" />
                            </Link>
                        </div>

                        {/* Chat + Prompts sections */}
                        <div className="mt-10 grid gap-4 md:grid-cols-2">
                            {/* chat */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                                <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
                                            <stop offset="0.12104" stopColor="#7048E8" />
                                            <stop offset="0.308435" stopColor="#00CBEC" />
                                            <stop offset="0.642062" stopColor="#A112FF" />
                                            <stop offset="0.919599" stopColor="#FF5543" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <Icon fill="none" iconNode={iconDefinition} size={40} color="url(#grad1)" />

                                <h3 className="mt-4 text-lg md:text-3xl">Solve hard problems with chat</h3>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Chat with Cody to quickly generate and edit code, using latest-gen AI models plus
                                    extensive codebase context for fast and accurate results.
                                </p>
                            </div>

                            {/* prompts */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                                <img
                                    className="h-10 w-10"
                                    src="/home/branded-icons/commands-brand-icon.svg"
                                    alt="Completions Brand Icon"
                                />
                                <h3 className="mt-4 text-lg md:text-3xl">Automate workflows with prompts</h3>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Build and customize prompts for automating common tasks and reducing toil. Generate
                                    unit tests, modernize code, document code, and more.
                                </p>
                            </div>
                        </div>

                        {/* completions */}
                        <div className="relative mt-4 flex overflow-hidden rounded-2xl border border-gray-200 bg-white">
                            <div className="flex flex-col justify-center px-6 py-8 md:px-10">
                                <img
                                    className="h-[40px] w-[40px]"
                                    src="/home/branded-icons/completions-brand-icon.svg"
                                    alt="Completions Brand Icon"
                                />
                                <h3 className="mt-4 text-lg md:text-3xl">Code faster with autocomplete</h3>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Cody completes single lines or whole functions, in any programming language,
                                    configuration file, or docs.
                                </p>
                            </div>

                            <div className="hidden lg:block">
                                <div className="autocomplete-gradient absolute z-0 h-[392.193px] w-[1087.411px]" />
                                <img
                                    className=" relative h-full w-full"
                                    src="/home/multiline-completion.svg"
                                    alt="Multiline Completion"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* only margin top 20 here because the twocolumntestimonial card has its own padding for some reason */}
                {/* <div className="mx-auto mt-10 max-w-7xl">
                    <TwoColumnTestimonialCard
                        leftClientImgSrc="/home/reviews1.svg"
                        rightClientImgSrc="/home/reviews2.png"
                        rightTestimony="By its nature and capabilities, Sourcegraph can be a tool to reduce friction, speed up feedback loops, and improve developer velocity."
                        leftTestimony="Sourcegraph is extremely valuable for what we do. It enables us to easily clean up deprecated APIs and estimate the risks of our API's evolution."
                        leftClientName="Vito Baggiolini"
                        leftClientTitle="Senior Software Engineer, CERN"
                        rightClientName="Bryce Kalow"
                        rightClientTitle="Senior Web Engineer, HashiCorp"
                        isVariantStyle={true}
                    />
                </div> */}

                {/* code search ----------------------------------------------------------------- */}
                <div className="mt-40">
                    <div className="mx-auto max-w-7xl">
                        {/* header */}
                        <div className="flex items-center justify-center gap-4">
                            <img
                                className="h-[65px] w-[65px] rounded-t-2xl"
                                src="/home/branded-icons/Code-Search-squircle.svg"
                                alt="Code Search Product logo"
                            />
                            <h2 className="text-3xl font-medium sm:text-5xl md:text-7xl">Code Search</h2>
                        </div>

                        {/* description */}
                        <p className="text-balance mx-auto mt-4 max-w-xl text-center text-sm text-gray-500 sm:text-base md:text-lg lg:mt-8">
                            Search your entire codebase—every code host and repository, at any scale—in a single place.
                            Code Search makes it easy for developers to onboard to new codebases, understand code
                            faster, and find & fix security risks.
                        </p>

                        {/* link */}
                        <div className="mt-4 text-center">
                            <Link
                                href="https://sourcegraph.com/code-search"
                                title="Code Search"
                                className="btn btn-link btn-link-icon"
                            >
                                Learn more about Code Search
                                <ChevronRightIcon className="link-icon" />
                            </Link>
                        </div>

                        {/* Find and fix code */}
                        <div className="relative mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                            <img
                                className="h-10 w-10"
                                src="/home/branded-icons/code-search-icon.svg"
                                alt="Code Search Icon"
                            />
                            <h3 className="mt-4 text-lg md:text-3xl">Find and fix code</h3>
                            <p className="mt-2 mb-0 text-gray-500">
                                Find what you need in milliseconds across all of your code-no matter where it lives.
                            </p>

                            <img
                                className="absolute -top-5 right-12 w-[450px]"
                                src="/home/code-graph-home.svg"
                                alt="Code graph"
                                height={500}
                                width={500}
                            />
                        </div>

                        {/* Code Search sections */}
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            {/* Automate large-scale changes */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                                <img
                                    className="h-10 w-10"
                                    src="/home/branded-icons/batch-changes-icon.svg"
                                    alt="Batch Changes Icon"
                                />
                                <h3 className="mt-4 text-lg md:text-3xl">Automate large-scale code changes</h3>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Find and make changes across your codebase in one go, whether a version change or a
                                    vulnerability fix.
                                </p>
                            </div>

                            {/* Track trends */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                                <img
                                    className="h-10 w-10"
                                    src="/home/branded-icons/Code-insights-icon.svg"
                                    alt="Code Insights Icon"
                                />
                                <h3 className="mt-4 text-lg md:text-3xl">Track trends in your codebase</h3>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Transform your code into a queryable database to create custom dashboards in
                                    seconds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-48">
                    <div className="sg-reviews flex flex-col gap-6 rounded-none px-6 py-[73px] text-white md:flex-row md:gap-16 md:rounded-2xl md:px-20 md:py-16">
                        <div className="flex flex-col gap-4 p-5 md:p-0">
                            <div className="flex flex-col">
                                <p className="mb-0 text-base">Aneesh Agrawal</p>
                                <p className="mb-0 text-sm">Software Engineer, Lyft</p>
                            </div>
                            <p className="mb-0 pb-4 text-[35px] font-normal leading-[43.75px] md:pb-0">
                                Sourcegraph makes it easy to survey and understand existing use cases to make sure we
                                build the right thing.
                            </p>
                        </div>
                        <ReadCaseStudyLink
                            parentClassName="flex whitespace-nowrap px-10 md:self-end md:px-0"
                            linkClassName="btn btn-link-dark btn-link-icon p-0"
                            href="https://sourcegraph.com/case-studies/lyft-monolith-to-microservices"
                        />
                    </div>
                </div>

                <div className="mx-6 grid grid-cols-1 gap-6 py-16 md:mx-0 md:grid-cols-2 md:py-24">
                    <div className="hover:cta-free-cody relative overflow-hidden rounded-2xl border-1 border-gray-200 bg-white">
                        <div className="cta-top-border absolute left-0 right-0 top-0 rounded-t-2xl" />
                        <div className=" px-14 py-16">
                            <h2 className="mb-4 text-gray-700">Get started with Cody</h2>
                            <p className="mb-0 text-lg text-gray-500">
                                Use Cody for free in your IDE, no credit card required.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className={classNames('btn btn-primary w-full md:w-auto')}
                                    title="free cody"
                                    onClick={() => handleOpenModal('bottom')}
                                >
                                    Download Cody for free
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="cta-home rounded-2xl px-14 py-16 text-white">
                        <h2 className="mb-[10px]">Cody Enterprise</h2>
                        <p className="mb-0 text-lg text-[#FFFFFFCC]">
                            Cody Enterprise provides additional security, scalability, and control for your
                            organization. Unlimited usage and context search for your entire codebase.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
                            <Link
                                href="/contact/request-info"
                                title="Get Cody for Enterprise"
                                className="btn btn-secondary-dark w-full px-6 py-2 text-center md:w-auto"
                                onClick={() => captureCustomEventWithPageData('contact_sales_onpage_click', 'bottom')}
                            >
                                Book a demo
                            </Link>
                            <Link
                                href="/pricing"
                                title="See pricing"
                                className="btn btn-link-dark md:btn-link-icon w-full rounded-[5px] px-6 text-center md:w-auto"
                            >
                                See pricing
                                <ChevronRightIcon className="link-icon hidden md:block" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const HomeHero: FunctionComponent<HomeHeroProps> = ({ onOpenModal }) => {
    const [abTest, setAbTest] = useState('')

    useEffect(() => {
        posthog.onFeatureFlags(() => {
            const featureFlag = posthog.getFeatureFlag('platform-messaging-test')
            if (featureFlag === 'test-hard-eng-probs') {
                setAbTest('test-hard-eng-probs')
            } else if (featureFlag === 'test-operate-at-scale') {
                setAbTest('test-operate-at-scale')
            } else if (featureFlag === 'test-elevate-engineering') {
                setAbTest('test-elevate-engineering')
            } else {
                setAbTest('control')
            }
        })
    }, [])
    return (
        <ContentSection
            className="relative mt-2 flex items-center justify-center"
            parentClassName="!py-0 !pb-16 !bg-gray-50"
        >
            <div className="mx-auto flex flex-col items-center justify-center px-3 text-center md:px-0">
                <div className="mx-auto flex flex-col items-center pb-4 pt-4 md:w-[680px] md:pb-[26px] md:pt-20">
                    {abTest === 'control' && (
                        <>
                            <h1 className="w-full text-center text-5xl sm:text-7xl">
                                Understand and write code <span className="sg-gradient-text">blazingly fast</span>
                            </h1>

                            <p className="mt-6 text-xl text-gray-400">
                                Sourcegraph allows developers to rapidly search, write, and understand code by bringing
                                insights from their entire codebase right into the editor.
                            </p>
                        </>
                    )}

                    {abTest === 'test-hard-eng-probs' && (
                        <>
                            <h1 className="w-full text-center text-5xl sm:text-7xl">
                                <span className="sg-gradient-text">Code Intelligence</span> that solves the hardest
                                engineering problems
                            </h1>

                            <p className="mt-6 text-xl text-gray-400">
                                Sourcegraph has the most scalable code search and the AI assistant with the most
                                extensive developer context to help build and ship faster.
                            </p>
                        </>
                    )}

                    {abTest === 'test-operate-at-scale' && (
                        <>
                            <h1 className="w-full text-center text-5xl md:text-7xl">
                                <span className="sg-gradient-text">Code Intelligence</span> for engineering teams
                                operating at scale
                            </h1>

                            <p className="mt-6 text-xl text-gray-400">
                                Sourcegraph has the most scalable code search and the AI assistant with the most
                                extensive developer context to help build and ship faster.
                            </p>
                        </>
                    )}

                    {abTest === 'test-elevate-engineering' && (
                        <>
                            <h1 className="w-full text-center text-5xl sm:text-7xl">
                                <span className="sg-gradient-text">Contextual AI</span> and{' '}
                                <span className="sg-gradient-text">scalable search</span> to elevate your engineering
                                team
                            </h1>

                            <p className="mt-6 text-xl text-gray-400">
                                Sourcegraph helps developers working in complex environments navigate, understand, and
                                write code faster.
                            </p>
                        </>
                    )}

                    <div className="mx-auto mt-6 flex flex-row flex-wrap justify-center gap-2">
                        <button
                            type="button"
                            className="btn btn-primary mb-4 w-full max-w-[356px] px-5 sm:mb-12 sm:w-fit sm:px-6"
                            onClick={() => onOpenModal('top')}
                        >
                            Download the AI coding assistant
                        </button>

                        <Link
                            href="/contact/request-info"
                            title="Book a demo"
                            className="btn btn-secondary mb-4 w-full max-w-[356px] px-5 sm:mb-12 sm:w-fit sm:px-6"
                            type="button"
                            onClick={() => captureCustomEventWithPageData('contact_sales_onpage_click', 'top')}
                        >
                            <div className="flex items-center justify-center">Book a demo</div>
                        </Link>
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}

export default Home

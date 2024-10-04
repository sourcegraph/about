import { FunctionComponent, ReactSVG, useState, useEffect } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { posthog } from 'posthog-js'

import { ContentSection, Layout, CodyPartners } from '../components'
import { ContentEnum, FullWidthTabsCarousel } from '../components/Carousels/fullWidthTabsCarousel'
import HomeHero2024 from '../components/Home/HomeHero2024'
import { Icon } from '../components/icon'
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
                {/* partners ----------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <p className="mg:text-base text-center font-mono text-sm text-gray-400">
                    Trusted by the world's largest dev teams
                </p>

                <div className="flex items-center">
                    <CodyPartners isLight={true} className="!pb-4 pt-4" />
                </div>

                {/* coding is complex --------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <div className="mt-28 text-center">
                    <h1 className="text-balance mx-auto max-w-3xl">
                        Make coding <span className="sg-gradient-text font-bold">delightful</span>, even in sprawling
                        codebases
                    </h1>

                    <p className="text-balance mt-4 text-center text-sm text-gray-500 sm:text-base md:text-xl lg:mt-8">
                        Growing code and dependencies make dev work complex.
                        <br />
                        Sourcegraph helps developers spend more time doing what they love:
                        <span className="font-bold"> writing code</span>.
                    </p>
                </div>

                {/* solve hard software problems ----------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <div className="mx-auto mt-14 max-w-6xl">
                    <div className="relative mt-12 flex gap-8 overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 pt-8 md:px-10">
                        <div className="max-w-lg pt-5 pb-12 lg:pt-8 lg:pb-0">
                            <p className="font-mono text-gray-400">Solve hard software problems</p>
                            <h2 className="text-balance mx-auto mt-2 font-medium">
                                Take the pain out of working in complex enterprise environments
                            </h2>
                        </div>

                        <div className="hidden min-h-[200px] lg:block">
                            <img
                                className="absolute -top-2/3 hidden w-[650px] lg:block"
                                src="/home/screens/code graph with gradient.svg"
                                alt="Code graph"
                            />
                            {/* <img
                                className="relative h-full w-full translate-y-1"
                                src="/home/code-search.svg"
                                alt="Find reusable code"
                                height={500}
                                width={500}
                            /> */}
                        </div>
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-3">
                        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                            <img className="h-4 w-4" src="/home/icons/chat.svg" alt="Chat icon" />
                            <h3 className="mt-3 text-lg">
                                Get answers about unfamiliar code without leaving your editor
                            </h3>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                            <img className="h-4 w-4" src="/home/icons/code-reuse.svg" alt="Code reuse" />
                            <h3 className="mt-3 text-lg">Find reusable code implementations across every repository</h3>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-10">
                            <img className="h-4 w-4" src="/home/icons/sparkle.svg" alt="Sparkle" />
                            <h3 className="mt-3 text-lg">
                                Simplify large and tedious projects like code migrations using AI
                            </h3>
                        </div>
                    </div>
                </div>

                {/* <div className="mx-auto flex flex-col pb-20 md:max-w-screen-xl md:px-6">
                    <div className="px-6 md:px-0">
                        <BentoWithMockup isVariantTitle={true} href="/resources/gartner-mq" />
                    </div>
                </div> */}

                {/* lyft testimonial ----------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <div className="mx-auto mt-28 max-w-5xl">
                    <div className="rounded-2xl border border-gray-200 bg-blurple-100/50 px-6 py-10 md:px-10">
                        <img className="h-10 w-10" src="/home/icons/lyft.svg" alt="Lyft logo" />

                        <p className="mt-4">
                            “With the help of Sourcegraph, we were able to quickly look at all clients of an API and
                            remove unused attributes...simplifying our APIs and speeding up developer iteration time.”
                        </p>

                        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="text-sm opacity-70">
                                <div className="font-medium">Justin Phillips</div>
                                <div>Software Engineer, Lyft</div>
                            </div>

                            <div>
                                <Link
                                    className="btn btn-sm btn-secondary whitespace-nowrap border border-blurple-500 px-10"
                                    href="https://sourcegraph.com/case-studies/lyft-monolith-to-microservices"
                                >
                                    Read the case study
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* productivity ----------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <div className="mx-auto mt-28 max-w-6xl">
                    <div className="text-center">
                        <p className="mg:text-base text-center font-mono text-lg text-gray-400">
                            Increase engineering productivity
                        </p>
                        <h2 className="text-balance mt-2 text-center text-2xl font-medium sm:text-4xl">
                            Enable developers to code more and toil less
                        </h2>
                    </div>

                    <ProductivitySection />
                </div>

                {/* two testimonials ----------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                {/* only margin top 20 here because the twocolumntestimonial card has its own padding for some reason */}
                <div className="mx-auto mt-28 max-w-6xl">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-8">
                            <p className="mb-0">
                                "Sourcegraph is extremely valuable for what we do. It enables us to easily clean up
                                deprecated APIs and estimate the risks of our API's evolution."
                            </p>

                            <div className="mt-4">
                                <div className="font-semibold text-blurple-500">Vito Baggiolini</div>
                                <div className="text-sm opacity-70">Senior Software Engineer, CERN</div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-8">
                            <p className="mb-0">
                                "Sourcegraph empowers developers at Yelp to ship code faster and more reliably than ever
                                before."
                            </p>

                            <div className="mt-4">
                                <div className="font-semibold text-blurple-500">Kevin Chen</div>
                                <div className="text-sm opacity-70">Software Engineer, Yelp</div>
                            </div>
                        </div>
                    </div>
                    {/* <TwoColumnTestimonialCard
                        leftClientImgSrc="/home/testimonials/vito b profile.svg"
                        rightClientImgSrc="/home/testimonials/kevin c profile.svg"
                        rightTestimony="Sourcegraph empowers developers at Yelp to ship code faster and more reliably than ever before."
                        leftTestimony="Sourcegraph is extremely valuable for what we do. It enables us to easily clean up deprecated APIs and estimate the risks of our API's evolution."
                        leftClientName="Vito Baggiolini"
                        leftClientTitle="Senior Software Engineer, CERN"
                        rightClientName="Kevin Chen"
                        rightClientTitle="Software Engineer, Yelp"
                        isVariantStyle={true}
                    /> */}
                </div>

                {/* cody ----------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <div className="mt-28">
                    <div className="mx-auto max-w-6xl">
                        {/* header */}
                        <div className="flex items-center justify-center gap-4">
                            <img
                                className="h-[65px] w-[65px] rounded-t-2xl"
                                src="/home/branded-icons/cody-squircle.svg"
                                alt="Cody Product logo"
                            />
                            <h2 className="text-3xl font-medium sm:text-5xl md:text-6xl">Cody</h2>
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
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {/* chat */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 md:px-10">
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

                                <h2 className="mt-4 text-2xl lg:text-3xl">Solve hard problems with chat</h2>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Chat with Cody to quickly generate and edit code, using latest-gen AI models plus
                                    extensive codebase context for fast and accurate results.
                                </p>
                            </div>

                            {/* prompts */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 md:px-10">
                                <img
                                    className="h-10 w-10"
                                    src="/home/branded-icons/commands-brand-icon.svg"
                                    alt="Completions Brand Icon"
                                />
                                <h2 className="mt-4 text-2xl lg:text-3xl">Automate workflows with prompts</h2>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Build and customize prompts for automating common tasks and reducing toil. Generate
                                    unit tests, modernize code, document code, and more.
                                </p>
                            </div>
                        </div>

                        {/* completions */}
                        <div className="relative mt-6 flex overflow-hidden rounded-2xl border border-gray-200 bg-white">
                            <div className="flex flex-col justify-center px-6 py-8 md:px-10">
                                <img
                                    className="h-[40px] w-[40px]"
                                    src="/home/branded-icons/completions-brand-icon.svg"
                                    alt="Completions Brand Icon"
                                />
                                <h2 className="mt-4 text-2xl lg:text-3xl">Code faster with autocomplete</h2>
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

                {/* code search ----------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <div className="mt-28">
                    <div className="mx-auto max-w-6xl">
                        {/* header */}
                        <div className="flex items-center justify-center gap-4">
                            <img
                                className="h-[65px] w-[65px] rounded-t-2xl"
                                src="/home/branded-icons/Code-Search-squircle.svg"
                                alt="Code Search Product logo"
                            />
                            <h2 className="text-3xl font-medium sm:text-5xl md:text-6xl">Code Search</h2>
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
                        <div className="relative mt-10 flex min-h-[220px] gap-10 overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 pb-8 pt-8 md:px-10 lg:pt-4 lg:pb-0">
                            <div className="lg:pt-12">
                                <img
                                    className="h-8 w-8"
                                    src="/home/branded-icons/code-search-icon.svg"
                                    alt="Completions Brand Icon"
                                />
                                <h2 className="mt-4 text-2xl lg:text-3xl">Find and fix code</h2>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Find what you need in milliseconds across all of your code-no matter where it lives.
                                </p>
                            </div>

                            <div className="flex-grow">
                                <img
                                    className="hidden w-[750px] lg:block"
                                    src="/home/screens/find reusable implementations.svg"
                                    alt="Find reusable implementations"
                                    height={600}
                                    width={600}
                                />
                            </div>
                        </div>

                        {/* Code Search sections */}
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {/* Automate large-scale changes */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 md:px-10">
                                <img
                                    className="h-8 w-8"
                                    src="/home/branded-icons/batch-changes-icon.svg"
                                    alt="Batch Changes Icon"
                                />
                                <h2 className="mt-4 text-2xl lg:text-3xl">Automate large-scale code changes</h2>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Find and make changes across your codebase in one go, whether a version change or a
                                    vulnerability fix.
                                </p>
                            </div>

                            {/* Track trends */}
                            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 md:px-10">
                                <img
                                    className="h-8 w-8"
                                    src="/home/branded-icons/Code-insights-icon.svg"
                                    alt="Code Insights Icon"
                                />
                                <h2 className="mt-4 text-2xl lg:text-3xl">Track trends in your codebase</h2>
                                <p className="mt-2 mb-0 text-gray-500">
                                    Transform your code into a queryable database to create custom dashboards in
                                    seconds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* testimonial --------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                {/* <div className="mx-auto mt-48 max-w-7xl">
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
                </div> */}

                {/* call to actions ------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------- */}
                <div className="mx-auto mt-10 max-w-6xl">
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
                                    onClick={() =>
                                        captureCustomEventWithPageData('contact_sales_onpage_click', 'bottom')
                                    }
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
            </div>
        </Layout>
    )
}

const ProductivitySection: FunctionComponent = () => {
    const items = [
        {
            title: 'Quickly find and fix the code behind bugs and regressions',
            text: <img className="w-full" src="/home/screens/find regressions.svg" alt="Find regressions" />,
        },
        {
            title: 'Automate toilsome tasks like documentation and unit testing',
            text: <img className="w-full" src="/home/screens/automate toilsome tasks.svg" alt="Find regressions" />,
        },
        {
            title: 'Explain code and dependencies in seconds with AI',
            text: <img className="w-full" src="/home/screens/explain code.svg" alt="Find regressions" />,
        },
    ]

    return (
        <div className="mx-auto max-w-5xl">
            <FullWidthTabsCarousel
                darkMode={false}
                items={items}
                content={ContentEnum.Media}
                overline={false}
                cta={false}
            />
        </div>
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
                            <h1 className="w-full text-center text-5xl sm:text-6xl">
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
                            <h1 className="w-full text-center text-5xl sm:text-6xl">
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
                            <h1 className="w-full text-center text-5xl md:text-6xl">
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
                            <h1 className="w-full text-center text-5xl sm:text-6xl">
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

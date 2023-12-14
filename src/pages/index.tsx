import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, Layout, InfiniteCarousel, Heading } from '../components'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'

const carouselImages = [
    { src: '/home/carousel/1password-logo.svg', className: 'w-[190px] h-[37px] mx-6' },
    { src: '/home/carousel/reddit-logo.svg', className: 'w-[120px] h-[41.311px] mx-6' },
    { src: '/home/carousel/databricks-logo.svg', className: 'w-[139px] h-[30px] mx-6' },
    { src: '/home/carousel/podium-logo.svg', className: 'w-[164px] h-[35px] mx-6' },
    { src: '/home/carousel/qualtrics-logo.svg', className: 'w-[124px] h-[39.756px] mx-6' },
    { src: '/home/carousel/canva-logo.svg', className: 'w-[124px] h-[39.774px] mx-6' },
    { src: '/home/carousel/redfin-logo.svg', className: 'w-[136px] h-[36.082px] mx-6' },
    { src: '/home/carousel/nutanix-logo.svg', className: 'w-[201px] h-[24.446px] mx-6' },
]

const Home: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('home')

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Code AI platform',
                description:
                    'Sourcegraph’s code AI platform makes it easy for devs to write, fix, and maintain code with Cody, the AI coding assistant, and Code Search.',
            }}
            heroAndHeaderClassName="home-hero"
            headerColorTheme="purple"
            customFooterClassName="!bg-gray-50"
            customDark={false}
            hero={<HomeHero />}
        >
            <div className="bg-gray-50">
                <ContentSection parentClassName="!py-0" className="flex items-center justify-center">
                    <p className="pt-16 pb-10 text-center text-[20px] font-[590] uppercase leading-[27px] text-gray-500">
                        Over 1.8M engineers use Sourcegraph
                    </p>
                </ContentSection>
                <div className="flex items-center pb-16 md:pb-28">
                    <InfiniteCarousel images={carouselImages} />
                </div>
                <div className="mx-auto flex flex-col md:max-w-screen-xl md:px-6">
                    <div className="flex max-w-[769px] flex-col px-6 pb-14 md:px-0">
                        <div className="flex items-center gap-4 pb-6">
                            <img
                                className="h-[50px] w-[50px] rounded-t-2xl"
                                src="/home/branded-icons/cody-squircle.svg"
                                alt="Cody Product logo"
                            />
                            <Heading size="h1">Cody</Heading>
                        </div>
                        <Heading size="h3" className="leading-[30px] !-tracking-[0.25px] text-gray-500">
                            Write, fix, and maintain code with the most powerful & accurate AI coding assistant. Cody
                            uses the code graph to understand your entire codebase and help developers focus on writing
                            and shipping code.
                        </Heading>
                    </div>
                    <div className="pb-8">
                        {isMobile ? (
                            <div className="">
                                <img
                                    className="w-full"
                                    src="/home/mobile-cody-homepage-illustration.svg"
                                    alt="Cody Product logo"
                                />
                            </div>
                        ) : (
                            <img
                                className="h-[568px] w-[1280px]"
                                src="/home/homepage-cody-product-illustration.svg"
                                alt="Cody Product logo"
                            />
                        )}
                    </div>
                    <div className="relative mx-6 mb-8 flex h-auto gap-[19px]  overflow-hidden rounded-2xl border-1 border-gray-200 bg-white md:mx-0 md:h-[329px]">
                        <div className="flex  flex-col py-16 pl-10">
                            <img
                                className="h-[48px] w-[48px]"
                                src="/home/branded-icons/completions-brand-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <Heading size="h2" className="pb-4 pt-6 !-tracking-[1px] md:leading-10">
                                Faster coding with autocomplete
                            </Heading>
                            <Heading size="h3" className="leading-[30px] !-tracking-[0.25px] text-gray-500">
                                Suggestions for single lines or whole functions, in any programming language,
                                configuration file, or docs.
                            </Heading>
                        </div>
                        {!isMobile && (
                            <div className="h-full w-full">
                                <div className="autocomplete-gradient absolute z-0 h-[392.193px] w-[1087.411px]" />
                                <img
                                    className=" relative h-full w-full"
                                    src="/home/multiline-completion.svg"
                                    alt="Multiline Completion"
                                />
                            </div>
                        )}
                    </div>
                    <div className="mx-6 mb-8 grid grid-cols-1 gap-8 md:mx-0 md:grid-cols-2 md:gap-6">
                        <div className="flex flex-col rounded-2xl border-1 border-gray-200 bg-white py-16 px-10">
                            <img
                                className="h-[48px] w-[48px]"
                                src="/home/branded-icons/chat-brand-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <Heading size="h2" className="pb-4 pt-6 !-tracking-[1px] md:leading-10">
                                Get help with context-aware chat
                            </Heading>
                            <Heading size="h3" className="mb-0 leading-[30px] !-tracking-[0.25px] text-gray-500">
                                Query like a human and learn about your code, or get help with tricky problems.
                            </Heading>
                        </div>
                        <div className="flex flex-col rounded-2xl border-1 border-gray-200 bg-white py-16 px-10">
                            <img
                                className="h-[48px] w-[48px]"
                                src="/home/branded-icons/commands-brand-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <Heading size="h2" className="pb-4 pt-6 !-tracking-[1px] md:leading-10">
                                Automate workflows with commands
                            </Heading>
                            <Heading size="h3" className="mb-0 leading-[30px] !-tracking-[0.25px] text-gray-500">
                                Build and personalize commands that automate common tasks. Explain code or generate unit
                                tests in seconds.
                            </Heading>
                        </div>
                    </div>
                    <Link
                        href="https://sourcegraph.com/cody"
                        title="Cody"
                        className="btn rounded-65px] mx-6 mb-16 border border-violet-500 p-0 px-5 py-3 text-center font-semibold !-tracking-[0.25px]  text-violet-500 hover:border-violet-400 hover:text-violet-400 md:mx-0 md:mb-28 md:border-none md:px-0 md:pb-0 md:pt-0 md:text-left md:text-violet-500"
                    >
                        Learn more about Cody
                        <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                    </Link>
                    <div className="relative overflow-hidden md:overflow-visible">
                        <div className="sg-reviews mb-28 grid grid-cols-1 gap-[30px] rounded-none px-6 py-24 md:mb-24 md:grid-cols-2 md:rounded-2xl md:px-20">
                            <div className="flex flex-col gap-4 rounded-[10px] border-1 border-gray-200 bg-white p-5">
                                <div className="flex ">
                                    <img
                                        className="mr-[10px] h-[40px] w-[40px]"
                                        src="/home/reviews1.png"
                                        alt="Completions Brand Icon"
                                    />
                                    <div className="flex flex-col">
                                        <p className="mb-0 text-base text-violet-500">Ronnie Magatti</p>
                                        <p className="mb-0 text-sm !-tracking-[0.25px] text-gray-500">
                                            Team Lead & Principal Software Engineer, Neo Financial
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-0 text-lg !-tracking-[0.25px] text-gray-700">
                                    With Sourcegraph, developers are more productive and it’s clear that every team is
                                    getting 1% better every day.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 rounded-[10px] border-1 border-gray-200 bg-white p-5">
                                <div className="flex ">
                                    <img
                                        className="mr-[10px] h-[40px] w-[40px]"
                                        src="/home/reviews2.png"
                                        alt="Completions Brand Icon"
                                    />
                                    <div className="flex flex-col">
                                        <p className="mb-0 text-base text-violet-500">Bryce Kalow</p>
                                        <p className="mb-0 text-sm !-tracking-[0.25px] text-gray-500">
                                            Senior Web Engineer, HashiCorp
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-0 text-lg !-tracking-[0.25px] text-gray-700">
                                    By its nature and capabilities, Sourcegraph can be a tool to reduce friction, speed
                                    up feedback loops, and improve developer velocity.
                                </p>
                            </div>
                        </div>
                        <div className="z-10 mx-6 mb-14 flex flex-col md:mx-0 md:w-[762px]">
                            <div className="flex items-center gap-4 pb-6">
                                <img
                                    className="h-[50px] w-[50px] rounded-t-2xl"
                                    src="/home/branded-icons/Code-Search-squircle.svg"
                                    alt="Cody Product logo"
                                />
                                <Heading size="h1">Code Search</Heading>
                            </div>
                            <Heading size="h3" className="leading-[30px] !-tracking-[0.25px] text-gray-500">
                                Search your entire codebase—every code host and repository, at any scale—in a single
                                place. Code Search makes it easy for developers to onboard to new codebases, understand
                                code faster, and find & fix security risks.
                            </Heading>
                        </div>
                        <div className="flex pb-8">
                            {isMobile ? (
                                <>
                                    <img
                                        className="z-20 ml-6 mr-0 h-[279px] w-[826px]"
                                        src="/home/code-search-mobile.svg"
                                        alt="Cody Search"
                                    />
                                    <div className="code-search-gradient absolute top-[600px] right-[-700px] z-10 h-[1245.828px] w-full " />
                                </>
                            ) : (
                                <>
                                    <img
                                        className="z-20 h-[549px] w-auto"
                                        src="/home/code-search.svg"
                                        alt="Cody Search"
                                    />
                                    <div className="code-search-gradient absolute left-[340px] top-[351px] z-10 h-[1245.828px] w-[524.518px] " />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="gap-19 z-10 mx-6 mb-8 flex rounded-2xl border-1 border-gray-200 bg-white md:mx-0">
                        <div className=" flex max-w-[590px] flex-col py-16 pl-10 pr-[70px]">
                            <img
                                className="h-[32px] w-[30.316px]"
                                src="/home/branded-icons/code-search-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <Heading size="h2" className="pb-4 pt-6 !-tracking-[1px] md:leading-10">
                                Find and fix code
                            </Heading>
                            <Heading size="h3" className="leading-[30px] !-tracking-[0.25px] text-gray-500">
                                Find what you need in milliseconds across all of your code–no matter where it lives.
                            </Heading>
                        </div>
                        {!isMobile && <img className="" src="/home/code-graph-home.svg" alt="Multiline Completion" />}
                    </div>
                    <div className="mx-6 mb-8 flex flex-col gap-8 md:mx-0 md:flex-row md:gap-6">
                        <div className="flex w-full flex-col rounded-2xl border-1 border-gray-200 bg-white py-16 px-10 md:w-[566px]">
                            <img
                                className="h-[48px] w-[48px]"
                                src="/home/branded-icons/Code-insights-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <Heading size="h2" className="pb-4 pt-6 !-tracking-[1px] md:leading-10">
                                Track trends in your codebase
                            </Heading>
                            <Heading size="h3" className="leading-[30px] !-tracking-[0.25px] text-gray-500">
                                Transform your code into a queryable database to create custom dashboards in seconds.
                            </Heading>
                        </div>
                        <div className="flex w-full flex-col rounded-2xl border-1 border-gray-200 bg-white py-16 px-10">
                            <img
                                className="h-[48px] w-[48px]"
                                src="/home/branded-icons/batch-changes-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <Heading size="h2" className="pb-4 pt-6 !-tracking-[1px] md:leading-10">
                                Automate large-scale code changes
                            </Heading>
                            <Heading size="h3" className="leading-[30px] !-tracking-[0.25px] text-gray-500">
                                Find and make changes across your codebase in one go, whether a version change or a vulnerability fix.
                            </Heading>
                        </div>
                    </div>
                    <Link
                        href="https://sourcegraph.com/code-search"
                        title="Code Search"
                        className="btn rounded-65px] mx-6 mb-28 border border-violet-500 p-0 px-5 py-3 text-center font-semibold !-tracking-[0.25px] text-violet-500  hover:border-violet-400 hover:text-violet-400 md:mx-0 md:mb-24 md:border-none md:px-0 md:pb-0 md:pt-0 md:text-left md:text-violet-500"
                    >
                        Learn more about Code Search
                        <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                    </Link>
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
                        <div className="flex whitespace-nowrap px-10 md:self-end md:px-0">
                            <Link
                                href="https://sourcegraph.com/case-studies/lyft-monolith-to-microservices"
                                title="Case study"
                                className="btn p-0 text-white"
                            >
                                Read the case study
                                <ChevronRightIcon className="!mb-0 ml-[10px] inline" />
                            </Link>
                        </div>
                    </div>
                    <div className="mx-6 grid grid-cols-1 gap-6 py-16 md:mx-0 md:grid-cols-2 md:py-24">
                        <div className="hover:cta-free-cody relative overflow-hidden rounded-2xl border-1 border-gray-200 bg-white">
                            <div className="cta-top-border absolute top-0 left-0 right-0 rounded-t-2xl" />
                            <div className=" py-16 px-14">
                                <Heading className="mb-4 !-tracking-[1px] text-gray-700 md:leading-10" size="h2">
                                    Cody Free
                                </Heading>
                                <p className="mb-0 text-lg text-gray-500">
                                    Use Cody for free in your IDE, no credit card required.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        className={classNames('btn btn-primary w-full md:w-auto')}
                                        title="free cody"
                                        onClick={handleOpenModal}
                                    >
                                        Get Cody for free
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cta-home rounded-2xl py-16 px-14 text-white">
                            <Heading className="mb-[10px] !-tracking-[1px] md:leading-10" size="h2">
                                Cody Enterprise
                            </Heading>
                            <p className="mb-0 text-lg text-[#FFFFFFCC]">
                                Cody Enterprise provides additional security, scalability, and control for your
                                organization. Unlimited usage and context-awareness of your entire codebase.
                            </p>
                            <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
                                <Link
                                    href="https://sourcegraph.com/contact/request-info"
                                    title="Get Cody for Enterprise"
                                    className="btn hover:bg-color-violet-600 w-full rounded-[5px] border border-white py-2 px-6 text-center text-white md:w-auto"
                                >
                                    Contact sales
                                </Link>
                                <Link
                                    href="https://sourcegraph.com/pricing"
                                    title="See pricing"
                                    className="btn hover:bg-color-violet-600 border-whit w-full rounded-[5px] border px-6 text-center text-white md:w-auto md:border-none"
                                >
                                    See pricing
                                    {!isMobile && <ChevronRightIcon className="!mb-0 ml-[10px] inline" />}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const HomeHero: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.sm

    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('home')
    return (
        <ContentSection className="flex items-center justify-center" parentClassName="!py-0">
            <div className="mx-auto flex flex-col items-center justify-center text-center">
                <div className="mx-auto flex flex-col items-center pt-8 pb-16 md:w-[680px] md:pt-16 md:pb-[70px]">
                    <Heading
                        size="h1"
                        className="mb-8 w-full text-center !text-[48px] text-white md:mb-6 md:!text-[62px] lg:leading-[65px] lg:-tracking-[0.62px]"
                    >
                        Grok and write code blazingly fast
                    </Heading>
                    <p className="mb-10 text-2xl font-normal leading-[30px] -tracking-[0.25px] text-[#FFFFFF99] md:mb-8">
                        Sourcegraph allows developers to rapidly search, write, and understand code by bringing 
                        insights from their entire codebase right into the editor
                    </p>
                    <button
                        type="button"
                        className={classNames('btn btn-inverted-primary text-violet-500')}
                        title="free cody"
                        onClick={handleOpenModal}
                    >
                        Get Cody for free
                    </button>
                </div>
                {!isMobile && (
                    <div className="w-full overflow-hidden lg:w-[1062px]">
                        <video
                            className="relative bottom-[-6px] rounded-t-lg"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            controls={false}
                        >
                            <source type="video/ogg" src="/home/Header-Vid-Non-Rounded.ogg" />
                            <source type="video/mp4" src="/home/Header-Vid-Non-Rounded.mp4" />
                            <source type="video/webm" src="/home/Header-Vid-Non-Rounded.webm" />
                        </video>
                    </div>
                )}
            </div>
        </ContentSection>
    )
}

export default Home

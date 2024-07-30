import { FunctionComponent, ReactSVG } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, Layout, InfiniteCarousel } from '../components'
import ClientDoubleCaseStudyCard from '../components/ClientDoubleCaseStudyCard'
import { Icon } from '../components/icon'
import ReadCaseStudyLink from '../components/ReadCaseStudyLink'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../lib/utils'

export const carouselImages = [
    { src: '/home/carousel/1password-logo.svg', className: 'w-[190px] h-[37px] mx-6', url: '/case-studies' },
    { src: '/home/carousel/reddit-logo.svg', className: 'w-[120px] h-[41.311px] mx-6', url: '/case-studies' },
    { src: '/home/carousel/databricks-logo.svg', className: 'w-[139px] h-[30px] mx-6', url: '/case-studies' },
    { src: '/home/carousel/podium-logo.svg', className: 'w-[164px] h-[35px] mx-6', url: '/case-studies' },
    { src: '/home/carousel/qualtrics-logo.svg', className: 'w-[124px] h-[39.756px] mx-6', url: '/case-studies' },
    { src: '/home/carousel/canva-logo.svg', className: 'w-[124px] h-[39.774px] mx-6', url: '/case-studies' },
    { src: '/home/carousel/redfin-logo.svg', className: 'w-[136px] h-[36.082px] mx-6', url: '/case-studies' },
    { src: '/home/carousel/nutanix-logo.svg', className: 'w-[201px] h-[24.446px] mx-6', url: '/case-studies' },
]

interface HomeHeroProps {
    onOpenModal: (pagePosition: string) => void
}

const Home: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    const isDesktop = windowWidth > breakpoints.lg

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
                    'Sourcegraph’s code intelligence platform makes it easy for devs to write, fix, and maintain code with Cody, the AI coding assistant, and Code Search.',
            }}
            heroAndHeaderClassName=""
            headerColorTheme="white"
            customDark={false}
            hero={<HomeHero onOpenModal={handleOpenModal} />}
            className="relative w-full !overflow-hidden bg-gray-50"
            displayChildrenUnderNav={false}
        >
            <div className="oveflow-hidden relative w-full bg-gray-50">
                <ContentSection parentClassName="!py-0" className="flex items-center justify-center">
                    <p className="mb-16 text-center text-[20px] font-[590] uppercase leading-[27px] text-gray-500">
                        Over 2.5M engineers use Sourcegraph
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
                            <h1>Cody</h1>
                        </div>
                        <h3 className="text-gray-500">
                            Ship code faster with Cody, the AI coding assistant. Cody uses advanced search and codebase
                            context to help you write and fix code.
                        </h3>
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
                    <div className="relative mx-6 mb-8 flex h-auto gap-[19px] overflow-hidden rounded-2xl border-1 border-gray-200 bg-white md:mx-0 md:max-h-[500px] lg:h-[329px]">
                        <div className="text-pretty flex w-full flex-col py-16 pl-10">
                            <img
                                className="h-[40px] w-[40px]"
                                src="/home/branded-icons/completions-brand-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <h2 className="break-words pb-4 pt-6">Faster coding with autocomplete</h2>
                            <h5 className="text-gray-500">
                                Suggestions for single lines or whole functions, in any programming language,
                                configuration file, or docs.
                            </h5>
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
                        <div className="flex flex-col rounded-2xl border-1 border-gray-200 bg-white px-10 py-16">
                            {/* <img
                                className="h-[48px] w-[48px]"
                                src="/home/branded-icons/chat-brand-icon.svg"
                                alt="Completions Brand Icon"
                            /> */}
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
                            <Icon fill="none" iconNode={iconDefinition} size={48} color="url(#grad1)" />
                            <h2 className="pb-4 pt-6">Get help with context-aware chat</h2>
                            <h5 className="mb-0 text-gray-500">
                                Query like a human and learn about your code, or get help with tricky problems.
                            </h5>
                        </div>
                        <div className="flex flex-col rounded-2xl border-1 border-gray-200 bg-white px-10 py-16">
                            <img
                                className="h-[40px] w-[40px]"
                                src="/home/branded-icons/commands-brand-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <h2 className="pb-4 pt-6">Automate workflows with commands</h2>
                            <h5 className="mb-0 text-gray-500">
                                Build and personalize commands that automate common tasks. Explain code or generate unit
                                tests in seconds.
                            </h5>
                        </div>
                    </div>
                    <Link
                        href="https://sourcegraph.com/cody"
                        title="Cody"
                        className="btn btn-link btn-link-icon mx-6 mb-16 p-0 px-5 py-3 text-center font-semibold !-tracking-[0.25px] md:mx-0 md:mb-28 md:px-0 md:pb-0 md:pt-0 md:text-left"
                    >
                        Learn more about Cody
                        <ChevronRightIcon className="link-icon" />
                    </Link>
                    <div className="relative overflow-hidden md:overflow-visible">
                        <ClientDoubleCaseStudyCard
                            leftClientImgSrc="/home/reviews1.svg"
                            rightClientImgSrc="/home/reviews2.png"
                            rightTestimony="By its nature and capabilities, Sourcegraph can be a tool to reduce friction, speed up feedback loops, and improve developer velocity."
                            leftTestimony="Sourcegraph is extremely valuable for what we do. It enables us to easily clean up deprecated APIs and estimate the risks and costs of our API's evolution."
                            leftClientName="Vito Baggiolini"
                            leftClientTitle="Senior Software Engineer, CERN"
                            rightClientName="Bryce Kalow"
                            rightClientTitle="Senior Web Engineer, HashiCorp"
                        />
                        <div className="z-10 mx-6 mb-14 flex flex-col md:mx-0 md:w-[762px]">
                            <div className="flex items-center gap-4 pb-6">
                                <img
                                    className="h-[50px] w-[50px] rounded-t-2xl"
                                    src="/home/branded-icons/Code-Search-squircle.svg"
                                    alt="Cody Product logo"
                                />
                                <h1>Code Search</h1>
                            </div>
                            <h3 className="text-gray-500">
                                Search your entire codebase—every code host and repository, at any scale—in a single
                                place. Code Search makes it easy for developers to onboard to new codebases, understand
                                code faster, and find & fix security risks.
                            </h3>
                        </div>
                        <div className="flex pb-8">
                            {isMobile ? (
                                <>
                                    <img
                                        className="z-20 ml-6 mr-0 h-[279px] w-[826px]"
                                        src="/home/code-search-mobile.svg"
                                        alt="Cody Search"
                                    />
                                    <div className="code-search-gradient absolute right-[-700px] top-[600px] z-10 h-[1245.828px] w-full " />
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
                    <div className="gap-19 z-10 mx-6 mb-8 flex justify-between rounded-2xl border-1 border-gray-200 bg-white md:mx-0">
                        <div className=" flex max-w-[590px] flex-col py-16 pl-10 pr-[70px]">
                            <img
                                className="h-[32px] w-[30.316px]"
                                src="/home/branded-icons/code-search-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <h2 className="pb-4 pt-6">Find and fix code</h2>
                            <h5 className="text-gray-500">
                                Find what you need in milliseconds across all of your code–no matter where it lives.
                            </h5>
                        </div>
                        {isDesktop && <img src="/home/code-graph-home.svg" alt="Multiline Completion" />}
                    </div>
                    <div className="mx-6 mb-8 flex flex-col gap-8 md:mx-0 md:flex-row md:gap-6">
                        <div className="flex w-full flex-col rounded-2xl border-1 border-gray-200 bg-white px-10 py-16">
                            <img
                                className="h-[40px] w-[40px]"
                                src="/home/branded-icons/Code-insights-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <h2 className="break-words pb-4 pt-6">Track trends in your codebase</h2>
                            <h5 className="text-gray-500">
                                Transform your code into a queryable database to create custom dashboards in seconds.
                            </h5>
                        </div>
                        <div className="flex w-full flex-col rounded-2xl border-1 border-gray-200 bg-white px-10 py-16">
                            <img
                                className="h-[40px] w-[40px]"
                                src="/home/branded-icons/batch-changes-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <h2 className="pb-4 pt-6">Automate large-scale code changes</h2>
                            <h3 className="text-lg text-gray-500">
                                Find and make changes across your codebase in one go, whether a version change or a
                                vulnerability fix.
                            </h3>
                        </div>
                    </div>
                    <Link
                        href="https://sourcegraph.com/code-search"
                        title="Code Search"
                        className="btn btn-link btn-link-icon mx-6 mb-28 p-0 px-5 py-3 text-center font-semibold !-tracking-[0.25px] md:mx-0 md:mb-24 md:px-0 md:pb-0 md:pt-0 md:text-left"
                    >
                        Learn more about Code Search
                        <ChevronRightIcon className="link-icon" />
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
                        <ReadCaseStudyLink
                            parentClassName="flex whitespace-nowrap px-10 md:self-end md:px-0"
                            linkClassName="btn btn-link-dark btn-link-icon p-0"
                            href="https://sourcegraph.com/case-studies/lyft-monolith-to-microservices"
                        />
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
                                        Get Cody for free
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
                                    href="https://sourcegraph.com/contact/request-info"
                                    title="Get Cody for Enterprise"
                                    className="btn btn-secondary-dark w-full px-6 py-2 text-center md:w-auto"
                                >
                                    Request info
                                </Link>
                                <Link
                                    href="https://sourcegraph.com/pricing"
                                    title="See pricing"
                                    className={classNames(
                                        'btn btn-link-dark w-full rounded-[5px] px-6 text-center md:w-auto',
                                        !isMobile ? 'btn-link-icon' : ''
                                    )}
                                >
                                    See pricing
                                    {!isMobile && <ChevronRightIcon className="link-icon" />}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const HomeHero: FunctionComponent<HomeHeroProps> = ({ onOpenModal }) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.sm

    return (
        <ContentSection
            className="relative mt-[-72px] flex items-center justify-center rounded-2xl bg-violet-700 md:mt-[-43px]"
            parentClassName="!py-0 !pb-16 !bg-gray-50"
        >
            <div className="mx-auto flex flex-col items-center justify-center px-3 text-center md:px-0">
                <div className="mx-auto flex max-w-[456px] flex-col items-center pb-8 pt-8 sm:max-w-full md:w-[680px] md:pb-[26px] md:pt-10">
                    <h1 className="mb-8 mt-10 w-full text-center text-5xl text-gray-100 sm:text-6xl">
                        Understand and write code blazingly fast
                    </h1>
                    <p className="mb-10 text-2xl font-normal leading-[30px] -tracking-[0.25px] text-white opacity-60 md:mb-8">
                        Sourcegraph allows developers to rapidly search, write, and understand code by bringing insights
                        from their entire codebase right into the editor
                    </p>
                    <button
                        type="button"
                        className="btn btn-primary-dark w-full max-w-[356px] px-5 sm:w-fit sm:px-6"
                        title="free cody"
                        onClick={() => onOpenModal('top')}
                    >
                        Get Cody for free
                    </button>
                </div>
                {!isMobile && (
                    <div className="w-full overflow-hidden lg:w-[1062px]">
                        <video
                            className="relative bottom-[-6px] rounded-t-xl shadow-md"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            controls={false}
                        >
                            <source type="video/webm" src="/home/Header-Vid-Non-Rounded.webm" />
                            <source type="video/mp4" src="/home/Header-Vid-Non-Rounded.mp4" />
                            <source type="video/ogg" src="/home/Header-Vid-Non-Rounded.ogg" />
                        </video>
                    </div>
                )}
            </div>
        </ContentSection>
    )
}

export default Home

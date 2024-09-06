import { FunctionComponent, ReactSVG, useState, useEffect } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { posthog } from 'posthog-js'

import { ContentSection, Layout, CodyPartners } from '../components'
import { BentoWithMockup } from '../components/bentoWithMockup'
import { Icon } from '../components/icon'
import ReadCaseStudyLink from '../components/ReadCaseStudyLink'
import TwoColumnTestimonialCard from '../components/TwoColumnTestimonialCard'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../lib/utils'

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
                <ContentSection parentClassName="!py-0" className="flex flex-col items-center justify-center">
                    <p className="text-center text-base font-normal uppercase leading-[27px] text-gray-400">
                        Over 2.5M engineers use Sourcegraph
                    </p>
                </ContentSection>

                <div className="flex items-center pb-20">
                    <CodyPartners isLight={true} className="!pb-4 pt-4" />
                </div>

                <div className="mx-auto flex flex-col pb-20 md:max-w-screen-xl md:px-6">
                    <div className="px-6 md:px-0">
                        <BentoWithMockup isVariantTitle={true} href="/resources/gartner-mq" />
                    </div>
                </div>

                <div className="mx-auto flex flex-col md:max-w-screen-xl md:px-6">
                    <div className="flex max-w-[769px] flex-col px-6 pb-6 md:px-0">
                        <div className="flex items-center gap-4 pb-6">
                            <img
                                className="h-[50px] w-[50px] rounded-t-2xl"
                                src="/home/branded-icons/cody-squircle.svg"
                                alt="Cody Product logo"
                            />
                            <h2>Cody</h2>
                        </div>

                        <h3 className="text-gray-500">
                            Ship code faster with Cody, the AI coding assistant. Cody uses the latest models plus the
                            most extensive development context to help you solve hard problems in your IDE.
                        </h3>
                    </div>
                    <Link
                        href="https://sourcegraph.com/cody"
                        title="Cody"
                        className="btn btn-link btn-link-icon mx-6 mb-16 p-0 px-5 py-3 text-center font-semibold !-tracking-[0.25px] md:mx-0 md:mb-14 md:px-0 md:pb-0 md:pt-0 md:text-left"
                    >
                        Learn more about Cody
                        <ChevronRightIcon className="link-icon" />
                    </Link>
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

                    {/* Chat + Prompts sections */}
                    <div className="mx-6 mb-0 grid grid-cols-1 gap-8 md:mx-0 md:grid-cols-2 md:gap-6">
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
                            <h2 className="pb-4 pt-6">Solve hard problems with chat</h2>
                            <h5 className="mb-0 text-gray-500">
                                Chat with Cody to quickly generate and edit code, using latest-gen AI models plus
                                extensive codebase context for fast and accurate results.
                            </h5>
                        </div>
                        <div className="flex flex-col rounded-2xl border-1 border-gray-200 bg-white px-10 py-16">
                            <img
                                className="h-[40px] w-[40px]"
                                src="/home/branded-icons/commands-brand-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <h2 className="pb-4 pt-6">Automate workflows with prompts</h2>
                            <h5 className="mb-0 text-gray-500">
                                Build and customize prompts for automating common tasks and reducing toil. Generate unit
                                tests, modernize code, document code, and more.
                            </h5>
                        </div>
                    </div>

                    {/* Completions section */}
                    <div className="relative mx-6 mt-8 flex h-auto gap-[19px] overflow-hidden rounded-2xl border-1 border-gray-200 bg-white md:mx-0 md:max-h-[500px] lg:h-[329px]">
                        <div className="text-pretty flex w-full flex-col py-16 pl-10">
                            <img
                                className="h-[40px] w-[40px]"
                                src="/home/branded-icons/completions-brand-icon.svg"
                                alt="Completions Brand Icon"
                            />
                            <h2 className="break-words pb-4 pt-6">Code faster with autocomplete</h2>
                            <h5 className="text-gray-500">
                                Cody completes single lines or whole functions, in any programming language,
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

                    <div className="relative overflow-hidden md:overflow-visible">
                        <TwoColumnTestimonialCard
                            leftClientImgSrc="/home/reviews1.svg"
                            rightClientImgSrc="/home/reviews2.png"
                            rightTestimony="By its nature and capabilities, Sourcegraph can be a tool to reduce friction, speed up feedback loops, and improve developer velocity."
                            leftTestimony="Sourcegraph is extremely valuable for what we do. It enables us to easily clean up deprecated APIs and estimate the risks and costs of our API's evolution."
                            leftClientName="Vito Baggiolini"
                            leftClientTitle="Senior Software Engineer, CERN"
                            rightClientName="Bryce Kalow"
                            rightClientTitle="Senior Web Engineer, HashiCorp"
                            isVariantStyle={true}
                        />
                        <div className="z-10 mx-6 mb-14 flex flex-col md:mx-0 md:w-[762px]">
                            <div className="flex items-center gap-4 pb-6">
                                <img
                                    className="h-[50px] w-[50px] rounded-t-2xl"
                                    src="/home/branded-icons/Code-Search-squircle.svg"
                                    alt="Code Search Product logo"
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
                                >
                                    Book a demo
                                </Link>
                                <Link
                                    href="/pricing"
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
    const [abTest, setAbTest ] = useState('');

        useEffect(() => {
            posthog.onFeatureFlags(() => {
                const featureFlag = posthog.getFeatureFlag('platform-messaging-test');
                if (featureFlag === 'test-hard-eng-probs') {
                    setAbTest('test-hard-eng-probs');
                } else if (featureFlag === 'test-operate-at-scale'){
                    setAbTest('test-operate-at-scale');
                } else if (featureFlag === 'test-elevate-engineering'){
                    setAbTest('test-elevate-engineering');
                } else {
                    setAbTest('control');
                }
            });
        }, []);
    return (
    <ContentSection
        className="relative mt-[64px] flex items-center justify-center rounded-2xl md:mt-[32px]"
        parentClassName="!py-0 !pb-16 !bg-gray-50"
    >
        <div className="mx-auto flex flex-col items-center justify-center px-3 text-center md:px-0">
            <div className="mx-auto flex flex-col items-center pb-4 pt-4 md:w-[680px] md:pb-[26px] md:pt-20">
                {abTest === 'control' && (
                    <>
                        <h1 className="w-full text-center text-4xl sm:text-8xl">
                            Understand and write code{' '}
                            <span className="font-extrabold italic text-[#A112FF]">blazingly fast</span>
                        </h1>

                        <p className="mt-6 font-normal leading-tight text-gray-400 md:text-xl">
                            Sourcegraph allows developers to rapidly search, write, and understand code by bringing insights
                            from their entire codebase right into the editor
                        </p>
                    </>
                )}

                {abTest === 'test-hard-eng-probs' && (
                    <>
                        <h1 className="w-full text-center text-4xl sm:text-8xl">
                            <span className="font-extrabold italic text-[#A112FF]">Code Intelligence</span> that solves the{' '}
                            hardest engineering problems
                        </h1>

                        <p className="mt-6 font-normal leading-tight text-gray-400 md:text-xl">
                            Sourcegraph has the most scalable code search and the AI assistant with the most extensive developer context to help build and ship faster
                        </p>
                    </>
                )}
                
                {abTest === 'test-operate-at-scale' && (
                    <>
                        <h1 className="w-full text-center text-4xl sm:text-8xl">
                            <span className="font-extrabold italic text-[#A112FF]">Code Intelligence</span> for engineering teams operating at scale
                        </h1>

                        <p className="mt-6 font-normal leading-tight text-gray-400 md:text-xl">
                            Sourcegraph has the most scalable code search and the AI assistant with the most extensive developer context to help build and ship faster
                        </p>
                    </>
                )}

                {abTest === 'test-elevate-engineering' && (
                    <>
                        <h1 className="w-full text-center text-4xl sm:text-6xl">
                            <span className="font-extrabold italic text-[#A112FF]">Contextual AI</span> and <span className="font-extrabold italic text-[#A112FF]">scalable search</span> to elevate your engineering team
                        </h1>

                        <p className="mt-6 font-normal leading-tight text-gray-400 md:text-xl">
                            Sourcegraph helps developers working in complex environments navigate, understand, and write code faster
                        </p>
                    </>
                )}
                
                <div className="mx-auto mt-6 flex flex-row flex-wrap justify-center gap-2 rounded-[6px]">
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
                        onClick={() => captureCustomEventWithPageData('contact_sales_onpage_click')}
                    >
                        <div className="flex items-center justify-center">Book a demo</div>
                    </Link>
                </div>
            </div>
        </div>
    </ContentSection>
)}

export default Home

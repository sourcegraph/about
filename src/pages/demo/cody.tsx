import { FunctionComponent, useEffect, useRef } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import LockIcon from 'mdi-react/LockIcon'
import RocketIcon from 'mdi-react/RocketIcon'
import StarIcon from 'mdi-react/StarIcon'
import Link from 'next/link'

import {
    ContentSection,
    Heading,
    Layout,
    ExternalsAuth,
    HubSpotForm,
    Badge,
    CodyAutocomplete,
    CodyImageTab,
    CodyCta,
    CodyIde,
    CodyChat,
} from '../../components'
import { breakpoints } from '../../data/breakpoints'
import { EventName, getEventLogger } from '../../hooks/eventLogger'
import { useWindowWidth } from '../../hooks/windowWidth'

import styles from '../../styles/CustomHubspotForm.module.scss'

declare global {
    interface Window {
        saq?: (type: string, id: string) => void
    }
}

const IMAGE_TAB_CONTENT = [
    {
        header: 'Explain code or entire repositories',
        description: 'Get up to speed on new projects quickly',
        imageSrc: {mobile: '/cody/explain-code.png' , desktop: '/cody/explain-code.svg'},
    },
    {
        header: 'Generate unit tests in seconds',
        description: 'Spend more time writing new code',
        imageSrc: {mobile: '/cody/generate-unit-tests.png' , desktop: '/cody/generate-unit-tests.svg'},
    },
    {
        header: 'Describe code smells',
        description: 'Optimize your code for best practices',
        imageSrc: {mobile: '/cody/describe-code-smell.png' , desktop: '/cody/describe-code-smell.svg'},
    },
    {
        header: 'Define your own custom commands',
        description: 'Customize Cody for your workflow',
        imageSrc: {mobile: '/cody/define-custom-command.png' , desktop: '/cody/define-custom-command.svg'},
    },
]

const DemoCodyPage: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg
    const isXsMobile = windowWidth < 396

    const formContainerRef = useRef<HTMLDivElement | null>(null)

    const scrollToForm = (): void => {
        if (formContainerRef.current) {
            formContainerRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const eventArguments = {
            description: 'About - Cody page view',
            source: 'about-cody',
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger()?.log(EventName.VIEW_ABOUT_CODY, eventArguments, eventArguments)
    }, [])

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://about.sourcegraph.com/cody/cody-og.png',
            }}
            headerColorTheme="purple"
            childrenClassName={isMobile ? 'sg-bg-gradient-cody-mobile' : 'sg-bg-gradient-cody'}
            displayChildrenUnderNav={true}
        >
            {/* Hero Section */}
            <ContentSection parentClassName="!py-0 !px-0" className="-mt-8 pt-0 md:mt-0 md:pt-[22px] md:pb-9">
                <div className="flex flex-col justify-between gap-y-6 px-sm lg:flex-row lg:gap-x-[70px] lg:gap-y-0">
                    <div className="w-full max-w-[656px]">
                        <div className="center flex items-center gap-x-4">
                            <Heading size="h1" className="!text-[53px] text-white md:!text-[62px]">
                                Meet Cody{' '}
                            </Heading>
                            <img
                                src="/cody/cody-logo.svg"
                                className="h-[45px] w-[49px] md:h-[50px] md:w-[55px]"
                                alt="Cody Logo"
                            />
                        </div>
                        <div className="mx-auto w-full pt-6 text-[39px] font-semibold leading-[41px] tracking-[-1.17px] text-white md:text-[39px] md:leading-[47px]">
                            We’re building the only AI coding assistant <br /> that knows your{' '}
                            <span className="cody-heading bg-clip-text text-transparent"> entire codebase </span>
                        </div>
                        <Heading size="h4" className="mt-6 max-w-[637px]  !font-normal text-gray-200">
                            Cody answers technical questions and writes code directly in your IDE, using your code graph
                            for context and accuracy.
                        </Heading>
                        <div className="mt-6 text-lg font-semibold text-white">
                            Get Started with Cody <Badge size="small" text="BETA" color="violet" />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 sm:w-[512px]">
                            <div className="flex w-[228px] flex-wrap gap-2 md:w-fit">
                                <ExternalsAuth
                                    className="max-w-[228px] flex-1 justify-center !font-normal  xs:w-fit xs:flex-grow-0"
                                    authProvider="github"
                                    label="GitHub"
                                    source="about-cody"
                                />
                                <ExternalsAuth
                                    className="max-w-[228px] flex-1 justify-center !font-normal xs:w-fit xs:flex-grow-0"
                                    authProvider="gitlab"
                                    label="GitLab"
                                    source="about-cody"
                                />
                            </div>

                            <ExternalsAuth
                                className={`w-fit justify-center !font-normal ${
                                    isXsMobile ? 'max-w-[228px] flex-1' : ''
                                }`}
                                authProvider="google"
                                label="Google"
                                source="about-cody"
                            />
                        </div>
                        <p className="mt-6 text-[14px] text-violet-300 opacity-70">
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
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                    <div className={classNames('w-full max-w-[554px]', styles.codyForm)} ref={formContainerRef}>
                        <Heading size="h3" className="mb-4 !text-2xl font-semibold text-white">
                            Schedule a demo
                        </Heading>
                        <HubSpotForm
                            formId="255d54c8-65db-435e-b131-d8dc4ab9ea96"
                            onFormSubmitted={() => window?.saq?.('conv', 'KGsR2v3IRYg4bqhsRm62Hc')}
                        />
                    </div>
                </div>
            </ContentSection>

            <CodyAutocomplete />

            <ContentSection
                parentClassName="!py-0"
                className="flex w-full flex-col items-center justify-around  gap-y-12 gap-x-6 pt-16 text-center md:flex-row md:px-8 md:pt-10 md:pb-[64px]"
            >
                <div className="max-w-[441px]">
                    <div className="mx-auto mb-[24px] flex h-12 w-12 items-center justify-center rounded-[7px] bg-violet-100 ">
                        <RocketIcon color="purple" size="2rem" />
                    </div>

                    <Heading size="h4" className="mb-[16px] !text-2xl text-gray-200">
                        Powerful and accurate
                    </Heading>
                    <p className="mb-0 text-gray-200">Embeddings for greater codebase context</p>
                </div>

                <div className="max-w-[441px]">
                    <div className="mx-auto mb-[24px] flex h-12 w-12 items-center justify-center rounded-[7px] bg-violet-100">
                        <StarIcon color="purple" size="2rem" />
                    </div>

                    <Heading size="h4" className="mb-[16px] !text-2xl text-gray-200">
                        Universal
                    </Heading>
                    <p className="mb-0 text-gray-200">Supports all code hosts and multiple LLM options</p>
                </div>

                <div className="max-w-[441px]">
                    <div className="mx-auto mb-[24px] flex h-12 w-12 items-center justify-center rounded-[7px] bg-violet-100">
                        <LockIcon color="purple" size="2rem" />
                    </div>

                    <Heading size="h4" className="mb-[16px] !text-2xl text-gray-200">
                        Scalable and secure
                    </Heading>
                    <p className="mb-0 text-gray-200">Zero retention on inputs and outputs, Indemnity</p>
                </div>
            </ContentSection>

            <CodyIde />

            <CodyChat />

            <Heading size="h3" className="mx-auto mt-[96px] hidden max-w-[839px] px-sm text-center text-white md:block">
                “Cody is a game-changer! It helps me work smarter, write cleaner code, and understand projects faster.
                My productivity is through the roof, thanks to Cody.”
            </Heading>

            <div className="mt-6 hidden flex-row items-center justify-center gap-4 md:flex">
                <img className="" src="/cody/Avatar.svg" alt="Avatar" />
                <p className="mb-0 text-lg text-gray-200">TINO WENING</p>
            </div>

            <CodyImageTab
                icon="/cody/commands-brand-icon.svg"
                headerText="Run custom and pre-built commands"
                description={
                    <Heading
                        size="h3"
                        className="mb-0 pt-[18px] text-lg leading-[30px] !tracking-[-0.25px] text-gray-200"
                    >
                        Generate, test, and fix code with one-click commands.
                    </Heading>
                }
                tabContent={IMAGE_TAB_CONTENT}
            />

            <ContentSection parentClassName="!pb-0" className="flex flex-col gap-12 md:flex-row">
                <div className="flex max-w-[661px] flex-col gap-[30px]">
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody knows your code
                    </Heading>
                    <p className="mb-0 text-lg text-gray-200">
                        Cody uses context to answer questions that require an understanding of multiple files or even
                        entire repositories. Plus, this context allows Cody to make suggestions that use your own APIs
                        and idioms.
                        <br />
                        <br />
                        We’re experimenting with several methods of context retrieval to improve Cody’s accuracy,
                        including embeddings, keyword search, and hybrid search.
                    </p>
                </div>
                <div className="rounded-bl-8 rounded-br-8 bg-opacity-40 text-white">
                    <div className="cody-whitepaper-border h-[2px]" />
                    <div className="mt-3 flex flex-col gap-3 p-6">
                        <p className="mb-0 font-mono text-sm">Whitepaper</p>
                        <p className="mb-0 font-grotesk text-xl">Cody context architecture</p>
                        <p className="mb-0 text-gray-200">
                            Context awareness is key to the quality and precision of Cody. This paper outlines how Cody
                            fetches the right context at the right time to answer queries.
                        </p>
                        <Link
                            href="/resources/a-lp-cody-context-architecture"
                            className="flex gap-[10px] pb-4 font-semibold text-white hover:text-violet-300 hover:underline"
                        >
                            Read more <ChevronRightIcon />
                        </Link>
                    </div>
                </div>
            </ContentSection>
            <CodyCta onContactClick={scrollToForm} />
        </Layout>
    )
}

export default DemoCodyPage

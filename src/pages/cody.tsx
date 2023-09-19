import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, Heading, Layout, ExternalsAuth, HubSpotForm, Badge, Modal, CodyAnimation } from '../components'
import { breakpoints } from '../data/breakpoints'
import { EventName, getEventLogger } from '../hooks/eventLogger'
import { useWindowWidth } from '../hooks/windowWidth'

import styles from '../styles/CustomHubspotForm.module.scss'

const VIDEO_TAB_CONTENT = [
    {
        header: 'Explain code or entire repositories',
        description: 'Get up to speed on new projects quickly',
        videoSrc:
            'https://user-images.githubusercontent.com/81499360/266091359-cb00def8-08e3-4aa3-b8a5-0d0712cd38f6.mp4',
    },
    {
        header: 'Generate unit tests in seconds',
        description: 'Spend more time writing new code',
        videoSrc:
            'https://user-images.githubusercontent.com/81499360/266091266-93479f7e-e0b9-4203-b600-36e1777a7164.mp4',
    },
    {
        header: 'Describe code smells',
        description: 'Optimize your code for best practices',
        videoSrc:
            'https://user-images.githubusercontent.com/81499360/266091553-5f0e9919-16bf-476c-b9f1-929f49b8eb61.mp4',
    },
    {
        header: 'Define your own custom commands',
        description: 'Customize Cody for your workflow',
        videoSrc:
            'https://user-images.githubusercontent.com/81499360/266091507-0f2f1929-726c-4e94-b037-b36c8409d031.mp4',
    },
]

const CodyPage: FunctionComponent = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

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
            <ContentSection parentClassName="!py-0 !px-0" className="-mt-8 pt-0 text-center md:mt-0 md:pt-[22px]">
                <div className="mx-auto w-full px-6 md:w-[849px] lg:w-[895px]">
                    <div className="center flex items-center justify-center gap-x-4">
                        <Heading size="h1" className="!text-[53px] text-white md:!text-[62px]">
                            Meet Cody{' '}
                        </Heading>
                        <img
                            src="/cody/cody-logo.svg"
                            className="h-[45px] w-[49px] md:h-[50px] md:w-[55px]"
                            alt="Cody Logo"
                        />
                    </div>
                    <div className="mx-auto w-full pt-6 text-[41px] font-semibold leading-[41px] text-white md:text-[47px] md:leading-[47px]">
                        We’re building the only AI coding assistant that knows your{' '}
                        <span className="cody-heading bg-clip-text text-transparent"> entire codebase </span>
                    </div>
                    <Heading size="h4" className="mx-auto mt-6 max-w-[637px]  !font-normal text-gray-200">
                        Cody answers technical questions and writes code directly in your IDE, using your code graph for
                        context and accuracy.
                    </Heading>
                    <div className="mt-8 text-lg font-semibold text-white">
                        Get Started with Cody <Badge size="small" text="BETA" color="violet" />
                    </div>
                    <div className="mx-auto mt-4 flex flex-wrap justify-center gap-2 sm:w-[512px]">
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="about-cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="about-cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="google"
                            label="Google"
                            source="about-cody"
                        />
                    </div>
                    <p className="mt-4 text-[14px] text-violet-300 opacity-70">
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
            </ContentSection>
            <ContentSection parentClassName="!py-0 !px-0" className="relative mx-auto mt-12 w-full">
                <div className="relative z-[10] mx-auto h-[369.022px] w-full text-6xl text-white md:w-[816px]">
                    <CodyAnimation />
                </div>
                <ContentSection
                    parentClassName="!py-0 !px-0"
                    className="relative mx-auto mt-16 flex w-full flex-col gap-[15px] overflow-hidden border border-white border-opacity-20 bg-[#612590] py-16 px-0 md:-top-[88px] md:-mb-[32px] md:mt-0 md:flex-row md:rounded-lg md:pt-[120px] md:pb-[47px]  md:pl-[62px] xl:max-w-[1280px]"
                >
                    <div className="flex w-full flex-col px-6 md:w-[543px]">
                        <img className="h-[46px] w-[46px]" src="/cody/cody-icon.svg" alt="Cody Icon" />
                        <Heading size="h2" className="pt-4 text-left !text-4xl text-white">
                            Code faster with AI-assisted autocomplete{' '}
                        </Heading>
                        <p className="pt-4 pb-5 text-left text-lg text-gray-200">
                            Cody autocompletes single lines, or whole functions, in any programming language,
                            configuration file, or documentation.
                        </p>
                        <div className="sg-bg-cody-everyday flex w-full items-center justify-center rounded-lg p-6 md:w-[459px]">
                            <p className="mb-0 w-full text-center text-xl font-semibold text-gray-200 md:w-[313px]">
                                Every day, Cody help developers write &gt; 25,000 lines of code
                            </p>
                        </div>
                        <Heading size="h5" className="pt-8 pb-4 text-left !text-xl text-gray-200">
                            Cody autocomplete is improving every day
                        </Heading>
                        <div className="text-left text-gray-200">
                            <p>
                                High-quality autocomplete must balance speed and accuracy. We’re actively experimenting
                                with new LLMs and context retrieval methods to build the best autocomplete experience.
                            </p>
                            <p className="mb-0">
                                Cody’s broad training data means it supports all programming languages, but it works
                                especially well for Python, Go, JavaScript, and TypeScript.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full overflow-hidden md:w-[670px]">
                        <img
                            className="relative top-4 -right-4 hidden  w-[670px] md:flex"
                            src="/cody/autocomplete.svg"
                            alt="Cody auto complete"
                        />
                        <img
                            className="relative top-4 w-full pl-6 md:hidden"
                            src="/cody/autocomplete-mobile.svg"
                            alt="Cody auto complete"
                        />
                    </div>
                </ContentSection>
            </ContentSection>

            <ContentSection
                parentClassName="!py-0"
                className="flex w-full flex-col items-center gap-x-12 gap-y-12 pt-16 md:flex-row md:px-8 md:pt-0"
            >
                <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-8 py-4 md:h-32 md:gap-x-8">
                    <div className="flex h-full flex-col items-center justify-center">
                        <Heading size="h6" className="whitespace-nowrap !text-lg text-gray-200">
                            Cody is available for:
                        </Heading>
                    </div>
                    <div className="flex items-center gap-x-4 md:px-6">
                        <img className="" src="/icons/intelliJ.svg" alt="IntelliJ IDE marketplace" />{' '}
                        <Heading size="h4" className="!text-2xl text-gray-200">
                            IntelliJ
                        </Heading>
                    </div>
                    <div className="flex items-center  gap-x-4 md:px-6">
                        <img className="" src="/icons/vscode.svg" alt="VS Code IDE Marketplace" />{' '}
                        <Heading size="h4" className="!text-2xl text-gray-200">
                            VS Code
                        </Heading>
                    </div>
                    <div className="flex items-center  gap-x-4 md:px-6">
                        <img className="" src="/icons/Neovim-logo.svg" alt="NeoVim IDE" />{' '}
                        <Badge text="Coming soon" size="small" color="light-gray" />
                    </div>
                    <div className="flex items-center  gap-x-4 md:px-6">
                        <img className="" src="/icons/EmacsIcon.svg" alt="Emacs IDE" />{' '}
                        <Badge text="Coming soon" size="small" color="light-gray" />
                    </div>
                </div>
            </ContentSection>

            <ContentSection
                className="flex w-full flex-col gap-y-[17.5px] md:gap-y-16 md:px-[60px] xl:max-w-[1280px]"
                parentClassName="!px-0 !pb-0"
            >
                <div className="w-full px-6 md:w-[554px]">
                    <img className="" src="/cody/cody-chat.svg" alt="Cody Chat" />
                    <Heading size="h2" className="py-[18px] text-left !text-4xl text-white">
                        AI-powered chat for your code
                    </Heading>
                    <p className="mb-0 text-left text-lg text-gray-200">
                        Cody chat helps unblock you when you’re jumping into new projects, trying to understand legacy
                        code, or taking on tricky problems.
                    </p>
                </div>
                <div className="flex w-full flex-col gap-y-6 overflow-hidden text-left text-gray-200 md:flex-row lg:items-center">
                    <div className="flex w-full flex-col px-6 md:w-[398px] md:py-6">
                        <p className="pb-[17px] text-lg md:text-base">Cody can answer questions like:</p>
                        <div className="flex flex-col gap-[10px] text-xl md:text-lg">
                            <p className="mb-0 py-[11px] px-[10px]">How is this repository structured?</p>
                            <p className="mb-0 py-[11px] px-[10px]">What does this file do?</p>
                            <p className="mb-0 py-[11px] px-[10px]">Where is X component defined?</p>
                            <p className="mb-0 py-[11px] px-[10px]">Why isn’t this code working??</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img
                            className="relative hidden max-w-[809px] self-stretch md:flex"
                            src="/cody/cody-chat-interface.svg"
                            alt="Cody Chat interface"
                        />
                    </div>
                    <img
                        className="relative flex self-stretch pl-6 md:hidden"
                        src="/cody/cody-chat-mobile.svg"
                        alt="Cody Chat interface"
                    />
                </div>
            </ContentSection>

            <Heading size="h3" className="mx-auto mt-[96px] hidden max-w-[839px] px-sm text-center text-white md:block">
                “Cody is a game-changer! It helps me work smarter, write cleaner code, and understand projects faster.
                My productivity is through the roof, thanks to Cody.”
            </Heading>

            <div className="mt-6 hidden flex-row items-center justify-center gap-4 md:flex">
                <img className="" src="/cody/Avatar.svg" alt="Avatar" />
                <p className="mb-0 text-lg text-gray-200">TINO WENING</p>
            </div>

            <ContentSection
                parentClassName="!px-0 !pb-0"
                className="rounded-lg border border-white border-opacity-20 bg-[#612590] px-6 py-8 md:px-[60px] md:py-[72px]"
            >
                <VideoTab
                    icon="/cody/slash-logo.svg"
                    headerText="Run custom and pre-built commands"
                    description={
                        <p className="mt-[18px] mb-0 text-lg text-gray-200">
                            Write, describe, fix, and smell code with commands.
                            <br />
                            We’re adding new commands frequently, plus you can create & share your own custom commands.
                        </p>
                    }
                    tabContent={VIDEO_TAB_CONTENT}
                />
            </ContentSection>

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
                <div className="rounded-bl-8 rounded-br-8 bg-[#0F111A] bg-opacity-40 text-white">
                    <div className="cody-whitepaper-border h-[2px]" />
                    <div className="mt-3 flex flex-col gap-3 p-6">
                        <p className="mb-0 font-mono text-sm">Whitepaper</p>
                        <p className="mb-0 font-grotesk text-xl">Cody context architecture</p>
                        <p className="mb-0 text-gray-200">
                            Context awareness is key to the quality and precision of Cody. This paper outlines how Cody
                            fetches the right context at the right time to answer queries.
                        </p>
                        <Link
                            href="/whitepaper/cody-context-architecture.pdf"
                            className="flex gap-[10px] pb-4 font-semibold text-white hover:text-violet-300 hover:underline"
                        >
                            Read more <ChevronRightIcon />
                        </Link>
                    </div>
                </div>
            </ContentSection>

            <ContentSection
                id="contact-form"
                parentClassName="!py-0"
                className="mx-auto flex flex-col gap-6 py-16 pt-16 md:flex-row md:py-[112px]"
            >
                <div className="flex flex-col gap-8 md:max-w-[352px]">
                    <Heading size="h2" className="!text-[47px] text-white">
                        Get started with Cody (beta)
                    </Heading>
                </div>

                <div className="max-w-[440px] rounded-lg border border-white border-opacity-25 bg-[#612590] p-6 md:max-w-fit">
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody free tier
                    </Heading>
                    <p className="mt-6 max-w-[413.5px] text-lg text-gray-200">
                        Free forever for individual devs on public and private code, with a generous rate limit.
                    </p>
                    <div className="mt-6 flex flex-col flex-wrap gap-4 md:flex-row md:gap-2">
                        <div className="flex flex-row flex-wrap gap-4 md:gap-2 lg:flex-nowrap">
                            <ExternalsAuth
                                className="flex-1 justify-center !font-normal md:w-fit"
                                authProvider="github"
                                label="GitHub"
                                source="about-cody"
                            />
                            <ExternalsAuth
                                className="flex-1 justify-center !font-normal md:w-fit"
                                authProvider="gitlab"
                                label="GitLab"
                                source="about-cody"
                            />
                            <ExternalsAuth
                                className="flex-1 justify-center !font-normal md:w-fit"
                                authProvider="google"
                                label="Google"
                                source="about-cody"
                            />
                        </div>
                    </div>
                    <p className="mt-4 text-[14px] text-violet-300 opacity-70">
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

                <div className="flex min-h-[295px] max-w-[440px] flex-col gap-4 rounded-lg border border-white border-opacity-40 p-6">
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody Enterprise
                    </Heading>
                    <p className="text-lg text-gray-200">Beta access available to Code Search customers.</p>
                    <div className="flex max-w-[356px] flex-col flex-wrap gap-4 md:flex-row">
                        <button
                            title="Get started with Cody"
                            className="btn btn-inverted-primary text-center"
                            type="button"
                            onClick={() => setIsContactModalOpen(true)}
                        >
                            Contact us
                        </button>
                        <Link
                            href="/pricing"
                            className="hidden items-center justify-center gap-[10px] font-semibold text-white hover:text-violet-300 hover:underline md:flex"
                        >
                            Pricing and plans <ChevronRightIcon />
                        </Link>
                        <Link
                            href="/pricing"
                            className="hover:bg-color-violet-600 rounded-[5px] border border-white px-5 py-3 text-center font-semibold text-white md:hidden"
                        >
                            Pricing and plans
                        </Link>
                    </div>
                </div>
            </ContentSection>
            <Modal
                open={isContactModalOpen}
                handleClose={() => setIsContactModalOpen(false)}
                modalBackdropClassName="cody-contact-modal"
                modalClassName="bg-[#632590] border border-opacity-20 border-white px-6 py-[64px] md:px-[80px] md:py-[96px]"
            >
                <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                    <div className="min-w-[200px] max-w-[513px]">
                        <Heading size="h2" className="!text-4xl text-white">
                            Get Cody where you work
                        </Heading>
                        <p className="mt-4 text-lg text-gray-200">
                            Cody for Enterprise provides context-aware answers based on your own private codebase.
                            Contact us through the form to learn more.
                        </p>
                    </div>
                    <div className={classNames('md:min-w-[400px] xl:min-w-[554px]', styles.codyForm)}>
                        <HubSpotForm
                            formId="05e46684-9fbc-4c4d-b010-f661f247c4c6"
                            inlineMessage="Thank you! We'll get back to you soon"
                        />
                    </div>
                </div>
            </Modal>
        </Layout>
    )
}

const VideoTab: FunctionComponent<{
    icon: string
    headerText: string
    description: string | ReactNode
    tabContent: { header: string; description: string; videoSrc: string }[]
}> = ({ icon, headerText, description, tabContent }) => {
    const [selectedContentIndex, setSelectedContentIndex] = useState(0)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(tabContent.length).fill(null))

    // Reset the video playback
    useEffect(() => {
        const videoElement = videoRefs.current[selectedContentIndex]
        if (videoElement) {
            videoElement.currentTime = 0
        }
    }, [selectedContentIndex, tabContent])

    return (
        <div>
            <img src={icon} alt="Cody logo" />
            <Heading size="h2" className="mt-[18px] !text-4xl text-white">
                {headerText}
            </Heading>
            {typeof description === 'string' ? (
                <p className="mt-[18px] mb-0 text-lg text-gray-200">{description}</p>
            ) : (
                description
            )}
            <div className="mt-16 flex flex-col gap-y-8 md:h-[400px] md:flex-row md:items-center">
                <div className="flex min-w-fit flex-grow flex-col gap-[18px]">
                    {tabContent.map((content, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedContentIndex(index)}
                            className={classNames(
                                'rounded px-[10px] py-2 text-left text-white hover:bg-[#270741] hover:bg-opacity-40 md:rounded-r-none',
                                {
                                    'bg-[#270741] hover:bg-opacity-100': selectedContentIndex === index,
                                }
                            )}
                            type="button"
                        >
                            <Heading size="h5">{content.header}</Heading>
                            <p className="mb-0">{content.description}</p>
                        </button>
                    ))}
                </div>
                <div className="max-w-[750px]">
                    {tabContent.map((content, index) => (
                        <video
                            ref={element => (videoRefs.current[index] = element ?? null)}
                            id={`video-${content.header}`}
                            className={classNames('rounded-lg border-[6px] border-[#4E2A72]', {
                                hidden: selectedContentIndex !== index,
                            })}
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            controls={false}
                            data-cookieconsent="ignore"
                            key={index}
                        >
                            <source type="video/mp4" src={content.videoSrc} />
                        </video>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CodyPage

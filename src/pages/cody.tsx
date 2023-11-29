import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import DownloadIcon from 'mdi-react/DownloadIcon'
import Link from 'next/link'

import {
    ContentSection,
    Heading,
    Layout,
    ExternalsAuth,
    HubSpotForm,
    Badge,
    Modal,
    CodyCta,
    CodyIde,
    CodyAutocomplete,
    CodyChat,
    CodyVideoTab,
    ContextAnimation,
} from '../components'
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
    const isXsMobile = windowWidth < 396

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
                image: 'https://sourcegraph.com/cody/cody-og.png',
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
                        <div className="flex w-[228px] gap-2 md:w-fit">
                            <ExternalsAuth
                                className="w-fit  justify-center !font-normal"
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
                        </div>

                        <ExternalsAuth
                            className={`w-fit justify-center !font-normal ${isXsMobile ? 'max-w-[228px] flex-1' : ''}`}
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
                            href="https://sourcegraph.com/terms"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://sourcegraph.com/terms/privacy"
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </ContentSection>

            <CodyAutocomplete />

            <CodyIde />

            <CodyChat />

            <Heading size="h3" className="mx-auto mt-[96px] hidden max-w-[839px] px-sm text-center text-white md:block">
                “Cody is a game-changer! It helps me work smarter, write cleaner code, and understand projects faster.
                My productivity is through the roof, thanks to Cody.”
            </Heading>

            <div className="mt-6 hidden flex-row items-center justify-center gap-4 md:flex">
                <img className="" src="/cody/Avatar.svg" alt="Avatar" />
                <div className="flex-col">
                    <p className="mb-0 text-lg font-semibold text-gray-200">TINO WENING</p>
                    <p className="mb-0 text-lg text-gray-200">ENGINEER</p>
                </div>
            </div>

            <CodyVideoTab
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

            <ContentSection parentClassName="!pb-0" className="flex flex-col gap-12 md:flex-row md:justify-between">
                <div className="flex w-full flex-col md:max-w-[501px]">
                    <Heading size="h2" className="mb-1 !text-4xl text-white">
                        Sourcegraph powered <span className="cody-heading bg-clip-text text-transparent">context</span>
                    </Heading>
                    <p className="mb-0 text-lg text-violet-200">
                        Sourcegraph’s code graph and analysis tools allow Cody to autocomplete, explain, and edit your
                        code with additional context.
                    </p>
                    <img src="/cody/context_illustration.svg" className="my-6" alt="cody context illustration" />
                    <Link
                        href="/whitepaper/cody-context-architecture.pdf"
                        className="flex items-center gap-[5px] font-semibold text-violet-300 underline hover:text-white"
                    >
                        <DownloadIcon className="h-4 w-4" />
                        Cody Context Architecture whitepaper
                    </Link>
                </div>

                <ContextAnimation />
            </ContentSection>
            <CodyCta onContactClick={() => setIsContactModalOpen(true)} />
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

export default CodyPage

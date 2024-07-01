import { FunctionComponent, useEffect, useRef } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import {
    ContentSection,
    Layout,
    HubSpotForm,
    CodyAutocomplete,
    CodyImageTab,
    CodyCta,
    CodyIde,
    CodyChat,
    ContextAnimation,
    CodyPartners,
    CodyTestimonials,
} from '../../components'
import { useAuthModal } from '../../context/AuthModalContext'
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
        imageSrc: { mobile: '/cody/explain-code.png', desktop: '/cody/explain-code.svg' },
    },
    {
        header: 'Generate unit tests in seconds',
        description: 'Spend more time writing new code',
        imageSrc: { mobile: '/cody/generate-unit-tests.png', desktop: '/cody/generate-unit-tests.svg' },
    },
    {
        header: 'Describe code smells',
        description: 'Optimize your code for best practices',
        imageSrc: { mobile: '/cody/describe-code-smell.png', desktop: '/cody/describe-code-smell.svg' },
    },
    {
        header: 'Define your own custom commands',
        description: 'Customize Cody for your workflow',
        imageSrc: { mobile: '/cody/define-custom-command.png', desktop: '/cody/define-custom-command.svg' },
    },
]

const DemoCodyABMPage: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const formContainerRef = useRef<HTMLDivElement | null>(null)

    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody')

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
            customFooterClassName="!bg-transparent"
        >
            {/* Hero Section */}
            <ContentSection parentClassName="!py-0 !px-0" className="-mt-8 pt-0 md:mt-0 md:pt-[22px] md:pb-9">
                <div className="flex flex-col justify-between gap-y-6 px-sm lg:flex-row lg:gap-x-[70px] lg:gap-y-0">
                    <div className="w-full max-w-[656px]">
                        <div className="center flex items-center gap-x-4">
                            <h1 className="text-white">Meet Cody{' '} </h1>
                            <img
                                src="/cody/cody-logo.svg"
                                className="h-[45px] w-[49px] md:h-[50px] md:w-[55px]"
                                alt="Cody Logo"
                            />
                        </div>
                        <div className="mx-auto w-full pt-6 text-[39px] font-semibold leading-[41px] tracking-[-1.17px] text-white md:text-[39px] md:leading-[47px]">
                            The only AI coding assistant <br /> that knows your{' '}
                            <span className="cody-heading bg-clip-text text-transparent"> entire codebase </span>
                        </div>
                        <h4 className="text-gray-200">Cody uses AI and deep understanding of your codebase to help you write and understand code
                        faster</h4>

                        <div className="mt-4 flex flex-wrap gap-2 sm:w-[512px]">
                            <button
                                type="button"
                                className="btn btn-inverted-primary text-violet-500"
                                title="Download Sourcegraph"
                                onClick={handleOpenModal}
                            >
                                Get Cody for free
                            </button>
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
                        <h3 className="text-white">Start your free Cody Enterprise trial</h3>
                        <HubSpotForm
                            formId="255d54c8-65db-435e-b131-d8dc4ab9ea96"
                            onFormSubmitted={() => window?.saq?.('conv', 'KGsR2v3IRYg4bqhsRm62Hc')}
                        />
                    </div>
                </div>
            </ContentSection>

            <CodyAutocomplete className="sg-bg-gradient-cody-hero" />

            <CodyIde />

            <CodyChat />

            <CodyPartners />

            <CodyTestimonials />

            <CodyImageTab
                icon="/cody/commands-brand-icon.svg"
                headerText="Run custom and pre-built commands"
                description={
                    <h3 className='text-gray-200'>Generate, test, and fix code with one-click commands.</h3>
                }
                tabContent={IMAGE_TAB_CONTENT}
            />

            <ContentSection
                parentClassName="!p-0 !m-0"
                className="m-0 flex flex-col gap-5 px-6 py-16 md:flex-row md:justify-between md:gap-12 md:px-0 lg:py-28"
            >
                <div className="flex w-full flex-col md:mx-[29px] ">
                    <h2 className="text-white">Sourcegraph powered <span className="cody-heading bg-clip-text text-transparent">context</span></h2>

                    <p className="mb-0 mt-3 text-2xl font-normal leading-[30px] tracking-[-0.25px] text-white md:max-w-[501px]">
                        Sourcegraph’s code graph and analysis tools allows Cody to autocomplete, explain, and edit your
                        code with additional context.
                    </p>
                    <img
                        src="/cody/context_illustration.svg"
                        className="mt-6 md:max-w-[501px]"
                        alt="cody context illustration"
                    />
                </div>
                <div className="hidden md:flex">
                    <ContextAnimation />
                </div>
                <div className="md:hidden md:h-[333px] md:w-[538px] md:min-w-[399px]">
                    <img src="/cody/context_illustration_details.svg" alt="cody context illustration details" />
                </div>
            </ContentSection>

            <CodyCta source="Cody page" isCodyPage={true} />
        </Layout>
    )
}

export default DemoCodyABMPage

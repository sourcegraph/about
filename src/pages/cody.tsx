import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'

import {
    ContentSection,
    Heading,
    Layout,
    HubSpotForm,
    Modal,
    CodyCta,
    CodyIde,
    CodyAutocomplete,
    CodyChat,
    CodyImageTab,
    ContextAnimation,
    CodyPartners,
    CodyTestimonials,
} from '../components'
import { breakpoints } from '../data/breakpoints'
import { EventName, getEventLogger } from '../hooks/eventLogger'
import { useWindowWidth } from '../hooks/windowWidth'

import styles from '../styles/CustomHubspotForm.module.scss'

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
        imageSrc: {mobile: '/cody/define-custom-command.png', desktop: '/cody/define-custom-command.svg'},
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
                image: 'https://sourcegraph.com/cody/cody-og.png',
            }}
            headerColorTheme="purple"
            childrenClassName={isMobile ? 'sg-bg-gradient-cody-mobile' : 'sg-bg-gradient-cody-lg'}
            displayChildrenUnderNav={true}
            customFooterClassName="!bg-transparent"
        >
            <ContentSection parentClassName="!py-0 !px-0" className="-mt-8 pt-0 text-center md:mt-0 md:pt-[22px]">
                <div className="mx-auto w-full px-6 md:w-[849px] lg:w-[895px]">
                    <div className="mx-auto w-full pt-6 text-[48px] font-semibold leading-[58px] text-white md:text-[72px] md:leading-[86px]">
                        Write less, ship more
                    </div>
                    <Heading
                        size="h3"
                        className="mx-auto mt-6 mb-8  max-w-[663px] leading-[30px] !tracking-[-0.25px] text-gray-200"
                    >
                        Cody is the good kind of know-it-all, using its deep understanding of your codebase to explain,
                        fix, and help you write code.
                    </Heading>
                    <button
                        type="button"
                        className="btn btn-inverted-primary min-w-[204px] px-6 text-violet-500 lg:px-4"
                        title="Get Cody for free"
                    >
                        <div className="flex items-center justify-center">
                            <img src="/cody/cody-logo.svg" className="mr-2 h-[24px] w-[24px]" alt="Cody Logo" />
                            Get Cody for free
                        </div>
                    </button>
                </div>
            </ContentSection>

            <CodyAutocomplete className='sg-bg-gradient-cody-hero' />

            <CodyIde />

            <CodyChat />

            <CodyPartners />

            <CodyTestimonials />

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

            <ContentSection
                parentClassName="!p-0 !m-0"
                className="m-0 flex flex-col gap-5 py-16 px-6 md:flex-row md:justify-between md:gap-12 md:px-0 lg:py-28"
            >
                <div className="flex w-full flex-col md:mx-[29px] ">
                    <Heading size="h2" className="mb-1 text-[40px] font-normal leading-10 tracking-[-1px] text-white">
                        Sourcegraph powered <span className="cody-heading bg-clip-text text-transparent">context</span>
                    </Heading>

                    <p className="mb-0 mt-[12px] text-2xl font-normal leading-[30px] tracking-[-0.25px] text-white md:max-w-[501px]">
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

            <CodyCta isCodyPage={true} onContactClick={() => setIsContactModalOpen(true)} />
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

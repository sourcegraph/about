import { FunctionComponent } from 'react'

import {
    ContentSection,
    Heading,
    Layout,
    CodyImageTab,
    CodyCta,
    CodyIde,
    CodyChat,
    CodyPartners,
    CodyTestimonials,
    Video,
    SourcegraphPowered,
    CodyAutocomplete,
} from '../../components'
import { useAuthModal } from '../../context/AuthModalContext'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { TelemetryProps } from '../../telemetry'

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

const DemoCodyPage: FunctionComponent<TelemetryProps> = ({telemetryRecorder}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody')

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://about.sourcegraph.com/cody/cody-og.png',
            }}
            headerColorTheme="purple"
            displayChildrenUnderNav={true}
            customFooterClassName="!bg-transparent"
        >
            {/* Hero Section */}
            <ContentSection parentClassName="!py-0 !px-0" className="-mt-8 pt-0 md:mt-0 md:pt-[22px] md:pb-9">
                <div className="flex flex-col items-center justify-between gap-y-6 px-sm lg:flex-row lg:gap-x-6 lg:gap-y-0">
                    <div className="w-full md:max-w-[554px] lg:max-w-[616px]">
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
                            The only AI coding assistant <br /> that knows your{' '}
                            <span className="cody-heading bg-clip-text text-transparent"> entire codebase </span>
                        </div>
                        <Heading size="h4" className="mt-6 max-w-[637px]  !font-normal text-gray-200">
                            Cody uses AI and deep understanding of your codebase to help you write and understand code
                            faster
                        </Heading>

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
                    </div>
                    <div className="w-full">
                        <Video
                            host="self"
                            loop={false}
                            controls={true}
                            autoPlay={false}
                            thumbnail="https://storage.googleapis.com/sourcegraph-assets/website/video/Cody%20Page%20April%202024/Cody_the_AI_that_knows_your_codebase_SplashScreen.webp"
                            title="Cody - the AI coding assistant that knows your entire codebase"
                            source={{
                                mp4: 'https://storage.googleapis.com/sourcegraph-assets/website/video/Cody%20Page%20April%202024/Cody_the_AI_that_knows_your_codebase',
                                webm: 'https://storage.googleapis.com/sourcegraph-assets/website/video/Cody%20Page%20April%202024/Cody_the_AI_that_knows_your_codebase',
                            }}
                            className="w-full rounded-lg"
                            telemetryRecorder={telemetryRecorder}
                        />
                    </div>
                </div>
            </ContentSection>

            <CodyAutocomplete />

            <CodyIde />

            <CodyChat />

            <CodyPartners isLight={false} />

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

            <SourcegraphPowered />

            <CodyCta source="Cody page" isCodyPage={true} />
        </Layout>
    )
}

export default DemoCodyPage

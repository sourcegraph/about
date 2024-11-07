import { FunctionComponent } from 'react'

import {
    ContentSection,
    Layout,
    CodyImageTab,
    CodyCta,
    CodyIde,
    CodyChat,
    CodyPartners,
    CodyTestimonials,
    SourcegraphPowered,
    CodyAutocomplete,
} from '../../components'
import { BentoWithMockup } from '../../components/bentoWithMockup'
import { CodyIntroDualTheme } from '../../components/cody/dual-theme/CodyIntroDualTheme'
import { LogoGrid } from '../../components/cody/LogoGrid'
import { useAuthModal } from '../../context/AuthModalContext'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../../lib/utils'
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

const DemoCodyPage: FunctionComponent<TelemetryProps> = ({ telemetryRecorder }) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const { openModal } = useAuthModal()

    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal('cody')
    }

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://about.sourcegraph.com/cody/cody-og.png',
            }}
            displayChildrenUnderNav={true}
            childrenClassName="!-mt-[152px]"
            className="relative w-full !overflow-x-hidden bg-gray-50"
        >
            <div className="relative">
                {/* gradient background */}
                <div className="pointer-events-none absolute inset-0 -translate-y-32 bg-[linear-gradient(180deg,#E9EDFC_20%,#F9FAFB_90.4%)]" />

                <ContentSection parentClassName="relative !pt-4 md:!pt-0 !pb-24 md:!pb-0" className="relative">
                    {/* blob gradients */}
                    <div className="pointer-events-none absolute -right-14 -top-14 hidden lg:block">
                        <img
                            src="/assets/cody/cody-hero.svg"
                            alt=""
                            aria-hidden={true}
                            className="lg:h-[620px] lg:w-[620px]"
                        />
                    </div>

                    <CodyIntroDualTheme
                        isLight={true}
                        title="The most informed Code AI"
                        description="Cody uses the latest LLMs and all your development context to help you understand, write, and fix code faster"
                        titleSize="text-4xl sm:text-6xl"
                        descriptionSize="md:text-xl lg:!ml-0"
                        handleOpenModal={handleOpenModal}
                        wrapperClassName="relative z-[20] md:z-0 lg:!text-left text-center"
                        buttonContainerClassName="lg:!justify-start !justify-center"
                        isVariant={true}
                    />
                </ContentSection>
            </div>

            <ContentSection parentClassName="!pt-4 !pb-4" className="flex flex-col items-center justify-center">
                <p className="text-center text-base font-normal uppercase leading-[27px] text-gray-400">
                    Leading dev teams choose Cody for their coding assistant
                </p>

                <div className="mt-4">
                    <LogoGrid mainLogo="sofi" header={null} />
                </div>
            </ContentSection>

            <CodyAutocomplete />

            <CodyIde />

            <CodyChat />

            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <BentoWithMockup isDarkBorder={true} isVariantTitle={true} href="/resources/gartner-mq" />
            </div>

            <CodyPartners isLight={false} className="!pb-[32px] md:pt-[96px] md:!pb-0" />

            <CodyTestimonials />

            <CodyImageTab
                icon="/cody/commands-brand-icon.svg"
                headerText="Run custom and pre-built commands"
                description={
                    <h3 className="mb-0 pt-[18px] text-gray-200">
                        Generate, test, and fix code with one-click commands.
                    </h3>
                }
                tabContent={IMAGE_TAB_CONTENT}
            />

            <SourcegraphPowered />

            <CodyCta source="Cody page" isCodyPage={true} />
        </Layout>
    )
}

export default DemoCodyPage

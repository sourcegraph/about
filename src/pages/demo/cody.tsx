import { FunctionComponent } from 'react'

import { ContentSection, Layout, CodyCta } from '../../components'
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
                <p className="text-center text-base font-normal leading-[27px] text-gray-400">
                    Trusted by the world's largest dev teams
                </p>

                <div className="mt-4">
                    <LogoGrid mainLogo="sofi" header={null} />
                </div>
            </ContentSection>

            <ContentSection parentClassName="!pt-36 !pb-20" className="flex flex-col items-center justify-center">
                <h2 className="text-center">Make working in sprawling codebases delightful</h2>
                <p className="text-balance mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
                    Growing code and dependencies make dev work complex. Cody helps developers spend more time doing
                    what they love: writing code.
                </p>

                <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-white shadow">
                        <img
                            src="/assets/cody/solve-hard-software-problems.png"
                            alt="Solve hard software problems"
                            className="rounded-t-md"
                        />
                        <div className="p-7">
                            <h3 className="text-xl">Solve hard software problems</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Cody uses the latest LLMs and all your development context to help you understand,
                                write, and fix code faster
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white shadow">
                        <img
                            src="/assets/cody/increase-engineering-productivity.png"
                            alt="Increase engineering productivity"
                            className="rounded-t-md"
                        />
                        <div className="p-7">
                            <h3 className="text-xl">Increase engineering productivity</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Cody uses the latest LLMs and all your development context to help you understand,
                                write, and fix code faster
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!pt-20 !pb-20" className="flex flex-col items-center justify-center">
                <h2 className="text-center text-3xl font-semibold">See why devs and their teams love using Cody</h2>

                <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="rounded-2xl bg-white p-5 shadow md:p-8">
                        <h3 className="text-xl font-semibold">Removing developer toil</h3>
                        <p className="mt-4 text-gray-600">
                            "There's a fatigue that sets in with unit tests that I previously had to overcome, but now
                            Cody can simply set up the test cases for me."
                        </p>
                        <div className="mt-6">
                            <div className="text-purple-600 font-medium">James Griffin-Allwood</div>
                            <div className="text-sm text-gray-600">Staff Developer, 1Password</div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow md:p-8">
                        <h3 className="text-xl font-semibold">Working with the best models</h3>
                        <p className="mt-4 text-gray-600">
                            "Cody's ability to switch backends, from Claude to GPT, is very attractive to us...aving a
                            tool that can react to new LLMs quickly is important to us."
                        </p>
                        <div className="mt-6">
                            <div className="text-purple-600 font-medium">Godwin Babu</div>
                            <div className="text-sm text-gray-600">Sr. Manager of DevX, Qualtrics</div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow md:p-8">
                        <h3 className="text-xl font-semibold">Spending time more efficiently</h3>
                        <p className="mt-4 text-gray-600">
                            "We have the freedom to move at the pace our customers need....It's not just about time
                            savings. It's about how you're able to spend your time."
                        </p>
                        <div className="mt-6">
                            <div className="text-purple-600 font-medium">Rob Linger</div>
                            <div className="text-sm text-gray-600">AI Software Architect, Ledios</div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <CodyCta source="Cody page" isCodyPage={true} />
        </Layout>
    )
}

export default DemoCodyPage

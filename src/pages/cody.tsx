import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import { useRouter } from 'next/router'

import {
    Layout,
    HubSpotForm,
    Modal,
    CodyCta,
    CodyIde,
    CodyAutocomplete,
    CodyChat,
    CodyImageTab,
    CodyPartners,
    CodyTestimonials,
} from '../components'
import { CodyHeadline } from '../components/cody/CodyHeadline'
import { CodyChooseLlmDualTheme } from '../components/cody/dual-theme/CodyChooseLlmDualTheme'
import { CodyIntroDualTheme } from '../components/cody/dual-theme/CodyIntroDualTheme'
import { SourcePoweredDualTheme } from '../components/cody/dual-theme/SourcePoweredDualTheme'
import { HowCodyWorks } from '../components/cody/HowCodyWorks'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useFeatureFlag } from '../hooks/useFeatureFlag'
import { useWindowWidth } from '../hooks/windowWidth'
import { TelemetryProps } from '../telemetry'
import { captureCustomEventWithPageData } from '../lib/utils'

import styles from '../styles/CustomHubspotForm.module.scss'

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

const CodyPage: FunctionComponent<TelemetryProps> = ({ telemetryRecorder }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg
    const router = useRouter()
    const { pathname } = router
    const { openModal } = useAuthModal()

    const source = pathname.slice(1) || 'about-home'
    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal(source)
    }

    const { flagValue: userFlag, isFlagReady, isBlocked } = useFeatureFlag('cody-value-headline-test')

    useEffect(() => {
        if (isFlagReady) {
            const headlineTestEventArguments = {
                testName: 'ValueHeadlineTestEnrolled',
                group: (userFlag as string) ?? 'undefined',
            }

            telemetryRecorder.recordEvent('ValueHeadlineTestEnrolled', 'view', {
                privateMetadata: headlineTestEventArguments,
            })
        }
    }, [isFlagReady, telemetryRecorder, userFlag])

    if (!isFlagReady && !isBlocked) {
        return null
    }

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://sourcegraph.com/cody/cody-og.png',
            }}
            displayChildrenUnderNav={true}
            customFooterClassName="!bg-transparent"
            className="relative w-full !overflow-hidden bg-gray-50"
        >
            <div className="relative">
                <div className="sg-bg-gradient-cody-light-mobile-hero !absolute top-[310px] z-[10] h-[650px] w-[1000px] md:relative md:hidden md:bg-none" />
                <CodyHeadline
                    isLight={true}
                    handleOpenModal={handleOpenModal}
                    wrapperClassName="relative z-[20] md:z-0"
                    userGroup={userFlag as string}
                />
                <CodyAutocomplete isLight={true} wrapperClassName="z-[20] md:z-0" />
            </div>
            <CodyIde isLight={true} />
            <CodyChat isLight={true} />
            <CodyPartners isLight={true} />
            <CodyTestimonials isLight={true} />
            <CodyImageTab
                icon="/cody/commands-brand-icon.svg"
                headerText="Generate, test, and fix code with commands"
                description={
                    <h3 className="mb-0 px-6 pt-[18px] text-[#343A4D]">
                        Run Cody's one-click commands or create your own custom commands to execute AI workflows.
                    </h3>
                }
                tabContent={IMAGE_TAB_CONTENT}
                isLight={true}
            />
            <HowCodyWorks isLight={true} />
            <CodyChooseLlmDualTheme isLight={true} />
            <SourcePoweredDualTheme isLight={true} />
            <CodyCta source="Cody page" isCodyPage={true} isLight={true} />
            <Modal
                open={isContactModalOpen}
                handleClose={() => setIsContactModalOpen(false)}
                modalBackdropClassName="cody-contact-modal"
                modalClassName="bg-[#632590] border border-opacity-20 border-white px-6 py-[64px] md:px-[80px] md:py-[96px]"
            >
                <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                    <div className="min-w-[200px] max-w-[513px]">
                        <h2 className="text-white">Get Cody where you work</h2>
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
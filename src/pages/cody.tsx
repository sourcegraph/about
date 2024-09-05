import { FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import { useRouter } from 'next/router'
import { posthog } from 'posthog-js'

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
} from '../components'
import { BentoWithMockup } from '../components/bentoWithMockup'
import { CodyChooseLlmDualTheme } from '../components/cody/dual-theme/CodyChooseLlmDualTheme'
import { CodyIntroDualTheme } from '../components/cody/dual-theme/CodyIntroDualTheme'
import { HowCodyWorks } from '../components/cody/HowCodyWorks'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'
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
        header: 'Define your own custom prompts',
        description: 'Customize Cody for your workflow',
        imageSrc: { mobile: '/cody/define-custom-command.png', desktop: '/cody/define-custom-command.svg' },
    },
]

const CodyPage: FunctionComponent = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg
    const router = useRouter()
    const { pathname } = router
    const { openModal } = useAuthModal()
    const [title, setTitle ] = useState('');
    const [description, setDescription] = useState('')

    const source = pathname.slice(1) || 'about-home'
    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal(source)
    }

    useEffect(() => {
        // for testing only - remove before merge
        posthog.featureFlags.override({'cody-page-messaging-test': 'control'})

        if (posthog.getFeatureFlag('cody-page-messaging-test') === 'test-most-informed') {

            setTitle('The most informed Code AI');
            setDescription('Cody uses the latest LLMs and all your development context to help you understand, write, and fix code faster.')

        } else if (posthog.getFeatureFlag('cody-page-messaging-test') === 'test-models-context'){

            setTitle('Coding assistant with the latest AI and the most context');
            setDescription('Cody uses context of your codebase, docs, tickets, and the web for faster development and accurate code-gen.')

        } else if (posthog.getFeatureFlag('cody-page-messaging-test') === 'test-multiple-contexts'){

            setTitle('The AI assistant with context of your codebase, docs, tickets, and the web');
            setDescription('Cody uses the latest LLMs and all your development context to help you understand, write, and fix code faster.')

        } else {

            setTitle('Code more, type less');
            setDescription('Cody is an AI coding assistant that uses advanced search and codebase context to help you understand, write, and fix code faster.')
        }
    }, [])

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://sourcegraph.com/cody/cody-og.png',
            }}
            displayChildrenUnderNav={true}
            className="relative w-full !overflow-hidden bg-gray-50"
        >
            <div className="relative md:pt-10">
                <div className="sg-bg-gradient-cody-light-mobile-hero !absolute top-[310px] z-[10] h-[650px] w-[1000px] md:relative md:hidden md:bg-none" />
                {title && description && 
                    <CodyIntroDualTheme
                        isLight={true}
                        title={title}
                        description={description}
                        handleOpenModal={handleOpenModal}
                        wrapperClassName="relative z-[20] md:z-0"
                    />
                }

                <p className="pt-32 text-center text-base font-normal uppercase leading-[27px] text-gray-400">
                    Over 2.5M engineers use Sourcegraph
                </p>

                <CodyPartners isLight={true} className="!pt-0 !pb-[32px] md:pb-0" />
            </div>

            <CodyChat isLight={true} />

            <CodyIde isLight={true} />

            <CodyImageTab
                icon="/cody/commands-brand-icon.svg"
                headerText="Generate, test, and fix code with prompts"
                description={
                    <h3 className="mb-0 px-6 pt-[18px] text-[#343A4D]">
                        Run Cody's one-click prompts or create your own custom prompts to execute AI workflows.
                    </h3>
                }
                tabContent={IMAGE_TAB_CONTENT}
                isLight={true}
            />

            <CodyAutocomplete isLight={true} wrapperClassName="z-[20] md:z-0 !mt-24" />

            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <BentoWithMockup isVariantTitle={true} href="/resources/gartner-mq" />
            </div>

            <div className="py-8">
                <CodyChooseLlmDualTheme isLight={true} />
            </div>

            <HowCodyWorks isLight={true} />

            {/* <SourcePoweredDualTheme isLight={true} /> */}

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

import {FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import { useRouter } from 'next/router'

import {
    Layout,
    HubSpotForm,
    Modal,
    CodyCta,
    CodyPartners,
    CodyTestimonials,
    ContentSection,
} from '../../components'
import { CodyChooseLlmDualTheme } from '../../components/cody/dual-theme/CodyChooseLlmDualTheme'
import { CodyIntroDualTheme } from '../../components/cody/dual-theme/CodyIntroDualTheme'
import { HowCodyWorks } from '../../components/cody/HowCodyWorks'
import { useAuthModal } from '../../context/AuthModalContext'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../../lib/utils'

import styles from '../../styles/CustomHubspotForm.module.scss'

const CHAT_CONTENT = [
    {
        header: 'Ask about your code',
        description: 'Use “@” + a repository, file, line range, or symbol to ask questions about your codebase. Generate code using context @-mention files or symbols to use that code as context. Cody will use it to generate contextually relevant code.',
        imageSrc: '/cody/features/chat-ask-cody.png',
        imageAlt: 'Cody Chat Ask Cody',
    },
    {
        header: 'Smart Apply',
        description: 'When Cody suggests code in chat, hit “Apply” to make those changes directly in your files.',
    },
    {
        header: 'Inline edits',
        description: 'Highlight code, hit the edit hotkey, and describe a change. Cody will generate a diff for the change in seconds.',
        imageSrc: '/cody/features/chat-inline-edits.png',
        imageAlt: 'Cody Chat Inline Edits',
    },
    {
        header: 'Ask Cody to Fix',
        description: 'For errors in your code, hit Ask Cody to Fix and Cody will propose a diff based on the error.',
        imageSrc: '/cody/features/chat-ask-cody-to-fix.png',
        imageAlt: 'Cody Chat Ask Cody to Fix',
    },
    {
        header: 'Reference your development artifacts',
        description: 'Connect Cody to OpenCtx to @-mention non-code artifacts like Google Docs, Notion pages, Jira tickets, and Linear issues.',
        imageSrc: '/cody/features/chat-reference-artifacts.png',
        imageAlt: 'Cody Chat Reference Artifacts',
    },
    {
        header: 'Use information directly from the web',
        description: '@-mention web URLs to pull live information, like docs, that can be used to answer questions.',
    },
    {
        header: 'Choose your favorite model',
        description: 'Choose from model options optimized for speed versus accuracy.',
        imageSrc: '/cody/features/chat-model-selection.png',
        imageAlt: 'Cody Chat Model Selection',
    },
    {
        header: 'Run offline (Experimental)',
        description: 'Connect to Ollama to run entirely offline. You can even code using AI on an airplane.',
    },
    {
        header: 'Context Filters',
        description: 'Configure which repositories and file paths Cody can or can’t send to the LLM and use as context.',
    },
    {
        header: 'Guardrails for catching licensed code',
        description: 'Cody verifies suggestions against a large corpus of public code and flags licensed code suggestions to the user.',
    },
]

const PROMPTS_CONTENT = [
    {
        header: 'Generate unit tests',
        description: 'Generate unit tests for your code selection, adding to your existing test file or creating a new one, with consideration for your existing tests and test framework.',
    },
    {
        header: 'Explain code',
        description: 'Explain code in simple language, walking through its inputs, outputs, purpose, and logic of the code.',
    },
    {
        header: 'Document code',
        description: 'Generate documentation for any selection of code (from symbols to entire files), even for legacy code you didn’t write yourself.',
    },
    {
        header: 'Find code smells',
        description: 'Analyze a code selection and provide suggestions for improving readability, maintainability, performance, or security.',
    },
    {
        header: 'Prompt Library',
        description: 'Create and save prompts for reuse, then share them with your teammates via the Prompt Library.',
    },
]

const AUTOCOMPLETE_CONTENT = [
    {
        header: 'Smart predictions',
        description: 'Cody predicts your next move as you type, suggesting code (like function arguments) without needing to look them up.',
    },
    {
        header: 'Natural language code generation',
        description: 'Type out a comment in natural language. Cody will suggest how to implement what you commented.',
    },
]

const CodyPage: FunctionComponent = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg
    const isLight = true; 
    const router = useRouter()
    const { pathname } = router
    const { openModal } = useAuthModal()

    const source = pathname.slice(1) || 'about-home'
    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal(source)
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
            className="relative w-full !overflow-hidden bg-gray-50"
        >
            <div className="relative">
                <div className="sg-bg-gradient-cody-light-mobile-hero !absolute top-[310px] z-[10] h-[650px] w-[1000px] md:relative md:hidden md:bg-none" />
                <CodyIntroDualTheme
                    isLight={true}
                    title="Features"
                    subTitle="Capabilities to help you write, fix, and maintain code faster."
                    handleOpenModal={handleOpenModal}
                    wrapperClassName="relative z-[20] md:z-0"
                />
            </div>

            {/* Chat section */}
            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4 flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                <img className="h-[48px] w-[48px]" src="/cody/chat-brand-icon.svg" alt="Cody Chat" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Chat</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Chat directly with the AI to ask questions about your code, generate code, and edit code. Cody has context of your open file and repository by default, and you can use “@” to add context on specific files, symbols, remote repositories, or other non-code artifacts.</p>
            </div>

            <ContentSection className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
            parentClassName={classNames('md:px-20')}>
                {CHAT_CONTENT.map(content => (
                <div key={content.header}
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 pt-16 bg-white',
                )}
            >
                    <div className="flex flex-col gap-6 md:gap-4">
                            <div className="px-6 md:px-10">
                                <h2 className="mb-2">{content.header}</h2>
                                <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                                    <p>{content.description}</p>
                                </div>
                            </div>
                            <img className="md:-px-10" src={content.imageSrc} alt={content.imageAlt} />
                    </div>
                </div>
                ))}
            </ContentSection>

            {/* Prompts section */}
            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4 flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                <img className="h-[48px] w-[48px]" src="/cody/commands-brand-icon.svg" alt="Cody Chat" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Prompts</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Automate key tasks in your workflow with premade and customizable prompts. Any common query or task can be built into a prompt to save and share with your team.</p>
            </div>

            <ContentSection className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
            parentClassName={classNames('md:px-20')}>
                {PROMPTS_CONTENT.map(content => (
                <div
                key={content.header}
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 py-16 bg-white',
                )}
            >
                    <div className="flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                            <div>
                                <h2 className="mb-2">{content.header}</h2>
                                <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                                    <p>{content.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </ContentSection>

            {/* Autocomplete section */}
            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4 flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                <img className="h-[48px] w-[48px]" src="/cody/completions-brand-icon.svg" alt="Cody Chat" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Autocomplete</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Cody predicts what you\'re trying to write before you type it. It makes single-line and multi-line suggestions as you type, using the context of the code around your cursor to make accurate suggestions.</p>
            </div>

            <ContentSection className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
            parentClassName={classNames('md:px-20')}>
                {AUTOCOMPLETE_CONTENT.map(content => (
                <div
                key={content.header}
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 py-16 bg-white',
                )}
            >
                    <div className="flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                            <div>
                                <h2 className="mb-2">{content.header}</h2>
                                <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                                    <p>{content.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </ContentSection>
            
            <CodyPartners isLight={true} className="!pb-[32px] md:pt-[96px] md:pb-0" />
            <CodyTestimonials isLight={true} />

            <HowCodyWorks isLight={true} />
            <CodyChooseLlmDualTheme isLight={true} />
            
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

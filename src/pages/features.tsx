import {FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import { Link as ScrollLink } from 'react-scroll'

import {
    Layout,
    HubSpotForm,
    Modal,
    CodyCta,
    ContentSection,
} from '../components'

import styles from '../styles/CustomHubspotForm.module.scss'

const CHAT_CONTENT = [
    {
        header: 'Ask about your code',
        description: 'Use "@" + a repository, file, line range, or symbol to ask questions about your codebase. Generate code using context @-mention files or symbols to use that code as context. Cody will use it to generate contextually relevant code.',
        imageSrc: '/cody/features/chat-ask-cody.png',
        imageAlt: 'Cody Chat Ask Cody',
    },
    {
        header: 'Smart Apply',
        description: 'When Cody suggests code in chat, hit "Apply" to make those changes directly in your files.',
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
        description: 'Configure which repositories and file paths Cody can or can\'t send to the LLM and use as context.',
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
        description: 'Generate documentation for any selection of code (from symbols to entire files), even for legacy code you didn\'t write yourself.',
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

const CODE_SEARCH_CONTENT = [
    {
        header: 'Multi-repo, multi-code host search',
        description: 'See your code from a single search bar, across every repository and every code host.',
    },
    {
        header: 'Shareable web links',
        description: 'Share exact files and lines of code with teammates using shareable web URLs.',
    },
    {
        header: 'Branch search',
        description: 'Search across all repositories, branches, forks, and even archived repositories.',
    },
    {
        header: 'Keyword and regex search',
        description: 'Search using keywords or using regular expressions.',
    },
    {
        header: 'Diff and commit search',
        description: 'Use diff and commit searches to find specific changes to your codebase. Filter by author and date.',
    },
    {
        header: 'Symbol search',
        description: 'Search for symbols within your code, with support for 75+ languages.',
    },
    {
        header: 'Search Jobs',
        description: 'Run exhaustive searches in the background for sensitive tasks like finding tokens & secrets.',
    },
    {
        header: 'Code monitoring',
        description: 'Proactively monitor changes to your codebase. Get notified via Slack, email, or webhook.',
    },
    {
        header: 'Search contexts',
        description: 'Create and share repository and file groupings for quick, scoped searches.',
    },
    {
        header: 'Saved searches',
        description: 'Save searches that you come back to over time.',
    },
]

const CODE_NAVIGATION_CONTENT = [
    {
        header: 'Search-based code navigation',
        description: 'Navigate code with Find \'references\' and \'Go to definition,\' supporting 40+ languages out-of-the-box.',
    },
    {
        header: 'Precise, compiler-accurate code navigation',
        description: 'Configure SCIP data of your code graph for 100% accurate code navigation supporting 11 common languages.',
    },
    {
        header: 'Cross-repository code navigation',
        description: 'Navigate dependencies of your code graph, even when they cross repositories.',
    },
    {
        header: 'Code ownership data',
        description: 'See CODEOWNERS data from the file navigation view.',
    },
]

const BATCH_CHANGES_CONTENT = [
    {
        header: 'Change code everywhere',
        description: 'Write batch specs to make programmatic changes across multiple repositories.',
    },
    {
        header: 'Track changes from creation to merge',
        description: 'View the status of all changesets from a single dashboard, tracking them through completion.',
    },
]

const CODE_INSIGHTS_CONTENT = [
    {
        header: 'Track trends about your code',
        description: 'Visualize migrations, package usage, version adoption, code smells, or even codebase size.',
    },
    {
        header: 'Visualize your codebase with dashboards',
        description: 'Customize dashboards with multiple insights. Anything that\'s happening in your codebase can be visualized.',
    },
]

const SECTIONS = [
    { id: 'chat', name: 'Chat', icon: '/cody/chat-brand-icon.svg', alt: 'Cody Chat' },
    { id: 'prompts', name: 'Prompts', icon: '/cody/commands-brand-icon.svg', alt: 'Cody Prompts' },
    { id: 'autocomplete', name: 'Autocomplete', icon: '/cody/completions-brand-icon.svg', alt: 'Cody Autocomplete' },
    { id: 'code-search', name: 'Code Search', icon: '/cody/code-search.svg', alt: 'Code Search' },
    { id: 'code-navigation', name: 'Code Navigation', icon: '/cody/code-navigation.svg', alt: 'Code Navigation' },
    { id: 'batch-changes', name: 'Batch Changes', icon: '/cody/batch-changes.svg', alt: 'Batch Changes' },
    { id: 'code-insights', name: 'Code Insights', icon: '/cody/code-insights.svg', alt: 'Code Insights' },
]

const CodyPage: FunctionComponent = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const isLight = true; 
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollPosition = window.scrollY + 100 // Offset for the sticky menu

            for (const section of SECTIONS) {
                const element = document.querySelector(`#${section.id}`) as HTMLElement
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section.id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Features',
                description:
                    'Learn how Code Search and Cody help you write, fix, and maintain code faster.',
                image: 'https://sourcegraph.com/code-search/code-search-og.png',
            }}
            hero={<FeaturesHero/>}
            className="bg-gray-50 relative"
        >
            <nav className="sticky top-[110px] z-10 bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-4">
                    <ul className="flex justify-between overflow-x-auto">
                        {SECTIONS.map(section => (
                            <div key={section.id} className="">
                                <ScrollLink
                                    to={section.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className={classNames(
                                        'cursor-pointer px-3 py-2 flex flex-col items-center',
                                        {
                                            'font-bold text-purple-600': activeSection === section.id,
                                            'text-gray-600 hover:text-purple-600': activeSection !== section.id
                                        }
                                    )}
                                >
                                    <img src={section.icon} alt={section.alt} className="h-[24px] w-[24px] mb-2" />
                                    {section.name}
                                </ScrollLink>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Chat section */}
            <div id="chat" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4 flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                <img className="h-[48px] w-[48px]" src="/cody/chat-brand-icon.svg" alt="Cody Chat" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Chat</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Chat directly with the AI to ask questions about your code, generate code, and edit code. Cody has context of your open file and repository by default, and you can use "@" to add context on specific files, symbols, remote repositories, or other non-code artifacts.</p>
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
            <div id="prompts" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4 flex flex-col gap-6 px-6 md:gap-4 md:px-10">
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
            <div id="autocomplete" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4 flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                <img className="h-[48px] w-[48px]" src="/cody/completions-brand-icon.svg" alt="Cody Autocomplete" />
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

            {/* Code Search section */}
            <div id="code-search" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
            <img className="h-[48px] w-[48px]" src="/cody/code-search.svg" alt="Code Search" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Code Search</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Search all of your code in one place. Sourcegraph indexes all your code hosts to a single server that you can search and navigate from the web.</p>
            </div>

            <ContentSection className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
            parentClassName={classNames('md:px-20')}>
                {CODE_SEARCH_CONTENT.map(content => (
                <div
                key={content.header}
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 py-16 bg-white',
                )}
            >
                    <div className="flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                            <div>
                                <h2>{content.header}</h2>
                                <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                                    <p>{content.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </ContentSection>

            {/* Code Navigation section */}
            <div id="code-navigation" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <img className="h-[48px] w-[48px]" src="/cody/code-navigation.svg" alt="Code Navigation" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Code Navigation</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Navigate through your full code graph on the web without pulling it to your local machine.</p>
            </div>

            <ContentSection className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
            parentClassName={classNames('md:px-20')}>
                {CODE_NAVIGATION_CONTENT.map(content => (
                <div
                key={content.header}
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 py-16 bg-white',
                )}
            >
                    <div className="flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                            <div>
                                <h2>{content.header}</h2>
                                <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                                    <p>{content.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </ContentSection>

            {/* Batch Changes section */}
            <div id="batch-changes" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <img className="h-[48px] w-[48px]" src="/cody/batch-changes.svg" alt="Batch Changes" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Batch Changes</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Automate and ship large-scale code changes to keep your code up to date, fix security issues, and pay down tech debt.</p>
            </div>

            <ContentSection className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
            parentClassName={classNames('md:px-20')}>
                {BATCH_CHANGES_CONTENT.map(content => (
                <div
                key={content.header}
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 py-16 bg-white',
                )}
            >
                    <div className="flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                            <div>
                                <h2>{content.header}</h2>
                                <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                                    <p>{content.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </ContentSection>

            {/* Code Insights section */}
            <div id="code-insights" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <img className="h-[48px] w-[48px]" src="/cody/code-insights.svg" alt="Code Insights" />
                <h2 className={classNames('m-0 mb-4 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}>Code Insights</h2>
                <p className={classNames('m-0 text-left md:text-2xl max-w-[800px]', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}>Transform your code into a queryable database to create customizable, visual dashboards in seconds.</p>
            </div>

            <ContentSection className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
            parentClassName={classNames('md:px-20')}>
                {CODE_INSIGHTS_CONTENT.map(content => (
                <div
                key={content.header}
                className={classNames(
                    'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 py-16 bg-white',
                )}
            >
                    <div className="flex flex-col gap-6 px-6 md:gap-4 md:px-10">
                            <div>
                                <h2>{content.header}</h2>
                                <div className="mb-9 text-xl leading-[26px] tracking-tight text-gray-500">
                                    <p>{content.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
                ))}
            </ContentSection>
            
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

const FeaturesHero: FunctionComponent = () => (
    <ContentSection className="flex items-center justify-center" parentClassName="!py-0">
        <div className="mx-auto flex flex-col items-center justify-center text-center">
            <div className="mx-auto flex flex-col items-center pb-16 pt-8 md:w-[828px] md:pb-[25px] md:pt-16">
                <div className="container mx-auto mb-6 grid gap-8 text-center">
                    <h1 className="color-[#0F111A] pt-16 md:pt-0">Features</h1>
                </div>
                <h3 className="mb-10 text-gray-500 md:mb-8 md:px-6">
                    Search, navigate, and automate code faster.
                </h3>
            </div>
        </div>
    </ContentSection>
)

export default CodyPage

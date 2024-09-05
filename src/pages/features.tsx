import { FunctionComponent, useState, useEffect, FC } from 'react'

import classNames from 'classnames'
import { Link as ScrollLink } from 'react-scroll'

import { Layout, HubSpotForm, Modal, CodyCta, ContentSection } from '../components'

import styles from '../styles/CustomHubspotForm.module.scss'

const CHAT_CONTENT = [
    {
        header: 'Ask about your code',
        description:
            'Use "@" + a repository, file, line range, or symbol to ask questions about your codebase. Generate code using context @-mention files or symbols to use that code as context. Cody will use it to generate contextually relevant code.',
        imageSrc: '/assets/features/chat-ask-cody.png',
        imageAlt: 'Cody Chat Ask Cody',
    },
    {
        header: 'Smart Apply',
        description: 'When Cody suggests code in chat, hit "Apply" to make those changes directly in your files.',
        imageSrc: '/assets/features/smart-apply.png',
        imageAlt: 'Cody Smart Apply',
    },
    {
        header: 'Inline edits',
        description:
            'Highlight code, hit the edit hotkey, and describe a change. Cody will generate a diff for the change in seconds.',
        imageSrc: '/assets/features/chat-inline-edits.png',
        imageAlt: 'Cody Chat Inline Edits',
    },
    {
        header: 'Ask Cody to Fix',
        description: 'For errors in your code, hit Ask Cody to Fix and Cody will propose a diff based on the error.',
        imageSrc: '/assets/features/chat-ask-cody-to-fix.png',
        imageAlt: 'Cody Chat Ask Cody to Fix',
    },
    {
        header: 'Reference your development artifacts',
        description:
            'Connect Cody to OpenCtx to @-mention non-code artifacts like Google Docs, Notion pages, Jira tickets, and Linear issues.',
        imageSrc: '/assets/features/chat-reference-artifacts.png',
        imageAlt: 'Cody Chat Reference Artifacts',
    },
    {
        header: 'Use information directly from the web',
        description: '@-mention web URLs to pull live information, like docs, that can be used to answer questions.',
        imageSrc: '/assets/features/web-urls.png',
        imageAlt: 'Add web URLs to your chat',
    },
    {
        header: 'Choose your favorite model',
        description: 'Choose from model options optimized for speed versus accuracy.',
        imageSrc: '/assets/features/chat-model-selection.png',
        imageAlt: 'Cody Chat Model Selection',
    },
    {
        header: 'Run offline (Experimental)',
        description: 'Connect to Ollama to run entirely offline. You can even code using AI on an airplane.',
        imageSrc: '/assets/features/cody-ollama.png',
        imageAlt: 'Run offline',
    },
    {
        header: 'Context Filters',
        description:
            "Configure which repositories and file paths Cody can or can't send to the LLM and use as context.",
        imageSrc: '/assets/features/cody-context-filters.png',
        imageAlt: 'Context filters',
    },
    {
        header: 'Guardrails for catching licensed code',
        description:
            'Cody verifies suggestions against a large corpus of public code and flags licensed code suggestions to the user.',
        imageSrc: '/assets/features/cody-guardrails.png',
        imageAlt: 'Guardrails',
    },
]

const PROMPTS_CONTENT = [
    {
        header: 'Generate unit tests',
        description:
            'Generate unit tests for your code selection, adding to your existing test file or creating a new one, with consideration for your existing tests and test framework.',
        imageSrc: '/assets/features/cody-generate-unit-tests.png',
        imageAlt: 'Generate unit tests',
    },
    {
        header: 'Explain code',
        description:
            'Explain code in simple language, walking through its inputs, outputs, purpose, and logic of the code.',
        imageSrc: '/assets/features/cody-explain-code.png',
        imageAlt: 'Explain code',
    },
    {
        header: 'Document code',
        description:
            "Generate documentation for any selection of code (from symbols to entire files), even for legacy code you didn't write yourself.",
        imageSrc: '/assets/features/cody-document-code.png',
        imageAlt: 'Document code',
    },
    {
        header: 'Find code smells',
        description:
            'Analyze a code selection and provide suggestions for improving readability, maintainability, performance, or security.',
        imageSrc: '/assets/features/cody-find-code-smells.png',
        imageAlt: 'Find code smells',
    },
    {
        header: 'Prompt Library',
        description: 'Create and save prompts for reuse, then share them with your teammates via the Prompt Library.',
        imageSrc: '/assets/features/cody-prompt-library.png',
        imageAlt: 'Prompt library',
    },
]

const AUTOCOMPLETE_CONTENT = [
    {
        header: 'Smart predictions',
        description:
            'Cody predicts your next move as you type, suggesting code (like function arguments) without needing to look them up.',
        imageSrc: '/assets/features/cody-autocomplete.png',
        imageAlt: 'Smart predictions',
    },
    {
        header: 'Natural language code generation',
        description: 'Type out a comment in natural language. Cody will suggest how to implement what you commented.',
        imageSrc: '/assets/features/cody-autocomplete-from-comments.png',
        imageAlt: 'Natural language code generation',
    },
]

const CODE_SEARCH_CONTENT = [
    {
        header: 'Multi-repo, multi-code host search',
        description: 'See your code from a single search bar, across every repository and every code host.',
        imageSrc: '/assets/features/multi-repo.png',
        imageAlt: 'Multi repo search',
    },
    {
        header: 'Shareable web links',
        description: 'Share exact files and lines of code with teammates using shareable web URLs.',
        imageSrc: '/assets/features/shareable-web-links.png',
        imageAlt: 'Web links',
    },
    {
        header: 'Branch search',
        description: 'Search across all repositories, branches, forks, and even archived repositories.',
        imageSrc: '/assets/features/branch-search.png',
        imageAlt: 'Branch search',
    },
    {
        header: 'Keyword and regex search',
        description: 'Search using keywords or using regular expressions.',
        imageSrc: '/assets/features/regex-search.png',
        imageAlt: 'Regular expression search',
    },
    {
        header: 'Diff and commit search',
        description:
            'Use diff and commit searches to find specific changes to your codebase. Filter by author and date.',
            imageSrc: '/assets/features/diff-search.png',
            imageAlt: 'Diff search',
    },
    {
        header: 'Symbol search',
        description: 'Search for symbols within your code, with support for 75+ languages.',
        imageSrc: '/assets/features/symbol-search.png',
        imageAlt: 'Symbol search',
    },
    {
        header: 'Search Jobs',
        description: 'Run exhaustive searches in the background for sensitive tasks like finding tokens & secrets.',
        imageSrc: '/assets/features/search-jobs.png',
        imageAlt: 'Search jobs',
        
    },
    {
        header: 'Code monitoring',
        description: 'Proactively monitor changes to your codebase. Get notified via Slack, email, or webhook.',
        imageSrc: '/assets/features/code-monitors.png',
        imageAlt: 'Code monitors',
    },
    {
        header: 'Search contexts',
        description: 'Create and share repository and file groupings for quick, scoped searches.',
        imageSrc: '/assets/features/search-contexts.png',
        imageAlt: 'Search contexts',
    },
    {
        header: 'Saved searches',
        description: 'Save searches that you come back to over time.',
        imageSrc: '/assets/features/saved-searches.png',
        imageAlt: 'Saved search',
    },
]

const CODE_NAVIGATION_CONTENT = [
    {
        header: 'Search-based code navigation',
        description:
            "Navigate code with Find 'references' and 'Go to definition,' supporting 40+ languages out-of-the-box.",
        imageSrc: '/assets/features/search-based-code-navigation.png',
        imageAlt: 'Search-based code navigation'
    },
    {
        header: 'Precise, compiler-accurate code navigation',
        description:
            'Configure SCIP data of your code graph for 100% accurate code navigation supporting 11 common languages.',
        imageSrc: '/assets/features/precise-code-navigation.png',
        imageAlt: 'Precise code navigation'
    },
    {
        header: 'Cross-repository code navigation',
        description: 'Navigate dependencies of your code graph, even when they cross repositories.',
        imageSrc: '/assets/features/cross-repo.png',
        imageAlt: 'Cross-repository code navigation'
    },
    {
        header: 'Code ownership data',
        description: 'See CODEOWNERS data from the file navigation view.',
        imageSrc: '/assets/features/code-ownership-data.png',
        imageAlt: 'Code owners data'
    },
]

const BATCH_CHANGES_CONTENT = [
    {
        header: 'Change code everywhere',
        description: 'Write batch specs to make programmatic changes across multiple repositories.',
        imageSrc: '/assets/features/change-code-everywhere.png',
        imageAlt: 'Batch change changesets list'
    },
    {
        header: 'Track changes from creation to merge',
        description: 'View the status of all changesets from a single dashboard, tracking them through completion.',
        imageSrc: '/assets/features/track-changes-from-creation-to-merge.png',
        imageAlt: 'Batch change burndown chart'
    },
]

const CODE_INSIGHTS_CONTENT = [
    {
        header: 'Track trends about your code',
        description: 'Visualize migrations, package usage, version adoption, code smells, or even codebase size.',
        imageSrc: '/assets/features/track-trends-about-your-code.png',
        imageAlt: 'Code Insights single visualization'
    },
    {
        header: 'Visualize your codebase with dashboards',
        description:
            "Customize dashboards with multiple insights. Anything that's happening in your codebase can be visualized.",
        imageSrc: '/assets/features/visualize-your-codebase-with-dashboards.png',
        imageAlt: 'Code Insights dashboard',
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
    const isLight = true
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollPosition = window.scrollY + 100 // Offset for the sticky menu

            for (const section of SECTIONS) {
                const element = document.querySelector(`#${section.id}`) as HTMLElement
                if (
                    element &&
                    element.offsetTop <= scrollPosition &&
                    element.offsetTop + element.offsetHeight > scrollPosition
                ) {
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
                description: 'Learn how Code Search and Cody help you write, fix, and maintain code faster.',
                image: '/assets/features/og-image-features.png',
            }}
            hero={<FeaturesHero />}
            className="relative bg-gray-50"
        >
            <nav className="sticky top-[110px] z-10 hidden bg-gray-50 py-1 xl:block">
                <div className="mx-auto max-w-screen-xl rounded-full bg-gray-200/50 px-1 py-1">
                    <ul className="ml-0 flex justify-between gap-x-2 overflow-x-auto">
                        {SECTIONS.map(section => (
                            <div key={section.id} className="w-full">
                                <ScrollLink
                                    to={section.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className={classNames(
                                        'flex cursor-pointer items-center justify-center gap-x-2 rounded-full px-4 py-1 text-sm text-gray-400 hover:bg-gray-200/50',
                                        {
                                            'bg-gray-300/30 text-gray-600': activeSection === section.id,
                                            'hover:text-purple-600 text-gray-600': activeSection !== section.id,
                                        }
                                    )}
                                >
                                    <img src={section.icon} alt={section.alt} className="h-4 w-4" />
                                    {section.name}
                                </ScrollLink>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Chat section */}
            <div
                id="chat"
                className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 px-6 pt-24 md:gap-4 md:px-0 md:px-10 md:pb-4"
            >
                <HeaderComponent
                    icon="/cody/chat-brand-icon.svg"
                    alt="Cody Chat"
                    title="Chat"
                    isLight={isLight}
                    description="Chat directly with the AI to ask questions about your code, generate code, and edit code. Cody has context of your open file and repository by default, and you can use '@' to add context on specific files, symbols, remote repositories, or other non-code artifacts."
                />
            </div>

            <ContentSection
                className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
                parentClassName={classNames('md:px-20')}
            >
                {CHAT_CONTENT.map(content => (
                    <ContentCard key={content.header} content={content} />
                ))}
            </ContentSection>

            {/* Prompts section */}
            <div
                id="prompts"
                className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 px-6 pt-24 md:gap-4 md:px-0 md:px-10 md:pb-4"
            >
                <HeaderComponent
                    icon="/cody/commands-brand-icon.svg"
                    alt="Cody Prompts"
                    title="Prompts"
                    isLight={isLight}
                    description="Automate key tasks in your workflow with premade and customizable prompts. Any common query or task can be built into a prompt to save and share with your team."
                />
            </div>

            <ContentSection
                className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
                parentClassName={classNames('md:px-20')}
            >
                {PROMPTS_CONTENT.map(content => (
                    <ContentCard key={content.header} content={content} />
                ))}
            </ContentSection>

            {/* Autocomplete section */}
            <div
                id="autocomplete"
                className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 px-6 pt-24 md:gap-4 md:px-0 md:px-10 md:pb-4"
            >
                <HeaderComponent
                    icon="/cody/completions-brand-icon.svg"
                    alt="Cody Autocomplete"
                    title="Autocomplete"
                    isLight={isLight}
                    description="Cody predicts what you're trying to write before you type it. It makes single-line and multi-line suggestions as you type, using the context of the code around your cursor to make accurate suggestions."
                />
            </div>

            <ContentSection
                className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
                parentClassName={classNames('md:px-20')}
            >
                {AUTOCOMPLETE_CONTENT.map(content => (
                    <ContentCard key={content.header} content={content} />
                ))}
            </ContentSection>

            {/* Code Search section */}
            <div id="code-search" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <HeaderComponent
                    icon="/cody/code-search.svg"
                    alt="Code Search"
                    title="Code Search"
                    isLight={isLight}
                    description="Search all of your code in one place. Sourcegraph indexes all your code hosts to a single server that you can search and navigate from the web."
                />
            </div>

            <ContentSection
                className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
                parentClassName={classNames('md:px-20')}
            >
                {CODE_SEARCH_CONTENT.map(content => (
                    <ContentCard key={content.header} content={content} />
                ))}
            </ContentSection>

            {/* Code Navigation section */}
            <div id="code-navigation" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <HeaderComponent
                    icon="/cody/code-navigation.svg"
                    alt="Code Navigation"
                    title="Code Navigation"
                    isLight={isLight}
                    description="Navigate through your full code graph on the web without pulling it to your local machine."
                />
            </div>

            <ContentSection
                className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
                parentClassName={classNames('md:px-20')}
            >
                {CODE_NAVIGATION_CONTENT.map(content => (
                    <ContentCard key={content.header} content={content} />
                ))}
            </ContentSection>

            {/* Batch Changes section */}
            <div id="batch-changes" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <HeaderComponent
                    icon="/cody/batch-changes.svg"
                    alt="Batch Changes"
                    title="Batch Changes"
                    isLight={isLight}
                    description="Automate and ship large-scale code changes to keep your code up to date, fix security issues, and pay down tech debt."
                />
            </div>

            <ContentSection
                className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
                parentClassName={classNames('md:px-20')}
            >
                {BATCH_CHANGES_CONTENT.map(content => (
                    <ContentCard key={content.header} content={content} />
                ))}
            </ContentSection>

            {/* Code Insights section */}
            <div id="code-insights" className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
                <HeaderComponent
                    icon="/cody/code-insights.svg"
                    alt="Code Insights"
                    title="Code Insights"
                    isLight={isLight}
                    description="Transform your code into a queryable database to create customizable, visual dashboards in seconds."
                />
            </div>

            <ContentSection
                className={classNames('grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:!py-0')}
                parentClassName={classNames('md:px-20')}
            >
                {CODE_INSIGHTS_CONTENT.map(content => (
                    <ContentCard key={content.header} content={content} />
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
            <div className="mx-auto flex flex-col items-center pt-8 md:w-[828px] md:pb-[25px] md:pt-16">
                <div className="container mx-auto mb-2 grid gap-8 text-center">
                    <h1 className="color-[#0F111A] pt-16 md:pt-0">Features</h1>
                </div>
                <h3 className="mb-10 text-gray-500 md:mb-8 md:px-6">Search, navigate, and automate code faster.</h3>
            </div>
        </div>
    </ContentSection>
)

interface HeaderComponentProps {
    icon: string
    alt: string
    title: string
    isLight: boolean
    description: string
}

const HeaderComponent: FC<HeaderComponentProps> = ({ icon, alt, title, isLight, description }) => (
    <div className="mb-5 flex flex-col md:items-center md:justify-center">
        <div className="mb-5 flex items-center justify-start gap-x-4 md:justify-center">
            <img className="h-10 w-10" src={icon} alt={alt} />
            <h2
                className={classNames('m-0 text-left text-3xl md:text-5xl', {
                    'text-white': !isLight,
                    'text-[#0F111A]': isLight,
                })}
            >
                {title}
            </h2>
        </div>
        <p
            className={classNames('m-0 max-w-[800px] text-left !text-base md:text-center md:!text-xl', {
                'text-[#343A4D]': isLight,
                'text-gray-200': !isLight,
            })}
        >
            {description}
        </p>
    </div>
)

interface ContentCardProps {
    content: {
        header: string
        description: string
        imageSrc?: string
        imageAlt?: string
    }
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => (
    <div
        className={classNames(
            'relative flex flex-col overflow-hidden rounded-2xl border-1 border-gray-200 bg-white pt-8',
            { 'pb-5': !content.imageSrc }
        )}
    >
        <div className="flex h-full flex-col justify-between gap-6 md:gap-4">
            <div className="px-6 md:px-8">
                <h2 className="mb-2 text-xl md:text-2xl">{content.header}</h2>
                <div className="text-sm tracking-tight text-gray-400 md:text-lg">
                    <p>{content.description}</p>
                </div>
            </div>

            {content.imageSrc && (
                <img className="md:-px-10" src={content.imageSrc} alt={content.imageAlt || content.header} />
            )}
        </div>
    </div>
)

export default CodyPage

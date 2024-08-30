import {FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
    Layout,
    ContentSection,
} from '../../components'
import { useAuthModal } from '../../context/AuthModalContext'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../../lib/utils'

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
        description: 'Customize dashboards with multiple insights. Anything that’s happening in your codebase can be visualized.',
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
                title: 'Sourcegraph | Code Search',
                description:
                    'Code Search helps devs explore their codebase, make large-scale migrations, and fix security issues faster—especially in large, distributed codebases.',
                image: 'https://sourcegraph.com/code-search/code-search-og.png',
            }}
            hero={<CodeSearchHero />}
            className="bg-gray-50"
        >

            {/* Code Search section */}
            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
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
            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
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
            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
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
            <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-0 md:pb-4">
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
        </Layout>
    )
}

const CodeSearchHero: FunctionComponent = () => (
    <ContentSection className="flex items-center justify-center" parentClassName="!py-0">
        <div className="mx-auto flex flex-col items-center justify-center text-center">
            <div className="mx-auto flex flex-col items-center pb-16 pt-8 md:w-[828px] md:pb-[63px] md:pt-16">
                <div className="mb-[8px] flex items-center justify-start gap-[8px]">
                    <img src="/codesearch-logomark-default.svg" alt="Cody Logo" className="w-[40px h-[40px]" />
                    <h3>Code Search</h3>
                </div>

                <div className="container mx-auto mb-6 grid gap-8 text-center">
                    <h1 className="color-[#0F111A] pt-16 md:pt-0">Features</h1>
                </div>
                <h3 className="mb-10 text-gray-500 md:mb-8 md:px-6">
                    Search, navigate, and automate code faster.
                </h3>
                <div className="mx-auto flex flex-row flex-wrap justify-center gap-[8px] rounded-[6px]">
                    <Link href="/contact/request-info" className="btn btn-primary">
                        Book a demo
                    </Link>
                    <Link
                        href="/pricing?product=codeSearch"
                        className="btn btn-secondary w-[215px] text-center sm:w-fit"
                    >
                        See pricing
                    </Link>
                </div>
            </div>
        </div>
    </ContentSection>
)

export default CodyPage

import { FunctionComponent, ReactSVG } from 'react'

import { ChevronRightIcon, Target, Zap } from 'lucide-react'

import {
    CodyPartners,
    ContentSection,
    Hero,
    Layout,
    Tabs,
    TemplateCodeBlock,
    TwoColumnSection,
    Video,
} from '../components'
import { ContentEnum, FullWidthTabsCarousel } from '../components/Carousels/fullWidthTabsCarousel'
import { CodeInsightExample } from '../components/CodeInsights/CodeInsightsExamples'
import {
    ALPINE_VERSIONS_INSIGHT,
    DEPRECATED_API_USAGE_BY_TEAM,
    LINTER_OVERRIDES,
    LOG_4_J_INCIDENT_INSIGHT,
    OPENSSL_PYTHON,
    REPOS_WITH_CI_SYSTEM,
    SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA,
} from '../components/CodeInsights/mock-data'
import { CodeInsightExampleType } from '../components/CodeInsights/types'
import { ContactUsCta } from '../components/cta/ContactUsCta'
import { StandardCallToAction } from '../components/cta/StandardCallToAction'
import { Icon } from '../components/icon'
import { buttonLocation, buttonStyle } from '../data/tracking'
import { TelemetryProps } from '../telemetry'

import styles from './code-insights.module.css'

const items = [
    {
        title: 'Track migrations, adoption, and deprecations',
        text: (
            <CodeInsightExample type={CodeInsightExampleType.Search} data={SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA} />
        ),
    },
    {
        title: 'Detect and track versions of languages or packages',
        text: <CodeInsightExample type={CodeInsightExampleType.Capture} data={ALPINE_VERSIONS_INSIGHT} />,
    },
    {
        title: 'Ensure removal of security vulnerabilities',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={LOG_4_J_INCIDENT_INSIGHT} />,
    },
    {
        title: 'Find vulnerable OpenSSL versions in the Python Ecosystem',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={OPENSSL_PYTHON} />,
    },
    {
        title: 'Understand code by team',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={DEPRECATED_API_USAGE_BY_TEAM} />,
    },
    {
        title: 'Track code smells and health',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={LINTER_OVERRIDES} />,
    },
    {
        title: 'Visualize configurations and services',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={REPOS_WITH_CI_SYSTEM} />,
    },
]

const templates = {
    migrations: [
        {
            header: 'Global CSS to CSS modules',
            description: 'Track migration from global CSS to CSS modules.',
            queries: [
                <>
                    <span className="text-blurple-400">select:</span>file{' '}
                    <span className="text-blurple-400">lang:</span>SCSS <span className="text-blurple-400">file:</span>
                    module <span className="text-blurple-400">patterntype:</span>regexp{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
                <>
                    <span className="text-blurple-400">type:</span>file <span className="text-blurple-400">lang:</span>
                    scss
                    <span className="text-blurple-400">-file:</span>module{' '}
                    <span className="text-blurple-400">patterntype:</span>regexp{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python 2 to Python 3',
            description: 'How far along is the Python major version migration?',
            queries: [
                <>
                    #!/usr/bin/env python3 <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
                <>
                    #!/usr/bin/env python2 <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'React Class to Function Components',
            description: "What's the status of migrating to React function components from class components?",
            queries: [
                <>
                    <span className="text-blurple-400">patterntype:</span>regexp
                    const\s\w+:\s(React\.)?FunctionComponent <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
                <>
                    <span className="text-blurple-400">patterntype:</span>regexp extends\s(React\.)?(Pure)?Component{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Config or docs file',
            description: 'How many repos contain a config or docs file in a specific directory?',
            queries: [
                <>
                    <span className="text-blurple-400">select:</span>repo{' '}
                    <span className="text-blurple-400">file:</span>
                    docs/*/new_config_filename <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
    ],
    versionTracking: [
        {
            header: 'Java versions',
            description: 'Detect and track which Java versions are present or most popular in your code base.',
            queries: [
                <>
                    {'<java.version>(.*)</java.version>'} <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'All log4j versions',
            description: 'Which log4j versions are present, including vulnerable versions?',
            queries: [
                <>
                    <span className="text-blurple-400">lang:</span>gradle org\.apache\.logging\.log4j['"] 2\.([0-9]+)\.{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'License types in the codebase',
            description: 'See the breakdown of licenses from package.json files.',
            queries: [
                <>
                    <span className="text-blurple-400">file:</span>package.json "license":\s"(.*)"{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python versions',
            description: "Which python versions are in use or haven't been updated?",
            queries: [
                <>
                    #!/usr/bin/env python([0-9]\.[0-9]+) <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
    ],
    security: [
        {
            header: 'Vulnerable open source library',
            description:
                'Confirm that a vulnerable open source library has been fully removed, or the speed of the deprecation.',
            queries: [
                <>
                    vulnerableLibrary@14.3.9 <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'How many tests are skipped',
            description: 'See how many tests have skip conditions.',
            queries: [
                <>
                    this.skip() <span className="text-blurple-400">patterntype:</span>literal{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Vulnerable log4j versions',
            description: 'What vulnerable log4j versions are present?',
            queries: [
                <>
                    <span className="text-blurple-400">lang:</span>gradle org\.apache\.logging\.log4j['"]
                    2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+){' '}
                    <span className="text-blurple-400">patterntype:</span>regexp{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'API keys',
            description: 'How quickly do we notice and remove API keys when they are committed?',
            queries: [
                <>
                    regexMatchingAPIKey <span className="text-blurple-400">patterntype:</span>regexp{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
    ],
    codeHealth: [
        {
            header: 'TODOs',
            description: 'How many TODOs are in a specific part of the codebase (or all of it)?',
            queries: [
                <>
                    TODO <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>
                    no
                </>,
            ],
        },
        {
            header: 'Commits with "revert"',
            description: 'How frequently are there commits with “revert” in the commit message?',
            queries: [
                <>
                    <span className="text-blurple-400">type:</span>commit revert{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Linter override rules',
            description: 'How many linter override rules exist?',
            queries: [
                <>
                    <span className="text-blurple-400">file:</span>\.eslintignore .\n{' '}
                    <span className="text-blurple-400">patterntype:</span>regexp{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Deprecated calls',
            description: 'How many times are deprecated calls used?',
            queries: [
                <>
                    <span className="text-blurple-400">lang:</span>java @deprecated{' '}
                    <span className="text-blurple-400">archived:</span>no{' '}
                    <span className="text-blurple-400">fork:</span>no
                </>,
            ],
        },
    ],
}

const blogResourceItems = [
    {
        title: 'How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights',
        description:
            'How our Frontend Platform team used codemods to automate a challenging global migration to CSS modules, and Code Insights to track and communicate progress.',
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migrating-to-css-modules.png',
            alt: 'Migrating to CSS modules with codemods and code insights blog thumbnail',
        },
        href: '/blog/migrating-to-css-modules-with-codemods-and-code-insights',
    },
    {
        title: '5 key traits of a code intelligence platform',
        description:
            'Sourcegraph is more than search. Learn how the code intelligence platform helps development teams quickly get unblocked, resolve issues faster, and gain insights to make better decisions.',
        type: 'Guide',
        img: {
            src: '/blog/thumbnails/dark-multi-grid.jpg',
            alt: 'Grid background with abstract blue and pink hues',
        },
        href: '/guides/key-traits-of-a-code-intelligence-platform.pdf',
    },
    {
        title: 'Dive into documentation',
        description: 'Learn everything you need to know about Code Insights.',
        type: 'Docs',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-docs.png',
            alt: 'Code insights documentation thumbnail',
        },
        href: 'https://sourcegraph.com/docs/code_insights',
    },
]

const codeOwnerShipIconDefinition: [keyof ReactSVG, Record<string, string>][] = [
    ['svg', { viewBox: '0 0', fill: 'currentColor' }],
    [
        'path',
        {
            d: 'M1 18.9999C0.999918 17.4603 1.44414 15.9533 2.27934 14.6598C3.11456 13.3664 4.30527 12.3414 5.70858 11.708C7.1119 11.0745 8.66822 10.8594 10.1907 11.0886C11.0233 11.2139 11.8264 11.4692 12.5721 11.8413M13 15L11 17L13 19M17 15L19 17L17 19M14 6.00003C14 8.76145 11.7615 11 9.00003 11C6.2386 11 4 8.76145 4 6.00003C4 3.23858 6.2386 1 9.00003 1C11.7615 1 14 3.23858 14 6.00003Z',
        },
    ],
]

const borderClassName = 'border border-gray-200 !rounded-lg !mx-0 !my-0 !w-auto'
const tabsParentClassName = '!w-full lg:!max-w-[519px] justify-center md:flex-col'
const tabMainClassName = 'mt-8 flex w-full flex-wrap justify-center gap-y-6 md:gap-y-2.5 md:gap-x-6'

const CodeInsightsPage: FunctionComponent<TelemetryProps> = ({ telemetryRecorder }) => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Insights',
            description:
                'Draw insights from your codebase about how different initiatives are tracking over time. Code Insights is now generally available for teams of all sizes.',
        }}
        childrenClassName="overflow-hidden"
        className={(styles.container, 'overflow-hidden bg-gray-50')}
        hero={
            <Hero
                variant="gray"
                product="code insights"
                title={'Track what really matters\nto you and your team'}
                titleClassName="text-gray-700 !text-[40px] md:!text-[48px]"
                subtitle="Transform your code into a queryable database to create customizable, visual dashboards in seconds."
                subtitleClassName="text-gray-500"
                contentSectionClassName=""
                rightColumnClassName="md:pt-[77.5px]"
                cta={
                    <StandardCallToAction
                        className="w-full md:!gap-5"
                        buttonLocation={buttonLocation.hero}
                        dark={false}
                        leftButtonClassName="border-1 border-violet-700 hover:border-violet-600 !px-6 !py-2 w-full text-center md:w-fit !text-base tracking-tight"
                        rightButtonClassName="btn lg:btn-sm !btn-secondary md:w-fit w-full text-center !px-6 !py-2 !text-base tracking-tight"
                    />
                }
                displayUnderNav={false}
                productUpperCase={true}
                rightColumn={
                    <img
                        src="assets/code-insights/code-insights-conceptual.svg"
                        alt="Code insights illustration"
                        className="md:w-max md:max-w-[844px]"
                    />
                }
                columnClassName="lg:!gap-x-[110px] overflow-visible"
                className="!mx-0 !my-0 !mt-[36px] overflow-hidden !pt-[0px] !pb-[0px] lg:!mt-16"
            />
        }
    >
        <ContentSection parentClassName="!py-16 lg:!py-28" className="flex flex-col items-center justify-center">
            <p className="mb-[28px] text-center font-mono text-lg font-normal leading-[27px] text-gray-500/[0.7]">
                Trusted by engineering teams worldwide
            </p>
            <div className="flex items-center pb-0">
                <CodyPartners isLight={true} className="!pb-4 pt-4" />
            </div>
        </ContentSection>

        <ContentSection parentClassName="!py-0">
            <div className="flex flex-col items-center">
                <div className="mb-12 flex max-w-[800px] flex-col items-center justify-center text-gray-700">
                    <h2 className="mb-4 text-center font-semibold lg:mb-10">
                        Useful engineering metrics{' '}
                        <span>
                            <i>you</i>
                        </span>{' '}
                        define
                    </h2>
                    <p className="!my-0 !py-0 text-center md:opacity-70">
                        Forget about inaccurate spreadsheets, manual processes, and missing historical data. You can
                        track everything in your codebase, from migrations to code smells, in a seamless and precise
                        way. Make data-driven decisions using visualizations based on the power and accuracy of
                        Sourcegraph Code Search.
                    </p>
                </div>
                <div className="mb-4 max-h-[328px] max-w-[582px] overflow-hidden rounded-2xl border border-gray-200">
                    <Video
                        source={{
                            mp4: 'code_insights/code-insights-720',
                            webm: 'code_insights/code-insights-720',
                        }}
                        title="Code Insights"
                        loop={true}
                        telemetryRecorder={telemetryRecorder}
                    />
                </div>
            </div>
        </ContentSection>

        <ContentSection parentClassName="py-16 md:!py-24 px-6">
            <TwoColumnSection
                className="!gap-y-6 md:items-start lg:!gap-y-12 lg:!gap-x-6"
                centerContent={true}
                leftColumn={
                    <div className="mt-16 flex h-auto flex-col-reverse rounded-2xl border-1 border-gray-200 bg-violet-700 px-8 py-12 text-white md:flex-col md:py-16 md:px-16 lg:mt-0 lg:h-full">
                        <img
                            src="/assets/icons/prezi.svg"
                            className="mb-[70px] hidden h-[48px] w-[115px] pb-[10.29px] md:block"
                        />
                        <p className="text-[32px] font-normal leading-[43.75px] -tracking-[0.25px] md:mb-6 md:!text-[35px]">
                            With Code Insights, our data and migration tracking is accurate across our entire codebase,
                            and our engineers and managers can shift out of manual spreadsheets and spend more time
                            working on code.”
                        </p>
                        <div>
                            <p className="mb-0 text-base leading-6 tracking-[-0.25px] opacity-80">Balázs Tóthfalussy</p>
                            <p className="mb-6 text-sm leading-[19.88px] md:mb-[106px]">Engineering Manager, Prezi</p>
                        </div>
                    </div>
                }
                rightColumn={
                    <div className="flex h-full flex-wrap rounded-2xl border border-gray-200 py-16 px-8 md:px-12">
                        <h2 className="mb-8 w-full text-left lg:mb-10">Engineering leadership with superpowers</h2>
                        <h5 className="mb-9 w-full text-left text-gray-500 md:opacity-70">
                            Code Insights provides reliable real-time reporting directly from the codebase, making
                            engineering leaders and their teams more effective.
                        </h5>
                        <div className="flex max-w-[418px] flex-col gap-9">
                            <div className="flex flex-col">
                                <div className="mr-6">
                                    <Target size={32} color="#8552F2" className="mb-4" />
                                </div>
                                <div className="text-lg text-gray-700">
                                    <span className="font-semibold">Measure goals</span> and visualize progress in your
                                    codebase.
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="icon mr-6">
                                    <Zap size={32} color="#8552F2" className="mb-4" />
                                </div>
                                <div className="text-lg text-gray-700">
                                    <span className="font-semibold">Plan proactively.</span> Stay on top of engineering
                                    initiatives and catch issues before they escalate.
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="mr-6">
                                    <Icon
                                        size={32}
                                        fill="none"
                                        color="#8552F2"
                                        className="mb-4"
                                        iconNode={codeOwnerShipIconDefinition}
                                    />
                                </div>
                                <div className="text-lg text-gray-700">
                                    <span className="font-semibold">Track ownership.</span> Tie trends and metrics to
                                    owners on the teams.
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />
        </ContentSection>

        <ContentSection parentClassName="!py-16 lg:!py-24">
            <FullWidthTabsCarousel
                darkMode={false}
                items={items}
                content={ContentEnum.Media}
                overlineText={<span className="lg:hidden">How engineering teams use Code Insights</span>}
                overline={true}
                cta={false}
                title={
                    <>
                        <span className="hidden lg:block">How engineering teams use Code Insights</span>
                        <span className="lg:hidden">Track migrations, adoption, and deprecations</span>
                    </>
                }
            />
        </ContentSection>

        <ContentSection parentClassName="block !py-16 lg:!py-24">
            <Tabs
                isScrollable={true}
                title="Popular Code Insights templates"
                tabs={[
                    {
                        key: 'migrations',
                        title: 'Migrations',
                        content: (
                            <div className={tabMainClassName}>
                                {templates.migrations.map(template => (
                                    <TemplateCodeBlock
                                        wrapperClassname={borderClassName}
                                        parentClassname={tabsParentClassName}
                                        key={template.header}
                                        template={template}
                                    />
                                ))}
                            </div>
                        ),
                    },
                    {
                        key: 'version_tracking',
                        title: 'Version Tracking',
                        content: (
                            <div className={tabMainClassName}>
                                {templates.versionTracking.map(template => (
                                    <TemplateCodeBlock
                                        wrapperClassname={borderClassName}
                                        parentClassname={tabsParentClassName}
                                        key={template.header}
                                        template={template}
                                    />
                                ))}
                            </div>
                        ),
                    },
                    {
                        key: 'security',
                        title: 'Security',
                        content: (
                            <div className={tabMainClassName}>
                                {templates.security.map(template => (
                                    <TemplateCodeBlock
                                        wrapperClassname={borderClassName}
                                        parentClassname={tabsParentClassName}
                                        key={template.header}
                                        template={template}
                                    />
                                ))}
                            </div>
                        ),
                    },
                    {
                        key: 'code_health',
                        title: 'Code Health',
                        content: (
                            <div className={tabMainClassName}>
                                {templates.codeHealth.map(template => (
                                    <TemplateCodeBlock
                                        wrapperClassname={borderClassName}
                                        parentClassname={tabsParentClassName}
                                        key={template.header}
                                        template={template}
                                    />
                                ))}
                            </div>
                        ),
                    },
                ]}
            />

            <div className="w-full text-center">
                <div className="flex justify-center">
                    <a
                        href="https://sourcegraph.com/docs/code_insights"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                        title="Code Insights on docs."
                        className="btn-link-dark btn-link-icon flex items-center gap-2.5 font-semibold leading-[22.4px] text-violet-500 text-white"
                    >
                        See Docs for more use cases
                        <ChevronRightIcon size={16} className="link-icon" />
                    </a>
                </div>
            </div>
        </ContentSection>

        <ContactUsCta
            buttonClassNames="!max-w-full"
            parentClassNames="mdi:!py-0 mdi:!px-0 !px-6 !py-0 !pb-24"
            className="px-14 py-16"
        />
    </Layout>
)

export default CodeInsightsPage

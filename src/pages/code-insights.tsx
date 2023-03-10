import { FunctionComponent } from 'react'

import BullsEyeArrowIcon from 'mdi-react/BullseyeArrowIcon'
import LighteningBoltOutlineIcon from 'mdi-react/LightningBoltOutlineIcon'
import RocketLaunchOutlineIcon from 'mdi-react/RocketLaunchOutlineIcon'
import TrendingUpIcon from 'mdi-react/TrendingUpIcon'

import {
    Blockquote,
    ContentSection,
    CallToActionContentSection,
    CustomCarousel,
    Hero,
    Layout,
    ResourceList,
    TabCarousel,
    Tabs,
    TemplateCodeBlock,
    TwoColumnSection,
    Video,
    YouTube,
} from '../components'
import { CodeInsightExample } from '../components/CodeInsights/CodeInsightsExamples'
import {
    SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA,
    ALPINE_VERSIONS_INSIGHT,
    LOG_4_J_INCIDENT_INSIGHT,
    DEPRECATED_API_USAGE_BY_TEAM,
    LINTER_OVERRIDES,
    REPOS_WITH_CI_SYSTEM,
    OPENSSL_PYTHON,
} from '../components/CodeInsights/mock-data'
import { CodeInsightExampleType } from '../components/CodeInsights/types'
import { StandardCallToAction } from '../components/cta/StandardCallToAction'
import { buttonStyle, buttonLocation } from '../data/tracking'

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
                    <span className="text-blue-400">select:</span>file <span className="text-blue-400">lang:</span>SCSS{' '}
                    <span className="text-blue-400">file:</span>
                    module <span className="text-blue-400">patterntype:</span>regexp{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
                <>
                    <span className="text-blue-400">type:</span>file <span className="text-blue-400">lang:</span>
                    scss
                    <span className="text-blue-400">-file:</span>module{' '}
                    <span className="text-blue-400">patterntype:</span>regexp{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python 2 to Python 3',
            description: 'How far along is the Python major version migration?',
            queries: [
                <>
                    #!/usr/bin/env python3 <span className="text-blue-400">archived:</span>no{' '}
                    <span className="text-blue-400">fork:</span>no
                </>,
                <>
                    #!/usr/bin/env python2 <span className="text-blue-400">archived:</span>no{' '}
                    <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'React Class to Function Components',
            description: "What's the status of migrating to React function components from class components?",
            queries: [
                <>
                    <span className="text-blue-400">patterntype:</span>regexp const\s\w+:\s(React\.)?FunctionComponent{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
                <>
                    <span className="text-blue-400">patterntype:</span>regexp extends\s(React\.)?(Pure)?Component{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Config or docs file',
            description: 'How many repos contain a config or docs file in a specific directory?',
            queries: [
                <>
                    <span className="text-blue-400">select:</span>repo <span className="text-blue-400">file:</span>
                    docs/*/new_config_filename <span className="text-blue-400">archived:</span>no{' '}
                    <span className="text-blue-400">fork:</span>no
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
                    {'<java.version>(.*)</java.version>'} <span className="text-blue-400">archived:</span>no{' '}
                    <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'All log4j versions',
            description: 'Which log4j versions are present, including vulnerable versions?',
            queries: [
                <>
                    <span className="text-blue-400">lang:</span>gradle org\.apache\.logging\.log4j['"] 2\.([0-9]+)\.{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'License types in the codebase',
            description: 'See the breakdown of licenses from package.json files.',
            queries: [
                <>
                    <span className="text-blue-400">file:</span>package.json "license":\s"(.*)"{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python versions',
            description: "Which python versions are in use or haven't been updated?",
            queries: [
                <>
                    #!/usr/bin/env python([0-9]\.[0-9]+) <span className="text-blue-400">archived:</span>no{' '}
                    <span className="text-blue-400">fork:</span>no
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
                    vulnerableLibrary@14.3.9 <span className="text-blue-400">archived:</span>no{' '}
                    <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'How many tests are skipped',
            description: 'See how many tests have skip conditions.',
            queries: [
                <>
                    this.skip() <span className="text-blue-400">patterntype:</span>literal{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Vulnerable log4j versions',
            description: 'What vulnerable log4j versions are present?',
            queries: [
                <>
                    <span className="text-blue-400">lang:</span>gradle org\.apache\.logging\.log4j['"]
                    2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+){' '}
                    <span className="text-blue-400">patterntype:</span>regexp{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'API keys',
            description: 'How quickly do we notice and remove API keys when they are committed?',
            queries: [
                <>
                    regexMatchingAPIKey <span className="text-blue-400">patterntype:</span>regexp{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
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
                    TODO <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>
                    no
                </>,
            ],
        },
        {
            header: 'Commits with "revert"',
            description: 'How frequently are there commits with “revert” in the commit message?',
            queries: [
                <>
                    <span className="text-blue-400">type:</span>commit revert{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Linter override rules',
            description: 'How many linter override rules exist?',
            queries: [
                <>
                    <span className="text-blue-400">file:</span>\.eslintignore .\n{' '}
                    <span className="text-blue-400">patterntype:</span>regexp{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Deprecated calls',
            description: 'How many times are deprecated calls used?',
            queries: [
                <>
                    <span className="text-blue-400">lang:</span>java @deprecated{' '}
                    <span className="text-blue-400">archived:</span>no <span className="text-blue-400">fork:</span>no
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
        href: 'https://docs.sourcegraph.com/code_insights',
    },
]

const CodeInsightsPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Insights',
            description:
                'Draw insights from your codebase about how different initiatives are tracking over time. Code Insights is now generally available for teams of all sizes.',
        }}
        className={styles.container}
        hero={
            <Hero
                variant="lightNebulousVenus2"
                product="code insights"
                title={'Track what really matters\nto you and your team.'}
                subtitle="Transform your code into a queryable database to create customizable, visual dashboards in seconds."
                cta={<StandardCallToAction buttonLocation={buttonLocation.hero} />}
                displayUnderNav={true}
            />
        }
    >
        <ContentSection>
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-4">
                            Finally, useful engineering metrics{' '}
                            <span>
                                <i>you</i>
                            </span>{' '}
                            define.
                        </h2>
                        <p>
                            Forget about inaccurate spreadsheets, manual processes, and missing historical data. You can{' '}
                            <strong>track everything in your codebase</strong>, from migrations to code smells, in a
                            seamless and precise way. Make data-driven decisions using visualizations based on the power
                            and accuracy of Sourcegraph Code Search.
                        </p>
                    </>
                }
                rightColumn={
                    <Video
                        source={{
                            mp4: 'code_insights/code-insights-720',
                            webm: 'code_insights/code-insights-720',
                        }}
                        title="Code Insights"
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <div className="mx-auto max-w-screen-lg">
                <Blockquote
                    headline="Trusted by engineering teams worldwide"
                    quote="As we've grown, so has the need to better track and communicate our progress and
                    goals across the engineering team and broader company. With Code Insights, our data and
                    migration tracking is accurate across our entire codebase, and our engineers and
                    managers can shift out of manual spreadsheets and spend more time working on
                    code."
                    border={false}
                    author="Balázs Tóthfalussy, Engineering Manager, Prezi"
                    logo={{ src: '/external-logos/prezi-logo.svg', alt: 'Prezi logo', href: 'https://prezi.com' }}
                />
            </div>
        </ContentSection>

        <ContentSection>
            <div className="flex flex-wrap">
                <h2 className="mb-4 w-full text-center">Engineering leadership with superpowers</h2>
                <p className={`text-center ${styles['icon-subheader']} w-full`}>
                    Code Insights provides reliable real-time reporting directly from the codebase, making engineering
                    leaders and their teams more effective.
                </p>
                <div className="flex flex-col justify-around lg:px-3xl">
                    <div className="flex py-4 lg:py-md">
                        <div className="mr-6">
                            <BullsEyeArrowIcon className="icon text-blurple-400" size={70} />
                        </div>
                        <div className="flex flex-col">
                            <h5>Set goals</h5>
                            <p className={`${styles['icon-paragraph']}`}>Measure goals and progress in your codebase</p>
                        </div>
                    </div>
                    <div className="flex py-4 lg:py-md">
                        <div className="icon mr-6">
                            <LighteningBoltOutlineIcon className="icon text-blurple-400" size={70} />
                        </div>
                        <div className="flex flex-col">
                            <h5>Plan proactively</h5>
                            <p className={`${styles['icon-paragraph']}`}>
                                Stay on top of engineering initiatives and catch issues before they escalate
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-around lg:px-3xl">
                    <div className="flex py-4 lg:py-md">
                        <div className="mr-6">
                            <TrendingUpIcon className="icon text-blurple-400" size={70} />
                        </div>
                        <div className="flex flex-col">
                            <h5>Track ownership & trends</h5>
                            <p className={`${styles['icon-paragraph']}`}>
                                Tie trends and metrics to owners on the teams
                            </p>
                        </div>
                    </div>
                    <div className="flex py-4 lg:py-md">
                        <div className="mr-6">
                            <RocketLaunchOutlineIcon className="icon text-blurple-400" size={70} />
                        </div>
                        <div className="flex flex-col">
                            <h5>Celebrate progress</h5>
                            <p className={`${styles['icon-paragraph']}`}>
                                Visualize the momentum and motivate your teammates
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ContentSection>

        <ContentSection parentClassName="bg-gray-100">
            <CustomCarousel items={items} hasImages={true} title="How engineering teams use Code Insights" />
        </ContentSection>

        <ContentSection>
            <h2 className="mb-4 text-center">See Code Insights in action</h2>
            <YouTube id="fMCUJQHfbUA" title="Sourcegraph Code Insights demo" className="mx-auto max-w-4xl" />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus hidden md:block">
            <h2 className="mb-8 text-center">Popular Code Insights templates</h2>
            <Tabs
                tabs={[
                    {
                        key: 'migrations',
                        title: 'Migrations',
                        content: (
                            <div className="mt-8 flex w-full flex-wrap">
                                {templates.migrations.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                    {
                        key: 'version_tracking',
                        title: 'Version Tracking',
                        content: (
                            <div className="mt-8 flex w-full flex-wrap justify-center">
                                {templates.versionTracking.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                    {
                        key: 'security',
                        title: 'Security',
                        content: (
                            <div className="mt-8 flex w-full flex-wrap justify-center">
                                {templates.security.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                    {
                        key: 'code_health',
                        title: 'Code Health',
                        content: (
                            <div className="mt-8 flex w-full flex-wrap justify-center">
                                {templates.codeHealth.map(template => (
                                    <TemplateCodeBlock key={template.header} template={template} />
                                ))}
                            </div>
                        ),
                    },
                ]}
            />

            <div className="w-full text-center">
                <a
                    href="https://docs.sourcegraph.com/code_insights"
                    title="Code Insights on docs."
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See Docs for more use cases
                </a>
            </div>
        </ContentSection>

        {/* Use Cases Carousel */}
        <ContentSection parentClassName="sg-bg-gradient-venus block md:hidden">
            <h2 className="mb-8 text-center">Popular Code Insights templates</h2>
            <Tabs
                tabs={[
                    {
                        key: 'migrations',
                        title: 'Migrations',
                        content: (
                            <div className="mt-8 w-full justify-center">
                                <TabCarousel items={templates.migrations} autoAdvance={true} />
                            </div>
                        ),
                    },
                    {
                        key: 'version_tracking',
                        title: 'Version Tracking',
                        content: (
                            <div className="mt-8 w-full justify-center">
                                <TabCarousel items={templates.versionTracking} autoAdvance={true} />
                            </div>
                        ),
                    },
                    {
                        key: 'security',
                        title: 'Security',
                        content: (
                            <div className="mt-8 w-full justify-center">
                                <TabCarousel items={templates.security} autoAdvance={true} />
                            </div>
                        ),
                    },
                    {
                        key: 'code_health',
                        title: 'Code Health',
                        content: (
                            <div className="mt-8 w-full justify-center">
                                <TabCarousel items={templates.codeHealth} autoAdvance={true} />
                            </div>
                        ),
                    },
                ]}
            />
            <div className="text-center">
                <a
                    className="col-7 py-6 px-0"
                    href="https://docs.sourcegraph.com/code_insights"
                    title="Code Insights on docs."
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See Docs for more use cases
                </a>
            </div>
        </ContentSection>

        <CallToActionContentSection />

        <ResourceList items={blogResourceItems} title="Learn More" />
    </Layout>
)

export default CodeInsightsPage

import { FunctionComponent } from 'react'

import BullsEyeArrowIcon from 'mdi-react/BullseyeArrowIcon'
import LighteningBoltOutlineIcon from 'mdi-react/LightningBoltOutlineIcon'
import RocketLaunchOutlineIcon from 'mdi-react/RocketLaunchOutlineIcon'
import TrendingUpIcon from 'mdi-react/TrendingUpIcon'
import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import { CodeInsightExample } from '@code-insights/CodeInsightsExamples'
import {
    SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA,
    ALPINE_VERSIONS_INSIGHT,
    LOG_4_J_INCIDENT_INSIGHT,
    DEPRECATED_API_USAGE_BY_TEAM,
    LINTER_OVERRIDES,
    REPOS_WITH_CI_SYSTEM,
} from '@code-insights/mock-data'
import { CodeInsightExampleType } from '@code-insights/types'
import {
    BlogResourceItem,
    ContentSection,
    CustomCarousel,
    Layout,
    TabCarousel,
    TemplateCodeBlock,
    YouTube,
    Video,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { useHubSpot, useChiliPiper } from '@hooks'

const items = [
    {
        backgroundClass: '',
        buttonLabel: 'Track migrations, adoption, and deprecations',
        text: (
            <CodeInsightExample type={CodeInsightExampleType.Search} data={SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA} />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        backgroundClass: '',
        buttonLabel: 'Detect and track versions of languages or packages',
        text: <CodeInsightExample type={CodeInsightExampleType.Capture} data={ALPINE_VERSIONS_INSIGHT} />,
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        backgroundClass: '',
        buttonLabel: 'Ensure removal of security vulnerabilities',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={LOG_4_J_INCIDENT_INSIGHT} />,
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        backgroundClass: '',
        buttonLabel: 'Understand code by team',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={DEPRECATED_API_USAGE_BY_TEAM} />,
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        backgroundClass: '',
        buttonLabel: 'Track code smells and health',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={LINTER_OVERRIDES} />,
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        backgroundClass: '',
        buttonLabel: 'Visualize configurations and services',
        text: <CodeInsightExample type={CodeInsightExampleType.Search} data={REPOS_WITH_CI_SYSTEM} />,
        headerClass: '',
        itemClass: 'd-none',
    },
]

const templates = {
    migrations: [
        {
            header: 'Global CSS to CSS modules',
            description: 'Track migration from global CSS to CSS modules.',
            queries: [
                <>
                    <span className="keyword">select:</span>file <span className="keyword">lang:</span>SCSS{' '}
                    <span className="keyword">file:</span>module <span className="keyword">patterntype:</span>regexp{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
                <>
                    <span className="keyword">type:</span>file <span className="keyword">lang:</span>scss
                    <span className="keyword">-file:</span>module <span className="keyword">patterntype:</span>regexp{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python 2 to Python 3',
            description: 'How far along is the Python major version migration?',
            queries: [
                <>
                    #!/usr/bin/env python3 <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
                </>,
                <>
                    #!/usr/bin/env python2 <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'React Class to Function Components',
            description: "What's the status of migrating to React function components from class components?",
            queries: [
                <>
                    <span className="keyword">patterntype:</span>regexp const\s\w+:\s(React\.)?FunctionComponent{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
                <>
                    <span className="keyword">patterntype:</span>regexp extends\s(React\.)?(Pure)?Component{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Config or docs file',
            description: 'How many repos contain a config or docs file in a specific directory?',
            queries: [
                <>
                    <span className="keyword">select:</span>repo <span className="keyword">file:</span>
                    docs/*/new_config_filename <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
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
                    {'<java.version>(.*)</java.version>'} <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'All log4j versions',
            description: 'Which log4j versions are present, including vulnerable versions?',
            queries: [
                <>
                    <span className="keyword">lang:</span>gradle org\.apache\.logging\.log4j['"] 2\.([0-9]+)\.{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'License types in the codebase',
            description: 'See the breakdown of licenses from package.json files.',
            queries: [
                <>
                    <span className="keyword">file:</span>package.json "license":\s"(.*)"{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Python versions',
            description: "Which python versions are in use or haven't been updated?",
            queries: [
                <>
                    #!/usr/bin/env python([0-9]\.[0-9]+) <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
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
                    vulnerableLibrary@14.3.9 <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'How many tests are skipped',
            description: 'See how many tests have skip conditions.',
            queries: [
                <>
                    this.skip() <span className="keyword">patterntype:</span>literal{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Vulnerable log4j versions',
            description: 'What vulnerable log4j versions are present?',
            queries: [
                <>
                    <span className="keyword">lang:</span>gradle org\.apache\.logging\.log4j['"]
                    2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+){' '}
                    <span className="keyword">patterntype:</span>regexp <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'API keys',
            description: 'How quickly do we notice and remove API keys when they are committed?',
            queries: [
                <>
                    regexMatchingAPIKey <span className="keyword">patterntype:</span>regexp{' '}
                    <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
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
                    TODO <span className="keyword">archived:</span>no <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Commits with "revert"',
            description: 'How frequently are there commits with “revert” in the commit message?',
            queries: [
                <>
                    <span className="keyword">type:</span>commit revert <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Linter override rules',
            description: 'How many linter override rules exist?',
            queries: [
                <>
                    <span className="keyword">file:</span>\.eslintignore .\n{' '}
                    <span className="keyword">patterntype:</span>regexp <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
                </>,
            ],
        },
        {
            header: 'Deprecated calls',
            description: 'How many times are deprecated calls used?',
            queries: [
                <>
                    <span className="keyword">lang:</span>java @deprecated <span className="keyword">archived:</span>no{' '}
                    <span className="keyword">fork:</span>no
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
        title: 'Announcing Code Insights: analytics for engineering teams to understand and visualize their codebase over time',
        description: 'Learn about why we built Code Insights from our CEO.',
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/announcement-header.png',
            alt: 'Announcing code insights blog thumbnail',
        },
        href: '/blog/announcing-code-insights',
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

const CodeInsightsPage: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '1367e810-da5f-4abd-97bc-49df5a5b459f',
        region: 'na1',
        targetId: 'topForm',
    })
    useChiliPiper()

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Code Insights',
                description:
                    'Draw insights from your codebase about how different initiatives are tracking over time. Code Insights is now generally available for teams of all sizes.',
            }}
            className="code-insights-page"
            heroAndHeaderClassName="code-insights-page__hero-and-header navbar-light"
            hero={
                <>
                    <div className="bg" />
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="text-uppercase mb-2">Code Insights</div>
                                <h1 className="display-3 font-weight-bold mb-4">
                                    Track what really matters to you and your team.
                                </h1>
                                <h4 className="mb-5">
                                    Transform your code into a queryable database to create customizable, visual
                                    dashboards in seconds.
                                </h4>
                                <div className="d-flex flex-column pt-1 max-w-400">
                                    <div id="topForm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        >
            <ContentSection className="py-lg-8 py-7">
                <div className="row justify-content-between">
                    <div className="col-lg-7 ml-lg-6 mb-md-4 d-flex align-items-center video-container">
                        <Video filePath="code_insights/code-insights-720" />
                    </div>
                    <div className="col-lg-4 pl-lg-0">
                        <h2 className="mb-3 font-weight-bold">
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
                    </div>
                </div>
            </ContentSection>

            <ContentSection>
                <div className="pb-lg-7 pb-6">
                    <CustomCarousel
                        items={items}
                        autoAdvance={true}
                        showHeadlinesOnMobile={true}
                        title="How engineering teams use Code Insights"
                    />
                </div>
            </ContentSection>

            <div className="bg-gradient-venus-radial py-4">
                <ContentSection className="py-lg-6">
                    <div className="row d-flex text-center justify-content-center px-lg-7 py-6">
                        <div className="w-100">
                            <p className="font-weight-bold display-3">Trusted by engineering teams worldwide</p>
                        </div>
                        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
                            <h4 className="font-weight-normal">
                                &ldquo;As we've grown, so has the need to better track and communicate our progress and
                                goals across the engineering team and broader company. With Code Insights, our data and
                                migration tracking is accurate across our entire codebase, and our engineers and
                                managers can shift out of manual spreadsheets and spend more time working on
                                code.&rdquo;
                            </h4>
                            <div className="pt-3 text-muted text-center">
                                &mdash; Balázs Tóthfalussy, Engineering Manager, Prezi
                            </div>
                        </blockquote>
                        <div className="d-flex justify-content-center">
                            <a href="https://prezi.com" className="btn">
                                <img src="/external-logos/prezi-logo.svg" width="110px" alt="Prezi" />
                            </a>
                        </div>
                    </div>
                </ContentSection>
            </div>

            <div className="bg-light-gray-3">
                <ContentSection className="py-7">
                    <div className="d-flex flex-wrap">
                        <h2 className="display-3 font-weight-bold mb-3 w-100 text-center">
                            Engineering leadership with superpowers
                        </h2>
                        <p className="icon-subheader w-100 text-center">
                            Code Insights provides reliable real-time reporting directly from the codebase, making
                            engineering leaders and their teams more effective.
                        </p>
                        <div className="d-flex flex-column col-lg-6 px-lg-6 justify-content-around">
                            <div className="d-flex py-lg-5 py-3">
                                <div className="mr-4">
                                    <BullsEyeArrowIcon className="icon text-blurple" size={70} />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="display-lg-3 font-weight-bold">Set goals</div>
                                    <p className="icon-paragraph">Measure goals and progress in your codebase</p>
                                </div>
                            </div>
                            <div className="d-flex py-lg-5 py-3">
                                <div className="icon mr-4">
                                    <LighteningBoltOutlineIcon className="icon text-blurple" size={70} />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="display-lg-3 font-weight-bold">Plan proactively</div>
                                    <p className="icon-paragraph">
                                        Stay on top of engineering initiatives and catch issues before they escalate
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column col-lg-6 px-lg-6 justify-content-around">
                            <div className="d-flex py-lg-5 py-3">
                                <div className="mr-4">
                                    <TrendingUpIcon className="icon text-blurple" size={70} />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="display-lg-3 font-weight-bold">Track ownership & trends</div>
                                    <p className="icon-paragraph">Tie trends and metrics to owners on the teams</p>
                                </div>
                            </div>
                            <div className="d-flex py-lg-5 py-3">
                                <div className="mr-4">
                                    <RocketLaunchOutlineIcon className="icon text-blurple" size={70} />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="display-lg-3 font-weight-bold">Celebrate progress</div>
                                    <p className="icon-paragraph">Visualize the momentum and motivate your teammates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            </div>

            {/* Demo */}
            <ContentSection className="py-7">
                <h1 className="mb-3 text-center font-weight-bold">See Code Insights in action</h1>
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-8 container video-embed embed-responsive embed-responsive-16by9 ">
                        <YouTube
                            className="embed-responsive-item"
                            id="fMCUJQHfbUA"
                            title="Sourcegraph Code Insights demo"
                        />
                    </div>
                </div>
            </ContentSection>

            {/* Use Cases */}
            <div className="bg-gradient-venus-radial py-4 d-none d-lg-block d-md-block">
                <ContentSection className="py-4 py-md-7 h-lg-850 h-md-850">
                    <h1 className="mb-2 text-center font-weight-bold">Popular Code Insights templates</h1>
                    <Tabs defaultActiveKey="migrations" id="use-cases" className="justify-content-center">
                        <Tab eventKey="migrations" title="Migrations" tabClassName="tab-header">
                            <div className="row mt-5">
                                <div className="w-100 d-flex flex-wrap">
                                    {templates.migrations.map(template => (
                                        <TemplateCodeBlock key={template.header} template={template} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="version-tracking" title="Version Tracking" tabClassName="tab-header">
                            <div className="row mt-5 justify-content-center">
                                <div className="w-100 d-flex flex-wrap">
                                    {templates.versionTracking.map(template => (
                                        <TemplateCodeBlock key={template.header} template={template} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="security" title="Security" tabClassName="tab-header">
                            <div className="row mt-5 justify-content-center">
                                <div className="w-100 d-flex flex-wrap">
                                    {templates.security.map(template => (
                                        <TemplateCodeBlock key={template.header} template={template} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="code-health" title="Code Health" tabClassName="tab-header">
                            <div className="row mt-5 justify-content-center">
                                <div className="w-100 d-flex flex-wrap">
                                    {templates.codeHealth.map(template => (
                                        <TemplateCodeBlock key={template.header} template={template} />
                                    ))}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="w-100 d-flex justify-content-center">
                        <a
                            className="btn btn-link px-0 py-4 col-7 docs-cta font-weight-bold"
                            href="https://docs.sourcegraph.com/code_insights"
                            title="Code Insights on docs."
                        >
                            See Docs for more use cases
                        </a>
                    </div>
                </ContentSection>
            </div>

            {/* Use Cases Carousel */}
            <div className="bg-gradient-venus-radial py-4 d-block d-lg-none d-md-none">
                <ContentSection className="py-4 py-md-7">
                    <h1 className="mb-2 text-center">Popular Code Insights templates</h1>
                    <Tabs defaultActiveKey="migrations" id="use-cases" className="justify-content-center">
                        <Tab eventKey="migrations" title="Migrations" tabClassName="tab-header">
                            <div className="row mt-5 justify-content-center">
                                <div className="w-100">
                                    <TabCarousel items={templates.migrations} autoAdvance={true} />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="version-tracking" title="Version Tracking" tabClassName="tab-header">
                            <div className="row mt-5 justify-content-center">
                                <div className="w-100">
                                    <TabCarousel items={templates.versionTracking} autoAdvance={true} />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="security" title="Security" tabClassName="tab-header">
                            <div className="row mt-5 justify-content-center">
                                <div className="w-100">
                                    <TabCarousel items={templates.security} autoAdvance={true} />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="code-health" title="Code Health" tabClassName="tab-header">
                            <div className="row mt-5 justify-content-center">
                                <div className="w-100">
                                    <TabCarousel items={templates.codeHealth} autoAdvance={true} />
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="w-100 d-flex justify-content-center">
                        <a
                            className="btn btn-link px-0 py-4 col-7 docs-cta font-weight-bold"
                            href="https://docs.sourcegraph.com/code_insights"
                            title="Code Insights on docs."
                        >
                            See Docs for more use cases
                        </a>
                    </div>
                </ContentSection>
            </div>

            <div className="bg-light-gray-3">
                <ContentSection>
                    <div className="row d-flex flex-column justify-content-start py-lg-8 py-7">
                        <div className="col-lg-8 mb-5 d-flex flex-column justify-content-start">
                            <h1 className="font-weight-bold">Get started with Code Insights</h1>
                            <p>
                                Create a code insight in 60 seconds and get historical data for previously untracked
                                metrics — data backfills automatically.
                            </p>
                        </div>
                        <div className="col-lg-7 d-flex flex-column pt-1">
                            <Link
                                href="/contact/request-code-insights-demo"
                                passHref={true}
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.trySourcegraph}
                                data-button-type="cta"
                            >
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="btn btn-primary col-4 mr-3" title="Request a Demo of Code Insights.">
                                    Request a demo
                                </a>
                            </Link>
                        </div>
                    </div>
                </ContentSection>
            </div>

            <ContentSection className="py-lg-7 py-5">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <h1 className="mb-5 font-weight-bold">Learn more</h1>
                    </div>
                    {blogResourceItems.map(item => (
                        <BlogResourceItem key={item.title} blog={item} />
                    ))}
                </div>
            </ContentSection>
        </Layout>
    )
}

export default CodeInsightsPage

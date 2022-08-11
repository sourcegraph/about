import { FunctionComponent, ReactNode } from 'react'

import ClipBoardPulseOutlineIcon from 'mdi-react/ClipboardPulseOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import WrenchOutlineIcon from 'mdi-react/WrenchOutlineIcon'
import Link from 'next/link'

import {
    BackButton,
    Background,
    Blockquote,
    BlogResources,
    ContentSection,
    CustomCarousel,
    CustomerLogos,
    Layout,
    QuoteCarousel,
    ThreeUpText,
    TwoColumnSection,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h3 className="tw-mb-8 lg:tw-mb-0">{header}</h3>
        {text}
    </>
)

const items = [
    {
        title: 'Find old versions easily',
        text: (
            <CarouselItem
                header="Find old versions easily"
                text={
                    <p className="py-3">
                        Use{' '}
                        <Link href="/code-search" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Code Search"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Code Search
                            </a>
                        </Link>{' '}
                        to spot deprecated methods and APIs left in your code and share examples of how the latest
                        versions are used.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Automate version updates and communications',
        text: (
            <CarouselItem
                header="Automate version updates and communications"
                text={
                    <p className="py-3">
                        With{' '}
                        <Link href="/batch-changes">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Batch Changes"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Batch Changes
                            </a>
                        </Link>
                        , you can quickly update versions and send pull requests to all your repositories as a way of
                        alerting repository owners that they need to upgrade.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Get everyone on the same page with living docs',
        text: (
            <CarouselItem
                header="Get everyone on the same page with living docs"
                text={
                    <p className="py-3">
                        Create living, actionable documentation with{' '}
                        <a
                            href="https://docs.sourcegraph.com/notebooks"
                            title="Notebooks"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Notebooks
                        </a>{' '}
                        that show your best practices with real-life examples you can share with your team.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Monitor for deprecated code',
        text: (
            <CarouselItem
                header="Monitor for deprecated code"
                text={
                    <p className="py-3">
                        Make sure deprecated endpoints don't sneak back into your code. Get alerts for new occurrences
                        of deprecated methods or restricted patterns with{' '}
                        <a
                            href="https://docs.sourcegraph.com/code_monitoring"
                            title="Code monitoring"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            code monitoring
                        </a>
                        .
                    </p>
                }
            />
        ),
    },
    {
        title: 'Develop a data-driven relationship with your code',
        text: (
            <CarouselItem
                header="Develop a data-driven relationship with your code"
                text={
                    <p className="py-3">
                        Create dashboards to track mitigations, package use, version adoption, code smells, codebase
                        size, and more to understand code health with{' '}
                        <Link href="/code-insights" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Code Insights"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Code Insights
                            </a>
                        </Link>
                        .
                    </p>
                }
            />
        ),
    },
]

const threeUpTextItems = [
    {
        icon: <MagnifyIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: 'Find unhealthy code',
        description:
            'Build a healthier codebase by finding references to deprecated services, libraries, URL patterns, and more across all your repositories.',
    },
    {
        icon: <WrenchOutlineIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: 'Remediate code health issues',
        description:
            'Tackle refactoring efforts and tech debt from legacy systems and acquisitions with automated pull requests across your entire codebase.',
    },
    {
        icon: <ClipBoardPulseOutlineIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: 'Monitor code health initiatives',
        description:
            'Stay on top of code health changes. Monitor and measure code health initiatives and get actionable insights into the impact of large-scale changes.',
    },
]

const quoteCarouselItems = [
    {
        header: 'Indeed improves code health at scale',
        quote: "On average, I'd say that for every automated merge request that we're able to merge we save an hour…if we are doing several thousand automated merges in a year, we're saving several employee's worth of time.",
        by: 'Jared Hodge, Senior Manager, Developer Experience at Indeed',
        logoImage: '/external-logos/indeed-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/indeed-accelerates-development-velocity',
        logoAlt: 'Indeed',
    },
    {
        header: 'Quantcast accelerates large-scale refactoring',
        quote: 'Quantcast uses Sourcegraph to create burndown lists of issues and provide code owners links to Sourcegraph search results. Since Sourcegraph searches every repository, a single engineer can analyze thousands of repositories in only a few days rather than months.',
        logoImage: '/external-logos/quantcast-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/quantcast-large-scale-refactoring',
        logoAlt: 'Quantcast',
    },
    {
        header: 'Workiva efficiently pays down tech debt',
        quote: "As an organization that values paying down tech debt, Workiva's Client Platform team started using Sourcegraph to help them efficiently propagate updates to dependencies across all of their repositories without any ongoing maintenance.",
        logoImage: '/external-logos/workiva-vector-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/workiva-automates-large-scale-code-changes',
        logoAlt: 'Workiva',
    },
]

const blogResourceItems = [
    {
        title: 'How not to break a search engine or: What I learned about unglamorous engineering',
        description:
            "When Sourcegraph switched to a new search query parser, you'd never know anything had changed.  This is an account of the rigorous testing that happened behind the scenes to ensure a seamless transition.",
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/how-not-to-break-a-search-engine-new.png',
            alt: 'Unglamorous engineering blog thumbnail',
        },
        href: '/blog/how-not-to-break-a-search-engine-unglamorous-engineering',
    },
    {
        title: 'How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights',
        description:
            "Learn how Sourcegraph's Frontend Platform team overhauled our web application's design system and UI using codemods to automate a challenging global migration to CSS modules and Code Insights to track and communicate progress.",
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migrating-to-css-modules.png',
            alt: 'CSS modules migration blog thumbnail',
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
]

const UseCasePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Improve Code Health - Sourcegraph',
            description:
                'Tackle refactoring efforts and tech debt from legacy systems with automated pull requests across your entire codebase to boost code health.',
        }}
        className="use-cases-page navbar-light"
        hero={
            <Background variant="lightNebulousVenus2">
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-md-7 my-7">
                            <BackButton href="/use-cases" text="USE CASES" />
                            <h1 className="mb-4 max-w-250 max-w-sm-275 max-w-lg-400">Healthy code, happy teams</h1>
                            <div className="mb-5">
                                Improve code health with large-scale changes and track key initiatives across your
                                entire codebase.
                            </div>
                            <div className="tw-text-center tw-flex-col md:tw-flex-row md:tw-flex">
                                <div className="mb-3 mb-md-0">
                                    <Link href="/demo" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="btn btn-primary w-100 max-w-350"
                                            title="Request a Demo."
                                            data-button-style={buttonStyle.primary}
                                            data-button-location={buttonLocation.hero}
                                            data-button-type="cta"
                                        >
                                            Request a demo
                                        </a>
                                    </Link>
                                </div>
                                <div className="ml-md-3">
                                    <Link href="/get-started/self-hosted" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="btn btn-outline-primary w-100 max-w-350"
                                            title="Try Sourcegraph."
                                            data-button-style={buttonStyle.outline}
                                            data-button-location={buttonLocation.hero}
                                            data-button-type="cta"
                                        >
                                            Try Sourcegraph now
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        }
    >
        <ContentSection>
            <ThreeUpText title="Track and improve code health across your entire codebase" items={threeUpTextItems} />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <TwoColumnSection
                leftColumn={
                    <>
                        <h2 className="mb-md-4 max-w-500">Improving code health can be daunting</h2>
                        <p className="max-w-500">
                            Engineering teams need to track and measure code quality consistently to monitor code health
                            across their entire codebase, but current tools don't make this easy. What does that mean
                            for you?
                        </p>
                        <ul>
                            <li className="mt-1">
                                Old versions, libraries, or functions are littered throughout your code, resulting in
                                incidents and backward compatibility issues.
                            </li>
                            <li className="mt-1">
                                Unclear code ownership leads to unclear responsibility, making it hard for developers to
                                find the right domain expert when they need help.
                            </li>
                            <li className="mt-1">
                                Engineering managers struggle to justify prioritizing and addressing tech debt because
                                success is difficult to track and measure.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Blockquote
                        quote="With the help of Sourcegraph, we were able to quickly look at all clients of an API and remove unused attributes that lived in different repositories, ultimately simplifying our APIs and speeding up developer iteration time."
                        author="Justin Phillips, Software Engineer at Lyft"
                        headline="Lyft boosts code health and accelerates developer velocity"
                        inline={false}
                        logo={{
                            src: '/external-logos/lyft-logo.svg',
                            alt: 'Lyft logo',
                        }}
                        link={{
                            text: 'Read the case study',
                            href: '/case-studies/lyft-monolith-to-microservices',
                        }}
                    />
                }
            />
        </ContentSection>

        <ContentSection>
            <CustomCarousel items={items} title="How Sourcegraph helps" />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-saturn">
            <QuoteCarousel items={quoteCarouselItems} />
        </ContentSection>

        <ContentSection parentClassName="tw-bg-gray-100">
            <div className="mx-4 row tw-flex tw-flex-col mx-lg-0 tw-text-center">
                <div className="tw-mx-auto mb-5 tw-flex tw-flex-col tw-text-center max-w-600">
                    <h2 className="">Get started with Sourcegraph</h2>
                    <p>Give your team the tools they need to build a healthier codebase.</p>
                </div>
                <div className="px-0 tw-text-center col-12">
                    <Link href="/demo" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary max-w-350 w-100"
                            title="Request a Demo."
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                    <Link href="/use-cases" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="mt-4 tw-flex tw-justify-center"
                            title="Explore other use cases"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            <p>Explore other use cases</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="tw-mt-4xl">
                <CustomerLogos />
            </div>
        </ContentSection>

        <BlogResources posts={blogResourceItems} />

        <ContentSection>
            <div className="flex-wrap tw-text-center tw-flex tw-justify-center mb-md-4">
                <h2 className="mx-4 mb-4 w-100 mx-lg-0">Ready to build a healthier codebase?</h2>
                <div className="tw-flex tw-justify-center mb-lg-6">
                    <Link href="/get-started/self-hosted" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary"
                            title="Ready to get started?"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.trySourcegraph}
                            data-button-type="cta"
                        >
                            Ready to get started?
                        </a>
                    </Link>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default UseCasePage

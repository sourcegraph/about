import { FunctionComponent, ReactNode } from 'react'

import ClipBoardPulseOutlineIcon from 'mdi-react/ClipboardPulseOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import WrenchOutlineIcon from 'mdi-react/WrenchOutlineIcon'
import Link from 'next/link'

import {
    Blockquote,
    ContentSection,
    CallToActionContentSection,
    CustomCarousel,
    CustomerLogos,
    Hero,
    Layout,
    QuoteCarousel,
    ResourceList,
    ThreeUpText,
    TwoColumnSection,
} from '../../components'
import { StandardCallToAction } from '../../components/cta/StandardCallToAction'
import { UseCasePageCallToAction } from '../../components/cta/UseCasePageCallToAction'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h3 className="mb-8 lg:mb-0">{header}</h3>
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
                    <p className="py-4">
                        Use{' '}
                        <Link
                            href="/code-search"
                            title="Code Search"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Code Search
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
                    <p className="py-4">
                        With{' '}
                        <Link
                            href="/batch-changes"
                            title="Batch Changes"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Batch Changes
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
                    <p className="py-4">
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
                    <p className="py-4">
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
                    <p className="py-4">
                        Create dashboards to track mitigations, package use, version adoption, code smells, codebase
                        size, and more to understand code health with{' '}
                        <Link
                            href="/code-insights"
                            title="Code Insights"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Code Insights
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
        icon: <MagnifyIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Find unhealthy code',
        description:
            'Build a healthier codebase by finding references to deprecated services, libraries, URL patterns, and more across all your repositories.',
    },
    {
        icon: <WrenchOutlineIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Remediate code health issues',
        description:
            'Tackle refactoring efforts and tech debt from legacy systems and acquisitions with automated pull requests across your entire codebase.',
    },
    {
        icon: <ClipBoardPulseOutlineIcon className="mb-6 inline text-blurple-400" size={40} />,
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
        className="use-cases-page"
        hero={
            <Hero
                variant="lightNebulousVenus2"
                backButton={{
                    text: 'Use Cases',
                    link: '/use-cases',
                }}
                title={'Healthy code,\n happy teams'}
                subtitle="Improve code health with large-scale changes and track key initiatives across your
                entire codebase."
                cta={<StandardCallToAction buttonLocation={buttonLocation.hero} />}
            />
        }
    >
        <ContentSection>
            <ThreeUpText title="Track and improve code health across your entire codebase" items={threeUpTextItems} />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <TwoColumnSection
                leftColumn={
                    <>
                        <h2 className="max-w-[500px] md:mb-6">Improving code health can be daunting</h2>
                        <p className="max-w-[500px]">
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

        <ContentSection parentClassName="bg-gray-100">
            <UseCasePageCallToAction
                text="Give your team the tools they need to build a healthier codebase."
                buttonLocation={buttonLocation.body}
            />
            <div className="mt-4xl">
                <CustomerLogos />
            </div>
        </ContentSection>

        <ResourceList items={blogResourceItems} />

        <CallToActionContentSection />
    </Layout>
)

export default UseCasePage

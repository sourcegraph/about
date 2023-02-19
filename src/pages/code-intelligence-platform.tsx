import { FunctionComponent } from 'react'

import { MdiReactIconComponentType } from 'mdi-react'
import ChartBoxIcon from 'mdi-react/ChartBoxIcon'
import ClipboardCheckIcon from 'mdi-react/ClipboardCheckIcon'
import EyeIcon from 'mdi-react/EyeIcon'
import SourceBranchIcon from 'mdi-react/SourceBranchIcon'
import ViewDashboardIcon from 'mdi-react/ViewDashboardIcon'
import Link from 'next/link'

import {
    Layout,
    ResourceList,
    ContentSection,
    CustomCarousel,
    TwoColumnSection,
    QuoteCarousel,
    Video,
} from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const CarouselItem: FunctionComponent<{
    icon: MdiReactIconComponentType
    header: string
    subtitle: string
    text: string
}> = props => (
    <>
        <div className="mb-4 max-w-[40px] rounded-full bg-violet-100 text-center">
            <div className="flex justify-center p-2 text-violet-400">
                <props.icon />
            </div>
        </div>
        <h3>{props.header}</h3>
        <h4 className="my-4 block lg:mb-0 lg:hidden">{props.subtitle}</h4>
        <p className="py-4">{props.text}</p>
    </>
)

const items = [
    {
        title: 'Full view of the codebase',
        subtitle: 'Exhaustive across all repositories and code hosts',
        text: (
            <CarouselItem
                icon={EyeIcon}
                header="Full view of the codebase"
                subtitle="Exhaustive across all repositories and code hosts"
                text="High-fidelity search is applied across all repositories and code hosts to provide a holistic view of sprawling code. Developers are in control of how they prefer to navigate the codebase with multiple pattern types, including symbol search, structural search, and precise code navigation."
            />
        ),
    },
    {
        title: 'Accurate Results',
        subtitle: 'Trustworthy answers that help your team move fast',
        text: (
            <CarouselItem
                icon={ClipboardCheckIcon}
                header="Accurate Results"
                subtitle="Trustworthy answers that help your team move fast"
                text="Exhaustive and relevant search results are returned in a fraction of a second with a variety of information, including repositories, files, diffs, and commits. When your development teams are stuck, they’re empowered to find answers on their own through robust search and living documentation with interactive code snippets that are always up-to-date."
            />
        ),
    },
    {
        title: 'Rich codebase context',
        subtitle: 'Access powerful insights and rich context to make the best decisions',
        text: (
            <CarouselItem
                icon={ViewDashboardIcon}
                header="Rich codebase context"
                subtitle="Access powerful insights and rich context to make the best decisions"
                text="Leverage insights across your entire codebase through rich context about functions, variables, and cross-references. Accurate documentation with live code queries provide additional information when developers need it the most."
            />
        ),
    },
    {
        title: 'Automated large-scale code changes',
        subtitle: 'Seamlessly make and track large-scale code changes',
        text: (
            <CarouselItem
                icon={SourceBranchIcon}
                header="Automated large-scale code changes"
                subtitle="Seamlessly make and track large-scale code changes"
                text="Large-scale code refactors can be applied across the codebase with just a few clicks. Save your team time resolving vulnerabilities, keeping code updated, or paying down technical debt. Track code changes all the way to merge from a powerful dashboard, instead of doing manual project management work."
            />
        ),
    },
    {
        title: 'Global view for leaders',
        subtitle: 'Access real-time reports that can be customized to track codebase progress',
        text: (
            <CarouselItem
                icon={ChartBoxIcon}
                header="Global view for leaders"
                subtitle="Access real-time reports that can be customized to track codebase progress"
                text="Set up customizable, visual dashboards in sixty seconds that turn your codebase into a database. Leaders can track the status of migrations and deprecations while preventing future vulnerabilities through alerts when specific code is added by the team."
            />
        ),
    },
]

const quoteCarouselItems = [
    {
        quote: "For developers, Sourcegraph is a must-have tool 一 we need it at arm's length at all times.",
        by: 'Derrick Faunce, Associate Director of Developer Services, Factset',
        logoImage: '/external-logos/factset-logo.svg',
        logoAlt: 'Factset Logo',
    },
    {
        quote: 'Sourcegraph is our answer for sharing information and facilitating easy collaboration across teams, despite the boundaries of distance and time.',
        by: 'Satish Surapaneni, Senior Manager, Engineering, F5',
        logoImage: '/external-logos/f5-logo.svg',
        logoAlt: 'F5 Logo',
    },
    {
        quote: "Sourcegraph gives us the ability to search for and refactor references to deprecated services, libraries, URL patterns, and move across our 2000+ repositories, and the confidence that we're not leaving anyone behind.",
        by: 'Aneesh Agrawal, Software Engineer, Lyft',
        logoImage: '/external-logos/lyft-logo.svg',
        logoAlt: 'Lyft Logo',
    },
]

const blogResourceItems = [
    {
        title: 'Why we’re friends, not competitors, with code hosts',
        description:
            'Sourcegraph relies on code hosts to exist, and code hosts benefit from the existence of a good, ventor-nutural code intelligence platform.',
        type: 'Blog post',
        img: {
            src: '/blog/thumbnails/dark-multi-grid.jpg',
            alt: 'Dark grid',
        },
        href: "/blog/why-we're-friends-with-code-hosts",
    },
    {
        title: '3 things to know before building a custom, in-house code search tool',
        description:
            'Questions we suggest that developers ask before building a code search tool inside of their organization.',
        type: 'Blog post',
        img: {
            src: 'blog/buy-vs-build-blog.png',
            alt: 'Two people putting magnifying glasses into a shopping cart',
        },
        href: '/blog/things-to-know-before-building-a-code-search-tool',
    },
]

const CodeIntelligencePlatform: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Key traits of a code intelligence platform',
            description:
                "Sourcegraph's code intelligence platform is more than search. It helps developers save time and move faster regardless of how complex your codebase is.",
        }}
        hero={
            <div className="sg-bg-gradient-saturn">
                <div className="container mx-auto py-16 md:text-center lg:py-5xl">
                    <h1>Key traits of a code intelligence platform</h1>
                    <h3 className="max-w-[750px] py-6 md:mx-auto">
                        Sourcegraph helps developers save time and move faster, regardless of how complex your codebase
                        is: any code host, any language, and any repository.
                    </h3>

                    <a
                        className="btn btn-primary mt-8 block sm:inline-block"
                        href="https://signup.sourcegraph.com"
                        title="Start for free"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        Start for free
                    </a>
                </div>
            </div>
        }
    >
        <ContentSection background="white">
            <CustomCarousel
                items={items}
                animateTransition={true}
                title="Enable and engage your development teams with Sourcegraph"
            />
        </ContentSection>

        <ContentSection background="white">
            <h2 className="px-0 pb-md">Sourcegraph helps enterprise development teams...</h2>

            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-6">Get unblocked</h2>
                        <ul>
                            <li className="mb-4">
                                Sourcegraph helps developers uncover answers, understand code, and take actions in the
                                codebase without interrupting teammates.
                            </li>
                            <li className="mb-4">
                                Developers at <i>a well-known American social news site</i> save 30 – 60 minutes a day
                                with faster access to answers.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-search',
                            webm: '/animations/code-search',
                        }}
                        title="Sourcegraph code search"
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection background="white">
            <TwoColumnSection
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/batch-changes',
                            webm: '/animations/batch-changes',
                        }}
                        title="Sourcegraph batch changes"
                        loop={true}
                    />
                }
                rightColumn={
                    <>
                        <h2 className="mb-6">Save time resolving issues</h2>
                        <ul>
                            <li className="mb-4">
                                Sourcegraph helps development teams quickly identify, resolve, and proactively prevent
                                issues from happening again.
                            </li>
                            <li className="mb-4">
                                <Link
                                    href="/case-studies/indeed-accelerates-development-velocity"
                                    title="Indeed"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Indeed
                                </Link>{' '}
                                saw a 90% reduction in manual work required for large-scale code changes.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <ContentSection background="white">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-6">Gain insights and track progress</h2>
                        <ul>
                            <li className="mb-4">
                                Developers use insights to track migration and deprecation projects to completion and
                                visualize version spread and security vulnerabilities, while leaders rely on analytics
                                to make data-driven decisions and create clear success metrics for their teams.
                            </li>
                            <li className="mb-4">
                                A <i>top hybrid multi-cloud provider</i> resolves security vulnerabilities 4x faster and
                                measures progress each step of the way.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-insights',
                            webm: '/animations/code-insights',
                        }}
                        title="Sourcegraph code insights"
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-saturn">
            <QuoteCarousel items={quoteCarouselItems} />
        </ContentSection>

        <ContentSection>
            <div className="mx-auto max-w-[800px] md:text-center">
                <h2>Sourcegraph’s code intelligence platform is more than simply search.</h2>

                <p className="my-8 max-w-[450px] md:mx-auto">
                    The platform drives velocity by helping development teams quickly get unblocked, save time resolving
                    issues, and gain insights to make better decisions.
                </p>

                <a
                    className="btn btn-primary mt-8 block sm:inline-block"
                    href="https://signup.sourcegraph.com"
                    title="Start for free"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Start for free
                </a>
            </div>
        </ContentSection>

        <ResourceList items={blogResourceItems} />
    </Layout>
)

export default CodeIntelligencePlatform

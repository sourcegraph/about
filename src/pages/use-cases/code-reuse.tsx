import { FunctionComponent, ReactNode } from 'react'

import AccountGroupOutlineIcon from 'mdi-react/AccountGroupOutlineIcon'
import FolderUploadOutlineIcon from 'mdi-react/FolderUploadOutlineIcon'
import XmlIcon from 'mdi-react/XmlIcon'
import Link from 'next/link'

import {
    Blockquote,
    ContentSection,
    CallToActionContentSection,
    CustomCarousel,
    CustomerLogos,
    Hero,
    Layout,
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
        title: 'Find code to reuse',
        text: (
            <CarouselItem
                header="Find code to reuse"
                text={
                    <p className="py-4">
                        Find out if a teammate has already solved your problem. With{' '}
                        <Link
                            href="/code-search"
                            title="Code Search"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Code Search
                        </Link>
                        , you can quickly search across all your repositories to find the code you need.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Improve code stability and trustworthiness',
        text: (
            <CarouselItem
                header="Improve code stability and trustworthiness"
                text={
                    <p className="py-4">
                        Code reuse avoids introducing preventable bugs. By using a reviewed and tested piece of code
                        that's known to work, you can feel confident that your code is secure and stable.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Automate PRs to make code consistent',
        text: (
            <CarouselItem
                header="Automate PRs to make code consistent"
                text={
                    <p className="py-4">
                        Spend less time on manual updates. Whether refactoring duplicate code or updating a shared
                        library, automate changes seamlessly across your entire codebase with{' '}
                        <Link
                            href="/batch-changes"
                            title="Batch Changes"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Batch Changes
                        </Link>
                        .
                    </p>
                }
            />
        ),
    },
    {
        title: 'Alert for deprecated code use',
        text: (
            <CarouselItem
                header="Alert for deprecated code use"
                text={
                    <p className="py-4">
                        Catch deprecated code as it’s committed with{' '}
                        <a
                            href="https://docs.sourcegraph.com/code_monitoring"
                            title="Code monitoring"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            code monitoring
                        </a>
                        . Monitor and get alerts when someone uses out-of-date libraries or deprecated functions, so you
                        know who to work with on updates and adoption.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Track your code reuse efforts ',
        text: (
            <CarouselItem
                header="Track your code reuse efforts "
                text={
                    <p className="py-4">
                        Get visibility into code reuse progress. Track the prevalence of shared code in your codebase
                        over time with{' '}
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
        icon: <XmlIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Quickly find trustworthy code to reuse',
        description:
            'Search your entire codebase to discover existing code to reuse. Gather crucial context, like who wrote the code, when, and where it’s used.',
    },
    {
        icon: <FolderUploadOutlineIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Safely maintain and improve shared libraries',
        description:
            'Automate PRs to push global updates. Get alerts when out-of-date libraries or deprecated functions are used, and eliminate duplicative code.',
    },
    {
        icon: <AccountGroupOutlineIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Understand your team’s code reuse efforts',
        description:
            'Code maintainers or stakeholders can easily track and understand innersourcing and code reuse trends within the team.',
    },
]

const blogResourceItems = [
    {
        title: 'FactSet avoids duplicative work across engineering teams',
        description:
            "FactSet undertook a major migration from a monolithic code repository in Perforce to microservices in GitHub. Mid-migration, they adopted Sourcegraph to enable efficient code search. Here's what happened.",
        type: 'Case study',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-docs.png',
            alt: 'Factset case study thumbnail',
        },
        href: '/case-studies/factset-migrates-from-perforce-to-github',
    },
    {
        title: 'How one engineering manager uses the Sourcegraph extension for VS Code',
        description:
            'Here’s how one engineering manager uses the Sourcegraph VS Code extension to browse millions of open source repositories, without leaving his IDE, to find reusable code and more.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/vs-code-extension/sourcegraph-vs-code-extension.png',
            alt: 'Ways to use Sourcegraph Extension for VSCode blog thumbnail',
        },
        href: '/blog/ways-to-use-sourcegraph-extension-for-vs-code',
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

const CodeReusePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Code Reuse - Sourcegraph',
            description:
                'Find existing code libraries for reuse and avoid spending time on problems a teammate already solved for a more secure and coherent codebase.',
        }}
        className="use-cases-page"
        hero={
            <Hero
                variant="lightNebulousVenus2"
                backButton={{
                    text: 'Use Cases',
                    link: '/use-cases',
                }}
                title="Find and use code that already exists"
                subtitle="Identify existing code libraries for reuse and use innersourcing to avoid spending time
                on problems a teammate already solved."
                cta={<StandardCallToAction buttonLocation={buttonLocation.hero} />}
            />
        }
    >
        <ContentSection>
            <ThreeUpText title="Identify, resolve, and monitor with confidence" items={threeUpTextItems} />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <TwoColumnSection
                leftColumn={
                    <>
                        <h2 className="mb-6 max-w-[600px]">
                            Finding reliable, reusable code is tedious and inefficient
                        </h2>
                        <p className="mt-8">
                            Current tools don’t fully enable teams to innersource and use existing code to develop a
                            more secure and coherent codebase. What does that mean for you and your team?
                        </p>
                        <ul>
                            <li>Finding idiomatic code examples is tough if you don't know where to look.</li>
                            <li>
                                Without easy access to existing patterns, developers default to executing from scratch,
                                increasing complexity and confusion in the codebase.
                            </li>
                            <li>
                                Engineering leaders lack the visibility needed to ensure teams adopt recommended
                                packages and retire deprecated ones.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Blockquote
                        headline="FactSet ensures consistency across its entire codebase"
                        quote="If I’m developing code for a library that might draw charts, for example, we don’t want
                        30 different ways to draw a chart at FactSet. With Sourcegraph, I can search the code to
                        find other chart examples, and simply copy the code. This saves us time and ensures
                        consistency."
                        author="Joseph Majesky, Software Engineer at FactSet"
                        inline={false}
                        logo={{
                            src: '/external-logos/factset-logo.svg',
                            alt: 'Factset',
                        }}
                        link={{
                            text: 'Read the case study',
                            href: '/case-studies/factset-migrates-from-perforce-to-github',
                        }}
                    />
                }
            />
        </ContentSection>

        <ContentSection>
            <CustomCarousel items={items} title="How Sourcegraph helps" />
        </ContentSection>

        <ContentSection parentClassName="bg-gray-100">
            <UseCasePageCallToAction
                text="Make it easier to discover trustworthy code for reuse so your teams can spend more time solving new problems and less time rewriting code."
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

export default CodeReusePage

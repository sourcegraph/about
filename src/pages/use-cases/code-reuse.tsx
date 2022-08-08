import { FunctionComponent, ReactNode } from 'react'

import AccountGroupOutlineIcon from 'mdi-react/AccountGroupOutlineIcon'
import FolderUploadOutlineIcon from 'mdi-react/FolderUploadOutlineIcon'
import XmlIcon from 'mdi-react/XmlIcon'
import Link from 'next/link'

import {
    BackButton,
    Background,
    Blockquote,
    BlogResourceItem,
    ContentSection,
    CustomCarousel,
    CustomerLogos,
    Layout,
    ThreeUpText,
    TwoColumnSection,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2 className="mb-5   mb-lg-0">{header}</h2>
        {text}
    </>
)

const items = [
    {
        buttonLabel: 'Find code to reuse',
        text: (
            <CarouselItem
                header="Find code to reuse"
                text={
                    <p className="py-3">
                        Find out if a teammate has already solved your problem. With{' '}
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
                        </Link>
                        , you can quickly search across all your repositories to find the code you need.
                    </p>
                }
            />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        buttonLabel: 'Improve code stability and trustworthiness',
        text: (
            <CarouselItem
                header="Improve code stability and trustworthiness"
                text={
                    <p className="py-3">
                        Code reuse avoids introducing preventable bugs. By using a reviewed and tested piece of code
                        that's known to work, you can feel confident that your code is secure and stable.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Automate PRs to make code consistent',
        text: (
            <CarouselItem
                header="Automate PRs to make code consistent"
                text={
                    <p className="py-3">
                        Spend less time on manual updates. Whether refactoring duplicate code or updating a shared
                        library, automate changes seamlessly across your entire codebase with{' '}
                        <Link href="/batch-changes" passHref={true}>
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
                        .
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Alert for deprecated code use',
        text: (
            <CarouselItem
                header="Alert for deprecated code use"
                text={
                    <p className="py-3">
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
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Track your code reuse efforts ',
        text: (
            <CarouselItem
                header="Track your code reuse efforts "
                text={
                    <p className="py-3">
                        Get visibility into code reuse progress. Track the prevalence of shared code in your codebase
                        over time with{' '}
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
        itemClass: 'd-none',
    },
]

const threeUpTextItems = [
    {
        icon: <XmlIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 ">Quickly find trustworthy code to reuse</h4>,
        description:
            'Search your entire codebase to discover existing code to reuse. Gather crucial context, like who wrote the code, when, and where it’s used.',
    },
    {
        icon: <FolderUploadOutlineIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 ">Safely maintain and improve shared libraries</h4>,
        description:
            'Automate PRs to push global updates. Get alerts when out-of-date libraries or deprecated functions are used, and eliminate duplicative code.',
    },
    {
        icon: <AccountGroupOutlineIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 ">Understand your team’s code reuse efforts</h4>,
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
]

const CodeReusePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Code Reuse - Sourcegraph',
            description:
                'Find existing code libraries for reuse and avoid spending time on problems a teammate already solved for a more secure and coherent codebase.',
        }}
        className="use-cases-page navbar-light"
        hero={
            <Background variant="lightNebulousVenus2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 my-7">
                            <BackButton href="/use-cases" text="USE CASES" />
                            <h1 className="mb-4  ">Find and use code that already exists</h1>
                            <div className="mb-5">
                                Identify existing code libraries for reuse and use innersourcing to avoid spending time
                                on problems a teammate already solved.
                            </div>
                            <div className="text-center flex-column flex-md-row d-md-flex">
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
        <ContentSection className="my-7">
            <ThreeUpText title="Identify, resolve, and monitor with confidence" items={threeUpTextItems} />
        </ContentSection>

        <div className="sg-bg-gradient-venus">
            <ContentSection className="py-7">
                <TwoColumnSection
                    leftColumn={
                        <>
                            <h2 className="mb-4   max-w-600">
                                Finding reliable, reusable code is tedious and inefficient
                            </h2>
                            <p className="mt-5">
                                Current tools don’t fully enable teams to innersource and use existing code to develop a
                                more secure and coherent codebase. What does that mean for you and your team?
                            </p>
                            <ul>
                                <li>Finding idiomatic code examples is tough if you don't know where to look.</li>
                                <li>
                                    Without easy access to existing patterns, developers default to executing from
                                    scratch, increasing complexity and confusion in the codebase.
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
        </div>

        <ContentSection className="py-7">
            <CustomCarousel items={items} autoAdvance={true} title="How Sourcegraph helps" />
        </ContentSection>

        <div className="tw-bg-gray-100 py-7">
            <ContentSection>
                <div className="mx-4 row d-flex flex-column mx-lg-0 align-items-lg-center align-items-left">
                    <div className="mx-auto mb-5 d-flex flex-column text-start text-md-center max-w-600">
                        <h2 className=" ">Get started with Sourcegraph</h2>
                        <p>
                            Make it easier to discover trustworthy code for reuse so your teams can spend more time
                            solving new problems and less time rewriting code.
                        </p>
                    </div>
                    <div className="px-0 text-center col-12">
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
                                className="mt-4 d-flex justify-content-center "
                                title="Explore other use cases"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Explore other use cases
                            </a>
                        </Link>
                    </div>
                </div>
            </ContentSection>

            <div className="mt-6">
                <CustomerLogos />
            </div>
        </div>

        <ContentSection className="py-5 py-lg-7">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h2 className="mb-5  ">Related resources</h2>
                </div>
                {blogResourceItems.map(item => (
                    <BlogResourceItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="text-center">
                <h2 className="mb-6  ">Make the most of your existing code.</h2>
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
        </ContentSection>
    </Layout>
)

export default CodeReusePage

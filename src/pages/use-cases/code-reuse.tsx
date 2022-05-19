import { FunctionComponent, ReactNode } from 'react'

import AccountGroupOutlineIcon from 'mdi-react/AccountGroupOutlineIcon'
import FolderUploadOutlineIcon from 'mdi-react/FolderUploadOutlineIcon'
import XmlIcon from 'mdi-react/XmlIcon'
import Link from 'next/link'

import {
    BackButtonBold,
    BlockquoteWithBorder,
    BlogResourceItem,
    ContentSection,
    CustomCarousel,
    CustomerLogos,
    Layout,
    ThreeUpText,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

import styles from './useCases.module.scss'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2>{header}</h2>
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
                    <p>
                        Find out if a teammate has already solved your problem. With{' '}
                        <Link href="/code-search">Code Search</Link>, you can quickly search across all your
                        repositories to find the code you need.
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
                    <p>
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
                    <p>
                        Spend less time on manual updates. Whether refactoring duplicate code or updating a shared
                        library, automate changes seamlessly across your entire codebase with{' '}
                        <Link href="/batch-changes">Batch Changes</Link>.
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
                    <p>
                        Catch deprecated code as it’s committed with
                        <a href="https://docs.sourcegraph.com/code_monitoring"> code monitoring</a>. Monitor and get
                        alerts when someone uses out-of-date libraries or deprecated functions, so you know who to work
                        with on updates and adoption.
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
                    <p>
                        Get visibility into code reuse progress. Track the prevalence of shared code in your codebase
                        over time with <Link href="/code-insights">Code Insights</Link>..
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
]

const threeUpTextItems = [
    {
        icon: <XmlIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Quickly find trustworthy code to reuse</h4>,
        description:
            'Search your entire codebase to discover existing code to reuse. Gather crucial context, like who wrote the code, when, and where it’s used.',
    },
    {
        icon: <FolderUploadOutlineIcon className="mb-4 text-blurple" size={40} />,
        subtitle: (
            <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Safely maintain and improve shared libraries</h4>
        ),
        description:
            'Automate PRs to push global updates. Get alerts when out-of-date libraries or deprecated functions are used, and eliminate duplicative code.',
    },
    {
        icon: <AccountGroupOutlineIcon className="mb-4 text-blurple" size={40} />,
        subtitle: (
            <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Understand your team’s code reuse efforts</h4>
        ),
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
            title: 'Code Reuse | Sourcegraph',
            description:
                'Find existing code libraries for reuse and avoid spending time on problems a teammate already solved for a more secure and coherent codebase.',
        }}
        className="use-cases-page"
        hero={
            <section className={`${styles.pageHeader} navbar-light`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 my-7">
                            <BackButtonBold href="/use-cases" text="USE CASES" />
                            <h1 className="display-2 font-weight-bold mb-4">Find and use code that already exists</h1>
                            <div className="display-4 font-weight-normal mb-5">
                                Identify existing code libraries for reuse and use innersourcing to avoid spending time
                                on problems a teammate already solved.
                            </div>
                            <div className="d-flex flex-column flex-lg-row pt-1">
                                <Link
                                    href="/demo"
                                    passHref={true}
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        className="btn btn-primary mr-lg-3 mb-lg-0 mb-3 w-md-100"
                                        title="Request a Demo."
                                    >
                                        Request a demo
                                    </a>
                                </Link>
                                <Link
                                    href="/get-started"
                                    passHref={true}
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="btn btn-outline-primary w-md-100" title="Try Sourcegraph.">
                                        Try Sourcegraph now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
    >
        <ContentSection className="my-7">
            <ThreeUpText title="Identify, resolve, and monitor with confidence" items={threeUpTextItems} />
        </ContentSection>

        <div className="bg-gradient-venus-radial">
            <ContentSection className="py-7">
                <div className="row flex-column flex-lg-row justify-content-between px-0">
                    <div className="p-lg-0 col-xl-6 col-lg-7 px-4">
                        <h1 className="mb-4 font-weight-bold max-w-600">
                            Finding reliable, reusable code is tedious and inefficient
                        </h1>
                        <p className="mt-5">
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
                    </div>
                    <div className="col-lg-5 mt-lg-8 mt-5">
                        <BlockquoteWithBorder
                            quote="If I’m developing code for a library that might draw charts, for example, we don’t want
                            30 different ways to draw a chart at FactSet. With Sourcegraph, I can search the code to
                            find other chart examples, and simply copy the code. This saves us time and ensures
                            consistency."
                            author="Joseph Majesky, Software Engineer at FactSet"
                            headline="FactSet ensures consistency across its entire codebase"
                            logo={{
                                src: '/external-logos/factset-logo.svg',
                                alt: 'Factset',
                            }}
                            link={{
                                text: 'Read the case study',
                                href: '/case-studies/factset-migrates-from-perforce-to-github',
                            }}
                        />
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection>
            <div className="row mt-lg-0 mt-5 justify-content-center">
                <div className="d-flex flex-column mt-lg-6 mt-4 w-100 mx-3">
                    <h1 className="font-weight-bold text-md-center text-left mb-lg-6 mb-md-3">How Sourcegraph helps</h1>
                </div>
                <div className="pb-lg-5 pb-md-6 pb-5">
                    <CustomCarousel items={items} autoAdvance={true} smallPanel={true} />
                </div>
            </div>
        </ContentSection>

        <div className="bg-light-gray-3">
            <ContentSection>
                <div className="row d-flex flex-column mx-4 mx-lg-0 py-7 align-items-lg-center align-items-left">
                    <div className="mb-5 d-flex flex-column text-start text-md-center max-w-600 mx-auto">
                        <h1 className="font-weight-bold">Get started with Sourcegraph</h1>
                        <p>
                            Make it easier to discover trustworthy code for reuse so your teams can spend more time
                            solving new problems and less time rewriting code.
                        </p>
                    </div>
                    <div className="text-center col-12 px-0">
                        <Link
                            href="/demo"
                            passHref={true}
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-primary" title="Request a Demo.">
                                Request a demo
                            </a>
                        </Link>
                        <Link href="/use-cases" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="d-flex justify-content-center mt-4 font-weight-bold">
                                Explore other use cases
                            </a>
                        </Link>
                    </div>
                </div>
            </ContentSection>

            <div className="py-6">
                <CustomerLogos />
            </div>
        </div>

        <ContentSection className="py-lg-7 py-5">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {blogResourceItems.map(item => (
                    <BlogResourceItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="text-center">
                <h1 className="font-weight-bold mb-6">Make the most of your existing code.</h1>
                <Link
                    href="/get-started"
                    passHref={true}
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.trySourcegraph}
                    data-button-type="cta"
                >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="btn btn-primary">Ready to get started?</a>
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default CodeReusePage

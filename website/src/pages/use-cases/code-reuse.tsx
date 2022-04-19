import { Link, PageProps } from 'gatsby'
import FolderUploadOutlineIcon from 'mdi-react/FolderUploadOutlineIcon'
import AccountGroupOutlineIcon from 'mdi-react/AccountGroupOutlineIcon'
import XmlIcon from 'mdi-react/XmlIcon'
import React, { FunctionComponent, ReactNode } from 'react'

import Layout from '../../components/Layout'
import { ThreeUpText } from '../../components/ThreeUpText'
import { BackButtonBold } from '../../components/BackButton'
import { BlogListItem } from '../../components/BlogListItem'
import CustomCarousel from '../../components/CustomCarousel'
import { ContentSection } from '../../components/content/ContentSection'
import { CustomerLogosSectionAnimated } from '../../components/product/CustomerLogosSectionAnimated'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import styles from './useCases.module.scss'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2>{header}</h2>
        {text}
    </>
)

const items = [
    {
        buttonLabel: 'Find reusable code',
        text: (
            <CarouselItem
                header="Find reusable code"
                text={
                    <p>
                        Someone else might have already solved this problem. With{' '}
                        <Link to="/code-search">Code Search</Link>, you can find code that does what you need across all
                        your repositories with a single search.
                    </p>
                }
            />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        buttonLabel: "Evaluate the code's stability and trustworthiness",
        text: (
            <CarouselItem
                header="Evaluate the code's stability & trustworthiness"
                text={
                    <p>
                        Code reuse avoids introducing avoidable bugs—a reviewed and tested piece of code that’s known to
                        work can be easily and securely used instead.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Automate PRs to make code consistent and apply updates',
        text: (
            <CarouselItem
                header="Automate PRs to make code consistent & apply updates"
                text={
                    <p>
                        Spend less time on manual updates. Whether you’re refactoring duplicative code or updating a
                        shared library, implement changes seamlessly across your codebase with{' '}
                        <Link to="/batch-changes">Batch Changes</Link>.
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
                        <a href="https://docs.sourcegraph.com/code_monitoring"> code monitoring</a>. It takes time for
                        teams to adopt a culture of code reuse; in the meantime, you know where opportunities for code
                        reuse exist.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Track code reuse adoption',
        text: (
            <CarouselItem
                header="Track code reuse adoption"
                text={
                    <p>
                        Get visibility into code reuse progress. Track the prevalence of shared code in your codebase
                        over time with Code Insights.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
]

const threeUpTextItems = [
    {
        icon: <XmlIcon className="mb-4 text-blurple" size={80} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Quickly find trustworthy code to reuse</h4>,
        description:
            'Search your entire codebase to discover existing code to reuse. Gather crucial context, like who wrote the code and when, and where else it’s being used.',
    },
    {
        icon: <FolderUploadOutlineIcon className="mb-4 text-blurple" size={80} />,
        subtitle: (
            <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Safely maintain and improve shared libraries</h4>
        ),
        description:
            'Automate PRs to push global updates. Get alerts when out-of-date libraries or deprecated functions are used, and eliminate the overhead of duplicative code.',
    },
    {
        icon: <AccountGroupOutlineIcon className="mb-4 text-blurple" size={80} />,
        subtitle: (
            <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Understand your team’s code reuse efforts</h4>
        ),
        description:
            'Code maintainers or stakeholders can easily track and understand innersourcing and code reuse trends and monitor the growth in popularity within the team.',
    },
]

const resourceItems = [
    {
        title: 'FactSet avoids duplicative work across engineering teams',
        description:
            "FactSet undertook a major migration from a monolithic code repository in Perforce to microservices in GitHub. Mid-migration, they adopted Sourcegraph to enable efficient code search. Here's what happened.",
        type: 'Case study',
        image: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
        href: '/case-studies/factset-migrates-from-perforce-to-github',
    },
    {
        title: 'How one engineering manager uses the Sourcegraph extension for VS Code',
        description:
            'Here’s how one engineering manager uses the Sourcegraph VS Code extension to browse millions of open source repositories, without leaving his IDE, to find reusable code and more.',
        type: 'Blog post',
        image: 'https://sourcegraphstatic.com/blog/nine-circles-of-dependency-hell.jpg',
        href: '/blog/ways-to-use-sourcegraph-extension-for-vs-code',
    },
]

const CodeReusePage: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Code Reuse | Sourcegraph',
            description:
                'Find existing code libraries for reuse and avoid spending time on problems a teammate already solved for a more secure and coherent codebase.',
        }}
        className="use-cases-page"
        hero={
            <section className={`${styles.useCaseHeader} navbar-light`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 my-7">
                            <BackButtonBold href="/use-cases" text="USE CASES" />
                            <h1 className="display-2 font-weight-bold mb-4">Find and use code that already exists</h1>
                            <div className="display-4 font-weight-normal mb-5">
                                Identify existing code libraries for reuse and use innersourcing to avoid spending time
                                on problems a teammate already solved.
                            </div>
                            <div className="d-flex flex-column flex-lg-row pt-1">
                                <Link className="btn btn-primary mr-lg-3 mb-lg-0 mb-3 w-md-100" to="/demo" title="Request a Demo.">
                                    Request a demo
                                </Link>
                                <Link
                                    className="btn btn-outline-primary w-md-100"
                                    to="/get-started"
                                    title="Try Sourcegraph."
                                >
                                    Try Sourcegraph now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
    >
        <div className="bg-white">
            <ContentSection className="my-7">
                <ThreeUpText title="Identify, resolve, and monitor with confidence" items={threeUpTextItems} />
            </ContentSection>
        </div>

        <div className="bg-gradient-venus-radial">
            <ContentSection className="my-7">
                <div className="row flex-column flex-lg-row justify-content-between px-0">
                    <div className="p-lg-0 col-lg-6 px-4">
                        <h1 className="mb-4 font-weight-bold max-w-600">
                            Finding reliable, reusable code is tedious and inefficient
                        </h1>
                        <p>
                            Current tools don’t fully enable teams to innersource and use existing code to develop a
                            more secure and coherent codebase.
                            <span className="font-weight-bold"> What does that mean for you and your team?</span>
                        </p>
                        <ul>
                            <li>Finding idiomatic code examples is challenging if you don't know where to look.</li>
                            <li>
                                Without easy access to existing patterns, developers default to implementing from
                                scratch, unintentionally increasing complexity and confusion in the codebase.
                            </li>
                            <li>
                                Engineering leaders lack the visibility needed to ensure teams adopt recommended
                                packages and retire deprecated ones.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 mt-8 text-center">
                        <section className="case-studies__quote--in-content--section font-weight-normal">
                            <h4 className="mb-3">FactSet ensures consistency across its entire codebase</h4>
                            <p>
                                “If I’m developing code for a library that might draw charts, for example, we don’t want
                                30 different ways to draw a chart at FactSet. With Sourcegraph, I can search the code to
                                find other chart examples, and simply copy the code. This saves us time and ensures
                                consistency.”
                            </p>
                            <figcaption className="pt-2 text-muted text-center">
                                &mdash; Joseph Majesky, Software Engineer at FactSet
                            </figcaption>
                        </section>
                        <img className="my-4" src="/external-logos/factset-logo.svg" width="150" alt="Factset logo" />
                        <Link className="d-block font-weight-bold" to="/blog/log4j-log4shell-0-day">
                            Read the case study
                            <ArrowRightIcon className="ml-2" />
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection>
            <div className="row mt-lg-0 mt-5 justify-content-center">
                <div className="d-flex flex-column mt-lg-6 mt-4 w-100 mx-3">
                    <h1 className="font-weight-bold text-lg-center text-left mb-lg-6 mb-md-6">How Sourcegraph helps</h1>
                </div>
                <div className="pb-lg-5 pb-md-6 pb-5">
                    <CustomCarousel items={items} autoAdvance={true} smallPanel={true} />
                </div>
            </div>
        </ContentSection>

        <div className="bg-light-gray-3">
            <ContentSection>
                <div className="row d-flex flex-column mx-4 mx-lg-0 py-7 align-items-lg-center align-items-left">
                    <div className="mb-5 d-flex flex-column text-center max-w-600">
                        <h1 className="font-weight-bold">Get started with Sourcegraph</h1>
                        <p>
                            Make it easier to discover trustworthy code for reuse so your teams can spend more time
                            solving new problems and less time rewriting code.
                        </p>
                    </div>
                    <Link className="btn btn-primary" to="/demo" title="Request a Demo.">
                        Request a demo
                    </Link>
                </div>
            </ContentSection>
            <CustomerLogosSectionAnimated showButton={true} showSection={false} noCta={true} className="py-6" />
        </div>

        <ContentSection className="py-lg-7 py-5">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {resourceItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="text-center">
                <h1 className="font-weight-bold mb-6">Make the most of your existing code.</h1>
                <Link to="/get-started" className="btn btn-primary mb-8">
                    Ready to get started?
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default CodeReusePage

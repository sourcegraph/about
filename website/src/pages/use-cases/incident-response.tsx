import { Link, PageProps } from 'gatsby'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import ClockTimeThreeOutlineIcon from 'mdi-react/ClockTimeThreeOutlineIcon'
import WebIcon from 'mdi-react/WebIcon'
import React, { FunctionComponent, ReactNode } from 'react'

import Layout from '../../components/Layout'
import { BackButtonBold } from '../../components/BackButton'
import { BlogListItem } from '../../components/BlogListItem'
import { QuoteCarousel } from '../../components/QuoteCarousel'
import CustomCarousel from '../../components/CustomCarousel'
import { ContentSection } from '../../components/content/ContentSection'
import { CustomerLogos } from '../../components/CustomerLogos'
import { buttonStyle, buttonLocation } from '../../tracking'

import styles from './useCases.module.scss'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2>{header}</h2>
        {text}
    </>
)

const items = [
    {
        buttonLabel: 'Respond to incidents faster',
        text: (
            <CarouselItem
                header="Respond to incidents faster"
                text={
                    <p>
                        No heroics required: Quickly understand all the context and dependencies around your codebase
                        with <Link to="/code-search">Code Search</Link> so you can find the root cause of an incident
                        with confidence and speed. Document work in progress with{' '}
                        <a href="https://docs.sourcegraph.com/notebooks">Notebooks</a> so teammates can get up to speed
                        quickly.
                    </p>
                }
            />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        buttonLabel: 'Limit the impact of incidents',
        text: (
            <CarouselItem
                header="Limit the impact of incidents"
                text={
                    <p>
                        Automate the deployment of fixes everywhere and at scale. With{' '}
                        <Link to="/batch-changes">Batch Changes</Link>, you can automate code changes and monitor the
                        merge status of each resulting PR. Refactor code to replace insecure functions, update
                        vulnerable packages, or modify container configurations across hundreds of repositories.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Track remediation progress',
        text: (
            <CarouselItem
                header="Track remediation progress"
                text={
                    <p>
                        Visualize fixes in progress and track their deployment. With{' '}
                        <Link to="/code-insights">Code Insights</Link>, get visibility into remediation efforts and
                        share progress with team leaders and all of your customers.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Monitor for unsafe code',
        text: (
            <CarouselItem
                header="Monitor for unsafe code"
                text={
                    <p>
                        Close the loop on your incident response efforts. After finding the root cause, use{' '}
                        <a href="https://docs.sourcegraph.com/code_monitoring">code monitoring</a> to track whether
                        similarly unsafe code is ever merged. Get alerts and stop incidents before they occur.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
]

const quoteCarouselItems = [
    {
        header: `Quantcast is confident it won't miss any affected code`,
        quote: `Sourcegraph's search gave us confidence because we knew we wouldn't overlook anything: Sourcegraph returns all search results, it doesn't drop or elide them.`,
        by: 'Simon Law, Staff Software Engineer, Quantcast',
        logoImage: '/external-logos/quantcast-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/quantcast-large-scale-refactoring',
        logoAlt: 'Quantcast Logo',
    },
    {
        header: 'Nutanix proves the Log4j vulnerability no longer affects its codebase',
        quote: `Isn't it nice when you can just run a report and say, 'Here it is' or 'Here it isn't?' Much better than having to say, 'Well, boss, I think we got it all.'`,
        by: 'Jon Kohler, Technical Director of Solution Engineering, Nutanix',
        logoImage: '/external-logos/nutanix-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
        logoAlt: 'Nutanix Logo',
    },
]

const blogListItems = [
    {
        title: 'Log4j Log4Shell 0-day: find, fix, and track affected code',
        description:
            'In the biggest security vulnerability incident since Heartbleed, Sourcegraph co-founder and CEO Quinn Slack shares how you can find affected code, automate fixes, and track progress.',
        type: 'Blog post',
        image: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
        href: '/blog/log4j-log4shell-0-day',
    },
    {
        title: `The real weakest link in software supply chain security (it's not open source)`,
        description:
            'Using open source code can jump start development, but it can also expose you to security vulnerabilities. In this post, learn how to design an effective vulnerability management process that can make dependencies visible and mitigation less time-consuming.',
        type: 'Blog post',
        image: 'https://storage.googleapis.com/sourcegraph-assets/blog/third-party-open-source-vulnerabilities.png',
        href: '/blog/real-weakest-link-in-software-supply-chain-security',
    },
    {
        title: 'How to remove secrets from your codebase',
        description:
            'In early 2021, Sourcegraph stored infrastructure and service passwords in private repositories. Learn how Sourcegraph Security Engineer André Eleuterio moved every secret to a secure vault and used Code Search to ensure the move was successful and complete.',
        type: 'Blog post',
        image: 'https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png',
        href: '/blog/eliminate-secrets-from-codebase-with-universal-code-search',
    },
]

const UseCasePage: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Incident Response | Sourcegraph',
            description:
                'Identify the root cause of an incident, understand its potential impact, fix the issue everywhere in your codebase. Incident response from Sourcegraph.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="use-cases-page"
        heroAndHeaderClassName={`${styles.useCaseHeader} navbar-light`}
        hero={
            <>
                <div className="bg" />
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-md-7 mb-8 mt-7">
                            <BackButtonBold href="/use-cases" text="USE CASES" />
                            <h1 className="display-2 font-weight-bold mb-4">
                                Resolve incidents quickly and confidently
                            </h1>
                            <div className="display-4 font-weight-normal mb-5">
                                Identify the root cause of an incident, understand its potential impact on other
                                services, and fix the issue everywhere in your codebase so it won't reoccur.
                            </div>
                            <div className="d-flex flex-column flex-lg-row pt-1">
                                <Link
                                    className="btn btn-primary mr-lg-3 mb-lg-0 mb-3 w-md-100"
                                    to="/demo"
                                    title="Request a Demo."
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    Request a demo
                                </Link>
                                <Link
                                    className="btn btn-outline-primary w-md-100"
                                    to="/get-started"
                                    title="Try Sourcegraph."
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    Try Sourcegraph now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    >
        <ContentSection className="my-lg-5">
            <div className="row mx-lg-0 mx-4">
                <div className="d-flex justify-content-center w-100 mt-7 mb-lg-4 mb-0">
                    <h1 className="text-center font-weight-bold w-100 px-lg-8">
                        Identify the root cause of an incident and fix it everywhere, fast
                    </h1>
                </div>
                <div className="d-flex flex-column flex-lg-row mt-lg-4 mt-6 mb-6">
                    <div className="text-center mb-4">
                        <MagnifyIcon className="mb-4 text-blurple" size={40} />
                        <h4 className="font-weight-bold">Assess incidents quickly</h4>
                        <p>
                            Pinpoint the code responsible for the incident and find the root cause in your codebase.
                            Understand the code's functionality to verify the issue.
                        </p>
                    </div>
                    <div className="col-lg-5 px-lg-6 text-center mb-4">
                        <ClockTimeThreeOutlineIcon className="mb-4 text-blurple" size={40} />
                        <h4 className="font-weight-bold">Plan your remediation</h4>
                        <p>
                            Reduce time to resolution by supplying response teams with actionable details, like links to
                            all affected code.
                        </p>
                    </div>
                    <div className="text-center mb-4">
                        <WebIcon className="mb-4 text-blurple" size={40} />
                        <h4 className="font-weight-bold">Execute your plan globally</h4>
                        <p>
                            Fix the root cause and confirm the same issue doesn't reoccur in other areas by locating the
                            code pattern and automating fixes across your entire codebase.
                        </p>
                    </div>
                </div>
            </div>
        </ContentSection>

        <div className="bg-gradient-venus-radial">
            <ContentSection className="my-7">
                <div className="row flex-column flex-lg-row justify-content-between">
                    <div className="p-lg-0 col-lg-6 px-4">
                        <h1 className="mb-4 font-weight-bold max-w-500">
                            Incident response is stressful and overwhelming
                        </h1>
                        <p>
                            Current tools don't enable teams to quickly get to the root cause of an incident and ensure
                            it doesn't reoccur. What does that mean for you?
                        </p>
                        <ul>
                            <li className="mt-1">
                                Outages and degraded performance persist while development teams look for causes,
                                leading to lost revenue and frustrated customers.
                            </li>
                            <li className="mt-1">
                                Incidents can reoccur if developers can't find the root cause, leaving your company with
                                a reputation for unreliability and missed SLAs.
                            </li>
                            <li className="mt-1">
                                Incident response often relies on knowledge silos, which are neither scalable nor
                                sustainable.
                            </li>
                            <li className="mt-1">
                                Company leaders struggle to gain visibility into in-progress incident responses and
                                communicate timelines to stakeholders.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-white p-5 mt-lg-0 mt-5">
                            <h4>Cloudflare quickly addresses root-cause incidents</h4>
                            <p>
                                Cloudflare engineers use Sourcegraph's code intelligence platform to refactor and debug
                                faster. With Sourcegraph, they can quickly identify out-of-date code libraries by only
                                searching certain repositories while excluding specific file types. And it's easier to
                                search for error logs. As a result, the team can feel confident they've addressed each
                                issue.
                            </p>
                            <Link
                                className="font-weight-bold"
                                to="/case-studies/cloudflare-accelerates-debugging-and-improves-security"
                            >
                                Read the Cloudflare case study
                            </Link>
                            <img src="/external-logos/cloudflare-logo.svg" className="d-flex mx-auto max-w-150 mt-3" />
                        </div>
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection>
            <div className="row mt-lg-0 mt-5 justify-content-center">
                <div className="d-flex flex-column mt-lg-6 mt-4 w-100 mx-3">
                    <h1 className="font-weight-bold text-lg-center text-left mb-lg-6 mb-md-6 mb-4">
                        How Sourcegraph helps
                    </h1>
                </div>
                <div className="pb-lg-5 pb-md-6 pb-5">
                    <CustomCarousel items={items} autoAdvance={true} smallPanel={true} />
                </div>
            </div>
        </ContentSection>

        <div className="bg-gradient-saturn-saturated py-8">
            <ContentSection>
                <QuoteCarousel items={quoteCarouselItems} autoAdvance={true} />
            </ContentSection>
        </div>

        <div className="bg-light-gray-3 py-7">
            <ContentSection>
                <div className="row d-flex flex-column mx-4 mx-lg-0 align-items-lg-center align-items-left">
                    <div className="mb-5 d-flex flex-column text-start text-md-center max-w-600 mx-auto">
                        <h1 className="font-weight-bold">Get started with Sourcegraph</h1>
                        <p>
                            Respond to incidents with confidence and speed, and remediate issues at their root to ensure
                            they don't reoccur.
                        </p>
                    </div>
                    <div className="text-center col-12">
                        <Link
                            className="btn btn-primary min-w-200"
                            to="/demo"
                            title="Request a Demo."
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            Request a demo
                        </Link>
                        <Link to="/use-cases" className="d-flex justify-content-center mt-4">
                            <p className="font-weight-bold">Explore other use cases</p>
                        </Link>
                    </div>
                </div>
            </ContentSection>

            <div className="mt-6">
                <CustomerLogos />
            </div>
        </div>

        <ContentSection className="py-lg-7 py-5">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {blogListItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="d-flex flex-wrap justify-content-center text-center">
                <h2 className="w-100 font-weight-bold mb-4 mx-4 mx-lg-0">
                    Respond to incidents faster and more effectively.
                </h2>
                <Link
                    to="/get-started"
                    className="btn btn-primary"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.trySourcegraph}
                    data-button-type="cta"
                >
                    Ready to get started?
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default UseCasePage

import { FunctionComponent, ReactNode } from 'react'

import ClockTimeThreeOutlineIcon from 'mdi-react/ClockTimeThreeOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import WebIcon from 'mdi-react/WebIcon'
import Link from 'next/link'

import {
    BackButtonBold,
    BlogListItem,
    ContentSection,
    CustomCarousel,
    CustomerLogos,
    Layout,
    QuoteCarousel,
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
        buttonLabel: 'Respond to incidents faster',
        text: (
            <CarouselItem
                header="Response to incidents faster"
                text={
                    <p>
                        No heroics required: Quickly understand all the context and dependencies around your codebase
                        with <Link href="/code-search">Code Search</Link> so you can find the root cause of an incident
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
                        <Link href="/batch-changes">Batch Changes</Link>, you can automate code changes and monitor the
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
                        <Link href="/code-insights">Code Insights</Link>, get visibility into remediation efforts and
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
        header: "Quantcast is confident it won't miss any affected code",
        quote: "Sourcegraph's search gave us confidence because we knew we wouldn't overlook anything: Sourcegraph returns all search results, it doesn't drop or elide them.",
        by: 'Simon Law, Staff Software Engineer, Quantcast',
        logoImage: '/external-logos/quantcast-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/quantcast-large-scale-refactoring',
        logoAlt: 'Quantcast Logo',
    },
    {
        header: 'Nutanix proves the Log4j vulnerability no longer affects its codebase',
        quote: "Isn't it nice when you can just run a report and say, 'Here it is' or 'Here it isn't?' Much better than having to say, 'Well, boss, I think we got it all.'",
        by: 'Jon Kohler, Technical Director of Solution Engineering, Nutanix',
        logoImage: '/external-logos/nutanix-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
        logoAlt: 'Nutanix Logo',
    },
]

const resourceItems = [
    {
        title: 'Log4j Log4Shell 0-day: find, fix, and track affected code',
        description:
            'In the biggest security vulnerability incident since Heartbleed, Sourcegraph co-founder and CEO Quinn Slack shares how you can find affected code, automate fixes, and track progress.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
            alt: 'Log4j blog thumbnail',
        },
        href: '/blog/log4j-log4shell-0-day',
    },
    {
        title: "The real weakest link in software supply chain security (it's not open source)",
        description:
            'Using open source code can jumpstart development, but it can also expose you to security vulnerabilities. In this post, learn how to design an effective vulnerability management process that can make dependencies visible and mitigation less time-consuming.',
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/third-party-open-source-vulnerabilities.png',
            alt: 'The weakest link in software supply blog thumbnail',
        },
        href: '/blog/real-weakest-link-in-software-supply-chain-security',
    },
    {
        title: 'How to remove secrets from your codebase',
        description:
            'In early 2021, Sourcegraph stored infrastructure and service passwords in private repositories. Learn how Sourcegraph Security Engineer André Eleuterio moved every secret to a secure vault and used Code Search to ensure the move was successful and complete.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png',
            alt: 'Remove secrets from your codebase blog thumbnail',
        },
        href: '/blog/eliminate-secrets-from-codebase-with-universal-code-search',
    },
]

const threeUpTextItems = [
    {
        icon: <MagnifyIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Assess incidents quickly</h4>,
        description:
            "Pinpoint the code responsible for the incident and find the root cause in your codebase. Understand the code's functionality to verify the issue.",
    },
    {
        icon: <ClockTimeThreeOutlineIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Plan your remediation</h4>,
        description:
            'Reduce time to resolution by supplying response teams with actionable details, like links to all affected code.',
    },
    {
        icon: <WebIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Execute your plan globally</h4>,
        description:
            "Fix the root cause and confirm the same issue doesn't reoccur in other areas by locating the code pattern and automating fixes across your entire codebase.",
    },
]

const IncidentResponsePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Incident Response | Sourcegraph',
            description:
                'Identify the root cause of an incident, understand its potential impact, fix the issue everywhere in your codebase. Incident response from Sourcegraph.',
        }}
        className="use-cases-page navbar-light"
        hero={
            <section className={styles.pageHeader}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 my-7">
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
            <ThreeUpText
                title="Identify the root cause of an incident and fix it everywhere, fast"
                items={threeUpTextItems}
            />
        </ContentSection>

        <div className="bg-gradient-venus-radial">
            <ContentSection className="py-7">
                <div className="row flex-column flex-lg-row justify-content-between px-0">
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
                                href="/case-studies/cloudflare-accelerates-debugging-and-improves-security"
                                passHref={true}
                            >
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="font-weight-bold">Read the Cloudflare case study</a>
                            </Link>
                            <img
                                src="/external-logos/cloudflare-logo.svg"
                                alt="Cloudflare logo"
                                className="d-flex mx-auto max-w-150 mt-3"
                            />
                        </div>
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

        <div className="bg-gradient-saturn-saturated py-8">
            <ContentSection>
                <QuoteCarousel items={quoteCarouselItems} autoAdvance={true} />
            </ContentSection>
        </div>

        <div className="bg-light-gray-3">
            <ContentSection>
                <div className="row d-flex flex-column mx-4 mx-lg-0 py-7 align-items-lg-center align-items-left">
                    <div className="mb-5 d-flex flex-column text-start text-md-center max-w-600 mx-auto">
                        <h1 className="font-weight-bold">Get started with Sourcegraph</h1>
                        <p>
                            Respond to incidents with confidence and speed, and remediate issues at their root to ensure
                            they don't reoccur.
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
                {resourceItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="text-center">
                <h2 className="font-weight-bold mb-4 mx-4 mx-lg-0">
                    Respond to incidents faster and more effectively.
                </h2>
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

export default IncidentResponsePage

import { FunctionComponent, ReactNode } from 'react'

import AutoFixIcon from 'mdi-react/AutoFixIcon'
import ShieldAlertOutlineIcon from 'mdi-react/ShieldAlertOutlineIcon'
import TimerOutlineIcon from 'mdi-react/TimerOutlineIcon'
import Link from 'next/link'

import {
    Layout,
    BackButton,
    BlogResourceItem,
    ContentSection,
    CustomerLogos,
    CustomCarousel,
    ThreeUpText,
    TwoColumnSection,
    QuoteCarousel,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

import styles from './useCases.module.scss'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2 className="mb-5 display-5 font-weight-bold mb-lg-0">{header}</h2>
        {text}
    </>
)

const items = [
    {
        buttonLabel: 'Find vulnerabilities',
        text: (
            <CarouselItem
                header="Find vulnerabilities"
                text={
                    <p className="py-3">
                        Vulnerabilities are inevitable, but they don't have to be disruptive. With{' '}
                        <Link href="/code-search">
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
                        , you can find vulnerabilities across your repositories in a single search. Relieve your
                        engineers from manual work, get a headstart on remediation, and act confidently knowing that
                        you've located all affected code.
                    </p>
                }
            />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        buttonLabel: 'Automatically merge and deploy fixes',
        text: (
            <CarouselItem
                header="Automatically merge and deploy fixes"
                text={
                    <p className="py-3">
                        Deploy fixes at scale. Don't let the size and complexity of your codebase hold you back. With{' '}
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
                        , you can automate the merging and deployment of fixes. Move faster than your competitors, free
                        up your engineers, and return your codebase to a healthy state.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Proactively monitor for the presence of vulnerable code',
        text: (
            <CarouselItem
                header="Proactively monitor for the presence of vulnerable code"
                text={
                    <p className="py-3">
                        Get ahead of vulnerabilities. With{' '}
                        <a
                            href="https://docs.sourcegraph.com/code_monitoring"
                            title="Code monitoring"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            code monitoring
                        </a>
                        , get alerts whenever specified patterns enter your codebase. Monitors ensure new occurrences
                        are detected immediately and allow you to catch them before merging—and before customers have
                        reason to worry.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Ensure removal of security vulnerabilities',
        text: (
            <CarouselItem
                header="Ensure removal of security vulnerabilities"
                text={
                    <p className="py-3">
                        Get the full picture of an incident. Track how long the vulnerable code has been in your
                        codebase and how quickly you're removing it. With{' '}
                        <Link href="/code-insights">
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
                        , you can measure the progress of applying longer-term fixes for vulnerabilities and incidents
                        across all your code.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Bring peace of mind to customers',
        text: (
            <CarouselItem
                header="Bring peace of mind to customers"
                text={
                    <p className="py-3">
                        The last thing you want to do is walk back an “all clear” report. With Sourcegraph, you can know
                        you'll find every instance of affected code, be able to fix it at scale, monitor for its
                        presence long-term, and ensure your customers that your code is safe.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
]

const threeUpTextItems = [
    {
        icon: <TimerOutlineIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Reduce time to discovery and resolution</h4>,
        description:
            'Find every instance of a vulnerability and start remediating in minutes instead of days or weeks. Use that head start to deploy fixes sooner.',
    },
    {
        icon: <AutoFixIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: (
            <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Automate fixing, merging, and deploying fixes</h4>
        ),
        description:
            'Automate PRs to fix vulnerabilities across your entire codebase so you can be 100% confident you resolved every vulnerability.',
    },
    {
        icon: <ShieldAlertOutlineIcon className="mb-4 tw-text-blurple-400 tw-inline" size={40} />,
        subtitle: (
            <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">
                Alert for risky code changes & known vulnerabilities
            </h4>
        ),
        description:
            'Get on top of vulnerabilities by monitoring your repositories for commits when risky patterns and known vulnerabilities enter your codebase.',
    },
]

const quoteCarouselItems = [
    {
        header: 'Nutanix fixed Log4j in days',
        quote: 'The more we dug, the more we realized [Log4Shell] was everywhere and nowhere at the same time… Sourcegraph was the right product at the right time.',
        author: 'Jon Kohler, Technical Director of Solution Engineering at Nutanix',
        logoImage: '/external-logos/nutanix-logo.svg',
        logoAlt: 'Nutanix',
        linkText: 'Read the case study',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
    },
    {
        header: "Cloudflare proves to auditors that its code isn't vulnerable",
        quote: "[Sourcegraph] is the best way to prove we're not vulnerable to a particular CVE, if and when we get asked by an auditor.",
        author: 'David Haynes, Security Engineer at Cloudflare',
        logoImage: '/external-logos/cloudflare-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
    },
    {
        header: 'Indeed merges code at scale',
        quote: `On average, I'd say that for every automated merge request that we're able to merge we save an hour. That's a rough but conservative estimate. It shows,
        though, that if we are doing several thousand automated merges in a year, we're saving several employee's worth of time.`,
        author: 'Jared Hodge, Senior Manager, Developer Experience at Indeed',
        logoImage: '/external-logos/indeed-logo.svg',
        logoAlt: 'Indeed',
        linkText: 'Read the case study',
        link: '/case-studies/indeed-accelerates-development-velocity',
    },
]

const blogResourceItems = [
    {
        title: 'Log4j Log4Shell 0-day: find, fix, and track affected code',
        description:
            'In December 2021, the Log4j vulnerability shook the world. In this post, Sourcegraph founder and CEO Quinn Slack explains how to find the vulnerability using Sourcegraph.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
            alt: 'Log4j Log4Shell 0-day blog thumbnail',
        },
        href: '/blog/log4j-log4shell-0-day',
    },
    {
        title: 'The Nine Circles of Dependency Hell (and a roadmap out)',
        description:
            'A complex web of software dependencies can stop software development in its tracks. In this post, former Google software engineer Matt Rickard explains how to handle dependencies so engineers can spend more time coding.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/nine-circles-of-dependency-hell.jpg',
            alt: 'Nine circles of dependency hell blog thumbnail',
        },
        href: '/blog/nine-circles-of-dependency-hell',
    },
    {
        title: 'How to remove secrets from your codebase',
        description:
            'In early 2021, many Sourcegraph infrastructure and service account passwords were stored in private repositories. With Sourcegraph code search, security engineer André Eleuterio was able to ensure he moved every secret to a secure vault.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png',
            alt: 'How to remove secrets from your codebase blog thumbnail',
        },
        href: '/blog/eliminate-secrets-from-codebase-with-universal-code-search',
    },
]

const UseCasePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Code Security: Find & Fix Vulnerabilities - Sourcegraph',
            description:
                'Search your repositories and find vulnerabilities in minutes, not days. Learn more about Sourcegraph for code security.',
        }}
        className="use-cases-page navbar-light"
        hero={
            <>
                <div className={styles.pageHeader}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 my-7">
                                <BackButton href="/use-cases" text="USE CASES" />
                                <h1 className="mb-4 display-2 font-weight-bold">Improve code security</h1>
                                <div className="mb-5 display-4 font-weight-normal">
                                    Find, fix, and track vulnerable code across your entire codebase in minutes, not
                                    days
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
                </div>
            </>
        }
    >
        <ContentSection className="my-lg-5">
            <ThreeUpText title="Identify, resolve, and monitor with confidence" items={threeUpTextItems} />
        </ContentSection>

        <div className="sg-bg-gradient-venus">
            <ContentSection className="py-7">
                <TwoColumnSection
                    leftColumn={
                        <>
                            <h2 className="mb-4 display-3 font-weight-bold max-w-400">
                                Identifying & resolving security vulnerabilities is painful
                            </h2>
                            <p>
                                Existing tooling doesn't enable teams to be agile and effective when responding to
                                security vulnerabilities. What does that mean for you?
                            </p>
                            <ul>
                                <li>
                                    Finding vulnerabilities scattered across codebases takes extra time and resources.
                                </li>
                                <li>
                                    Following dependencies across your codebase is inefficient with IDEs that aren't
                                    connected to all code or up to date.
                                </li>
                                <li>
                                    Whether you're making changes to 50 or 5,000 repositories, tracking and managing PRs
                                    to completion is a manual and spreadsheet-heavy process.
                                </li>
                                <li>
                                    The vulnerability management and remediation process remains cumbersome, unclear,
                                    and stressful for all involved.
                                </li>
                            </ul>
                        </>
                    }
                    rightColumn={
                        <div className="tw-bg-white tw-p-8 lg:tw-ml-10">
                            <h4>Log4j was the tip of the iceberg</h4>
                            <p>
                                Log4j is a prime example of how challenging it is to create a cohesive response across
                                multiple teams in an org.
                            </p>
                            <p>
                                Sourcegraph enables companies like Nutanix to completely remediate Log4j vulnerabilities
                                across multiple build and artifact management systems, as well as a large monorepo with
                                many component branches and hundreds of git repositories, in under four days, and with
                                100% certainty.
                            </p>
                            <h6>Learn how to use Sourcegraph to identify and resolve every instance of Log4j.</h6>
                            <Link href="/blog/log4j-log4shell-0-day" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="font-weight-bold"
                                    title="Read the blog post"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Read the blog post.
                                </a>
                            </Link>
                        </div>
                    }
                />
            </ContentSection>
        </div>

        <ContentSection className="py-7">
            <CustomCarousel items={items} autoAdvance={true} title="How Sourcegraph helps" />
        </ContentSection>

        <div className="sg-bg-gradient-saturn">
            <ContentSection>
                <QuoteCarousel items={quoteCarouselItems} />
            </ContentSection>
        </div>

        <div className="bg-light-gray-3 py-7">
            <ContentSection>
                <div className="mx-4 row d-flex flex-column mx-lg-0 align-items-lg-center align-items-left">
                    <div className="mx-auto mb-5 d-flex flex-column text-start text-md-center align-items-lg-center">
                        <h2 className="display-3 font-weight-bold">Get started with Sourcegraph</h2>
                        <p className="max-w-450">
                            Find, fix, and track vulnerable code quickly across your entire codebase to improve code
                            security.
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
                                className="mt-4 d-flex justify-content-center font-weight-bold"
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
                    <h2 className="mb-5 display-3 font-weight-bold">Related resources</h2>
                </div>
                {blogResourceItems.map(item => (
                    <BlogResourceItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="d-flex justify-content-center mb-lg-6">
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

export default UseCasePage

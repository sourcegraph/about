import { Link, PageProps } from 'gatsby'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import AutoFixIcon from 'mdi-react/AutoFixIcon'
import ShieldAlertOutlineIcon from 'mdi-react/ShieldAlertOutlineIcon'
import TimerOutlineIcon from 'mdi-react/TimerOutlineIcon'
import React, { FunctionComponent, ReactNode } from 'react'

import Layout from '../../components/Layout'
import { BackButton } from '../../components/BackButton'
import { BlogListItem } from '../../components/BlogListItem'
import { QuoteCarousel } from '../../components/QuoteCarousel'
import CustomCarousel from '../../components/CustomCarousel'
import { ContentSection } from '../../components/content/ContentSection'
import { CustomerLogosSectionAnimated } from '../../components/product/CustomerLogosSectionAnimated'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2>{header}</h2>
        {text}
    </>
)

const items = [
    {
        id: 0,
        backgroundClass: '',
        buttonLabel: 'Find vulnerabilities',
        text: (
            <CarouselItem
                header="Find vulnerabilities"
                text={
                    <p>
                        Vulnerabilities are inevitable, but they don't have to be disruptive. With{' '}
                        <Link to="/code-search">Code Search</Link>, you can find vulnerabilities across your
                        repositories in a single search. Relieve your engineers from manual work, get a headstart on
                        remediation, and act confidently knowing that you've located all affected code.
                    </p>
                }
            />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        id: 1,
        backgroundClass: '',
        buttonLabel: 'Automatically merge and deploy fixes',
        text: (
            <CarouselItem
                header="Automatically merge and deploy fixes"
                text={
                    <p>
                        Deploy fixes at scale. Don't let the size and complexity of your codebase hold you back. With{' '}
                        <Link to="/batch-changes">Batch Changes</Link>, you can automate the merging and deployment of
                        fixes. Move faster than your competitors, free up your engineers, and return your codebase to a
                        healthy state.
                    </p>
                }
            />
        ),
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        id: 2,
        backgroundClass: '',
        buttonLabel: 'Proactively monitor for the presence of vulnerable code',
        text: (
            <CarouselItem
                header="Proactively monitor for the presence of vulnerable code"
                text={
                    <p>
                        Get ahead of vulnerabilities. With
                        <a href="https://docs.sourcegraph.com/code_monitoring"> code monitoring</a>, get alerts whenever
                        specified patterns enter your codebase. Monitors ensure new occurrences are detected immediately
                        and allow you to catch them before merging—and before customers have reason to worry.
                    </p>
                }
            />
        ),
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        id: 3,
        backgroundClass: '',
        buttonLabel: 'Ensure removal of security vulnerabilities',
        text: (
            <CarouselItem
                header="Ensure removal of security vulnerabilities"
                text={
                    <p>
                        Get the full picture of an incident. Track how long the vulnerable code has been in your
                        codebase and how quickly you're removing it. With <Link to="/code-insights">Code Insights</Link>
                        , you can measure the progress of applying longer-term fixes for vulnerabilities and incidents
                        across all your code.
                    </p>
                }
            />
        ),
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        id: 4,
        backgroundClass: '',
        buttonLabel: 'Bring peace of mind to customers',
        text: (
            <CarouselItem
                header="Bring peace of mind to customers"
                text={
                    <p>
                        The last thing you want to do is walk back an “all clear” report. With Sourcegraph, you can know
                        you'll find every instance of affected code, be able to fix it at scale, monitor for its
                        presence long-term, and ensure your customers that your code is safe.
                    </p>
                }
            />
        ),
        headerClass: '',
        itemClass: 'd-none',
    },
]

const quoteCarouselItems = [
    {
        header: 'Nutanix fixed log4j in days',
        quote: 'The more we dug, the more we realized [Log4Shell] was everywhere and nowhere at the same time… Sourcegraph was the right product at the right time.',
        by: 'Jon Kohler, Technical Director of Solution Engineering at Nutanix',
        logoHref: 'https://www.nutanix.com/',
        logoImage: '/external-logos/nutanix-logo.svg',
    },
    {
        header: `Cloudflare proves to auditors that its code isn't vulnerable`,
        quote: `[Sourcegraph] is the best way to prove we're not vulnerable to a particular CVE, if and when we get asked by an auditor.`,
        by: 'David Haynes, Security Engineer at Cloudflare',
        logoHref: 'https://www.cloudflare.com/',
        logoImage: '/external-logos/cloudflare-color-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
    },
    {
        header: 'Indeed merges code at scale',
        quote: `On average, I'd say that for every automated merge request that we're able to merge we save an hour. That's a rough but conservative estimate. It shows, 
        though, that if we are doing several thousand automated merges in a year, we're saving several employee's worth of time.`,
        by: 'Jared Hodge, Senior Manager, Developer Experience at Indeed',
        logoHref: 'https://www.indeed.com/',
        logoImage: '/external-logos/indeed-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies/indeed-accelerates-development-velocity',
    },
]

const blogListItems = [
    {
        title: 'Log4j Log4Shell 0-day: find, fix, and track affected code',
        description:
            'In December 2021, the Log4j vulnerability shook the world. In this post, Sourcegraph founder and CEO Quinn Slack explains how to find the vulnerability using Sourcegraph.',
        type: 'Blog post',
        image: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
        href: '/blog/log4j-log4shell-0-day',
    },
    {
        title: 'The Nine Circles of Dependency Hell (and a roadmap out)',
        description:
            'A complex web of software dependencies can stop software development in its tracks. In this post, former Google software engineer Matt Rickard explains how to handle dependencies so engineers can spend more time coding.',
        type: 'Blog post',
        image: 'https://sourcegraphstatic.com/blog/nine-circles-of-dependency-hell.jpg',
        href: '/blog/nine-circles-of-dependency-hell',
    },
    {
        title: 'How to remove secrets from your codebase',
        description:
            'In early 2021, many Sourcegraph infrastructure and service account passwords were stored in private repositories. With Sourcegraph code search, security engineer André Eleuterio was able to ensure he moved every secret to a secure vault.',
        type: 'Blog post',
        image: 'https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png',
        href: '/blog/eliminate-secrets-from-codebase-with-universal-code-search',
    },
]

const UseCasePage: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Find and fix security vulnerabilities',
            description:
                'Search across all your repositories to find and resolve vulnerabilities in minutes, not days.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="use-cases-page"
        heroAndHeaderClassName="use-cases-page__use-case-header navbar-light"
        hero={
            <>
                <div className="bg" />
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-lg-7 mb-8 mt-7">
                            <BackButton href="/use-cases" text="USE CASES" bold={true} />
                            <h1 className="display-2 font-weight-bold mb-4">Find and fix security vulnerabilities</h1>
                            <div className="display-5 mb-5">
                                Search across all your repositories to find and resolve vulnerabilities in minutes, not
                                days. With Sourcegraph, you can deploy fixes confidently, knowing you've identified and
                                remediated every instance of affected code and monitor your code long-term to ensure you
                                stay vulnerability-free.
                            </div>
                            <div className="d-flex flex-column flex-lg-row pt-1">
                                <a
                                    className="btn btn-primary mr-lg-3 mb-lg-0 mb-3 w-md-100"
                                    href="https://info.sourcegraph.com/demo-request"
                                    title="Request a Demo."
                                >
                                    Request a demo
                                </a>
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
            </>
        }
    >
        <ContentSection className="my-lg-7">
            <div className="row mx-lg-0 mx-4">
                <div className="d-flex justify-content-center w-lg-50 w-100 mt-7 mb-lg-4 mb-0">
                    <h1 className="font-weight-bold">Identify, resolve, and monitor with confidence</h1>
                </div>
                <div className="d-flex flex-column flex-lg-row my-6">
                    <div className="text-center">
                        <TimerOutlineIcon className="icon mb-4" size={40} />
                        <h4 className="font-weight-bold">Reduce time to discovery and resolution</h4>
                        <p>
                            Find every instance of a vulnerability and start remediating in minutes instead of days or
                            weeks. Use that head start to communicate a remediation plan to your customers faster and
                            deploy fixes sooner. Reassure your customers that you've fixed all affected code.
                        </p>
                    </div>
                    <div className="mx-lg-7 text-center">
                        <AutoFixIcon className="icon mb-4" size={40} />
                        <h4 className="font-weight-bold">Automate fixing, merging, and deploying fixes</h4>
                        <p>
                            Automate PRs to fix vulnerabilities across your entire codebase. Define changes
                            programmatically, track and manage changesets before merging, and monitor the progress of
                            your changes so you can be 100% confident you resolved every vulnerability.
                        </p>
                    </div>
                    <div className="text-center">
                        <ShieldAlertOutlineIcon className="icon mb-4" size={40} />
                        <h4 className="font-weight-bold">Alert for risky code changes & known vulnerabilities</h4>
                        <p>
                            Get on top of vulnerabilities by monitoring your repositories for commits with risky
                            patterns and other known vulnerabilities. Close the loop with alerts to notify responsible
                            individuals when those events occur, ensuring your codebase remains healthy.
                        </p>
                    </div>
                </div>
            </div>
        </ContentSection>

        <div className="bg-gradient-blue-mist">
            <ContentSection className="my-7">
                <div className="row flex-column flex-lg-row align-items-center justify-content-between">
                    <div className="p-lg-0 col-lg-6 px-4">
                        <h1 className="mb-4 font-weight-bold">
                            Identifying & resolving security vulnerabilities is painful
                        </h1>
                        <p>
                            <strong>Major vulnerabilities become all-hands-on-deck situations quickly</strong>, and
                            understanding how to mitigate them is intimidating for many development teams.{' '}
                            <strong>High-severity vulnerabilities now take nearly 250 days to remediate,*</strong> and
                            every hour that goes by increases your exposure and incident risk dramatically.
                        </p>
                        <p>
                            Existing tooling doesn't enable teams to be agile and effective when responding to security
                            vulnerabilities. What does that mean for you?
                        </p>
                        <ul>
                            <li>Finding vulnerabilities scattered across codebases takes extra time and resources</li>
                            <li>
                                Following dependencies across your codebase is inefficient with IDEs that aren't
                                connected to all code or up to date
                            </li>
                            <li>
                                Whether you're making changes to 50 or 5,000 repositories, tracking and managing PRs to
                                completion is a manual and spreadsheet-heavy process
                            </li>
                            <li>
                                The vulnerability management and remediation process remains cumbersome, unclear, and
                                stressful for all involved
                            </li>
                        </ul>
                        <p className="text-muted">
                            *Source:{' '}
                            <a href="https://securityintelligence.com/news/news-vulnerabilities-25-days-remediate/">
                                Security Intelligence
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-white p-5">
                            <h4>Log4j was the tip of the iceberg</h4>
                            <p>
                                Log4j is a prime example of how challenging it is to create a cohesive response across
                                multiple teams in an org. Most organizations struggled to find the vulnerability or
                                understand how it impacted their entire codebase.
                            </p>
                            <p>
                                Meanwhile, Sourcegraph enabled companies like Nutanix to completely remediate log4j
                                vulnerabilities across multiple build and artifact management systems, as well as a
                                large monorepo with many component branches and hundreds of git repositories, in under
                                four days, and with 100% certainty.
                            </p>
                            <p className="font-weight-extra-bold">
                                Learn how to use Sourcegraph to identify and resolve every instance of log4j.
                                <Link to="/blog/log4j-log4shell-0-day"> Read the blog post.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection>
            <div className="row mb-lg-6 mt-lg-0 mt-5 justify-content-center">
                <div className="d-flex flex-column w-lg-75 p-lg-7 mx-lg-3 mx-2 my-5">
                    <h1 className="font-weight-bold text-lg-center text-left">
                        How Sourcegraph helps you find and fix vulnerabilities
                    </h1>
                    <p className="mt-3">
                        With Sourcegraph, engineers can find all instances of a vulnerability, remediate it across their
                        entire codebase, monitor for future occurrences, and visualize their impact. No more manual
                        hunting for affected code through repository after repository, while regulators and customers
                        demand speed.
                    </p>
                </div>
                <CustomCarousel items={items} autoAdvance={true} />
            </div>
        </ContentSection>

        <div className="bg-gradient-onahau-fog py-8">
            <ContentSection>
                <QuoteCarousel items={quoteCarouselItems} autoAdvance={true} className="set-height" />
            </ContentSection>
        </div>

        <div className="bg-light-gray2">
            <ContentSection>
                <CustomerLogosSectionAnimated showButton={true} showSection={false} noCta={true} className="pt-5" />
                <div className="row d-flex flex-column mx-4 mx-lg-0 py-lg-8 py-7 align-items-lg-center align-items-left">
                    <div className="mb-5 d-flex flex-column">
                        <h1 className="font-weight-bold">Get started with Sourcegraph</h1>
                        <p>Find, fix, and track vulnerable code quickly across your entire codebase.</p>
                    </div>
                    <div className="d-flex flex-column">
                        <a
                            className="btn btn-primary"
                            href="https://info.sourcegraph.com/demo-request"
                            title="Request a Demo."
                        >
                            Request a demo
                        </a>
                        <Link to="/use-cases" className="d-flex justify-content-center mt-4">
                            <p className="font-weight-bold">Explore other use cases</p>
                        </Link>
                    </div>
                </div>
            </ContentSection>
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
            <div className="d-flex justify-content-center">
                <Link to="/get-started" className="btn btn-primary">
                    Ready to get started?
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default UseCasePage

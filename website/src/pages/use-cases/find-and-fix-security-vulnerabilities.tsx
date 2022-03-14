import { Link, PageProps } from 'gatsby'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import React, { FunctionComponent, ReactNode } from 'react'

import Layout from '../../components/Layout'
import { BackButton } from '../../components/BackButton'
import { QuoteCarousel } from '../../components/QuoteCarousel'
import CustomCarousel from '../../components/CustomCarousel'
import { ContentSection } from '../../components/content/ContentSection'
import { CustomerLogosSectionAnimated } from '../../components/product/CustomerLogosSectionAnimated'

const CarouselItem: FunctionComponent<{header: string, text: ReactNode}> = ({ header, text }) => (
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
        text:
            <CarouselItem header='Find vulnerabilities' text={<p>Vulnerabilities are inevitable, but they don't have to be disruptive. 
                With <Link to='/code-search'>Code Search</Link>, you can find vulnerabilities across your repositories in a single search. Relieve your engineers from manual 
                work, get a headstart on remediation, and act confidently knowing that you've located all affected code.</p>} 
            />,
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        id: 1,
        backgroundClass: '',
        buttonLabel: 'Automatically merge and deploy fixes',
        text:
            <CarouselItem header='Automatically merge and deploy fixes' text={<p>Deploy fixes at scale. Don't let the size and complexity of your 
                codebase hold you back. With <Link to='/batch-changes'>Batch Changes</Link>, you can automate the merging and deployment of fixes. 
                Move faster than your competitors, free up your engineers, and return your codebase to a healthy state.</p>} 
            />,
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        id: 2,
        backgroundClass: '',
        buttonLabel: 'Proactively monitor for the presence of vulnerable code',
        text: <CarouselItem header='Proactively monitor for the presence of vulnerable code' text={<p>Get ahead of vulnerabilities. With 
        <a href=' https://docs.sourcegraph.com/code_monitoring'>code monitoring</a>, get alerts whenever specified patterns enter your codebase. 
        Monitors ensure new occurrences are detected immediately and allow you to catch them before merging—and before customers have reason to worry.</p>} />,
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        id: 3,
        backgroundClass: '',
        buttonLabel: 'Ensure removal of security vulnerabilities',
        text: <CarouselItem header='Ensure removal of security vulnerabilities' text={<p>Get the full picture of an incident. Track how long the vulnerable code has 
            been in your codebase and how quickly you're removing it. With <Link to='/code-insights'>Code Insights</Link>, you can measure the progress of applying 
            longer-term fixes for vulnerabilities and incidents across all your code.</p>} />,
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        id: 4,
        backgroundClass: '',
        buttonLabel: 'Bring peace of mind to customers',
        text: <CarouselItem header='Bring peace of mind to customers' text={<p>The last thing you want to do is walk back an “all clear” report. With Sourcegraph, you can 
        know you'll find every instance of affected code, be able to fix it at scale, monitor for its presence long-term, and ensure your customers that your code is safe.</p>} />,
        headerClass: '',
        itemClass: 'd-none',
    }
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
        link: '/case-studies/cloudflare-accelerates-debugging-and-improves-security'
    },
    {
        header: 'Indeed merges code at scale',
        quote: `On average, I'd say that for every automated merge request that we're able to merge we save an hour. That's a rough but conservative estimate. It shows, 
        though, that if we are doing several thousand automated merges in a year, we're saving several employee's worth of time.`,
        by: 'Jared Hodge, Senior Manager, Developer Experience at Indeed',
        logoHref: 'https://www.indeed.com/',
        logoImage: '/external-logos/indeed-logo.svg',
        linkText: 'Read the case study',
        link: '/case-studies//indeed-accelerates-development-velocity'
    }
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
                        <div className="col-lg-8 mb-8 mt-7">
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
            <div className="row d-flex justify-content-center">
                <div className="d-flex text-center w-50 mt-lg-7 mb-4">
                    <h1 className="font-weight-bold">
                        Identify, resolve, and monitor with confidence
                    </h1>
                </div>
                <div className="d-flex my-6">
                    <div className="text-center">
                        <h3 className="font-weight-bold">
                            Reduce time to discovery and resolution
                        </h3>
                        <p>
                            Find every instance of a vulnerability and start remediating in minutes 
                            instead of days or weeks. Use that head start to communicate a remediation 
                            plan to your customers faster and deploy fixes sooner. Reassure your customers 
                            that you've fixed all affected code.
                        </p>
                    </div>
                    <div className="mx-6 text-center">
                        <h3 className="font-weight-bold">
                            Automate fixing, merging, and deploying fixes
                        </h3>
                        <p>
                            Automate PRs to fix vulnerabilities across your entire codebase. Define changes 
                            programmatically, track and manage changesets before merging, and monitor the 
                            progress of your changes so you can be 100% confident you resolved every vulnerability.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-weight-bold">
                            Alert for risky code changes & known vulnerabilities
                        </h3>
                        <p>
                            Get on top of vulnerabilities by monitoring your repositories for commits with risky patterns 
                            and other known vulnerabilities. Close the loop with alerts to notify responsible individuals 
                            when those events occur, ensuring your codebase remains healthy.
                        </p>
                    </div>              
                </div>
            </div>
        </ContentSection>

        <div className="bg-gradient-blue-mist">
            <ContentSection className="my-7">
                <div className="row align-items-center justify-content-between">
                    <div className="p-0 col-6">
                        <h1 className="w-75 mb-3 font-weight-bold">
                            Identifying & resolving security vulnerabilities is painful
                        </h1>
                        <p>
                            <strong>Major vulnerabilities become all-hands-on-deck situations quickly</strong>, and understanding how to mitigate 
                            them is intimidating for many development teams. <strong>High-severity vulnerabilities now take nearly 250 
                            days to remediate,*</strong> and every hour that goes by increases your exposure and incident risk dramatically.
                        </p>
                        <p>
                            Existing tooling doesn't enable teams to be agile and effective when responding to security vulnerabilities. What does 
                            that mean for you?
                        </p>
                        <ul>
                            <li>
                                Finding vulnerabilities scattered across codebases takes extra time and resources
                            </li>
                            <li>
                                Following dependencies across your codebase is inefficient with IDEs that aren't connected to all code or up to date
                            </li>
                            <li>
                                Whether you're making changes to 50 or 5,000 repositories, tracking and managing PRs to completion is a manual and spreadsheet-heavy process
                            </li>
                            <li>
                                The vulnerability management and remediation process remains cumbersome, unclear, and stressful for all involved
                            </li>
                        </ul>
                        <p className="text-muted">
                            *Source: <a href="https://securityintelligence.com/news/news-vulnerabilities-25-days-remediate/">Security Intelligence</a>
                        </p>
                    </div>
                    <div className="col-5">
                        <div className="bg-white p-5">
                            <h4>Log4j was the tip of the iceberg</h4>
                            <p>
                                Log4j is a prime example of how challenging it is to create a cohesive response across multiple teams in an org. 
                                Most organizations struggled to find the vulnerability or understand how it impacted their entire codebase.
                            </p>
                            <p>
                                Meanwhile, Sourcegraph enabled companies like Nutanix to completely remediate log4j vulnerabilities across multiple 
                                build and artifact management systems, as well as a large monorepo with many component branches and hundreds of git 
                                repositories, in under four days, and with 100% certainty.
                            </p>
                            <p className="font-weight-extra-bold">
                                Learn how to use Sourcegraph to identify and resolve every instance of log4j. 
                                <Link to="/blog/">
                                    {' '}Read the blog post.
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection>
            <div className="row my-6 justify-content-center">
                <div className="d-flex flex-column w-75 p-7">
                    <h1 className="font-weight-bold text-center">
                        How Sourcegraph helps you find and fix vulnerabilities
                    </h1>
                    <p className="mt-3">
                        With Sourcegraph, engineers can find all instances of a vulnerability, 
                        remediate it across their entire codebase, monitor for future occurrences, 
                        and visualize their impact. No more manual hunting for affected code through 
                        repository after repository, while regulators and customers demand speed.
                    </p>
                </div>
                <CustomCarousel items={items} autoAdvance={true} />
            </div>
        </ContentSection>

        <div className="bg-gradient-violet-mist py-8">
            <ContentSection>
                <QuoteCarousel items={quoteCarouselItems} autoAdvance={true} className='set-height' />
            </ContentSection>
        </div>

        <div className="bg-light-gray">
            <ContentSection>
                <CustomerLogosSectionAnimated showButton={true} showSection={false} className="pt-5" />
                <div className="row d-flex flex-column py-lg-8 py-7 align-items-center">
                    <div className="mb-5 d-flex flex-column">
                        <h1 className="font-weight-bold">Get started with Sourcegraph</h1>
                        <p>
                            Find, fix, and track vulnerable code quickly across your entire codebase. 
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <Link
                            className="btn btn-primary"
                            to="/contact/request-code-insights-demo"
                            title="Request a Demo of Code Insights."
                        >
                            Request a demo
                        </Link>
                        <Link to='/use-cases' className="d-flex justify-content-center mt-4">
                           
                                <p className="font-weight-bold">Explore other use cases</p>
                                <ArrowRightIcon className="icon-inline ml-1" />
                           
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </div>

    </Layout>
)

export default UseCasePage

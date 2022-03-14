import { Link, PageProps } from 'gatsby'
import React, { FunctionComponent } from 'react'

import Layout from '../../components/Layout'
import { BackButton } from '../../components/BackButton'
import { ContentSection } from '../../components/content/ContentSection'

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
                        <h1 className="w-50 font-weight-bold">
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
    </Layout>
)

export default UseCasePage

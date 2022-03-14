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
    </Layout>
)

export default UseCasePage

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
        <ContentSection></ContentSection>
    </Layout>
)

export default UseCasePage

import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link, PageProps } from 'gatsby'

import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'

import Layout from '../components/Layout'
import { ContentSection } from '../components/content/ContentSection'
import { IntegrationsSection } from '../components/IntegrationsSection'
import { CustomerLogosSectionAnimated } from '../components/product/CustomerLogosSectionAnimated'
import { SelfHostedSection } from '../components/SelfHostedSection'
import { buttonStyle, buttonLocation } from '../tracking'

const Index: FunctionComponent<PageProps> = props => {

    const headlines: string[] = [
        'Understand and search',
        'Fix vulnerabilities and issues',
        'Automate key workflows'
    ]
    const [ headlineIndex, setHeadlineIndex ] = useState(0)
    const [ headline, setHeadline ] = useState(headlines[0])

    useEffect(() => {
        const cycle = setInterval(() => {        
            const newIndex = headlineIndex === headlines.length - 1 ? 0 : headlineIndex + 1

            setHeadline(headlines[newIndex])
            setHeadlineIndex(newIndex)
        }, 5000)

        return () => clearInterval(cycle)
    })

    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Sourcegraph | Code Intelligence Platform',
                description: 'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Soucegraph.',
            }}
        >
            <div className="hero">
                <h1><span>{headline}</span> across your entire codebase</h1>
                <p>Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and accelerate engineering velocity with Sourcegraph.</p>

                <Link
                    className="btn btn-primary"
                    to="/get-started"
                    title="Get started"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Get started
                </Link>

                <Link
                    className="btn btn-outline-primary"
                    to="/demo"
                    title="Request a demo"
                    data-button-style={buttonStyle.outline}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Request a demo
                </Link>

                <p className="my-3 col-9 mx-auto">
                    Product or installation questions?{' '}
                    <a href="https://info.sourcegraph.com/talk-to-a-developer" title="Talk to an expert">
                        Talk to an expert
                    </a>
                    .
                </p>
            </div>


            <CustomerLogosSectionAnimated showButton={true} showSection={true} className="pt-5" />
            <ContentSection className="pt-6 mt-3 d-none d-sm-block">
                <div className="home__screenshot"></div>
            </ContentSection>

            <ContentSection className="mt-5 mb-6">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-5 mt-md-5">
                        <h2 className="display-3 font-weight-bold">Search&nbsp;your&nbsp;code. All&nbsp;of&nbsp;it.</h2>
                        <p>
                            Point Sourcegraph at the repositories you work with, stored in any code host &mdash; then
                            start searching. Stay in flow and find your answer quickly with smart filters such as{' '}
                            <code className="border rounded px-1">Non-test files</code>,{' '}
                            <code className="border rounded px-1">lang:java</code>,{' '}
                            <code className="border rounded px-1">repo:frontend</code>, and more. Stop{' '}
                            <code className="border rounded px-1">grep</code>'ing your stale local clones and fighting
                            with your code host's search to match &ldquo;special&rdquo; characters like{' '}
                            <code className="border rounded px-1 text-nowrap">.:=()</code>.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="https://docs.sourcegraph.com/code_search">
                                Code search documentation <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-4">
                        <img
                            src="/code-search-illustrated.svg"
                            className="home__diagram w-150"
                            alt="Code search across multiple code hosts, including GitHub, GitLab, BitBucket, and Azure" />
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="mt-5 mb-6">
                <div className="row">
                    <div className="col-lg-7">
                        <img src="/opensourcecode-lg.svg" className="home__diagram w-150" alt="Open Source Code" />
                    </div>
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Search open source code, too.</h2>
                        <p>
                            Sourcegraph is indexing millions of open source repositories across several code hosts. With
                            Sourcegraph, you can search the universe of open source code — currently over 2 million
                            repositories and counting — in milliseconds. Explore, learn from, and reference the best
                            community-developed code out there.
                        </p>
                        <div className="pt-1">
                            <a
                                className="btn btn-primary"
                                href="https://sourcegraph.com/search"
                                title="Use this if you want to search across top open source repositories (or add your own projects)."
                            >
                                Search now
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <IntegrationsSection />

            <div className="container">
                <hr className="my-md-6" />
            </div>

            <div className="container">
                <h2 className="display-2 font-weight-bold">How developers use Sourcegraph</h2>
                <div className="row">
                    <div className="col-lg-6 mt-lg-0">
                        <p className="my-5">
                            Sourcegraph is built by developers for developers, to help them solve the big code problems
                            they face, all day every day. Here's how they're doing it.
                        </p>
                    </div>
                    <div className="col-lg-6 mt-2 mt-lg-4">
                        <div className="card pt-0" style={{ background: "url('/customers-page-bg.svg') no-repeat" }}>
                            <strong className="card-header border-0 pb-0">Want to use Sourcegraph at work?</strong>
                            <p className="card-body mb-0 pt-1">
                                <a href="#get-started" title="Try Sourcegraph now">
                                    Use it free
                                </a>{' '}
                                for up to 10 developers. To get your company to upgrade to a{' '}
                                <Link to="/pricing">paid plan</Link>, see the{' '}
                                <Link to="/use-cases">use cases page</Link> (to make the case). Or{' '}
                                <a href="/contact/request-info">schedule time with us</a> for help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ContentSection className="mt-6">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="text-uppercase mb-3">Code Search</div>
                        <h2>Find anything in code, fast</h2>
                        <div>
                            Sourcegraph returns results in milliseconds, even across thousands of repositories, like:
                            <ul>
                                <li>
                                    Examples of{' '}
                                    <a href="https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/+f:dockerfile+apt-get%7Capk&patternType=regexp">
                                        installing packages in a Dockerfile
                                    </a>
                                </li>
                                <li>Places where a specific error is returned</li>
                                <li>
                                    Recent TypeScript changes mentioning{' '}
                                    <code className="border rounded px-1">auth</code>
                                </li>
                                <li>Definitions of a specific function</li>
                            </ul>
                        </div>
                        <p>
                            Write queries with regex, punctuation, symbols, and advanced syntax-aware pattern matching.
                            Sourcegraph’s visual and interactive query builder constructs complex queries to find and
                            filter code in ways IDEs and code hosts can’t.
                        </p>
                        <div className="pt-1">
                            <Link className="d-flex align-items-center" to="/code-search">
                                Learn more about code search <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/Iye0yZVr1Ro?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder={0}
                                title="AND/OR operators for universal code search"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="mt-6">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-7 pr-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/KSx61-yAMLs?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder={0}
                                title="Exploring code with Sourcegraph"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-uppercase mb-3">Code Intelligence</div>
                        <h2>Navigate code, with definitions and references</h2>
                        <p>
                            Find definitions, references, usage examples, and anything else in code, across package,
                            dependency, and repository boundaries. You can navigate code in your web browser in any
                            repository on any branch, instantly and without losing your local context.
                        </p>
                        <div className="pt-1">
                            <a
                                className="d-flex align-items-center"
                                href="https://docs.sourcegraph.com/code_intelligence"
                            >
                                Code intelligence documentation <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="my-6">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="text-uppercase mb-3">Batch Changes</div>
                        <h2>Make large-scale code changes</h2>
                        <p>
                            Remove legacy code, fix critical security issues, and pay down tech debt. Use Batch Changes
                            to compute diffs and create branches and pull requests across multiple repositories. With
                            Sourcegraph, teams move fast and fix things, safely.
                        </p>
                        <div className="pt-1">
                            <a className="d-flex align-items-center" href="/batch-changes/">
                                Learn more about Batch Changes <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/eOmiyXIWTCw?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder={0}
                                title="Sourcegraph Batch Changes"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="my-6">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-7 pr-lg-6 mt-3">
                        <div className="container video-embed embed-responsive embed-responsive-16by9 ">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube-nocookie.com/embed/fMCUJQHfbUA?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder={0}
                                title="Sourcegraph Code Insights"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-uppercase mb-3">Code Insights</div>
                        <h2>Track what really matters to you and your team</h2>
                        <p>
                            With Code Insights, you can accurately understand how different initiatives are progressing
                            over time and answer questions that used to be difficult or impossible to answer before.
                            Using the codebase as the source of truth, you can track migrations, code smells, versions,
                            and more with visualizations that are easy to customize and kept automatically up to date.
                        </p>
                        <div className="pt-1">
                            <Link className="d-flex align-items-center" to="/code-insights">
                                Learn more about Code Insights <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <SelfHostedSection />
        </Layout>
    )
}

export default Index

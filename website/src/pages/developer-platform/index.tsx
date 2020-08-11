import { Link } from 'gatsby'
import * as React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="What is a developer platform?"
            description="Today, many developers just use a code host, often with issue tracking and basic code reviews. But the most elite software development teams use a developer platform that includes much more, enabling them to ship better software faster."
        >
            <ContentSection color="white" className="pt-5 pb-3">
                <p>
                    A <strong>developer platform</strong> is the one place where developers and DevOps teams go to
                    answer questions about code and systems. It ties together information from many tools, from
                    repositories on your code host to dependency relationships among your projects and application
                    runtime information.
                </p>
                <p>
                    <a href="#used-by">Google, Facebook, Uber, Lyft, Yelp, and other elite software organizations</a>{' '}
                    rely on developer platforms, not just code hosts.
                </p>
            </ContentSection>
            <ContentSection color="purple" className="py-5">
                <h2>A code host is no longer enough</h2>
                <p>
                    Historically, the code host (such as GitHub) was the development platform. But the most elite
                    software development organizations such as Google, Facebook, Uber, Lyft, and Yelp realized that a
                    code host isn't enough:
                </p>
                <ul className="mt-3">
                    <li className="mb-3">
                        With more code and more repositories, <strong>cross-repository code search</strong> is
                        necessary.
                    </li>
                    <li className="mb-3">
                        With more internal libraries, services, and APIs owned by disparate teams,{' '}
                        <strong>code navigation across packages and repositories</strong> is necessary.
                    </li>
                    <li className="mb-3">
                        With faster development cycles and more intricately connected systems, developers need to{' '}
                        <strong>understand how a change affects other components in code review</strong>.
                    </li>
                    <li className="mb-3">
                        With more tools collecting error and performance data about code, developers need to see{' '}
                        <strong>rich inline information on code files and reviews</strong>.
                    </li>
                </ul>
            </ContentSection>
            <ContentSection color="white" className="py-5">
                <h3 className="mb-3">A developer platform helps answer your team's questions</h3>
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="mb-2 font-weight-light border-bottom border-purple">For developers</h5>
                        <ul className="pl-3">
                            <li>How do I use this function or service?</li>
                            <li>If I change this, what could break?</li>
                            <li>What's the right library or service to use for this task?</li>
                            <li>How (and where) is this feature implemented?</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-2 font-weight-light border-bottom border-purple">For DevOps teams</h5>
                        <ul className="pl-3">
                            <li>
                                What recently changed in the code about <em>X</em> that broke it?
                            </li>
                            <li>Tell me whenever code is committed that makes a DB connection.</li>
                            <li>What's the performance of this line of code in production?</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-2 font-weight-light border-bottom border-purple">For engineering leaders</h5>
                        <p>
                            Ensure that everyone who interacts with this code can answer these questions on their own in
                            a single place.
                        </p>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="primary" className="py-5">
                <h3>The new standard for developer platforms</h3>
                <p>A developer platform must have these things. Anything else is just a code host.</p>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Code</h5>
                        <p>
                            One place to search, navigate, and analyze all of your organization's code (subject to user
                            permissions)
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Intelligence</h5>
                        <p>
                            An understanding of the structure of and relationships in your codebase, not just the raw
                            text
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Platform</h5>
                        <p>
                            Deep integrations with your other tools for viewing code (code host, code reviews, and
                            editors) or collecting data about code (logging, monitoring, static analysis, etc.)
                        </p>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="py-6">
                <h2 id="used-by" className="text-center display-4">
                    The most elite software organizations use a developer platform
                </h2>
                <p className="text-center">
                    Google, Facebook, Uber, Lyft, Yelp, and other world-class companies rely on a developer platform
                    (not just a code host) to ship software.
                </p>
                <div className="row mt-6">
                    <div className="col-md-6 col-lg-4 mb-3">
                        <h4>Google CodeSearch (internal-only tool)</h4>
                        <ul className="pl-3">
                            <li>
                                Used 5-10 times daily by almost every Google technical employee for the last 10+ years
                            </li>
                            <li>
                                98% of developers say it is "critical" to their job (in a{' '}
                                <a
                                    href="https://docs.google.com/document/d/1LQxLk4E3lrb3fIsVKlANu_pUjnILteoWMMNiJQmqNVU/edit#heading=h.xxziwxixfqq3"
                                    target="_blank"
                                >
                                    Google developer survey
                                </a>
                                )
                            </li>
                            <li>$100Ms invested, with dozens of full-time engineers building it</li>
                            <li>
                                Use cases and value are{' '}
                                <Link to="/product/code-search-navigation#use-cases">
                                    documented in a Google internal research study
                                </Link>
                            </li>
                        </ul>
                        <Blockquote
                            quote="[It's] essential to be able to easily search [the] whole source … huge productivity boost: easy to find uses, defs, examples, etc."
                            by={
                                <a
                                    href="https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf"
                                    target="_blank"
                                >
                                    Jeff Dean (Google Senior Fellow)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <h4>
                            Facebook BigGrep/<abbr title="The Big Grep Search">TBGS</abbr> (internal-only tool)
                        </h4>
                        <ul className="pl-3">
                            <li>Used daily by almost every Facebook technical employee for the last ~8 years</li>
                            <li>
                                More secretive than Google's tool, but is described in a{' '}
                                <a
                                    href="https://www.facebook.com/atscaleevents/videos/dev-tools-scale-searching-through-code-at-scale-jeroen-vae/1911812842425144/"
                                    target="_blank"
                                >
                                    conference talk
                                </a>{' '}
                                and some{' '}
                                <a href="https://twitter.com/cyan_binary/status/1015015559115653121" target="_blank">
                                    tweets
                                </a>
                            </li>
                            <li>$100Ms invested, with dozens of full-time engineers building it</li>
                        </ul>
                        <Blockquote
                            quote="tbgs is the StackOverflow for Facebook engineers"
                            by={
                                <a href="https://twitter.com/cyan_binary/status/1015015559115653121" target="_blank">
                                    Facebook engineer
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-12 col-lg-4 mb-3">
                        <h4>
                            <img
                                style={{ width: '17px', height: '17px' }}
                                src="/sourcegraph/sourcegraph-mark.svg"
                                aria-hidden="true"
                            />{' '}
                            Sourcegraph
                            <br />
                            Used by Uber, Lyft, Yelp, and more
                        </h4>
                        <ul className="pl-3">
                            <li>Every developer at these organizations uses Sourcegraph</li>
                            <li>
                                Used by the world's leading technology companies (except Google and Facebook, which
                                built their in-house tools 10+ years ago for $100Ms+)
                            </li>
                        </ul>
                        <Blockquote
                            quote="Seriously, Sourcegraph is the best tool we’ve invested in. It’s made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast. This is absolutely incredible."
                            by="Lyft engineering manager"
                        />
                        <Blockquote
                            quote="[Sourcegraph] improves my productivity and ability to write clean code by 2-3x."
                            by="Uber senior engineer"
                        />
                    </div>
                </div>
            </ContentSection>
            <div className="container-fluid py-6">
                <h2 className="mb-5 text-center">
                    Watch Google &amp; Facebook engineers present their internal dev platforms
                </h2>
                <div className="d-flex flex-wrap justify-content-center">
                    <iframe
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fatscaleevents%2Fvideos%2F1911812842425144%2F&show_text=false&appId&width=700"
                        width="560"
                        height="315"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowtransparency="yes"
                        allow="encrypted-media"
                        allowFullScreen={true}
                        className="m-2"
                        title="Dev Tools @Scale - Searching through code at scale, Jeroen Vaelen"
                    />
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/KTJs-0EInW8"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                        className="m-2"
                        title="Stanford Seminar - Google's Steve Yegge on GROK"
                    />
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cIVUP9wUAJA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                        className="m-2"
                        title="Project Grok - Steve Yegge - Emacs Conference 2013"
                    />
                </div>
            </div>
            <ContentSection color="white" className="pt-4 pb-6 border-top border-gray">
                <h2 className="text-center my-5">
                    Sourcegraph is the new standard developer platform for <em>every</em> company.
                </h2>
                <div className="border border-gray rounded w-75 mx-auto py-4">
                    <CustomerLogosSection />
                </div>
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Get Sourcegraph now"
                description="Your team deserves a development platform, not just a code host. Use Sourcegraph, trusted by the most elite software teams."
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>

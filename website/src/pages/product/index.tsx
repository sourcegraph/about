import { Link } from 'gatsby'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import CityIcon from 'mdi-react/CityIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import OpenInAppIcon from 'mdi-react/OpenInAppIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import WebIcon from 'mdi-react/WebIcon'
import * as React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PRODUCT_FEATURES, PRODUCT_USE_CASES } from '../../components/ProductPopover'
import { ServerVersionNumber } from '../../components/ServerVersionNumber'
import { eventLogger } from '../../EventLogger'

export default ((props: any) => {
    const actions = (
        <div>
            <a className="btn btn-light btn-lg mr-2" href="https://docs.sourcegraph.com/#quickstart">
                Start a free trial
            </a>
            <Link className="btn btn-primary btn-lg mr-2" to="/contact/sales">
                Request a demo
            </Link>
        </div>
    )
    return (
        <Layout location={props.location}>
            <ContentPage
                title="Sourcegraph: Code intelligence platform"
                description="A single platform for developers and DevOps to speed up the entire software development cycle: search, navigation, review, verification, and automation. Integrates with your code host and other favorite tools."
                mainActions={actions}
            >
                <ContentSection>
                    <h2>The world's leading technology companies use code intelligence platforms</h2>
                    <p>
                        Google, Facebook, Uber, Lyft, Yelp, and other world-class companies rely on a code intelligence
                        platform to ship software.
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <h4>Google CodeSearch (internal-only tool)</h4>
                            <ul className="pl-3">
                                <li>
                                    Used 5-10 times daily by almost every Google technical employee for the last 10+
                                    years
                                </li>
                                <li>
                                    98% of developers say it is "critical" to their job (in a{' '}
                                    <a
                                        className="link"
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
                                    <a
                                        className="link"
                                        href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                                        target="_blank"
                                    >
                                        documented in a Google-published research study
                                    </a>
                                </li>
                            </ul>
                            <Blockquote
                                quote="Crucial to learning an area of codebase. … This tool is as critical as the code review tool to me. Without it I would be nothing. … I use it several times a minute while coding."
                                by={
                                    <a
                                        href="https://docs.google.com/document/d/1LQxLk4E3lrb3fIsVKlANu_pUjnILteoWMMNiJQmqNVU/edit#heading=h.8y8wjz142kaq"
                                        target="_blank"
                                    >
                                        Google engineers
                                    </a>
                                }
                            />
                        </div>
                        <div className="col-md-6 col-lg-4">
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
                                    <a
                                        href="https://twitter.com/cyan_binary/status/1015015559115653121"
                                        target="_blank"
                                    >
                                        tweets
                                    </a>
                                </li>
                                <li>$100Ms invested, with dozens of full-time engineers building it</li>
                            </ul>
                            <Blockquote
                                quote="tbgs is the StackOverflow for Facebook engineers"
                                by={
                                    <a
                                        href="https://twitter.com/cyan_binary/status/1015015559115653121"
                                        target="_blank"
                                    >
                                        Facebook engineer
                                    </a>
                                }
                            />
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <h4>
                                <img
                                    style={{ width: '17px', height: '17px' }}
                                    src="/sourcegraph/sourcegraph-mark.svg"
                                />{' '}
                                Sourcegraph
                                <br />
                                Used by Uber, Lyft, Yelp, and more
                            </h4>
                            <ul className="pl-3">
                                <li>Sourcegraph is the #1 code intelligence platform</li>
                                <li>Every developer at the named organizations uses Sourcegraph</li>
                                <li>
                                    Used by the world's leading technology companies (except Google and Facebook, which
                                    built their in-house tools 10+ years ago for $100Ms+)
                                </li>
                            </ul>
                            <Blockquote
                                quote="Seriously, Sourcegraph is the best tool we’ve invested in. It’s made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast. This is absolutely incredible."
                                by="Lyft engineering manager"
                            />
                        </div>
                    </div>
                </ContentSection>
                <hr />
                <ContentSection>
                    <h3>What is code intelligence?</h3>
                    <p>
                        <strong>Code intelligence</strong> is all of the information and practices related to code that
                        your organization needs in the software development cycle.
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="mb-2">For developers:</h4>
                            <ul className="pl-3">
                                <li>How do I call this function or service?</li>
                                <li>If I change this, what could break?</li>
                                <li>
                                    What's the right library or service to use for <em>X</em>?
                                </li>
                                <li>How (and where) is this feature implemented?</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className="mb-2">For DevOps teams:</h4>
                            <ul className="pl-3">
                                <li>
                                    What recently changed in the code about <em>X</em> that broke it?
                                </li>
                                <li>Tell me whenever code is committed that makes a DB connection.</li>
                                <li>What's the performance of this line of code in production?</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className="mb-2">For engineering leadership:</h4>
                            <p>
                                Ensure that everyone who interacts with this code can answer these questions quickly and
                                easily.
                            </p>
                        </div>
                    </div>
                    <br />
                    <h3>What is a code intelligence platform?</h3>
                    <p>
                        A <strong>code intelligence platform</strong> lets developers, DevOps, and everyone else in your
                        organization answer the kinds of questions above quickly and easily. It consists of a few parts:
                    </p>
                    <ul>
                        <li>
                            <strong>Code:</strong> one convenient place to search, navigate, and analyze all of your
                            organization's code (subject to user permissions)
                        </li>
                        <li>
                            <strong>Intelligence:</strong> an understanding the structure and relationships of your code
                            (in the same way a smart IDE and compiler do), not just the raw text
                        </li>
                        <li>
                            <strong>Platform:</strong> deep integrations with your other tools for viewing code (code
                            host, code reviews, and editors) or collecting data about code (logging, monitoring, static
                            analysis, etc.)
                        </li>
                    </ul>
                </ContentSection>
                <hr />
                <ContentSection>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Key Sourcegraph features:</h4>
                            <ul className="nav flex-column">
                                {PRODUCT_FEATURES.map(({ text, to }, i) => (
                                    <li key={i} className="nav-item">
                                        <Link
                                            className="nav-link d-inline-block btn btn-outline-primary mr-2 mb-2"
                                            to={to}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4>Popular Sourcegraph use cases:</h4>
                            <ul className="nav flex-column">
                                {PRODUCT_USE_CASES.map(({ text, to }, i) => (
                                    <li key={i} className="nav-item">
                                        <Link
                                            className="nav-link d-inline-block btn btn-outline-primary mr-2 mb-2"
                                            to={to}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ContentSection>
                <Jumbotron
                    color="purple"
                    className="mt-5 mb-0"
                    title="Get code intelligence now"
                    description="Start shipping better software faster."
                >
                    {actions}
                </Jumbotron>
            </ContentPage>
        </Layout>
    )
}) as React.FunctionComponent<any>

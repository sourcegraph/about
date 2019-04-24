import { Link } from 'gatsby'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import CityIcon from 'mdi-react/CityIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import OpenInAppIcon from 'mdi-react/OpenInAppIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import WebIcon from 'mdi-react/WebIcon'
import * as React from 'react'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { ServerVersionNumber } from '../../components/ServerVersionNumber'
import { eventLogger } from '../../EventLogger'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Sourcegraph: Code intelligence platform"
            description="A single platform for developers and DevOps to speed up the entire software development cycle: search, navigation, review, verification, and automation. Integrates with your code host and other favorite tools."
            mainActions={
                <>
                    <a className="btn btn-primary btn-lg" href="https://docs.sourcegraph.com/#quickstart">
                        Install
                    </a>
                </>
            }
        >
            <ContentSection>
                <h2>The world's leading technology companies use code intelligence platforms</h2>
                <p>
                    Google, Facebook, Uber, Lyft, Yelp, and many other world-class companies use code intelligence
                    platforms to ship software.
                </p>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <h4>Google CodeSearch (internal-only tool)</h4>
                        <ul className="pl-3">
                            <li>
                                Used 5-10 times daily by almost every Google technical employee for the last 10+ years
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
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <h4>Facebook BigGrep (internal-only tool)</h4>
                        <ul className="pl-3">
                            <li>asdf</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4">Uber, Lyft, Yelp</div>
                </div>
            </ContentSection>
            <hr />
            <ContentSection>
                <h3>What is code intelligence?</h3>
                <p>
                    <strong>Code intelligence</strong> is all of the information and practices related to code that your
                    organization needs in the software development cycle.
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
                    organization answer these kinds of questions quickly and easily. It consists of a few parts:
                </p>
                <ul>
                    <li>
                        <strong>Code:</strong> one convenient place to search, navigate, and analyze all of your
                        organization's code (subject to user permissions)
                    </li>
                    <li>
                        <strong>Intelligence:</strong> an understanding the structure and relationships of your code (in
                        the same way a smart IDE and compiler do), not just the raw text
                    </li>
                    <li>
                        <strong>Platform:</strong> deep integrations with your other tools for viewing code (code host,
                        code reviews, and editors) or collecting data about code (logging, monitoring, static analysis,
                        etc.)
                    </li>
                </ul>
            </ContentSection>
            <hr />
            <ContentSection>
                <h3>Code intelligence helps your entire organization build software better</h3>
                <p>a</p>
            </ContentSection>
        </ContentPage>
        <ul className="nav product__server__features-nav">
            <li className="nav-item">
                <Link
                    className="nav-link product__server__features-nav-link active product__server__features-nav--code-search"
                    to="#code-search"
                >
                    <MagnifyIcon className="material-icons mb-1" size={32} />
                    Code search &amp; navigation
                </Link>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link product__server__features-nav-link active product__server__features-nav--code-intelligence"
                    href="#code-intelligence"
                >
                    <WebIcon className="material-icons mb-1" size={32} />
                    Code review
                </a>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link product__server__features-nav-link active product__server__features-nav--integrations"
                    to="#integrations"
                >
                    <PowerPlugIcon className="material-icons mb-1" size={32} />
                    Integrations
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link product__server__features-nav-link active product__server__features-nav--data-center"
                    to="#data-center"
                >
                    <CityIcon className="material-icons mb-1" size={32} />
                    Data Center
                </Link>
            </li>
        </ul>
    </Layout>
)) as React.FunctionComponent<any>

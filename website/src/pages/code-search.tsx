import { Link, PageProps } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { IntegrationsSection } from '../components/IntegrationsSection'
import { SelfHostedSection } from '../components/SelfHostedSection'
import { buttonStyle, buttonLocation } from '../tracking'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

export const CodeSearchPage: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph | Code Search',
            description:
                'Onboard to a new codebase, find answers faster, and identify security risks with Sourcegraph Code Search. Search across all the repositories you work with.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        heroAndHeaderClassName="code-search-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-6 mb-lg-6 mt-6">
                        <div className="text-uppercase">Code Search</div>
                        <h1 className="display-2 font-weight-bold mb-0">Search your code.</h1>
                        <h1 className="display-2 font-weight-bold mb-0">All of it.</h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Onboard to a new codebase, find answers faster, and identify security risks with universal
                            code search.
                        </p>
                        <div className="pt-1">
                            <Link
                                className="btn btn-primary mr-3 cta-btn"
                                 data-button-style={buttonStyle.primary}
                                 data-button-location={buttonLocation.hero}
                                to="#get-started"
                                title="Use this if you want to search your (or your company's) code, invite teammates, and try all the features."
                            >
                                Deploy locally <ArrowRightIcon className="ml-1" />
                            </Link>
                            <a
                                className="btn btn-outline-primary my-3 cta-btn"
                                 data-button-style={buttonStyle.outline}
                                 data-button-location={buttonLocation.hero}
                                href="https://sourcegraph.com/search"
                                title="Use this if you want to search across top open source repositories (or add your own projects)."
                            >
                                Search open source <ArrowRightIcon className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
    >
        {/* A search engine built for code */}
        <ContentSection>
            <div className="row">
                <div className="col-lg-6 container video-embed embed-responsive embed-responsive-16by9 ">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/aDU4C9j-hYA?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder={0}
                        title="AND/OR operators for universal code search"
                    ></iframe>
                </div>
                <div className="col-lg-6">
                    <h2 className="display-3 font-weight-bold mb-3">A search engine built for code</h2>
                    <ul className="list-spaced">
                        <li>
                            <strong>Universal.</strong> Point Sourcegraph at the repositories you work with, stored in
                            any code host, or search across the open source universe.
                        </li>
                        <li>
                            <strong>Powerful.</strong> Get answers quickly with literal, structural, and regular
                            expression search, along with smart filters and Code Intelligence.
                        </li>
                        <li>
                            <strong>Extensible.</strong> Connect all your other tools to get things like test coverage,
                            1-click open file in editor, custom highlighting, and information from your other favorite
                            services all in one place with
                            <a href="https://sourcegraph.com/extensions?category=All"> extensions</a>.
                        </li>
                    </ul>
                </div>
            </div>
        </ContentSection>

        {/* Social proof */}
        <ContentSection className="py-4">
            <div className="row justify-content-center pt-md-4">
                <div className="col-lg-6">
                    <h2 className="display-3 font-weight-bold mb-3">Move faster with Sourcegraph</h2>
                    <h5>Onboard 2.5x quicker</h5>
                    <p>
                        Search across every repository and code host to get to know the repository structure and learn
                        from other developers' code.
                    </p>

                    <h5>Improve developer happiness and productivity</h5>
                    <p>
                        Get answers faster without waiting for context from teammates or dealing with stale local
                        clones.
                    </p>

                    <h5>Mitigate security and compliance risks</h5>
                    <p>Get alerts for vulnerabilities and then automate security fixes across your entire codebase.</p>
                </div>
                <div className="col-lg-6 text-center">
                    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                        <p>
                            At Criteo, developer happiness is our top priority-not just productivity. By providing them
                            with the right tools, like Sourcegraph, we've found that increased productivity is a natural
                            byproduct.
                        </p>
                        <footer className="blockquote-footer">Francois Jehl, Senior Engineering Manager, Criteo</footer>
                        <div className="d-flex justify-content-center my-4">
                            <img src="/external-logos/criteo-logo.svg" width="110px" alt="Criteo" />
                        </div>
                    </blockquote>
                    <Link to="/case-studies/criteo-tackles-big-code">
                        Criteo Tackles Big Code <ArrowRightBoxIcon className="icon-inline ml-1" />
                    </Link>
                </div>
            </div>
        </ContentSection>

        <IntegrationsSection />

        <ContentSection className="mb-6">
            <h2 className="display-3 font-weight-bold mt-5 mb-4">How developers are using Sourcegraph</h2>
            <div className="row">
                <div className="col-lg-6 container video-embed embed-responsive embed-responsive-16by9 border">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/r2CpLe1h89I?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder={0}
                        title="How developers are using Sourcegraph"
                    ></iframe>
                </div>
                <div className="col-lg-6">
                    <p>
                        Sourcegraph returns results in milliseconds, even across thousands of repositories, to help
                        developers find:
                    </p>
                    <ul>
                        <li>Places where a specific error is returned</li>
                        <li>
                            Examples of{' '}
                            <a
                                target="_blank"
                                href="https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/+f:dockerfile+apt-get%7Capk&patternType=regexp"
                            >
                                installing packages in a Dockerfile
                            </a>
                        </li>
                        <li>Recent TypeScript changes mentioning auth</li>
                        <li>Definitions of a specific function</li>
                    </ul>
                </div>
            </div>
        </ContentSection>

        <SelfHostedSection />
    </Layout>
)

export default CodeSearchPage

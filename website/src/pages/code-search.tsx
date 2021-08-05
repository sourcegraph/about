import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { TrySourcegraph } from '../components/TrySourcegraph'
import { IntegrationsSection } from '../components/IntegrationsSection'
import GetStarted from '../components/GetStarted'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'

export const CodeSearchPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph Code Search | ',
            description:
                'Automate large-scale changes with Sourcegraph Batch Changes. Keep your code up to date and pay down tech debt across all repositories and code hosts.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png'
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
                            Onboard to a new codebase, find answers faster, and identify security risks with universal code search.
                        </p>
                        <a
                            className="btn btn-primary mr-5"
                            href="https://sourcegraph.com/search"
                            title="Try Sourcegraph now"
                        >
                            Try Sourcegraph now
                        </a>
                        <Link className="btn btn-outline-primary" to="/contact/request-info/">
                            Talk to a product specialist
                        </Link>
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
                        src="https://www.youtube-nocookie.com/embed/Iye0yZVr1Ro?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
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
                            <strong>Universal.</strong> Point Sourcegraph at the repositories you work with, stored in any code host, 
                            or search across the entire open source universe.
                        </li>
                        <li>
                            <strong>Powerful.</strong> Get answers quickly with literal, structural, and regular expression search, 
                            along with smart filters and Code Intelligence.
                        </li>
                        <li>
                            <strong>Extensible.</strong> Connect all your other tools to get things like test coverage, 1-click open file in editor,
                            custom highlighting, and information from your other favorite services all in one place with
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
                        Search across every repo and code host to get to know the repository structure, track down where code lives, 
                        and learn from other developer's code.
                    </p>
                    <h5>Improve developer happiness and productivity</h5>
                    <p>Get answers faster without switching between tools and breaking flow.</p>
                    <h5>Mitigate security and compliance risks</h5>
                    <p>Get alerts for vulnerabilities and then automate security fixes across your entire codebase.</p>
                </div>
                <div className="col-lg-6 text-center">
                    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                        <p>
                            At Criteo, developer happiness is our top priority-not just productivity. By providing them with the 
                            right tools, like Sourcegraph, we've found that increased productivity is a natural byproduct.
                        </p>
                        <footer className="blockquote-footer">
                            Francois Jehl, Senior Engineering Manager, Criteo
                        </footer>
                        <div className="d-flex justify-content-center my-4">
                            <img src="/external-logos/criteo-logo.svg" width="110px" alt="Criteo" />
                        </div>
                    </blockquote>
                    <Link to="/case-studies/criteo-tackles-big-code">
                        Criteo Tackles Big Code{' '}
                        <ArrowRightBoxIcon className="icon-inline ml-1" />
                    </Link>
                </div>
            </div>
        </ContentSection>

        <IntegrationsSection />

        {/* Social Proof */}
        <ContentSection>
            <div className="row justify-content-center pt-md-4">
                <div className="col-lg-12 text-center">
                    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                        <p>
                            [Sourcegraph] allows us to constantly monitor code that manages personal data, organization wide, 
                            before changes land in production.
                        </p>
                        <footer className="blockquote-footer">
                            Simon Law, Staff Software Engineer, Quantcast
                        </footer>
                        <div className="d-flex justify-content-center my-2">
                            <img src="/external-logos/quantcast-logo.svg" width="110px" alt="Quantcast" />
                        </div>
                        <Link to="/case-studies/quantcast-large-scale-refactoring/">
                            Quantcast adopts Sourcegraph for large-scale refactoring{' '}
                            <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </Link>
                    </blockquote>
                </div>
            </div>
        </ContentSection>

        <ContentSection>
            <h2 className="display-3 font-weight-bold mb-3">How developers are using Sourcegraph</h2>
            <div className="row">
                <div className="col-lg-6 container video-embed embed-responsive embed-responsive-16by9 border">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/Iye0yZVr1Ro?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder={0}
                        title="How developers are using Sourcegraph"
                    ></iframe>
                </div>
                <div className="col-lg-6">
                    <p>
                        Sourcegraph returns results in milliseconds, even across thousands of repositories, to help developers find:
                    </p>
                    <ul>
                        <li>
                            Examples of <a target="_blank" href="https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/+f:dockerfile+apt-get%7Capk&patternType=regexp">installing packages in a Dockerfile</a>
                        </li>
                        <li>
                            Places where a specific error is returned
                        </li>
                        <li>
                            Recent TypeScript changes mentioning auth
                        </li>
                        <li>
                            Definitions of a specific function
                        </li>
                    </ul>
                </div>
            </div>
        </ContentSection>

        <GetStarted className="bg-gradient-green-blue mt-6" />
    </Layout>
)

export default CodeSearchPage

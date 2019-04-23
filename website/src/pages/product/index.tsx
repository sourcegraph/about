import { Link } from 'gatsby'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import CityIcon from 'mdi-react/CityIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import OpenInAppIcon from 'mdi-react/OpenInAppIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import WebIcon from 'mdi-react/WebIcon'
import * as React from 'react'
import Layout from '../../components/Layout'
import { ServerVersionNumber } from '../../components/ServerVersionNumber'
import { eventLogger } from '../../EventLogger'

export default class ProductIndex extends React.Component<any, any> {
    private logSelectDockercommand(): void {
        const selection = document.getSelection().toString()
        if (selection.includes('docker run')) {
            eventLogger.trackInstallServerCommandHighlighted('/')
        }
    }

    public componentDidMount(): void {
        document.addEventListener('mouseup', this.logSelectDockercommand)
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mouseup', this.logSelectDockercommand)
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div className="product__server">
                    <div className="product__server__jumbotron bg-sprinkles">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col product__server__col-right">
                                    <div className="product__server__jumbo-col-text">
                                        <h3>Sourcegraph Server</h3>
                                        <h1>Build Better Software with Code Intelligence and Code Search</h1>
                                        <p className="mb-4">
                                            Sourcegraph is a free, self-hosted code search and intelligence server that
                                            helps developers find, review, understand, and debug code. Use it with any
                                            Git code host for teams from 1 to 10,000.&nbsp; Get started quickly:{' '}
                                            <a
                                                href="/docs"
                                                className="hero-link"
                                                onClick={this.trackDocsClickedAboveTheFold}
                                            >
                                                install the Sourcegraph docker image
                                            </a>{' '}
                                            on your private code.{' '}
                                            <Link to="/pricing" className="hero-link">
                                                Upgraded features start at $4/user/month
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="product__server__jumbo-col">
                                        <div className="product__server__jumbo-col-instructions">
                                            <p className="mb-0">
                                                <strong>Quickstart</strong>: Run this command, wait for the server to be
                                                ready, then visit&nbsp;
                                                <a href="http://localhost:7080">{'http://localhost:7080'}</a>.
                                            </p>
                                        </div>
                                        <div className="product__server__jumbo-col-command">
                                            <p className="mb-0 code pre-wrap" style={{ fontSize: '0.85rem' }}>
                                                docker run <span className="virtual-br" /> --publish 7080:7080 --rm
                                                <span className="virtual-br" /> -v
                                                ~/.sourcegraph/config:/etc/sourcegraph
                                                <span className="virtual-br" /> -v
                                                ~/.sourcegraph/data:/var/opt/sourcegraph
                                                <span className="virtual-br" /> -v
                                                /var/run/docker.sock:/var/run/docker.sock
                                                <span className="virtual-br" /> sourcegraph/server:
                                                <ServerVersionNumber />
                                                <span className="virtual-br" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="nav product__server__features-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link product__server__features-nav-link active product__server__features-nav--code-search"
                                to="#code-search"
                                onClick={this.navRowCodeSearchClicked}
                            >
                                <MagnifyIcon className="material-icons mb-1" size={32} />
                                Code Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link product__server__features-nav-link active product__server__features-nav--code-intelligence"
                                href="#code-intelligence"
                            >
                                <WebIcon className="material-icons mb-1" size={32} />
                                Code Intelligence
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link product__server__features-nav-link active product__server__features-nav--integrations"
                                to="#integrations"
                                onClick={this.navRowIntegrationsClicked}
                            >
                                <PowerPlugIcon className="material-icons mb-1" size={32} />
                                Integrations
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link product__server__features-nav-link active product__server__features-nav--data-center"
                                to="#data-center"
                                onClick={this.navRowDataCenterClicked}
                            >
                                <CityIcon className="material-icons mb-1" size={32} />
                                Data Center
                            </Link>
                        </li>
                    </ul>
                    <div className="product__server__feature-block product__server__feature-block--border-bottom border-bottom">
                        <div className="container v-prop__container">
                            <div className="row d-flex flex-row-reverse" id="code-search">
                                <div className="col-md-6">
                                    <img
                                        width="100%"
                                        src="https://images.ctfassets.net/le3mxztn6yoo/1pVAB22cRSqGCQsyiOgKM8/057eb0369d062e9c28579bf2942aa7e9/DiffSearchGif.gif"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="product__server__feature-block-big-icon product__server__feature-block-big-icon-code-search">
                                        <MagnifyIcon className="material-icons" />
                                    </div>
                                    <h3>Powerful, Instant Code Search</h3>
                                    <h1>Search All Your Private Code</h1>
                                    <p>
                                        Search in files and diffs on your private code using simple terms, regular
                                        expressions, and other filters.
                                    </p>
                                    <p>
                                        Syncs repositories with your code host and supports searching any commit/branch,
                                        with no indexing delay.
                                    </p>
                                    <div className="d-flex flex-wrap">
                                        <Link to="/docs" onClick={this.trackInstallSourcegraphServerCodeSearch}>
                                            <button
                                                className="btn btn-primary teal product__server__feature-block--btn"
                                                type="button"
                                            >
                                                <OpenInAppIcon className="material-icons" />
                                                Install Sourcegraph Server
                                            </button>
                                        </Link>
                                    </div>
                                    <p className="small product__server__feature-block-small">
                                        <Link to="/pricing" onClick={this.pricingClickedCodeSearch}>
                                            Free for unlimited users and repositories
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className="row product__server__feature-block-extra-row">
                                <div className="col product__server__feature-block-extra-row-col">
                                    <strong>Powerful, Flexible Queries</strong>
                                    <p>
                                        Use regular expressions and exact queries to perform full-text searches. Our
                                        robust query syntax helps you easily narrow your search.
                                    </p>
                                </div>
                                <div className="col product__server__feature-block-extra-row-col">
                                    <strong>Highly Scalable</strong>
                                    <p>
                                        Search across 1-10,000+ repositories (at large scale, the{' '}
                                        <a href="https://github.com/sourcegraph/deploy-sourcegraph">
                                            Data Center deployment
                                        </a>{' '}
                                        becomes necessary).
                                    </p>
                                </div>
                                <div className="col product__server__feature-block-extra-row-col">
                                    <strong>No Indexing Required</strong>
                                    <p>
                                        Your search results are always up-to-date. Search any branch or commit with no
                                        indexing delay.
                                    </p>
                                </div>
                                <div className="col product__server__feature-block-extra-row-col">
                                    <strong>Symbol and Commit Search</strong>
                                    <p>Search over symbols, commit diffs, and commit messages.</p>
                                </div>
                            </div>
                            <div className="row product__server__feature-block-extra-row">
                                <div className="col product__server__feature-block-extra-row-col">
                                    <div className="alert alert-secondary p-4 mb-0 d-flex" role="alert">
                                        <div className="icon mr-2">
                                            <svg style={{ width: '24px', height: '24px', viewBox: '0 0 24 24' }}>
                                                <path
                                                    fill="#000000"
                                                    d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                                                />
                                            </svg>
                                        </div>
                                        <span>
                                            A recently published{' '}
                                            <a
                                                className="link"
                                                href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                                                target="_blank"
                                            >
                                                research paper from Google
                                            </a>
                                            &nbsp;and a{' '}
                                            <a
                                                className="link"
                                                href="https://docs.google.com/document/d/1LQxLk4E3lrb3fIsVKlANu_pUjnILteoWMMNiJQmqNVU/edit#heading=h.xxziwxixfqq3"
                                                target="_blank"
                                            >
                                                Google developer survey
                                            </a>
                                            &nbsp;showed that 98% of developers consider their Sourcegraph-like internal
                                            code search tool to be critical. Developers use it on average for 5.3
                                            sessions each day, primarily to (in order of frequency): find example code,
                                            explore/read code, debug issues, and determine the impact of changes.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__server__feature-block product__server__feature-block--border-bottom border-bottom">
                        <div className="container v-prop">
                            <div className="row" id="code-intelligence">
                                <div className="col-md-6">
                                    <img
                                        width="100%"
                                        src="https://images.ctfassets.net/le3mxztn6yoo/5h679xU1pmMAmaG2q8Ye6s/0e54491e42ba0dc26e7ae4f95e1558e4/PRCodeIntelligence.gif"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="product__server__feature-block-big-icon product__server__feature-block-big-icon-code-intel">
                                        <WebIcon className="material-icons" />
                                    </div>
                                    <h3>Enhanced Code Browsing and Intelligence</h3>
                                    <h1>Hovers, Definitions, and References</h1>
                                    <p>
                                        Code intelligence makes browsing code easier, with IDE-like hovers,
                                        go-to-definition, and find-references on your code, powered by language servers
                                        based on the open-source Language Server Protocol.
                                    </p>
                                    <p>
                                        It even works in code review diffs on GitHub and Phabricator with our browser
                                        extensions.
                                    </p>
                                    <Link to="/docs" onClick={this.trackInstallSourcegraphServerCodeIntelligence}>
                                        <button
                                            className="btn btn-primary cyan product__server__feature-block--btn"
                                            type="button"
                                        >
                                            <OpenInAppIcon className="material-icons" />
                                            Install Sourcegraph Server
                                        </button>
                                    </Link>
                                    <p className="small product__server__feature-block-small">
                                        <Link to="/pricing" onClick={this.pricingClickedCodeIntelligence}>
                                            Starts at $4/user/month
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className="row product__server__feature-block-extra-row">
                                <div className="col product__server__feature-block-extra-row-col">
                                    <strong>Code Files and Diffs</strong>
                                    <p>
                                        See how your codebase changes over time in functions, classes, or areas of the
                                        codebase when debugging.
                                    </p>
                                </div>
                                <div className="col product__server__feature-block-extra-row-col">
                                    <strong>Speed Through Reviews</strong>
                                    <p>
                                        Use <Link to="/docs/integrations">integrations</Link> to help review code faster
                                        and makes it easier to drill down into the implementation.
                                    </p>
                                </div>
                                <div className="col product__server__feature-block-extra-row-col">
                                    <strong>Custom Tools and Integrations</strong>
                                    <p>
                                        Extend Sourcegraph in your environment by creating your own tools with the{' '}
                                        <Link to="/docs/features/api">Sourcegraph API</Link>.
                                    </p>
                                </div>
                            </div>
                            <div className="row product__server__feature-block-extra-row">
                                <div className="col product__server__feature-block-extra-row-col">
                                    <p>
                                        Code intelligence is powered by language servers based on the open-standard
                                        Language Server Protocol (published by Microsoft, with participation from
                                        Facebook, Google, Sourcegraph, GitHub, RedHat, Twitter, Salesforce, Eclipse, and
                                        others). Visit <a href="https://langserver.org">langserver.org</a> to learn more
                                        about the Language Server Protocol, find the latest support for your favorite
                                        language, and get involved.
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__server__feature-block">
                        <div className="container v-prop__container">
                            <div className="row" id="integrations">
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <div className="product__server__feature-block-big-icon product__server__feature-block-big-icon-integrations">
                                        <PowerPlugIcon className="material-icons" />
                                    </div>
                                    <h1>Integrations</h1>
                                    <p>
                                        Connect your Sourcegraph instance with your existing tools. Get code
                                        intelligence while browsing code on the web, and code search from your editor.
                                    </p>
                                    <div>
                                        <div className="integrations__row" style={{ padding: '1rem 0' }}>
                                            <div className="h3 mr-0 mr-sm-3">Browser Extensions:</div>
                                            <div className="btn-group" role="group" id="integrations-btns">
                                                <a
                                                    className="btn btn-outline-primary align-items-center"
                                                    role="button"
                                                    href="https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack"
                                                >
                                                    <img src="/integrations/chrome.svg" />
                                                    Chrome
                                                    <ChevronRightIcon className="material-icons ml-2" />
                                                </a>

                                                <a
                                                    className="btn btn-outline-primary align-items-center"
                                                    role="button"
                                                    href="https://addons.mozilla.org/en-US/firefox/addon/sourcegraph/"
                                                >
                                                    <img src="/integrations/firefox.svg" />
                                                    Firefox
                                                    <ChevronRightIcon className="material-icons ml-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h3 mr-0 mr-sm-3">Editor Extensions:</div>
                                            <div className="btn-group" role="group" id="integrations-btns">
                                                <a
                                                    className="btn btn-outline-primary align-items-center"
                                                    role="button"
                                                    href="https://marketplace.visualstudio.com/items?itemName=sourcegraph.sourcegraph"
                                                >
                                                    <img src="/integrations/vscode.svg" />
                                                    VS Code
                                                    <ChevronRightIcon className="material-icons ml-2" />
                                                </a>
                                                <a
                                                    className="btn btn-outline-primary align-items-center"
                                                    role="button"
                                                    href="https://atom.io/packages/sourcegraph"
                                                >
                                                    <img src="/integrations/atom.svg" />
                                                    Atom
                                                    <ChevronRightIcon className="material-icons ml-2" />
                                                </a>
                                                <a
                                                    className="btn btn-outline-primary align-items-center"
                                                    role="button"
                                                    href="https://github.com/sourcegraph/sourcegraph-sublime"
                                                >
                                                    <img src="/integrations/sublime.svg" />
                                                    Sublime Text
                                                    <ChevronRightIcon className="material-icons ml-2" />
                                                </a>
                                                <a
                                                    href="https://plugins.jetbrains.com/plugin/9682-sourcegraph"
                                                    className="btn btn-outline-primary align-items-center"
                                                    role="button"
                                                >
                                                    <img src="/integrations/jetbrains.svg" />
                                                    IntelliJ
                                                    <ChevronRightIcon className="material-icons ml-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__server__feature-block light-11-bg">
                        <div className="container v-prop__container">
                            <div className="row" id="data-center">
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <div>
                                        <div className="row">
                                            <div className="col product__server__deploy-text">
                                                <h3>Sourcegraph Data Center</h3>
                                                <h1>Upgrade Your Deployment to Scale Endlessly</h1>
                                                <p>
                                                    As you grow to hundreds or thousands of users and repositories,
                                                    upgrade from the single-server deployment to a highly scalable
                                                    cluster with Sourcegraph Data Center.
                                                </p>
                                            </div>
                                            <div className="col product__server__deploy-card product__server__deploy-card-hover">
                                                <div className="d-flex align-items-center">
                                                    <CityIcon className="material-icons" size={32} />
                                                    <h2 className="ml-2">Sourcegraph Data Center</h2>
                                                </div>
                                                <ul>
                                                    <li>Cluster deployment using Kubernetes</li>
                                                    <li>Scales to Thousands of Repositories and Users</li>
                                                    <li>High Availability</li>
                                                    <li>Cluster Monitoring</li>
                                                </ul>
                                                <div className="d-flex">
                                                    <a
                                                        href="https://github.com/sourcegraph/deploy-sourcegraph#readme"
                                                        target="_blank"
                                                        className="btn btn-primary violet product__server__deploy-card-btn"
                                                        onClick={this.trackInstallDataCenter}
                                                        style={{ marginLeft: '2.5rem' }}
                                                    >
                                                        <OpenInAppIcon
                                                            className="material-icons"
                                                            style={{ marginBottom: '0' }}
                                                        />
                                                        Install Trial
                                                    </a>
                                                    <Link
                                                        to="/contact/sales/"
                                                        onClick={this.trackContactUsClickedDataCenter}
                                                    >
                                                        <button
                                                            className="btn violet product__server__deploy-card-btn"
                                                            type="button"
                                                            style={{ marginLeft: '1rem' }}
                                                        >
                                                            Buy
                                                        </button>
                                                    </Link>
                                                </div>
                                                <p className="small product__server__deploy-card-small">
                                                    <Link to="/pricing" onClick={this.pricingClickedDataCenter}>
                                                        Starts at $4/user/month
                                                    </Link>
                                                    .
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
    private trackDocsClickedAboveTheFold = () => {
        eventLogger.trackDocumentationCTAClicked('Homepage')
    }
    private trackInstallSourcegraphServerCodeSearch = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('HomepageCodeSearch')
    }
    private trackInstallSourcegraphServerCodeIntelligence = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('HomepageCodeIntelligence')
    }
    private trackInstallSourcegraphServerSavedSearches = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('HomepageSavedSearches')
    }
    private trackInstallSourcegraphServer = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('HomepageServer')
    }
    private trackInstallDataCenter = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('HomepageDataCenter')
    }
    private navRowCodeSearchClicked = () => {
        eventLogger.trackHompageNavRowButtonClicked('CodeSearch')
    }
    private navRowCodeIntelligenceClicked = () => {
        eventLogger.trackHompageNavRowButtonClicked('CodeIntelligence')
    }
    private navRowSavedQueriesClicked = () => {
        eventLogger.trackHompageNavRowButtonClicked('SavedQueries')
    }
    private navRowIntegrationsClicked = () => {
        eventLogger.trackHompageNavRowButtonClicked('Integrations')
    }
    private navRowDataCenterClicked = () => {
        eventLogger.trackHompageNavRowButtonClicked('DataCenter')
    }
    private trackContactUsClickedDataCenter = () => {
        eventLogger.trackContactUsCTAClicked('HomepageDataCenter')
    }
    private searchPublicCodeClicked = () => {
        eventLogger.trackSearchPublicCodeClicked('Homepage')
    }
    private tryCodeIntelligenceClicked = () => {
        eventLogger.tryCodeIntelligenceClicked('Homepage')
    }
    private pricingClicked = () => {
        eventLogger.trackPricingClicked('Homepage')
    }
    private pricingClickedCodeIntelligence = () => {
        eventLogger.trackPricingClicked('HomepageCodeIntelligence')
    }
    private pricingClickedCodeSearch = () => {
        eventLogger.trackPricingClicked('HomepageCodeSearch-Free')
    }
    private pricingClickedSavedQueries = () => {
        eventLogger.trackPricingClicked('HomepageSavedQueries')
    }
    private pricingClickedDataCenter = () => {
        eventLogger.trackPricingClicked('HomepageDataCenter')
    }
    private pricingClickedDataCenterFree = () => {
        eventLogger.trackPricingClicked('HomepageDataCenter-Free')
    }
}

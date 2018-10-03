import Link from 'gatsby-link'
import { LockIcon, OpenInAppIcon, StopwatchIcon, WebIcon } from 'mdi-react'
import * as React from 'react'
import Helmet from 'react-helmet'
import { eventLogger } from '../../EventLogger'
import { BrowserInstallButtons } from '../../components/BrowserInstallButtons'

export default class BrowserExtension extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <div>
                <Helmet>
                    <title>Sourcegraph for your browser</title>
                    <meta name="twitter:title" content="Sourcegraph for your browser" />
                    <meta property="og:title" content="Sourcegraph for your browser" />
                    <meta
                        name="twitter:description"
                        content="Sourcegraph is always free for public and open-source code. Start using it on your code host."
                    />
                    <meta
                        property="og:description"
                        content="Sourcegraph is always free for public and open-source code. Start using it on your code host."
                    />
                    <meta
                        name="description"
                        content="Sourcegraph is always free for public and open-source code. Start using it on your code host."
                    />
                    <link rel="icon" type="image/png" href="https://about.sourcegraph.com/favicon.png" />
                </Helmet>
                <div>
                    <div className="jumbotron text-center light-11-bg">
                        <h1>Sourcegraph for your browser</h1>
                        <p>An IDE-like experience in your code host.</p>
                    </div>
                    <div className="home__feature-block home__feature-block--border-bottom border-bottom">
                        <div className="container v-prop__container">
                            <div className="row py-4 d-flex flex-row-reverse">
                                <div className="col-md-6">
                                    <img width="100%" src="/products/code-intelligence/GitHubCodeIntelligence.png" />
                                </div>
                                <div className="col-md-6">
                                    <div className="home__feature-block-big-icon home__feature-block-big-icon-code-search">
                                        <StopwatchIcon className="material-icons" />
                                    </div>
                                    <h1>Get started in minutes.</h1>
                                    <p className="mb-3">
                                        Sourcegraph adds code intelligence to your code host in seconds.
                                    </p>
                                    <p className="mb-3">
                                        By default, the extension will add code intelligence and code search to public
                                        repositories on GitHub.com.
                                    </p>
                                    <p className="mb-3">
                                        The extension can be configured to work on private code by connecting it to a
                                        Sourcegraph instance that has code intelligence.
                                    </p>
                                    <BrowserInstallButtons />
                                    <p className="small home__feature-block-small">
                                        <Link to="/docs/features/browser-extension/configuration">
                                            Extension documentation
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className="row py-4">
                                <div className="col-md-6">
                                    <div className="browser__card card card-body">
                                        <div className="browser__card-list">
                                            <div className="browser__card-list-heading">
                                                <h5>Supported Code hosts</h5>
                                            </div>
                                            <div className="home__customer-logos">
                                                <div className="row justify-content-around pt-4">
                                                    <img
                                                        className="home__customer-logos-image"
                                                        src="/external-logos/github-horizontal-logo.svg"
                                                        alt="GitHub"
                                                    />
                                                    <img
                                                        className="home__customer-logos-image"
                                                        src="/external-logos/github-enterprise-logo.svg"
                                                        alt="GitHub Enterprise"
                                                    />
                                                    <img
                                                        className="home__customer-logos-image"
                                                        src="/external-logos/phabricator-logo.svg"
                                                        alt="Phabricator"
                                                    />
                                                    <img
                                                        className="home__customer-logos-image"
                                                        src="/external-logos/bitbucket-logo.svg"
                                                        alt="Bitbucket Server"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <p>
                                                    <strong>Coming soon...</strong>
                                                </p>
                                            </div>
                                            <div className="home__customer-logos">
                                                <div className="row justify-content-around">
                                                    <img
                                                        className="home__customer-logos-image"
                                                        src="/external-logos/gitlab-logo.svg"
                                                        alt="GitLab"
                                                    />
                                                    <img
                                                        className="home__customer-logos-image"
                                                        src="/external-logos/review-board-logo.svg"
                                                        alt="Review Board"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="home__feature-block-big-icon home__feature-block-big-icon-code-intel">
                                        <WebIcon className="material-icons" />
                                    </div>
                                    <h1>Code intelligence is everywhere you need it.</h1>
                                    <p>
                                        Code intelligence makes browsing code files and diffs easier on your code host
                                        with IDE-like hovers, go-to-definition, and find-references on your code,
                                        powered by language servers based on the open-source Language Server Protocol.
                                    </p>
                                    <BrowserInstallButtons />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="home__feature-block-big-icon home__feature-block-big-icon-integrations">
                                        <LockIcon className="material-icons" />
                                    </div>
                                    <h1>Get code intelligence on private code.</h1>
                                    <p>Install Sourcegraph to get code intelligence on private repositories.</p>
                                    <Link to="/docs">
                                        <button
                                            onClick={this.trackInstallSourcegraphServerClicked}
                                            className="btn btn-primary cyan home__feature-block--btn"
                                            type="button"
                                        >
                                            <OpenInAppIcon className="material-icons" />
                                            Install Sourcegraph
                                        </button>
                                    </Link>
                                    <p className="small home__feature-block-small">
                                        <Link to="/pricing">Starts at $5/user/month</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private trackInstallSourcegraphServerClicked = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('Browser')
    }
    private trackInstallBrowserExtension = () => {
        eventLogger.trackInstallBrowserExtensionCTAClicked('Browser')
    }
}

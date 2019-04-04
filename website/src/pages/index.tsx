import { Link } from 'gatsby'
import ChatIcon from 'mdi-react/ChatIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import OpenInAppIcon from 'mdi-react/OpenInAppIcon'
import ReplyIcon from 'mdi-react/ReplyIcon'
import ServerIcon from 'mdi-react/ServerIcon'
import SyncIcon from 'mdi-react/SyncIcon'
import WebIcon from 'mdi-react/WebIcon'
import * as React from 'react'
import { BrowserInstallButtons, CHROME_STORE_URL, FIREFOX_STORE_URL } from '../components/BrowserInstallButtons'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import { eventLogger } from '../EventLogger'

export default class Index extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div className="home">
                    <div className="home__jumbotron bg-sprinkles">
                        <div className="container v-prop__container mt-4">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-5">
                                    <h1>Build better software</h1>
                                    <p>
                                        Sourcegraph is a fast, solid, full-featured code navigation engine. Get
                                        cross-repository code intelligence, including:
                                    </p>
                                    <div className="py-2">
                                        <a
                                            className="hero-link"
                                            href="https://sourcegraph.com/search?q=repo:ethereum/ethash+buf.*size"
                                        >
                                            <div className="d-flex align-items-center pb-2">
                                                <MagnifyIcon className="material-icons" size={24} />
                                                <span className="pl-1">Advanced code search</span>
                                            </div>
                                        </a>
                                        <a
                                            className="hero-link"
                                            href="https://sourcegraph.com/github.com/kubernetes/apiserver/-/blob/pkg/authentication/user/user.go#L20:6"
                                        >
                                            <div className="d-flex align-items-center pb-2">
                                                <ChatIcon className="material-icons" size={24} />
                                                <span className="pl-1">Hover tooltips</span>
                                            </div>
                                        </a>
                                        <a
                                            className="hero-link"
                                            href="https://sourcegraph.com/github.com/golang/go/-/blob/src/archive/tar/common.go#L52:13"
                                        >
                                            <div className="d-flex align-items-center pb-2">
                                                <ReplyIcon className="material-icons" size={24} />
                                                <span className="pl-1">Jump-to-definition</span>
                                            </div>
                                        </a>
                                        <a
                                            className="hero-link"
                                            href="https://sourcegraph.com/github.com/golang/go/-/blob/src/archive/tar/common.go#L52:13&tab=references"
                                        >
                                            <div className="d-flex align-items-center pb-2">
                                                <MagnifyIcon className="material-icons" size={24} />
                                                <span className="pl-1">Find references</span>
                                            </div>
                                        </a>
                                    </div>
                                    <BrowserInstallButtons />
                                </div>
                                <div className="col-md-7 d-md-n d-sm-n">
                                    <img width="100%" src="/products/code-intelligence/GitHubCodeIntelligence.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__feature-block border-bottom py-2">
                        <div className="container v-prop__container">
                            <div className="row" id="data-center">
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-6 home__deploy-card">
                                                <div className="d-flex">
                                                    <WebIcon className="material-icons" size={32} />
                                                    <h2 className="ml-2">For yourself</h2>
                                                </div>
                                                <p>
                                                    Hover tooltips, go-to-definition, and find-references on GitHub,
                                                    Phabricator, and Bitbucket Server.
                                                </p>
                                                <div className="py-2 d-flex flex-wrap">
                                                    <div className="btn-group">
                                                        {
                                                            <Link
                                                                to="/product/browser"
                                                                onClick={
                                                                    this.trackInstallSourcegraphServerCodeIntelligence
                                                                }
                                                            >
                                                                <button className="btn btn-secondary" type="button">
                                                                    <OpenInAppIcon
                                                                        className="material-icons"
                                                                        style={{ marginBottom: '0' }}
                                                                    />
                                                                    Install
                                                                </button>
                                                            </Link>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 home__deploy-card">
                                                <div className="d-flex align-items-center">
                                                    <ServerIcon className="material-icons" size={32} />
                                                    <h2 className="ml-2">For your team</h2>
                                                </div>
                                                <p>
                                                    Advanced search and intelligence on a private instance for all your
                                                    repositories.
                                                </p>
                                                <div className="py-2 d-flex flex-wrap">
                                                    <div className="btn-group">
                                                        <a
                                                            href="https://docs.sourcegraph.com/admin/install/docker"
                                                            onClick={this.trackInstallSourcegraphServerCodeIntelligence}
                                                        >
                                                            <button className="btn btn-secondary" type="button">
                                                                <OpenInAppIcon
                                                                    className="material-icons"
                                                                    style={{ marginBottom: '0' }}
                                                                />
                                                                Deploy
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__feature-block border-bottom py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 home__deploy-card" id="search-datacenter">
                                    <div className="home__deploy-card-detail">
                                        <div className="icon">
                                            <figure className="search-icon" />
                                        </div>
                                        <div className="copy">
                                            <h2>Powerful, instant code search</h2>
                                            <p>
                                                Search in files and diffs in your code using simple terms, regular
                                                expressions, and other filters. Syncs repositories with your code host
                                                and supports searching any commit/branch, with no indexing delay.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="home__deploy-card-detail">
                                        <div className="icon">
                                            <figure className="dc-icon" />
                                        </div>
                                        <div className="copy">
                                            <h2>Enterprise</h2>
                                            <p>
                                                As you grow to hundreds or thousands of users and repositories, graduate
                                                from the single-server deployment to a highly scalable cluster with
                                                Sourcegraph Enterprise.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 home__deploy-card" id="intelligence-integrations">
                                    <div className="home__deploy-card-detail">
                                        <div className="icon">
                                            <figure className="ci-icon" />
                                        </div>
                                        <div className="copy">
                                            <h2>Code intelligence</h2>
                                            <p>
                                                Code intelligence makes browsing code easier, with IDE-like hovers,
                                                go-to-definition, and find-references on your code, powered by language
                                                servers based on the open-source Language Server Protocol.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="home__deploy-card-detail">
                                        <div className="icon">
                                            <figure className="int-icon" />
                                        </div>
                                        <div className="copy">
                                            <h2>Integrations</h2>
                                            <p>
                                                Take your workflow to the next level. Search code from your editor, and
                                                get code intelligence while browsing code on the web in GitHub and
                                                Phabricator.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__customer-block">
                        <div className="container">
                            <h2 className="text-center">Powering developers at</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home__customer-logos">
                                        <div className="row justify-content-around">
                                            <img
                                                className="home__customer-logos-image"
                                                src="/external-logos/lyft-logo.svg"
                                                alt="Lyft"
                                            />
                                            <img
                                                className="home__customer-logos-image"
                                                src="/external-logos/sg-improbable.svg"
                                                alt="Improbable"
                                            />
                                            <img
                                                className="home__customer-logos-image"
                                                src="/external-logos/cloudflare-logo.svg"
                                                alt="Cloudflare"
                                            />
                                            <img
                                                className="home__customer-logos-image"
                                                src="/external-logos/plaid-logo.svg"
                                                alt="Plaid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-center">...and more teams operating at massive scale.</h3>
                            <Testimonials />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
    private trackInstallSourcegraphServerCodeIntelligence = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('Homepage')
    }
    private pricingClickedDataCenter = () => {
        eventLogger.trackPricingClicked('HomepageDataCenter')
    }
}

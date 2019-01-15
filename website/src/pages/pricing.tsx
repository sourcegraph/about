import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { eventLogger } from '../EventLogger'

export default class Pricing extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <div>
                    <Helmet>
                        <title>Sourcegraph - Pricing</title>
                        <meta name="twitter:title" content="Sourcegraph - Pricing" />
                        <meta property="og:title" content="Sourcegraph - Pricing" />
                        <meta
                            name="twitter:description"
                            content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                        />
                        <meta
                            property="og:description"
                            content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                        />
                        <meta
                            name="description"
                            content="Sourcegraph is always free for public and open-source code. Start using it for private code with a paid plan."
                        />
                        <link rel="icon" type="image/png" href="https://about.sourcegraph.com/favicon.png" />
                    </Helmet>
                    <div className="pricing-bg" />
                    <div>
                        <div className="pricing">
                            <div className="hero-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h2>Sourcegraph pricing</h2>
                                            <h1>Open. For business.</h1>
                                            <p>
                                                Sourcegraph is open source and ready to use for teams of all sizes. You
                                                can get started by deploying a private Sourcegraph Core instance for
                                                free, or view our code on GitHub.
                                            </p>
                                            <a
                                                className="btn btn-deploy"
                                                role="button"
                                                href="https://docs.sourcegraph.com"
                                                onClick={this.trackInstallSourcegraphServerClicked}
                                            >
                                                Deploy Sourcegraph
                                            </a>
                                            <a
                                                className="btn btn-github"
                                                role="button"
                                                href="https://github.com/sourcegraph/sourcegraph/"
                                            >
                                                View on GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container pricing-section">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 pricing-card-col">
                                        <div className="pricing__card card card-body">
                                            <div className="pricing__card-list">
                                                <div className="pricing__card-list-heading">
                                                    <h1>Core</h1>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 user-pricing">
                                                        <h2>Free</h2>
                                                        <h3>for 200 users</h3>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 features">
                                                        <a href="#deployment">
                                                            <p>Self-hosted or cloud-managed</p>
                                                        </a>
                                                        <a href="#search">
                                                            <p>Code search</p>
                                                        </a>
                                                        <a href="#intelligence">
                                                            <p>Code intelligence</p>
                                                        </a>
                                                        <a href="#browsing">
                                                            <p>Code browsing</p>
                                                        </a>
                                                        <a href="#extensions">
                                                            <p>Sourcegraph extensions</p>
                                                        </a>
                                                        <a href="#integrations">
                                                            <p>Code host and editor integrations</p>
                                                        </a>
                                                        <a href="#admin">
                                                            <p>Single sign-on (SSO) support</p>
                                                        </a>
                                                        <a href="#admin">
                                                            <p>200 user limit</p>
                                                        </a>
                                                        <a href="#search">
                                                            <p>Support on our public issue tracker</p>
                                                            <br/>
                                                        </a>
                                                    </div>
                                                    <div className="col-12 contact">
                                                        <a
                                                            className="btn btn-pricing btn-lg justify-content-center text-center"
                                                            role="button"
                                                            href="/docs"
                                                            onClick={this.trackInstallSourcegraphServerClicked}
                                                        >
                                                            Deploy
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 pricing-card-col">
                                        <div className="pricing__card card card-body">
                                            <div className="pricing__card-list">
                                                <div className="pricing__card-list-heading">
                                                    <h1>Enterprise</h1>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 user-pricing">
                                                        <h2>$19</h2>
                                                        <h3>/user /month</h3>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 features">
                                                        <a href="#deployment">
                                                            <p>Self-hosted or cloud-managed</p>
                                                        </a>
                                                        <a href="#admin">
                                                            <p>High-scale cluster deployment</p>
                                                        </a>
                                                        <a href="#admin">
                                                            <p>Repository-level user permissions</p>
                                                        </a>
                                                        <a href="#admin">
                                                            <p>Advanced logging</p>
                                                        </a>
                                                        <a href="#admin">
                                                            <p>External database support</p>
                                                        </a>
                                                        <a href="#extensions">
                                                            <p>
                                                                Private Sourcegraph extension <br />
                                                                registry
                                                            </p>
                                                        </a>
                                                        <a href="#support">
                                                            <p>Premium support</p>
                                                        </a>
                                                        <p>&nbsp;</p>
                                                        <p>&nbsp;</p>
                                                    </div>
                                                    <div className="col-12 contact">
                                                        <Link
                                                            className="btn btn-pricing btn-lg justify-content-center text-center"
                                                            role="button"
                                                            to="/contact/sales/"
                                                            onClick={this.trackBuyEnterpriseButtonClicked}
                                                        >
                                                            Free trial
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-9 lg-12 pricing-true-up-notice">
                                        If you exceed your licensed users over the term of your subscription,
                                        Sourcegraph will true up your license at your next renewal. Learn more about{' '}
                                        <a href="https://docs.sourcegraph.com/admin/subscriptions#true-up-pricing">
                                            Sourcegraph's true-up pricing model
                                        </a>
                                        .
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h1>Sourcegraph feature comparison</h1>
                                    </div>
                                </div>
                                <div className="row feature-table-header">
                                    <div className="col-8">
                                        <h4>Feature</h4>
                                    </div>
                                    <div className="col-2">
                                        <h4>Core</h4>
                                    </div>
                                    <div className="col-2">
                                        <h4>Enterprise</h4>
                                    </div>
                                </div>
                                <div className="table-section">
                                    <div id="search" className="row feature-table-row">
                                        <div className="col-8 feature-title">Code search</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Full-text search across all repositories
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Search any commit or branch (hybrid real-time and indexed search)
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">Regular expression queries</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">Smart search filters</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Search within diffs and commit messages
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Saved searches, with email and Slack notifications
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="intelligence" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            Code intelligence for all languages (
                                            <a
                                                href="https://docs.sourcegraph.com/extensions/language_servers"
                                                target="_blank"
                                            >
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">Within a repository</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">Cross-repository</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="browsing" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">Code browsing</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="extensions" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">Sourcegraph Extensions</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Instantly deploy company-wide in code reviews via G Suite
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Private registry for Sourcegraph extensions
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">Whitelist Sourcegraph extensions</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="integrations" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            <a href="https://docs.sourcegraph.com/integration" target="_blank">
                                                Browser, code host, and editor integrations
                                            </a>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Instantly deploy company-wide via G Suite (
                                            <a
                                                href="https://docs.sourcegraph.com/integration/google_gsuite"
                                                target="_blank"
                                            >
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="deployment" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            On-premises deployment (
                                            <a
                                                href="https://docs.sourcegraph.com/"
                                                target="_blank"
                                                onClick={this.trackInstallSourcegraphServerClicked}
                                            >
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            Managed deployment option (
                                            <a
                                                href="/contact/sales"
                                                target="_blank"
                                                onClick={this.trackContactUsButtonClicked}
                                            >
                                                contact us
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            High-scale cluster deployment option (
                                            <a
                                                href="https://docs.sourcegraph.com/admin/install/cluster"
                                                target="_blank"
                                            >
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="support" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            <a href="https://github.com/sourcegraph/sourcegraph/issues" target="_blank">
                                                Public issue tracker
                                            </a>{' '}
                                            support
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">Premium support</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="admin" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">Unlimited user accounts</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            Single sign-on (SSO) support (
                                            <a href="https://docs.sourcegraph.com/admin/auth" target="_blank">
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            SSO Groups —<i> coming soon</i>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            Repository ACLs from GitHub and GitLab
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            External database (
                                            <a
                                                href="https://docs.sourcegraph.com/admin/external_database"
                                                target="_blank"
                                            >
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">Custom certificate authority</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            Webhooks for repository updates (
                                            <a href="https://docs.sourcegraph.com/user/repo/webhooks" target="_blank">
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">
                                            Logging and monitoring for your Sourcegraph instance (
                                            <a
                                                href="https://docs.sourcegraph.com/admin/monitoring-and-tracing"
                                                target="_blank"
                                            >
                                                learn more
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">Prometheus integration and dashboards</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">Sentry integration</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">OpenTracing integration</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-8 feature-title">
                                            User access audit logs —<i> coming soon</i>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-8 feature-title">Backups and recovery</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row cta-row">
                                    <div className="col-12 contact-row">
                                        <a
                                            className="btn btn-primary"
                                            role="button"
                                            href="/docs"
                                            onClick={this.trackInstallSourcegraphServerClicked}
                                        >
                                            Deploy Sourcegraph
                                        </a>
                                        <a
                                            className="btn btn-secondary"
                                            role="button"
                                            href="/contact/sales"
                                            onClick={this.trackContactUsButtonClicked}
                                        >
                                            Contact us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    private trackInstallSourcegraphServerClicked = () => {
        eventLogger.trackContactUsCTAClicked('PricingPage')
    }
    private trackBuyEnterpriseStarterButtonClicked = () => {
        eventLogger.trackBuyEnterpriseStarterButtonClicked()
    }
    private trackBuyEnterpriseButtonClicked = () => {
        eventLogger.trackBuyEnterpriseButtonClicked()
    }
    private trackContactUsButtonClicked = () => {
        eventLogger.trackContactUsCTAClicked('PricingPage')
    }
}

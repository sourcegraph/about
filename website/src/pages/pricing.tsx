import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { eventLogger } from '../EventLogger'
import { PricingPlan } from './pricing/PricingPlan'

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
                                                free, or build from source from our GitHub repository.
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
                                <div className="row no-gutters">
                                    <div className="col-lg-3">
                                        <PricingPlan
                                            name="Core"
                                            description="Helping developers search and browse their code."
                                            price="$0"
                                            priceSubtitle="individuals & small teams TODO!(sqs) 20-users"
                                            features={[
                                                { name: 'Self-hosted', id: 'deployment' },
                                                { name: 'Code search', id: 'search' },
                                                { name: 'Code intelligence', id: 'intelligence' },
                                                { name: 'Code browsing', id: 'browsing' },
                                                { name: 'Sourcegraph extensions', id: 'extensions' },
                                                { name: 'Code host and editor integrations', id: 'integrations' },
                                                { name: 'Single sign-on (SSO) support', id: 'admin' },
                                                { name: 'Community support', id: 'support' },
                                            ]}
                                            buttonLabel="Install"
                                            buttonOnClick={this.trackInstallSourcegraphServerClicked}
                                            buttonHref="https://docs.sourcegraph.com/#quickstart"
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <PricingPlan
                                            name="Starter"
                                            description="Speeding up the software development cycle and incident response."
                                            price="$19"
                                            priceSubtitle="/user/month"
                                            features={[
                                                { name: 'Self-hosted or cloud-managed', id: 'deployment' },
                                                { name: 'High-scale cluster deployment', id: 'deployment' },
                                                { name: 'Repository-level user permissions', id: 'admin' },
                                                { name: 'Advanced logging', id: 'admin' },
                                                { name: 'External database support', id: 'admin' },
                                                { name: 'Private Sourcegraph extension registry', id: 'extensions' },
                                                { name: 'Premium support', id: 'support' },
                                            ]}
                                            buttonLabel="Free trial"
                                            buttonOnClick={this.trackBuyEnterpriseButtonClicked}
                                            buttonHref="/contact/sales"
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <PricingPlan
                                            name="Enterprise"
                                            description="Enabling ."
                                            price="$19"
                                            priceSubtitle="/user/month"
                                            features={[
                                                { name: 'Self-hosted or cloud-managed', id: 'deployment' },
                                                { name: 'High-scale cluster deployment', id: 'deployment' },
                                                { name: 'Repository-level user permissions', id: 'admin' },
                                                { name: 'Advanced logging', id: 'admin' },
                                                { name: 'External database support', id: 'admin' },
                                                { name: 'Private Sourcegraph extension registry', id: 'extensions' },
                                                { name: 'Premium support', id: 'support' },
                                            ]}
                                            buttonLabel="Free trial"
                                            buttonOnClick={this.trackBuyEnterpriseButtonClicked}
                                            buttonHref="/contact/sales"
                                        />
                                    </div>
                                    <div className="col-lg-3">
                                        <PricingPlan
                                            name="Unlimited"
                                            description="Helping developers search and browse their code."
                                            price="$99"
                                            priceSubtitle="/user/month"
                                            features={[
                                                { name: 'Unlimited guest users', id: 'admin' },
                                                { name: 'Management reporting', id: 'admin' },
                                                { name: 'Access logs and security audits', id: 'admin' },
                                                { name: 'License compliance analysis', id: 'extensions' },
                                                { name: 'Security and custom code analysis', id: 'extensions' },
                                                { name: 'Custom integrations', id: 'integrations' },
                                                { name: 'Dedicated support', id: 'support' },
                                            ]}
                                            buttonLabel="Contact us"
                                            buttonOnClick={this.trackBuyUnlimitedButtonClicked}
                                            buttonHref="/contact/sales"
                                        />
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
                                    <div className="col-6">
                                        <h4>Feature</h4>
                                    </div>
                                    <div className="col-2">
                                        <h4>Core</h4>
                                    </div>
                                    <div className="col-2">
                                        <h4>Enterprise</h4>
                                    </div>
                                    <div className="col-2">
                                        <h4>Unlimited</h4>
                                        {/* TODO!(sqs) */}
                                    </div>
                                </div>
                                <div className="table-section">
                                    <div id="search" className="row feature-table-row">
                                        <div className="col-6 feature-title">Code search</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Full-text search across all repositories
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Search any commit or branch (hybrid real-time and indexed search)
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Regular expression queries</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Smart search filters</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Search within diffs and commit messages
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Saved searches, with email and Slack notifications
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
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
                                        <div className="col-6 feature-title">
                                            Code intelligence for all languages (
                                            <a href="https://docs.sourcegraph.com/extensions" target="_blank">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Within a repository</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Cross-repository</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="browsing" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">Code browsing</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
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
                                        <div className="col-6 feature-title">Sourcegraph extensions</div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Instantly deploy company-wide in code reviews via G Suite
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Private registry for Sourcegraph extensions
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Whitelist Sourcegraph extensions</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
                                            License compliance analysis —<i> coming soon</i>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">Custom code analysis</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
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
                                        <div className="col-6 feature-title">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Custom system and tool integrations</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
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
                                        <div className="col-6 feature-title">
                                            Self-hosted (on-premises) deployment (
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
                                            Cloud-managed deployment option (
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                </div>
                                <div id="support" className="table-section">
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
                                            Community support (
                                            <a href="https://github.com/sourcegraph/sourcegraph/issues" target="_blank">
                                                public issue tracker
                                            </a>
                                            )
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">Premium support</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">Dedicated support, with custom SLA</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
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
                                        <div className="col-6 feature-title">Unlimited user accounts</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            SSO groups — <i>coming soon</i>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Repository permissions from GitHub and GitLab (
                                            <a
                                                href="https://docs.sourcegraph.com/admin/repo/permissions"
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">Custom certificate authority</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
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
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Prometheus integration and dashboards</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">Sentry integration</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">OpenTracing integration</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            User access audit logs —<i> coming soon</i>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row indent-row">
                                        <div className="col-6 feature-title">
                                            Unlimited access logs and security audit dashboard —<i> coming soon</i>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">Backups and recovery</div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                        <div className="col-2">
                                            <div className="table-check" />
                                        </div>
                                    </div>
                                    <div className="row feature-table-row">
                                        <div className="col-6 feature-title">
                                            Team metrics and dashboards for managers and executives —<i> coming soon</i>
                                        </div>
                                        <div className="col-2">
                                            <div className="table-blank" />
                                        </div>
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
    private trackBuyUnlimitedButtonClicked = () => {
        eventLogger.trackBuyUnlimitedButtonClicked()
    }
    private trackBuyEnterpriseButtonClicked = () => {
        eventLogger.trackBuyEnterpriseButtonClicked()
    }
    private trackContactUsButtonClicked = () => {
        eventLogger.trackContactUsCTAClicked('PricingPage')
    }
}

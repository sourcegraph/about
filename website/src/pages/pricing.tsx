import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { eventLogger } from '../EventLogger'
import { PricingPlan } from './pricing/PricingPlan'

export default class Pricing extends React.Component<any, any> {
    public render(): JSX.Element | null {
        const isSelfManaged = this.props.location.hash !== '#sourcegraph-com'

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
                            <ul className="nav nav-pills justify-content-center mt-5">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#self-managed">
                                        Self-managed
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link border rounded ml-2 bg-light" href="#sourcegraph-com">
                                        Sourcegraph.com (cloud-hosted)
                                    </a>
                                </li>
                            </ul>
                            <div className="hero-section text-center my-4 py-4">
                                <h2>Try Sourcegraph Ultimate risk-free for 30 days</h2>
                                <a
                                    className="btn btn-github"
                                    href="/contact/sales"
                                    onClick={this.trackContactUsButtonClicked}
                                >
                                    Free trial
                                </a>
                            </div>
                            <div className="container-fluid pricing-section">
                                <div className="row no-gutters mt-5">
                                    <div className="col-lg-4">
                                        <PricingPlan // TODO!(sqs)
                                            className="pricing__plan"
                                            name="Starter"
                                            description="Helping developers search, browse, and grok their code, for faster software development and incident response."
                                            price="$2,950"
                                            priceInterval="per year"
                                            priceCaption="(20 users max)"
                                            features={[
                                                { name: 'Code search', id: 'search' },
                                                { name: 'Code navigation (definitions & references)', id: 'search' },
                                                { name: 'Sourcegraph extensions', id: 'extensions' },
                                                { name: 'Code host & editor integration', id: 'integrations' },
                                                {
                                                    name: 'Single sign-on (SSO) user authentication',
                                                    id: 'admin',
                                                },
                                                { name: 'Next-business-day support', id: 'support' },
                                            ]}
                                            buttonLabel="Buy now"
                                            buttonOnClick={this.trackBuyEnterpriseButtonClicked}
                                            buttonHref="/contact/sales"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <PricingPlan
                                            className="pricing__plan"
                                            name="Premium"
                                            description="Enabling engineering and DevOps leaders to speed up the organization's software lifecycle and monitor risks."
                                            price="$19"
                                            priceCaption="(billed annually)"
                                            features={[
                                                { name: 'Code review & pull request integration', id: 'integrations' },
                                                { name: 'Code change monitoring & notifications', id: 'admin' },
                                                { name: 'Repository access permissions', id: 'admin' },
                                                { name: 'Deployment metrics & monitoring', id: 'admin' },
                                                {
                                                    name: 'High-scale/availability cluster deployment option',
                                                    id: 'deployment',
                                                },
                                                { name: 'Cloud-managed option', id: 'deployment' },
                                                { name: 'Priority support', id: 'support' },
                                            ]}
                                            buttonLabel="Buy now"
                                            buttonOnClick={this.trackBuyEnterpriseButtonClicked}
                                            buttonHref="/contact/sales"
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <PricingPlan
                                            className="pricing__plan"
                                            name="Ultimate"
                                            description="Enabling businesses to transform the software lifecycle with automation and intelligence."
                                            price="$99"
                                            priceCaption="(billed annually)"
                                            features={[
                                                {
                                                    name: 'Large-scale code modifications and automated refactoring',
                                                    id: 'extensions',
                                                    future: true,
                                                },
                                                { name: 'Code reporting & analytics', id: 'admin', future: true },
                                                {
                                                    name: 'License compliance and security analysis',
                                                    id: 'extensions',
                                                    future: true,
                                                },
                                                {
                                                    name: 'Remote development environment',
                                                    id: 'admin',
                                                    future: true,
                                                },
                                                { name: 'Free guest users', id: 'admin' },
                                                { name: 'Private Sourcegraph extension registry', id: 'extensions' },
                                                { name: '24/7 uptime support', id: 'support' },
                                                { name: 'Dedicated support', id: 'support' },
                                                { name: 'Audit logs', id: 'admin', future: true },
                                            ]}
                                            buttonLabel="Buy now"
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

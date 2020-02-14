import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { PricingFreeTierPopoverButton } from '../components/PricingFreeTierPopover'
import { PricingPlan } from '../components/PricingPlan'
import { PricingTable } from '../components/PricingTable'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="bg-white text-dark">
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
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>
            <div className="pricing-page">
                <ContentSection color="primary" className="hero-section text-center py-5">
                    <h1>Sourcegraph pricing</h1>
                    <h3>
                        Free to start. No commitment.
                        <br />
                        Only pay for active users.
                    </h3>
                </ContentSection>
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-6">
                        <div className="col-6 col-md-3 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Free"
                                description="For individuals and small teams."
                                price="Free"
                                priceInterval=""
                                features={[
                                    { name: 'Code search', id: 'code-search' },
                                    { name: 'Code navigation (definitions and references)', id: 'code-intelligence' },
                                    { name: 'Editor and code host integrations', id: 'integrations' },
                                    {
                                        name: 'Sourcegraph extensions',
                                        id: 'deployment',
                                    },
                                    { name: 'Single sign-on (SSO)', id: 'admin' },
                                    { name: 'Community support', id: 'support' },
                                    { name: '10 monthly active user limit', id: 'deployment' },
                                ]}
                                buttonLabel="Install now"
                                buttonHref="https://docs.sourcegraph.com#quickstart-guide"
                            />
                        </div>
                        <div className="col-6 col-md-3 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Enterprise"
                                description="Helping developers answer questions and ship faster."
                                price="$29"
                                features={[
                                    { name: 'Code review & pull request integration', id: 'code-review' },
                                    { name: 'Code alerts', id: 'code-change-management' },
                                    { name: 'Deployment metrics & monitoring', id: 'deployment' },
                                    {
                                        name: 'High-scale/availability cluster deployment option',
                                        id: 'deployment',
                                    },
                                    { name: 'Single sign-on (SSO)', id: 'admin' },
                                    { name: 'Technical support', id: 'support' },
                                    { name: 'Cloud-managed option', id: 'deployment' },
                                ]}
                                plusEverythingIn="Free"
                                buttonLabel="Start a trial"
                                buttonHref="http://about.sourcegraph.com/contact/request-demo/?form_submission_source=pricing-enterprise"
                            />
                        </div>
                        <div className="col-6 col-md-3 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Enterprise Plus"
                                description="Accelerating software development across teams."
                                price="$69"
                                features={[
                                    { name: 'Repository access permissions', id: 'admin' },
                                    { name: 'Custom branding', id: 'admin' },
                                    { name: 'Sourcegraph extension whitelist', id: 'admin' },
                                    { name: 'Code reporting & analytics', id: 'admin', future: true },
                                    { name: 'Audit logs', id: 'admin', future: true },
                                    { name: 'Priority support', id: 'support' },
                                ]}
                                plusEverythingIn="Enterprise"
                                buttonLabel="Start a trial"
                                buttonHref="http://about.sourcegraph.com/contact/request-demo/?form_submission_source=pricing-enterprise-plus"
                            />
                        </div>
                        <div className="col-6 col-md-3 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Elite"
                                description="Transforming the software lifecycle."
                                price="Elite"
                                priceInterval=""
                                features={[
                                    { name: '24/7 uptime support', id: 'support' },
                                    {
                                        name: 'Code change management campaigns',
                                        id: 'code-change-management',
                                    },
                                    { name: 'Private Sourcegraph extension registry', id: 'admin' },
                                    {
                                        name: 'License compliance and security analysis',
                                        id: 'code-change-management',
                                        future: true,
                                    },
                                    {
                                        name: 'Remote development environment',
                                        id: 'code-intelligence',
                                        future: true,
                                    },
                                    { name: 'Dedicated support available', id: 'support' },
                                ]}
                                plusEverythingIn="Enterprise Plus"
                                buttonLabel="Contact us"
                                buttonHref="http://about.sourcegraph.com/contact/request-demo/?form_submission_source=pricing-elite"
                            />
                        </div>
                    </div>
                </div>
                <div className="container-fluid pricing-page__prepaid mb-5">
                    Prepaid plans and volume discounts are available. <Link to="/contact/sales">Contact us</Link> to
                    learn more.
                </div>
            </div>
            <ContentSection color="purple" className="hero-section text-center py-5">
                <h2>Try Sourcegraph Enterprise Plus risk-free for 30 days</h2>
                <Link
                    className="btn btn-lg btn-outline-light mt-3 font-weight-normal"
                    to="/contact/request-demo/?form_submission_source=pricing-free-trial-banner"
                >
                    Free trial
                </Link>
            </ContentSection>
            <ContentSection color="primary" className="hero-section text-center py-5">
                <h2>Questions?</h2>
                <Link
                    className="btn btn-lg btn-outline-light mt-3 font-weight-normal"
                    to="/contact/sales/?form_submission_source=pricing-contact-sales-banner"
                >
                    Contact sales
                </Link>
            </ContentSection>
            <div className="pricing-page__compare container-fluid py-6">
                <h2 className="text-center display-4 mb-6">Compare plans</h2>
                <PricingTable />
            </div>
            <Jumbotron
                color="purple"
                className="py-6 mb-0"
                title="Get Sourcegraph now"
                description="Start shipping better software faster with the new standard developer platform."
                logomark={false}
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </div>
    </Layout>
)) as React.FunctionComponent<any>

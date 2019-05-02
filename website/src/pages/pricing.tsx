import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
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
                <link rel="icon" type="image/png" href="https://about.sourcegraph.com/favicon.png" />
            </Helmet>
            <div className="pricing-page">
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-6">
                        <div className="col-8 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Core"
                                description="Helping developers search, browse, and grok their code, for faster software development and incident response."
                                price="$0"
                                priceInterval=""
                                priceCaption={
                                    <>
                                        for individuals
                                        <br />
                                        and small teams
                                    </>
                                }
                                features={[
                                    { name: 'Code search', id: 'code-search' },
                                    { name: 'Code navigation (definitions & references)', id: 'code-navigation' },
                                    { name: 'Sourcegraph extensions', id: 'integrations' },
                                    { name: 'Code host & editor integration', id: 'integrations' },
                                    {
                                        name: 'Single sign-on (SSO) user authentication',
                                        id: 'admin',
                                    },
                                    { name: '20-user limit', id: 'admin' },
                                ]}
                                buttonLabel="Install"
                                buttonHref="https://docs.sourcegraph.com/#quickstart"
                            />
                        </div>
                        <div className="col-8 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Enterprise"
                                description="Enabling engineering and DevOps leaders to speed up the organization's software lifecycle and monitor risks."
                                price="$19"
                                priceCaption="(billed annually)"
                                features={[
                                    { name: 'Code review & pull request integration', id: 'code-review' },
                                    { name: 'Code alerts & automation', id: 'code-alerts-automation' },
                                    { name: 'Repository access permissions', id: 'admin' },
                                    { name: 'Deployment metrics & monitoring', id: 'deployment' },
                                    {
                                        name: 'High-scale/availability cluster deployment option',
                                        id: 'deployment',
                                    },
                                    { name: 'Cloud-managed option', id: 'deployment' },
                                    { name: 'Custom branding with your logo', id: 'admin' },
                                    { name: 'Priority support', id: 'support' },
                                ]}
                                plusEverythingIn="Core"
                                buttonLabel="Buy now"
                                buttonHref="http://sourcegraph.com/subscriptions/new"
                            />
                        </div>
                        <div className="col-8 col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing__plan"
                                name="Unlimited"
                                description="Enabling businesses to transform the software lifecycle with automation and intelligence."
                                price="$99"
                                priceCaption="(billed annually)"
                                features={[
                                    { name: 'Free guest users', id: 'admin' },
                                    { name: 'Private Sourcegraph extension registry', id: 'admin' },
                                    { name: '24/7 uptime support', id: 'support' },
                                    { name: 'Dedicated support', id: 'support' },
                                    {
                                        name: 'Large-scale code modifications/refactoring',
                                        id: 'code-alerts-automation',
                                        future: true,
                                    },
                                    { name: 'Code reporting & analytics', id: 'admin', future: true },
                                    {
                                        name: 'License compliance and security analysis',
                                        id: 'code-alerts-automation',
                                        future: true,
                                    },
                                    {
                                        name: 'Remote development environment',
                                        id: 'code-intelligence',
                                        future: true,
                                    },
                                    { name: 'Audit logs', id: 'admin', future: true },
                                ]}
                                plusEverythingIn="Enterprise"
                                buttonLabel="Buy now"
                                buttonHref="http://sourcegraph.com/subscriptions/new"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ContentSection color="purple" className="hero-section text-center py-5">
                <h2>Try Sourcegraph Unlimited risk-free for 30 days</h2>
                <Link className="btn btn-lg btn-outline-light mt-3 font-weight-normal" to="/contact/request-demo">
                    Free trial
                </Link>
            </ContentSection>
            <ContentSection color="primary" className="hero-section text-center py-5">
                <h2>Questions?</h2>
                <Link className="btn btn-lg btn-outline-light mt-3 font-weight-normal" to="/contact/sales">
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

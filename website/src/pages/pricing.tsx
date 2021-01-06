import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { Features, PricingPlan } from '../components/pricing/PricingPlan'
import { PricingPlanProperty } from '../components/pricing/PricingPlanProperty'
import { TrySourcegraph } from '../components/TrySourcegraph'

const DESCRIPTION =
    'Sourcegraph is always free for public and open source code. Start using it for private code with a paid plan.'

/** The Starter feature set. */
const STARTER_FEATURES: Features = {
    codeSearch: true,
    codeIntelligence: true,
    codeChangeManagementCampaigns: false,
    codeHostIntegration: true,
    api: true,
    selfHosted: true,
    userAndAdminRoles: false,
    singleSignOn: false,
    multipleCodeHosts: false,
    repositoryPermissions: false,
    optimizedRepositoryUpdates: false,
    privateExtensions: false,
    deploymentMetricsAndMonitoring: false,
    backupRestore: false,
    customBranding: false,
    onlineTraining: false,
    customContractLegalBillingTerms: false,
}

/** The Team feature set. */
const TEAM_FEATURES: Features = { ...STARTER_FEATURES, singleSignOn: false, userAndAdminRoles: true }

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="text-dark">
            <Helmet>
                <title>Sourcegraph - Pricing</title>
                <meta name="twitter:title" content="Sourcegraph - Pricing" />
                <meta property="og:title" content="Sourcegraph - Pricing" />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta name="description" content={DESCRIPTION} />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>
            <div className="pricing-page mt-2">
                <ContentSection className="hero-section text-center py-5">
                    <h1 className="display-2 font-weight-bold">Sourcegraph Pricing</h1>
                    <h2>Universal Code Search scales with your team</h2>
                </ContentSection>
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-4">
                        <div className="col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Free"
                                price={<div className="text-center">$0/mo</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty
                                            description={
                                                <>
                                                    <br />
                                                </>
                                            }
                                        >
                                            Includes 10 users
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">Community support</PricingPlanProperty>
                                    </>
                                }
                                features={STARTER_FEATURES}
                                beforeCampaignsFragment={<li className="mt-4 list-group-item border-0" />}
                                buttonLabel="Deploy"
                                buttonClassName="btn-outline-primary"
                                buttonHref="https://docs.sourcegraph.com#quickstart-guide"
                            />
                        </div>
                        <div className="col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Team"
                                price={<div className="text-center">$150/mo</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty
                                            description={
                                                <>
                                                    <br />
                                                </>
                                            }
                                        >
                                            Includes 25 users
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-2 pt-1">Email support</PricingPlanProperty>
                                    </>
                                }
                                features={TEAM_FEATURES}
                                beforeCampaignsFragment={<li className="mt-4 list-group-item border-0" />}
                                buttonLabel="Buy now"
                                buttonClassName="btn-success"
                                buttonHref="https://sourcegraph.com/subscriptions/new"
                            />
                        </div>
                        <div className="col-md-4 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Enterprise"
                                price={<div className="text-center">Custom pricing</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty
                                            description={
                                                <>
                                                    Scales to 100,000+ users
                                                    <br />
                                                </>
                                            }
                                        >
                                            Custom user pricing
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">
                                            SLA with dedicated support
                                        </PricingPlanProperty>
                                    </>
                                }
                                features={{
                                    ...TEAM_FEATURES,
                                    singleSignOn: true,
                                    codeChangeManagementCampaigns: true,
                                    multipleCodeHosts: true,
                                    repositoryPermissions: true,
                                    optimizedRepositoryUpdates: true,
                                    privateExtensions: true,
                                    deploymentMetricsAndMonitoring: true,
                                    backupRestore: true,
                                    customBranding: true,
                                    onlineTraining: true,
                                    customContractLegalBillingTerms: true,
                                    unlimitedCode: true,
                                }}
                                beforeCampaignsFragment={
                                    <span className="text-muted pl-4 small mt-4">Available add-ons:</span>
                                }
                                buttonLabel="Contact us"
                                buttonClassName="btn-outline-primary"
                                buttonHref="/contact/request-info/?form_submission_source=pricing-enterprise"
                            />
                        </div>
                    </div>
                    <div className="py-3 text-center">
                        <h3>Education and nonprofit discounts</h3>
                        <p>
                            Sourcegraph supports the work of educational organizations and nonprofits. Please{' '}
                            <a href="/contact/sales/?form_submission_source=pricing-nonprofit">contact us</a> about
                            discounts for your development teams.
                        </p>
                    </div>
                    <hr className="my-4" />
                </div>
            </div>
            <TrySourcegraph className="my-6" />
        </div>
    </Layout>
)) as React.FunctionComponent<any>

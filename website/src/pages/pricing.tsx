import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { Features, PricingPlan } from '../components/pricing/PricingPlan'
import { PricingPlanFeature } from '../components/pricing/PricingPlanFeature'
import { PricingPlanProperty } from '../components/pricing/PricingPlanProperty'
import { TrySourcegraph } from '../components/TrySourcegraph'

const DESCRIPTION =
    'Sourcegraph is always free for public and open source code. Start using it for private code with a paid plan.'

/** The Starter feature set. */
const STARTER_FEATURES: Features = {
    codeSearch: true,
    codeIntelligence: true,
    batchChanges: false,
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
    managedInstance: false
}

/** The Team feature set. */
const TEAM_FEATURES: Features = { ...STARTER_FEATURES, singleSignOn: false, userAndAdminRoles: true }

const ENTERPRISE_FEATURES: Features = {
    codeSearch: false,
    codeIntelligence: false,
    codeHostIntegration: false,
    api: false,
    selfHosted: false,
    batchChanges: true,
    singleSignOn: true,
    userAndAdminRoles: true,
    multipleCodeHosts: true,
    repositoryPermissions: true,
    optimizedRepositoryUpdates: true,
    privateExtensions: true,
    deploymentMetricsAndMonitoring: true,
    backupRestore: true,
    customBranding: false,
    onlineTraining: true,
    customContractLegalBillingTerms: false,
    unlimitedCode: true,
    managedInstance: true
}

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
                    <h2>Universal Code Search</h2>
                </ContentSection>
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-4">
                        <div className="col-md-6 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Free"
                                price={<div className="text-center">$0/mo</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty>
                                            Up to 10 users
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">
                                            Community support<br/>&nbsp;
                                        </PricingPlanProperty>
                                    </>
                                }
                                features={STARTER_FEATURES}
                                isFree={true}
                                buttonLabel="Deploy"
                                buttonClassName="btn-outline-primary"
                                buttonHref="https://docs.sourcegraph.com#quickstart-guide"
                            />
                        </div>

                        <div className="col-md-6 mx-auto mb-4">
                            <PricingPlan
                                className="pricing-page__plan"
                                name="Enterprise"
                                price={<div className="text-center">Custom pricing</div>}
                                planProperties={
                                    <>
                                        <PricingPlanProperty>
                                            Unlimited users
                                        </PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">
                                            SLA with dedicated customer engineer<br/>and private Slack channel
                                        </PricingPlanProperty>
                                    </>
                                }
                                features={ENTERPRISE_FEATURES}
                                isFree={false}
                                buttonLabel="Contact us"
                                buttonClassName="btn-outline-primary"
                                buttonHref="/contact/request-info/?form_submission_source=pricing-enterprise"
                            />
                        </div>
                    </div>

                    <div className="row justify-content-center pt-md-4">
                        <div className="col-lg-10 text-center">
                            <blockquote className="blockquote pricing-page__quote pricing-page__quote--in-content">
                                <p>
                                    Sourcegraph gives us the ability to search for and refactor references to deprecated services, libraries, URL patterns, and more across our 2000+ repositories, and the confidence that we're not leaving anyone behind.
                                </p>
                                <footer className="blockquote-footer">Aneesh Agrawal, Software Engineer, Lyft</footer>
                                <div className="d-flex justify-content-center my-4">
                                    <img src="/external-logos/lyft-logo.svg" width="87px" alt="Lyft" />
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col-md-12 mx-auto mb-4">
                            <div className="pricing-plan pricing-plan--team card px-6">
                                <h2 className="card-title mt-3 mb-3 pricing-plan__title">Team</h2>

                                <div className="row">
                                    <div className="col-md-6 mx-auto mb-4 pr-6">
                                        If you have more than 10 users, you can upgrade to the Team plan for $150/month. This includes all of the features of the Free plan, plus:
                                    </div>
                                    <div className="col-md-6 mx-auto mb-4 pl-6">
                                        If you have more than 25 users or need enterprise functionality, check out the Enterprise plan.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mx-auto mb-4 pr-6">
                                        <ol className="pricing-plan__features list-group list-group-flush mr-5">
                                            <PricingPlanFeature
                                                info={{ label: "15 additional users (25 total)", description: "" }}
                                                value={true}
                                                tag="li"
                                                className="list-group-item bg-transparent border-0 px-0"
                                            />
                                            <PricingPlanFeature
                                                info={{ label: "User and admin roles", description: "Allow only certain users (site admins) to view and edit site configuration and repository/code host credentials" }}
                                                value={true}
                                                tag="li"
                                                className="list-group-item bg-transparent border-0 px-0"
                                            />
                                            <PricingPlanFeature
                                                info={{ label: "Email support", description: "" }}
                                                value={true}
                                                tag="li"
                                                className="list-group-item bg-transparent border-0 px-0"
                                            />
                                        </ol>
                                    </div>
                                    <div className="col-md-6 mx-auto mb-4 pl-6">
                                        <a
                                            className={`pricing-plan__button btn btn-outline-primary w-100 mx-auto my-0`}
                                            href="https://sourcegraph.com/subscriptions/new"
                                        >
                                            Create a team
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="py-3 text-center">
                        <h3>Education and nonprofit discounts</h3>
                        <p>
                            Sourcegraph supports the work of educational organizations and nonprofits.<br />
                            Please{' '}
                            <a href="/contact/sales/?form_submission_source=pricing-nonprofit">contact us</a> about
                            discounts for your development teams.
                        </p>
                    </div>

                    <hr className="my-4" />

                    <div className="row justify-content-center pt-md-4">
                        <div className="col-lg-10 text-center">
                            <blockquote className="blockquote pricing-page__quote pricing-page__quote--in-content">
                                <p>
                                    Sourcegraph pays for itself many times over—it’s a game changer.
                                </p>
                                <footer className="blockquote-footer">François Jehl, Senior Engineering Manager, Criteo</footer>
                                <div className="d-flex justify-content-center my-4">
                                    <img src="/external-logos/criteo-logo.svg" width="156px" alt="Criteo" />
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <hr className="my-4" />

                </div>
            </div>
            <TrySourcegraph className="my-6" demoCta={false} />
        </div>
    </Layout>
)) as React.FunctionComponent<any>

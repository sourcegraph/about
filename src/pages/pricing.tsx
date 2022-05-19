import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection, Layout, PricingPlan, PricingPlanFeature, PricingPlanProperty, Features } from '@components'
import { buttonStyle, buttonLocation } from '@data'

/** The Starter feature set. */
const STARTER_FEATURES: Features = {
    codeSearch: true,
    codeIntelligence: true,
    batchChanges: false,
    batchChangesTrial: true,
    codeInsights: false,
    codeInsightsTrial: true,
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
    unlimitedCode: false,
    managedInstance: false,
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
    batchChangesTrial: false,
    codeInsights: true,
    codeInsightsTrial: false,
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
    managedInstance: true,
}

const PricingPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Pricing',
            description:
                'Sourcegraph is always free for public and open source code. Start using it for private code with a paid plan.',
        }}
    >
        <div className="text-dark">
            <div className="pricing-page mt-2">
                <ContentSection className="hero-section text-center py-5">
                    <h1 className="display-2 font-weight-bold">Sourcegraph Pricing</h1>
                    <h2>Self-hosted Universal Code Search</h2>
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
                                        <PricingPlanProperty>Up to 10 users</PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">
                                            Community support on our public issue tracker
                                            <br />
                                            &nbsp;
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
                                        <PricingPlanProperty>Unlimited users</PricingPlanProperty>
                                        <PricingPlanProperty className="mt-3">
                                            SLA with dedicated customer engineer
                                            <br />
                                            and private Slack channel
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
                        <div className="col-lg-10">
                            <Link href="/case-studies/lyft-monolith-to-microservices" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="pricing-page__quote-link">
                                    <blockquote className="blockquote text-dark text-center">
                                        <p className="text-left font-weight-bold border-left border-3 border-vermillion px-4">
                                            &ldquo;Sourcegraph gives us the ability to search for and refactor
                                            references to deprecated services, libraries, URL patterns, and more across
                                            our 2000+ repositories, and the confidence that we're not leaving anyone
                                            behind.&rdquo;
                                        </p>
                                        <small className="text-muted">
                                            &mdash; Aneesh Agrawal, Software Engineer, Lyft
                                        </small>
                                        <img
                                            src="/external-logos/lyft-logo.svg"
                                            className="d-block mx-auto my-4"
                                            width="87px"
                                            alt="Lyft logo"
                                        />
                                    </blockquote>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col-md-12 mx-auto mb-4">
                            <div className="pricing-plan pricing-plan--team card">
                                <h2 className="card-title mt-3 mb-3 pricing-plan__title">Team</h2>

                                <div className="row">
                                    <div className="col-md-6 mx-auto mb-4 pr-5">
                                        If you have more than 10 users, you can upgrade to the Team plan. This includes
                                        all of the features of the Free plan, plus:
                                    </div>
                                    <div className="col-md-6 mx-auto mb-4 pl-6">
                                        Contact us to get started with the Team plan.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mx-auto mb-4 pr-5">
                                        <ol className="pricing-plan__features list-group list-group-flush mr-5">
                                            <PricingPlanFeature
                                                key="team-feature-1"
                                                info={{ label: 'Up to 25 users', description: '' }}
                                                value={true}
                                                tag="li"
                                                className="list-group-item bg-transparent border-0 px-0"
                                            />
                                            <PricingPlanFeature
                                                key="team-feature-2"
                                                info={{
                                                    label: 'User and admin roles',
                                                    description:
                                                        'Allow only certain users (site admins) to view and edit site configuration and repository/code host credentials',
                                                }}
                                                value={true}
                                                tag="li"
                                                className="list-group-item bg-transparent border-0 px-0"
                                            />
                                            <PricingPlanFeature
                                                key="team-feature-3"
                                                info={{ label: 'Email support', description: '' }}
                                                value={true}
                                                tag="li"
                                                className="list-group-item bg-transparent border-0 px-0"
                                            />
                                        </ol>
                                    </div>
                                    <div className="col-md-6 mx-auto mb-4 pl-6">
                                        <a
                                            className="pricing-plan__button btn btn-outline-primary w-100 mx-auto my-0"
                                            href="https://info.sourcegraph.com/team-pricing"
                                        >
                                            Contact us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-3 text-center">
                        <h3>Education and nonprofit discounts</h3>
                        <p>
                            Sourcegraph supports the work of educational organizations and nonprofits.
                            <br />
                            Please{' '}
                            <Link href="/contact/product-specialist/?form_submission_source=pricing-nonprofit">
                                contact us
                            </Link>{' '}
                            about discounts for your development teams.
                        </p>
                    </div>

                    <hr className="my-4" />

                    <div className="row justify-content-center pt-md-4">
                        <div className="col-lg-10">
                            <Link href="/case-studies/criteo-tackles-big-code" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="pricing-page__quote-link">
                                    <blockquote className="blockquote text-dark text-center">
                                        <p className="text-left font-weight-bold border-left border-3 border-vermillion px-4">
                                            Sourcegraph pays for itself many times over—it's a game changer.
                                        </p>
                                        <small className="text-muted">
                                            &mdash; François Jehl, Senior Engineering Manager, Criteo
                                        </small>
                                        <img
                                            src="/external-logos/criteo-logo.svg"
                                            className="d-block mx-auto my-4"
                                            width="156px"
                                            alt="Criteo logo"
                                        />
                                    </blockquote>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <hr className="my-4" />
                </div>
            </div>

            <ContentSection className="my-6">
                <div className="row">
                    <div className="col-md-6 pr-md-5">
                        <h3 className="display-4 font-weight-bold">Try Sourcegraph for free today</h3>
                        <p>
                            You'll be searching your own code in 10 minutes. You can run it self-hosted (all of your
                            code stays local and secure).
                        </p>
                    </div>
                    <div className="col-md-6 pt-3 align-self-center text-center">
                        <Link
                            href="/get-started"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.trySourcegraph}
                            data-button-type="cta"
                            passHref={true}
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-primary mx-2 mb-3" title="Try Sourcegraph now">
                                Try Sourcegraph now
                            </a>
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </div>
    </Layout>
)

export default PricingPage

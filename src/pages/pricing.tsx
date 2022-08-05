import { FunctionComponent } from 'react'

import Link from 'next/link'

import {
    ContentSection,
    Layout,
    PricingPlan,
    PricingPlanFeature,
    PricingPlanProperty,
    Blockquote,
    Features,
    TrySourcegraph,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

/** The Starter feature set. */
const STARTER_FEATURES: Features = {
    codeSearch: true,
    codeNavigation: true,
    batchChanges: false,
    batchChangesTrial: true,
    codeInsights: false,
    codeInsightsTrial: true,
    codeHostIntegration: true,
    api: false,
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
    codeNavigation: false,
    codeHostIntegration: false,
    api: true,
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
            <div className="mt-2">
                <ContentSection className="py-5 text-center hero-section">
                    <h1 className="display-2 font-weight-bold">Sourcegraph Pricing</h1>
                    <h4 className="pt-2 font-weight-normal">Self-hosted code intelligence platform</h4>
                </ContentSection>
                <div className="container">
                    <div className="pt-4 row">
                        <div className="mx-auto mb-4 col-lg-6">
                            <PricingPlan
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

                        <div className="mx-auto mb-4 col-lg-6">
                            <PricingPlan
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
                        <div className="col-md-8">
                            <Blockquote
                                border={false}
                                quote="Sourcegraph gives us the ability to search for and refactor
                                references to deprecated services, libraries, URL patterns, and more across
                                our 2000+ repositories, and the confidence that we're not leaving anyone
                                behind."
                                author="Aneesh Agrawal, Software Engineer, Lyft"
                                logo={{
                                    src: '/external-logos/lyft-logo.svg',
                                    alt: 'Lyft logo: Read the case study',
                                    href: '/case-studies/criteo-tackles-big-code',
                                }}
                            />
                        </div>
                    </div>

                    <div className="pt-4 row">
                        <div className="mx-auto mb-4 col-md-12">
                            <div className="px-6 card">
                                <h2 className="my-3 display-2 font-weight-bolder">Team</h2>

                                <div className="row">
                                    <div className="pr-5 mx-auto mb-4 tw-text-xl col-md-6">
                                        If you have more than 10 users, you can upgrade to the Team plan. This includes
                                        all of the features of the Free plan, plus:
                                    </div>
                                    <div className="mx-auto mb-4 tw-text-xl col-md-6 pl-md-6">
                                        Contact us to get started with the Team plan.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mx-auto mb-4 col-md-6">
                                        <ol className="list-group list-group-flush mr-lg-5">
                                            <PricingPlanFeature
                                                key="team-feature-1"
                                                info={{ label: 'Up to 25 users', description: '' }}
                                                value={true}
                                                tag="li"
                                                className="px-0 bg-transparent border-0 list-group-item"
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
                                                className="px-0 bg-transparent border-0 list-group-item"
                                            />
                                            <PricingPlanFeature
                                                key="team-feature-3"
                                                info={{ label: 'Email support', description: '' }}
                                                value={true}
                                                tag="li"
                                                className="px-0 bg-transparent border-0 list-group-item"
                                            />
                                        </ol>
                                    </div>
                                    <div className="pl-6 mx-auto mb-4 col-md-6">
                                        <a
                                            className="mx-auto my-0 btn btn-outline-primary col-lg-7 col-10"
                                            href="https://info.sourcegraph.com/team-pricing"
                                            title="Contact us"
                                            data-button-style={buttonStyle.outline}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
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
                            <Link href="/demo">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    title="Contact us"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    contact us
                                </a>
                            </Link>{' '}
                            about discounts for your development teams.
                        </p>
                    </div>

                    <hr className="my-4" />

                    <div className="row justify-content-center pt-md-4">
                        <div className="col-md-8">
                            <Blockquote
                                border={false}
                                quote="Sourcegraph pays for itself many times over—it's a game changer."
                                author="François Jehl, Senior Engineering Manager, Criteo"
                                logo={{
                                    src: '/external-logos/criteo-logo.svg',
                                    alt: 'Criteo logo: Read the case study',
                                    href: '/case-studies/criteo-tackles-big-code',
                                }}
                            />
                        </div>
                    </div>

                    <hr className="my-4" />
                </div>
            </div>

            <TrySourcegraph />
        </div>
    </Layout>
)

export default PricingPage

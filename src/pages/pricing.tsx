import { FunctionComponent } from 'react'

import {
    ContentSection,
    CtaSection,
    CustomerLogos,
    Features,
    Layout,
    PricingPlan,
} from '@components'

/** Business feature set. */
const BIZ_FEATURES: Features = {
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
        className="bg-white"
        hero={
            <div className="container tw-pt-xl tw-text-center">
                <h1>Plans for every dev team</h1>
            </div>
        }
    >
        {/* TODO: Redesign, box-shadow, tooltips */}
        <ContentSection className="tw-flex tw-justify-center">
            <div className="tw-mr-sm tw-col-lg-6 tw-shadow-lg tw-border-t-16 tw-rounded tw-border-vermillion-300">
                <PricingPlan
                    name="Business"
                    price="$79 per active user/month"
                    description="Full platform access for teams and orgs, all on a dedicated Cloud instance."
                    features={BIZ_FEATURES}
                    isFree={true}
                    buttonLabel="Get started"
                    buttonClassName="btn-outline-primary"
                    buttonHref="https://docs.sourcegraph.com#quickstart-guide"
                />
            </div>

            <div className="tw-col-lg-6 tw-shadow-lg tw-border-t-16 tw-rounded tw-border-violet-400">
                <PricingPlan
                    name="Enterprise"
                    price="Custom pricing"
                    description="Enterprise-grade security, scale, and support with custom deployment options."
                    features={ENTERPRISE_FEATURES}
                    isFree={false}
                    buttonLabel="Contact us"
                    buttonClassName="btn-outline-primary"
                    buttonHref="/contact/request-info/?form_submission_source=pricing-enterprise"
                />
            </div>
        </ContentSection>

        <h2 className="tw-text-center tw-mx-auto tw-mb-5 tw-max-w-2xl">The code intelligence platform for modern dev teams</h2>
        <CustomerLogos />

        {/* TODO: Feature table */}

        <CtaSection
            background="lightNebulousMars"
            title="Free for small teams"
            description="Small teams can use a limited version of Sourcegraph’s code intelligence platform for free to search personal and open source projects. The free version can only be deployed self-hosted and supports one code host connection."
            cta1={{
                text: 'Deploy',
                link: '/get-started/self-hosted',
                ctaStyle: 'primaryButton',
            }}
            cta2={{
                text: 'Start free Cloud trial',
                link: '/demo',
                ctaStyle: 'outlineButton',
            }}
        />

        {/* TODO: FAQ accordion */}
    </Layout>
)

export default PricingPage

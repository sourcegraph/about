import * as React from 'react'
import { PricingPlanFeature } from './PricingPlanFeature'

/**
 * The features to display for pricing plans.
 */
export interface Features {
    codeSearch: true
    codeIntelligence: true
    batchChanges: boolean
    codeHostIntegration: true
    api: true
    selfHosted: true
    userAndAdminRoles: boolean
    singleSignOn: boolean
    multipleCodeHosts: boolean
    repositoryPermissions: boolean
    optimizedRepositoryUpdates: boolean
    privateExtensions: boolean
    deploymentMetricsAndMonitoring: boolean
    backupRestore: boolean
    customBranding: boolean
    onlineTraining: boolean
    customContractLegalBillingTerms: boolean
    unlimitedCode: boolean
}

export interface FeatureInfo {
    label: string
    url?: string
    description: string
}

const FEATURE_INFO: Record<keyof Features, FeatureInfo> = {
    codeSearch: {
        label: 'Code search',
        description:
            'Super-fast, intuitive, and powerful code search across 10,000s of repositories, with smart filters and more',
    },
    codeIntelligence: {
        label: 'Code intelligence',
        description: 'Code navigation for 30+ languages, with hovers, definitions, and references across repositories',
    },
    batchChanges: {
        label: 'Batch changes',
        description:
            'Batch changes help coordinate large-scale changes across many repositories. Batch changes are a paid add-on for all plans.',
    },
    codeHostIntegration: {
        label: 'Code host integrations',
        description:
            'Works with GitHub, GitLab, Bitbucket Server/Cloud, and other popular code hosts (or manually add repositories from any VCS)',
    },
    api: { label: 'Comprehensive API', description: 'A secure, robust GraphQL API for your repository and code data' },

    selfHosted: {
        label: 'Self-hosted deployment',
        description: 'Deploy with Docker, Docker Compose, or Kubernetes on your own infrastructure',
    },
    singleSignOn: {
        label: 'SSO/SAML',
        description: 'Single sign-on user authentication with SAML, OAuth, OpenID Connect, and HTTP auth proxy',
    },
    userAndAdminRoles: {
        label: 'User and admin roles',
        description:
            'Allow only certain users (site admins) to view and edit site configuration and repository/code host credentials',
    },
    multipleCodeHosts: {
        label: 'Multiple code hosts',
        description:
            'Sync, search, and browse code from more than one code host on your Sourcegraph instance (such as GitHub.com and GitLab)',
    },
    repositoryPermissions: {
        label: 'Repository permissions',
        description:
            'Apply the repository permissions from your code host to restrict which repositories a user can search and browse',
    },
    optimizedRepositoryUpdates: {
        label: 'Faster repository updates',
        description: "Optimized repository syncing, integrated with your code host's webhooks or event system",
    },
    privateExtensions: {
        label: 'Private extension registry',
        description:
            'Publish and use internal Sourcegraph extensions (instead of just using the Sourcegraph.com extension registry)',
    },
    deploymentMetricsAndMonitoring: {
        label: 'Deployment monitoring',
        description:
            'Extensive metrics and dashboards to monitor the performance and health of your Sourcegraph cluster',
    },
    backupRestore: {
        label: 'Backup and restore',
        description:
            'Officially supported scripts to back up and restore your Sourcegraph instance and all configuration and data',
    },
    customBranding: {
        label: 'Custom branding',
        description: 'Show your logo, icon, and other branding in the Sourcegraph UI',
    },
    onlineTraining: {
        label: 'Live training sessions',
        description: 'Personalized online training sessions for your organization with our Customer Engineering team',
    },
    customContractLegalBillingTerms: {
        label: 'Custom contracts/billing',
        description: "Need us to use your organization's legal contracts or purchasing system?",
    },
    unlimitedCode: {
        label: 'Unlimited code scale',
        description:
            'Free and Team tiers limit the total amount of searchable code. Enterprise offers options that scale to any size codebase.',
    },
}

const FEATURE_ORDER: (keyof Features)[] = [
    'codeSearch',
    'codeIntelligence',
    'codeHostIntegration',
    'api',
    'selfHosted',
    'userAndAdminRoles',
    'singleSignOn',
    'batchChanges',
    'multipleCodeHosts',
    'repositoryPermissions',
    'optimizedRepositoryUpdates',
    'privateExtensions',
    'deploymentMetricsAndMonitoring',
    'backupRestore',
    'customBranding',
    'onlineTraining',
    'customContractLegalBillingTerms',
    'unlimitedCode',
]

interface Props {
    className?: string

    name: string
    planProperties: React.ReactFragment
    price: React.ReactFragment
    features: Features

    beforeBatchesFragment: React.ReactFragment

    buttonLabel: string
    buttonClassName: string
    buttonOnClick?: () => void
    buttonHref: string
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: React.FunctionComponent<Props> = ({
    className,

    name,
    price,
    planProperties,
    features,

    beforeBatchesFragment: beforeBatchesFragment,

    buttonLabel,
    buttonClassName,
    buttonOnClick,
    buttonHref,
}) => {
    const button = (
        <a
            className={`pricing-plan__button btn ${buttonClassName} w-100 justify-content-center text-center d-inline-flex`}
            href={buttonHref}
            onClick={buttonOnClick}
        >
            {buttonLabel}
        </a>
    )

    return (
        <div className={`pricing-plan card ${className}`}>
            <h2 className="card-title mt-3 mb-1 text-center pricing-plan__title">{name}</h2>
            <div className="card-body">{button}</div>
            <div className="card-body pt-1 text-center d-flex flex-column align-items-center">
                <div className="mb-2 pb-2 pricing-plan__price text-muted">{price}</div>
                {planProperties}
            </div>
            <ol className="list-group list-group-flush py-3">
                {FEATURE_ORDER.map(feature => (
                    <>
                        {feature === 'batchChanges' ? beforeBatchesFragment : null}
                        <PricingPlanFeature
                            key={feature}
                            info={FEATURE_INFO[feature]}
                            value={features[feature]}
                            tag="li"
                            className="list-group-item bg-transparent border-0"
                        />
                    </>
                ))}
            </ol>
            <div className="card-body">{button}</div>
        </div>
    )
}

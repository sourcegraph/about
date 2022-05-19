import { ReactFragment, FunctionComponent } from 'react'

import { Features, FeatureInfo } from './interfaces'
import { PricingPlanFeature } from './PricingPlanFeature'

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
        label: 'Batch Changes (available add-on)',
        description: 'Apply and track large-scale code changes across all of your repositories and code hosts.',
    },
    batchChangesTrial: {
        label: 'Batch Changes (limited trial)',
        description:
            'Apply and track large-scale code changes across all of your repositories and code hosts (limited to 5 changesets per batch change).',
    },
    codeHostIntegration: {
        label: '1 code host integration',
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
    managedInstance: {
        label: 'Managed instance (available add-on)',
        description:
            'Managed instances are provisioned and managed by the Sourcegraph team so you can deploy Sourcegraph without having to worry about managing it.',
    },
    codeInsights: {
        label: 'Code Insights (available add-on)',
        description: 'Track and visualize trends in your entire codebase — kept automatically up to date.',
    },
    codeInsightsTrial: {
        label: 'Code Insights (limited trial)',
        description: `Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date 
        (limited to maximum of two global insights without a license).`,
    },
}

const FEATURE_ORDER: (keyof Features)[] = [
    'codeSearch',
    'codeIntelligence',
    'codeHostIntegration',
    'api',
    'selfHosted',
    'multipleCodeHosts',
    'unlimitedCode',
    'repositoryPermissions',
    'userAndAdminRoles',
    'batchChanges',
    'batchChangesTrial',
    'codeInsights',
    'codeInsightsTrial',
    'singleSignOn',
    'optimizedRepositoryUpdates',
    'deploymentMetricsAndMonitoring',
    'privateExtensions',
    'backupRestore',
    'onlineTraining',
    'managedInstance',
    'customBranding',
    'customContractLegalBillingTerms',
]

interface Props {
    className?: string

    name: string
    planProperties: ReactFragment
    price: ReactFragment
    features: Features

    isFree: boolean

    buttonLabel: string
    buttonClassName: string
    buttonOnClick?: () => void
    buttonHref: string
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: FunctionComponent<Props> = ({
    className = '',

    name,
    price,
    planProperties,
    features,

    isFree,

    buttonLabel,
    buttonClassName,
    buttonOnClick,
    buttonHref,
}) => {
    const button = (
        <a
            className={`pricing-plan__button btn ${buttonClassName} w-100 mx-auto my-0 justify-content-center text-center d-flex`}
            href={buttonHref}
            onClick={buttonOnClick}
        >
            {buttonLabel}
        </a>
    )

    return (
        <div className={`pricing-plan card ${className}`}>
            <h2 className="card-title mt-3 mb-1 text-center pricing-plan__title">{name}</h2>
            <div className="card-body pt-3 text-center d-flex flex-column align-items-center">
                {button}
                <div className="mt-4 mb-2 pb-2 pricing-plan__price text-muted">{price}</div>
                {planProperties}
            </div>
            <ol className="pricing-plan__features list-group list-group-flush py-3">
                {!isFree ? (
                    <li className="pricing-plan-feature list-group-item bg-transparent border-0 px-0">
                        Everything in the Free tier, plus:
                    </li>
                ) : null}
                {FEATURE_ORDER.map(feature => (
                    <div key={FEATURE_INFO[feature].label}>
                        <PricingPlanFeature
                            info={FEATURE_INFO[feature]}
                            value={features[feature]}
                            tag="li"
                            className="list-group-item bg-transparent border-0 px-0"
                        />
                    </div>
                ))}
            </ol>
        </div>
    )
}

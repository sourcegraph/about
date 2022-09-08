import { ReactFragment, FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'

import { FeatureCluster, FeatureInfo } from './interfaces'
import { PricingPlanFeature } from './PricingPlanFeature'

interface Props {
    name: string
    description: string
    price: string
    features: FeatureCluster[]
    buttons: ReactFragment
    isEnterprise: boolean
}

const FEATURE_INFO: Record<string, FeatureInfo> = {
    // Code Intelligence Platform
    codeSearch: {
        label: 'Code Search',
        description:
            'Super-fast, intuitive, and powerful code search across 10,000s of repositories, with smart filters and more',
    },
    codeNavigation: {
        label: 'Code Navigation',
        description: 'Code navigation for 30+ languages, with hovers, definitions, and references across repositories',
    },
    batchChanges: {
        label: 'Batch Changes',
        description: 'Apply and track large-scale code changes across all of your repositories and code hosts.',
    },
    codeInsights: {
        label: 'Code Insights',
        description: 'Track and visualize trends in your entire codebase — kept automatically up to date.',
    },
    notebooks: {
        label: 'Notebooks',
        description: 'Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date',
    },
    codeMonitoring: {
        label: 'Code Monitoring',
        description: 'Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date',
    },
    comprehensiveApi: {
        label: 'Comprehensive API',
        description: 'Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date',
    },

    // Code host integrations
    cloudHosts: {
        label: 'Unlimited standard Cloud hosts',
        description: '',
    },
    repoConnections: {
        label: 'Unlimited repository connections',
        description: '',
    },
    unlimitedCodeHosts: {
        label: 'Unlimited code hosts',
        description: '',
    },
    selfHostedCodeHosts: {
        label: 'Connect to self-hosted code hosts',
        description: '',
    },
    enterpriseOnlyCodeHosts: {
        label: 'Connect to enterprise-only code hosts',
        description: '',
    },
    privateCodeHosts: {
        label: 'Connect to private code hosts (self-hosted only)',
        description: '',
    },

    // Security and admin
    ssoSaml: {
        label: 'SSO/SAML',
        description: '',
    },
    securityRoles: {
        label: 'User and admin roles',
        description: '',
    },
    repoPerms: {
        label: 'Standard repository permissions',
        description: '',
    },
    customPerms: {
        label: 'Custom repository permissions',
        description: '',
    },
    privateInstance: {
        label: 'Private instance access',
        description: '',
    },
    analytics: {
        label: 'In-product analytics',
        description: '',
    },

    // Scale and performance
    businessStorage: {
        label: 'Up to 100GB code storage',
        description: '',
    },
    enterpriseStorage: {
        label: 'Over 100GB code storage',
        description: '',
    },
    businessExecutors: {
        label: '2 executors',
        description: '',
    },
    enterpriseExecutors: {
        label: '4 executors',
        description: '',
    },

    // Flexible deployment
    cloudDeployment: {
        label: 'Secure and dedicated Cloud deployment',
        description: '',
    },
    selfDeployment: {
        label: 'Self-hosted deployment',
        description: '',
    },

    // Support
    slaSupport: {
        label: 'Priority support SLAs',
        description: '',
    },
    dedicatedCe: {
        label: 'Dedicated Customer Engineer',
        description: '',
    },
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: FunctionComponent<Props> = ({
    name,
    price,
    description,
    features,
    buttons,
    isEnterprise,
}) => (
    <div className={`h-100 tw-p-md tw-shadow-lg tw-border-t-16 tw-rounded tw-border-gray-200 ${isEnterprise ? 'tw-border-t-violet-400' : 'tw-border-t-vermillion-300'}`}>
        <h2 className="tw-mb-sm tw-font-semibold">{name}</h2>
        <h3 className="tw-font-normal tw-max-w-sm">{description}</h3>
        <h4 className="tw-my-sm">{price}</h4>
        {buttons}

        <div className="py-3 ml-0">
            {isEnterprise &&
                <div className="tw-text-xl tw-font-semibold">
                    Everything in Business, plus:
                </div>
            }
            {features.map(node => (
                <div key={node.topic} className="tw-px-0 bg-transparent border-0 tw-text-xl list-group-itemtw-justify-between">
                    <div className="tw-text-xl tw-font-semibold tw-mt-xs tw-flex tw-items-center">
                        <CheckIcon className={`mr-2 icon-inline ${isEnterprise ? 'tw-text-violet-400' : 'tw-text-vermillion-300'} tw-inline`} /> {node.topic}
                    </div>
                    <ul className="tw-ml-2xl">
                        {node?.features?.map(feature => (
                            <div key={feature}>
                                <PricingPlanFeature
                                    feature={FEATURE_INFO[feature]}
                                    tag="li"
                                />
                            </div>
                        ))}
                    </ul>
                </div>
            ))}
            {/* {FEATURE_ORDER.map(feature => (
                <div key={FEATURE_INFO[feature].label}>
                    <PricingPlanFeature
                        info={FEATURE_INFO[feature]}
                        value={features[feature]}
                        tag="li"
                        className="tw-px-0 bg-transparent border-0 tw-text-xl list-group-item"
                    />
                </div>
            ))} */}
        </div>
    </div>
)

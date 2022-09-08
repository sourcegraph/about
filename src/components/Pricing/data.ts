// TODO: Add comments

export interface FeatureCluster {
    topic: string
    features?: string[]
}

export interface FeatureInfo {
    label: string
    description?: string
}

/** Business feature set. */
export const BIZ_FEATURES: FeatureCluster[] = [
    {
        topic: 'Code intelligence platform',
        features: [
            'codeSearch',
            'codeNavigation',
            'batchChanges',
            'codeInsights',
            'notebooks',
            'codeMonitoring',
            'comprehensiveApi',
        ],
    },
    {
        topic: 'Code host integrations',
        features: ['cloudHosts', 'repoConnections'],
    },
    {
        topic: 'Security and admin',
        features: ['ssoSaml', 'securityRoles', 'repoPerms', 'analytics'],
    },
    {
        topic: 'Scale and performance',
        features: ['businessStorage', 'businessExecutors'],
    },
    { topic: '24/5 support' },
    { topic: 'Secure and dedicated Cloud deployment' },
]

/** Enterprise feature set. */
export const ENTERPRISE_FEATURES: FeatureCluster[] = [
    {
        topic: 'Flexible deployment',
        features: ['cloudDeployment', 'selfDeployment'],
    },
    {
        topic: 'Code host integrations',
        features: ['unlimitedCodeHosts', 'selfHostedCodeHosts', 'enterpriseOnlyCodeHosts', 'privateCodeHosts'],
    },
    {
        topic: 'Security and admin',
        features: ['customPerms', 'privateInstance'],
    },
    {
        topic: 'Scale and performance',
        features: ['enterpriseStorage', 'enterpriseExecutors'],
    },
    {
        topic: '24/5 priority support',
        features: ['slaSupport', 'dedicatedCe'],
    },
    { topic: 'Enterprise add ons' },
]

export const FEATURE_COMPARE_DATA = [
    {
        topic: 'Code intelligence platform',
        features: [
            {
                label: 'codeSearch',
                business: true,
                enterprise: true,
            },
            {
                label: 'codeNavigation',
                business: true,
                enterprise: true,
            },
            {
                label: 'batchChanges',
                business: true,
                enterprise: true,
            },
            {
                label: 'codeInsights',
                business: true,
                enterprise: true,
            },
            {
                label: 'notebooks',
                business: true,
                enterprise: true,
            },
            {
                label: 'codeMonitoring',
                business: true,
                enterprise: true,
            },
            {
                label: 'comprehensiveApi',
                business: true,
                enterprise: true,
            },
        ],
    },
    {
        topic: 'Code host integrations',
        features: [
            {
                label: 'codeHostNumber',
                business: 'Unlimited',
                enterprise: 'Unlimited',
            },
            /* TODO: Consolidate data labels for 2 places */
            // {
            //     label: 'Cloud code hosts',
            //     business: true,
            //     enterprise: true,
            // },
            // {
            //     label: 'Self-hosted code hosts',
            //     business: false,
            //     enterprise: true,
            // },
            // {
            //     label: 'Enterprise-only code hosts',
            //     business: false,
            //     enterprise: true,
            // },
        ],
    },
]

/** Feature info dictionary */
export const FEATURE_INFO: Record<string, FeatureInfo> = {
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
        description:
            'Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date',
    },
    codeMonitoring: {
        label: 'Code Monitoring',
        description:
            'Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date',
    },
    comprehensiveApi: {
        label: 'Comprehensive API',
        description:
            'Track and visualize trends in your entire codebase — with visualizations that are kept automatically up to date',
    },

    // Code host integrations
    codeHostNumber: {
        label: '# of code host connections',
        description: '',
    },
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

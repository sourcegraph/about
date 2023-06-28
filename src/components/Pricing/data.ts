export interface FeatureCluster {
    topic: string
    features?: string[]
}

export interface FeatureInfo {
    label: string
    description?: string
}

interface FeatureDictionary {
    topic: string
    features: FeatureSubsetDictionary[]
}

interface FeatureSubsetDictionary {
    label: string
    enterpriseStarter: boolean | string
    enterprise: boolean | string
    disclaimer?: string
}

/** Enterprise Starter spotlight feature set */
export const ENTERPRISE_STARTER_FEATURES_OVERVIEW: FeatureCluster[] = [
    {
        topic: 'Features',
        features: [
            'codeSearch',
            'codeNavigation',
            'batchChanges',
            'codeInsights',
            'ownership',
            'notebooks',
            'codeMonitoring',
            'comprehensiveApi',
        ],
    },
    {
        topic: 'Code host integrations',
        features: ['cloudCodeHosts'],
    },
    {
        topic: 'Security and admin',
        features: ['ssoSaml', 'securityRoles', 'repoPerms', 'analytics', 'soc2'],
    },
    {
        topic: 'Scale and performance',
        features: ['enterpriseStarterStorage', 'enterpriseStarterExecutors'],
    },
    {
        topic: 'Standard deployment',
        features: ['cloudDeployment', 'selfHostedSingleNode'],
    },
    { topic: '24/5 support' },
]

/** Enterprise spotlight feature set */
export const ENTERPRISE_FEATURES_OVERVIEW: FeatureCluster[] = [
    {
        topic: 'Code host integrations',
        features: ['cloudCodeHosts', 'selfHostedCodeHosts', 'otherCodeHosts'],
    },
    {
        topic: 'Advanced security and admin',
        features: ['customPerms', 'privateInstance'],
    },
    {
        topic: 'Scale and performance',
        features: ['enterpriseStorage', 'enterpriseExecutors'],
    },
    {
        topic: 'Flexible deployment',
        features: ['cloudDeployment', 'selfHostedSingleNode', 'selfHostedMultiNode', 'airgappedDeployment'],
    },
    {
        topic: '24/5 enhanced support',
        features: ['slaSupport', 'technicalAdvisor', 'professionalServices'],
    },
]

/** Feature info dictionaries */

const FEATURE_INFO: Record<string, FeatureInfo> = {
    // Features
    codeSearch: {
        label: 'Code Search',
        description: 'Super-fast, intuitive, and powerful code search across your entire codebase.',
    },
    codeNavigation: {
        label: 'Code navigation',
        description:
            "Traverse your entire codebase with precise code navigation for cross-repository 'Go to definition,' 'Find references,' and more.",
    },
    batchChanges: {
        label: 'Batch Changes',
        description: 'Apply and track large-scale code changes across all of your repositories and code hosts.',
    },
    codeInsights: {
        label: 'Code Insights',
        description:
            'Track and visualize trends in your entire codebase with visualizations that are kept automatically up to date.',
    },
    notebooks: {
        label: 'Notebooks',
        description: 'Create living documentation that interacts directly with your code.',
    },
    codeMonitoring: {
        label: 'Code monitoring',
        description: 'Get alerts when changes are made to your codebase.',
    },
    comprehensiveApi: {
        label: 'Comprehensive API',
        description: 'A secure, robust GraphQL API for your repository and code data.',
    },
    cody: {
        label: 'Cody (beta)',
        description: 'A code-aware, AI programming assistant.',
    },
    ownership: {
        label: 'Code ownership',
        description: 'Track and infer code ownership across your codebase.',
    },

    // Security and admin
    ssoSaml: {
        label: 'SSO/SAML',
        description: 'Single sign-on user authentication with SAML, OAuth, OpenID Connect, and HTTP auth proxy.',
    },
    securityRoles: {
        label: 'User and admin roles',
        description:
            'Allow only certain users (site admins) to view and edit site configuration and repository/code host credentials.',
    },
    repoPerms: {
        label: 'Standard repository permissions',
        description:
            'Apply the repository permissions from your code host to restrict which repositories a user can search and browse.',
    },
    customPerms: {
        label: 'Custom repository permissions',
        description:
            'Apply the repository permissions from your code host or use the explicit permissions API to restrict which repositories a user can search and browse.',
    },
    privateInstance: {
        label: 'Private instance access',
        description: 'Your instance is only accessible from allowlisted IPs. ',
    },
    analytics: {
        label: 'In-product analytics',
        description: 'Understand user engagement and calculate the value of using Sourcegraph.',
    },
    soc2: {
        label: 'SOC 2 Type II',
        description: '',
    },

    // Deployment
    flexibleDeployment: {
        label: 'Flexible deployment',
        description: '',
    },
    cloudDeployment: {
        label: 'Sourcegraph Cloud',
        description: 'A single-tenant, dedicated cloud instance for your organization, managed by Sourcegraph.',
    },
    selfHostedMultiNode: {
        label: 'Self-hosted (multi-node cluster)',
        description: 'Self-hosted deployment on a multi-node cluster, for more complex needs.',
    },
    selfHostedSingleNode: {
        label: 'Self-hosted (single-node)',
        description: 'Self-hosted deployment on a single node.',
    },
    airgappedDeployment: {
        label: 'Air-gapped deployment',
        description: 'Available only with a professional services package to ensure adequate support.',
    },

    // Code hosts
    cloudCodeHosts: {
        label: 'Popular cloud code hosts',
        description: 'GitHub.com, GitLab.com, and Bitbucket Cloud.',
    },
    selfHostedCodeHosts: {
        label: 'Self-hosted code hosts',
        description: 'GitHub Enterprise Server, GitLab Self-managed, Bitbucket Server/Data Center, and Perforce.',
    },
    otherCodeHosts: {
        label: 'All other code hosts',
        description: 'Other Git-based code hosts, and code hosts accessible only on a private network.',
    },
}

export const SPOTLIGHT_FEATURE_INFO: Record<string, FeatureInfo> = {
    ...FEATURE_INFO,

    // Scale and performance
    enterpriseStarterStorage: {
        label: 'Up to 75GB cloud code storage',
        description: 'Included storage for cloud deployments.',
    },
    enterpriseStorage: {
        label: 'Over 75GB cloud code storage',
        description: 'Included storage for cloud deployments.',
    },
    enterpriseStarterExecutors: {
        label: '2 executors',
        description: 'Execute server-side Batch Changes and use auto-indexing for precise code navigation.',
    },
    enterpriseExecutors: {
        label: '4 executors',
        description: 'Execute server-side Batch Changes and use auto-indexing for precise code navigation.',
    },

    // Support
    slaSupport: {
        label: 'Enhanced support SLAs',
        description: 'Priority ticket handling and guaranteed initial response SLA from a dedicated team.',
    },
    technicalAdvisor: {
        label: 'Technical Advisor (with >$100k spend)',
        description:
            'Specialized technical experts to lead training & enablement, strategy, and overall account health.',
    },
    professionalServices: {
        label: 'Professional services available',
        description: '',
    },
}

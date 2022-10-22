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
    business: boolean | string
    enterprise: boolean | string
    disclaimer?: string
}

/** Business spotlight feature set */
export const BIZ_FEATURES_OVERVIEW: FeatureCluster[] = [
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
        features: ['cloudHosts'],
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
    { topic: 'Single-tenant cloud deployment' },
]

/** Enterprise spotlight feature set */
export const ENTERPRISE_FEATURES_OVERVIEW: FeatureCluster[] = [
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
        features: ['slaSupport', 'technicalAdvisor'],
    },
]

export const ALL_FEATURES_COMPARED_DATA: FeatureDictionary[] = [
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
                label: 'codeHost',
                business: 'Unlimited',
                enterprise: 'Unlimited',
            },
            {
                label: 'cloudHosts',
                business: true,
                enterprise: true,
            },
            {
                label: 'selfHosts',
                business: false,
                enterprise: true,
            },
            {
                label: 'enterpriseHosts',
                business: false,
                enterprise: true,
            },
            {
                label: 'privateHosts',
                business: false,
                enterprise: true,
            },
        ],
    },
    {
        topic: 'Security, compliance, and admin',
        features: [
            {
                label: 'soc2',
                business: true,
                enterprise: true,
            },
            {
                label: 'analytics',
                business: true,
                enterprise: true,
            },
            {
                label: 'securityRoles',
                business: true,
                enterprise: true,
            },
            {
                label: 'ssoSaml',
                business: true,
                enterprise: true,
            },
            {
                label: 'repoPerms',
                business: true,
                enterprise: true,
            },
            {
                label: 'customPerms',
                business: false,
                enterprise: true,
            },
            {
                label: 'privateInstance',
                business: false,
                enterprise: true,
            },
        ],
    },
    {
        topic: 'Scale and performance',
        features: [
            {
                label: 'codeStorag',
                business: 'Up to 75GB',
                enterprise: 'Over 75GB',
            },
            {
                label: 'executors',
                business: '2',
                enterprise: '4',
            },
        ],
    },
    {
        topic: 'Support',
        features: [
            {
                label: 'support',
                business: '24/5 support',
                enterprise: '24/5 support',
            },
            {
                label: 'technicalAdvisor',
                business: 'Available',
                enterprise: true,
            },
            {
                label: 'supportSla',
                business: 'Standard',
                enterprise: 'Priority',
            },
        ],
    },
    {
        topic: 'Deployment',
        features: [
            {
                label: 'cloudDeployment',
                business: true,
                enterprise: true,
            },
            {
                label: 'selfDeployment',
                business: false,
                enterprise: true,
            },
            {
                label: 'airGappedDeploy',
                business: false,
                enterprise: 'Add-on',
            },
        ],
    },
    {
        topic: 'Usage and billing',
        features: [
            {
                label: 'price',
                business: '$99 per active user/month',
                enterprise: 'Custom pricing',
                disclaimer: 'Platform access fee may apply',
            },
            {
                label: 'contractLength',
                business: 'Annual',
                enterprise: 'Annual',
            },
            {
                label: 'paymentMethod',
                business: 'Invoice',
                enterprise: 'Invoice',
            },
        ],
    },
]

/** Feature info dictionaries */

const CIP_FEATURE_INFO: Record<string, FeatureInfo> = {
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
}

const SECURITY_FEATURE_INFO: Record<string, FeatureInfo> = {
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
}

const DEPLOYMENT_FEATURE_INFO: Record<string, FeatureInfo> = {
    cloudDeployment: {
        label: 'Single-tenant cloud deployment',
        description: 'Your organization’s dedicated, single-tenant Sourcegraph Cloud instance.',
    },
    selfDeployment: {
        label: 'Self-hosted deployment',
        description: 'Deploy with Docker, Docker Compose, or Kubernetes on your organization’s infrastructure.',
    },
}

export const SPOTLIGHT_FEATURE_INFO: Record<string, FeatureInfo> = {
    ...CIP_FEATURE_INFO,

    // Code host integrations
    cloudHosts: {
        label: 'Unlimited standard cloud code hosts',
        description: 'Integrate with GitHub.com, GitLab.com, and Bitbucket Cloud.',
    },
    unlimitedCodeHosts: {
        label: 'Unlimited code hosts',
        description: 'Search, understand, fix, and automate across multiple code hosts.',
    },
    selfHostedCodeHosts: {
        label: 'Integrate with self-hosted code hosts',
        description:
            'Integrate with GitHub Enterprise Server, GitLab self-managed, Bitbucket Server/Data Center, and Perforce.',
    },
    enterpriseOnlyCodeHosts: {
        label: 'Integrate with all Git-based code hosts',
        description: 'Integrate with any Git-based code host via src serve-git.',
    },
    privateCodeHosts: {
        label: 'Integrate with private code hosts',
        description:
            'Integrate with supported code hosts deployed on a private network (only available for self-hosted deployments).',
    },

    ...SECURITY_FEATURE_INFO,

    // Scale and performance
    businessStorage: {
        label: 'Up to 75GB cloud code storage',
        description: 'Included storage for cloud deployments.',
    },
    enterpriseStorage: {
        label: 'Over 75GB cloud code storage',
        description: 'Included storage for cloud deployments.',
    },
    businessExecutors: {
        label: '2 executors',
        description: 'Execute server-side Batch Changes and use auto-indexing for precise code navigation.',
    },
    enterpriseExecutors: {
        label: '4 executors',
        description: 'Execute server-side Batch Changes and use auto-indexing for precise code navigation.',
    },

    ...DEPLOYMENT_FEATURE_INFO,

    // Support
    slaSupport: {
        label: 'Priority support SLAs',
        description: 'Priority ticket handling and guaranteed initial response SLA from a dedicated team.',
    },
    technicalAdvisor: {
        label: 'Technical Advisor',
        description:
            'Specialized technical experts to lead training & enablement, strategy, and overall account health.',
    },
}

export const ALL_FEATURE_INFO: Record<string, FeatureInfo> = {
    ...CIP_FEATURE_INFO,

    // Code host integrations
    codeHost: {
        label: 'Code host integrations',
        description: 'Search, understand, fix, and automate across multiple code hosts.',
    },
    cloudHosts: {
        label: 'Cloud code hosts',
        description: 'Integrate with GitHub.com, GitLab.com, and Bitbucket Cloud.',
    },
    selfHosts: {
        label: 'Self-hosted code hosts',
        description:
            'Integrate with GitHub Enterprise Server, GitLab self-managed, Bitbucket Server/Data Center, and Perforce.',
    },
    enterpriseHosts: {
        label: 'All Git-based code hosts',
        description: 'Integrate with any Git-based code host via src serve-git.',
    },
    privateHosts: {
        label: 'Private code hosts',
        description:
            'Integrate with supported code hosts deployed on a private network (only available for self-hosted deployments).',
    },

    // Security and admin
    soc2: {
        label: 'SOC 2 Type II',
        description: '',
    },
    ...SECURITY_FEATURE_INFO,

    // Scale and performance
    codeStorag: {
        label: 'Cloud code storage',
        description: 'Included storage for cloud deployments.',
    },
    executors: {
        label: 'Executors',
        description: 'Execute server-side Batch Changes and use auto-indexing for precise code navigation.',
    },

    // Support
    support: {
        label: 'Support',
    },
    technicalAdvisor: {
        label: 'Technical Advisor',
        description:
            'Specialized technical experts to lead training & enablement, strategy, and overall account health.',
    },
    supportSla: {
        label: 'Support SLA',
        description:
            'Priority support SLAs: priority ticket handling and guaranteed initial response SLA from a dedicated team.',
    },

    // Deployment
    ...DEPLOYMENT_FEATURE_INFO,
    airGappedDeploy: {
        label: 'Air-gapped deployment',
        description: 'Deploy Sourcegraph in an offline environment on your organization’s infrastructure. (add-on)',
    },

    // Usage and billing
    price: {
        label: 'Price',
    },
    contractLength: {
        label: 'Contract length',
    },
    paymentMethod: {
        label: 'Payment method',
    },
}

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
        topic: 'Code intelligence platform',
        features: [
            'codeSearch',
            'codeNavigation',
            'batchChanges',
            'codeInsights',
            'cody',
            'own',
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
        features: ['enterpriseStarterStorage', 'enterpriseStarterExecutors'],
    },
    {
        topic: 'Flexible deployment',
        features: ['cloudDeployment', 'singleNode'],
    },
    { topic: '24/5 support' },
]

/** Enterprise spotlight feature set */
export const ENTERPRISE_FEATURES_OVERVIEW: FeatureCluster[] = [
    {
        topic: 'Code host integrations',
        features: ['unlimitedCodeHosts', 'selfHostedCodeHosts', 'enterpriseOnlyCodeHosts', 'privateCodeHosts'],
    },
    {
        topic: 'Flexible deployment',
        features: ['cloudDeployment', 'selfDeployment'],
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
        topic: 'Custom deployment',
        features: ['multiNode'],
    },
    {
        topic: '24/5 enhanced support',
        features: ['slaSupport', 'technicalAdvisor', 'premiumServices'],
    },
]

export const ALL_FEATURES_COMPARED_DATA: FeatureDictionary[] = [
    {
        topic: 'Code intelligence platform',
        features: [
            {
                label: 'codeSearch',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'codeNavigation',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'batchChanges',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'codeInsights',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'cody',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'own',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'notebooks',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'codeMonitoring',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'comprehensiveApi',
                enterpriseStarter: true,
                enterprise: true,
            },
        ],
    },
    {
        topic: 'Code host integrations',
        features: [
            {
                label: 'codeHost',
                enterpriseStarter: 'Unlimited',
                enterprise: 'Unlimited',
            },
            {
                label: 'cloudHosts',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'selfHosts',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'enterpriseHosts',
                enterpriseStarter: false,
                enterprise: true,
            },
            {
                label: 'privateHosts',
                enterpriseStarter: false,
                enterprise: true,
            },
        ],
    },
    {
        topic: 'Security, compliance, and admin',
        features: [
            {
                label: 'soc2',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'analytics',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'securityRoles',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'ssoSaml',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'repoPerms',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'customPerms',
                enterpriseStarter: false,
                enterprise: true,
            },
            {
                label: 'privateInstance',
                enterpriseStarter: false,
                enterprise: true,
            },
        ],
    },
    {
        topic: 'Scale and performance',
        features: [
            {
                label: 'codeStorag',
                enterpriseStarter: 'Up to 75GB',
                enterprise: 'Over 75GB',
            },
            {
                label: 'executors',
                enterpriseStarter: '2',
                enterprise: '4',
            },
        ],
    },
    {
        topic: 'Support',
        features: [
            {
                label: 'support',
                enterpriseStarter: '24/5 support',
                enterprise: '24/5 support',
            },
            {
                label: 'technicalAdvisor',
                enterpriseStarter: 'Available',
                enterprise: 'With >100k spend',
            },
            {
                label: 'supportSla',
                enterpriseStarter: 'Standard',
                enterprise: 'Enhanced',
            },
        ],
    },
    {
        topic: 'Deployment',
        features: [
            {
                label: 'cloudDeployment',
                enterpriseStarter: true,
                enterprise: true,
            },
            {
                label: 'selfDeployment',
                enterpriseStarter: 'Single-node',
                enterprise: 'Single or Multi-node',
            },
            {
                label: 'airGappedDeploy',
                enterpriseStarter: false,
                enterprise: 'Add-on',
            },
        ],
    },
    {
        topic: 'Usage and billing',
        features: [
            {
                label: 'price',
                enterpriseStarter: 'Starts at $5k/year',
                enterprise: 'Starts at $50k/year',
            },
            {
                label: 'contractLength',
                enterpriseStarter: 'Annual',
                enterprise: 'Annual',
            },
            {
                label: 'paymentMethod',
                enterpriseStarter: 'Invoice',
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
    cody: {
        label: 'Cody (experimental)',
        description: 'A code-aware, AI programming assistant.',
    },
    own: {
        label: 'Own (experimental)',
        description: 'Track evergreen code ownership data across your codebase.',
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
    flexibleDeployment: {
        label: 'Flexible deployment',
        description: '',
    },
    cloudDeployment: {
        label: 'Single-tenant GCP cloud deployment',
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
        description:
            'Integrate with GitHub Cloud / Enterprise Server, GitLab.com / Self-managed, BitBucket Cloud / Server and Perforce',
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
        label: 'Integrate with all other code hosts',
        description: 'Integrate with any Git-based code host via src serve-git.',
    },
    privateCodeHosts: {
        label: 'Integrate with private code hosts',
        description:
            'Integrate with supported code hosts deployed on a private network (only available for self-hosted deployments).',
    },

    ...SECURITY_FEATURE_INFO,

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

    ...DEPLOYMENT_FEATURE_INFO,

    // Custom deployment
    multiNode: {
        label: 'Multi-node, self-hosted',
        description: 'Complex multi-node deployment.',
    },
    singleNode: {
        label: 'Standard single-node, self-hosted',
        description: 'Standard single-node deployment.',
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
    premiumServices: {
        label: 'Premium services available',
        description: '',
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
        label: 'All other code hosts',
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

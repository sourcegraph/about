export interface FeatureCluster {
    topic: string
    features?: string[]
}

export interface FeatureInfo {
    label: string
    description?: string
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
        features: ['slaSupport', 'dedicatedCe'],
    },
    { topic: 'Enterprise add ons' },
]

export const ALL_FEATURES_COMPARED_DATA = [
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
            {
                label: 'privateRepos',
                business: 'Unlimited',
                enterprise: 'Unlimited',
            },
            {
                label: 'publicRepos',
                business: 'Unlimited',
                enterprise: 'Unlimited',
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
                business: 'Up to 100GB',
                enterprise: 'Over 100GB',
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
                label: 'dedicatedCe',
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
            {
                label: 'deploymentMonitoring',
                business: false,
                enterprise: 'Add-on',
            },
            {
                label: 'backupRestore',
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
                business: '$99 per user/month',
                enterprise: 'Custom pricing',
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
        description:
            'Super-fast, intuitive, and powerful code search across your entire codebase.',
    },
    codeNavigation: {
        label: 'Code Navigation',
        description: "Traverse your entire codebase with precise code navigation for cross-repository 'Go to definition' and 'Find references,' and more.",
    },
    batchChanges: {
        label: 'Batch Changes',
        description: 'Apply and track large-scale code changes across all of your repositories and code hosts.',
    },
    codeInsights: {
        label: 'Code Insights',
        description: 'Track and visualize trends in your entire codebase with visualizations that are kept automatically up to date.',
    },
    notebooks: {
        label: 'Notebooks',
        description:
            'Create living documentation that interacts directly with your code.',
    },
    codeMonitoring: {
        label: 'Code Monitoring',
        description:
            'Get alerts when changes are made to your codebase.',
    },
    comprehensiveApi: {
        label: 'Comprehensive API',
        description:
            'A secure, robust GraphQL API for your repository and code data.',
    },
}

const SECURITY_FEATURE_INFO: Record<string, FeatureInfo> = {
    ssoSaml: {
        label: 'SSO/SAML',
        description: 'Single sign-on user authentication with SAML, OAuth, OpenID Connect, and HTTP auth proxy.',
    },
    securityRoles: {
        label: 'User and admin roles',
        description: 'Allow only certain users (site admins) to view and edit site configuration and repository/code host credentials.',
    },
    repoPerms: {
        label: 'Standard repository permissions',
        description: 'Apply the repository permissions from your code host to restrict which repositories a user can search and browse.',
    },
    customPerms: {
        label: 'Custom repository permissions',
        description: 'Apply the repository permissions from your code host or use the explicit permissions API to restrict which repositories a user can search and browse.',
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
        label: 'Secure and dedicated Cloud deployment',
        description: 'Deploy Sourcegraph in a dedicated, single-tenant instance in GCP. ',
    },
    selfDeployment: {
        label: 'Self-hosted deployment',
        description: 'Deploy with Docker, Docker Compose, or Kubernetes on your own infrastructure (add-on).',
    },
}

export const SPOTLIGHT_FEATURE_INFO: Record<string, FeatureInfo> = {
    ...CIP_FEATURE_INFO,

    // Code host integrations
    cloudHosts: {
        label: 'Unlimited standard Cloud hosts',
        description: 'Integrate with GitHub.com, GitLab.com, and Bitbucket Cloud',
    },
    repoConnections: {
        label: 'Unlimited repository connections',
        description: 'Sync code from all of your repositories.',
    },
    unlimitedCodeHosts: {
        label: 'Unlimited code hosts',
        description: 'Integrate with Github Enterprise Self-hosted, GitLab Self-hosted, BitBucket Server/Data Center, and Perforce',
    },
    selfHostedCodeHosts: {
        label: 'Connect to self-hosted code hosts',
        description: 'Integrate with Github Enterprise Self-hosted, GitLab Self-hosted, BitBucket Server/Data Center, and Perforce',
    },
    enterpriseOnlyCodeHosts: {
        label: 'Connect to enterprise-only code hosts',
        description: 'Integrate with any Git-based code host via src-srv-git.',
    },
    privateCodeHosts: {
        label: 'Connect to private code hosts (self-hosted only)',
        description: 'Integrate with supported code hosts stored behind a firewall.',
    },

    ...SECURITY_FEATURE_INFO,

    // Scale and performance
    businessStorage: {
        label: 'Up to 100GB code storage',
        description: 'Included storage for Cloud deployments.',
    },
    enterpriseStorage: {
        label: 'Over 100GB code storage',
        description: 'Included storage for Cloud deployments.',
    },
    businessExecutors: {
        label: '2 executors',
        description: 'Offload expensive tasks when running Batch Changes server-side or using code navigation’s auto-indexing functionality.',
    },
    enterpriseExecutors: {
        label: '4 executors',
        description: 'Offload expensive tasks when running Batch Changes server-side or using code navigation’s auto-indexing functionality.',
    },

    ...DEPLOYMENT_FEATURE_INFO,

    // Support
    slaSupport: {
        label: 'Priority support SLAs',
        description: 'Priority ticket handling and guaranteed initial response SLA from a dedicated team.',
    },
    dedicatedCe: {
        label: 'Dedicated Customer Engineer',
        description: 'Dedicated technical account manager to support usage, training, enablement, technical strategy, and overall health.',
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
        description: 'Integrate with GitHub.com, GitLab.com, and Bitbucket Cloud',
    },
    selfHosts: {
        label: 'Self-hosted code hosts',
        description: 'Integrate with Github Enterprise Self-hosted, GitLab Self-hosted, BitBucket Server/Data Center, and Perforce',
    },
    enterpriseHosts: {
        label: 'Enterprise-only code hosts',
        description: 'Integrate with any Git-based code host via src-srv-git.',
    },
    privateHosts: {
        label: 'Private code hosts',
        description: 'Integrate with supported code hosts stored behind a firewall.',
    },
    privateRepos: {
        label: 'Private repository connections',
        description: 'Sync code from private repositories.',
    },
    publicRepos: {
        label: 'Public repository connections',
        description: 'Sync code from public repositories.',
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
        description: 'Included storage for Cloud deployments.',
    },
    executors: {
        label: 'Executors',
        description: 'Offload expensive tasks when running Batch Changes server-side or using code navigation’s auto-indexing functionality.',
    },

    // Support
    support: {
        label: 'Support',
    },
    dedicatedCe: {
        label: 'Dedicated Customer Engineer',
        description: 'Dedicated technical account manager to support usage, training, enablement, technical strategy, and overall health.',
    },
    supportSla: {
        label: 'Support SLA',
        description: 'Priority ticket handling and guaranteed initial response SLA from a dedicated team.',
    },

    // Deployment
    ...DEPLOYMENT_FEATURE_INFO,
    airGappedDeploy: {
        label: 'Air-gapped deployment monitoring',
        description: 'Deploy Sourcegraph in an air-gapped environment.',
    },
    deploymentMonitoring: {
        label: 'Self-hosted deployment monitoring',
        description: 'Monitor the performance and health of your Sourcegraph cluster (add-on).',
    },
    backupRestore: {
        label: 'Self-hosted backup and restore',
        description: 'Officially supported scripts to back up and restore your Sourcegraph instance and all configuration and data (add-on).',
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

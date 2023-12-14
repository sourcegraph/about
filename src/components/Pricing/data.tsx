import { ReactNode } from 'react'

export interface FeatureCluster {
    topic: string
    features?: string[]
    description?: string
    topicClass?: string
}

export interface FeatureInfo {
    label: string | ReactNode
    description?: string | ReactNode
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
        topic: 'Code Search',
        features: ['batchChanges', 'codeInsights', 'codeNavigation', 'notebooks', 'codeMonitoring', 'comprehensiveApi'],
    },
    {
        topic: 'Code host integrations',
        features: ['cloudCodeHosts'],
    },
    {
        topic: 'Security and admin',
        features: ['ssoSaml', 'securityRoles', 'analytics', 'soc2', 'repoPerms'],
        topicClass: 'mb-6',
    },
    {
        topic: 'Scale and performance',
        features: ['enterpriseStarterStorage', 'enterpriseStarterExecutors'],
        topicClass: 'mb-6',
    },
    {
        topic: 'Standard deployment',
        features: ['cloudDeployment', 'selfHostedSingleNode'],
        topicClass: 'mb-6',
    },
    {
        topic: 'Support',
        features: ['support'],
    },
]

/** Enterprise spotlight feature set */
export const ENTERPRISE_FEATURES_OVERVIEW: FeatureCluster[] = [
    {
        topic: 'Code Search',
        features: ['batchChanges', 'codeInsights', 'codeNavigation', 'notebooks', 'codeMonitoring', 'comprehensiveApi'],
    },
    {
        topic: 'Code host integrations',
        features: ['otherCodeHosts'],
    },
    {
        topic: 'Advanced security',
        features: ['ssoSaml', 'securityRoles', 'analytics', 'soc2', 'customPerms', 'privateInstance'],
        topicClass: 'mb-6',
    },
    {
        topic: 'Scale and performance',
        features: ['enterpriseStorage', 'enterpriseExecutors'],
        topicClass: 'mb-6',
    },
    {
        topic: 'Flexible deployment',
        features: ['cloudDeployment', 'selfHostedMultiAndSingleNode', 'airgappedDeployment'],
        topicClass: 'mb-6',
    },
    {
        topic: 'Enhanced support',
        features: ['slaSupport', 'technicalAdvisor', 'professionalServices'],
    },
]

/** Free feature set */
export const FREE_FEATURES_OVERVIEW: FeatureCluster[] = [
    {
        topic: '',
        features: ['freeAutocompletions'],
    },
    {
        topic: '',
        features: ['freeMessageAndcommands'],
    },
    {
        topic: 'Code context and personalization',
        features: ['freeCodeContext'],
        topicClass: 'mb-6',
    },
    {
        topic: 'LLM Support',
        features: ['freeLLMsupport'],
    },
    {
        topic: 'Compatibility',
        features: ['supportedCodeEditors', 'supportedPL', 'supportedLangs', 'supportCode'],
    },
    {
        topic: 'Support',
        features: ['freeSupport'],
    },
]

export const PRO_FEATURES_OVERVIEW: FeatureCluster[] = [
    {
        topic: '',
        features: ['proAutoCompletions'],
    },
    {
        topic: '',
        features: ['proMessageAndcommands'],
    },
    {
        topic: 'Code context and personalization',
        features: ['proCodeContext'],
        topicClass: 'mb-6',
    },
    {
        topic: 'LLM Support',
        features: ['proLLMchat', 'proLLMcommands'],
    },
    {
        topic: 'Compatibility',
        features: ['supportedCodeEditors', 'supportedPL', 'supportedLangs', 'supportCode'],
    },
    {
        topic: 'Support',
        features: ['freeSupport'],
    },
]

export const ENTERPRISE_CODY_FEATURES_OVERVIEW: FeatureCluster[] = [
    {
        topic: '',
        features: ['proAutoCompletions'],
    },
    {
        topic: '',
        features: ['proMessageAndcommands'],
    },
    {
        topic: 'Code context and personalization',
        features: ['entCodeContext'],
        topicClass: 'mb-6',
    },
    {
        topic: 'LLM Support',
        features: ['entLLMchoices', 'BringYourLLMKey', 'BringYourLLM'],
    },
    {
        topic: 'Enterprise Features',
        features: ['everythingInPro', 'entSupport', 'flexDeployment', 'entAdmin', 'guardrails'],
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
    },
    cody: {
        label: 'Cody (Beta)',
        description: 'A code-aware, AI programming assistant for writing, fixing, and optimizing code.',
    },
    ownership: {
        label: 'Code ownership',
        description: 'Track and infer code ownership across your codebase.',
    },

    // Security and admin
    ssoSaml: {
        label: 'SSO/SAML',
    },
    securityRoles: {
        label: 'User and admin roles',
    },
    repoPerms: {
        label: 'Standard repository permissions',
    },
    customPerms: {
        label: 'Custom repository permissions',
    },
    privateInstance: {
        label: 'Private instance access',
    },
    analytics: {
        label: 'In-product analytics',
    },
    soc2: {
        label: 'SOC-2 Type II',
        description: '',
    },

    // Deployment
    flexibleDeployment: {
        label: 'Flexible deployment',
        description: '',
    },
    cloudDeployment: {
        label: 'Sourcegraph Cloud',
    },
    selfHostedMultiAndSingleNode: {
        label: 'Self-hosted (single-node and multi-node cluster)',
    },
    selfHostedSingleNode: {
        label: 'Self-hosted (single-node)',
    },
    airgappedDeployment: {
        label: 'Air-gapped deployment',
    },
    sourcegraphCloud: {
        label: 'Sourcegraph Cloud',
        description: '',
    },
    support: {
        label: '24/5 support',
        description: '',
    },
    // Code hosts
    cloudCodeHosts: {
        label: 'Popular cloud code hosts',
    },
    selfHostedCodeHosts: {
        label: 'Self-hosted code hosts',
        description: 'GitHub Enterprise Server, GitLab Self-managed, Bitbucket Server/Data Center, and Perforce.',
    },
    otherCodeHosts: {
        label: 'All code hosts',
    },
    freeAutocompletions: {
        label: (
            <p className="m-0 text-[16px] leading-5 -tracking-[0.25px]">
                <span className="font-bold">500 </span> Autocompletions per month
            </p>
        ),
    },
    freeMessageAndcommands: {
        label: (
            <p className="m-0 text-[16px] leading-5 -tracking-[0.25px]">
                <span className="font-bold">20 </span> Messages and Commands per month
            </p>
        ),
    },
    freeCodeContext: {
        label: (
            <div className="grid gap-6">
                <p className="m-0">Personalization for small codebases</p>
            </div>
        ),
    },
    supportedLangs: {
        label: 'Many human language support',
        description: 'Spanish, French, German, Italian, Chinese, Japanese, Korean, Latin, and Esperanto',
    },
    supportedCodeEditors: {
        label: 'VS Code, JetBrains, IDEs, and NeoVim',
    },
    supportedPL: {
        label: 'All major coding languages',
        description: 'JavaScript, TypeScript, HTML/CSS, Python, Java, C/C++, C#, PHP, and more',
    },
    supportCode: {
        label: 'All major code hosts',
        description: 'GitHub, GitLab, Bitbucket, Gerrit, Azure DevOps',
    },
    freeSupport: {
        label: 'Community support through Discord',
    },
    freeLimitation: {
        label: '1 user',
    },
    proAutoCompletions: {
        label: (
            <p className="m-0 text-[16px] leading-5 -tracking-[0.25px]">
                <span className="font-bold">Unlimited </span> Autocompletions
            </p>
        ),
    },
    proMessageAndcommands: {
        label: (
            <p className="m-0 text-[16px] leading-5 -tracking-[0.25px]">
                <span className="font-bold">Unlimited</span> Messages and Commands
            </p>
        ),
    },
    proCodeContext: {
        label: <p className="m-0">Personalization for larger codebases</p>,
    },
    entCodeContext: {
        label: <p className="m-0">Advanced personalization for enterprise codebases</p>,
    },
    everythingInPro: {
        label: 'Everything in Pro plus...',
    },
    entSupport: {
        label: 'Enterprise support',
    },
    flexDeployment: {
        label: 'Flexible deployment options',
    },
    entAdmin: {
        label: 'Enterprise admin and security features (SSO, SAML, SCIM, Audit Logs, etc.)',
    },
    guardrails: {
        label: 'Guardrails',
    },
    freeLLMsupport: {
        label: 'Default LLMs for Chat, Commands, and Autocomplete',
    },
    proLLMchat: {
        label: 'Multiple LLM choices for chat',
        description: 'Claude Instant 1.2, Claude 2, ChatGPT 3.5 Turbo, ChatGPT 4 Turbo Preview',
    },
    proLLMcommands: {
        label: 'Default LLMs for Commands and Autocomplete',
    },
    entLLMchoices: {
        label: 'Flexible LLM choices',
        description: 'Claude Instant 1.2, Claude 2, ChatGPT 3.5 Turbo, ChatGPT 4 Turbo Preview',
    },
    BringYourLLMKey: {
        label: 'Bring your own LLM key',
    },
    BringYourLLM: {
        label: 'Bring your own LLM',
    },
}

export const SPOTLIGHT_FEATURE_INFO: Record<string, FeatureInfo> = {
    ...FEATURE_INFO,

    // Scale and performance
    enterpriseStarterStorage: {
        label: 'Up to 75GB cloud code storage',
    },
    enterpriseStorage: {
        label: 'Over 75GB cloud code storage',
    },
    enterpriseStarterExecutors: {
        label: '2 executors',
    },
    enterpriseExecutors: {
        label: '4 executors',
    },

    // Support
    slaSupport: {
        label: 'Enhanced support SLAs',
    },
    technicalAdvisor: {
        label: 'Technical Advisor (with >$100k spend)',
    },
    professionalServices: {
        label: 'Professional services available',
        description: '',
    },
}

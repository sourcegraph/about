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
    badgeLabel?: string
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
    {
        topic: 'Developer minimum',
        features: ['greaterThan50'],
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
        features: ['supportedCodeEditors', 'supportedProgLanguages', 'supportedHumanLanguages', 'supportedCodeHosts'],
    },
    {
        topic: 'Support',
        features: ['freeSupport'],
    },
    {
        topic: 'Developer limit',
        features: ['freeLimitation'],
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
        features: ['supportedCodeEditors', 'supportedProgLanguages', 'supportedHumanLanguages', 'supportedCodeHosts'],
    },
    {
        topic: 'Support',
        features: ['proSupport'],
    },
    {
        topic: 'Developer limit',
        features: ['freeLimitation'],
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
        topic: 'Enterprise features',
        features: ['everythingInPro', 'flexDeployment', 'entAdmin', 'guardrails', 'contextFilters'],
    },
    {
        topic: 'Support',
        features: ['enterpriseSupport'],
    },
    {
        topic: 'Developer minimum',
        features: ['greaterThan50'],
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
            <p className="m-0 text-[16px] leading-5 tracking-[-0.25px]">
                <span className="font-semibold">Unlimited </span> Autocomplete
            </p>
        ),
    },
    freeMessageAndcommands: {
        label: (
            <p className="m-0 text-[16px] font-normal -tracking-[0.25px]">
                <span className="font-bold">200 </span> Messages and commands per month
            </p>
        ),
    },
    freeCodeContext: {
        label: (
            <div className="grid gap-6">
                <p className="m-0">Personalization for small local codebases</p>
            </div>
        ),
    },
    supportedLangs: {
        label: 'Many human language support',
        description: 'Spanish, French, German, Italian, Chinese, Japanese, Korean, Latin, and Esperanto',
    },
    supportedCodeEditors: {
        label: 'VS Code, JetBrains IDEs, and Neovim',
    },
    freeAdvancedContext: {
        label: (
            <p className="mt-2 text-[14px] font-normal leading-[19.88px]">
                <span className="font-bold">Limited </span> Advanced context is available for up to 5MB of personal code
            </p>
        ),
    },
    freeAvailableAdvancedContext: {
        label: 'Advanced context is available for any git-based code host',
    },
    supportedProgLanguages: {
        label: 'All popular coding languages',
        description: 'JavaScript, TypeScript, HTML/CSS, Python, Java, C/C++, C#, PHP, and more',
    },
    supportedHumanLanguages: {
        label: 'Many human languages',
        description: 'English, Spanish, French, German, Italian, Chinese, Japanese, Korean, and more',
    },
    supportedCodeHosts: {
        label: 'All major code hosts',
        description: 'GitHub, GitLab, Bitbucket, Gerrit, Azure DevOps',
    },
    freeSupport: {
        label: 'Community support only',
    },
    proSupport: {
        label: 'Support with limited SLAs',
    },
    enterpriseSupport: {
        label: 'Enterprise support',
    },
    freeLimitation: {
        label: '1 user',
    },
    greaterThan50: {
        label: '50+ users',
    },
    proAutoCompletions: {
        label: (
            <p className="m-0 text-[16px] leading-5 -tracking-[0.25px]">
                <span className="font-semibold">Unlimited </span> Autocomplete
            </p>
        ),
    },
    proMessageAndcommands: {
        label: (
            <p className="m-0 text-[16px] leading-5 -tracking-[0.25px]">
                <span className="font-semibold">Unlimited</span> Messages and commands
            </p>
        ),
    },
    codeIntAutoCompletions: {
        label: 'Unlimited autocomplete',
    },
    codeIntMessageAndcommands: {
        label: 'Unlimited messages and commands',
    },
    proCodeContext: {
        label: <p className="m-0 mt-2">Personalization for larger local codebases</p>,
    },
    entCodeContext: {
        label: <p className="m-0">Advanced personalization for enterprise codebases</p>,
    },
    everythingInPro: {
        label: 'Everything in Pro plus...',
    },
    flexDeployment: {
        label: 'Flexible deployment options',
    },
    entAdmin: {
        label: 'Enterprise admin and security features (SSO, SAML, SCIM, audit logs, etc.)',
    },
    guardrails: {
        label: 'Guardrails',
        description: "We scan Cody's output for OSS code, reducing the risk of copyrighted code in suggestions",
    },
    contextFilters: {
        label: 'Context Filters',
        description: 'Prevent sensitive files from being sent to third-party LLM providers',
    },
    freeLLMsupport: {
        label: 'Default LLMs for chat, commands, and autocomplete',
    },
    proLLMchat: {
        label: 'Multiple LLM choices for chat',
        description: 'GPT-4o, GPT-4 Turbo, Gemini Flash and Pro, Mixtral, Claude 3 (Opus, Sonnet, Haiku)',
    },
    proLLMcommands: {
        label: 'Default LLMs for commands and autocomplete',
    },
    entLLMchoices: {
        label: 'Flexible LLM choices',
        description: 'GPT-4o, GPT-4 Turbo, Gemini Flash and Pro, Claude 3 (Opus, Sonnet, Haiku)',
    },
    BringYourLLMKey: {
        label: 'Bring your own LLM key',
        description: 'Bring your own key with Azure OpenAI and Amazon Bedrock',
    },
    BringYourLLM: {
        label: 'Bring your own LLM',
    },
    codeIntelEntLLMchoices: {
        label: 'Flexible LLM choices',
        description: 'GPT-4o, GPT-4 Turbo, Gemini Flash and Pro, Claude 3 (Opus, Sonnet, Haiku)',
    },
    codeIntelBringYourLLMKey: {
        label: 'Bring your own LLM key',
        description: 'Bring your own key with Azure OpenAI and Amazon Bedrock',
    },
    codeIntelAdminControls: {
        label: 'Admin controls',
        description: 'Use RBAC to manage individual and group permissions to Cody Enterprise',
    },
    codeIntelGuardrails: {
        label: 'Guardrails',
        badgeLabel: 'new',
        description: "We scan Cody's output for OSS code, reducing the risk of copyrighted code in suggestions",
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
    advancedCodeContext: {
        label: 'Advanced code context for enterprise codebases',
    },
    codeIntelCodeSearch: {
        label: 'Code Search',
    },
    codeIntelCodeNavigation: {
        label: 'Code navigation',
    },
    codeIntelBatchChanges: {
        label: 'Batch Changes',
    },
    codeIntelCodeInsights: {
        label: 'Code Insights',
    },
    codeIntelNotebooks: {
        label: 'Notebooks',
    },
    codeIntelCodeMonitoring: {
        label: 'Code monitoring',
    },
    codeIntelComprehensiveApi: {
        label: 'Comprehensive API',
    },
}

export const CODE_INTELLIGENCE_CE_FEATURES: FeatureCluster[] = [
    {
        topic: 'Features',
        features: ['codeIntAutoCompletions', 'codeIntMessageAndcommands'],
    },
    {
        topic: 'Code context and personalization',
        features: ['advancedCodeContext'],
    },
    {
        topic: 'LLM support',
        features: ['codeIntelEntLLMchoices', 'codeIntelBringYourLLMKey'],
    },
    {
        topic: 'Advanced security',
        features: ['guardrails', 'contextFilters', 'codeIntelAdminControls'],
        topicClass: 'mb-6',
    },
]

export const CODE_INTELLIGENCE_CSE_FEATURES: FeatureCluster[] = [
    {
        topic: 'Features',
        features: [
            'codeIntelCodeSearch',
            'codeIntelBatchChanges',
            'codeIntelCodeInsights',
            'codeIntelNotebooks',
            'codeIntelCodeMonitoring',
            'codeIntelComprehensiveApi',
        ],
    },
    {
        topic: 'Code host integrations',
        features: ['otherCodeHosts'],
    },
    {
        topic: 'Advanced security',
        features: ['ssoSaml', 'customPerms'],
        topicClass: 'mb-6',
    },
]

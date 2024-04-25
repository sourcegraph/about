export interface ComparisonFeature {
    feature: string
    feature_details: string
    view_feature_details: boolean
    cody: boolean | string
    cody_details: string | string[]
    view_cody_details: boolean
    competitor: boolean | string
    competitor_details: string | string[]
    view_competitor_details: boolean
}

export interface CompareDataType {
    competitorName: string
    attributesData: { selection: string; attributes: ComparisonFeature[] }[]
}

const defaultAttributes = {
    feature_details: '',
    view_feature_details: false,
    view_cody_details: false,
    view_competitor_details: false,
}

interface CreateAttributeProps {
    feature: string
    feature_details?: string
    view_feature_details?: boolean
    cody?: boolean | string
    cody_details?: string | string[]
    view_cody_details?: boolean
    competitor?: boolean | string
    competitor_details?: string | string[]
    view_competitor_details?: boolean
}
const createAttribute = ({
    feature,
    cody = true,
    cody_details = '',
    competitor = false,
    competitor_details = '',
}: CreateAttributeProps): ComparisonFeature => ({
    ...defaultAttributes,
    feature,
    cody,
    cody_details,
    competitor,
    competitor_details,
})

export const githubVsCodeSearch: CompareDataType = {
    competitorName: 'GitHub code search',
    attributesData: [
        {
            selection: 'Search',
            attributes: [
                createAttribute({
                    feature: 'Search across multiple code hosts',
                    cody_details: 'Bitbucket, GitHub, GitLab, Gerritt, Perforce, any git-based code host',
                    competitor_details: 'GitHub only',
                }),
                createAttribute({
                    feature: 'Multi-line search',
                }),
                createAttribute({
                    feature: 'Structural search',
                }),
                createAttribute({
                    feature: 'Literal search',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Regular expression search',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Comprehensive search across all branches',
                    competitor_details:
                        'repositories and forks can be searched, but only the default branch can be selected',
                }),
                createAttribute({
                    feature: 'Commit diff search',
                }),
                createAttribute({
                    feature: 'Commit message search',
                }),
                createAttribute({
                    feature: 'Symbol searching',
                    cody: '75+ languages',
                    competitor: '10 languages',
                }),
                createAttribute({
                    feature: 'Case-sensitive search',
                }),
                createAttribute({
                    feature: 'Comprehensive search results',
                    cody: '500 results by default, more can be added via filter',
                    competitor: '100 results max',
                }),
                createAttribute({
                    feature: 'Search across issues, pull requests, and discussions',
                    cody: false,
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Search jobs',
                }),
                createAttribute({
                    feature: 'Time and date filtering on commits',
                }),
                createAttribute({
                    feature: 'Visual search aggregation charts',
                }),
                createAttribute({
                    feature: 'Scope search to repository groups with search contexts',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Refine and narrow down search query with filters',
                    competitor: true,
                }),
            ],
        },
        {
            selection: 'Navigation',
            attributes: [
                createAttribute({
                    feature: 'Search-based code navigation',
                    cody: '40 languages',
                    competitor: '11 languages',
                }),
                createAttribute({
                    feature: 'Precise code navigation: language support',
                    cody: '11 languages',
                    cody_details: 'Go, TypeScript, JavaScript, C, C++, Java, Scala, Kotlin, Ruse, Python, Ruby',
                    competitor: '2 languages',
                    competitor_details: ' Python, TypeScript',
                }),
                createAttribute({
                    feature: 'Precise code navigation: technical details',
                    cody: 'SCIP-based with 100% accuracy',
                    competitor: 'Heuristics-based, high accuracy with some false positives',
                }),
                createAttribute({
                    feature: 'Precise code navigation: setup',
                    cody: 'Opt-in',
                    competitor: 'No setup required',
                }),
                createAttribute({
                    feature: 'Precise code navigation: cross-repository',
                    competitor: true,
                }),
            ],
        },
        {
            selection: 'Large scale code changes',
            attributes: [
                createAttribute({
                    feature:
                        'Make large-scale code changes across many repositories and code hosts, and track the status of bulk codebase changes through visual dashboards and burndown charts',
                }),
            ],
        },
        {
            selection: 'Insights',
            attributes: [
                createAttribute({
                    feature:
                        'Codebase insights: Transform code into a queryable database to create custom, visual dashboards to track migrations, vulnerabilities, versions, code health, adoption, ownership, and other metrics',
                }),
            ],
        },
        {
            selection: 'API',
            attributes: [
                createAttribute({
                    feature: 'GraphQL API',
                }),
                createAttribute({
                    feature: 'Stream API',
                }),
            ],
        },
        {
            selection: 'Extensions',
            attributes: [
                createAttribute({
                    feature: 'IDE',
                    cody_details: 'VS Code, JetBrains IDEs, Sublime Text, Atom, Gitpod',
                }),
                createAttribute({
                    feature: 'Integration with documentation for knowledge sharing',
                }),
            ],
        },
    ],
}

export const copilotVsCody: CompareDataType = {
    competitorName: 'GitHub Copilot',
    attributesData: [
        {
            selection: 'Features',
            attributes: [
                createAttribute({
                    feature: 'Autocomplete',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Chat',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Commands',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Custom commands',
                }),
            ],
        },
        {
            selection: 'IDE support',
            attributes: [
                createAttribute({
                    feature: 'Visual Studio Code',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'JetBrains',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Visual Studio',
                    cody: false,
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Other',
                    competitor: true,
                    cody_details: ['Neovim.'],
                    competitor_details: ['Neovim.'],
                }),
            ],
        },
        {
            selection: 'LLM / Model',
            attributes: [
                createAttribute({
                    feature: 'Chat model (default)',
                    cody: 'Claude 3',
                    competitor: 'GPT-4',
                }),
                createAttribute({
                    feature: 'Autocomplete model (default)',
                    cody: 'StarCoder',
                    competitor: 'Codex',
                }),
                createAttribute({
                    feature: 'Choose your LLM',
                }),
                createAttribute({
                    feature: 'Bring your own LLM key',
                }),
                createAttribute({
                    feature: 'LLM hosting',
                    cody: 'Cloud',
                    competitor: 'Cloud',
                }),
            ],
        },
        {
            selection: 'Context and personalization',
            attributes: [
                createAttribute({
                    feature: 'Personalized responses using codebase context',
                    cody_details: 'Available on all tiers. Enterprise tier supports all code hosts.',
                    competitor: true,
                    competitor_details: 'Enterprise tier only. Limited to code hosted on GitHub.',
                }),
                createAttribute({
                    feature: 'Fine-tuned LLM',
                    cody: false,
                    competitor: true,
                    competitor_details: 'Enterprise tier only.',
                }),
            ],
        },
        {
            selection: 'Pricing',
            attributes: [
                createAttribute({
                    feature: 'Free tier offered',
                    competitor: true,
                    competitor_details: 'Free for students, teachers, and OSS maintainers',
                }),
                createAttribute({
                    feature: 'Pro tier pricing for individuals',
                    cody: '$9 / user / month',
                    competitor: '$10 / user / month',
                }),
                createAttribute({
                    feature: 'Enterprise tier pricing',
                    cody: '$19 / user / month',
                    competitor: '$39 / user / month',
                    competitor_details: 'Requires GitHub Enterprise Cloud',
                }),
            ],
        },
    ],
}

export const codeiumVsCody: CompareDataType = {
    competitorName: 'Codeium',
    attributesData: [
        {
            selection: 'Features',
            attributes: [
                createAttribute({
                    feature: 'Autocomplete',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Chat',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Commands',
                }),
                createAttribute({
                    feature: 'Custom commands',
                }),
            ],
        },
        {
            selection: 'IDE support',
            attributes: [
                createAttribute({
                    feature: 'Visual Studio Code',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'JetBrains',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Visual Studio',
                    cody: false,
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Other',
                    cody_details: ['Neovim'],
                    competitor: true,
                    competitor_details: ['Neovim ', 'Eclipse ', 'Xcode ', 'Sublime ', 'Emacs '],
                }),
            ],
        },
        {
            selection: 'LLM / Model',
            attributes: [
                createAttribute({
                    feature: 'Chat model (default)',
                    cody: 'Claude 3 Sonnet',
                    competitor: 'Proprietary',
                }),
                createAttribute({
                    feature: 'Autocomplete model (default)',
                    cody: 'StarCoder',
                    competitor: 'Not disclosed',
                }),
                createAttribute({
                    feature: 'Choose your LLM',
                }),
                createAttribute({
                    feature: 'Bring your own LLM key',
                }),
                createAttribute({
                    feature: 'LLM hosting',
                    cody: 'Cloud',
                    competitor: 'Cloud or on-prem',
                }),
            ],
        },
        {
            selection: 'Context and personalization',
            attributes: [
                createAttribute({
                    feature: 'Personalized responses using codebase context',
                    cody_details: 'Available on all tiers',
                    competitor: true,
                    competitor_details: 'Available for all tiers',
                }),
                createAttribute({
                    feature: 'Fine-tuned LLM',
                    cody: false,
                    competitor: true,
                    competitor_details: 'Enterprise tier',
                }),
            ],
        },
        {
            selection: 'Pricing',
            attributes: [
                createAttribute({
                    feature: 'Free tier offered',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Pro tier pricing for individuals',
                    cody: '$9 / user / month',
                    competitor: '$15 / user / month',
                }),
            ],
        },
    ],
}

export const amazonCodewhispererVsCody: CompareDataType = {
    competitorName: 'Amazon CodeWhisperer',
    attributesData: [
        {
            selection: 'Features',
            attributes: [
                createAttribute({
                    feature: 'Autocomplete',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Chat',
                    competitor: true,
                    competitor_details: 'Preview',
                }),
                createAttribute({
                    feature: 'Commands',
                }),
                createAttribute({
                    feature: 'Custom commands',
                }),
                createAttribute({
                    feature: 'Security vulnerability scanning',
                    cody: false,
                    competitor: true,
                }),
            ],
        },
        {
            selection: 'IDE support',
            attributes: [
                createAttribute({
                    feature: 'Visual Studio Code',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'JetBrains',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Visual Studio',
                    cody: false,
                }),
                createAttribute({
                    feature: 'Other',
                    cody_details: ['Neovim'],
                    competitor: true,
                    competitor_details: ['AWS Cloud9', 'AWS Lambda'],
                }),
            ],
        },
        {
            selection: 'LLM / Model',
            attributes: [
                createAttribute({
                    feature: 'Chat model (default)',
                    cody: 'Claude 3 Sonnet',
                }),
                createAttribute({
                    feature: 'Autocomplete model (default)',
                    cody: 'StarCoder',
                    competitor: 'Not disclosed',
                }),
                createAttribute({
                    feature: 'Choose your LLM',
                }),
                createAttribute({
                    feature: 'Bring your own LLM key',
                }),
                createAttribute({
                    feature: 'LLM hosting',
                    cody: 'Cloud',
                    competitor: 'Cloud',
                }),
            ],
        },
        {
            selection: 'Context and personalization',
            attributes: [
                createAttribute({
                    feature: 'Personalized responses using codebase context',
                    cody_details: 'Available on all tiers',
                    competitor: true,
                    competitor_details: 'Preview for Enterprise tier',
                }),
                createAttribute({
                    feature: 'Fine-tuned LLM',
                    cody: false,
                    competitor: true,
                    competitor_details: 'Preview for Enterprise tier',
                }),
            ],
        },
        {
            selection: 'Pricing',
            attributes: [
                createAttribute({
                    feature: 'Free tier offered',
                    competitor: true,
                }),
            ],
        },
    ],
}

export const cursorVsCody: CompareDataType = {
    competitorName: 'Cursor',
    attributesData: [
        {
            selection: 'Features',
            attributes: [
                createAttribute({
                    feature: 'Autocomplete',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Chat',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Commands',
                }),
                createAttribute({
                    feature: 'Custom commands',
                }),
            ],
        },
        {
            selection: 'IDE support',
            attributes: [
                createAttribute({
                    feature: 'Visual Studio Code',
                    competitor: true,
                    competitor_details: 'Cursor is a standalone fork of VS Code',
                }),
                createAttribute({
                    feature: 'JetBrains',
                }),
                createAttribute({
                    feature: 'Visual Studio',
                    cody: false,
                }),
                createAttribute({
                    feature: 'Other',
                }),
            ],
        },
        {
            selection: 'LLM / Model',
            attributes: [
                createAttribute({
                    feature: 'Chat model (default)',
                    cody: 'Claude 3 Sonnet',
                    competitor: 'GPT-3.5',
                }),
                createAttribute({
                    feature: 'Autocomplete model (default)',
                    cody: 'StarCoder',
                }),
                createAttribute({
                    feature: 'Choose your LLM',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Bring your own LLM key',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'LLM hosting',
                    cody: 'Cloud',
                    competitor: 'Cloud',
                }),
                createAttribute({
                    feature: 'Pro tier pricing for individuals',
                    cody: '$9 / user / month',
                    competitor: '$20 / user / month',
                }),
            ],
        },
        {
            selection: 'Context and personalization',
            attributes: [
                createAttribute({
                    feature: 'Personalized responses using codebase context',
                    cody_details: 'Available on all tiers',
                    competitor: true,
                    competitor_details: 'Available on all tiers',
                }),
                createAttribute({
                    feature: 'Fine-tuned LLM',
                    cody: false,
                    competitor_details: 'Waitlist for Enterprise tier',
                }),
            ],
        },
        {
            selection: 'Pricing',
            attributes: [
                createAttribute({
                    feature: 'Free tier offered',
                    competitor_details: 'Free for students, teachers, and OSS mainters',
                }),
            ],
        },
    ],
}

export const tabnineVsCody: CompareDataType = {
    competitorName: 'Tabnine',
    attributesData: [
        {
            selection: 'Features',
            attributes: [
                createAttribute({
                    feature: 'Autocomplete',
                    competitor: true,
                    competitor_details: 'Limited to 2-3 word completions on free tier',
                }),
                createAttribute({
                    feature: 'Chat',
                    competitor: true,
                    competitor_details: 'Available for Pro and Enterprise users',
                }),
                createAttribute({
                    feature: 'Commands',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Custom commands',
                    competitor: true,
                }),
            ],
        },
        {
            selection: 'IDE support',
            attributes: [
                createAttribute({
                    feature: 'Visual Studio Code',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'JetBrains',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Visual Studio',
                    cody: false,
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Other',
                    cody_details: ['Neovim'],
                    competitor: true,
                    competitor_details: ['Eclipse'],
                }),
            ],
        },
        {
            selection: 'LLM / Model',
            attributes: [
                createAttribute({
                    feature: 'Chat model (default)',
                    cody: 'Claude 3 Sonnet',
                    competitor: 'Proprietary',
                }),
                createAttribute({
                    feature: 'Autocomplete model (default)',
                    cody: 'StarCoder',
                    competitor: 'Proprietary',
                }),
                createAttribute({
                    feature: 'Choose your LLM',
                }),
                createAttribute({
                    feature: 'Bring your own LLM key',
                }),
                createAttribute({
                    feature: 'LLM hosting',
                    cody: 'Cloud',
                    competitor: 'Cloud or on-prem',
                }),
                createAttribute({
                    feature: 'Pro tier pricing for individuals',
                    cody: '$9 / user / month',
                    competitor: '$12 / user / month',
                }),
            ],
        },
        {
            selection: 'Context and personalization',
            attributes: [
                createAttribute({
                    feature: 'Personalized responses using codebase context',
                    cody_details: 'Available on all tiers',
                    competitor_details: 'Coming soon for Enterprise tier',
                }),
                createAttribute({
                    feature: 'Fine-tuned LLM',
                    cody: false,
                    competitor: true,
                    competitor_details: 'Enterprise tier',
                }),
            ],
        },
        {
            selection: 'Pricing',
            attributes: [
                createAttribute({
                    feature: 'Free tier offered',
                    competitor: true,
                }),
            ],
        },
    ],
}

export const continueVsCody: CompareDataType = {
    competitorName: 'Continue',
    attributesData: [
        {
            selection: 'Features',
            attributes: [
                createAttribute({
                    feature: 'Autocomplete',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Chat',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Commands',
                }),
                createAttribute({
                    feature: 'Custom commands',
                }),
            ],
        },
        {
            selection: 'IDE support',
            attributes: [
                createAttribute({
                    feature: 'Visual Studio Code',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'JetBrains',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Visual Studio',
                    cody: false,
                }),
                createAttribute({
                    feature: 'Other',
                    cody_details: ['Neovim'],
                }),
            ],
        },
        {
            selection: 'LLM / Model',
            attributes: [
                createAttribute({
                    feature: 'Chat model (default)',
                    cody: 'Claude 3 Sonnet',
                    competitor: 'Code Llama',
                    competitor_details: '7B parameters via Ollama',
                }),
                createAttribute({
                    feature: 'Autocomplete model (default)',
                    cody: 'StarCoder',
                    competitor: 'StarCoder',
                    competitor_details: '2B parameters via Ollama',
                }),
                createAttribute({
                    feature: 'Choose your LLM',
                    cody_details: 'Requires a Pro account',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Bring your own LLM key',
                    cody_details: 'Requires an Enterprise license',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'LLM hosting',
                    cody: 'Cloud or local',
                    cody_details: 'With experimental Ollama support',
                    competitor: 'Cloud or local',
                }),
                createAttribute({
                    feature: 'Pro tier pricing for individuals',
                    cody: '$9 / user / month',
                    competitor: '$0 / user / month',
                }),
            ],
        },
        {
            selection: 'Context and personalization',
            attributes: [
                createAttribute({
                    feature: 'Personalized responses using codebase context',
                    cody_details: 'Available on all tiers',
                    competitor: true,
                }),
                createAttribute({
                    feature: 'Fine-tuned LLM',
                    cody: false,
                    competitor: true,
                }),
            ],
        },
        {
            selection: 'Pricing',
            attributes: [
                createAttribute({
                    feature: 'Free tier offered',
                    competitor: true,
                }),
            ],
        },
    ],
}

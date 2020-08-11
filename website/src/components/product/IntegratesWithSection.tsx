import React from 'react'
import { SupportedProgrammingLanguagesLink } from './SupportedProgrammingLanguagesLink'

interface IntegrationEntry {
    type: 'codeHost' | 'service' | 'plugin' | 'language'
    codeReviewIntegration?: true
    iconUrl: string
    description: string
    width?: number
    url?: string
}

const ENTRIES: IntegrationEntry[] = [
    {
        type: 'codeHost',
        codeReviewIntegration: true,
        iconUrl: '/external-logos/github-horizontal-logo.svg',
        description: 'GitHub.com and GitHub Enterprise Server (code hosting and review)',
        width: 95,
        url: '/blog/universal-code-intelligence-github-sourcegraph-browser-extension',
    },
    {
        type: 'codeHost',
        codeReviewIntegration: true,
        iconUrl: '/external-logos/gitlab-logo.svg',
        description: 'GitLab.com and self-managed GitLab CE/EE instances (code hosting and review)',
    },
    {
        type: 'codeHost',
        codeReviewIntegration: true,
        iconUrl: '/external-logos/bitbucket-server-logo.svg',
        description: 'Bitbucket Server (code hosting and review)',
    },
    {
        type: 'codeHost',
        codeReviewIntegration: true,
        iconUrl: '/external-logos/phabricator-logo.svg',
        description: 'Phabricator (code hosting and review)',
    },
    {
        type: 'codeHost',
        iconUrl: '/external-logos/azure-devops.svg',
        description: 'Azure DevOps (code hosting)',
        width: 45,
    },
    {
        type: 'codeHost',
        iconUrl: '/external-logos/aws-codecommit.svg',
        description: 'AWS CodeCommit (code hosting)',
        width: 45,
    },
    {
        type: 'codeHost',
        iconUrl: '/external-logos/git-logo.svg',
        description: 'Any Git repository',
        width: 70,
    },
    {
        type: 'service',
        iconUrl: '/external-logos/datadog-logo.svg',
        description: 'Datadog (APM)',
    },
    {
        type: 'service',
        iconUrl: '/external-logos/sentry-logo.svg',
        description: 'Sentry (error monitoring)',
    },
    {
        type: 'service',
        iconUrl: '/external-logos/lightstep-logo.svg',
        description: 'LightStep (APM and tracing)',
    },
    {
        type: 'service',
        iconUrl: '/external-logos/codecov-logo.svg',
        description: 'Codecov (code coverage)',
        width: 40,
    },
    {
        type: 'service',
        iconUrl: '/external-logos/jira-logo.svg',
        description: 'Jira (project management)',
    },
    {
        type: 'service',
        iconUrl: '/external-logos/hubspot-logo.svg',
        description: 'HubSpot (customer relationship management)',
        width: 90,
    },
    {
        type: 'plugin',
        iconUrl: '/integrations/chrome.svg',
        description: 'Google Chrome (browser extension)',
    },
    {
        type: 'plugin',
        iconUrl: '/integrations/firefox.svg',
        description: 'Mozilla Firefox (browser extension)',
    },
    {
        type: 'plugin',
        iconUrl: '/integrations/vscode.svg',
        description: 'Visual Studio Code (editor extension)',
    },
    {
        type: 'plugin',
        iconUrl: '/integrations/jetbrains.svg',
        description: 'IntelliJ, WebStorm, PyCharm, GoLand, and other JetBrains editors (editor extension)',
    },
    {
        type: 'plugin',
        iconUrl: '/integrations/vim.svg',
        description: 'Vim (editor extension)',
        width: 50,
    },
    {
        type: 'plugin',
        iconUrl: '/integrations/sublime.svg',
        description: 'Sublime Text 3 (editor extension)',
    },
    {
        type: 'plugin',
        iconUrl: '/integrations/atom.svg',
        description: 'Atom (editor extension)',
    },
]

const IntegrationEntriesRow: React.FunctionComponent<{
    text: string
    entries?: IntegrationEntry[]
    children?: React.ReactNode
}> = ({ text, entries, children }) => (
    <div className="integration-entries-row row my-5 pt-3 border-top mx-md-5">
        <div className="integration-entries-row__text col-md-3 my-2 small text-muted text-uppercase font-weight-bold">
            {text}
        </div>
        <div className="col-md-9">
            {children}
            {entries && (
                <div className="d-flex flex-wrap align-items-center">
                    {entries.map(({ description, iconUrl, width, url = '' }, i) =>
                        url ? (
                            <a href={url}>
                                <img
                                    key={i}
                                    className="integrates-with-section__logo mx-2"
                                    src={iconUrl}
                                    alt={description}
                                    title={description}
                                    style={width !== undefined ? { width: `${width}px` } : undefined}
                                />
                            </a>
                        ) : (
                            <img
                                key={i}
                                className="integrates-with-section__logo mx-2"
                                src={iconUrl}
                                alt={description}
                                title={description}
                                style={width !== undefined ? { width: `${width}px` } : undefined}
                            />
                        )
                    )}
                </div>
            )}
        </div>
    </div>
)

export const IntegratesWithSection: React.FunctionComponent<{
    className?: string
    showTypes?: IntegrationEntry['type'][]
    showOnlyCodeHostsWithCodeReviewIntegration?: boolean
    customTypeLabels?: Partial<Record<IntegrationEntry['type'], string>>
}> = ({ className = '', showTypes, showOnlyCodeHostsWithCodeReviewIntegration, customTypeLabels }) => (
    <div className={`integrates-with-section ${className} mx-auto px-4`}>
        <h3 className="text-center font-weight-light">
            TODO(sqs): revamp this section - Sourcegraph integrates with your existing tools and workflow
        </h3>
        <div className="mt-4 mb-2">
            {(!showTypes || showTypes.includes('codeHost')) && (
                <IntegrationEntriesRow
                    text={(customTypeLabels && customTypeLabels.codeHost) || 'Code hosting & review'}
                    entries={ENTRIES.filter(
                        e =>
                            e.type === 'codeHost' &&
                            (!showOnlyCodeHostsWithCodeReviewIntegration || e.codeReviewIntegration)
                    )}
                />
            )}
            {(!showTypes || showTypes.includes('service')) && (
                <IntegrationEntriesRow
                    text={(customTypeLabels && customTypeLabels.service) || 'Other services in your workflow'}
                    entries={ENTRIES.filter(e => e.type === 'service')}
                />
            )}
            {(!showTypes || showTypes.includes('plugin')) && (
                <IntegrationEntriesRow
                    text={(customTypeLabels && customTypeLabels.plugin) || 'Browser & editor integrations'}
                    entries={ENTRIES.filter(e => e.type === 'plugin')}
                />
            )}
            {(!showTypes || showTypes.includes('language')) && (
                <IntegrationEntriesRow
                    text={(customTypeLabels && customTypeLabels.language) || 'Programming languages'}
                >
                    <div className="mt-1">
                        All programming languages are supported. <SupportedProgrammingLanguagesLink /> have additional
                        code intelligence support.
                    </div>
                </IntegrationEntriesRow>
            )}
        </div>
    </div>
)

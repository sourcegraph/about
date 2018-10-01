import * as React from 'react'
import DocsSidebar from './DocsSidebar'

export default class DataCenterSidebar extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <div>
                <h1 className="sidebar-title">Sourcegraph Documentation</h1>
                <DocsSidebar
                    changeSidebar={this.props.changeSidebar}
                    items={[
                        { title: 'Changelog', href: '/changelog' },
                        { title: 'Quickstart', href: '/docs' },
                        { title: 'Overview', href: '/docs/overview' },
                        { title: 'Tour', href: '/docs/tour' },
                        { title: 'Code intelligence', header: true },
                        { title: 'Overview', href: '/docs/code-intelligence' },
                        { title: 'Installation', href: '/docs/code-intelligence/install' },
                        { title: 'Go', href: '/docs/code-intelligence/go', child: true },
                        { title: 'JavaScript', href: '/docs/code-intelligence/javascript', child: true },
                        { title: 'TypeScript', href: '/docs/code-intelligence/typescript', child: true },
                        { title: 'Python', href: '/docs/code-intelligence/python', child: true },
                        { title: 'Java', href: '/docs/code-intelligence/java', child: true },
                        { title: 'PHP', href: '/docs/code-intelligence/php', child: true },
                        { title: 'Swift', href: '/docs/code-intelligence/swift', child: true },
                        {
                            title: 'Other languages',
                            href: '/docs/code-intelligence/experimental-language-servers',
                            child: true,
                        },
                        { title: 'Code search', header: true },
                        { title: 'Overview', href: '/docs/search' },
                        { title: 'Query syntax', href: '/docs/search/query-syntax' },
                        { title: 'Saved searches', href: '/docs/search/saved-searches' },
                        { title: 'Search scopes', href: '/docs/search/scopes' },
                        { title: 'Configure', header: true },
                        { title: 'Overview', href: '/docs/config' },
                        { title: 'Site config', href: '/docs/config/site', child: true },
                        { title: 'User/org/global settings', href: '/docs/config/settings', child: true },
                        { title: 'External Database', href: '/docs/config/external-database' },
                        { title: 'Webhook for repository updates', href: '/docs/config/update-repo-webhook' },
                        { title: 'Admin', header: true },
                        { title: 'Usage statistics', href: '/docs/usage' },
                        { title: 'Deploy', header: true },
                        { title: 'AWS', href: '/docs/deploy/AWS' },
                        { title: 'Google Cloud', href: '/docs/deploy/GCP' },
                        { title: 'DigitalOcean', href: '/docs/deploy/DigitalOcean' },
                    ]}
                    tutorialsItems={[
                        { title: 'Add repositories', href: '/docs/config/repositories' },
                        { title: 'User authentication', href: '/docs/config/authentication' },
                        { title: 'Use a custom domain', href: '/docs/config/custom-domain' },
                        { title: 'Use TLS/SSL', href: '/docs/config/tlsssl' },
                        { title: 'Updating', href: '/docs/server/update' },
                        { title: 'Monitoring and tracing', href: '/docs/config/monitoring-and-tracing' },
                        { title: 'Add organizations', href: '/docs/config/organizations' },
                        { title: 'Federation', href: '/docs/config/federation' },
                        { title: 'Migrating from OpenGrok', href: '/docs/migration/oracle-opengrok-to-sourcegraph' },
                        { title: 'Sourcegraph extensions', href: '/docs/extensions' },
                    ]}
                />
            </div>
        )
    }
}

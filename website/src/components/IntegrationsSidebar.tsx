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
                        { title: 'Overview', href: '/docs/integrations' },
                        { title: 'Browser extension', href: '/docs/features/browser-extension' },
                        { title: 'Configuration', href: '/docs/features/browser-extension/configuration', child: true },
                        {
                            title: 'G Suite installation',
                            href: '/docs/features/browser-extension/g-suite-installation',
                            child: true,
                        },
                        { title: 'Search shortcuts', href: '/docs/features/search-shortcuts' },
                        { title: 'Editor plugins', href: '/docs/integrations/editor-plugins' },
                        { title: 'API', href: '/docs/features/api' },
                    ]}
                />
            </div>
        )
    }
}

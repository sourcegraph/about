import * as React from 'react'
import DocsSidebar from './DocsSidebar'

export default class DataCenterSidebar extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <div>
                <h1 className="sidebar-title">Sourcegraph Documentation</h1>
                <DocsSidebar
                    changeSidebar={this.props.changeSidebar}
                    items={[{ title: 'Data Center', href: '/docs/datacenter' }]}
                />
            </div>
        )
    }
}

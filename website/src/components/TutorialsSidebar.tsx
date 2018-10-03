import * as React from 'react'
import DocsSidebarItem from './DocsSidebarItem'

interface SidebarItemDetails {
    title: string
    href?: string
    header?: boolean
    child?: boolean
}

interface SidebarProps {
    items: SidebarItemDetails[]
}

export default class TutorialSidebar extends React.Component<SidebarProps, any> {
    public render(): JSX.Element | null {
        return (
            <div className="sidebar">
                <div className="list-group">
                    <div className="documentation__tab-pane">
                        <div className="list-group">
                            {this.props.items.map((item, i) => (
                                <DocsSidebarItem
                                    key={i}
                                    title={item.title}
                                    href={item.href}
                                    header={item.header}
                                    child={item.child}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

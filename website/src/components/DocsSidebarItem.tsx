import { Link } from 'gatsby'
import * as React from 'react'

interface DocsSidebarProps {
    title: string
    href?: string
    header?: boolean
    child?: boolean
    neverHighlight?: boolean
    changeSidebar?: () => void
}

export default class DocsSidebarItem extends React.Component<DocsSidebarProps, any> {
    constructor(props: DocsSidebarProps) {
        super(props)
    }
    public render(): JSX.Element | null {
        return this.props.header ? (
            <button className="sidebar__item sidebar__item-action list-group-item list-group-item-action disabled parent">
                <span>{this.props.title}</span>
            </button>
        ) : (
            <Link
                onClick={this.props.changeSidebar}
                to={this.props.href}
                exact={true}
                className={`sidebar__item sidebar__item-action list-group-item list-group-item-action ${
                    this.props.child ? 'grandchild' : 'child'
                }`}
                activeClassName={this.props.neverHighlight ? '' : 'active'}
                id={`docs-sidebar-${this.props.title}`}
            >
                <span>{this.props.title}</span>
            </Link>
        )
    }
}

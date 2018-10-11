import * as React from 'react'
import Layout from './Layout'
import NavigationTabs from './NavigationTabs'
import ServerSidebar from './ServerSidebar'

interface ServerLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: {
        pathname: string
    }
    children: any
}
export default class ServerDocs extends React.Component<ServerLayoutProps, any> {
    constructor(props: ServerLayoutProps) {
        super(props)
        this.state = { showSidebar: false }
    }

    private toggle(): void {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    private toggleNav = () => {
        this.setState({
            showSidebar: !this.state.showSidebar,
        })
        document.body.classList.toggle('body-fixed')
    }
    public render(): JSX.Element | null {
        const sidebarShow = this.state.showSidebar ? 'show nav-container' : 'hide nav-container'
        return (
            <Layout location={this.props.location}>
                <section className="documentation">
                    <div className="docs-nav-container">
                        {' '}
                        <NavigationTabs activeTab="Server" />
                    </div>

                    <div className="container">
                        <div className="documentation__tab-content">
                            <button
                                type="button"
                                className="btn btn-light button-sm nav-toggle"
                                onClick={this.toggleNav}
                            />
                            <div className="documentation__tab-pane">
                                <div className={`${sidebarShow}`}>
                                    <ServerSidebar changeSidebar={this.toggleNav} />
                                </div>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

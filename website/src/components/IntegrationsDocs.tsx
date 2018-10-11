import * as React from 'react'
import IntegrationsSidebar from './IntegrationsSidebar'
import Layout from './Layout'
import NavigationTabs from './NavigationTabs'

interface IntegrationLayoutProps extends React.HTMLProps<HTMLDivElement> {
    children: any
    location: {
        pathname: string
    }
}

export default class IntegrationsDocs extends React.Component<IntegrationLayoutProps, any> {
    constructor(props: IntegrationLayoutProps) {
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
                        <NavigationTabs activeTab="Integrations" />
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
                                    {' '}
                                    <IntegrationsSidebar changeSidebar={this.toggleNav} />{' '}
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

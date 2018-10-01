import * as React from 'react'
import IntegrationsSidebar from './IntegrationsSidebar'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    children: any
}

export default class ServerDocsContainer extends React.Component<DefaultLayoutProps, any> {
    constructor(props: DefaultLayoutProps) {
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
            <div className="documentation__tab-content">
                <button type="button" className="btn btn-light button-sm nav-toggle" onClick={this.toggleNav} />
                <div className="documentation__tab-pane">
                    <div className={`${sidebarShow}`}>
                        {' '}
                        <IntegrationsSidebar changeSidebar={this.toggleNav} />{' '}
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

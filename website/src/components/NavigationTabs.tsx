import { Link } from 'gatsby'
import { CityIcon, PowerPlugIcon, WebIcon } from 'mdi-react'
import * as React from 'react'
import { eventLogger } from '../EventLogger'

export default class NavigationTabs extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        return (
            <div className="container">
                <div className="row">
                    <ul className="nav nav-tabs col" style={{ backgroundColor: '#f2f4f8' }}>
                        <div className="nav-item">
                            <Link
                                className={`nav-link ${this.props.activeTab === 'Server' ? 'active' : ''}`}
                                to="/docs"
                                onClick={this.serverTabClicked}
                            >
                                <WebIcon className="material-icons" />
                                Sourcegraph
                                <span />
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                className={`nav-link ${this.props.activeTab === 'DataCenter' ? 'active' : ''}`}
                                to="/docs/datacenter"
                                onClick={this.dataCenterTabClicked}
                            >
                                <CityIcon className="material-icons" />
                                Data Center
                                <span />
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                className={`nav-link ${this.props.activeTab === 'Integrations' ? 'active' : ''}`}
                                to="/docs/integrations"
                                onClick={this.integrationsTabClicked}
                            >
                                <PowerPlugIcon className="material-icons" />
                                Integrations
                                <span />
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }

    private serverTabClicked = () => {
        eventLogger.trackDocsServerTabClicked()
    }
    private dataCenterTabClicked = () => {
        eventLogger.trackDocsDataCenterTabClicked()
    }
    private integrationsTabClicked = () => {
        eventLogger.trackDocsIntegrationsTabClicked()
    }
}

import { Link } from 'gatsby'
import { CloseIcon } from 'mdi-react'
import * as React from 'react'
import { eventLogger } from '../EventLogger'

export default class Footer extends React.Component<any, any> {
    public render(): JSX.Element | null {
        return (
            <div className="footer__block">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-m-4 col-lg-4 item logo__section">
                                <img className="footer__logo" src="/sourcegraph/logo--light.svg" />
                                <div className="footer__contact">
                                    <p>
                                        <a className="mail__contect" href="mailto:hi@sourcegraph.com" target="_blank">
                                            hi@sourcegraph.com
                                        </a>
                                    </p>
                                    <p className="addr__contact">
                                        142 Minna St, 2nd Floor
                                        <br />
                                        San Francisco CA, 94105
                                    </p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-m-2 col-lg-2 item footer__extend community">
                                <h3>Community</h3>
                                <input type="checkbox" />
                                <ul>
                                    <li>
                                        <Link to="/blog" onClick={this.blogClicked}>
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/sourcegraph"
                                            target="_blank"
                                            onClick={this.gitHubClicked}
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/4803356/"
                                            target="_blank"
                                            onClick={this.linkedInClicked}
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/srcgraph"
                                            target="_blank"
                                            onClick={this.twitterClicked}
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                                <div className="close--icon">
                                    <CloseIcon className="material-icons" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-m-2 col-lg-2 item footer__extend company">
                                <h3>Company</h3>
                                <input type="checkbox" />
                                <ul>
                                    <li>
                                        <Link to="/plan">Master plan</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" onClick={this.aboutClicked}>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/jobs" onClick={this.careersClicked}>
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                                <div className="close--icon">
                                    <CloseIcon className="material-icons" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-m-2 col-lg-2 item footer__extend features">
                                <h3>Features</h3>
                                <input type="checkbox" />
                                <ul>
                                    <li>
                                        <Link
                                            to="https://sourcegraph.com/start#search-datacenter"
                                            onClick={this.codeSearchClicked}
                                        >
                                            Code Search
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://sourcegraph.com/start#intelligence-ntegrations"
                                            onClick={this.codeIntelligenceClicked}
                                        >
                                            Code Intelligence
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://sourcegraph.com/start#search-datacenter"
                                            onClick={this.dataCenterClicked}
                                        >
                                            Data Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://sourcegraph.com/start#intelligence-integrations"
                                            onClick={this.integrationsClicked}
                                        >
                                            Integrations
                                        </Link>
                                    </li>
                                </ul>
                                <div className="close--icon">
                                    <CloseIcon className="material-icons" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-m-2 col-lg-2 item footer__extend resources">
                                <h3>Resources</h3>
                                <input type="checkbox" />
                                <ul>
                                    <li>
                                        <Link to="/docs" onClick={this.docsLinkClicked}>
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/changelog" onClick={this.changelogLinkClicked}>
                                            Changelog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing" onClick={this.pricingLinkClicked}>
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/security" onClick={this.securityClicked}>
                                            Security
                                        </Link>
                                    </li>
                                </ul>
                                <div className="close--icon">
                                    <CloseIcon className="material-icons" />
                                </div>
                            </div>
                        </div>
                        <div className="small__contact">
                            <div className="footer__contact">
                                <p>
                                    <a className="mail__contect" href="mailto:hi@sourcegraph.com" target="_blank">
                                        hi@sourcegraph.com
                                    </a>
                                </p>
                                <p className="addr__contact">
                                    142 Minna St, 2nd Floor
                                    <br />
                                    San Francisco CA, 94105
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 copyright__container item">
                                <span>
                                    <p className="copyright">Copyright © 2018 Sourcegraph, Inc.</p>
                                </span>
                                <span className="terms">
                                    <Link to="/terms" onClick={this.termsClicked}>
                                        Terms
                                    </Link>
                                    <Link to="/privacy" onClick={this.privacyClicked}>
                                        Privacy
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

    private installServerClicked = () => {
        eventLogger.trackInstallSourcegraphServerCTAClicked('Footer')
    }
    private codeSearchClicked = () => {
        eventLogger.trackCodeSearchLinkClicked('Footer')
    }
    private codeIntelligenceClicked = () => {
        eventLogger.trackCodeIntelligenceLinkClicked('Footer')
    }
    private savedQueriesClicked = () => {
        eventLogger.trackSavedQueriesLinkClicked('Footer')
    }
    private integrationsClicked = () => {
        eventLogger.trackIntegrationsLinkClicked('Footer')
    }
    private dataCenterClicked = () => {
        eventLogger.trackDataCenterLinkClicked('Footer')
    }
    private docsLinkClicked = () => {
        eventLogger.trackDocsClicked('Footer')
    }
    private changelogLinkClicked = () => {
        eventLogger.trackChangelogClicked('Footer')
    }
    private pricingLinkClicked = () => {
        eventLogger.trackPricingClicked('Footer')
    }
    private blogClicked = () => {
        eventLogger.trackBlogClicked('Footer')
    }
    private aboutClicked = () => {
        eventLogger.trackAboutClicked('Footer')
    }
    private careersClicked = () => {
        eventLogger.trackCareersClicked('Footer')
    }
    private termsClicked = () => {
        eventLogger.trackTermsClicked('Footer')
    }
    private securityClicked = () => {
        eventLogger.trackSecurityClicked('Footer')
    }
    private privacyClicked = () => {
        eventLogger.trackPrivacyClicked('Footer')
    }
    private gitHubClicked = () => {
        eventLogger.socialMediaClicked('GitHub')
    }
    private twitterClicked = () => {
        eventLogger.socialMediaClicked('Twitter')
    }
    private linkedInClicked = () => {
        eventLogger.socialMediaClicked('LinkedIn')
    }
    private searchPublicCodeClicked = () => {
        eventLogger.trackSearchPublicCodeClicked('Footer')
    }
}

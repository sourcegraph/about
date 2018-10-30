import { Link } from 'gatsby'
import { OpenInAppIcon } from 'mdi-react'
import * as React from 'react'
import { eventLogger } from '../EventLogger'

interface HeaderProps {
    isHome?: boolean
    isProductPage?: boolean
}

export default class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }

    public toggle(): void {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    public render(): JSX.Element | null {
        return (
            <nav className="header navbar navbar-light navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://sourcegraph.com/start">
                        <img src="/sourcegraph/logo.svg" alt="logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navcol-1"
                        onClick={this.toggle}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={`collapse navbar-collapse justify-content-end ${this.state.isOpen ? 'show' : ''}`}
                        id="navcol-1"
                    >
                        <ul className="nav navbar-nav">
                            <li className="header__nav-item nav-item" role="presentation" onClick={this.pricingClicked}>
                                <Link
                                    className="header__nav-link nav-link"
                                    to="/pricing"
                                    activeClassName="header__nav-link-active"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="header__nav-item nav-item" role="presentation" onClick={this.docsClicked}>
                                <a className="header__nav-link nav-link" href="https://docs.sourcegraph.com">
                                    Documentation
                                </a>
                            </li>
                            <li className="header__nav-item nav-item" role="presentation" onClick={this.aboutClicked}>
                                <Link
                                    className="header__nav-link nav-link"
                                    to="/about"
                                    activeClassName="header__nav-link-active"
                                >
                                    Company
                                </Link>
                            </li>
                            <li className="header__nav-item nav-item" role="presentation" onClick={this.blogClicked}>
                                <Link
                                    className="header__nav-link nav-link"
                                    to="/blog"
                                    activeClassName="header__nav-link-active"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                        {!(this.props.isHome || this.props.isProductPage) && (
                            <a href="https://docs.sourcegraph.com/integration/browser_extension">
                                <button className="btn btn-secondary" type="button">
                                    <OpenInAppIcon className="material-icons" />
                                    Install browser extension
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            </nav>
        )
    }
    private aboutClicked = () => {
        eventLogger.trackAboutClicked('header')
    }
    private docsClicked = () => {
        eventLogger.trackDocsClicked('header')
    }
    private pricingClicked = () => {
        eventLogger.trackPricingClicked('header')
    }
    private blogClicked = () => {
        eventLogger.trackBlogClicked('header')
    }
}

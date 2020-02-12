import { Link } from 'gatsby'
import * as React from 'react'
import { eventLogger } from '../EventLogger'
import { ProductPopoverButton } from './ProductPopover'

interface HeaderProps {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
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
            <>
                <nav className="header navbar navbar-dark navbar-expand-md border-bottom p-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="/sourcegraph/logo--light.svg" alt="Sourcegraph logo" />
                        </Link>
                        {!this.props.minimal && (
                            <>
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
                                    className={`collapse navbar-collapse justify-content-end ${
                                        this.state.isOpen ? 'show' : ''
                                    }`}
                                    id="navcol-1"
                                >
                                    <ul className="nav navbar-nav">
                                        <li className="header__nav-item nav-item d-none d-lg-block" role="presentation">
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/universal-code-search"
                                                activeClassName="header__nav-link-active"
                                            >
                                                What is Universal Code Search?
                                            </Link>
                                        </li>
                                        <li
                                            className="header__nav-item nav-item"
                                            role="presentation"
                                            onClick={() => eventLogger.trackProductClicked('header')}
                                        >
                                            <ProductPopoverButton className="header__nav-link nav-link" />
                                        </li>
                                        <li
                                            className="header__nav-item nav-item"
                                            role="presentation"
                                            onClick={this.pricingClicked}
                                        >
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/pricing"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Pricing
                                            </Link>
                                        </li>
                                        <li
                                            className="header__nav-item nav-item"
                                            role="presentation"
                                            onClick={this.docsClicked}
                                        >
                                            <a
                                                className="header__nav-link nav-link"
                                                href="https://docs.sourcegraph.com"
                                            >
                                                Docs
                                            </a>
                                        </li>
                                        <li
                                            className="header__nav-item nav-item"
                                            role="presentation"
                                            onClick={this.aboutClicked}
                                        >
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/about"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Company
                                            </Link>
                                        </li>
                                        <li
                                            className="header__nav-item nav-item"
                                            role="presentation"
                                            onClick={this.blogClicked}
                                        >
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/blog"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a
                                                className="header__nav-link nav-link"
                                                href="https://sourcegraph.com/sign-in"
                                                title="For public code only on Sourcegraph.com"
                                            >
                                                Sign in
                                            </a>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a
                                                className="header__nav-link nav-link"
                                                href="https://sourcegraph.com/sign-up"
                                                title="For public code only on Sourcegraph.com"
                                            >
                                                Sign up
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </>
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

import { Link } from 'gatsby'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import * as React from 'react'

interface HeaderProps {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
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
                {/* Hello Bar - Banner for 2021 Q3 launch */}
                {(this.props.isHome || this.props.isBlog) && (
                    <div className="d-flex align-items-center justify-content-center background-purple text-white font-weight-bold p-2">
                        Sourcegraph is committed to indexing more than 5 million open source repositories
                        <Link to="/blog/" className="ml-2 btn btn-sm btn-light">
                            Read the blog
                        </Link>
                    </div>
                )}

                <nav className={`header navbar navbar-expand-md py-3 ${this.props.className || 'navbar-light'}`}>
                    <div className="container-lg px-0 px-lg-3">
                        <Link className="navbar-brand header__logo" to="/">
                            <span role="img" aria-label="Sourcegraph - Universal code search">
                                {' '}
                            </span>
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
                                    <ul className="nav navbar-nav d-flex w-100">
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/customers"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Customers
                                            </Link>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/case-studies"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Case Studies
                                            </Link>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a
                                                className="header__nav-link nav-link"
                                                href="https://docs.sourcegraph.com"
                                                target="_blank"
                                            >
                                                Docs
                                            </a>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/pricing"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="flex-1">&nbsp;</li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a
                                                className="header__nav-link nav-link"
                                                href="https://sourcegraph.com/sign-in"
                                                title="Search public code with Sourcegraph Cloud"
                                            >
                                                Sign in
                                            </a>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a
                                                className="header__nav-link nav-link btn btn-outline-primary"
                                                href="https://sourcegraph.com/search"
                                                title="Get started with Sourcegraph"
                                            >
                                                Get started
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
}

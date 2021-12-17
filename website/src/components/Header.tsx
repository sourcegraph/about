import { Link } from 'gatsby'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'

interface HeaderProps {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
    hideGetStartedButton?: boolean
}

export default class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props)

        this.dropdownToggle = this.dropdownToggle.bind(this)
        this.toggle = this.toggle.bind(this)
        this.productMenuToggle = this.productMenuToggle.bind(this)
        this.resourcesMenuToggle = this.resourcesMenuToggle.bind(this)
        this.customerMenuToggle = this.customerMenuToggle.bind(this)
        this.handleRightClick = this.handleRightClick.bind(this)

        this.state = {
            isOpen: false,
            menuOpen: false,
            productMenuOpen: false,
            resourcesMenuOpen: false,
            customerMenuOpen: false,
        }
    }

    public dropdownToggle(newValue) {
        this.setState({ menuOpen: newValue })
    }

    public toggle(toggle): void {
        this.setState({ isOpen: !this.state.isOpen })
    }

    public productMenuToggle(toggle) {
        this.setState({ productMenuOpen: !this.state.productMenuOpen })
    }

    public resourcesMenuToggle(toggle) {
        this.setState({ resourcesMenuOpen: !this.state.resourcesMenuOpen })
    }

    public customerMenuToggle(toggle) {
        this.setState({ customerMenuOpen: !this.state.customerMenuOpen })
    }

    public handleRightClick(e) {
        if (e.nativeEvent.which === 3) {
            e.preventDefault()
            window.location.href =
                'https://f.hubspotusercontent20.net/hubfs/2762526/Brand%20assets/Sourcegraph%20Brand%20Kit%202.2%20-%20May%202021.zip'
        }
    }

    public render(): JSX.Element | null {
        return (
            <>
                <nav
                    expand="lg"
                    className={`header navbar navbar-expand-md py-3 ${this.props.className || 'navbar-light'}`}
                >
                    <div className="container-lg">
                        <Navbar.Brand className="header__logo" href="/" onContextMenu={this.handleRightClick}>
                            <span role="img" aria-label="Sourcegraph - Universal code search">
                                {' '}
                            </span>
                        </Navbar.Brand>

                        {!this.props.minimal && (
                            <>
                                <button
                                    className="navbar-toggler justify-content-end"
                                    data-toggle="collapse"
                                    data-target="#mobile-navbar"
                                    onClick={this.toggle}
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <Nav className="left-nav me-auto ml-md-2">
                                    <NavDropdown onToggle={val => this.dropdownToggle(val)} title="Product">
                                        <NavDropdown.Item href="/code-search">Code Search</NavDropdown.Item>
                                        <NavDropdown.Item href="/batch-changes">Batch Changes</NavDropdown.Item>
                                        <NavDropdown.Item href="https://docs.sourcegraph.com/code_intelligence">
                                            Code Intelligence
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Resources" onToggle={this.dropdownToggle}>
                                        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                                        <NavDropdown.Item href="https://learn.sourcegraph.com/" target="_blank">
                                            Learn
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF">
                                            Dev Tool Time
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/podcast/">Sourcegraph Podcast</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Customers" onToggle={this.dropdownToggle}>
                                        <NavDropdown.Item href="/case-studies">Case studies</NavDropdown.Item>
                                        <NavDropdown.Item href="/customers">Use cases</NavDropdown.Item>
                                        <NavDropdown.Item href="/contact/product-specialist">
                                            Become one
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                                    <Nav.Link href="https://docs.sourcegraph.com" target="_blank">
                                        Docs
                                    </Nav.Link>
                                </Nav>
                                <Nav className="right-nav justify-content-lg-end">
                                    {!this.props.hideGetStartedButton && (
                                        <Nav.Link
                                            className="btn btn-simple px-2 py-2"
                                            href="https://sourcegraph.com/search"
                                            title="Search Code"
                                        >
                                            Search Code
                                        </Nav.Link>
                                    )}

                                    <Nav.Link
                                        className="btn btn-outline-primary ml-3 px-5 py-2"
                                        href="https://info.sourcegraph.com/demo-request"
                                        title="Request a demo"
                                    >
                                        Request a demo
                                    </Nav.Link>

                                    {!this.props.hideGetStartedButton && (
                                        <Nav.Link
                                            className="btn btn-primary ml-3 px-5 py-2"
                                            href="/get-started"
                                            title="Get started"
                                        >
                                            Get started
                                        </Nav.Link>
                                    )}
                                </Nav>

                                {/* Mobile Navbar */}
                                <div
                                    id="mobile-navbar"
                                    className={`collapse navbar-collapse ${this.state.isOpen ? 'show' : 'hide'}`}
                                >
                                    <ul className="nav navbar-nav">
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <span
                                                className="nav-link navbar-toggle collapsed"
                                                data-toggle="collapse"
                                                data-target="#product-menu"
                                                aria-expanded="false"
                                                onClick={this.productMenuToggle}
                                            >
                                                Product
                                                <ChevronDownIcon className="icon-inline ml-1" />
                                            </span>
                                            <ul
                                                id="product-menu"
                                                className={`small-menu collapse navbar-collapse ${
                                                    this.state.productMenuOpen ? 'show' : 'hide'
                                                }`}
                                            >
                                                <li className="nav-link" role="presentation">
                                                    <a href="/code-search">Code Search</a>
                                                </li>
                                                <li className="nav-link" role="presentation">
                                                    <a href="/batch-changes">Batch Changes</a>
                                                </li>
                                                <li className="nav-link" role="presentation">
                                                    <a href="https://docs.sourcegraph.com/code_intelligence">
                                                        Code Intelligence
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <span
                                                className="nav-link navbar-toggle collapsed"
                                                data-toggle="collapse"
                                                data-target="#resources-menu"
                                                aria-expanded="false"
                                                onClick={this.resourcesMenuToggle}
                                            >
                                                Resources
                                                <ChevronDownIcon className="icon-inline ml-1" />
                                            </span>
                                            <ul
                                                id="resources-menu"
                                                className={`small-menu collapse navbar-collapse ${
                                                    this.state.resourcesMenuOpen ? 'show' : 'hide'
                                                }`}
                                            >
                                                <li className="nav-link" role="presentation">
                                                    <a href="/blog">Blog</a>
                                                </li>
                                                <li className="nav-link" role="presentation">
                                                    <a href="https://learn.sourcegraph.com/" target="_blank">
                                                        Learn
                                                    </a>
                                                </li>
                                                <li className="nav-link" role="presentation">
                                                    <a href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF">
                                                        Dev Tool Time
                                                    </a>
                                                </li>
                                                <li className="nav-link" role="presentation">
                                                    <a href="/podcast">Podcast</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <span
                                                className="nav-link navbar-toggle collapsed"
                                                data-toggle="collapse"
                                                data-target="#customer-menu"
                                                aria-expanded="false"
                                                onClick={this.customerMenuToggle}
                                            >
                                                Customers
                                                <ChevronDownIcon className="icon-inline ml-1" />
                                            </span>
                                            <ul
                                                id="customer-menu"
                                                className={`small-menu collapse navbar-collapse ${
                                                    this.state.customerMenuOpen ? 'show' : 'hide'
                                                }`}
                                            >
                                                <li className="nav-link" role="presentation">
                                                    <a href="/case-studies">Case studies</a>
                                                </li>
                                                <li className="nav-link" role="presentation">
                                                    <a href="/customers">Use cases</a>
                                                </li>
                                                <li className="nav-link" role="presentation">
                                                    <a href="/contact/product-specialist">Become one</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link"
                                                to="/pricing"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" href="https://docs.sourcegraph.com" target="_blank">
                                                Docs
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" href="https://sourcegraph.com/sign-in">
                                                Sign in
                                            </a>
                                        </li>
                                        {!this.props.hideGetStartedButton && (
                                            <li className="header__nav-item nav-item" role="presentation">
                                                <a className="nav-link" href="https://sourcegraph.com/search">
                                                    Search Code
                                                </a>
                                            </li>
                                        )}
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a className="nav-link" href="https://info.sourcegraph.com/demo-request">
                                                Request a demo
                                            </a>
                                        </li>
                                        {!this.props.hideGetStartedButton && (
                                            <li className="header__nav-item nav-item" role="presentation">
                                                <a className="nav-link" href="/get-started">
                                                    Get started
                                                </a>
                                            </li>
                                        )}
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

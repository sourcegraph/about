import { Link } from 'gatsby'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

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
        this.dropdownToggle = this.dropdownToggle.bind(this)
        this.state = {
            isOpen: false,
            menuOpen: false,
        }
    }

    public dropdownToggle(newValue) {
        this.setState({ menuOpen: newValue })
    }

    public toggle(toggle): void {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    public render(): JSX.Element | null {
        return (
            <>
                <nav
                    expand="lg"
                    className={`header navbar navbar-expand-md py-3 ${this.props.className || 'navbar-light'}`}
                >
                    <div className="container-lg px-0 px-lg-3">
                        <Navbar.Brand className="navbar-brand header__logo" href="/">
                            <span role="img" aria-label="Sourcegraph - Universal code search">
                                {' '}
                            </span>
                        </Navbar.Brand>

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
                                    <Nav className="me-auto">
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
                                            <NavDropdown.Item href="/contact/sales">Become one</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                                        <Nav.Link href="https://docs.sourcegraph.com" target="_blank">
                                            Docs
                                        </Nav.Link>
                                        <Nav.Link
                                            href="https://sourcegraph.com/sign-in"
                                            title="Search public code with Sourcegraph Cloud"
                                        >
                                            Sign in
                                        </Nav.Link>
                                        <Nav.Link
                                            className="btn btn-outline-primary"
                                            href="https://sourcegraph.com/search"
                                            title="Get started with Sourcegraph"
                                        >
                                            Search Code
                                        </Nav.Link>
                                    </Nav>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </>
        )
    }
}

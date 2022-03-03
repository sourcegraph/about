import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import Link from 'next/link'
import React, { FunctionComponent, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

interface Props {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
    hideGetStartedButton?: boolean
}

const onRightClickLogo = (event: React.MouseEvent): void => {
    event.preventDefault()

    if (event.button === 3) {
        window.location.href =
            'https://f.hubspotusercontent20.net/hubfs/2762526/Brand%20assets/Sourcegraph%20Brand%20Kit%202.2%20-%20May%202021.zip'
    }
}

const Header: FunctionComponent<Props> = props => {
    const [isOpen, setIsOpen] = useState(false)
    const [productMenuOpen, setProductMenuOpen] = useState(false)
    const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)
    const [customerMenuOpen, setCustomerMenuOpen] = useState(false)

    return (
        <nav className={`header navbar py-3 ${props.className || 'navbar-light'}`}>
            <div className="container-lg">
                <Navbar.Brand className="header__logo" href="/" onContextMenu={onRightClickLogo}>
                    <span role="img" aria-label="Sourcegraph - Universal code search">
                        {' '}
                    </span>
                </Navbar.Brand>

                {!props.minimal && (
                    <>
                        <button
                            type="button"
                            className="navbar-toggler justify-content-end"
                            data-toggle="collapse"
                            data-target="#mobile-navbar"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon" />
                        </button>

                        <Nav className="left-nav me-auto ml-md-2">
                            <NavDropdown id="productDropdown" title="Product">
                                <NavDropdown.Item href="/code-search">Code Search</NavDropdown.Item>
                                <NavDropdown.Item href="/batch-changes">Batch Changes</NavDropdown.Item>
                                <NavDropdown.Item href="https://docs.sourcegraph.com/code_intelligence">
                                    Code Intelligence
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown id="resourcesDropdown" title="Resources">
                                <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="https://learn.sourcegraph.com/" target="_blank">
                                    Learn
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF">
                                    Dev Tool Time
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/podcast/">Sourcegraph Podcast</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown id="customersDropdown" title="Customers">
                                <NavDropdown.Item href="/case-studies">Case studies</NavDropdown.Item>
                                <NavDropdown.Item href="/use-cases">Use cases</NavDropdown.Item>
                                <NavDropdown.Item href="/contact/product-specialist">Become one</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/pricing">Pricing</Nav.Link>

                            <Nav.Link href="https://docs.sourcegraph.com" target="_blank">
                                Docs
                            </Nav.Link>
                        </Nav>

                        <Nav className="right-nav justify-content-lg-end">
                            {!props.hideGetStartedButton && (
                                <Nav.Link
                                    className="btn btn-simple px-2 py-2"
                                    href="https://sourcegraph.com/search"
                                    title="Search code"
                                >
                                    Search code
                                </Nav.Link>
                            )}

                            <Nav.Link
                                className="btn btn-outline-primary ml-3 px-5 py-2"
                                href="https://info.sourcegraph.com/demo-request"
                                title="Request a demo"
                            >
                                Request a demo
                            </Nav.Link>

                            {!props.hideGetStartedButton && (
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
                        <div id="mobile-navbar" className={`collapse navbar-collapse ${isOpen ? 'show' : 'hide'}`}>
                            <ul className="nav navbar-nav">
                                <li className="header__nav-item nav-item" role="presentation">
                                    <span
                                        role="button"
                                        className="nav-link navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#product-menu"
                                        aria-expanded="false"
                                        onClick={() => setProductMenuOpen(!productMenuOpen)}
                                        onKeyDown={() => setProductMenuOpen(!productMenuOpen)}
                                        tabIndex={0}
                                    >
                                        Product
                                        <ChevronDownIcon className="icon-inline ml-1" />
                                    </span>
                                    <ul
                                        id="product-menu"
                                        className={`small-menu collapse navbar-collapse ${
                                            productMenuOpen ? 'show' : 'hide'
                                        }`}
                                    >
                                        <li className="nav-link" role="presentation">
                                            <Link href="/code-search">Code Search</Link>
                                        </li>
                                        <li className="nav-link" role="presentation">
                                            <Link href="/batch-changes">Batch Changes</Link>
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
                                        role="button"
                                        className="nav-link navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#resources-menu"
                                        aria-expanded="false"
                                        onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                                        onKeyDown={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                                        tabIndex={0}
                                    >
                                        Resources
                                        <ChevronDownIcon className="icon-inline ml-1" />
                                    </span>
                                    <ul
                                        id="resources-menu"
                                        className={`small-menu collapse navbar-collapse ${
                                            resourcesMenuOpen ? 'show' : 'hide'
                                        }`}
                                    >
                                        <li className="nav-link" role="presentation">
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                        <li className="nav-link" role="presentation">
                                            <a
                                                href="https://learn.sourcegraph.com/"
                                                target="_blank"
                                                rel="noopener nofollow noreferrer"
                                            >
                                                Learn
                                            </a>
                                        </li>
                                        <li className="nav-link" role="presentation">
                                            <a href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF">
                                                Dev Tool Time
                                            </a>
                                        </li>
                                        <li className="nav-link" role="presentation">
                                            <Link href="/podcast">Podcast</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <span
                                        role="button"
                                        className="nav-link navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#customer-menu"
                                        aria-expanded="false"
                                        onClick={() => setCustomerMenuOpen(!customerMenuOpen)}
                                        onKeyDown={() => setCustomerMenuOpen(!customerMenuOpen)}
                                        tabIndex={0}
                                    >
                                        Customers
                                        <ChevronDownIcon className="icon-inline ml-1" />
                                    </span>
                                    <ul
                                        id="customer-menu"
                                        className={`small-menu collapse navbar-collapse ${
                                            customerMenuOpen ? 'show' : 'hide'
                                        }`}
                                    >
                                        <li className="nav-link" role="presentation">
                                            <Link href="/case-studies">Case studies</Link>
                                        </li>
                                        <li className="nav-link" role="presentation">
                                            <Link href="/use-cases">Use cases</Link>
                                        </li>
                                        <li className="nav-link" role="presentation">
                                            <Link href="/contact/product-specialist">Become one</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/pricing" passHref={true}>
                                        <a href="#none" className="nav-link">
                                            Pricing
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        href="https://docs.sourcegraph.com"
                                        target="_blank noreferrer noopener nofollow"
                                    >
                                        Docs
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" href="https://sourcegraph.com/sign-in">
                                        Sign in
                                    </a>
                                </li>
                                {!props.hideGetStartedButton && (
                                    <li className="header__nav-item nav-item" role="presentation">
                                        <a className="nav-link" href="https://sourcegraph.com/search">
                                            Search code
                                        </a>
                                    </li>
                                )}
                                <li className="header__nav-item nav-item" role="presentation">
                                    <a className="nav-link" href="https://info.sourcegraph.com/demo-request">
                                        Request a demo
                                    </a>
                                </li>
                                {!props.hideGetStartedButton && (
                                    <li className="header__nav-item nav-item" role="presentation">
                                        <Link href="/get-started" passHref={true}>
                                            <a href="#none" className="nav-link">
                                                Get started
                                            </a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Header

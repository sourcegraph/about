import { FunctionComponent, useState } from 'react'

import { camelCase } from 'lodash'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { buttonStyle, buttonLocation } from '@data'

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

const navLinks = [
    {
        section: 'Product',
        items: [
            {
                title: 'Code Search',
                href: '/code-search',
            },
            {
                title: 'Batch Changes',
                href: '/batch-changes',
            },
            {
                title: 'Code Insights',
                href: '/code-insights',
            },
            {
                title: 'Code Intelligence',
                href: 'https://docs.sourcegraph.com/code_intelligence',
            },
        ],
    },
    {
        section: 'Resources',
        items: [
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Learn',
                href: 'https://learn.sourcegraph.com/',
            },
            {
                title: 'Dev Tool Time',
                href: 'https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF',
            },
            {
                title: 'Sourcegraph Podcast',
                href: '/podcast',
            },
            {
                title: 'Case Studies',
                href: '/case-studies',
            },
        ],
    },
    {
        section: 'Use Cases',
        items: [
            {
                title: 'All Use Cases',
                href: '/use-cases',
            },
            {
                title: 'Code Security',
                href: '/use-cases/code-security',
            },
            {
                title: 'Developer Onboarding',
                href: '/use-cases/onboarding',
            },
            {
                title: 'Incident Response',
                href: '/use-cases/incident-response',
            },
            {
                title: 'Code Reuse',
                href: '/use-cases/code-reuse',
            },
            {
                title: 'Code Health',
                href: '/use-cases/code-health',
            },
        ],
    },
    {
        section: 'Pricing',
        items: [
            {
                title: 'Pricing',
                href: '/pricing',
            },
        ],
    },
    {
        section: 'Docs',
        items: [
            {
                title: 'Docs',
                href: 'https://docs.sourcegraph.com',
            },
        ],
    },
]

const Header: FunctionComponent<Props> = props => {
    const initialMobileMenuState = navLinks.reduce(
        (accumulator, navLink) => ({ ...accumulator, [camelCase(navLink.section)]: false }),
        {}
    )
    const [isOpen, setIsOpen] = useState(false)
    const [openMobileMenu, setOpenMobileMenu] = useState<Record<string, boolean>>(initialMobileMenuState)

    return (
        <nav className={`header navbar py-3 ${props.className || 'navbar-light'}`}>
            <div className="container-xl">
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
                            {navLinks.map(navLink =>
                                navLink.items.length === 1 ? (
                                    navLink.items.map(item =>
                                        item.href.includes('http') ? (
                                            <Nav.Link
                                                key={camelCase(item.title)}
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {item.title}
                                            </Nav.Link>
                                        ) : (
                                            <Nav.Link key={camelCase(item.title)} href={item.href}>
                                                {item.title}
                                            </Nav.Link>
                                        )
                                    )
                                ) : (
                                    <NavDropdown
                                        key={navLink.section}
                                        id={camelCase(navLink.section)}
                                        title={navLink.section}
                                    >
                                        {navLink.items.map(item =>
                                            item.href.includes('http') ? (
                                                <NavDropdown.Item
                                                    key={camelCase(item.title)}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.title}
                                                </NavDropdown.Item>
                                            ) : (
                                                <NavDropdown.Item key={camelCase(item.title)} href={item.href}>
                                                    {item.title}
                                                </NavDropdown.Item>
                                            )
                                        )}
                                    </NavDropdown>
                                )
                            )}
                        </Nav>

                        <Nav className="right-nav justify-content-lg-end">
                            {!props.hideGetStartedButton && (
                                <Nav.Link
                                    className="btn btn-simple px-2 py-2 font-weight-bolder"
                                    href="https://sourcegraph.com/search"
                                    title="Search code"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.nav}
                                    data-button-type="cta"
                                >
                                    Search code
                                </Nav.Link>
                            )}

                            <Nav.Link
                                className="btn btn-outline-primary ml-3 px-5 py-2 font-weight-bolder"
                                href="/demo"
                                title="Request a demo"
                                data-button-style={buttonStyle.outline}
                                data-button-location={buttonLocation.nav}
                                data-button-type="cta"
                            >
                                Request a demo
                            </Nav.Link>

                            {!props.hideGetStartedButton && (
                                <Nav.Link
                                    className="btn btn-primary ml-3 px-5 py-2 font-weight-bolder"
                                    href="/get-started"
                                    title="Get started"
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation.nav}
                                    data-button-type="cta"
                                >
                                    Get Started
                                </Nav.Link>
                            )}
                        </Nav>

                        {/* Mobile Navbar */}
                        <div id="mobile-navbar" className={`collapse navbar-collapse ${isOpen ? 'show' : 'hide'}`}>
                            <ul className="nav navbar-nav">
                                {navLinks.map(navLink =>
                                    navLink.items.length === 1 ? (
                                        navLink.items.map(item =>
                                            item.href.includes('http') ? (
                                                <a
                                                    key={camelCase(item.title)}
                                                    className="nav-link"
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.title}
                                                </a>
                                            ) : (
                                                <Link key={camelCase(item.title)} href={item.href}>
                                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                    <a className="nav-link">{item.title}</a>
                                                </Link>
                                            )
                                        )
                                    ) : (
                                        <li className="align-items-center nav-item" role="presentation">
                                            <span
                                                role="button"
                                                className="nav-link navbar-toggle collapsed"
                                                data-toggle="collapse"
                                                data-target={'#' + navLink.section.split(' ').join('-').toLowerCase()}
                                                aria-expanded="false"
                                                onClick={() =>
                                                    setOpenMobileMenu({
                                                        ...openMobileMenu,
                                                        [camelCase(navLink.section)]:
                                                            !openMobileMenu[camelCase(navLink.section)],
                                                    })
                                                }
                                                onKeyDown={() =>
                                                    setOpenMobileMenu({
                                                        ...openMobileMenu,
                                                        [camelCase(navLink.section)]:
                                                            !openMobileMenu[camelCase(navLink.section)],
                                                    })
                                                }
                                                tabIndex={0}
                                            >
                                                {navLink.section}
                                                <ChevronDownIcon className="icon-inline ml-1" />
                                            </span>
                                            <ul
                                                id={navLink.section.split(' ').join('-').toLowerCase() + '-menu'}
                                                className={`small-menu collapse navbar-collapse ${
                                                    openMobileMenu[camelCase(navLink.section)] ? 'show' : 'hide'
                                                }`}
                                            >
                                                {navLink.items.map(item =>
                                                    item.href.includes('http') ? (
                                                        <li
                                                            key={camelCase(item.title)}
                                                            className="nav-link"
                                                            role="presentation"
                                                        >
                                                            <a href={item.href} target="_blank" rel="noreferrer">
                                                                {item.title}
                                                            </a>
                                                        </li>
                                                    ) : (
                                                        <li
                                                            key={camelCase(item.title)}
                                                            className="nav-link"
                                                            role="presentation"
                                                        >
                                                            <Link href={item.href}>{item.title}</Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    )
                                )}
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        href="https://sourcegraph.com/sign-in"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.nav}
                                        data-button-type="cta"
                                    >
                                        Sign in
                                    </a>
                                </li>
                                {!props.hideGetStartedButton && (
                                    <li className="align-items-center nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            href="https://sourcegraph.com/search"
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.nav}
                                            data-button-type="cta"
                                        >
                                            Search code
                                        </a>
                                    </li>
                                )}
                                <li className="align-items-center nav-item" role="presentation">
                                    <Link href="/demo" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="nav-link"
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.nav}
                                            data-button-type="cta"
                                        >
                                            Request a demo
                                        </a>
                                    </Link>
                                </li>
                                {!props.hideGetStartedButton && (
                                    <li className="align-items-center nav-item" role="presentation">
                                        <Link href="/get-started" passHref={true}>
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="nav-link"
                                                data-button-style={buttonStyle.text}
                                                data-button-location={buttonLocation.nav}
                                                data-button-type="cta"
                                            >
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

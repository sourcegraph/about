import { FunctionComponent, useState } from 'react'

import { camelCase } from 'lodash'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

import { NavLink } from '../navLinks'

interface Props {
    navLinks: NavLink[]
    hideGetStartedButton: boolean | undefined
    isOpen: boolean
}

const MobileNav: FunctionComponent<Props> = ({ navLinks, hideGetStartedButton, isOpen }) => {
    const initialMobileMenuState = navLinks.reduce(
        (accumulator, navLink) => ({ ...accumulator, [camelCase(navLink.section)]: false }),
        {}
    )
    const [openMobileMenu, setOpenMobileMenu] = useState<Record<string, boolean>>(initialMobileMenuState)

    return (
        <div id="mobile-navbar" className={`collapse navbar-collapse ${isOpen ? 'show' : 'hide'}`}>
            <ul className="nav navbar-nav">
                {navLinks.map(navLink =>
                    navLink.items.length === 1 ? (
                        navLink.items.map(item =>
                            item.href.includes('http') ? (
                                <li className="nav-item" role="presentation" key={item.title}>
                                    <a
                                        className="nav-link"
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        title={item.title}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.nav}
                                        data-button-type="cta"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ) : (
                                <li className="nav-item" role="presentation" key={camelCase(item.title)}>
                                    <Link href={item.href}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="nav-link"
                                            title={item.title}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.nav}
                                            data-button-type="cta"
                                        >
                                            {item.title}
                                        </a>
                                    </Link>
                                </li>
                            )
                        )
                    ) : (
                        <li className="align-items-center nav-item" role="presentation" key={navLink.section}>
                            <span
                                role="button"
                                className="nav-link navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target={'#' + navLink.section.split(' ').join('-').toLowerCase()}
                                aria-expanded="false"
                                onClick={() =>
                                    setOpenMobileMenu({
                                        ...openMobileMenu,
                                        [camelCase(navLink.section)]: !openMobileMenu[camelCase(navLink.section)],
                                    })
                                }
                                onKeyDown={() =>
                                    setOpenMobileMenu({
                                        ...openMobileMenu,
                                        [camelCase(navLink.section)]: !openMobileMenu[camelCase(navLink.section)],
                                    })
                                }
                                tabIndex={0}
                            >
                                {navLink.section}
                                <ChevronDownIcon className="icon-inline ml-1" />
                            </span>
                            <ul
                                id={navLink.section.split(' ').join('-').toLowerCase() + '-menu'}
                                className={`sub-menu collapse navbar-collapse ${
                                    openMobileMenu[camelCase(navLink.section)] ? 'show' : 'hide'
                                }`}
                            >
                                {navLink.items.map(item =>
                                    item.href.includes('http') ? (
                                        <li key={camelCase(item.title)} className="nav-link" role="presentation">
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                title={item.title}
                                                data-button-style={buttonStyle.text}
                                                data-button-location={buttonLocation.nav}
                                                data-button-type="cta"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ) : (
                                        <li key={camelCase(item.title)} className="nav-link" role="presentation">
                                            <Link href={item.href} passHref={true}>
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a
                                                    title={item.title}
                                                    data-button-style={buttonStyle.text}
                                                    data-button-location={buttonLocation.nav}
                                                    data-button-type="cta"
                                                >
                                                    {item.title}
                                                </a>
                                            </Link>
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
                        title="Sign in"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.nav}
                        data-button-type="cta"
                    >
                        Sign in
                    </a>
                </li>

                {!hideGetStartedButton && (
                    <li className="align-items-center nav-item" role="presentation">
                        <a
                            className="nav-link"
                            href="https://sourcegraph.com/search"
                            title="Search code"
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
                            title="Request a demo"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.nav}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                </li>
                {!hideGetStartedButton && (
                    <li className="align-items-center nav-item" role="presentation">
                        <Link href="/get-started/self-hosted" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="nav-link"
                                title="Get started"
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
    )
}

export default MobileNav

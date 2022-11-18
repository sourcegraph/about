import { FunctionComponent, useEffect, useState } from 'react'

import { camelCase } from 'lodash'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { buttonStyle, buttonLocation } from '@data'

import { NavLink } from '../navLinks'

interface DesktopNav {
    navLinks: NavLink[]
}

const DesktopNav: FunctionComponent<DesktopNav> = ({ navLinks }) => {
    const [isBlog, setIsBlog] = useState(false)

    useEffect(() => {
        setIsBlog(window.location.pathname.includes('/blog'))
    }, [])

    return (
        <>
            <Nav className="mr-auto left-nav ml-lg-5">
                {navLinks.map(navLink =>
                    navLink.items.length === 1 ? (
                        navLink.items.map((item: { href: string; title: string }) =>
                            item.href.includes('http') ? (
                                <Nav.Link
                                    key={camelCase(item.title)}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={item.title}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.nav}
                                    data-button-type="cta"
                                >
                                    {item.title}
                                </Nav.Link>
                            ) : (
                                <Nav.Link
                                    key={camelCase(item.title)}
                                    href={item.href}
                                    title={item.title}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.nav}
                                    data-button-type="cta"
                                >
                                    {item.title}
                                </Nav.Link>
                            )
                        )
                    ) : (
                        <NavDropdown key={navLink.section} id={camelCase(navLink.section)} title={navLink.section}>
                            {navLink.items.map(item =>
                                item.href.includes('http') ? (
                                    <NavDropdown.Item
                                        key={camelCase(item.title)}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        title={item.title}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.nav}
                                        data-button-type="cta"
                                    >
                                        {item.title}
                                    </NavDropdown.Item>
                                ) : (
                                    <NavDropdown.Item
                                        key={camelCase(item.title)}
                                        href={item.href}
                                        title={item.title}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.nav}
                                        data-button-type="cta"
                                    >
                                        {item.title}
                                    </NavDropdown.Item>
                                )
                            )}
                        </NavDropdown>
                    )
                )}
            </Nav>

            <Nav className="right-nav lg:tw-justify-end">
                <Nav.Link
                    className="px-5 py-2 ml-xs btn btn-primary font-weight-bold"
                    href="https://signup.sourcegraph.com"
                    title="Get free trial"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.nav}
                    data-button-type="cta"
                >
                    Get free trial
                </Nav.Link>
            </Nav>
        </>
    )
}

export default DesktopNav

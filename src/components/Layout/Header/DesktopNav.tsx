import { FunctionComponent, useEffect, useState } from 'react'

import { camelCase } from 'lodash'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { buttonStyle, buttonLocation } from '@data'

import { NavLink } from '../navLinks'

interface Props {
    navLinks: NavLink[]
    hideGetStartedButton: boolean | undefined
}

const DesktopNav: FunctionComponent<Props> = ({ navLinks, hideGetStartedButton }) => {
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
                    className="px-2 py-2 btn tw-text-blurple-400 font-weight-bold"
                    href="https://sourcegraph.com/search"
                    title="Search code"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.nav}
                    data-button-type="cta"
                >
                    Search code
                </Nav.Link>

                <Nav.Link
                    className="px-5 py-2 ml-3 btn btn-outline-primary font-weight-bold"
                    href={`/demo${isBlog ? '?utm_source=blog-integrations-update' : ''}`}
                    title="Request a demo"
                    data-button-style={buttonStyle.outline}
                    data-button-location={buttonLocation.nav}
                    data-button-type="cta"
                >
                    Request a demo
                </Nav.Link>

                {!hideGetStartedButton && (
                    <Nav.Link
                        className="px-5 py-2 ml-3 btn btn-primary font-weight-bold"
                        href="https://signup.sourcegraph.com"
                        title="Get free trial"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.nav}
                        data-button-type="cta"
                    >
                        Get free trial
                    </Nav.Link>
                )}
            </Nav>
        </>
    )
}

export default DesktopNav

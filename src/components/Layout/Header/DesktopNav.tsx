import { FunctionComponent } from 'react'

import { camelCase } from 'lodash'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { buttonStyle, buttonLocation } from '@data'

import { NavLink } from './navLinks'

interface Props {
    navLinks: NavLink[]
    hideGetStartedButton: boolean | undefined
}

const DesktopNav: FunctionComponent<Props> = ({ navLinks, hideGetStartedButton }) => (
    <>
        <Nav className="left-nav me-auto ml-xl-2">
            {navLinks.map(navLink =>
                navLink.items.length === 1 ? (
                    navLink.items.map((item: { href: string; title: string }) =>
                        item.href.includes('http') ? (
                            <Nav.Link key={camelCase(item.title)} href={item.href} target="_blank" rel="noreferrer">
                                {item.title}
                            </Nav.Link>
                        ) : (
                            <Nav.Link key={camelCase(item.title)} href={item.href}>
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
            {!hideGetStartedButton && (
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

            {!hideGetStartedButton && (
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
    </>
)

export default DesktopNav

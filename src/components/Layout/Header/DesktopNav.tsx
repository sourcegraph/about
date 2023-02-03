import React, { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import { camelCase } from 'lodash'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { buttonStyle, buttonLocation } from '../../../data/tracking'
import { SHOW_APP } from '../../ShowApp'
import { NavLink } from '../navLinks'

import { HorizontalDivider } from './HorizontalDivider'
import { SignInDropdown } from './SignInDropdown'

interface DesktopNav {
    navLinks: NavLink[]
    itemClassName?: string
    className?: string
}

const DesktopNav: FunctionComponent<DesktopNav> = ({ navLinks, itemClassName, className }) => {
    const [isBlog, setIsBlog] = useState(false)

    useEffect(() => {
        setIsBlog(window.location.pathname.includes('/blog'))
    }, [])

    return (
        <>
            <Nav className={classNames('mr-auto left-nav', className)}>
                {navLinks.map(navLink =>
                    navLink.items.length === 1 ? (
                        navLink.items.map(item =>
                            'divider' in item ? null : item.href.includes('http') ? (
                                <Nav.Link
                                    key={camelCase(item.title)}
                                    href={item.href}
                                    className={itemClassName}
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
                                    className={itemClassName}
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
                        <NavDropdown
                            key={navLink.section}
                            id={camelCase(navLink.section)}
                            title={navLink.section}
                            bsPrefix={classNames(itemClassName, 'nav-link')}
                            className={itemClassName}
                        >
                            {navLink.items.map(item =>
                                'divider' in item ? (
                                    <NavDropdown.Divider />
                                ) : item.href.includes('http') ? (
                                    <NavDropdown.Item
                                        key={camelCase(item.title)}
                                        href={item.href}
                                        className={itemClassName}
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
                                        className={itemClassName}
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

            <Nav className="right-nav tw-items-center lg:tw-justify-end tw-ml-sm">
                {SHOW_APP ? (
                    <>
                        <Nav.Link
                            className={classNames(
                                itemClassName,
                                'tw-py-[3px] tw-px-0 [&:not(:hover)]:tw-text-gray-300'
                            )}
                            href="https://sourcegraph.com"
                            title="Search"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.nav}
                            data-button-type="cta"
                        >
                            Search public code
                        </Nav.Link>
                        <HorizontalDivider className="tw-mx-xs" />
                        <SignInDropdown
                            buttonStyle={buttonStyle.primary}
                            buttonLocation={buttonLocation.nav}
                            buttonClassName={classNames(
                                'tw-py-[3px] [&:not(:hover)]:tw-text-gray-300 tw-text-sm tw-px-0',
                                itemClassName
                            )}
                            itemClassName={itemClassName}
                        />
                        <HorizontalDivider className="tw-mx-xs" />
                        <Nav.Link
                            className="tw-ml-[4px] tw-py-[3px] tw-px-xs btn btn-sm btn-primary font-weight-bold"
                            href="https://signup.sourcegraph.com"
                            title="Start for free"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.nav}
                            data-button-type="cta"
                        >
                            Download
                        </Nav.Link>
                    </>
                ) : (
                    <>
                        <Nav.Link
                            className={classNames(itemClassName, 'tw-py-[3px] tw-px-0')}
                            href="https://sourcegraph.com"
                            title="Search"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.nav}
                            data-button-type="cta"
                        >
                            Search public code
                        </Nav.Link>
                        <HorizontalDivider className="tw-mx-xs" />
                        <SignInDropdown
                            buttonStyle={buttonStyle.primary}
                            buttonLocation={buttonLocation.nav}
                            buttonClassName="tw-py-[3px] btn btn-sm btn-outline-secondary tw-text-white tw-font-normal"
                            itemClassName={itemClassName}
                        />
                        <Nav.Link
                            className="tw-ml-xxs tw-py-[3px] tw-px-xs btn btn-sm btn-primary font-weight-bold"
                            href="https://signup.sourcegraph.com"
                            title="Start for free"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.nav}
                            data-button-type="cta"
                        >
                            Start for free
                        </Nav.Link>
                    </>
                )}
            </Nav>
        </>
    )
}

export default DesktopNav

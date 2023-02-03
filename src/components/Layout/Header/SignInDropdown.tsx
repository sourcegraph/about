import React from 'react'

import classNames from 'classnames'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const SignInButton: React.FunctionComponent<{
    buttonStyle: number
    buttonLocation: number
    className?: string
}> = ({ buttonStyle, buttonLocation, className }) => (
    <Nav.Link
        className={className}
        href="https://sourcegraph.com"
        data-button-style={buttonStyle}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        Sign in
    </Nav.Link>
)

export const SignInDropdown: React.FunctionComponent<{
    buttonStyle: number
    buttonLocation: number
    buttonClassName?: string
    itemClassName?: string
}> = ({ buttonStyle, buttonLocation, buttonClassName, itemClassName }) => (
    <NavDropdown title="Sign in" bsPrefix={classNames(buttonClassName, 'nav-link')}>
        <NavDropdown.Item
            href="/sign-in"
            className={itemClassName}
            rel="noreferrer"
            data-button-style={buttonStyle}
            data-button-location={buttonLocation}
        >
            Your organization's instance
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
            href="https://sourcegraph.com/sign-in"
            className={itemClassName}
            rel="noreferrer"
            data-button-style={buttonStyle}
            data-button-location={buttonLocation}
        >
            Sourcegraph.com
            <NavDropdown.ItemText className="tw-text-gray-300 tw-p-0 tw-text-xs">Public code only</NavDropdown.ItemText>
        </NavDropdown.Item>
    </NavDropdown>
)

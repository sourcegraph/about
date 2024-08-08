import React from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { buttonStyle } from '../../data/tracking'

export const TrySourcegraphForFreeButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    size?: 'md' | 'lg'
    children?: string
    customClassName?: string
}> = ({ buttonLocation, dark = false, size = 'md', children = 'Try Sourcegraph for free', customClassName }) => (
    <Link
        className={classNames(
            'btn whitespace-nowrap',
            dark ? 'btn-primary-dark' : 'btn-primary',
            size === 'lg' && 'py-4',
            customClassName
        )}
        href="/contact/request-info"
        title={children}
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children}
    </Link>
)

export const TrySourcegraphAppButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    size?: 'md' | 'lg'
    children?: string
    href?: string
}> = ({ buttonLocation, dark = false, size = 'md', href = '/app', children = 'Try Sourcegraph for free' }) => (
    <a
        className={classNames(
            'btn whitespace-nowrap',
            dark ? 'btn-primary-dark' : 'btn-primary',
            size === 'lg' && 'py-4'
        )}
        href={href}
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children}
    </a>
)

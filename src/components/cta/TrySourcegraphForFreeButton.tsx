import React from 'react'

import classNames from 'classnames'

import { buttonStyle } from '../../data/tracking'

export const TrySourcegraphForFreeButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    size?: 'md' | 'lg'
    children?: string
}> = ({ buttonLocation, dark = false, size = 'md', children = 'Try Sourcegraph for free' }) => (
    <a
        className={classNames(
            'btn whitespace-nowrap',
            dark ? 'btn-inverted-primary' : 'btn-primary',
            size === 'lg' && 'py-xs'
        )}
        href="https://signup.sourcegraph.com"
        title={children}
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children}
    </a>
)

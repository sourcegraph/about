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
            'btn btn-primary whitespace-nowrap',
            dark && 'border-0 bg-white text-violet-500',
            size === 'lg' && 'py-xs'
        )}
        href="https://signup.sourcegraph.com"
        title="Start for free"
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children}
    </a>
)

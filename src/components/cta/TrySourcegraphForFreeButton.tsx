import React from 'react'

import classNames from 'classnames'

import { buttonStyle } from '../../data/tracking'

export const TrySourcegraphForFreeButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    size?: 'md' | 'lg'
}> = ({ buttonLocation, dark = false, size = 'md' }) => (
    <a
        className={classNames(
            'btn btn-primary tw-whitespace-nowrap',
            dark && 'tw-bg-white tw-text-violet-500 tw-border-0',
            size === 'lg' && 'tw-py-xs'
        )}
        href="https://signup.sourcegraph.com"
        title="Start for free"
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        Try Sourcegraph for free
    </a>
)

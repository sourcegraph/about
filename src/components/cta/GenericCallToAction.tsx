import React from 'react'

import classNames from 'classnames'

import { buttonStyle } from '../../data/tracking'

export const GenericCallToAction: React.FunctionComponent<{
    buttonLocation: number
    href?: string
    dark?: boolean
    size?: 'md' | 'lg'
    children?: string
    center? : boolean
    blank?: boolean
}> = ({ buttonLocation, href, dark = false, size = 'md', children, center = false, blank= true }) => (
    <div
        className={classNames('mt-md ', {
            'mx-auto items-center': center,
        })}
    >
        <a
            className={classNames(
                'btn whitespace-nowrap',
                dark ? 'btn-inverted-primary' : 'btn-primary',
                size === 'lg' && 'py-xs'
            )}
            href={href}
            data-button-style={buttonStyle.primary}
            data-button-location={buttonLocation}
            target={blank ? '_blank' : '_self'}
            data-button-type="cta"
        >
            {children}
        </a>
    </div>
)

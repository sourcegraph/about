import React from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { buttonStyle } from '../../data/tracking'

export const MeetWithProductExpertButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    chevron?: boolean
    size?: 'md' | 'lg'
    requestInfo?: boolean
    children?: string
    buttonClassName?: string
    id?: string
}> = ({
    id,
    buttonLocation,
    dark = false,
    chevron = false,
    size = 'md',
    buttonClassName = `${dark ? 'btn-outline-white' : 'btn-link'}`,
    requestInfo = false,
    children = requestInfo ? 'Contact sales' : 'Talk to an engineer',
}) => (
    <Link
        id={id}
        href={requestInfo ? '/contact/request-info' : '/demo'}
        className={classNames(
            'btn inline-flex items-center whitespace-nowrap',
            buttonClassName,
            size === 'lg' && 'py-4'
        )}
        title={children}
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children} {chevron && <ChevronRightIcon className="ml-[3px]" />}
    </Link>
)

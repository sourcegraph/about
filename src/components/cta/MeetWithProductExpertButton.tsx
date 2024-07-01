import React from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'
import { CaptureResult } from 'posthog-js'

import { buttonStyle } from '../../data/tracking'

export const MeetWithProductExpertButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    chevron?: boolean
    size?: 'md' | 'lg'
    requestInfo?: boolean
    children?: string
    buttonClassName?: string
    handleEventSubmission?: (eventName: string, initiateOpenModal: boolean) => void | CaptureResult
    id?: string
}> = ({
    id,
    buttonLocation,
    handleEventSubmission = () => {},
    dark = false,
    chevron = false,
    size = 'md',
    buttonClassName = `${dark ? 'btn-link-dark' : 'btn-link'}`,
    requestInfo = false,
    children = requestInfo ? 'Contact sales' : 'Talk to an engineer',
}) => (
    <Link
        onClick={() => handleEventSubmission('contact_sales_click', false)}
        id={id}
        href={requestInfo ? '/contact/request-info' : '/demo'}
        className={classNames(
            'btn btn-link inline-flex items-center whitespace-nowrap',
            buttonClassName,
            chevron ? 'btn-link-icon' : '',
            size === 'lg' && 'py-4'
        )}
        title={children}
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children} {chevron && <ChevronRightIcon className="link-icon" />}
    </Link>
)

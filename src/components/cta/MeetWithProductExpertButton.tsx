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
    customClassName?: string
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
    customClassName,
    requestInfo = false,
    children = requestInfo ? 'Book a demo' : 'Book a demo',
}) => (
    <Link
        onClick={() => handleEventSubmission('contact_sales_click', false)}
        id={id}
        href={requestInfo ? '/contact/request-info' : '/contact/request-info'}
        className={classNames(
            'inline-flex items-center whitespace-nowrap',
            !customClassName && buttonClassName,
            chevron ? 'btn-link-icon' : '',
            size === 'lg' && 'py-4',
            customClassName
        )}
        title={children}
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children} {chevron && <ChevronRightIcon className="link-icon" />}
    </Link>
)

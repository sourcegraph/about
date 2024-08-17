import React from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { buttonStyle } from '../../data/tracking'

export const StandardCallToAction: React.FunctionComponent<{
    center?: boolean
    buttonLocation: number
    dark?: boolean
    chevron?: boolean
    size?: 'md' | 'lg'
    leftButtonClassName?: string
    rightButtonClassName?: string
    className?: string
}> = ({
    center,
    buttonLocation,
    dark = false,
    chevron = false,
    size = 'md',
    leftButtonClassName,
    rightButtonClassName,
    className,
}) => (
    <div
        className={classNames(className, 'mx-auto flex w-full flex-col items-center gap-4 sm:flex sm:flex-row', {
            'justify-center': center,
        })}
    >
        <BookADemoButton
            buttonLocation={buttonLocation}
            dark={dark}
            size={size}
            customClassName={leftButtonClassName}
        />
        <SeePricingButton
            buttonLocation={buttonLocation}
            dark={dark}
            size={size}
            customClassName={rightButtonClassName}
        />
    </div>
)

const BookADemoButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    size?: 'md' | 'lg'
    children?: string
    customClassName?: string
}> = ({ buttonLocation, dark = false, size = 'md', children = 'Book a demo', customClassName }) => (
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

const SeePricingButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    size?: 'md' | 'lg'
    children?: string
    customClassName?: string
}> = ({ buttonLocation, dark = false, size = 'md', children = 'See pricing', customClassName }) => (
    <Link
        className={classNames(
            'btn whitespace-nowrap',
            dark ? 'btn-primary-dark' : 'btn-primary',
            size === 'lg' && 'py-4',
            customClassName
        )}
        href="/pricing"
        title={children}
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children}
    </Link>
)

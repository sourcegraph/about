import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface AlertProps {
    type?: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
    children: ReactNode
}

const COLOR_CLASSES: Record<NonNullable<AlertProps['type']>, { backgroundColor: string; borderColor: string }> = {
    primary: {
        backgroundColor: 'tw-bg-blue-100',
        borderColor: 'tw-border-blue-300',
    },
    success: {
        backgroundColor: 'tw-bg-blue-100',
        borderColor: 'tw-border-blue-300',
    },
    info: {
        backgroundColor: 'tw-bg-violet-100',
        borderColor: 'tw-border-violet-300',
    },
    warning: {
        backgroundColor: 'tw-bg-lemon-100',
        borderColor: 'tw-border-lemon-300',
    },
    secondary: {
        backgroundColor: 'tw-bg-gray-100',
        borderColor: 'tw-border-gray-300',
    },
}

export const Alert: FunctionComponent<AlertProps> = ({ type = 'primary', children }) => (
    <div
        className={classNames(
            'tw-px-sm tw-py-xs tw-rounded-lg tw-border-1 tw-my-8',
            COLOR_CLASSES[type].backgroundColor,
            COLOR_CLASSES[type].borderColor
        )}
    >
        {children}
    </div>
)

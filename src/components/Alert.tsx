import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface AlertProps {
    type?: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
    children: ReactNode
}

const COLOR_CLASSES: Record<NonNullable<AlertProps['type']>, { backgroundColor: string; borderColor: string }> = {
    primary: {
        backgroundColor: 'bg-blue-100',
        borderColor: 'border-blue-300',
    },
    success: {
        backgroundColor: 'bg-blue-100',
        borderColor: 'border-blue-300',
    },
    info: {
        backgroundColor: 'bg-violet-100',
        borderColor: 'border-violet-300',
    },
    warning: {
        backgroundColor: 'bg-lemon-100',
        borderColor: 'border-lemon-300',
    },
    secondary: {
        backgroundColor: 'bg-gray-100',
        borderColor: 'border-gray-300',
    },
}

export const Alert: FunctionComponent<AlertProps> = ({ type = 'primary', children }) => (
    <div
        className={classNames(
            'my-8 rounded-lg border-1 px-sm py-xs',
            COLOR_CLASSES[type].backgroundColor,
            COLOR_CLASSES[type].borderColor
        )}
    >
        {children}
    </div>
)

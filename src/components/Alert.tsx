import { FunctionComponent, ReactNode } from 'react'

interface AlertProps {
    style?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    children: ReactNode
}

export const Alert: FunctionComponent<AlertProps> = ({ style = 'primary', children }) => (
    <div className={`alert alert-${style} my-5`}>{children}</div>
)

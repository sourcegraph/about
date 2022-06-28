import { FunctionComponent, ReactNode } from 'react'

interface AlertProps {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    children: ReactNode
}

export const Alert: FunctionComponent<AlertProps> = ({ type = 'primary', children }) => (
    <div className={`alert alert-${type} mx-auto d-flex justify-content-center`}>
        {children}
    </div>
)

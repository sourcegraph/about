import { FunctionComponent, ReactNode } from 'react'

interface TableWrapperProps {
    children: ReactNode
    className?: string
}

export const TableWrapper: FunctionComponent<TableWrapperProps> = ({ className = '', children }) => (
    <div className={`${className} table-overflow`}>{children}</div>
)

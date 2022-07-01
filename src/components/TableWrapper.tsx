import { FunctionComponent, ReactNode } from 'react'

interface TableWrapperProps {
    children: ReactNode
}

export const TableWrapper: FunctionComponent<TableWrapperProps> = ({ children }) => (
    <div className="table-overflow">{children}</div>
)

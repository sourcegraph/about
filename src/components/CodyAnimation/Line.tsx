import React, { FunctionComponent } from 'react'

import classNames from 'classnames'

interface Props {
    children: React.ReactNode
    className?: string
    active?: boolean
}

export const Line: FunctionComponent<Props> = ({ children, className, active }) => (
    <div className={classNames('items-center whitespace-nowrap', className, { 'bg-[#343A4D]': active })}>
        {children}
    </div>
)

import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface TwoColumnSection {
    leftColumn: ReactNode
    rightColumn: ReactNode
    reverseOnMobile?: boolean
}

export const TwoColumnSection: FunctionComponent<TwoColumnSection> = ({
    leftColumn,
    rightColumn,
    reverseOnMobile = false,
}) => (
    <div className={classNames('d-flex py-7', reverseOnMobile ? 'flex-column-reverse flex-lg-row' : 'row')}>
        <div className={classNames('col-lg-6 pr-lg-5', { 'mb-4 mb-lg-0': !reverseOnMobile })}>{leftColumn}</div>
        <div className={classNames('col-lg-6 pl-lg-5', { 'mb-4 mb-lg-0': reverseOnMobile })}>{rightColumn}</div>
    </div>
)

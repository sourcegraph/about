import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface TwoColumnSection {
    leftColumn: ReactNode
    rightColumn: ReactNode
    reverseOnMobile?: boolean
    centerContent?: boolean
}

export const TwoColumnSection: FunctionComponent<TwoColumnSection> = ({
    leftColumn,
    rightColumn,
    reverseOnMobile = false,
    centerContent = false,
}) => (
    <div
        className={classNames('tw-flex', {
            'tw-flex-col-reverse lg:tw-flex-row': reverseOnMobile,
            row: !reverseOnMobile,
            'tw-items-center': centerContent,
        })}
    >
        <div className={classNames('col-lg-6 pr-lg-4', { 'mb-4 mb-lg-0': !reverseOnMobile })}>{leftColumn}</div>
        <div className={classNames('col-lg-6 pl-lg-4', { 'mb-4 mb-lg-0': reverseOnMobile })}>{rightColumn}</div>
    </div>
)

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
    centerContent = false
}) => (
    <div className={classNames(
            'd-flex',
            {
                'flex-column-reverse flex-lg-row': reverseOnMobile,
                'row': !reverseOnMobile,
                'align-items-center': centerContent
            }
        )}
    >
        <div className={classNames('col-lg-6 pr-lg-4 pl-0', { 'mb-4 mb-lg-0': !reverseOnMobile })}>{leftColumn}</div>
        <div className={classNames('col-lg-6 pl-lg-4 pr-0', { 'mb-4 mb-lg-0': reverseOnMobile })}>{rightColumn}</div>
    </div>
)

import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface TwoColumnSection {
    leftColumn: ReactNode
    rightColumn: ReactNode
    reverseOnMobile?: boolean
    centerContent?: boolean
    leftColumnSize?: string
    rightColumnSize?: string
}

export const TwoColumnSection: FunctionComponent<TwoColumnSection> = ({
    leftColumn,
    rightColumn,
    reverseOnMobile = false,
    centerContent = false,
    leftColumnSize,
    rightColumnSize,
}) => (
    <div
        className={classNames('d-flex', {
            'flex-column-reverse flex-lg-row': reverseOnMobile,
            row: !reverseOnMobile,
            'align-items-center': centerContent,
        })}
    >
        <div className={classNames(leftColumnSize ?? 'col-lg-6 pr-lg-4', { 'mb-4 mb-lg-0': !reverseOnMobile })}>
            {leftColumn}
        </div>
        <div className={classNames(rightColumnSize ?? 'col-lg-6 pl-lg-4', { 'mb-4 mb-lg-0': reverseOnMobile })}>
            {rightColumn}
        </div>
    </div>
)

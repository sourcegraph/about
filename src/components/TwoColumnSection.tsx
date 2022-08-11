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
        className={classNames('tw-flex', {
            'tw-flex-col-reverse lg:tw-flex-row': reverseOnMobile,
            row: !reverseOnMobile,
            'tw-items-center': centerContent,
        })}
    >
        <div className={classNames(leftColumnSize ?? 'col-lg-6 lg:tw-pr-sm', { 'tw-mb-sm lg:tw-mb-0': !reverseOnMobile })}>
            {leftColumn}
        </div>
        <div className={classNames(rightColumnSize ?? 'col-lg-6 lg:tw-pl-sm', { 'tw-mb-sm lg:tw-mb-0': reverseOnMobile })}>
            {rightColumn}
        </div>
    </div>
)

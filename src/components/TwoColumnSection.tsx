import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface TwoColumnSection {
    leftColumn: ReactNode
    rightColumn: ReactNode
    reverseOnMobile?: boolean
    centerContent?: boolean
    mergeColumns?: boolean
}

export const TwoColumnSection: FunctionComponent<TwoColumnSection> = ({
    leftColumn,
    rightColumn,
    reverseOnMobile = false,
    centerContent = false,
    mergeColumns = false,
}) => (
    <div
        className={classNames({
            'tw-grid lg:tw-grid-cols-12 tw-gap-y-xl lg:tw-gap-x-xl ': !mergeColumns, // done
            'tw-flex tw-flex-col lg:tw-flex-row': mergeColumns, // done
            'tw-items-center': centerContent, // done
        })}
    >
        <div
            className={classNames({
                'tw-col-span-12 lg:tw-col-span-6': !mergeColumns, // done
                'tw-mb-sm lg:tw-mb-0 lg:tw-pr-xl': mergeColumns, // done
                'tw-order-last lg:tw-order-first': reverseOnMobile,
            })}
        >
            {leftColumn}
        </div>
        <div
            className={classNames({
                'tw-col-span-12 lg:tw-col-span-6': !mergeColumns,
            })}
        >
            {rightColumn}
        </div>
    </div>
)

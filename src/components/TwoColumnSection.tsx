import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface TwoColumnSection {
    leftColumn: ReactNode
    rightColumn: ReactNode
    reverseOnMobile?: boolean
    blockOnMdAndDown?: boolean
    centerContent?: boolean
    mergeColumns?: boolean
}

export const TwoColumnSection: FunctionComponent<TwoColumnSection> = ({
    leftColumn,
    rightColumn,
    reverseOnMobile = false,
    blockOnMdAndDown = false,
    centerContent = false,
    mergeColumns = false,
}) => (
    <div
        className={classNames(
            !mergeColumns && `grid ${blockOnMdAndDown ? 'md' : 'lg'}:grid-cols-12 gap-y-xl lg:gap-x-xl`, // done
            {
                'flex flex-col lg:flex-row': mergeColumns, // done
                'items-center': centerContent, // done
            }
        )}
    >
        <div
            className={classNames(!mergeColumns && `col-span-12 ${blockOnMdAndDown ? 'md' : 'lg'}:col-span-6`, {
                'mb-sm lg:mb-0 lg:pr-xl': mergeColumns, // done
                'order-last lg:order-first': reverseOnMobile,
            })}
        >
            {leftColumn}
        </div>
        <div className={classNames(!mergeColumns && `col-span-12 ${blockOnMdAndDown ? 'md' : 'lg'}:col-span-6`)}>
            {rightColumn}
        </div>
    </div>
)

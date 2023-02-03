import React from 'react'

import classNames from 'classnames'

export const HorizontalDivider: React.FunctionComponent<{ className?: string }> = ({ className }) => (
    <hr
        className={classNames(
            className,
            'tw-border-t-0 tw-border-l-1 tw-border-l-[color:var(--border-color-2)] tw-w-[1px] tw-h-[20px]'
        )}
        aria-hidden={true}
    />
)

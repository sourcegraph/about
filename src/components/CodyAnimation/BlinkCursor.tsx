import { FunctionComponent } from 'react'

import classNames from 'classnames'

interface BlinkCursorProps {
    className?: string
}

export const BlinkCursor: FunctionComponent<BlinkCursorProps> = ({ className }) => (
    <span className={classNames('blinking-cursor border-r-2 border-white ', className)} />
)

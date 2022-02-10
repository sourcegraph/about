import classNames from 'classnames'
import React from 'react'

import styles from './CodeInsightsQueryBlock.module.scss'

export const CodeInsightsQueryBlock: React.FunctionComponent<React.HTMLAttributes<HTMLSpanElement>> = props => {
    return <span {...props} className={classNames(props.className, styles.query)} />
}

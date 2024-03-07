import React from 'react'

import classNames from 'classnames'

import styles from './CodeInsightsQueryBlock.module.scss'

export const CodeInsightsQueryBlock: React.FunctionComponent<React.HTMLAttributes<HTMLSpanElement>> = props => (
    <span {...props} className={classNames(props.className, 'font-mono', styles.query)} />
)

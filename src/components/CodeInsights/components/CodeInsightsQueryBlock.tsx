import { FunctionComponent, HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './CodeInsightsQueryBlock.module.scss'

export const CodeInsightsQueryBlock: FunctionComponent<HTMLAttributes<HTMLSpanElement>> = props => (
    <span {...props} className={classNames(props.className, styles.query)} />
)

import classNames from 'classnames'
import React from 'react'

import styles from './CodeInsightLegend.module.scss'

export const LegendBlock: React.FunctionComponent<React.HTMLAttributes<HTMLUListElement>> = props => (
    <ul className={classNames(styles.legendList, props.className)}>{props.children}</ul>
)

interface LegendItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    color: string
}

export const LegendItem: React.FunctionComponent<LegendItemProps> = props => (
    <li className={classNames(props.className, styles.legendItem)}>
        <div
            /* eslint-disable-next-line react/forbid-dom-props */
            style={{ backgroundColor: props.color }}
            className={styles.legendMark}
        />
        {props.children}
    </li>
)

import { FunctionComponent, HTMLAttributes, LiHTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './CodeInsightLegend.module.scss'

export const LegendBlock: FunctionComponent<HTMLAttributes<HTMLUListElement>> = props => (
    <ul className={classNames(styles.legendList, props.className)}>{props.children}</ul>
)

interface LegendItemProps extends LiHTMLAttributes<HTMLLIElement> {
    color: string
}

export const LegendItem: FunctionComponent<LegendItemProps> = props => (
    <div className="d-flex">
        <li className={classNames(props.className, styles.legendItem)}>
            <div
                /* eslint-disable-next-line react/forbid-dom-props */
                style={{ backgroundColor: props.color }}
                className={styles.legendMark}
            />
            {props.children}
        </li>
    </div>
)

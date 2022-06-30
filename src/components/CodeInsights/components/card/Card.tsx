import { FunctionComponent, HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './Card.module.scss'

export interface CardProps extends HTMLAttributes<HTMLElement> {}

/**
 * Card Element
 */
export const Card: FunctionComponent<CardProps> = ({ children, className, ...attributes }) => (
    <div className={classNames(styles.card, className)} {...attributes}>
        {children}
    </div>
)

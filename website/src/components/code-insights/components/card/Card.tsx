import classNames from 'classnames'
import React from 'react'

import styles from './Card.module.scss'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {}

/**
 * Card Element
 */
export const Card: React.FunctionComponent<CardProps> = ({ children, className, ...attributes }) => {
    return (
        <div className={classNames(styles.card, className)} {...attributes}>
            {children}
        </div>
    )
}

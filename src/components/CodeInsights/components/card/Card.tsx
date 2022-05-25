import React from 'react'

import classNames from 'classnames'

import styles from './Card.module.scss'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {}

/**
 * Card Element
 */
export const Card: React.FunctionComponent<CardProps> = ({ children, className, ...attributes }) => (
    <div className={classNames(styles.card, className)} {...attributes}>
        {children}
    </div>
)

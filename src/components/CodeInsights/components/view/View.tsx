import React, { PropsWithChildren, ReactNode } from 'react'

import classNames from 'classnames'

import { Card } from '../card/Card'

import styles from './View.module.scss'

type ViewCardElementProps = React.DetailedHTMLProps<
    Omit<React.HTMLAttributes<HTMLElement>, 'contextMenu' | 'title'>,
    HTMLElement
>

export interface ViewCardProps extends ViewCardElementProps {
    title?: ReactNode
    subtitle?: ReactNode

    /**
     * Custom card actions (like filter buttons) that render element right next to three dots
     * card context menu.
     */
    actions?: ReactNode
}

export const View: React.FunctionComponent<PropsWithChildren<ViewCardProps>> = props => {
    const { title, subtitle, actions, children, ...otherProps } = props

    // In case if we don't have a content for the header component
    // we should render nothing
    const hasHeader = title || subtitle || actions

    return (
        <Card {...otherProps} tabIndex={0} className={classNames(otherProps.className, styles.view)}>
            {hasHeader && (
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <h4 className={styles.title}>{title}</h4>

                        <div className={styles.action}>{actions}</div>
                    </div>

                    <div className={styles.subtitle}>{subtitle}</div>
                </header>
            )}

            {children}
        </Card>
    )
}

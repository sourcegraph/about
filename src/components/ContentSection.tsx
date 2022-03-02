import React, { FunctionComponent } from 'react'

const COLORS = {
    none: '',
    white: 'bg-white text-dark',
    black: 'bg-black text-light',
    gray: 'bg-dark text-light',
    purple: 'bg-purple text-light',
    primary: 'bg-primary text-light',
    pink: 'bg-pink text-dark',
    'light-orange': 'bg-light-orange text-dark',
    orange: 'bg-orange text-light',
}

interface Props {
    id?: string
    color?: keyof typeof COLORS
    className?: string
    children: React.ReactNode
}

export const ContentSection: FunctionComponent<Props> = ({
    id = '',
    color = 'none',
    className = '',
    children,
}): JSX.Element => (
    <div id={id} className={COLORS[color]}>
        <section className={`content-section container ${className}`}>{children}</section>
    </div>
)

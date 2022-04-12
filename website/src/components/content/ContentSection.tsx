import React from 'react'

const COLORS = {
    none: '',
    white: 'bg-white text-dark',
    black: 'bg-black text-light',
    gray: 'bg-dark text-light',
    purple: 'bg-vivid-violet text-light',
    primary: 'bg-primary text-light',
    pink: 'bg-pink text-dark',
    'light-orange': 'bg-light-orange text-dark',
    orange: 'bg-orange text-light',
}

export const ContentSection: React.FunctionComponent<{
    id?: string
    color?: keyof typeof COLORS
    className?: string
    children: React.ReactNode
}> = ({ id = '', color = 'none', className = '', children }) => (
    <div id={id} className={COLORS[color]}>
        <section className={`content-section container ${className}`}>{children}</section>
    </div>
)

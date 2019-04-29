import React from 'react'

const COLORS = {
    white: 'bg-white text-dark',
    black: 'bg-black text-light',
    gray: 'bg-dark text-light',
    purple: 'bg-purple text-light',
    primary: 'bg-primary text-light',
}

export const ContentSection: React.FunctionComponent<{
    color?: keyof typeof COLORS
    className?: string
    children: React.ReactNode
}> = ({ color = 'black', className = '', children }) => (
    <div className={COLORS[color]}>
        <section className={`content-section container ${className}`}>{children}</section>
    </div>
)

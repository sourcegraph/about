import React from 'react'

const COLORS = {
    dark: 'bg-dark text-light',
}

export const Jumbotron: React.FunctionComponent<{
    className?: string
    color?: keyof typeof COLORS
    logomark?: boolean
    title: string
    description?: string
    children: React.ReactNode
}> = ({ className = '', color = 'dark', title, description, children }) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center">
            <img style={{ width: '32px', height: '32px' }} src="/sourcegraph/sourcegraph-mark.svg" />
            <h1>{title}</h1>
            {description && <p className="mb-4">{description}</p>}
            {children}
        </div>
    </div>
)

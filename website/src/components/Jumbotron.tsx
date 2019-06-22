import React from 'react'

export const COLORS = {
    dark: 'bg-black text-light',
    purple: 'bg-purple text-light',
}

export const Jumbotron: React.FunctionComponent<{
    className?: string
    color?: keyof typeof COLORS
    logomark?: boolean
    title: string
    titleClassName?: string
    description?: string
    children: React.ReactNode
}> = ({
    className = '',
    color = 'dark',
    logomark = true,
    title,
    titleClassName = 'display-3',
    description,
    children,
}) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-6 pb-5">
            {logomark && (
                <img
                    className="mb-1"
                    // tslint:disable-next-line: jsx-ban-props
                    style={{ width: '2rem', height: '2rem' }}
                    src="/sourcegraph/sourcegraph-mark.svg"
                />
            )}
            <h1 className={titleClassName}>{title}</h1>
            {description && <p className="mb-4">{description}</p>}
            {children}
        </div>
    </div>
)

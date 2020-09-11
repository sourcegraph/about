import React from 'react'

export const COLORS = {
    white: '',
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
    color = 'white',
    logomark = true,
    title,
    titleClassName = 'display-3 font-weight-bold',
    description,
    children,
}) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-4 pb-5">
            {logomark && (
                <img
                    className="jumbotron__logo mb-1"
                    // tslint:disable-next-line: jsx-ban-props
                    style={{ width: '2rem', height: '2rem' }}
                    src="/sourcegraph/sourcegraph-mark.svg"
                    aria-hidden="true"
                />
            )}
            <h1 className={titleClassName}>{title}</h1>
            {description && <p>{description}</p>}
            {children}
        </div>
    </div>
)

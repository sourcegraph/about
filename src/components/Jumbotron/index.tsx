import { FunctionComponent } from 'react'

import styles from './jumbotron.module.scss'

export const COLORS = {
    white: '',
    dark: 'bg-black text-light',
    purple: 'bg-vivid-violet text-light',
}

interface Props {
    className?: string
    color?: keyof typeof COLORS
    logomark?: boolean
    title: string
    titleClassName?: string
    description?: string
    children: React.ReactNode
}

export const Jumbotron: FunctionComponent<Props> = ({
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
                    className={`jumbotron__logo mb-1 ${styles.logo}`}
                    src="/sourcegraph/sourcegraph-mark.svg"
                    aria-hidden="true"
                    alt="Sourcegraph mark"
                />
            )}
            <h1 className={titleClassName}>{title}</h1>
            {description && <p>{description}</p>}
            {children}
        </div>
    </div>
)

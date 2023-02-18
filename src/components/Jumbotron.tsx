import { FunctionComponent } from 'react'

export const COLORS = {
    white: '',
    dark: 'bg-black text-white',
    purple: 'bg-violet-400 text-white',
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
    titleClassName = '',
    description,
    children,
}) => (
    <div className={`jumbotron rounded-none ${COLORS[color]} ${className}`}>
        <div className="mx-auto container text-center pt-6 pb-8">
            {logomark && (
                <img
                    className="mb-1 w-8 h-8 mx-auto"
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

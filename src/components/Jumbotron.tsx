import { FunctionComponent } from 'react'

export const COLORS = {
    white: '',
    dark: 'tw-bg-black tw-text-white',
    purple: 'tw-bg-violet-400 tw-text-white',
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
    <div className={`jumbotron tw-rounded-none ${COLORS[color]} ${className}`}>
        <div className="tw-mx-auto tw-container tw-text-center tw-pt-6 tw-pb-8">
            {logomark && (
                <img
                    className="tw-mb-1 tw-w-8 tw-h-8 tw-mx-auto"
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

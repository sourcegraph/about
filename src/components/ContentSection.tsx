import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

// TODO: Replace this with our Background component for variants
const COLORS = {
    none: '',
    white: 'tw-bg-white text-dark',
    black: 'tw-bg-black tw-text-white',
    gray: 'tw-bg-gray-500 tw-text-white',
}

interface Props {
    id?: string
    color?: keyof typeof COLORS
    parentClassName?: string
    className?: string
    children: ReactNode
}

export const ContentSection: FunctionComponent<Props> = ({
    id = '',
    color = 'none',
    parentClassName,
    className = '',
    children,
}) => (
    <div id={id} className={classNames('tw-px-sm tw-py-3xl md:tw-py-5xl', COLORS[color], parentClassName)}>
        <section className={`tw-max-w-screen-xl tw-mx-auto ${className}`}>{children}</section>
    </div>
)

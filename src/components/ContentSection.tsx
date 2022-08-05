import { FunctionComponent, ReactNode } from 'react'

const COLORS = {
    none: '',
    white: 'tw-bg-white text-dark',
    black: 'tw-bg-black tw-text-white',
    gray: 'tw-bg-gray-500 tw-text-white',
    purple: 'tw-bg-violet-400 tw-text-white',
    primary: 'tw-bg-blurple-400 tw-text-white',
}

interface Props {
    id?: string
    color?: keyof typeof COLORS
    className?: string
    children: ReactNode
}

export const ContentSection: FunctionComponent<Props> = ({ id = '', color = 'none', className = '', children }) => (
    <div id={id} className={COLORS[color]}>
        <section className={`container ${className}`}>{children}</section>
    </div>
)

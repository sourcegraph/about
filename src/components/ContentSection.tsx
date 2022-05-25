import { FunctionComponent, ReactNode } from 'react'

const COLORS = {
    none: '',
    white: 'bg-white text-dark',
    black: 'bg-black text-light',
    gray: 'bg-dark text-light',
    purple: 'bg-vivid-violet text-light',
    primary: 'bg-primary text-light',
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

import { ReactNode } from 'react'

export interface CardProps {
    children: ReactNode | string
    title: string
    icon?: JSX.Element
}

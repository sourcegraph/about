import { FunctionComponent } from 'react'

import { BackButton } from '..'
import { COLORS } from '../Jumbotron'

interface Props {
    customer: string
    logo?: string
    className?: string
    color?: keyof typeof COLORS
    children?: React.ReactNode
}

export const CaseStudyJumbotron: FunctionComponent<Props> = ({
    customer,
    logo,
    className = '',
    color = 'dark',
    children,
}) => (
    <div className={`jumbotron ${COLORS[color]} ${className}`}>
        <div className="container mx-auto pt-8 sm:pl-0">
            <BackButton href="/case-studies" text="Case Studies" light={color === 'dark'} />
        </div>
        <div className="container mx-auto py-4 text-center">
            {logo && <img className="my-3 mx-auto max-h-12" src={logo} alt={customer} />}
            {children}
        </div>
    </div>
)

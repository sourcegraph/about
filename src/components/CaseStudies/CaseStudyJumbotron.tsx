import { FunctionComponent } from 'react'

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
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-3 pb-3">
            {logo && <img className="case-studies__logo my-3" src={logo} alt={customer} />}
            <span className="case-studies__label d-block mt-1">
                <span className="sr-only">{customer}</span> case study
            </span>
            {children}
        </div>
    </div>
)

import { FunctionComponent } from 'react'

import { BackButtonBold, BackButtonLight } from '@components'

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
        <div className="pl-lg-7 pl-sm-0 pt-5 container">
            {color === 'dark' ? (
                <BackButtonLight href="/case-studies" text="Case Studies" />
            ) : (
                <BackButtonBold href="/case-studies" text="Case Studies" />
            )}
        </div>
        <div className="container text-center pt-3 pb-3">
            {logo && <img className="case-studies__logo my-3" src={logo} alt={customer} />}
            <h5 className="font-weight-bold mt-1">
                <span className="sr-only">{customer}</span> Case Study
            </h5>
            {children}
        </div>
    </div>
)

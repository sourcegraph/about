import { FunctionComponent } from 'react'

import { BackButtonBold, BackButton, BackButtonLight } from '@components'

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
        <div className="container text-center py-3">
            {logo && <img className="case-studies__logo my-3" src={logo} alt={customer} />}
            {children}
        </div>
    </div>
)

export const NewCaseStudyJumbotron: FunctionComponent<Props> = ({ children }) => (
    // eslint-disable-next-line react/forbid-dom-props
    <div className="py-7 bg-cover" style={{ backgroundImage: 'url(/bg-images/bg-code-venus.png)' }}>
        <div className="container">
            <BackButton href="/case-studies" text="Case Studies" />
            {children}
        </div>
    </div>
)

import { FunctionComponent } from 'react'

import { BackButton } from '@components'

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
        <div className="pl-sm-0 pt-5 container">
            <BackButton href="/case-studies" text="Case Studies" light={color === 'dark'} />
        </div>
        <div className="container text-center py-3">
            {logo && <img className="tw-max-h-12 tw-my-3 tw-mx-auto" src={logo} alt={customer} />}
            {children}
        </div>
    </div>
)

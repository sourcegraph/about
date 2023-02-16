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
        <div className="tw-container tw-mx-auto tw-pt-md sm:tw-pl-0">
            <BackButton href="/case-studies" text="Case Studies" light={color === 'dark'} />
        </div>
        <div className="tw-container tw-mx-auto tw-py-4 tw-text-center">
            {logo && <img className="tw-max-h-12 tw-my-3 tw-mx-auto" src={logo} alt={customer} />}
            {children}
        </div>
    </div>
)

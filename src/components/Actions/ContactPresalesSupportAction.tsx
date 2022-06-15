import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Icon } from '@components'

interface Props {
    className?: string
}

export const ContactPresalesSupportAction: FunctionComponent<Props> = ({ className = '' }) => (
    <Link href="/demo" passHref={true}>
        <a href="#none" className={`d-flex align-items-center text-decoration-none ${className}`}>
            Talk to a product specialist
            <Icon name="ArrowForwardSharp" size={18} className="text-primary ml-1" />
        </a>
    </Link>
)

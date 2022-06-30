import { FunctionComponent } from 'react'

import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import Link from 'next/link'

interface ContactPresalesSupportActionProps {
    className?: string
}

export const ContactPresalesSupportAction: FunctionComponent<ContactPresalesSupportActionProps> = ({
    className = '',
}) => (
    <Link href="/demo" passHref={true}>
        <a href="#none" className={`d-flex align-items-center text-decoration-none ${className}`}>
            Talk to a product specialist
            <ArrowRightBoxIcon className="text-primary ml-1" />
        </a>
    </Link>
)

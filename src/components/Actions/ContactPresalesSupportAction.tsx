import { FunctionComponent } from 'react'

import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import Link from 'next/link'

interface Props {
    className?: string
}

export const ContactPresalesSupportAction: FunctionComponent<Props> = ({ className = '' }) => (
    <Link href="/contact/product-specialist" passHref={true}>
        <a href="#none" className={`d-flex align-items-center text-decoration-none ${className}`}>
            Talk to a product specialist
            <ArrowRightBoxIcon className="text-primary ml-1" />
        </a>
    </Link>
)

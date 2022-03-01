import Link from 'next/link'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import React from 'react'

export const ContactPresalesSupportAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <Link className={`d-flex align-items-center text-decoration-none ${className}`} to="/contact/product-specialist">
        Talk to a product specialist
        <ArrowRightBoxIcon className="text-primary ml-1" />
    </Link>
)

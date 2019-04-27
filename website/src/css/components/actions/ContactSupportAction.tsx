import { Link } from 'gatsby'
import React from 'react'

export const ContactSupportAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <Link className={`d-block ${className}`} to="/contact">
        Questions? Talk to a product specialist.
    </Link>
)

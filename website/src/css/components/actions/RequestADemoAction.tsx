import { Link } from 'gatsby'
import React from 'react'

export const RequestADemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <Link className={`btn btn-primary ${className}`} to="/contact/sales">
        Request a demo
    </Link>
)

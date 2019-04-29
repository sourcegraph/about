import { Link } from 'gatsby'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import React from 'react'

export const ContactPresalesSupportAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <Link className={`d-flex align-items-center text-decoration-none ${className}`} to="/contact/sales">
        Talk to a product specialist and start trial {/* TODO(sqs): will remove 'and start trial' */}
        <ArrowRightBoxIcon className="text-primary ml-1" />
    </Link>
)

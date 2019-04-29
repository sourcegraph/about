import { Link } from 'gatsby'
import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

// TODO(sqs): remove d-none when this works
export const GetStartedAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <Link className={`btn btn-primary ${className}`} to="/contact/sales">
        Get started
    </Link>
    // <SubmitEmailForm buttonText="Get started" className={`${className} d-none`} />
)

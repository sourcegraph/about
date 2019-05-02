import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

export const RequestDemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm formAction="/contact/request-demo" buttonText="Request a demo" className={className} />
)

import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

export const GetStartedAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm formAction="/contact/request-demo" buttonText="Get started" className={className} />
)

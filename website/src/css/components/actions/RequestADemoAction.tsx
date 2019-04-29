import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

export const RequestADemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm buttonText="Request a demo" className={className} />
)

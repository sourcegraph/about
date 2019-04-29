import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

// TODO(sqs): remove d-none when this works
export const GetStartedAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm buttonText="Get started" className={`${className} d-none`} />
)

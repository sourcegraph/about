import { FunctionComponent } from 'react'

import { SubmitEmailForm } from './SubmitEmailForm'

interface Props {
    className?: string
    buttonText?: string
}

export const RequestDemoAction: FunctionComponent<Props> = ({ className = '', buttonText = 'Request a demo' }) => (
    <SubmitEmailForm formAction="/contact/request-demo" buttonText={buttonText} className={className} />
)

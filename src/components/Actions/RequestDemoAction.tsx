import { FunctionComponent } from 'react'

import { SubmitEmailForm } from './SubmitEmailForm'

interface RequestDemoActionProps {
    className?: string
    buttonText?: string
}

export const RequestDemoAction: FunctionComponent<RequestDemoActionProps> = ({
    className = '',
    buttonText = 'Request a demo',
}) => <SubmitEmailForm formAction="/contact/request-demo" buttonText={buttonText} className={className} />

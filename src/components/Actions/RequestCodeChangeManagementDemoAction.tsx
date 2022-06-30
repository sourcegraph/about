import { FunctionComponent } from 'react'

import { SubmitEmailForm } from './SubmitEmailForm'

interface RequestCodeChangeManagementDemoActionProps {
    className?: string
    now?: boolean
}

export const RequestCodeChangeManagementDemoAction: FunctionComponent<RequestCodeChangeManagementDemoActionProps> = ({
    className = '',
    now = false,
}): JSX.Element => {
    const EmailForm = (
        <SubmitEmailForm
            formAction="/contact/request-code-change-management-demo"
            buttonText="Request a demo"
            className={now ? 'mt-4' : className}
        />
    )

    if (!now) {
        return EmailForm
    }

    return (
        <div className="request-code-change-management-demo-now d-flex justify-content-center w-100 pt-2 mb-3">
            <div className="submit-form-container flex-0 rounded rounded-lg py-4 px-6">{EmailForm}</div>
        </div>
    )
}

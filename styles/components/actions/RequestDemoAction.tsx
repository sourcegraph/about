import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

export const RequestDemoAction: React.FunctionComponent<{ className?: string; buttonText?: string }> = ({
    className = '',
    buttonText = 'Request a demo',
}) => <SubmitEmailForm formAction="/contact/request-demo" buttonText={buttonText} className={className} />

export const RequestCodeChangeManagementDemoAction: React.FunctionComponent<{ className?: string }> = ({
    className = '',
}) => (
    <SubmitEmailForm
        formAction="/contact/request-code-change-management-demo"
        buttonText="Request a demo"
        className={className}
    />
)

export const RequestCodeChangeManagementDemoActionNow: React.FunctionComponent<any> = () => (
    <div className="request-code-change-management-demo-now d-flex justify-content-center w-100 pt-2 mb-3">
        <div className="submit-form-container flex-0 rounded rounded-lg py-4 px-6">
            <SubmitEmailForm
                formAction="/contact/request-code-change-management-demo"
                buttonText="Request a demo"
                className="mt-4"
            />
        </div>
    </div>
)

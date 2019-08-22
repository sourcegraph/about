import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

export const RequestDemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm formAction="/contact/request-demo" buttonText="Request a demo" className={className} />
)

export const RequestAutomationDemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm formAction="/contact/request-automation-demo" buttonText="Request a demo" className={className} />
)

export const RequestAutomationDemoActionNow: React.FunctionComponent<any> = () => (
    <div className="request-automation-demo-now d-flex justify-content-center w-100 pt-2 mb-3">
        <div className="submit-form-container flex-0 rounded rounded-lg py-4 px-6">
            <SubmitEmailForm
                formAction="/contact/request-automation-demo"
                buttonText="Request a demo"
                className="mt-4"
            />
        </div>
    </div>
)

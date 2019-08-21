import React from 'react'
import { SubmitEmailForm } from './SubmitEmailForm'

export const RequestDemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm formAction="/contact/request-demo" buttonText="Request a demo" className={className} />
)

export const RequestAutomationDemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <SubmitEmailForm formAction="/contact/request-automation-demo" buttonText="Request a demo" className={className} />
)

export const RequestAutomationDemoActionNow: React.FunctionComponent<any> = () => (
    <div className="d-flex justify-content-center w-100 pt-2 mb-3">
        <div
            className="flex-0 rounded rounded-lg py-4 px-6"
            style={{
                backgroundColor: 'rgba(0,0,0,1)',
                boxShadow: 'rgba(255,255,255,0.3) 0 0 30px 20px',
            }}
        >
            <SubmitEmailForm
                formAction="/contact/request-automation-demo"
                buttonText="Request a demo"
                className="mt-4"
            />
        </div>
    </div>
)

import React from 'react'
import { eventLogger } from '../../../EventLogger'

export const SubmitEmailForm: React.FunctionComponent<{
    formAction: string
    buttonText: string
    className?: string
}> = ({ formAction, buttonText, className = '' }) => (
    <div>
        <form
            className={`form form-inline ${className}`}
            action={formAction}
            method="get"
            onSubmit={() => {
                eventLogger.trackRequestDemoActionFormSubmitted()
            }}
        >
            <input
                className="form-control mr-md-2 mb-2"
                type="email"
                name="email"
                placeholder="Enter work email"
                size={27}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                autoComplete="email"
            />
            <button type="submit" role="button" className="btn btn-primary mb-2">
                {buttonText}
            </button>
        </form>
    </div>
)
